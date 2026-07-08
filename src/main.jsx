import React from "react";
import ReactDOM from "react-dom/client";
import {
  ArrowRight,
  BadgeEuro,
  BellRing,
  Building2,
  CheckCircle2,
  ClipboardList,
  FileText,
  Gauge,
  LogIn,
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
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const whatsappTemplate = `Hola Gerardo, me gustaría solicitar una demo de ZagaPro para mi taller.

Mi nombre es:
Taller:
Ciudad:

Quiero revisar cómo ZagaPro puede ayudarme con órdenes, facturas, cobros, compras y rentabilidad.`;

const problems = [
  {
    icon: ClipboardList,
    title: "¿Pierdes tiempo buscando información del cliente?",
    text: "Todo el historial del cliente en segundos.",
  },
  {
    icon: ReceiptText,
    title: "¿Se te quedan facturas pendientes por cobrar?",
    text: "Cobra antes y ve qué está facturado, pagado o pendiente sin revisar conversaciones ni papeles.",
  },
  {
    icon: Gauge,
    title: "¿Sabes cuánto gana realmente cada trabajo?",
    text: "Gestiona compras, proveedores, gastos y rentabilidad desde el mismo sistema.",
  },
];

const emotionalBenefits = [
  "Recupera horas cada semana.",
  "Deja de perder trabajos por falta de seguimiento.",
  "Cobra antes y con más orden.",
  "Dedica menos tiempo a la administración del taller.",
  "Encuentra cualquier reparación en segundos.",
];

const workflow = [
  "Recepción",
  "Diagnóstico",
  "Pre-orden",
  "Orden",
  "Factura",
  "Cobro",
  "Rentabilidad",
];

const comparisonRows = [
  ["Excel", "Todo integrado"],
  ["WhatsApp disperso", "Seguimiento ordenado"],
  ["Papeles y notas", "Historial por cliente y vehículo"],
  ["Facturas aisladas", "Gestión completa del taller"],
  ["No sabes cuánto ganas", "Rentabilidad visible"],
];

const purchaseComparison = [
  ["Facturación", true, true],
  ["Clientes", true, true],
  ["Presupuestos", true, true],
  ["Compras", false, true],
  ["IVA soportado", false, true],
  ["Cuentas por pagar", false, true],
];

const modules = [
  {
    icon: UsersRound,
    title: "Clientes y vehículos",
    text: "Historial, matrículas, datos y trabajos localizados.",
  },
  {
    icon: ClipboardList,
    title: "Órdenes de trabajo",
    text: "Estados, tareas, responsables y seguimiento diario.",
  },
  {
    icon: FileText,
    title: "Presupuestos",
    text: "Documentos claros que avanzan hacia orden y factura.",
  },
  {
    icon: ReceiptText,
    title: "Facturación y cobros",
    text: "Facturas, abonos, crédito y pendientes de cobro.",
  },
  {
    icon: Building2,
    title: "Compras y proveedores",
    text: "Albaranes, facturas recibidas y cuentas por pagar.",
  },
  {
    icon: TrendingUp,
    title: "Balance y mayor",
    text: "Ingresos, gastos, compras y resultado del negocio.",
  },
];

const purchaseTags = [
  "Facturas proveedor",
  "Albaranes",
  "Cuentas por pagar",
  "Libro de compras",
  "IVA soportado",
  "Proveedores",
  "Compras avanzadas",
];

const productSlides = [
  {
    label: "PANEL",
    title: "Panel principal",
    src: "/pantalla1.png",
    alt: "Panel principal de ZagaPro con indicadores de gestión del taller.",
  },
  {
    label: "CLIENTES",
    title: "Vista operativa",
    src: "/Pantalla2.png",
    alt: "Vista operativa de ZagaPro.",
  },
  {
    label: "ÓRDENES",
    title: "Órdenes de trabajo",
    src: "/GenerarOrdenes.png",
    alt: "Pantalla para generar órdenes de trabajo en ZagaPro.",
  },
  {
    label: "FACTURACIÓN",
    title: "Emite una factura en menos de un minuto.",
    src: "/Emision_reimpresion_de_facturas.png",
    alt: "Pantalla de emisión y reimpresión de facturas en ZagaPro.",
  },
  {
    label: "COBROS",
    title: "Registra facturas cobradas y pendientes de cobro.",
    src: "/pantalla4.png",
    alt: "Módulo de cuentas por cobrar en ZagaPro.",
  },
  {
    label: "COMPRAS",
    title: "Registra y monitorea en tiempo real tus pagos pendientes a proveedores.",
    src: "/pantalla5.png",
    alt: "Módulo de compras y proveedores en ZagaPro.",
  },
  {
    label: "BALANCE",
    title: "Monitorea tus ganancias al momento por ventas de recambios y servicios.",
    src: "/RentabilidadLineasFacturadas.png",
    alt: "Pantalla de rentabilidad de líneas facturadas en ZagaPro.",
  },
];

const pricingPlans = [
  {
    name: "Básico",
    setupPrice: "599",
    promoPrice: "449",
    monthlyPrice: "129",
    ideal: "Ideal para talleres pequeños.",
    intro: "Operación diaria del taller.",
    features: [
      "Clientes y vehículos",
      "Órdenes de trabajo",
      "Presupuestos",
      "Facturación",
      "Cobros", "Rentabilidad por recambio y servicio",
    ],
  },
  {
    name: "Pro",
    setupPrice: "899",
    promoPrice: "674",
    monthlyPrice: "169",
    badge: "Más vendido",
    featured: true,
    ideal: "Ideal para talleres de 2-5 empleados.",
    intro: "Más control comercial, operativo y financiero.",
    features: [
      "Todo lo del Básico",
      "Registro y conversión de albaranes a facturas",
      "Gestión avanzada de proveedores",
      "Inventario y repuestos",
      "Soporte prioritario",
    ],
  },
  {
    name: "Premium",
    setupPrice: "1.490",
    promoPrice: "1.117",
    monthlyPrice: "229",
    ideal: "Ideal para talleres que quieren controlar toda la parte financiera.",
    intro: "Centro financiero completo del taller.",
    features: [
      "Todo lo del Pro",
      "Gestión automatizada de facturas recibidas e IVA soportado",
      "Balance avanzado y mayor contable",
      "Libro de compras y compras avanzadas",
      "Cuentas por pagar",
    ],
  },
];

const testimonials = [
  {
    logo: "/logocrower.png",
    name: "Multiservicios Crower",
    author: "Vanessa G.",
    role: "Administradora",
    quote:
      "Excelente sistema y amigable por demás, es muy fácil su manejo y facilita muchísimo el trabajo, además que el soporte es muy bueno, calificado, con gran conocimiento y rapidez, éxitos y gracias por servirnos.",

  },
  {
    logo: "/logomaster.png",
    name: "Master Touch",
    author: "Alex B.",
    role: "CEO",
    quote:
      "ZagaPro se adaptó a nuestra forma de trabajar y nos permite crecer con más orden.",
  
  },
];

const faqs = [
  {
    question: "¿Qué es ZagaPro?",
    answer:
      "ZagaPro es un software para talleres mecánicos en España que organiza clientes, vehículos, órdenes, facturas, cobros, compras y resultados.",
  },
  {
    question: "¿El módulo de compras es obligatorio?",
    answer:
      "No. Puedes empezar con operación, facturación y gastos básicos. Si necesitas más organización, puedes activar compras avanzadas.",
  },
  {
    question: "¿Qué incluye la promoción de crecimiento?",
    answer:
      "La promoción aplica un 25% de descuento sobre la implantación inicial. La mensualidad se mantiene igual según el plan elegido.",
  },
  {
    question: "ZagaPro incluye Verifactu?",
    answer:
      "Estamos desarrollando la integración con Verifactu para adaptarnos a la normativa española en cuanto sea obligatoria.",
  },
  {
    question: "¿Por qué no usar solo un programa de facturación?",
    answer:
      "Porque el taller necesita ver también órdenes, compras, proveedores, cobros pendientes, gastos y rentabilidad, no solo emitir facturas.",
  },
];

const seoWorkshopProblems = [
  {
    icon: FileText,
    title: "Presupuestos dispersos",
    text: "Evita presupuestos guardados en documentos sueltos, WhatsApp o carpetas que después nadie encuentra.",
  },
  {
    icon: ClipboardList,
    title: "Ordenes de trabajo en papel",
    text: "Registra trabajos, estados y datos del vehiculo en una ficha organizada para todo el equipo.",
  },
  {
    icon: ReceiptText,
    title: "Facturas manuales",
    text: "Reduce errores al facturar aprovechando información ya cargada en presupuestos y trabajos.",
  },
  {
    icon: Gauge,
    title: "Falta de control de stock",
    text: "Ten visibilidad de recambios, entradas, salidas y necesidades antes de comprar de mas.",
  },
  {
    icon: Building2,
    title: "Compras sin seguimiento",
    text: "Controla proveedores, albaranes, facturas recibidas y pagos pendientes desde el mismo sistema.",
  },
  {
    icon: BadgeEuro,
    title: "Cobros pendientes",
    text: "Detecta facturas sin cobrar y prioriza el seguimiento antes de que se acumulen al cierre de mes.",
  },
  {
    icon: MessageCircle,
    title: "Clientes sin seguimiento",
    text: "Usa WhatsApp como canal de comunicación sin perder el contexto del cliente o del vehículo.",
  },
];

const seoWorkshopFeatures = [
  "Clientes y vehículos",
  "Ordenes de trabajo",
  "Presupuestos",
  "Facturacion",
  "Compras y proveedores",
  "Stock de repuestos",
  "Cuentas por cobrar",
  "Balance de ingresos y gastos",
  "Avisos por WhatsApp",
];

const seoWorkshopAdvantages = [
  ["Menos errores", "Datos conectados desde presupuesto hasta factura."],
  ["Más control", "Trabajos, cobros, compras y proveedores visibles."],
  ["Más rapidez", "Menos tareas repetidas y menos búsquedas manuales."],
  ["Mejor imagen", "Documentos y seguimiento más profesionales para el cliente."],
  ["Información centralizada", "Clientes, vehículos, historial y facturas en una sola plataforma."],
  ["Mejor seguimiento comercial", "Avisos y pendientes para no dejar clientes sin respuesta."],
];

const seoWorkshopFaqs = [
  {
    question: "¿ZagaPro sirve para talleres pequeños?",
    answer:
      "Sí. ZagaPro está pensado para talleres que quieren empezar con una gestión ordenada de clientes, vehículos, presupuestos, órdenes, facturas y cobros.",
  },
  {
    question: "¿Puedo hacer presupuestos y convertirlos en facturas?",
    answer:
      "Sí. Puedes crear presupuestos y aprovechar esa información para avanzar hacia trabajos, facturas y seguimiento sin duplicar datos.",
  },
  {
    question: "¿Puedo controlar clientes y vehículos?",
    answer:
      "Sí. ZagaPro centraliza datos de clientes, matrículas, vehículos, historial de trabajos, documentos y seguimiento.",
  },
  {
    question: "Incluye stock de repuestos?",
    answer:
      "ZagaPro contempla gestión de repuestos e inventario para tener mejor visibilidad de entradas, salidas y necesidades del taller.",
  },
  {
    question: "Puedo registrar compras de proveedores?",
    answer:
      "Sí. Puedes registrar proveedores, compras, albaranes, facturas recibidas y cuentas por pagar según el plan y módulos activos.",
  },
  {
    question: "Puedo enviar avisos por WhatsApp?",
    answer:
      "ZagaPro ayuda a mantener el seguimiento por WhatsApp para avisos y comunicacion con clientes sin perder el contexto del taller.",
  },
  {
    question: "Necesito instalar algo?",
    answer:
      "No. ZagaPro funciona como software web, por lo que puedes acceder desde navegador con la configuración adecuada para tu taller.",
  },
  {
    question: "Puedo solicitar una demo?",
    answer:
      "Sí. Puedes solicitar una demo para ver cómo ZagaPro se adapta al flujo real de tu taller mecánico.",
  },
];

const seoScreenshots = productSlides.slice(0, 6);

function setMetaAttribute(selector, attribute, value) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    if (selector.includes("property=")) {
      element.setAttribute("property", selector.match(/property="([^"]+)"/)?.[1] || "");
    } else {
      element.setAttribute("name", selector.match(/name="([^"]+)"/)?.[1] || "");
    }
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

function SeoWorkshopHead() {
  React.useEffect(() => {
    const title = "Software para talleres mecánicos | ZagaPro";
    const description =
      "Software para talleres mecánicos para gestionar clientes, vehículos, órdenes de trabajo, presupuestos, facturas, compras, stock y cobros desde una sola plataforma.";
    const canonicalUrl = "https://zagapro.es/software-talleres-mecanicos";
    const imageUrl = "https://zagapro.es/hero-zagapro.png";

    document.title = title;
    setMetaAttribute('meta[name="description"]', "content", description);
    setMetaAttribute('meta[property="og:title"]', "content", title);
    setMetaAttribute('meta[property="og:description"]', "content", description);
    setMetaAttribute('meta[property="og:url"]', "content", canonicalUrl);
    setMetaAttribute('meta[property="og:type"]', "content", "website");
    setMetaAttribute('meta[property="og:image"]', "content", imageUrl);
    setMetaAttribute('meta[name="twitter:card"]', "content", "summary_large_image");
    setMetaAttribute('meta[name="twitter:title"]', "content", title);
    setMetaAttribute('meta[name="twitter:description"]', "content", description);
    setMetaAttribute('meta[name="twitter:image"]', "content", imageUrl);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: title,
          description,
          inLanguage: "es-ES",
          isPartOf: { "@id": "https://zagapro.es/#website" },
          about: { "@id": "https://zagapro.es/#software" },
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${canonicalUrl}#breadcrumb`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Inicio",
              item: "https://zagapro.es/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Software para talleres mecánicos",
              item: canonicalUrl,
            },
          ],
        },
        {
          "@type": "SoftwareApplication",
          "@id": "https://zagapro.es/#software",
          name: "ZagaPro",
          url: "https://zagapro.es/",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          inLanguage: "es-ES",
          description,
          featureList: seoWorkshopFeatures,
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "EUR",
            lowPrice: "129",
            highPrice: "229",
            offerCount: "3",
            url: "https://zagapro.es/#planes",
          },
        },
        {
          "@type": "FAQPage",
          "@id": `${canonicalUrl}#faq`,
          mainEntity: seoWorkshopFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        },
      ],
    };

    let script = document.head.querySelector("#software-talleres-schema");
    if (!script) {
      script = document.createElement("script");
      script.id = "software-talleres-schema";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }, []);

  return null;
}

function SoftwareWorkshopsPage({ openContact, contactSection }) {
  return (
    <>
      <SeoWorkshopHead />
      <section className="seo-hero" id="inicio">
        <nav className="nav" aria-label="Navegacion principal">
          <a className="brand" href="/" aria-label="ZagaPro inicio">
            <img src="/logozagapro.png" alt="ZagaPro" />
          </a>
          <div className="nav-links">
            <a href="#que-es">Qué es</a>
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#capturas">Capturas</a>
            <button type="button" onClick={openContact}>
              Solicita una demo
            </button>
          </div>
          <button className="nav-cta" type="button" onClick={openContact}>
            <Mail size={17} />
            Contactar
          </button>
        </nav>

        <div className="seo-hero-inner">
          <div>
            <p className="eyebrow">Software para talleres mecánicos</p>
            <h1>Software para talleres mecánicos</h1>
            <p className="seo-hero-copy">
              Gestiona clientes, vehículos, órdenes de trabajo, presupuestos,
              facturas, compras, stock y cobros desde una sola plataforma.
            </p>
            <div className="hero-actions">
              <button className="primary-button" type="button" onClick={openContact}>
                Solicita una demo
                <ArrowRight size={18} />
              </button>
              <a className="secondary-button" href="#funcionalidades">
                Ver funcionalidades
              </a>
            </div>
          </div>
          <div className="seo-hero-panel">
            <strong>ZagaPro conecta el taller completo</strong>
            <span>Presupuesto</span>
            <span>Orden de trabajo</span>
            <span>Factura y cobro</span>
            <span>Compra y proveedor</span>
          </div>
        </div>
      </section>

      <section className="seo-section split" id="que-es">
        <div>
          <p className="section-kicker">Gestión diaria</p>
          <h2>¿Qué es un software para talleres mecánicos?</h2>
        </div>
        <p className="section-lead">
          Es una herramienta para centralizar la gestión diaria del taller:
          recepción del vehículo, cliente, presupuesto, orden de trabajo,
          repuestos, proveedor, factura, cobro y seguimiento. ZagaPro evita que
          la información quede repartida entre papel, Excel y WhatsApp.
        </p>
      </section>

      <section className="seo-section" id="problemas">
        <div className="seo-heading">
          <p className="section-kicker">Problemas que resuelve ZagaPro</p>
          <h2>Cuando el taller crece, el desorden también crece.</h2>
        </div>
        <div className="seo-card-grid">
          {seoWorkshopProblems.map((problem) => {
            const Icon = problem.icon;
            return (
              <article className="seo-card" key={problem.title}>
                <Icon size={24} />
                <h3>{problem.title}</h3>
                <p>{problem.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="seo-section" id="funcionalidades">
        <div className="seo-heading">
          <p className="section-kicker">Funciones de ZagaPro para talleres</p>
          <h2>Todo lo importante del taller en una sola plataforma.</h2>
        </div>
        <div className="seo-feature-list">
          {seoWorkshopFeatures.map((feature) => (
            <span key={feature}>
              <CheckCircle2 size={18} />
              {feature}
            </span>
          ))}
        </div>
      </section>

      <section className="seo-section" id="capturas">
        <div className="seo-heading">
          <p className="section-kicker">Capturas de pantalla</p>
          <h2>Ve cómo se organiza el trabajo dentro de ZagaPro.</h2>
        </div>
        <div className="seo-screenshot-grid">
          {seoScreenshots.map((shot) => (
            <figure key={shot.title}>
              <img src={shot.src} alt={shot.alt} loading="lazy" />
              <figcaption>{shot.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="seo-section seo-compare-section">
        <div className="seo-heading">
          <p className="section-kicker">Frente al papel y Excel</p>
          <h2>Menos tareas sueltas. Mas control del taller.</h2>
        </div>
        <div className="seo-advantage-grid">
          {seoWorkshopAdvantages.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section" id="preguntas">
        <div className="faq-heading">
          <p className="section-kicker">Preguntas frecuentes</p>
          <h2>Dudas habituales sobre ZagaPro.</h2>
          <p>
            Respuestas directas para talleres que buscan un software de gestión
            claro, práctico y preparado para crecer.
          </p>
        </div>
        <div className="faq-grid">
          {seoWorkshopFaqs.map((faq) => (
            <article className="faq-card" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="demo-section">
        <div>
          <p className="section-kicker">Demo personalizada</p>
          <h2>Digitaliza la gestión de tu taller con ZagaPro</h2>
          <p>
            Revisa tu flujo actual y descubre cómo ordenar presupuestos,
            órdenes, facturas, compras, stock y cobros desde una sola
            plataforma.
          </p>
        </div>
        <button className="primary-button" type="button" onClick={openContact}>
          Solicita una demo
          <ArrowRight size={18} />
        </button>
      </section>

      {contactSection}

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <img src="/logozagapro.png" alt="ZagaPro" />
            <p>
              Software para talleres mecánicos: clientes, vehículos, órdenes,
              facturas, compras, stock, cobros y rentabilidad.
            </p>
          </div>
          <div className="footer-column">
            <strong>Enlaces</strong>
            <a href="/">Inicio</a>
            <a href="/#planes">Planes</a>
            <a href="/#testimonios">Clientes</a>
          </div>
          <div className="footer-column">
            <strong>Contacto</strong>
            <button className="footer-contact" type="button" onClick={openContact}>
              <Mail size={17} />
              Solicita una demo
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  const demoWhatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappTemplate)}`;
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

    const trimmedEmail = contactForm.email.trim();
    if (!emailPattern.test(trimmedEmail)) {
      setContactStatus({
        type: "error",
        text: "Introduce un correo electrónico válido para poder responderte.",
      });
      return;
    }

    const payload = {
      ...contactForm,
      name: contactForm.name.trim(),
      company: contactForm.company.trim() || "Demo solicitada desde landing",
      email: trimmedEmail,
      phone: contactForm.phone.trim(),
      businessType:
        contactForm.businessType.trim() || "Demo solicitada desde landing",
      message:
        contactForm.message.trim() ||
        "Quiere solicitar una demo personalizada de ZagaPro.",
    };

    try {
      setContactSubmitting(true);
      setContactStatus(null);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data?.message || "No se pudo enviar el mensaje.");
      }

      setSuccessModal({
        text: `${payload.name}, tu consulta ha sido enviada a ZagaPro. Te responderemos con una propuesta concreta.`,
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

  const isSoftwareWorkshopsRoute =
    window.location.pathname.replace(/\/$/, "") ===
    "/software-talleres-mecanicos";

  const contactSection = contactVisible ? (
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
          <div className={`contact-status ${contactStatus.type}`} role="status">
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
            Email
            <input
              type="email"
              value={contactForm.email}
              onChange={updateContactField("email")}
              autoComplete="email"
              inputMode="email"
              pattern={emailPattern.source}
              required
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Telefono
            <input
              value={contactForm.phone}
              onChange={updateContactField("phone")}
            />
          </label>
        </div>
        <label>
          Comentarios
          <textarea
            rows={4}
            value={contactForm.message}
            onChange={updateContactField("message")}
            placeholder="Cuéntanos qué quieres revisar: demo, precios, compras, usuarios o puesta en marcha."
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
  ) : null;

  const successDialog = successModal ? (
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
  ) : null;

  if (isSoftwareWorkshopsRoute) {
    return (
      <main className="seo-page">
        <SoftwareWorkshopsPage
          openContact={openContact}
          contactSection={contactSection}
        />
        {successDialog}
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

  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="nav" aria-label="Navegación principal">
          <a className="brand" href="#inicio" aria-label="ZagaPro inicio">
            <img src="/logozagapro.png" alt="ZagaPro" />
          </a>
          <div className="nav-links">
            <a href="#funciona">Cómo funciona</a>
            <a href="#modulos">Módulos</a>
            <a href="#planes">Precios</a>
            <button type="button" onClick={openContact}>
              Solicitar demo
            </button>
          </div>
          <button className="nav-cta" type="button" onClick={openContact}>
            <Mail size={17} />
            Contactar
          </button>
          <a
            className="client-access-cta"
            href="https://zagapro.store"
            target="_blank"
            rel="noreferrer"
          >
            <span>Ya eres cliente?</span>
            Accede al sistema
            <LogIn size={17} />
          </a>
        </nav>

        <div className="hero-content">
          <div className="hero-copy-block">
            <p className="eyebrow">
              Software para talleres mecánicos en España
            </p>
            <h1>
             Todo tu taller organizado desde una sola plataforma.
            </h1>
            <p className="hero-copy">
              Dedica menos tiempo al papeleo y más tiempo a reparar vehículos.
              Toda la gestión de tu taller en un único sistema.
            </p>

            <div className="hero-actions">
              <button
                className="primary-button"
                type="button"
                onClick={openContact}
              >
                Solicitar demo
                <ArrowRight size={18} />
              </button>
              <a className="secondary-button" href="#planes">
                Ver precios
              </a>
            </div>
            <p className="hero-trust">
              Ya utilizado por talleres reales en España.
            </p>
            <div className="hero-tags" aria-label="Beneficios principales">
              <span>Demo personalizada</span>
              <span>-25% en implantación</span>
              <span>Compras y proveedores</span>
              <span>WhatsApp visible</span>
            </div>
          </div>

          <div
            className="product-showcase"
            aria-label="Capturas del producto ZagaPro"
          >
            <div className="showcase-status">
              <span>Operación activa</span>
              <strong>Capturas reales del sistema</strong>
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
                    {/* <span className="slide-label">{slide.label}</span> */}
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

            <section className="positioning-band">
        Mientras otros programas solo hacen facturas, ZagaPro organiza todo el
        taller.
      </section>

      <section className="proof-band" aria-label="Confianza inicial">
        <div>
          <strong>Desarrollado junto a talleres reales.</strong>
          <span>Producto creado desde problemas reales de operativa diaria.</span>
        </div>
        <div>
          <strong>En funcionamiento en talleres.</strong>
          <span>Clientes, órdenes, facturas, cobros y compras en uso real.</span>
        </div>
        <div>
          <strong>Promocion crecimiento.</strong>
          <span>
            25% de descuento sobre la implantación inicial para las primeras
            implantaciones.
          </span>
        </div>
      </section>


      <section className="premium-product-section">
        <div className="premium-product-copy">
          <p className="section-kicker">Producto en uso real</p>
          <h2>Una vista profesional del taller desde el primer día.</h2>
          <p>
            ZagaPro no se queda en emitir documentos. Te muestra clientes,
            vehículos, órdenes, cobros, compras y balance en una pantalla clara
            para tomar decisiones sin perder tiempo.
          </p>
          <button className="primary-button" type="button" onClick={openContact}>
            Solicitar demo personalizada
            <ArrowRight size={18} />
          </button>
        </div>
    
          <div className="laptop-screen">
            <img
              src="/imagenrealzagapro.jpeg"
              alt="Dashboard real de ZagaPro abierto en un portátil."
              loading="lazy"
            />
          </div>
        
     
      </section>

      <section className="emotion-strip" aria-label="Resultados esperados">
        {emotionalBenefits.map((benefit) => (
          <span key={benefit}>
            <CheckCircle2 size={18} />
            {benefit}
          </span>
        ))}
      </section>

      <section className="section split" id="problemas">
        <div>
          <p className="section-kicker">Dolores reales del taller</p>
          <h2>Lo que te quita tiempo también te quita margen.</h2>
        </div>
        <p className="section-lead">
          ZagaPro no empieza hablando de módulos. Empieza resolviendo lo que
          pasa cada día: información perdida, cobros que se atrasan y trabajos
          que no sabes si realmente dejaron beneficio.
        </p>
      </section>

      <section
        className="feature-grid compact-grid"
        aria-label="Problemas frecuentes"
      >
        {problems.map((problem) => {
          const Icon = problem.icon;
          return (
            <article className="feature-card" key={problem.title}>
              <Icon size={24} />
              <h3>{problem.title}</h3>
              <p>{problem.text}</p>
            </article>
          );
        })}
      </section>
{/* 
      <section className="section impact" id="funciona">
        <div className="impact-panel">
          <Search size={28} />
          <h2>Como funciona ZagaPro</h2>
          <p>
            Cada paso deja información útil para el siguiente. Evitas duplicar
            datos y mantienes el taller ordenado desde la entrada del vehículo
            hasta el resultado financiero.
          </p>
        </div>
        <div className="workflow" aria-label="Flujo operativo">
          {workflow.map((step) => (
            <div key={step}>
              <CheckCircle2 size={21} />
              {step}
            </div>
          ))}
        </div>
      </section> */}

      <section className="modules-section" id="modulos">
        <div className="modules-heading">
          <div>
            <p className="section-kicker">Módulos </p>
            <h2>Todo lo que puedes controlar desde un solo lugar</h2>
          </div>
<p>Toda la información se conecta automáticamente entre los módulos.</p>
        </div>

        <div className="modules-grid">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <article
                className="module-card compact-module"
                key={module.title}
              >
                <div className="module-icon">
                  <Icon size={24} />
                </div>
                <div>
                  <h3>{module.title}</h3>
                  <p>{module.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="purchase-section">
        <div>
          <p className="section-kicker">Compras y proveedores</p>
          <h2>La mayoría de programas terminan cuando emites una factura.</h2>
          <strong>ZagaPro también gestiona compras, proveedores, IVA soportado y cuentas por pagar.</strong>
        </div>
        <div>
          <p>
            Centraliza facturas recibidas, albaranes, pagos a proveedor e IVA
            soportado. ZagaPro no solo te ayuda a facturar: también te muestra
            lo que compras, lo que debes y cómo impacta en el resultado real del
            taller.
          </p>
          <div className="purchase-tags">
            {purchaseTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div
            className="purchase-comparison"
            aria-label="Comparación de compras frente a otros sistemas"
          >
            <div>
              <strong>Muchos ERPs</strong>
              {purchaseComparison.map(([label, common]) => (
                <span className={common ? "ok" : "no"} key={`erp-${label}`}>
                  {common ? "+" : "-"} {label}
                </span>
              ))}
            </div>
            <div>
              <strong>ZagaPro</strong>
              {purchaseComparison.map(([label, , zaga]) => (
                <span className={zaga ? "ok" : "no"} key={`zaga-${label}`}>
                  {zaga ? "+" : "-"} {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="comparison-section">
        <div className="comparison-heading">
          <p className="section-kicker">Antes y después</p>
          <h2>Menos herramientas sueltas. Más taller bajo control.</h2>
        </div>
        <div className="comparison-cards">
          <article>
            <h3>- Sin ZagaPro</h3>
            {comparisonRows.map(([without]) => (
              <p key={without}>
                <span>-</span>
                {without}
              </p>
            ))}
          </article>
          <article className="positive">
            <h3>+ Con ZagaPro</h3>
            {comparisonRows.map(([, withZaga]) => (
              <p key={withZaga}>
                <span>+</span>
                {withZaga}
              </p>
            ))}
          </article>
        </div>
      </section>

      <section className="spain-section">
        <div>
          <p className="section-kicker">España y Verifactu</p>
          <h2>Preparado para evolucionar con la normativa española.</h2>
        </div>
        <p>
          Estamos desarrollando la integración con Verifactu para adaptarnos a
          la normativa española en cuanto sea obligatoria, manteniendo una base
          fiscal ordenada desde el inicio.
        </p>
      </section>

      <section className="pricing-section pricing-section-pro" id="planes">
        <div className="pricing-copy">
          <p className="section-kicker">Planes y precios</p>
          <h2>Elige el nivel de control que necesita tu taller.</h2>
          <p>
            Promoción válida para las primeras implantaciones: 25% de descuento
            sobre la implantación inicial. La mensualidad no tiene descuento.
          </p>
        </div>

        <div className="plans-grid">
          {pricingPlans.map((plan) => (
            <article
              className={`price-card plan-card ${plan.featured ? "featured-plan" : ""}`}
              key={plan.name}
            >
              {plan.badge && <span className="launch-badge">{plan.badge}</span>}
              <div className="price-icon">
                <BadgeEuro size={26} />
              </div>
              <p className="price-label">{plan.name}</p>
              <p className="plan-ideal">{plan.ideal}</p>
              <p className="plan-intro">{plan.intro}</p>
              <div className="plan-price">
                <div className="plan-price-line">
                  <small>Implantación</small>
                  <span className="old-setup">{plan.setupPrice} EUR</span>
                </div>
                <div className="plan-promo">
                  <small>Primeras implantaciones</small>
                  <strong>{plan.promoPrice} EUR</strong>
                </div>
                <div className="plan-price-line monthly">
                  <small>Mensualidad</small>
                  <span>
                    {plan.monthlyPrice} EUR<em>/mes</em>
                  </span>
                </div>
              </div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button
                className={
                  plan.featured ? "primary-button" : "secondary-button"
                }
                type="button"
                onClick={openContact}
              >
                Solicitar {plan.name}
                <ArrowRight size={18} />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials-section" id="testimonios">
        <div className="testimonials-heading">
          <p className="section-kicker">Clientes reales</p>
          <h2>Desarrollado junto a talleres reales.</h2>
          <p>
            Crower y Master Touch están satisfechos con el producto y han
            ayudado a convertir ZagaPro en una herramienta pegada a la operativa
            diaria del taller.
          </p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <img src={testimonial.logo} alt={testimonial.name} />
              <blockquote>{testimonial.quote}</blockquote>
              <h3>{testimonial.name}</h3>
              <span className="testimonial-author">
                {testimonial.author} · {testimonial.role}
              </span>
              <p>{testimonial.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section" id="preguntas">
        <div className="faq-heading">
          <p className="section-kicker">Preguntas frecuentes</p>
          <h2>Lo justo para decidir si merece una demo.</h2>
          <p>
            Menos texto, más claridad: si el taller necesita orden operativo y
            financiero, ZagaPro encaja.
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

      <section className="demo-section" id="demo">
        <div>
          <p className="section-kicker">Demo personalizada para tu taller</p>
          <h2>Solicita tu demo gratuita.</h2>
          <p>
           En 20 minutos verás cómo organizar tu taller sin cambiar tu forma de trabajar.
          </p>
        </div>
        <button className="primary-button" type="button" onClick={openContact}>
          Solicitar una demo
          <ArrowRight size={18} />
        </button>
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
                Email
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={updateContactField("email")}
                  autoComplete="email"
                  inputMode="email"
                  pattern={emailPattern.source}
                  required
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                Telefono
                <input
                  value={contactForm.phone}
                  onChange={updateContactField("phone")}
                />
              </label>
            </div>
            <label>
              Comentarios
              <textarea
                rows={4}
                value={contactForm.message}
                onChange={updateContactField("message")}
                placeholder="Cuéntanos qué quieres revisar: demo, precios, compras, usuarios o puesta en marcha."
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
              Software para talleres mecánicos: clientes, vehículos, órdenes,
              facturas, cobros, compras, proveedores y rentabilidad.
            </p>
          </div>
          <div className="footer-column">
            <strong>Producto</strong>
            <a href="/software-talleres-mecanicos">
              Software talleres mecánicos
            </a>
            <a href="#funciona">Cómo funciona</a>
            <a href="#modulos">Módulos</a>
            <a href="#planes">Planes</a>
            <a href="#testimonios">Clientes</a>
          </div>
          <div className="footer-column">
            <strong>Soluciones</strong>
            <span>Talleres mecánicos</span>
            <span>Chapa y pintura</span>
            <span>Electromecánica</span>
            <span>Talleres en Valencia</span>
          </div>
          <div className="footer-column">
            <strong>Contacto</strong>
            <button
              className="footer-contact"
              type="button"
              onClick={openContact}
            >
              <Mail size={17} />
              Contactar
            </button>
            <a href={demoWhatsappHref} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a
              className="footer-client-access"
              href="https://zagapro.store"
              target="_blank"
              rel="noreferrer"
            >
              ¿Ya eres cliente? Accede al sistema
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>ZagaPro</span>
          <span>Gestión profesional para talleres mecánicos en España.</span>
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
