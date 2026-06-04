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
  Mail,
  MessageCircle,
  MessageSquareText,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Wrench,
} from "lucide-react";
import "./styles.css";

const contactEmail = "gerardojao@gmail.com";
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

Quiero información sobre el Plan Empresa de 129,99 EUR/mes y la instalación inicial de 349,99 EUR.`;

const audiences = [
  "Talleres automotrices",
  "Servicios técnicos",
  "Mantenimiento a domicilio",
  "Negocios que presupuestan y facturan",
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
    text: "ZagaPro le avisa automáticamente cuáles clientes necesitan cambio de aceite o mantenimiento y le permite contactarles directamente por WhatsApp en segundos.",
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
];

function App() {
  const demoSubject = encodeURIComponent("Solicitud de demo ZagaPro");
  const demoBody = encodeURIComponent(emailTemplate);
  const demoWhatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappTemplate)}`;
  const onboardingWhatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(onboardingWhatsappTemplate)}`;
  const mailHref = `mailto:${contactEmail}?subject=${demoSubject}&body=${demoBody}`;

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
          <a className="nav-cta" href={mailHref}>
            <Mail size={17} />
            Contactar
          </a>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">
            <Sparkles size={16} />
            Gestión profesional para negocios que prestan servicios
          </p>
          <h1>ZagaPro</h1>
          <p className="hero-copy">
            Controla clientes, órdenes, presupuestos, facturas, ingresos y alertas desde una sola plataforma pensada
            para negocios que necesitan operar con más orden y mejor imagen.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={demoWhatsappHref} target="_blank" rel="noreferrer">
              Solicitar demo
              <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href="#sistema">
              Ver cómo ayuda
            </a>
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
          <h2>Une la operación diaria con la parte comercial y administrativa.</h2>
        </div>
        <p className="section-lead">
          ZagaPro ayuda a registrar lo que entra, lo que se trabaja, lo que se presupuesta, lo que se factura y lo que
          se cobra. La idea es simple: que el negocio tenga memoria, trazabilidad y datos útiles para decidir.
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
          <h2>Para negocios que necesitan pasar de resolver el día a controlar el negocio.</h2>
          <p>
            Funciona especialmente bien cuando hay clientes recurrentes, servicios pendientes, presupuestos que
            convertir, facturas por emitir y avisos que no se pueden olvidar.
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
            Pensado para negocios que quieren centralizar su gestión sin complicarse con herramientas dispersas.
          </p>
        </div>

        <article className="price-card">
          <div className="price-icon">
            <BadgeEuro size={28} />
          </div>
          <p className="price-label">Plan Empresa</p>
          <div className="price">
            <span>129,99 €</span>
            <small>/ mes</small>
          </div>
          <p className="setup-price">
            Puesta en marcha inicial: <strong>349,99 €</strong>
          </p>
          <ul>
            <li>Configuración inicial del negocio.</li>
            <li>Registro de nombre y datos comerciales.</li>
            <li>Clientes, órdenes, presupuestos y facturación.</li>
            <li>Ingresos, egresos, alertas y seguimiento.</li>
            <li>Hasta 3 usuarios por negocio.</li>
            <li>Acompañamiento inicial para empezar a usarlo.</li>
          </ul>
          <a className="primary-button" href={onboardingWhatsappHref} target="_blank" rel="noreferrer">
            Solicitar puesta en marcha
            <ArrowRight size={18} />
          </a>
        </article>
      </section>

      <section className="modules-section" aria-label="Módulos opcionales">
        <div className="modules-heading">
          <p className="section-kicker">Módulos opcionales</p>
          <h2>Amplía ZagaPro cuando tu negocio lo necesite.</h2>
          <p>
            Activa solo las funciones avanzadas que aportan valor a tu operación. Sin paquetes forzados ni costes
            innecesarios desde el primer día.
          </p>
        </div>

        <div className="modules-grid">
          {addOnModules.map((module) => {
            const Icon = module.icon;
            return (
              <article className="module-card" key={module.title}>
                <div className="module-icon">
                  <Icon size={24} />
                </div>
                <div>
                  <h3>{module.title}</h3>
                  <p>{module.text}</p>
                </div>
                <div className="module-prices">
                  <span className="activation-promo">
                    <span className="promo-label">Promoción de lanzamiento</span>
                    Activación <strong className="activation-old">{module.activation}</strong>
                    <em>Sin coste de activación por tiempo limitado</em>
                  </span>
                  <span>
                    Uso mensual <strong>{module.monthly}</strong>
                  </span>
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
            Cuéntanos qué tipo de servicio ofreces y te mostramos un flujo real: cliente, orden, presupuesto, factura,
            ingreso y alertas.
          </p>
        </div>
        <a className="primary-button" href={demoWhatsappHref} target="_blank" rel="noreferrer">
          Solicitar una demo
          <ArrowRight size={18} />
        </a>
      </section>

      <footer className="footer">
        <div>
          <strong>ZagaPro</strong>
          <p>Gestión operativa y comercial para negocios de servicios.</p>
        </div>
        <a href={mailHref}>
          <Mail size={17} />
          {contactEmail}
        </a>
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
