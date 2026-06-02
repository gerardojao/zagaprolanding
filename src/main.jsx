import React from "react";
import ReactDOM from "react-dom/client";
import {
  ArrowRight,
  BellRing,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
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

Me gustaria solicitar una demo de ZagaPro para conocer como podria ayudar a mi negocio.

Datos de contacto:
- Nombre:
- Empresa o negocio:
- Telefono:
- Email:
- Tipo de negocio:

Me interesa revisar especialmente:
- Gestion de clientes
- Ordenes de trabajo o servicio
- Presupuestos
- Facturacion
- Alertas y seguimiento

Quedo atento/a para coordinar una llamada o demostracion.

Saludos.`;

const whatsappTemplate = `Hola Gerardo, me gustaria solicitar una demo de ZagaPro.

Mi nombre es:
Negocio:
Tipo de servicio:

Me interesa conocer como ZagaPro puede ayudarme con clientes, ordenes, presupuestos, facturas y alertas.`;

const audiences = [
  "Talleres automotrices",
  "Servicios tecnicos",
  "Mantenimiento a domicilio",
  "Negocios que presupuestan y facturan",
];

const features = [
  {
    icon: ClipboardList,
    title: "Ordenes y seguimiento",
    text: "Registra trabajos, estados, costes, clientes y equipos sin perder el historial.",
  },
  {
    icon: FileText,
    title: "Presupuestos claros",
    text: "Crea presupuestos profesionales, conviertelos en ordenes y manten el control.",
  },
  {
    icon: ReceiptText,
    title: "Facturacion conectada",
    text: "Factura desde ordenes o de forma directa, con series, importes e ingresos asociados.",
  },
  {
    icon: BellRing,
    title: "Alertas y llamadas",
    text: "Recuerda servicios, avisos a clientes y tareas que no deben quedarse pendientes.",
  },
  {
    icon: UsersRound,
    title: "Clientes organizados",
    text: "Consulta datos, telefonos, direcciones, vehiculos o equipos desde un mismo lugar.",
  },
  {
    icon: ShieldCheck,
    title: "Preparado para crecer",
    text: "Multi-negocio, roles por usuario y configuracion adaptable a cada operacion.",
  },
];

const benefits = [
  "Menos tiempo buscando informacion entre libretas, chats y hojas sueltas.",
  "Mas claridad sobre trabajos pendientes, presupuestos aceptados e ingresos.",
  "Mejor imagen frente al cliente con documentos ordenados y consistentes.",
  "Base escalable para incorporar nuevas areas del negocio sin empezar de cero.",
];

function App() {
  const demoSubject = encodeURIComponent("Solicitud de demo ZagaPro");
  const demoBody = encodeURIComponent(emailTemplate);
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappTemplate)}`;
  const mailHref = `mailto:${contactEmail}?subject=${demoSubject}&body=${demoBody}`;

  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="nav" aria-label="Navegacion principal">
          <a className="brand" href="#inicio" aria-label="ZagaPro inicio">
            <img src="/logozagapro.png" alt="ZagaPro" />
          </a>
          <div className="nav-links">
            <a href="#sistema">Sistema</a>
            <a href="#para-quien">Para quien</a>
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
            Gestion profesional para negocios que prestan servicios
          </p>
          <h1>ZagaPro</h1>
          <p className="hero-copy">
            Controla clientes, ordenes, presupuestos, facturas, ingresos y alertas desde una sola plataforma pensada
            para negocios que necesitan operar con mas orden y mejor imagen.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={mailHref}>
              Solicitar demo
              <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href="#sistema">
              Ver como ayuda
            </a>
          </div>
        </div>
      </section>

      <section className="proof-band" aria-label="Indicadores del sistema">
        <div>
          <strong>360°</strong>
          <span>vision operativa</span>
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
          <p className="section-kicker">Que hace</p>
          <h2>Une la operacion diaria con la parte comercial y administrativa.</h2>
        </div>
        <p className="section-lead">
          ZagaPro ayuda a registrar lo que entra, lo que se trabaja, lo que se presupuesta, lo que se factura y lo que
          se cobra. La idea es simple: que el negocio tenga memoria, trazabilidad y datos utiles para decidir.
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
          <p className="section-kicker">Para quien es</p>
          <h2>Para negocios que necesitan pasar de resolver el dia a controlar el negocio.</h2>
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
          <h2>Como ayuda en el dia a dia</h2>
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

      <section className="demo-section" id="demo">
        <div>
          <p className="section-kicker">Demo personalizada</p>
          <h2>Ve ZagaPro aplicado a tu propio negocio.</h2>
          <p>
            Cuéntanos que tipo de servicio ofreces y te mostramos un flujo real: cliente, orden, presupuesto, factura,
            ingreso y alertas.
          </p>
        </div>
        <a className="primary-button" href={mailHref}>
          Solicitar una demo
          <ArrowRight size={18} />
        </a>
      </section>

      <footer className="footer">
        <div>
          <strong>ZagaPro</strong>
          <p>Gestion operativa y comercial para negocios de servicios.</p>
        </div>
        <a href={mailHref}>
          <Mail size={17} />
          {contactEmail}
        </a>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsappHref}
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
