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

const whatsappTemplate = `Hola Gerardo, me gustaria solicitar una demo de ZagaPro.

Mi nombre es:
Negocio:
Tipo de servicio:
Ciudad:

Me interesa conocer como ZagaPro puede ayudarme con clientes, presupuestos, ordenes de trabajo, facturacion y seguimiento.`;

const onboardingWhatsappTemplate = `Hola Gerardo, quiero solicitar informacion para poner en marcha ZagaPro.

Mi nombre es:
Negocio:
Tipo de negocio:
Usuarios aproximados:
Ciudad:

Quiero revisar el Plan Empresa, modulos adicionales y puesta en marcha inicial.`;

const sectors = [
  "Talleres mecanicos",
  "Servicios tecnicos",
  "Instaladores",
  "Reformas y mantenimiento",
  "Climatizacion",
  "Limpieza profesional",
  "Multiservicios",
  "Negocios locales de servicios",
];

const features = [
  {
    icon: UsersRound,
    title: "Gestion de clientes",
    text: "Historial, datos de contacto, documentos, avisos y trazabilidad de cada cliente en un mismo lugar.",
  },
  {
    icon: FileText,
    title: "Presupuestos profesionales",
    text: "Crea presupuestos claros, reutiliza conceptos frecuentes y convierte trabajos aceptados en operativa real.",
  },
  {
    icon: ClipboardList,
    title: "Ordenes de trabajo",
    text: "Controla estados, responsables, materiales, cantidades, costes y tareas pendientes sin perder contexto.",
  },
  {
    icon: ReceiptText,
    title: "Facturacion e ingresos",
    text: "Emite facturas, registra cobros y conecta la parte administrativa con el trabajo que ya se realizo.",
  },
  {
    icon: BellRing,
    title: "Alertas y seguimiento",
    text: "Recuerda revisiones, servicios recurrentes, clientes pendientes y oportunidades de fidelizacion.",
  },
  {
    icon: ShieldCheck,
    title: "Multi negocio",
    text: "Una base adaptable para talleres, servicios tecnicos, instaladores y empresas con varios usuarios.",
  },
];

const seoPages = [
  {
    title: "Clientes siempre localizados",
    text: "Toda la informacion comercial y operativa queda asociada al cliente, con historial y datos listos para consultar.",
  },
  {
    title: "Presupuestos que avanzan",
    text: "Prepara propuestas profesionales, haz seguimiento y convierte los trabajos aceptados en ordenes de servicio.",
  },
  {
    title: "Trabajo diario bajo control",
    text: "El equipo sabe que esta pendiente, que esta en curso, que falta por cobrar y que requiere atencion.",
  },
  {
    title: "Facturacion sin duplicar tareas",
    text: "Los datos del trabajo pasan a presupuestos, facturas e ingresos para reducir errores administrativos.",
  },
];

const benefits = [
  "Reduce la dependencia de hojas de calculo, libretas y conversaciones dispersas.",
  "Ayuda a saber que trabajos estan pendientes, aceptados, facturados o cobrados.",
  "Da una imagen mas profesional con presupuestos y facturas consistentes.",
  "Facilita recuperar clientes con alertas, recordatorios y seguimiento comercial.",
];

const financeHighlights = [
  {
    label: "Ingresos",
    value: "Por factura",
    text: "Consulta cada ingreso con su numero de factura, cliente, fecha, concepto e importe.",
  },
  {
    label: "Egresos",
    value: "Por periodo",
    text: "Registra gastos, proveedores, compras y salidas para saber donde se va el dinero.",
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
    text: "ZagaPro identifica que clientes necesitan seguimiento y prepara el contenido del mensaje y el contacto por WhatsApp en segundos.",
    activation: "69,99 EUR",
    monthly: "14,99 EUR/mes",
  },
  {
    icon: Download,
    title: "Pack Facturas Gestoria",
    text: "Descarga las facturas de un periodo en un solo archivo, organizado y listo para enviar a tu gestoria o conservar como respaldo administrativo.",
    activation: "49,99 EUR",
    monthly: "9,99 EUR/mes",
  },
  {
    icon: HeartHandshake,
    title: "Pack Fidelizacion",
    text: "Recupera clientes y simplifica la administracion mensual desde una unica solucion.",
    monthly: "19,99 EUR/mes",
    badge: "Pack recomendado",
    msg: "Con que vuelva un solo cliente, el pack practicamente se paga solo.",
    featured: true,
  },
];

const faqs = [
  {
    question: "Que es ZagaPro?",
    answer:
      "ZagaPro es un software de gestion para negocios de servicios que centraliza clientes, presupuestos, ordenes de trabajo, facturas, stock, ingresos y seguimiento comercial.",
  },
  {
    question: "Sirve solo para talleres mecanicos?",
    answer:
      "No. ZagaPro funciona para talleres mecanicos, servicios tecnicos, instaladores, empresas de mantenimiento, reformas, climatizacion, limpieza profesional y negocios multiservicio.",
  },
  {
    question: "Puedo crear presupuestos y convertirlos en trabajos?",
    answer:
      "Si. Puedes preparar presupuestos profesionales, registrar conceptos, controlar estados y convertir trabajos aceptados en ordenes de servicio o facturas.",
  },
  {
    question: "ZagaPro ayuda a controlar clientes recurrentes?",
    answer:
      "Si. El sistema permite mantener historial del cliente, alertas, recordatorios y seguimiento para recuperar oportunidades y mejorar la fidelizacion.",
  },
];

const productSlides = [
  {
    title: "Panel principal",
    src: "/pantalla1.png",
    alt: "Panel principal de ZagaPro con indicadores y accesos de gestion.",
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
    title: "Ordenes de trabajo",
    src: "/GenerarOrdenes.png",
    alt: "Pantalla para generar ordenes de trabajo en ZagaPro.",
  },
  {
    title: "Emision de facturas",
    src: "/Emision_reimpresion_de_facturas.png",
    alt: "Pantalla de emision y reimpresion de facturas en ZagaPro.",
  },
  {
    title: "Rentabilidad de lineas",
    src: "/RentabilidadLineasFacturadas.png",
    alt: "Pantalla de rentabilidad de lineas facturadas en ZagaPro.",
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
          error?.message || "No se pudo enviar el mensaje. Intentalo de nuevo.",
      });
    } finally {
      setContactSubmitting(false);
    }
  };

  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="nav" aria-label="Navegacion principal">
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
              Software de gestion para negocios de servicios
            </p>
            <h1>ZagaPro</h1>
            <p className="hero-copy">
              Controla clientes, presupuestos, ordenes de trabajo, facturas,
              stock, ingresos, egresos, balance y seguimiento desde una
              plataforma adaptable a talleres, instaladores, mantenimiento y
              servicios tecnicos.
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
              <span>Balance por periodo</span>
              <span>Demo personalizada</span>
              <span>Preparado para servicios</span>
            </div>
          </div>

          <div
            className="product-showcase"
            aria-label="Capturas del producto ZagaPro"
          >
            <div className="showcase-status">
              <span>Operacion activa</span>
              <strong>Clientes, trabajos y cobros conectados</strong>
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
          <strong>360</strong>
          <span>gestion operativa</span>
        </div>
        <div>
          <strong>Balance</strong>
          <span>ingresos y egresos</span>
        </div>
        <div>
          <strong>Valencia</strong>
          <span>uso real en taller</span>
        </div>
      </section>

      <section className="section split" id="software">
        <div>
          <p className="section-kicker">Gestion completa</p>
          <h2>
            Todo lo que tu negocio necesita para vender, ejecutar y cobrar servicios.
          </h2>
        </div>
        <p className="section-lead">
          ZagaPro centraliza la gestion diaria de empresas de servicios:
          clientes, presupuestos, ordenes de trabajo, facturas, gastos, stock y
          seguimiento comercial. Menos informacion perdida, menos tareas
          repetidas y mas control sobre lo que ocurre en el negocio.
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
          <p className="section-kicker">Para quien es</p>
          <h2>
            Para negocios que viven de atender clientes y cerrar trabajos.
          </h2>
          <p>
            Si tu empresa recibe solicitudes, prepara presupuestos, agenda
            servicios, compra materiales, factura y necesita hacer seguimiento,
            ZagaPro te ayuda a tener una operativa ordenada desde el primer dia.
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
          <h2>De la primera consulta al cobro final.</h2>
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
            Nuevo cliente
          </div>
          <div>
            <Wrench size={21} />
            Trabajo asignado
          </div>
          <div>
            <ClipboardList size={21} />
            Presupuesto aprobado
          </div>
          <div>
            <Gauge size={21} />
            Factura y seguimiento
          </div>
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="section-kicker">Probado en operativa real</p>
          <h2>
            ZagaPro ya se usa en un taller mecanico en Valencia.
          </h2>
        </div>
        <p className="section-lead">
          El primer caso de uso viene de un taller que necesitaba ordenar
          clientes, trabajos, presupuestos, facturas, repuestos e ingresos.
          Esa misma base sirve para otros negocios de servicios con problemas
          parecidos: demasiada informacion repartida y poca visibilidad del dia
          a dia.
        </p>
      </section>

      <section className="feature-grid" aria-label="Beneficios comerciales">
        {benefits.map((benefit, index) => (
          <article className="feature-card" key={benefit}>
            {index === 0 && <ClipboardList size={24} />}
            {index === 1 && <Gauge size={24} />}
            {index === 2 && <HeartHandshake size={24} />}
            {index === 3 && <Search size={24} />}
            <h3>{["Orden operativo", "Control del negocio", "Imagen profesional", "Clientes recurrentes"][index]}</h3>
            <p>{benefit}</p>
          </article>
        ))}
      </section>

      <section className="finance-section" id="balance">
        <div className="finance-copy">
          <p className="section-kicker">Control financiero</p>
          <h2>Ingresos, egresos y balance visibles todo el tiempo.</h2>
          <p>
            ZagaPro permite revisar el estado economico del negocio por periodos
            de tiempo. Puedes filtrar ingresos, egresos y balance mensual,
            semanal o por el rango que necesites, con detalle de cada movimiento
            y referencia al numero de factura cuando corresponde.
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
              alt="Pantalla de ZagaPro con filtros por periodo, ingresos, IVA, total y detalle por numero de factura con nombres protegidos."
              loading="lazy"
            />
            <figcaption>Detalle por periodo con numero de factura, tipo de ingreso, IVA, importe y total.</figcaption>
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
          <p className="section-kicker">Plan empresarial</p>
          <h2>Un precio claro para empezar a operar con ZagaPro.</h2>
          <p>
            Pensado para negocios de servicios que necesitan organizar su
            gestion y tener una base preparada para crecer.
          </p>
        </div>

        <article className="price-card">
          <div className="price-icon">
            <BadgeEuro size={28} />
          </div>
          <p className="price-label">Plan Empresa</p>
          <div className="price">
            <small className="price-prefix">Desde</small>
            <span>99 EUR</span>
            <small>/mes</small>
          </div>
          <p className="setup-price">
            Puesta en marcha inicial: <strong>349,00 EUR</strong>
          </p>
          <ul>
            <li>Configuracion inicial del negocio.</li>
            <li>Clientes, presupuestos y ordenes de trabajo.</li>
            <li>Facturacion, ingresos, gastos y seguimiento.</li>
            <li>Stock, proveedores y servicios frecuentes.</li>
            <li>Hasta 3 usuarios por negocio.</li>
            <li>Acompanamiento inicial para empezar a usarlo.</li>
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

      <section className="modules-section" id="modulos">
        <div className="modules-heading">
          <div>
            <p className="section-kicker">Modulos adicionales</p>
            <h2>Amplia ZagaPro segun lo que necesite tu negocio.</h2>
          </div>
          <p>
            Empieza con la gestion principal y suma herramientas para
            seguimiento, gestoria y fidelizacion cuando quieras vender mas,
            controlar mejor la administracion o recuperar clientes.
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
                      Promocion de lanzamiento
                    </span>

                    {module.activation && (
                      <>
                        Activacion{" "}
                        <strong className="activation-old">
                          {module.activation}
                        </strong>
                      </>
                    )}

                    <em>Sin coste de activacion por tiempo limitado</em>
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
          <h2>Ve ZagaPro aplicado a tu propio negocio de servicios.</h2>
          <p>
            Cuentanos tu sector, ciudad y flujo de trabajo. Te mostramos como
            se verian clientes, presupuestos, ordenes, facturas y seguimiento en
            una demo concreta.
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
          <h2>Software de gestion para servicios, talleres e instaladores.</h2>
          <p>
            ZagaPro esta pensado para negocios que necesitan organizar clientes,
            presupuestos, ordenes de trabajo, facturacion, stock y seguimiento
            sin perder tiempo entre herramientas separadas.
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
            <h2>Cuentanos que negocio quieres gestionar con ZagaPro.</h2>
            <p>
              Recibiremos tu consulta para preparar una respuesta concreta por
              sector, necesidad y estado actual del negocio.
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
                Telefono
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
                <option value="">Selecciona una opcion</option>
                <option value="Taller mecanico">Taller mecanico</option>
                <option value="Servicio tecnico">Servicio tecnico</option>
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
                placeholder="Cuentanos que quieres revisar: demo, sector, modulos, precios, usuarios o puesta en marcha."
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
              Software de gestion para negocios de servicios: clientes,
              presupuestos, ordenes de trabajo, facturacion, stock y
              seguimiento comercial.
            </p>
          </div>
          <div className="footer-column">
            <strong>Producto</strong>
            <a href="#software">Software</a>
            <a href="#sectores">Sectores</a>
            <a href="#planes">Plan Empresa</a>
            <a href="#modulos">Modulos</a>
          </div>
          <div className="footer-column">
            <strong>Soluciones</strong>
            <span>Talleres mecanicos</span>
            <span>Servicios tecnicos</span>
            <span>Instaladores</span>
            <span>Mantenimiento</span>
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
          <span>Gestion profesional para empresas de servicios.</span>
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
