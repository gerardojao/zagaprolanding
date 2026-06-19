import React from "react";
import ReactDOM from "react-dom/client";
import {
  ArrowRight,
  BadgeEuro,
  BellRing,
  Building2,
  CheckCircle2,
  ClipboardList,
  Download,
  FileText,
  Gauge,
  HeartHandshake,
  Mail,
  MessageCircle,
  ReceiptText,
  Search,
  ShieldCheck,
  TrendingUp,
  UsersRound,
  Wrench,
} from "lucide-react";
import "./styles.css";

const whatsappNumber = "34624728398";

const whatsappTemplate = `Hola Gerardo, me gustaría solicitar una demo de ZagaPro para mi taller mecánico.

Mi nombre es:
Taller:
Tipo de servicio mecánico:
Ciudad:

Me interesa conocer cómo ZagaPro puede ayudarme a pasar menos tiempo entre papeles, WhatsApp y hojas de cálculo, y más tiempo atendiendo vehículos y clientes.`;

const onboardingWhatsappTemplate = `Hola Gerardo, quiero solicitar información para poner en marcha ZagaPro en mi taller mecánico.

Mi nombre es:
Taller:
Usuarios aproximados:
Ciudad:

Quiero revisar condiciones de lanzamiento, módulos adicionales y puesta en marcha inicial.`;

const sectors = [
  "Talleres mecánicos",
  "Talleres de reparación rápida",
  "Electromecánica",
  "Chapa y pintura",
  "Neumáticos y mantenimiento",
  "Talleres multimarca",
  "Servicios de diagnosis",
  "Negocios locales de automoción",
];

const features = [
  {
    icon: UsersRound,
    title: "Encuentra cada reparación en segundos",
    text: "Ten clientes, vehículos, matrículas e historial organizados para no perder tiempo buscando datos en libretas o conversaciones.",
  },
  {
    icon: FileText,
    title: "Dedica menos tiempo al papeleo",
    text: "Prepara presupuestos y facturas con menos tareas repetidas para que la administración no frene el ritmo del taller.",
  },
  {
    icon: ClipboardList,
    title: "Sabe qué pasa en cada vehículo",
    text: "Mantén trabajos, estados, responsables, repuestos y tareas pendientes bajo control sin depender de notas sueltas.",
  },
  {
    icon: ReceiptText,
    title: "Cobra con más orden",
    text: "Conecta reparaciones, facturas, ingresos y gastos para tener más claridad sobre lo que entra, lo que sale y lo que falta por cobrar.",
  },
  {
    icon: BellRing,
    title: "Haz que tus clientes vuelvan",
    text: "Mantén el contacto con clientes pendientes, revisiones y mantenimientos para aumentar las oportunidades de trabajo recurrente.",
  },
  {
    icon: ShieldCheck,
    title: "Da una imagen más profesional",
    text: "Trabaja con documentos, seguimiento y comunicación más consistentes para que el cliente perciba un taller más organizado.",
  },
];

const seoPages = [
  {
    title: "Más tiempo",
    text: "Recupera horas cada semana reduciendo tareas repetidas en presupuestos, órdenes, facturas y seguimiento.",
  },
  {
    title: "Más control",
    text: "Ten toda la información del taller organizada en un solo lugar para saber qué está pendiente, en curso, facturado o cobrado.",
  },
  {
    title: "Más ingresos",
    text: "Dedica menos tiempo al papeleo y más tiempo a trabajos que generan dinero dentro del taller.",
  },
  {
    title: "Clientes que regresan",
    text: "Mantente presente con recordatorios y seguimiento para que tus clientes vuelvan cuando necesiten mantenimiento o reparación.",
  },
];

const benefits = [
  "Recupera horas cada semana reduciendo tareas administrativas repetidas.",
  "Ten claro qué vehículos están pendientes, en reparación, facturados o cobrados.",
  "Ofrece una experiencia más profesional desde el presupuesto hasta la entrega.",
  "Mantén el contacto con tus clientes y aumenta las probabilidades de que vuelvan.",
];

const financeHighlights = [
  {
    label: "Ingresos",
    value: "Por factura",
    text: "Consulta cada ingreso con su número de factura, cliente, fecha, concepto e importe.",
  },
  {
    label: "Egresos",
    value: "Por periodo",
    text: "Registra gastos, proveedores, compras y salidas para saber dónde se va el dinero.",
  },
  {
    label: "Balance",
    value: "Siempre visible",
    text: "Filtra por rango de fechas y revisa el balance entre ingresos y egresos en segundos.",
  },
];

const addOnModules = [
  {
    icon: BellRing,
    title: "Seguimiento Inteligente",
    text: "Mantente presente en la mente de tus clientes y aumenta las probabilidades de que vuelvan sin perder tiempo en llamadas repetitivas.",
    activation: "69,99 EUR",
    monthly: "14,99 EUR/mes",
    publicMonthly: "Incluido en propuesta de lanzamiento",
  },
  {
    icon: Download,
    title: "Pack Facturas Gestoría",
    text: "Reduce el tiempo de cierre administrativo preparando la información del periodo de forma ordenada para gestoría o respaldo.",
    activation: "49,99 EUR",
    monthly: "9,99 EUR/mes",
    publicMonthly: "Incluido en propuesta de lanzamiento",
  },
  {
    icon: HeartHandshake,
    title: "Pack Fidelidad",
    text: "Convierte el seguimiento en una rutina sencilla para recuperar clientes y generar más trabajo recurrente.",
    monthly: "19,99 EUR/mes",
    publicMonthly: "Condiciones iniciales especiales",
    badge: "Pack recomendado",
    msg: "Con que vuelva un solo cliente, el pack prácticamente se paga solo.",
    featured: true,
  },
];

const faqs = [
  {
    question: "¿Qué es ZagaPro?",
    answer:
      "ZagaPro es un software para talleres mecánicos que ayuda a recuperar tiempo, tener más control del negocio y mantener el contacto con clientes para que vuelvan.",
  },
  {
    question: "¿Sirve solo para talleres mecánicos?",
    answer:
      "Ahora la landing está enfocada a talleres mecánicos porque es el primer mercado natural. La base del sistema puede adaptarse más adelante a otros negocios de servicios.",
  },
  {
    question: "¿Puedo crear presupuestos y convertirlos en trabajos?",
    answer:
      "Sí. La idea es reducir pasos repetidos: preparas el presupuesto, lo conviertes en trabajo y aprovechas esa información para facturar y hacer seguimiento.",
  },
  {
    question: "¿ZagaPro ayuda a controlar clientes recurrentes?",
    answer:
      "Sí. El objetivo es que no olvides clientes, revisiones o trabajos pendientes y puedas generar más oportunidades de regreso.",
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
    title: "Rentabilidad de líneas",
    src: "/RentabilidadLineasFacturadas.png",
    alt: "Pantalla de rentabilidad de líneas facturadas en ZagaPro.",
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
        text: `${contactForm.name.trim()}, tu consulta ha sido enviada a ZagaPro. Te responderemos con una propuesta concreta.`,
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
            <a href="#software">Software</a>
            <a href="#sectores">Sectores</a>
            <a href="#flujo">Flujo</a>
            <a href="#balance">Balance</a>
            <a href="#preguntas">Preguntas</a>
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
              Software de gestión para talleres mecánicos
            </p>
            <h1>Recupera tiempo y haz crecer tu taller.</h1>
            <p className="hero-copy">
              Menos papeles, menos WhatsApp perdido y menos hojas de cálculo.
              Ten clientes, vehículos, trabajos y cobros organizados en un solo
              lugar para trabajar con más control y dar una mejor imagen.
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
              <a className="secondary-button" href="#software">
                Ver funciones
              </a>
            </div>
            <div className="hero-tags" aria-label="Beneficios principales">
              <span>Sin instalaciones</span>
              <span>Más tiempo útil</span>
              <span>Más control del taller</span>
              <span>Clientes que regresan</span>
              <span>Demo personalizada</span>
            </div>
          </div>

          <div
            className="product-showcase"
            aria-label="Capturas del producto ZagaPro"
          >
            <div className="showcase-status">
              <span>Operación activa</span>
              <strong>Tiempo, control y clientes conectados</strong>
            </div>
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
                    aria-label={`Amplíar ${slide.title}`}
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
          <strong>Más tiempo</strong>
          <span>menos tareas repetidas</span>
        </div>
        <div>
          <strong>Más control</strong>
          <span>todo el taller en un lugar</span>
        </div>
        <div>
          <strong>Más regreso</strong>
          <span>seguimiento a clientes</span>
        </div>
      </section>

      <section className="section split" id="software">
        <div>
          <p className="section-kicker">Resultados para tu taller</p>
          <h2>
            Recupera horas de trabajo cada semana y ofrece una experiencia más profesional.
          </h2>
        </div>
        <p className="section-lead">
          Un taller no necesita más herramientas sueltas. Necesita saber qué
          está pendiente, qué está en reparación, qué falta por cobrar y qué
          cliente conviene contactar. ZagaPro centraliza esa información para
          que trabajes con más orden, menos errores y más tiempo útil.
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

      <section className="section audience" id="sectores">
        <div className="audience-copy">
          <p className="section-kicker">Para quién es</p>
          <h2>
            Para talleres que quieren trabajar con más orden sin complicarse.
          </h2>
          <p>
            Si tu taller recibe vehículos, prepara presupuestos, compra
            repuestos, factura reparaciones y necesita hacer seguimiento,
            ZagaPro te ayuda a convertir todo ese flujo en una rutina más clara
            para que la administración no se coma horas de taller.
          </p>
        </div>
        <div className="audience-list">
          {sectors.map((item) => (
            <div key={item}>
              <CheckCircle2 size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section impact" id="flujo">
        <div className="impact-panel">
          <Search size={28} />
          <h2>Vende el resultado: más tiempo, más control y clientes que vuelven.</h2>
          <div className="benefits">
            {seoPages.map((page) => (
              <p key={page.title}>
                <strong>{page.title}</strong>
                <br />
                {page.text}
              </p>
            ))}
          </div>
        </div>
        <div className="workflow" aria-label="Flujo operativo">
          <div>
            <Building2 size={21} />
            Información localizada
          </div>
          <div>
            <Wrench size={21} />
            Trabajo bajo control
          </div>
          <div>
            <ClipboardList size={21} />
            Menos errores
          </div>
          <div>
            <Gauge size={21} />
            Cliente que regresa
          </div>
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="section-kicker">Probado en operativa real</p>
          <h2>
            Creado desde problemas reales de un taller mecánico en Valencia.
          </h2>
        </div>
        <p className="section-lead">
          El primer caso de uso viene de un taller que necesitaba recuperar
          tiempo, reducir errores administrativos y tener más visibilidad del
          día a día. Si buscas software para taller mecánico en Albal,
          Catarroja, Massanassa o Valencia, la demo se puede adaptar a tu forma
          real de trabajar.
        </p>
      </section>

      <section className="feature-grid" aria-label="Beneficios comerciales">
        {benefits.map((benefit, index) => (
          <article className="feature-card" key={benefit}>
            {index === 0 && <ClipboardList size={24} />}
            {index === 1 && <Gauge size={24} />}
            {index === 2 && <HeartHandshake size={24} />}
            {index === 3 && <Search size={24} />}
            <h3>{["Más tiempo", "Más control", "Mejor imagen", "Clientes que regresan"][index]}</h3>
            <p>{benefit}</p>
          </article>
        ))}
      </section>

      <section className="finance-section" id="balance">
        <div className="finance-copy">
          <p className="section-kicker">Control financiero</p>
          <h2>Toma decisiones con números claros, no con intuición.</h2>
          <p>
            Cuando ingresos, gastos y balance están ordenados, sabes mejor qué
            trabajos son rentables, qué falta por cobrar y cómo está funcionando
            el taller. Menos cuentas dispersas, más claridad para decidir.
          </p>
        </div>

        <div className="finance-panel" aria-label="Capturas del balance e ingresos por periodo">
          <div className="finance-panel-head">
            <span>Vista real del sistema</span>
            <strong>Balance general y detalle por factura</strong>
          </div>
          <figure className="finance-shot finance-shot-main">
            <img
              src="/balance-dashboard.png"
              alt="Pantalla de ZagaPro con tarjetas de ingresos, gastos y balance general del negocio."
              loading="lazy"
            />
            <figcaption>Balance visible para revisar ingresos, gastos y resultado del negocio.</figcaption>
          </figure>
          <figure className="finance-shot">
            <img
              src="/balance-control-redacted.png"
              alt="Pantalla de ZagaPro con filtros por periodo, ingresos, IVA, total y detalle por número de factura con nombres protegidos."
              loading="lazy"
            />
            <figcaption>Detalle por periodo con número de factura, tipo de ingreso, IVA, importe y total.</figcaption>
          </figure>
        </div>

        <div className="finance-highlights">
          {financeHighlights.map((item) => (
            <article key={item.label}>
              <TrendingUp size={22} />
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pricing-section" id="planes">
        <div className="pricing-copy">
          <p className="section-kicker">Lanzamiento para talleres</p>
          <h2>Empieza con una propuesta pensada para recuperar tiempo.</h2>
          <p>
            Soluciones adaptadas al tamaño de tu taller. Solicita una demo y
            recibe una propuesta personalizada centrada en ordenar tu operativa,
            reducir papeleo y liberar horas de gestión cada semana.
          </p>
          <div className="pricing-value-list" aria-label="Valor de la promoción">
            <span>Recupera tiempo en presupuestos, facturas y seguimiento.</span>
            <span>Empieza con una puesta en marcha guiada y ordenada.</span>
            <span>Accede a condiciones especiales para los primeros talleres.</span>
          </div>
        </div>

        <article className="price-card">
          <div className="price-icon">
            <BadgeEuro size={28} />
          </div>
          <p className="price-label">Plan Taller</p>
          <p className="launch-badge">Oferta de lanzamiento</p>
          <div className="price">
            <small className="price-prefix">Referencia</small>
            <span>por menos que una reparación habitual al mes</span>
          </div>
          <p className="setup-price">
            Promoción de lanzamiento para los primeros talleres. Solicita una
            demo y recibe una propuesta personalizada según el tamaño de tu
            taller.
          </p>
          <ul>
            <li>Configuración inicial del taller.</li>
            <li>Clientes, vehículos, presupuestos y órdenes de trabajo.</li>
            <li>Facturación, ingresos, gastos y seguimiento.</li>
            <li>Repuestos, proveedores y servicios frecuentes.</li>
            <li>Hasta 3 usuarios por taller.</li>
            <li>Acompañamiento inicial para empezar a usarlo.</li>
          </ul>
          <a
            className="primary-button"
            href={onboardingWhatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            Solicitar propuesta
            <ArrowRight size={18} />
          </a>
        </article>
      </section>

      <section className="modules-section" id="módulos">
        <div className="modules-heading">
          <div>
            <p className="section-kicker">Módulos adicionales</p>
          <h2>Convierte tareas administrativas en oportunidades de venta.</h2>
          </div>
          <p>
            Empieza con la gestión principal y suma herramientas para mantener
            contacto con clientes, cerrar mejor la administración y generar más
            trabajo recurrente.
          </p>
        </div>

        <div className="modules-grid">
          {addOnModules.map((module) => {
            const Icon = module.icon;
            return (
              <article
                className={`module-card ${module.featured ? "featured-module" : ""}`}
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

                    <em>Sin coste de activación por tiempo limitado</em>
                  </span>

                  <span className="monthly-price">
                    Uso mensual <strong>{module.publicMonthly}</strong>
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
          <h2>Ve cómo tu taller puede recuperar tiempo y trabajar con más control.</h2>
          <p>
            Cuéntanos tu ciudad y flujo de trabajo. Te mostramos cómo se verían
            clientes, vehículos, presupuestos, órdenes, facturas y seguimiento
            en una demo concreta para talleres de Albal, Catarroja, Massanassa
            y Valencia, con foco en el resultado: menos gestión repetida, más
            orden y clientes mejor atendidos.
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

      <section className="faq-section" id="preguntas">
        <div className="faq-heading">
          <p className="section-kicker">Preguntas frecuentes</p>
          <h2>Primero el resultado. Después la herramienta.</h2>
          <p>
            ZagaPro está pensado para talleres que quieren recuperar tiempo,
            trabajar con más control, cometer menos errores y mantener el
            contacto con clientes sin perderse entre herramientas separadas.
          </p>
        </div>
        <div className="faq-grid">
          {faqs.map((faq) => (
            <article className="faq-card" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {contactVisible && (
        <section className="contact-section" id="contacto" ref={contactRef}>
          <div className="contact-copy">
            <p className="section-kicker">Contacto directo</p>
            <h2>Cuéntanos qué taller quieres gestionar con ZagaPro.</h2>
            <p>
              Recibiremos tu consulta para preparar una respuesta concreta por
              ciudad, necesidad y estado actual del taller.
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
                Taller
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
                <option value="Taller mecánico">Taller mecánico</option>
                <option value="Servicio técnico">Servicio técnico</option>
                <option value="Instalador">Instalador</option>
                <option value="Reformas o mantenimiento">
                  Reformas o mantenimiento
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
                placeholder="Cuéntanos qué quieres revisar: demo, módulos, condiciones de lanzamiento, usuarios o puesta en marcha."
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
        <div className="footer-main">
          <div className="footer-brand">
            <img src="/logozagapro.png" alt="ZagaPro" />
            <p>
              Software de gestión para talleres mecánicos: clientes, vehículos,
              presupuestos, órdenes de trabajo, facturación, repuestos y
              seguimiento comercial.
            </p>
          </div>
          <div className="footer-column">
            <strong>Producto</strong>
            <a href="#software">Software</a>
            <a href="#sectores">Sectores</a>
            <a href="#planes">Plan Empresa</a>
            <a href="#módulos">Módulos</a>
          </div>
          <div className="footer-column">
            <strong>Soluciones</strong>
            <span>Talleres mecánicos</span>
            <span>Albal</span>
            <span>Catarroja</span>
            <span>Massanassa</span>
            <span>Valencia</span>
          </div>
          <div className="footer-column">
            <strong>Contacto</strong>
            <button className="footer-contact" type="button" onClick={openContact}>
              <Mail size={17} />
              Contactar
            </button>
            <a href={demoWhatsappHref} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>ZagaPro</span>
          <span>Gestión profesional para talleres mecánicos en Valencia.</span>
        </div>
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
