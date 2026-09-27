import { ToolLoopAgent, convertToModelMessages, isStepCount, tool } from "ai";
import { z } from "zod";
import {
  findSalesAgentAnswer,
  salesAgentFallbackAnswer,
} from "../shared/sales-agent-knowledge.js";

const MODEL = "openai/gpt-6-luna";
const TO_EMAIL = "zagaprosystem@gmail.com";
const FROM_EMAIL = "no-reply@zagapro.store";

const instructions = `
Eres Zagui, la asesora virtual comercial de ZagaPro, software de gestión para talleres mecánicos en España.
Preséntate siempre como Zagui y utiliza el femenino cuando hables de ti misma. Deja claro que eres una asesora virtual, no una persona.
Habla en español claro, cordial y de tú. Responde brevemente y haz una sola pregunta cada vez.
Tu objetivo es entender el taller, orientar provisionalmente sobre un plan y proponer una demo personalizada de 20 a 30 minutos.

REGLAS OBLIGATORIAS
- No inventes funciones, descuentos, integraciones, fechas, ahorros ni condiciones.
- No negocies precios, no cobres y no formalices contrataciones.
- No prometas un plan definitivo: debe confirmarse durante la demo.
- Si falta un dato, indica que Gerardo, del equipo de ZagaPro, lo confirmará.
- La prueba dura siete días, pero requiere solicitud y activación manual del equipo después de la demo.
- VeriFactu no está incluido actualmente. La integración se negocia con un tercero, tendría coste adicional y no hay alcance, fecha ni precio confirmados.
- Fotos y firma de recepción se ofrecen desde Pro. No están incluidas en Básico. Premium las incluye al contener todo lo de Pro.
- ZagaPro funciona desde el navegador. El cliente no instala el programa por su cuenta; el equipo configura el acceso y acompaña la puesta en marcha.
- Para registrar una demo, reúne nombre, taller, un medio de contacto y lo que desea ver. Pide confirmación expresa antes de usar la herramienta registrarDemo.
- Solo confirma que la solicitud se registró si la herramienta devuelve ok: true.
- Si no existe una respuesta comercial aprobada, no improvises ni hagas otra pregunta de cualificación. Responde exactamente: "No tengo una respuesta confirmada para esta pregunta. ¿Quieres que te ponga en contacto con un asesor comercial real?"

PLANES VIGENTES, PRECIOS SIN IMPUESTOS
- Básico: implantación 599 EUR y 129 EUR/mes. Clientes y vehículos, órdenes, presupuestos, facturación, cobros y rentabilidad por trabajo. Sin fotos ni firma de recepción.
- Pro: implantación 899 EUR y 179 EUR/mes. Todo lo anterior, fotos y firma de recepción, albaranes, proveedores, inventario y soporte prioritario.
- Premium: implantación 1.490 EUR y 229 EUR/mes. Todo Pro, facturas recibidas e IVA, balance y mayor, compras avanzadas y cuentas por pagar.

Empieza preguntando qué desea resolver o mejorar. Para cualificar, averigua solo lo necesario: tipo de taller, personas, gestión actual de órdenes/facturación, dificultad principal y si quiere una demo. No repitas datos ya dados.
`;

function clean(value) {
  return String(value || "").trim().slice(0, 1000);
}

function escapeHtml(value) {
  return clean(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const registerDemo = tool({
  description:
    "Registra por correo una solicitud de demo solo después de que el visitante haya dado sus datos y confirmado expresamente el envío.",
  inputSchema: z.object({
    name: z.string().min(2).max(100),
    workshop: z.string().min(2).max(150),
    contact: z.string().min(5).max(200),
    demoFocus: z.string().min(2).max(500),
  }),
  execute: async ({ name, workshop, contact, demoFocus }) => {
    if (!process.env.RESEND_API_KEY) {
      return { ok: false, message: "El envío de demos todavía no está configurado." };
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `ZagaPro <${process.env.CONTACT_FROM_EMAIL || FROM_EMAIL}>`,
        to: [process.env.CONTACT_TO_EMAIL || TO_EMAIL],
        subject: `Demo solicitada por el agente - ${clean(workshop)}`,
        html: `<div style="font-family:Arial,sans-serif;line-height:1.55;color:#10251f">
          <h2>Nueva demo desde el agente comercial</h2>
          <p><b>Nombre:</b> ${escapeHtml(name)}</p>
          <p><b>Taller:</b> ${escapeHtml(workshop)}</p>
          <p><b>Contacto:</b> ${escapeHtml(contact)}</p>
          <p><b>Quiere revisar:</b> ${escapeHtml(demoFocus)}</p>
          <p style="color:#68776f;font-size:12px">Solicitud confirmada en el chat privado de ZagaPro.</p>
        </div>`,
      }),
    });

    if (!response.ok) {
      return { ok: false, message: "No se pudo registrar la demo." };
    }
    return { ok: true, message: "Solicitud de demo registrada correctamente." };
  },
});

function mockReply(messages) {
  const text = clean(messages.at(-1)?.content);
  const approvedAnswer = findSalesAgentAnswer(text);
  if (approvedAnswer) return approvedAnswer;
  if (/[¿?]/.test(text)) {
    return salesAgentFallbackAnswer;
  }
  return salesAgentFallbackAnswer;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido." });
  }

  const messages = Array.isArray(req.body?.messages) ? req.body.messages.slice(-14) : [];
  if (!messages.length) {
    return res.status(400).json({ message: "Falta la conversación." });
  }

  const safeMessages = messages
    .filter((message) => message?.role === "user" || message?.role === "assistant")
    .map((message) => ({ role: message.role, content: clean(message.content) }))
    .filter((message) => message.content);

  const approvedAnswer = findSalesAgentAnswer(safeMessages.at(-1)?.content);
  if (approvedAnswer) {
    return res.status(200).json({ reply: approvedAnswer, mode: "knowledge" });
  }

  if (!process.env.AI_GATEWAY_API_KEY && !process.env.VERCEL_OIDC_TOKEN) {
    return res.status(200).json({ reply: mockReply(safeMessages), mode: "local" });
  }

  try {
    const agent = new ToolLoopAgent({
      model: MODEL,
      instructions,
      tools: { registerDemo },
      stopWhen: isStepCount(4),
      maxOutputTokens: 500,
    });
    const result = await agent.generate({
      messages: await convertToModelMessages(
        safeMessages.map((message, index) => ({
          id: `message-${index}`,
          role: message.role,
          parts: [{ type: "text", text: message.content }],
        })),
      ),
    });
    return res.status(200).json({ reply: result.text, mode: "ai" });
  } catch (error) {
    console.error("Sales agent error", error);
    return res.status(200).json({ reply: mockReply(safeMessages), mode: "local" });
  }
}
