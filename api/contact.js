const DEFAULT_TO_EMAIL = "zagaprosystem@gmail.com";
const DEFAULT_FROM_EMAIL = "no-reply@zagapro.store";

function clean(value) {
  return String(value || "").trim();
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value) {
  return clean(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function readBody(req) {
  if (typeof req.body !== "string") return req.body || {};

  try {
    return JSON.parse(req.body || "{}");
  } catch {
    return null;
  }
}

function contactHtml(data) {
  return `
    <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif;line-height:1.55;color:#102033">
      <h2>Nueva consulta desde la landing ZagaPro</h2>
      <p><b>Nombre:</b> ${escapeHtml(data.name)}</p>
      <p><b>Empresa o negocio:</b> ${escapeHtml(data.company)}</p>
      <p><b>Email:</b> ${escapeHtml(data.email)}</p>
      <p><b>Teléfono:</b> ${escapeHtml(data.phone)}</p>
      <p><b>Tipo de negocio:</b> ${escapeHtml(data.businessType)}</p>
      <p><b>Mensaje:</b></p>
      <p style="white-space:pre-line">${escapeHtml(data.message)}</p>
      <p style="color:#64748b;font-size:12px">Enviado desde el formulario público de ZagaPro.</p>
    </div>
  `;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ message: "Falta configurar RESEND_API_KEY." });
  }

  const body = readBody(req);
  if (body == null) {
    return res.status(400).json({ message: "JSON inválido." });
  }
  if (clean(body.website)) {
    return res.status(200).json({ ok: true });
  }

  const payload = {
    name: clean(body.name),
    company: clean(body.company),
    email: clean(body.email),
    phone: clean(body.phone),
    businessType: clean(body.businessType),
    message: clean(body.message),
  };

  if (!payload.name || !payload.company || !payload.email || !payload.businessType || !payload.message) {
    return res.status(400).json({ message: "Completa los campos requeridos." });
  }

  if (!isValidEmail(payload.email)) {
    return res.status(400).json({ message: "El email no es válido." });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM_EMAIL;

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `ZagaPro <${fromEmail}>`,
        to: [toEmail],
        reply_to: payload.email,
        subject: `Contacto ZagaPro - ${payload.company}`,
        html: contactHtml(payload),
      }),
    });

    if (!resendResponse.ok) {
      const error = await resendResponse.json().catch(() => ({}));
      return res.status(502).json({
        message: error?.message || "No se pudo enviar el mensaje.",
      });
    }

    return res.status(200).json({ ok: true, message: "Mensaje enviado correctamente." });
  } catch {
    return res.status(502).json({ message: "No se pudo conectar con el servicio de correo." });
  }
}
