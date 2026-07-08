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

const whatsappTemplate = `Hola Gerardo, me gustaria solicitar una demo de ZagaPro para mi taller.

Mi nombre es:
Taller:
Ciudad:

Quiero revisar como ZagaPro puede ayudarme con ordenes, facturas, cobros, compras y rentabilidad.`;

const problems = [
  {
    icon: ClipboardList,
    title: "Pierdes tiempo buscando informacion del cliente?",
    text: "Todo el historial del cliente en segundos.",
  },
  {
    icon: ReceiptText,
    title: "Se te quedan facturas pendientes por cobrar?",
    text: "Cobra antes y ve que esta facturado, pagado o pendiente sin revisar conversaciones ni papeles.",
  },
  {
    icon: Gauge,
    title: "Sabes cuanto gana realmente cada trabajo?",
    text: "Gestiona compras, proveedores, gastos y rentabilidad desde el mismo sistema.",
  },
];

const emotionalBenefits = [
  "Recupera horas cada semana.",
  "Deja de perder trabajos por falta de seguimiento.",
  "Cobra antes y con mas orden.",
  "Dedica menos tiempo a la administración del taller.",
  "Encuentra cualquier reparacion en segundos.",
];

const workflow = [
  "Recepcion",
  "Diagnostico",
  "Pre-orden",
  "Orden",
  "Factura",
  "Cobro",
  "Rentabilidad",
];

const comparisonRows = [
  ["Excel", "Todo integrado"],
  ["WhatsApp disperso", "Seguimiento ordenado"],
  ["Papeles y notas", "Historial por cliente y vehiculo"],
  ["Facturas aisladas", "Gestion completa del taller"],
  ["No sabes cuanto ganas", "Rentabilidad visible"],
];

const purchaseComparison = [
  ["Facturacion", true, true],
  ["Clientes", true, true],
  ["Presupuestos", true, true],
  ["Compras", false, true],
  ["IVA soportado", false, true],
  ["Cuentas por pagar", false, true],
];

const modules = [
  {
    icon: UsersRound,
    title: "Clientes y vehiculos",
    text: "Historial, matriculas, datos y trabajos localizados.",
  },
  {
    icon: ClipboardList,
    title: "Ordenes de trabajo",
    text: "Estados, tareas, responsables y seguimiento diario.",
  },
  {
    icon: FileText,
    title: "Presupuestos",
    text: "Documentos claros que avanzan hacia orden y factura.",
  },
  {
    icon: ReceiptText,
    title: "Facturacion y cobros",
    text: "Facturas, abonos, credito y pendientes de cobro.",
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
    alt: "Panel principal de ZagaPro con indicadores de gestion del taller.",
  },
  {
    label: "CLIENTES",
    title: "Vista operativa",
    src: "/Pantalla2.png",
    alt: "Vista operativa de ZagaPro.",
  },
  {
    label: "ORDENES",
    title: "Ordenes de trabajo",
    src: "/GenerarOrdenes.png",
    alt: "Pantalla para generar ordenes de trabajo en ZagaPro.",
  },
  {
    label: "FACTURACION",
    title: "Emite una factura en menos de un minuto.",
    src: "/Emision_reimpresion_de_facturas.png",
    alt: "Pantalla de emision y reimpresion de facturas en ZagaPro.",
  },
  {
    label: "COBROS",
    title: "Registra facturas cobradas y pendientes de cobro.",
    src: "/pantalla4.png",
    alt: "Modulo de cuentas por cobrar en ZagaPro.",
  },
  {
    label: "COMPRAS",
    title: "Registra y monitorea en tiempo real tus pagos pendientes a proveedores.",
    src: "/pantalla5.png",
    alt: "Modulo de compras y proveedores en ZagaPro.",
  },
  {
    label: "BALANCE",
    title: "Monitorea tus ganancias al momento por ventas de recambios y servicios",
    src: "/RentabilidadLineasFacturadas.png",
    alt: "Pantalla de rentabilidad de lineas facturadas en ZagaPro.",
  },
];

const pricingPlans = [
  {
    name: "Basico",
    setupPrice: "599",
    promoPrice: "449",
    monthlyPrice: "129",
    ideal: "Ideal para talleres pequenos.",
    intro: "Operacion diaria del taller.",
    features: [
      "Clientes y vehiculos",
      "Ordenes de trabajo",
      "Presupuestos",
      "Facturacion",
      "Cobros", "Rentabilidad por recambio y servicio",
    ],
  },
  {
    name: "Pro",
    setupPrice: "899",
    promoPrice: "674",
    monthlyPrice: "169",
    badge: "Mas vendido",
    featured: true,
    ideal: "Ideal para talleres de 2-5 empleados.",
    intro: "Mas control comercial, operativo y financiero.",
    features: [
      "Todo lo del Basico",
      "Registro y conversion de albaranes a facturas",
      "Gestion avanzada de proveedores",
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
      "Gestion automatizada de facturas recibidas e IVA soportado",
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
      "ZagaPro se adapto a nuestra forma de trabajar y nos permite crecer con mas orden.",
  
  },
];

const faqs = [
  {
    question: "Que es ZagaPro?",
    answer:
      "ZagaPro es un software para talleres mecanicos en Espana que organiza clientes, vehiculos, ordenes, facturas, cobros, compras y resultados.",
  },
  {
    question: "El modulo de compras es obligatorio?",
    answer:
      "No. Puedes empezar con operacion, facturacion y gastos basicos. Si necesitas mas organizacion, puedes activar compras avanzadas.",
  },
  {
    question: "Que incluye la promocion de crecimiento?",
    answer:
      "La promocion aplica un 25% de descuento sobre la implantacion inicial. La mensualidad se mantiene igual segun el plan elegido.",
  },
  {
    question: "ZagaPro incluye Verifactu?",
    answer:
      "Estamos desarrollando la integracion con Verifactu para adaptarnos a la normativa espanola en cuanto sea obligatoria.",
  },
  {
    question: "Por que no usar solo un programa de facturacion?",
    answer:
      "Porque el taller necesita ver tambien ordenes, compras, proveedores, cobros pendientes, gastos y rentabilidad, no solo emitir facturas.",
  },
];

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
        text: "Introduce un correo electronico valido para poder responderte.",
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
            <a href="#funciona">Como funciona</a>
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
              Software para talleres mecanicos en Espana
            </p>
            <h1>
             Todo tu taller organizado desde una sola plataforma.
            </h1>
            <p className="hero-copy">
              Dedica menos tiempo al papeleo y mas tiempo a reparar vehiculos.
              Toda la gestion de tu taller en un unico sistema.
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
              Ya utilizado por talleres reales en Espana.
            </p>
            <div className="hero-tags" aria-label="Beneficios principales">
              <span>Demo personalizada</span>
              <span>-25% en implantacion</span>
              <span>Compras y proveedores</span>
              <span>WhatsApp visible</span>
            </div>
          </div>

          <div
            className="product-showcase"
            aria-label="Capturas del producto ZagaPro"
          >
            <div className="showcase-status">
              <span>Operacion activa</span>
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
          <span>Clientes, ordenes, facturas, cobros y compras en uso real.</span>
        </div>
        <div>
          <strong>Promocion crecimiento.</strong>
          <span>
            25% de descuento sobre la implantacion inicial para las primeras
            implantaciones.
          </span>
        </div>
      </section>


      <section className="premium-product-section">
        <div className="premium-product-copy">
          <p className="section-kicker">Producto en uso real</p>
          <h2>Una vista profesional del taller desde el primer dia.</h2>
          <p>
            ZagaPro no se queda en emitir documentos. Te muestra clientes,
            vehiculos, ordenes, cobros, compras y balance en una pantalla clara
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
              alt="Dashboard real de ZagaPro abierto en un portatil."
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
          <h2>Lo que te quita tiempo tambien te quita margen.</h2>
        </div>
        <p className="section-lead">
          ZagaPro no empieza hablando de módulos. Empieza resolviendo lo que
          pasa cada dia: informacion perdida, cobros que se atrasan y trabajos
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
            Cada paso deja informacion util para el siguiente. Evitas duplicar
            datos y mantienes el taller ordenado desde la entrada del vehiculo
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
            soportado. ZagaPro no solo te ayuda a facturar: tambien te muestra
            lo que compras, lo que debes y como impacta en el resultado real del
            taller.
          </p>
          <div className="purchase-tags">
            {purchaseTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div
            className="purchase-comparison"
            aria-label="Comparacion de compras frente a otros sistemas"
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
          <p className="section-kicker">Antes y despues</p>
          <h2>Menos herramientas sueltas. Mas taller bajo control.</h2>
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
          <p className="section-kicker">Espana y Verifactu</p>
          <h2>Preparado para evolucionar con la normativa espanola.</h2>
        </div>
        <p>
          Estamos desarrollando la integracion con Verifactu para adaptarnos a
          la normativa espanola en cuanto sea obligatoria, manteniendo una base
          fiscal ordenada desde el inicio.
        </p>
      </section>

      <section className="pricing-section pricing-section-pro" id="planes">
        <div className="pricing-copy">
          <p className="section-kicker">Planes y precios</p>
          <h2>Elige el nivel de control que necesita tu taller.</h2>
          <p>
            Promocion valida para las primeras implantaciones: 25% de descuento
            sobre la implantacion inicial. La mensualidad no tiene descuento.
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
                  <small>Implantacion</small>
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
            Crower y Master Touch estan satisfechos con el producto y han
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
            Menos texto, mas claridad: si el taller necesita orden operativo y
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
            <h2>Cuentanos que taller quieres gestionar con ZagaPro.</h2>
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
              Software para talleres mecanicos: clientes, vehiculos, ordenes,
              facturas, cobros, compras, proveedores y rentabilidad.
            </p>
          </div>
          <div className="footer-column">
            <strong>Producto</strong>
            <a href="#funciona">Como funciona</a>
            <a href="#modulos">Módulos</a>
            <a href="#planes">Planes</a>
            <a href="#testimonios">Clientes</a>
          </div>
          <div className="footer-column">
            <strong>Soluciones</strong>
            <span>Talleres mecanicos</span>
            <span>Chapa y pintura</span>
            <span>Electromecanica</span>
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
              Ya eres cliente? Accede al sistema
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>ZagaPro</span>
          <span>Gestion profesional para talleres mecanicos en Espana.</span>
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
