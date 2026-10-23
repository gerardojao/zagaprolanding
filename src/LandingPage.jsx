import React from "react";
import {
  ArrowRight,
  BadgeEuro,
  BarChart3,
  Check,
  ChevronDown,
  ClipboardCheck,
  CirclePlay,
  ExternalLink,
  LogIn,
  Mail,
  Menu,
  WalletCards,
  X,
} from "lucide-react";

const SalesAgentWidget = React.lazy(() => import("./SalesAgentWidget"));

const journey = [
  {
    label: "Recepción",
    eyebrow: "01 · Recepción",
    title: "El vehículo entra con su información ordenada.",
    text: "Registra cliente, matrícula, vehículo y trabajo solicitado desde la nueva orden.",
    image: "/GenerarOrdenes.png",
    alt: "Pantalla real de nueva orden con datos del cliente y del vehículo en ZagaPro.",
  },
  {
    label: "Orden de trabajo",
    eyebrow: "02 · Orden de trabajo",
    title: "Cada orden muestra vehículo, trabajo y estado.",
    text: "Consulta los trabajos registrados y actualiza su estado desde el mismo listado.",
    image: "/ReimprimirFacturas.png",
    alt: "Listado real de trabajos con vehículo, cliente, descripción y estado en ZagaPro.",
  },
  {
    label: "Factura",
    eyebrow: "03 · Factura",
    title: "Factura sin volver a escribir el trabajo.",
    text: "Aprovecha los datos ya registrados y mantén el cobro conectado.",
    image: "/Emision_reimpresion_de_facturas.png",
    alt: "Pantalla real de emisión de facturas en ZagaPro.",
  },
];

const controlViews = [
  {
    label: "Los trabajos del taller",
    icon: ClipboardCheck,
    title: "Cada trabajo, visible de principio a fin.",
    text: "Consulta el estado de las órdenes y encuentra la información del vehículo sin perseguir papeles.",
    image: "/balance-dashboard.png",
    alt: "Dashboard real de ZagaPro con vehículos por estado y órdenes recientes.",
  },
  {
    label: "Las facturas pendientes",
    icon: WalletCards,
    title: "Sabes qué está cobrado y qué sigue pendiente.",
    text: "Revisa cuentas por cobrar desde una vista única y prioriza el seguimiento.",
    image: "/pantalla4.png",
    alt: "Pantalla real de cuentas por cobrar de ZagaPro.",
  },
  {
    label: "La rentabilidad",
    icon: BarChart3,
    title: "Comprueba qué deja margen al taller.",
    text: "Analiza la rentabilidad de recambios y servicios con información ya facturada.",
    image: "/RentabilidadLineasFacturadas.png",
    alt: "Pantalla real de rentabilidad por líneas facturadas en ZagaPro.",
  },
];

function SelectableTabs({ items, active, setActive, label, className = "" }) {
  const onKeyDown = (event, index) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % items.length;
    if (event.key === "ArrowLeft") next = (index - 1 + items.length) % items.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = items.length - 1;
    setActive(next);
    requestAnimationFrame(() => document.getElementById(`${label}-${next}`)?.focus());
  };

  return (
    <div className={`v2-tabs ${className}`} role="tablist" aria-label={label}>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <button
            id={`${label}-${index}`}
            key={item.label}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-controls={`${label}-panel`}
            tabIndex={active === index ? 0 : -1}
            className={active === index ? "is-active" : ""}
            onClick={() => setActive(index)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            {Icon && <Icon size={20} aria-hidden="true" />}
            <span>{item.label}</span>
            {className.includes("steps") && <small>{String(index + 1).padStart(2, "0")}</small>}
          </button>
        );
      })}
    </div>
  );
}

export default function LandingPage({
  openContact,
  contactSection,
  successDialog,
  pricingPlans,
  testimonials,
  faqs,
  demoWhatsappHref,
  salesAgentVisible,
  openSalesAgent,
  closeSalesAgent,
  openAdvisorContact,
}) {
  const [journeyStep, setJourneyStep] = React.useState(0);
  const [controlStep, setControlStep] = React.useState(0);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [expandedImage, setExpandedImage] = React.useState(null);
  const [videoEmail, setVideoEmail] = React.useState("");
  const [videoStatus, setVideoStatus] = React.useState(null);
  const [videoSubmitting, setVideoSubmitting] = React.useState(false);
  const currentJourney = journey[journeyStep];
  const currentControl = controlViews[controlStep];

  const closeMenu = () => setMenuOpen(false);

  React.useEffect(() => {
    if (!expandedImage) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setExpandedImage(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [expandedImage]);

  const openImage = (image, alt, title) => setExpandedImage({ image, alt, title });

  const requestVideo = async (event) => {
    event.preventDefault();
    if (videoSubmitting) return;
    const email = videoEmail.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setVideoStatus({ type: "error", text: "Introduce un email válido." });
      return;
    }

    try {
      setVideoSubmitting(true);
      setVideoStatus(null);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Solicitud de vídeo",
          company: "Solicitud desde la landing",
          email,
          phone: "",
          businessType: "Vídeo de demostración",
          message: "Solicita el vídeo corto sobre cómo gestionar una orden y convertirla en factura con ZagaPro.",
          website: "",
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data?.message || "No se pudo registrar la solicitud.");
      setVideoStatus({ type: "success", text: "Solicitud recibida. Te enviaremos el vídeo a este email." });
      setVideoEmail("");
    } catch (error) {
      setVideoStatus({ type: "error", text: error?.message || "No se pudo registrar la solicitud." });
    } finally {
      setVideoSubmitting(false);
    }
  };

  return (
    <main className="landing-v2">
      <header className="v2-header">
        <a className="v2-logo" href="#inicio" aria-label="ZagaPro, volver al inicio">
          <img src="/logozagapro.png" alt="ZagaPro" />
        </a>
        <nav className={menuOpen ? "is-open" : ""} aria-label="Navegación principal">
          <a href="#recorrido" onClick={closeMenu}>Producto</a>
          <a href="#control" onClick={closeMenu}>Beneficios</a>
          <a href="#planes" onClick={closeMenu}>Planes</a>
          <a href="#preguntas" onClick={closeMenu}>Preguntas</a>
          <a className="v2-login" href="https://app.zagapro.es" target="_blank" rel="noreferrer">
            <LogIn size={16} /> Acceso clientes
          </a>
          <button type="button" className="v2-nav-cta" onClick={() => { closeMenu(); openContact(); }}>
            Pedir una demo
          </button>
        </nav>
        <button
          className="v2-menu"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="v2-hero" id="inicio">
        <div className="v2-hero-copy">
          <p className="v2-kicker">Software de gestión para talleres mecánicos</p>
          <h1>Tu taller bajo control</h1>
          <p className="v2-hero-promise">Menos papeleo, más tiempo para trabajar.</p>
          <p className="v2-lead">Organiza órdenes, factura y controla lo que te deben desde un solo lugar.</p>
          <div className="v2-actions">
            <button className="v2-button primary" type="button" onClick={openContact}>
              Pedir una demo <ArrowRight size={18} />
            </button>
            <a className="v2-button secondary" href="#recorrido">Ver cómo funciona</a>
          </div>
          <div className="v2-hero-notes" aria-label="Información clave">
            <span><Check size={16} /> Demo personalizada</span>
            <span><Check size={16} /> Acceso desde el navegador</span>
          </div>
        </div>
        <figure className="v2-hero-visual">
          <div className="v2-window-bar"><i /><i /><i /><span className="v2-demo-brand"><img src="/logozagapro.png" alt="" /> Taller de demostración</span></div>
          <button className="v2-image-open" type="button" onClick={() => openImage("/analitycs.png", "Panel real de analítica de ZagaPro.", "Analítica del negocio")} aria-label="Ampliar panel de analítica de ZagaPro">
            <img src="/analitycs.png" alt="Panel real de analítica de ZagaPro." fetchPriority="high" />
            <span>Ampliar captura</span>
          </button>
          <figcaption><span>Producto real</span> Analítica del negocio</figcaption>
          <div className="v2-float-card orders"><ClipboardCheck size={18} /><span>Órdenes</span><strong>Trabajo organizado</strong></div>
          <div className="v2-float-card finance"><BarChart3 size={18} /><span>Rentabilidad</span><strong>Decisiones con datos</strong></div>
        </figure>
      </section>

      <section className="v2-brand-rail" aria-label="Confianza y capacidades de ZagaPro">
        <div className="v2-brand-proof">
          <span>Usado por talleres reales</span>
          <img src="/logocrower.png" alt="Multiservicios Crower" />
          <img src="/logomaster.png" alt="Master Touch" />
        </div>
        <div className="v2-capability-line" aria-label="Funciones principales">
          <span>Clientes y vehículos</span><i />
          <span>Órdenes</span><i />
          <span>Facturación</span><i />
          <span>Cobros</span><i />
          <span>Compras</span><i />
          <span>Rentabilidad</span>
        </div>
      </section>

      <section className="v2-journey" id="recorrido">
        <div className="v2-section-heading">
          <p className="v2-kicker">Vista guiada del producto</p>
          <h2>Del vehículo a la factura, sin duplicar trabajo</h2>
          <p>Selecciona un paso para recorrer pantallas reales de ZagaPro.</p>
        </div>
        <SelectableTabs items={journey} active={journeyStep} setActive={setJourneyStep} label="recorrido" className="steps" />
        <div className="v2-product-panel" id="recorrido-panel" role="tabpanel" aria-labelledby={`recorrido-${journeyStep}`}>
          <span className="v2-panel-number" aria-hidden="true">0{journeyStep + 1}</span>
          <div className="v2-product-copy">
            <p className="v2-kicker">{currentJourney.eyebrow}</p>
            <h3>{currentJourney.title}</h3>
            <p>{currentJourney.text}</p>
            <div className="v2-progress" aria-label={`Paso ${journeyStep + 1} de ${journey.length}`}>
              <span style={{ width: `${((journeyStep + 1) / journey.length) * 100}%` }} />
            </div>
            <small>{journeyStep + 1} de {journey.length}</small>
          </div>
          <figure className="v2-screen">
            <div className="v2-window-bar"><i /><i /><i /><span>ZagaPro</span></div>
            <button className="v2-image-open" type="button" onClick={() => openImage(currentJourney.image, currentJourney.alt, currentJourney.label)} aria-label={`Ampliar captura de ${currentJourney.label}`}>
              <img key={currentJourney.image} src={currentJourney.image} alt={currentJourney.alt} loading="lazy" />
              <span>Ampliar captura</span>
            </button>
          </figure>
        </div>
      </section>

      <section className="v2-video-cta" aria-labelledby="video-cta-title">
        <div className="v2-video-icon" aria-hidden="true"><CirclePlay size={25} /></div>
        <div className="v2-video-copy">
          <h2 id="video-cta-title">¿Ahora no tienes tiempo para una demo?</h2>
          <p>Te enviamos un vídeo corto para que veas cómo gestionar una orden y convertirla en factura con ZagaPro.</p>
        </div>
        <form className="v2-video-form" onSubmit={requestVideo} noValidate>
          <div className="v2-video-field">
            <Mail size={17} aria-hidden="true" />
            <label className="sr-only" htmlFor="video-email">Tu email</label>
            <input
              id="video-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="Tu email"
              value={videoEmail}
              onChange={(event) => { setVideoEmail(event.target.value); setVideoStatus(null); }}
              required
            />
          </div>
          <button type="submit" disabled={videoSubmitting}>
            {videoSubmitting ? "Enviando…" : "Recibir el vídeo"}
          </button>
          {videoStatus && <p className={`v2-video-status ${videoStatus.type}`} role="status">{videoStatus.text}</p>}
        </form>
      </section>

      <section className="v2-control" id="control">
        <div className="v2-section-heading compact">
          <p className="v2-kicker">Elige tu prioridad</p>
          <h2>¿Qué necesitas controlar mejor?</h2>
        </div>
        <div className="v2-control-layout">
          <SelectableTabs items={controlViews} active={controlStep} setActive={setControlStep} label="control" className="vertical" />
          <div className="v2-control-panel" id="control-panel" role="tabpanel" aria-labelledby={`control-${controlStep}`}>
            <div>
              <span className="v2-control-index" aria-hidden="true">0{controlStep + 1}</span>
              <p className="v2-kicker">Función real de ZagaPro</p>
              <h3>{currentControl.title}</h3>
              <p>{currentControl.text}</p>
            </div>
            <figure className="v2-screen dark">
              <div className="v2-window-bar"><i /><i /><i /><span>ZagaPro</span></div>
              <button className="v2-image-open" type="button" onClick={() => openImage(currentControl.image, currentControl.alt, currentControl.label)} aria-label={`Ampliar captura de ${currentControl.label}`}>
                <img key={currentControl.image} src={currentControl.image} alt={currentControl.alt} loading="lazy" />
                <span>Ampliar captura</span>
              </button>
            </figure>
          </div>
        </div>
      </section>

      <section className="v2-proof" id="clientes">
        <div className="v2-section-heading compact">
          <p className="v2-kicker">Talleres reales</p>
          <h2>Desarrollado junto a talleres reales</h2>
        </div>
        <div className="v2-testimonials">
          {testimonials.map((item) => (
            <figure key={item.name}>
              <img src={item.logo} alt={`Logo de ${item.name}`} loading="lazy" />
              <blockquote>“{item.quote}”</blockquote>
              <figcaption><strong>{item.author}</strong><span>{item.role} · {item.name}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="pricing-section pricing-section-pro" id="planes">
        <div className="pricing-copy">
          <p className="section-kicker">Planes y precios</p>
          <h2>Elige el nivel de control que necesita tu taller.</h2>
          <p>Una inversión inicial para ponerlo todo en marcha y una cuota mensual según el nivel de control que necesites.</p>
        </div>

        <div className="plans-grid">
          {pricingPlans.map((plan) => (
            <article className={`price-card plan-card ${plan.featured ? "featured-plan" : ""}`} key={plan.name}>
              {plan.badge && <span className="launch-badge">{plan.badge}</span>}
              <div className="price-icon"><BadgeEuro size={26} /></div>
              <p className="price-label">{plan.name}</p>
              <p className="plan-ideal">{plan.ideal}</p>
              <p className="plan-intro">{plan.intro}</p>
              <div className="plan-price">
                <div className="plan-price-item setup">
                  <span className="plan-price-eyebrow">Pago único</span>
                  <small>Implantación</small>
                  <strong>{plan.setupPrice}<em> EUR</em></strong>
                </div>
                <div className="plan-price-item monthly">
                  <span className="plan-price-eyebrow">Cuota recurrente</span>
                  <small>Mensualidad</small>
                  <strong>{plan.monthlyPrice}<em> EUR/mes</em></strong>
                </div>
              </div>
              <ul>
                {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <button className={plan.featured ? "primary-button" : "secondary-button"} type="button" onClick={openContact}>
                Solicitar {plan.name}<ArrowRight size={18} />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="v2-faq" id="preguntas">
        <div className="v2-section-heading compact">
          <p className="v2-kicker">Antes de decidir</p>
          <h2>Preguntas frecuentes</h2>
        </div>
        <div className="v2-faq-list">
          {[
            ...faqs,
            { question: "¿Cómo es la puesta en marcha?", answer: "La implantación inicial prepara ZagaPro para el taller y permite empezar con la configuración adecuada al plan contratado." },
            { question: "¿Qué soporte incluye?", answer: "ZagaPro ofrece soporte para acompañarte en el uso del sistema. El plan Pro incluye soporte prioritario." },
            { question: "¿Desde dónde puedo acceder?", answer: "ZagaPro es una aplicación web: puedes acceder desde el navegador con tu cuenta de cliente." },
          ].map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}<ChevronDown size={20} /></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="demo-section v2-demo-original" id="demo">
        <div>
          <p className="section-kicker">Demo personalizada para tu taller</p>
          <h2>Solicita tu demo gratuita.</h2>
          <p>En 20 minutos verás cómo organizar tu taller sin cambiar tu forma de trabajar.</p>
        </div>
        <div className="v2-demo-actions">
          <button className="primary-button" type="button" onClick={openContact}>Solicitar una demo <ArrowRight size={18} /></button>
          <a className="secondary-button" href={demoWhatsappHref} target="_blank" rel="noreferrer">Hablar por WhatsApp <ExternalLink size={16} /></a>
        </div>
      </section>

      {contactSection}
      {successDialog}

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <img src="/logozagapro.png" alt="ZagaPro" />
            <p>Software para talleres mecánicos: clientes, vehículos, órdenes, facturas, cobros, compras, proveedores y rentabilidad.</p>
          </div>
          <div className="footer-column">
            <strong>Producto</strong>
            <a href="/software-talleres-mecanicos">Software talleres mecánicos</a>
            <a href="#recorrido">Cómo funciona</a>
            <a href="#control">Módulos</a>
            <a href="#planes">Planes</a>
            <a href="#clientes">Clientes</a>
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
            <button className="footer-contact" type="button" onClick={openContact}>Contactar</button>
            <a href={demoWhatsappHref} target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="footer-client-access" href="https://app.zagapro.es" target="_blank" rel="noreferrer">¿Ya eres cliente? Accede al sistema</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>ZagaPro</span>
          <span>Gestión profesional para talleres mecánicos en España.</span>
        </div>
      </footer>

      {expandedImage && (
        <div className="v2-image-dialog" role="dialog" aria-modal="true" aria-labelledby="v2-image-dialog-title" onClick={() => setExpandedImage(null)}>
          <div className="v2-image-dialog-inner" onClick={(event) => event.stopPropagation()}>
            <div className="v2-image-dialog-head">
              <strong id="v2-image-dialog-title">{expandedImage.title}</strong>
              <button type="button" autoFocus onClick={() => setExpandedImage(null)} aria-label="Cerrar captura ampliada"><X size={21} /></button>
            </div>
            <div className="v2-image-dialog-scroll">
              <img src={expandedImage.image} alt={expandedImage.alt} />
            </div>
          </div>
        </div>
      )}

      <button
        className="sales-agent-launcher"
        type="button"
        onClick={openSalesAgent}
        aria-label="Abrir chat con Zagui"
      >
        <span className="zaga-launcher-mark" aria-hidden="true">
          <img src="/logozagapro.png" alt="" />
        </span>
        <span>Habla con Zagui</span>
      </button>

      {salesAgentVisible && (
        <React.Suspense fallback={null}>
          <SalesAgentWidget
            onClose={closeSalesAgent}
            onContact={openAdvisorContact}
          />
        </React.Suspense>
      )}
    </main>
  );
}
