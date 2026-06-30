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
  Signature,
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

const trustedWorkshops = [
  {
    name: "Master Touch",
    city: "Valencia",
    specialty: "Taller que ha impulsado funcionalidades desde la operativa diaria.",
  },
  {
    name: "Multiservicios Crower",
    city: "Albal, Valencia",
    specialty: "Gestión profesional de clientes, vehículos, órdenes y facturación.",
  },
];

const resultReframes = [
  {
    icon: Gauge,
    old: "Estado de resultados",
    title: "Descubre cuánto gana realmente tu taller cada mes.",
    text: "Revisa ingresos, gastos y resultado con una lectura clara para tomar decisiones con números.",
  },
  {
    icon: ReceiptText,
    old: "Cuentas por cobrar",
    title: "No vuelvas a olvidar un cobro.",
    text: "Identifica facturas a crédito, abonos parciales, vencimientos y clientes con saldo pendiente.",
  },
  {
    icon: ShieldCheck,
    old: "Fotos de recepción",
    title: "Evita reclamaciones con evidencia fotográfica.",
    text: "Deja constancia visual del estado del vehículo antes de iniciar el trabajo.",
  },
  {
    icon: Signature,
    old: "Firma digital",
    title: "Autoriza reparaciones sin imprimir documentos.",
    text: "Convierte autorizaciones y aceptación de trabajos en un proceso más profesional y rápido.",
  },
];

const workflowSteps = [
  "Recepción del vehículo",
  "Presupuesto",
  "Orden de trabajo",
  "Fotos",
  "Firma",
  "Facturación",
  "Cobro",
  "Estado de resultados",
];

const rolloutWeeks = [
  {
    week: "Semana 1",
    title: "Configuración",
    text: "Dejamos preparado el taller, usuarios, datos fiscales, series, módulos y flujo inicial.",
  },
  {
    week: "Semana 2",
    title: "Formación",
    text: "El equipo aprende a crear clientes, vehículos, presupuestos, órdenes y facturas.",
  },
  {
    week: "Semana 3",
    title: "Primeras órdenes",
    text: "Acompañamos la puesta en marcha con trabajo real para ajustar la rutina diaria.",
  },
  {
    week: "Semana 4",
    title: "Primer informe financiero",
    text: "Revisamos cobros, gastos, balance y resultados para empezar a dirigir con números.",
  },
];

const productScope = [
  { icon: UsersRound, title: "Clientes", text: "Historial y datos localizados." },
  { icon: Wrench, title: "Vehículos", text: "Matrículas, trabajos y estados." },
  { icon: FileText, title: "Presupuestos", text: "Base para órdenes y facturas." },
  { icon: ClipboardList, title: "Preórdenes", text: "Recepción más ordenada." },
  { icon: ClipboardList, title: "Órdenes", text: "Trabajo diario bajo control." },
  { icon: ShieldCheck, title: "Fotografías", text: "Evidencia de recepción." },
  { icon: Signature, title: "Firmas", text: "Autorizaciones sin papel." },
  { icon: ReceiptText, title: "Facturación", text: "Normal, recambio, Rapel y Sin IVA." },
  { icon: BadgeEuro, title: "Cobros", text: "Crédito, abonos y vencimientos." },
  { icon: Building2, title: "Bancos", text: "Movimientos y control financiero." },
  { icon: Gauge, title: "Dashboards", text: "Indicadores operativos y financieros." },
  { icon: TrendingUp, title: "Resultados", text: "Beneficio, mayor y balance." },
  { icon: MessageCircle, title: "WhatsApp", text: "Avisos y seguimiento." },
  { icon: ShieldCheck, title: "Permisos", text: "Usuarios y módulos configurables." },
  { icon: Download, title: "Gestoría", text: "Exportación de facturas." },
  { icon: HeartHandshake, title: "Fidelización", text: "Clientes que vuelven." },
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
  {
    label: "Dashboard Pro",
    value: "Indicadores clave",
    text: "Revisa rentabilidad, evolución financiera y señales del negocio sin depender de hojas externas.",
  },
  {
    label: "CxC",
    value: "Crédito controlado",
    text: "Identifica facturas a crédito, saldos pendientes, vencimientos y clientes deudores.",
  },
];

const commercialAreas = [
  {
    icon: Wrench,
    title: "Operación del taller",
    text: "Controla el vehículo desde que entra hasta que se entrega.",
    modules: ["Pre-órdenes", "Órdenes de trabajo", "Vehículos por estado", "Fotos de recepción", "Mecánica y chapa"],
  },
  {
    icon: ReceiptText,
    title: "Facturación y administración",
    text: "Emite documentos con menos pasos y deja la información lista para gestión.",
    modules: ["Facturas normales", "Recambio", "Rapel", "Sin IVA", "Exportación de facturas"],
  },
  {
    icon: TrendingUp,
    title: "Finanzas y cobros",
    text: "Mira lo facturado, lo pendiente de cobro y el estado real del negocio.",
    modules: ["Facturado hoy y mes", "Estado de resultados", "Cuentas por cobrar", "Mayor", "Balance"],
  },
  {
    icon: BellRing,
    title: "Comunicación y seguimiento",
    text: "Avisa al cliente en el momento correcto y evita conversaciones perdidas.",
    modules: ["Alertas WhatsApp", "Vehículo listo", "Seguimiento", "Historial del cliente"],
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
  {
    icon: Gauge,
    title: "Dashboard Pro",
    text: "Una vista avanzada para revisar indicadores financieros, rentabilidad por repuesto y señales de gestión del taller.",
    monthly: "Incluido en Pro",
    publicMonthly: "Disponible desde plan Pro",
    badge: "Nuevo",
  },
  {
    icon: ReceiptText,
    title: "Cuentas por Cobrar",
    text: "Controla facturas a crédito, abonos parciales, saldos pendientes, vencimientos y clientes deudores desde un solo panel.",
    monthly: "Incluido en Premium",
    publicMonthly: "Disponible en plan Premium",
    badge: "Nuevo módulo",
    featured: true,
  },
];

const pricingPlans = [
  {
    name: "Básico",
    setupPrice: "499",
    monthlyPrice: "129",
    intro: "Para talleres que quieren ordenar la operación diaria y empezar a trabajar con menos papeleo.",
    features: [
      "Clientes",
      "Vehículos",
      "Proveedores",
      "Facturación",
      "Gastos",
      "Dashboard financiero básico",
      "Historial del vehículo",
      "Órdenes de trabajo",
      "Puesta en marcha guiada",
    ],
  },
  {
    name: "Pro",
    setupPrice: "799",
    monthlyPrice: "159",
    badge: "Más vendido",
    featured: true,
    intro: "Para talleres que quieren medir mejor, automatizar comunicación y cerrar mejor la gestión financiera.",
    prefix: "Todo lo anterior +",
    features: [
      "Pre-órdenes",
      "Fotos de recepción",
      "WhatsApp vehículo listo",
      "Exportación de facturas",
      "Facturas de recambio",
      "Dashboard avanzado",
    ],
  },
  {
    name: "Premium",
    setupPrice: "1.200",
    monthlyPrice: "199",
    intro: "Dirige el taller con números, no con intuición.",
    prefix: "Todo lo anterior +",
    features: [
      "Beneficio mensual",
      "Cobros pendientes",
      "Balance",
      "Mayor",
      "Bancos",
      "Rentabilidad",
      "Cuentas por cobrar",
      "Prioridad en soporte",
    ],
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
            <a href="#control">Módulos</a>
            <a href="#flujo">Flujo</a>
            <a href="#balance">Balance</a>
            <a href="#planes">Planes</a>
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
              ERP especializado para talleres independientes
            </p>
            <h1>Controla todo tu taller desde una sola plataforma.</h1>
            <p className="hero-copy">
              Clientes, vehículos, órdenes de trabajo, facturación, cobros,
              WhatsApp y rentabilidad conectados para trabajar con más control,
              menos papel y una imagen más profesional.
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
                Ver cómo funciona
              </a>
            </div>
            <div className="hero-tags" aria-label="Beneficios principales">
              <span>Menos papel</span>
              <span>Más control</span>
              <span>Más beneficios</span>
              <span>Cobros visibles</span>
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
          <strong>Ya confían</strong>
          <span>talleres reales en ZagaPro</span>
        </div>
        <div>
          <strong>Operativa real</strong>
          <span>órdenes, facturas y vehículos</span>
        </div>
        <div>
          <strong>ERP vertical</strong>
          <span>no solo un programa de facturas</span>
        </div>
      </section>

      <section className="trust-section" aria-label="Clientes que confían en ZagaPro">
        <div>
          <p className="trust-label">Ya utilizan ZagaPro</p>
          <h2>Talleres reales. Trabajo real. Necesidades reales.</h2>
        </div>
        <div className="trust-workshops">
          {trustedWorkshops.map((workshop) => (
            <article key={workshop.name}>
              <span>{workshop.name}</span>
              <strong>{workshop.city}</strong>
              <p>{workshop.specialty}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="authority-section">
        <p className="section-kicker">Desarrollado junto a talleres reales</p>
        <h2>No copiamos otros programas. Construimos desde problemas de taller.</h2>
        <p>
          Cada función de ZagaPro nace de necesidades detectadas en talleres que
          trabajan todos los días con clientes reales. Master Touch ha impulsado
          funcionalidades desde la recepción, las órdenes, las fotos, las firmas,
          la facturación y el control financiero. No desarrollamos funciones
          porque sí. Desarrollamos soluciones para problemas reales.
        </p>
      </section>

      <section className="section split" id="software">
        <div>
          <p className="section-kicker">Resultados para tu taller</p>
          <h2>
            No vendemos módulos. Vendemos tranquilidad, control y tiempo.
          </h2>
        </div>
        <p className="section-lead">
          Un taller no compra software porque quiera más pantallas. Lo compra
          para saber qué está pendiente, qué vehículo está parado, qué falta por
          cobrar y cuánto dinero deja realmente el mes. ZagaPro convierte esa
          operación diaria en una forma de trabajar más clara y rentable.
        </p>
      </section>

      <section className="result-grid" aria-label="Resultados que resuelve ZagaPro">
        {resultReframes.map((item) => {
          const Icon = item.icon;
          return (
            <article className="result-card" key={item.title}>
              <div>
                <Icon size={24} />
                <span>{item.old}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
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

      <section className="commercial-section" id="control">
        <div className="commercial-heading">
          <p className="section-kicker">Todo lo que controlas</p>
          <h2>Así trabaja ZagaPro desde que entra el vehículo hasta que ves el resultado.</h2>
          <p>
            El cliente entiende mejor el producto cuando ve el flujo completo.
            Cada paso deja información útil para el siguiente: operación,
            documentación, facturación, cobro y análisis financiero.
          </p>
        </div>
        <div className="workflow-timeline" aria-label="Flujo completo de trabajo">
          {workflowSteps.map((step, index) => (
            <div key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
        <div className="commercial-grid">
          {commercialAreas.map((area) => {
            const Icon = area.icon;
            return (
              <article className="commercial-card" key={area.title}>
                <Icon size={24} />
                <h3>{area.title}</h3>
                <p>{area.text}</p>
                <div className="commercial-tags">
                  {area.modules.map((module) => (
                    <span key={module}>{module}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
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
          <h2>Menos papel. Más control. Más beneficios.</h2>
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
            ZagaPro nació trabajando junto a talleres reales.
          </h2>
        </div>
        <p className="section-lead">
          Cada módulo se ha desarrollado a partir de necesidades detectadas en
          el trabajo diario: recepción, presupuestos, órdenes, fotos, firmas,
          facturas, cobros y control financiero. No desarrollamos software por
          llenar menús. Ayudamos a que los talleres sean más rentables.
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
          <p className="section-kicker">Así ve un gerente su taller cada mañana</p>
          <h2>De un vistazo: ingresos, gastos, balance, cobros y rentabilidad.</h2>
          <p>
            El dueño no quiere perderse entre menús. Quiere abrir ZagaPro y
            saber qué ha pasado, qué falta por cobrar, cómo va el mes y dónde
            se está ganando o perdiendo dinero.
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

      <section className="scope-section" aria-label="Todo lo que ya incluye ZagaPro">
        <div className="scope-heading">
          <p className="section-kicker">Todo lo que ya incluye ZagaPro</p>
          <h2>El tamaño del producto se nota cuando ves todo lo que conecta.</h2>
          <p>
            No es una herramienta para hacer facturas. Es un sistema completo
            para gestionar operación, documentación, clientes, comunicación y
            finanzas desde una misma plataforma.
          </p>
        </div>
        <div className="scope-grid">
          {productScope.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title}>
                <Icon size={21} />
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="pricing-section pricing-section-pro" id="planes">
        <div className="pricing-copy">
          <p className="section-kicker">Planes ZagaPro</p>
          <h2>Elige cuánto control necesita tu taller.</h2>
          <p>
            Básico ordena la operación. Pro profesionaliza recepción,
            comunicación y facturación. Premium convierte ZagaPro en el centro
            financiero del taller.
          </p>
          <div className="pricing-value-list" aria-label="Valor de los planes">
            <span>Básico ordena clientes, vehículos, órdenes, facturación y gastos.</span>
            <span>Pro añade pre-órdenes, fotos, WhatsApp, recambio y dashboard avanzado.</span>
            <span>Premium suma cuentas por cobrar, mayor, resultados, Rapel y Sin IVA.</span>
          </div>
        </div>

        <div className="plans-grid" aria-label="Planes y precios de ZagaPro">
          {pricingPlans.map((plan) => (
            <article
              className={`plan-card ${plan.featured ? "featured-plan" : ""}`}
              key={plan.name}
            >
              {plan.badge && <span className="plan-badge">{plan.badge}</span>}
              <div className="plan-head">
                <div className="price-icon">
                  <BadgeEuro size={26} />
                </div>
                <div>
                  <p className="price-label">{plan.name}</p>
                  <p className="plan-intro">{plan.intro}</p>
                </div>
              </div>
              <div className="plan-price">
                <div className="plan-price-line">
                  <small>Implantación</small>
                  <span>{plan.setupPrice} €</span>
                </div>
                <div className="plan-price-line monthly">
                  <small>Mensualidad</small>
                  <span>{plan.monthlyPrice} €<em>/mes</em></span>
                </div>
              </div>
              {plan.prefix && <p className="plan-prefix">{plan.prefix}</p>}
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a
                className={plan.featured ? "primary-button" : "secondary-button"}
                href={onboardingWhatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                Solicitar {plan.name}
                <ArrowRight size={18} />
              </a>
            </article>
          ))}
        </div>

        <div className="implementation-card">
          <div>
            <p className="section-kicker">Puesta en marcha</p>
            <h3>¿Qué pasa cuando implantamos ZagaPro?</h3>
          </div>
          <div className="rollout-grid">
            {rolloutWeeks.map((item) => (
              <article key={item.week}>
                <span>{item.week}</span>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="modules-section" id="módulos">
        <div className="modules-heading">
          <div>
            <p className="section-kicker">Módulos en vigencia</p>
            <h2>Funcionalidades listas para crecer sin cambiar de sistema.</h2>
          </div>
          <p>
            La configuración por módulo permite activar lo que cada taller necesita sin complicar la experiencia diaria. En la landing lo resumimos por impacto comercial.
          </p>
        </div>

        <div className="modules-grid compact-modules-grid">
          {commercialAreas.map((area) => {
            const Icon = area.icon;
            return (
              <article className="module-card compact-module-card" key={area.title}>
                <div className="module-icon">
                  <Icon size={24} />
                </div>
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                </div>
                <div className="module-prices module-tags-list">
                  {area.modules.map((module) => (
                    <span key={module}>{module}</span>
                  ))}
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
            <a href="#control">Módulos</a>
            <a href="#planes">Planes</a>
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





