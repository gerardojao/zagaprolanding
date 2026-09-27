import React from "react";
import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import {
  findSalesAgentAnswer,
  salesAgentFallbackAnswer,
} from "../shared/sales-agent-knowledge";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputBody,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/components/ai-elements/prompt-input";
import "./chat-tailwind.css";
import "./sales-agent.css";

const welcomeMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hola, soy **Zaga**, la asesora virtual comercial de ZagaPro. Puedo orientarte sobre los planes y conocer un poco tu taller para preparar una demo útil. ¿Qué te gustaría resolver o mejorar?",
};

const suggestions = [
  "¿Cuánto cuestan los planes?",
  "Necesito fotos y firma en recepción",
  "Quiero solicitar una demo",
];

const whatsappHref = `https://wa.me/34624728398?text=${encodeURIComponent(
  "Hola, vengo del chat de Zaga y prefiero continuar la conversación por WhatsApp.",
)}`;

function localReply(text, messages) {
  const value = text.toLowerCase();
  const previousAssistant = [...messages]
    .reverse()
    .find((message) => message.role === "assistant")?.content.toLowerCase() || "";

  const approvedAnswer = findSalesAgentAnswer(value);
  if (approvedAnswer) return approvedAnswer;
  if (previousAssistant.includes("¿cómo te llamas")) {
    return `Encantado, ${text.trim().split(/\s+/)[0]}. ¿Cómo se llama tu taller?`;
  }
  if (previousAssistant.includes("¿cómo se llama tu taller")) {
    return "Gracias. ¿Qué medio de contacto prefieres dejar: teléfono o correo electrónico?";
  }
  if (previousAssistant.includes("medio de contacto")) {
    return "Perfecto. ¿Qué te gustaría ver principalmente en la demo: órdenes, facturación, fotos y firma, compras o rentabilidad?";
  }
  if (previousAssistant.includes("principalmente en la demo")) {
    return "Ya tengo el contexto básico. En este **modo local de prueba** no enviaré tus datos; cuando conectemos la clave del agente podrás confirmar el envío al equipo de ZagaPro. También puedes solicitarla en zagapro.es o llamar al +34 624 728 398.";
  }
  if (/papel|excel|whatsapp|orden|factur|cobro|compra|rentabilidad|stock|inventario/.test(value)) {
    return "ZagaPro puede conectar ese proceso con clientes, vehículos y el resto de la gestión para evitar información dispersa. ¿Cuántas personas trabajan aproximadamente en el taller?";
  }
  if (/[¿?]/.test(text)) {
    return salesAgentFallbackAnswer;
  }
  return salesAgentFallbackAnswer;
}

function shouldOfferAdvisor(content) {
  return /asesor comercial|gerardo|confirmarte por escrito|confirmar.*antes de contratar/i.test(
    content,
  );
}

function openAdvisorContact() {
  if (window.parent !== window) {
    window.parent.postMessage(
      { type: "zagapro:open-advisor-contact" },
      window.location.origin,
    );
    return;
  }
  window.location.href = "/?contacto=asesor#contacto";
}

export default function SalesAgentPage() {
  const embedded = new URLSearchParams(window.location.search).has("embed");
  const [messages, setMessages] = React.useState([welcomeMessage]);
  const [status, setStatus] = React.useState("ready");
  const [mode, setMode] = React.useState("Prueba local");

  React.useEffect(() => {
    document.title = "Zaga | Asesora virtual de ZagaPro";
    let robots = document.head.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = "noindex,nofollow,noarchive";
  }, []);

  const send = async (text) => {
    const cleanText = text.trim();
    if (!cleanText || status === "submitted") return;

    const userMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: cleanText,
    };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setStatus("submitted");

    try {
      const response = await fetch("/api/sales-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.slice(-14).map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });
      const contentType = response.headers.get("content-type") || "";
      if (!response.ok || !contentType.includes("application/json")) {
        throw new Error("Backend no disponible en el servidor Vite local");
      }
      const data = await response.json();
      setMode(
        data.mode === "ai"
          ? "IA conectada"
          : data.mode === "knowledge"
            ? "Base comercial"
            : "Prueba local",
      );
      setMessages((current) => [
        ...current,
        { id: `assistant-${Date.now()}`, role: "assistant", content: data.reply },
      ]);
    } catch {
      window.setTimeout(() => {
        setMode("Prueba local");
        setMessages((current) => [
          ...current,
          {
            id: `assistant-${Date.now()}`,
            role: "assistant",
            content: localReply(cleanText, nextMessages),
          },
        ]);
      }, 420);
    } finally {
      window.setTimeout(() => setStatus("ready"), 430);
    }
  };

  return (
    <main className={`sales-agent-page ${embedded ? "is-embedded" : ""}`}>
      <div className="sales-agent-shell">
        <aside className="sales-agent-aside">
          <img className="sales-agent-brand" src="/logozagapro.png" alt="ZagaPro" />
          
          <h1>Una conversación comercial, no un formulario.</h1>
          <p>
            Zaga conoce los planes vigentes, cualifica el taller con una
            pregunta cada vez y propone una demo personalizada.
          </p>
          <ul className="sales-agent-scope">
            <li><CheckCircle2 size={17} /> Sin descuentos inventados</li>
            <li><CheckCircle2 size={17} /> Fotos y firma desde Pro</li>
            <li><CheckCircle2 size={17} /> Demo de 20–30 minutos</li>
          </ul>
          <a className="sales-agent-back" href="/"><ArrowLeft size={17} /> Volver a la web</a>
        </aside>

        <section className="sales-agent-chat" aria-label="Chat comercial de ZagaPro">
          <header className="sales-agent-chat-header">
            <div className="sales-agent-identity">
              <span className="sales-agent-avatar" aria-hidden="true">
                <img src="/logozagapro.png" alt="" />
              </span>
              <div>
                <strong>Zaga</strong>
                <span>Asesora virtual comercial · Orientación inicial</span>
              </div>
            </div>
            <span className="sales-agent-mode">{mode}</span>
          </header>

          <Conversation className="sales-agent-conversation">
            <ConversationContent className="sales-agent-messages">
              {messages.map((message) => (
                <Message
                  className={`sales-agent-message-${message.role}`}
                  from={message.role}
                  key={message.id}
                >
                  <MessageContent data-message-content>
                    <MessageResponse>{message.content}</MessageResponse>
                  </MessageContent>
                  {message.role === "assistant" && shouldOfferAdvisor(message.content) && (
                    <button
                      className="sales-agent-advisor-button"
                      type="button"
                      onClick={openAdvisorContact}
                    >
                      Hablar con un asesor comercial
                    </button>
                  )}
                </Message>
              ))}
              {status === "submitted" && (
                <Message from="assistant">
                  <MessageContent data-message-content>Revisando tu caso…</MessageContent>
                </Message>
              )}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>

          {messages.length === 1 && (
            <div className="sales-agent-suggestions">
              {suggestions.map((suggestion) => (
                <button type="button" key={suggestion} onClick={() => send(suggestion)}>
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          <div className="sales-agent-composer">
            <PromptInput className="sales-agent-prompt" onSubmit={({ text }) => send(text)}>
              <PromptInputBody>
                <PromptInputTextarea name="message" placeholder="Cuéntame qué necesitas en tu taller…" />
              </PromptInputBody>
              <PromptInputFooter>
                <span />
                <PromptInputSubmit status={status} />
              </PromptInputFooter>
            </PromptInput>
            <p className="sales-agent-note">
              No introduzcas datos sensibles. Zaga puede equivocarse;
              las condiciones se confirman con el equipo de ZagaPro.
            </p>
            <a
              className="sales-agent-whatsapp"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} aria-hidden="true" />
              <span>¿Prefieres hablar por WhatsApp?</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
