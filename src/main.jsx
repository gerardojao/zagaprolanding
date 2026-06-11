import React from "react";
import ReactDOM from "react-dom/client";
import {
  ArrowRight,
  BadgeEuro,
  BellRing,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Download,
  FileText,
  Gauge,
  HeartHandshake,
  Mail,
  MessageCircle,
  MessageSquareText,
  ReceiptText,
  ShieldCheck,
  UsersRound,
  Wrench,
} from "lucide-react";
import "./styles.css";

const whatsappNumber = "34624728398";

const emailTemplate = `Hola Gerardo,

Me gustaría solicitar una demo de ZagaPro para conocer cómo podría ayudar a mi negocio.

Datos de contacto:
- Nombre:
- Empresa o negocio:
- Teléfono:
- Email:
- Tipo de negocio:

Me interesa revisar especialmente:
- Gestión de clientes
- Órdenes de trabajo o servicio
- Presupuestos
- Facturación
- Alertas y seguimiento

Quedo atento/a para coordinar una llamada o demostración.

Saludos.`;

const whatsappTemplate = `Hola Gerardo, me gustaría solicitar una demo de ZagaPro.

Mi nombre es:
Negocio:
Tipo de servicio:

Me interesa conocer cómo ZagaPro puede ayudarme con clientes, órdenes, presupuestos, facturas y alertas.`;

const onboardingWhatsappTemplate = `Hola Gerardo, quiero solicitar la puesta en marcha de ZagaPro.

Mi nombre es:
Negocio:
Tipo de negocio:
Usuarios aproximados:

Quiero información sobre el Plan Empresa de 99,99 EUR/mes, el Pack Fidelización de 19,99 EUR/mes y la puesta en marcha inicial 349,99 EUR.`;

const audiences = [
  "Talleres automotrices",
  "Servicios técnicos",
  "Mantenimiento a domicilio",
  "Negocios que presupuestan y facturan",
  "Instaladores y profesionales independientes",
];

const features = [
  {
    icon: ClipboardList,
    title: "Órdenes y seguimiento",
    text: "Registra trabajos, estados, costes, clientes y equipos sin perder el historial.",
  },
  {
    icon: FileText,
    title: "Presupuestos claros",
    text: "Crea presupuestos profesionales, conviértelos en órdenes y mantén el control.",
  },
  {
    icon: ReceiptText,
    title: "Facturación conectada",
    text: "Factura desde órdenes o de forma directa, con series, importes e ingresos asociados.",
  },
  {
    icon: BellRing,
    title: "Alertas y llamadas",
    text: "Recuerda servicios, avisos a clientes y tareas que no deben quedarse pendientes.",
  },
  {
    icon: UsersRound,
    title: "Clientes organizados",
    text: "Consulta datos, teléfonos, direcciones, vehículos o equipos desde un mismo lugar.",
  },
  {
    icon: ShieldCheck,
    title: "Preparado para crecer",
    text: "Multi-negocio, roles por usuario y configuración adaptable a cada operación.",
  },
];

const benefits = [
  "Menos tiempo buscando información entre libretas, chats y hojas sueltas.",
  "Más claridad sobre trabajos pendientes, presupuestos aceptados e ingresos.",
  "Mejor imagen frente al cliente con documentos ordenados y consistentes.",
  "Base escalable para incorporar nuevas áreas del negocio sin empezar de cero.",
];

const addOnModules = [
  {
    icon: BellRing,
    title: "Seguimiento Inteligente",
    text: "ZagaPro identifica qué clientes necesitan seguimiento y prepara el contenido del mensaje y el contacto por WhatsApp en segundos.",
    activation: "69,99 €",
    monthly: "14,99 €/mes",
  },
  {
    icon: Download,
    title: "Pack Facturas Gestoría",
    text: "Descargue las facturas de un período en un solo archivo, organizado y listo para enviar a su gestoría o conservar como respaldo administrativo.",
    activation: "49,99 €",
    monthly: "9,99 €/mes",
  },
  {
    icon: HeartHandshake,
    title: "Pack Fidelización",
    text: "Recupera clientes y simplifica la administración mensual desde una única solución.",
    monthly: "19,99 €/mes",
    featured: true,
    badge: "Pack recomendado",
    msg: "Con que vuelva un solo cliente, el pack practicamente se paga solo.",
  },
];

const productSlides = [
  {
    title: "Panel principal",
    src: "/pantalla1.png",
    alt: "Panel principal de ZagaPro con indicadores y accesos de gestión.",
  },
  {
    title: "Vista operativa",
    src: "/Pantalla2.png",
    alt: "Vista operativa de ZagaPro para el control diario del negocio.",
  },
  {
    title: "Alertas de cliente",
    src: "/PantallaAlerta.png",
    alt: "Pantalla de alertas de cliente y seguimiento en ZagaPro.",
  },
  {
    title: "Órdenes de trabajo",
    src: "/GenerarOrdenes.png",
    alt: "Pantalla para generar órdenes de trabajo en ZagaPro.",
  },
  {
    title: "Emisión de facturas",
    src: "/Emision_reimpresion_de_facturas.png",
    alt: "Pantalla de emisión y reimpresión de facturas en ZagaPro.",
  },
  {
    title: "Reimpresión de facturas",
    src: "/ReimprimirFacturas.png",
    alt: "Pantalla para reimprimir facturas emitidas en ZagaPro.",
  },
  {
    title: "Rentabilidad de líneas",
    src: "/RentabilidadLineasFacturadas.png",
    alt: "Pantalla de rentabilidad de líneas facturadas en ZagaPro.",
  },
  {
    title: "Recuperación de contraseña",
    src: "/RecuperacionContraseñas.png",
    alt: "Pantalla de recuperación de contraseña de ZagaPro.",
  },
];
function App() {
  const demoWhatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappTemplate)}`;
  const onboardingWhatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(onboardingWhatsappTemplate)}`;
  const contactRef = React.useRef(null);
  const [contactVisible, setContactVisible] = React.useState(false);
  const [contactStatus, setContactStatus] = React.useState(null);
  const [contactSubmitting, setContactSubmitting] = React.useState(false);
  const [successModal, setSuccessModal] = React.useState(null);
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [expandedSlide, setExpandedSlide] = React.useState(null);
  const [contactForm, setContactForm] = React.useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
    website: "",
  });

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % productSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  React.useEffect(() => {
    if (!expandedSlide) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setExpandedSlide(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [expandedSlide]);

  const openContact = () => {
    setContactVisible(true);
    window.setTimeout(() => {
      contactRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  const updateContactField = (field) => (event) => {
    setContactForm((current) => ({ ...current, [field]: event.target.value }));
    setContactStatus(null);
  };

  const submitContact = async (event) => {
    event.preventDefault();
    if (contactSubmitting) return;

    try {
      setContactSubmitting(true);
      setContactStatus(null);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data?.message || "No se pudo enviar el mensaje.");
      }

      setSuccessModal({
        name: contactForm.name.trim(),
        text: `${contactForm.name.trim()}, tu correo ha sido enviado a ZagaPro. A la brevedad será atendida tu consulta.`,
      });
      setContactForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        businessType: "",
        message: "",
        website: "",
      });
    } catch (error) {
      setContactStatus({
        type: "error",
        text:
          error?.message || "No se pudo enviar el mensaje. Inténtalo de nuevo.",
      });
    } finally {
      setContactSubmitting(false);
    }
  };

  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="nav" aria-label="Navegación principal">
          <a className="brand" href="#inicio" aria-label="ZagaPro inicio">
            <img src="/logozagapro.png" alt="ZagaPro" />
          </a>
          <div className="nav-links">
            <a href="#sistema">Sistema</a>
            <a href="#para-quien">Para quién</a>
            <a href="#demo">Demo</a>
          </div>
          <button className="nav-cta" type="button" onClick={openContact}>
            <Mail size={17} />
            Contactar
          </button>
        </nav>

        <div className="hero-content">
          <div className="hero-copy-block">
            <p className="eyebrow">
              Gestión profesional para negocios que prestan servicios
            </p>
            <h1>ZagaPro</h1>
            <p className="hero-copy">
              Controla clientes, órdenes, presupuestos, facturas, ingresos y
              alertas desde una sola plataforma pensada para negocios que
              necesitan operar con más orden y mejor imagen.
            </p>
            <div className="hero-actions">
              <a
                className="primary-button"
                href={demoWhatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                Solicitar demo
                <ArrowRight size={18} />
              </a>
              <a className="secondary-button" href="#sistema">
                Ver cómo ayuda
              </a>
            </div>
          </div>
          <div
            className="product-showcase"
            aria-label="Capturas del producto ZagaPro"
          >
            <div className="showcase-frame">
              {productSlides.map((slide, index) => (
                <figure
                  className={`product-slide ${index === activeSlide ? "is-active" : ""}`}
                  key={slide.title}
                  aria-hidden={index !== activeSlide}
                >
                  <button
                    type="button"
                    className="slide-image-button"
                    onClick={() => setExpandedSlide(slide)}
                    aria-label={`Ampliar ${slide.title}`}
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </button>
                  <figcaption>{slide.title}</figcaption>
                </figure>
              ))}
            </div>

            <div className="showcase-controls" aria-label="Seleccionar captura">
              {productSlides.map((slide, index) => (
                <button
                  type="button"
                  key={slide.title}
                  className={index === activeSlide ? "is-active" : ""}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Ver ${slide.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="proof-band" aria-label="Indicadores del sistema">
        <div>
          <strong>360°</strong>
          <span>visión operativa</span>
        </div>
        <div>
          <strong>3</strong>
          <span>usuarios por negocio</span>
        </div>
        <div>
          <strong>Multi</strong>
          <span>sector y escalable</span>
        </div>
      </section>

      <section className="section split" id="sistema">
        <div>
          <p className="section-kicker">Qué hace</p>
          <h2>
            Une la operación diaria con la parte comercial y administrativa.
          </h2>
        </div>
        <p className="section-lead">
          ZagaPro ayuda a registrar lo que entra, lo que se trabaja, lo que se
          presupuesta, lo que se factura y lo que se cobra. La idea es simple:
          que el negocio tenga memoria, trazabilidad y datos útiles para
          decidir.
        </p>
      </section>

      <section className="feature-grid" aria-label="Funciones principales">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <article className="feature-card" key={feature.title}>
              <Icon size={24} />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          );
        })}
      </section>

      <section className="section audience" id="para-quien">
        <div className="audience-copy">
          <p className="section-kicker">Para quién es</p>
          <h2>
            Para negocios que necesitan pasar de resolver el día a controlar el
            negocio.
          </h2>
          <p>
            Funciona especialmente bien cuando hay clientes recurrentes,
            servicios pendientes, presupuestos que convertir, facturas por
            emitir y avisos que no se pueden olvidar.
          </p>
        </div>
        <div className="audience-list">
          {audiences.map((item) => (
            <div key={item}>
              <CheckCircle2 size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section impact">
        <div className="impact-panel">
          <Gauge size={28} />
          <h2>Cómo ayuda en el día a día</h2>
          <div className="benefits">
            {benefits.map((benefit) => (
              <p key={benefit}>{benefit}</p>
            ))}
          </div>
        </div>
        <div className="workflow" aria-label="Flujo de trabajo">
          <div>
            <CalendarCheck size={21} />
            Cliente
          </div>
          <div>
            <Wrench size={21} />
            Orden
          </div>
          <div>
            <MessageSquareText size={21} />
            Presupuesto
          </div>
          <div>
            <ReceiptText size={21} />
            Factura
          </div>
        </div>
      </section>

      <section className="pricing-section" id="planes">
        <div className="pricing-copy">
          <p className="section-kicker">Plan empresarial</p>
          <h2>Un precio claro para operar con ZagaPro desde el primer mes.</h2>
          <p>
            Pensado para negocios que quieren centralizar su gestión sin
            complicarse con herramientas dispersas.
          </p>
        </div>

        <article className="price-card">
          <div className="price-icon">
            <BadgeEuro size={28} />
          </div>
          <p className="price-label">Plan Empresa</p>
          <div className="price">
            <small className="price-prefix">Desde</small>
            <span>99€</span>
            <small>/mes</small>
          </div>
          <p className="setup-price">
            Puesta en marcha inicial: <strong>349,00 €</strong>
          </p>
          <ul>
            <li>Configuración inicial del negocio.</li>
            <li>Registro de nombre y datos comerciales.</li>
            <li>Clientes, órdenes, presupuestos y facturación.</li>
            <li>Ingresos, egresos, alertas y seguimiento.</li>
            <li>Hasta 3 usuarios por negocio.</li>
            <li>Acompañamiento inicial para empezar a usarlo.</li>
          </ul>
          <a
            className="primary-button"
            href={onboardingWhatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            Solicitar puesta en marcha
            <ArrowRight size={18} />
          </a>
        </article>
      </section>

      <section className="modules-section" aria-label="Módulos opcionales">
        <div className="modules-heading">
          <p className="section-kicker">Módulos adicionales</p>
          <h2>Potencia ZagaPro con herramientas de fidelización y gestión.</h2>
          <p>
            Añade herramientas para recuperar clientes, mantener el contacto y
            simplificar la gestión administrativa de tu negocio.
          </p>
        </div>

        <div className="modules-grid">
          {addOnModules.map((module) => {
            const Icon = module.icon;

            return (
              <article
                className={`module-card ${
                  module.featured ? "featured-module" : ""
                }`}
                key={module.title}
              >
                {module.badge && (
                  <span className="module-badge">{module.badge}</span>
                )}

                <div className="module-icon">
                  <Icon size={24} />
                </div>

                <div>
                  <h3>{module.title}</h3>
                  <p>{module.text}</p>
                </div>

                <div className="module-prices">
                  <span className="activation-promo">
                    <span className="promo-label">
                      Promoción de lanzamiento
                    </span>

                    {module.activation && (
                      <>
                        Activación{" "}
                        <strong className="activation-old">
                          {module.activation}
                        </strong>
                      </>
                    )}

                    <em>Sin coste de activación por tiempo limitado</em>
                  </span>

                  <span className="monthly-price">
                    Uso mensual <strong>{module.monthly}</strong>
                  </span>

                  {module.msg && <p className="roi-text">{module.msg}</p>}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="demo-section" id="demo">
        <div>
          <p className="section-kicker">Demo personalizada</p>
          <h2>Ve ZagaPro aplicado a tu propio negocio.</h2>
          <p>
            Cuéntanos qué tipo de servicio ofreces y te mostramos un flujo real:
            cliente, orden, presupuesto, factura, ingreso y alertas.
          </p>
        </div>
        <a
          className="primary-button"
          href={demoWhatsappHref}
          target="_blank"
          rel="noreferrer"
        >
          Solicitar una demo
          <ArrowRight size={18} />
        </a>
      </section>

      {contactVisible && (
        <section className="contact-section" id="contacto" ref={contactRef}>
          <div className="contact-copy">
            <p className="section-kicker">Contacto directo</p>
            <h2>
              Cuéntanos qué necesitas y preparamos una respuesta concreta.
            </h2>
            <p>
              Completa los datos principales y recibiremos tu mensaje
              directamente para revisar tu consulta.
            </p>
          </div>

          <form className="contact-form" onSubmit={submitContact}>
            <label className="hp-field" aria-hidden="true">
              Sitio web
              <input
                tabIndex={-1}
                autoComplete="off"
                value={contactForm.website}
                onChange={updateContactField("website")}
              />
            </label>
            {contactStatus?.type === "error" && (
              <div
                className={`contact-status ${contactStatus.type}`}
                role="status"
              >
                {contactStatus.text}
              </div>
            )}
            <div className="form-row">
              <label>
                Nombre
                <input
                  value={contactForm.name}
                  onChange={updateContactField("name")}
                  required
                />
              </label>
              <label>
                Empresa o negocio
                <input
                  value={contactForm.company}
                  onChange={updateContactField("company")}
                  required
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                Email
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={updateContactField("email")}
                  required
                />
              </label>
              <label>
                Teléfono
                <input
                  value={contactForm.phone}
                  onChange={updateContactField("phone")}
                />
              </label>
            </div>
            <label>
              Tipo de negocio
              <select
                value={contactForm.businessType}
                onChange={updateContactField("businessType")}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="Taller automotriz">Taller automotriz</option>
                <option value="Servicio técnico">Servicio técnico</option>
                <option value="Mantenimiento a domicilio">
                  Mantenimiento a domicilio
                </option>
                <option value="Otro negocio de servicios">
                  Otro negocio de servicios
                </option>
              </select>
            </label>
            <label>
              Mensaje
              <textarea
                rows={5}
                value={contactForm.message}
                onChange={updateContactField("message")}
                placeholder="Cuéntanos qué quieres revisar: demo, puesta en marcha, módulos, usuarios o dudas comerciales."
                required
              />
            </label>
            <div className="contact-actions">
              <button
                className="primary-button"
                type="submit"
                disabled={contactSubmitting}
              >
                {contactSubmitting ? "Enviando..." : "Enviar consulta"}
                <ArrowRight size={18} />
              </button>
            </div>
          </form>
        </section>
      )}

      {successModal && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-success-title"
        >
          <div className="success-modal">
            <div className="success-icon">
              <CheckCircle2 size={30} />
            </div>
            <h2 id="contact-success-title">Mensaje enviado</h2>
            <p>{successModal.text}</p>
            <button
              className="primary-button"
              type="button"
              onClick={() => setSuccessModal(null)}
            >
              Entendido
            </button>
          </div>
        </div>
      )}

      {expandedSlide && (
        <div
          className="image-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={expandedSlide.title}
          onClick={() => setExpandedSlide(null)}
        >
          <div
            className="image-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="image-modal-close"
              type="button"
              onClick={() => setExpandedSlide(null)}
              aria-label="Cerrar imagen ampliada"
            >
              Cerrar
            </button>
            <img src={expandedSlide.src} alt={expandedSlide.alt} />
            <p>{expandedSlide.title}</p>
          </div>
        </div>
      )}

      <footer className="footer">
        <div>
          <strong>ZagaPro</strong>
          <p>Gestión operativa y comercial para negocios de servicios.</p>
        </div>
        <button className="footer-contact" type="button" onClick={openContact}>
          <Mail size={17} />
          Contactar
        </button>
      </footer>

      <a
        className="whatsapp-float"
        href={demoWhatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={24} />
        <span>WhatsApp</span>
      </a>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
