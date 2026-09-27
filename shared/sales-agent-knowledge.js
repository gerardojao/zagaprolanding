// Base editable de respuestas directas del agente comercial.
// Añade palabras clave en minúsculas y modifica el texto de `answer`.
// El agente seguirá haciendo preguntas de cualificación cuando no encuentre
// una respuesta directa en esta lista.
export const salesAgentFallbackAnswer =
  "No tengo una respuesta confirmada para esta pregunta. ¿Quieres que te ponga en contacto con un **asesor comercial real**?";

export const salesAgentAnswers = [
  {
    id: "program-purpose-functionality",
    keywords: [
      "es funcional este programa",
      "es funcional el programa",
      "es funcional zagapro",
      "funciona este programa",
      "funciona bien el programa",
      "funciona bien zagapro",
      "para qué sirve el programa",
      "para que sirve el programa",
      "para qué sirve zagapro",
      "para que sirve zagapro",
      "qué hace el programa",
      "que hace el programa",
    ],
    answer:
      "Sí. **ZagaPro es un programa web diseñado para gestionar la operativa diaria de un taller**: clientes y vehículos, citas, presupuestos, órdenes de trabajo, facturación, cobros y rentabilidad. Según el plan, también incorpora fotos y firma de recepción, proveedores, repuestos, inventario y gestión financiera. No necesitas instalarlo por tu cuenta y puedes comprobar su funcionamiento con un caso real de tu taller durante una demo.",
  },
  {
    id: "customer-appointments",
    keywords: [
      "citas con el cliente",
      "cita con el cliente",
      "concretar citas",
      "concertar citas",
      "agendar citas",
      "gestionar citas",
      "dar una cita",
      "reservar cita",
      "agenda del taller",
    ],
    answer:
      "Sí. **Puedes concretar y organizar citas con tus clientes**, asociándolas al cliente y al vehículo. También puedes configurar alertas para citas futuras y mantener el seguimiento conectado con el trabajo del taller. ¿Quieres que te mostremos este proceso en una demo?",
  },
  {
    id: "vehicle-ready-alerts",
    keywords: [
      "sistema envía alertas para los clientes",
      "sistema envia alertas para los clientes",
      "el sistema envía alertas",
      "el sistema envia alertas",
      "sistema envía alertas",
      "sistema envia alertas",
      "envía alertas",
      "envia alertas",
      "manda alertas",
      "envía notificaciones",
      "envia notificaciones",
      "alertas para los clientes",
      "alertas a los clientes",
      "notificaciones para los clientes",
      "coche está listo",
      "coche esta listo",
      "vehículo está listo",
      "vehiculo esta listo",
      "avisar que está listo",
      "avisar que esta listo",
      "avisar al cliente",
      "alerta coche listo",
      "alerta vehículo listo",
      "alerta vehiculo listo",
      "recoger el coche",
      "recoger el vehículo",
      "recoger el vehiculo",
    ],
    answer:
      "Sí. **El sistema enviará una alerta al cliente cuando el coche esté listo para ser retirado**, facilitando la comunicación y evitando llamadas de seguimiento innecesarias. ¿Quieres verlo aplicado a una orden de trabajo en la demo?",
  },
  {
    id: "oil-change-alerts",
    keywords: [
      "cuándo me toca el cambio de aceite",
      "cuando me toca el cambio de aceite",
      "cuándo toca cambio de aceite",
      "cuando toca cambio de aceite",
      "próximo cambio de aceite",
      "proximo cambio de aceite",
      "recordatorio cambio de aceite",
      "alerta cambio de aceite",
      "avisar del cambio de aceite",
    ],
    answer:
      "Sí. **Si ZagaPro tiene registrado el cambio de aceite anterior**, el taller puede configurar una alerta para recordar al cliente cuándo le corresponde el próximo cambio. Así se facilita el seguimiento del mantenimiento y de futuras visitas al taller.",
  },
  {
    id: "future-appointment-alerts",
    keywords: [
      "alertas para futuras citas",
      "alertas de futuras citas",
      "alertas de citas",
      "recordatorio de cita",
      "recordatorios de citas",
      "recordar una cita",
      "próxima cita",
      "proxima cita",
      "citas futuras",
      "avisar antes de la cita",
    ],
    answer:
      "Sí. **Puedes configurar alertas para futuras citas** y llevar el seguimiento de los próximos servicios del cliente y su vehículo. Esto ayuda al taller a anticiparse y al cliente a no olvidar su cita. ¿Te gustaría ver cómo se programa una alerta durante la demo?",
  },
  {
    id: "switching-value",
    keywords: ["programa más barato", "programa mas barato", "qué gano", "que gano", "cambiarme a zagapro"],
    answer:
      "El valor de ZagaPro no está solo en emitir facturas: conecta clientes, vehículos, presupuestos, órdenes, cobros, compras y rentabilidad para reducir información duplicada y mejorar el seguimiento del taller. El beneficio concreto depende de cómo trabajas hoy; en una demo podemos comparar un proceso real de tu taller antes de recomendarte el cambio. ¿Qué tarea te hace perder más tiempo actualmente?",
  },
  {
    id: "profit-per-repair",
    keywords: ["cuánto gano en cada reparación", "cuanto gano en cada reparacion", "mano de obra y repuestos", "rentabilidad por reparación", "rentabilidad por reparacion"],
    answer:
      "Sí. ZagaPro permite revisar la rentabilidad del trabajo diferenciando lo facturado en servicios o mano de obra y en repuestos. La configuración concreta depende de cómo registres los costes y las líneas de cada reparación. ¿Quieres verlo con un caso real en una demo?",
  },
  {
    id: "parts-without-stock",
    keywords: ["repuestos para cada reparación", "repuestos para cada reparacion", "no llevo inventario", "sin inventario", "sin stock"],
    answer:
      "De forma orientativa, **Pro** suele encajar mejor si compras repuestos para cada reparación y quieres controlar proveedores y albaranes, aunque no mantengas un inventario permanente. Incluye todo lo del Básico y añade gestión de proveedores, albaranes e inventario. Lo confirmaríamos en la demo revisando cómo registras hoy cada compra.",
  },
  {
    id: "initial-and-monthly-cost",
    keywords: ["cuánto pagaré al empezar", "cuanto pagare al empezar", "cuánto cada mes", "cuanto cada mes", "qué incluye la implantación", "que incluye la implantacion"],
    answer:
      "Los precios sin impuestos son: Básico, 599 € de implantación y 129 €/mes; Pro, 899 € y 179 €/mes; Premium, 1.490 € y 229 €/mes. La implantación incluye una puesta en marcha guiada y formación adaptadas al alcance del plan. El detalle exacto de configuración, migración o sesiones necesarias se confirma después de revisar tu caso; no hay descuentos aprobados.",
  },
  {
    id: "data-migration",
    keywords: ["pasar mis clientes", "migrar mis clientes", "vehículos e historial", "vehiculos e historial", "programa actual", "migración de datos", "migracion de datos"],
    answer:
      "La migración debe revisarse antes de prometerla porque depende del programa actual, del formato de exportación y de la calidad de los datos. El equipo de ZagaPro puede evaluar una muestra y confirmar qué información puede trasladarse y qué preparación necesitarías hacer tú. ¿Qué programa utilizas actualmente?",
  },
  {
    id: "onboarding-time-training",
    keywords: ["cuánto tarda la puesta en marcha", "cuanto tarda la puesta en marcha", "qué formación", "que formacion", "formación recibe mi equipo", "formacion recibe mi equipo"],
    answer:
      "La implantación y la formación se adaptan al plan y a la operativa del taller. Todavía no hay un plazo único aprobado para todos los casos, porque cambia según usuarios, configuración y posible migración. En la demo se revisa el alcance y Gerardo confirma después el calendario y la formación incluidos.",
  },
  {
    id: "availability-incidents",
    keywords: ["se cae el sistema", "sistema caído", "sistema caido", "seguir trabajando", "cuánto tiempo se restablece", "cuanto tiempo se restablece", "tiempo de recuperación", "tiempo de recuperacion"],
    answer:
      "ZagaPro funciona como servicio web y necesita acceso al sistema para trabajar. Si se produce una incidencia, el equipo debe revisar su alcance y comunicar la recuperación. **No hay en esta prueba un tiempo máximo de restablecimiento aprobado ni un modo offline que podamos prometer**. Antes de contratar, Gerardo puede confirmar el procedimiento de incidencias y las condiciones de disponibilidad vigentes.",
  },
  {
    id: "backups-recovery",
    keywords: ["copias de seguridad", "cada cuánto se hacen copias", "cada cuanto se hacen copias", "pierde información", "pierde informacion", "recuperar información", "recuperar informacion", "backup"],
    answer:
      "La protección y recuperación de la información es una condición que debe quedar documentada antes de contratar. En esta prueba comercial todavía no tenemos aprobadas la frecuencia de las copias, la retención ni el tiempo de recuperación, por lo que no voy a inventarlos. Puedo trasladar la consulta a Gerardo para que te entregue la política vigente por escrito.",
  },
  {
    id: "data-ownership-export",
    keywords: ["de quién son los datos", "de quien son los datos", "mis datos", "exportar los datos", "exportarlos", "formato de exportación", "formato de exportacion", "dejo zagapro"],
    answer:
      "La propiedad, exportación y eliminación de los datos deben figurar expresamente en las condiciones del servicio. Esta prueba todavía no contiene una política aprobada sobre formatos de exportación ni plazos al finalizar, así que no puedo prometer un formato concreto. Gerardo debe confirmarte por escrito las condiciones de titularidad, devolución y salida de datos antes de contratar.",
  },
  {
    id: "subscription-permanence",
    keywords: ["licencia o suscripción", "licencia o suscripcion", "pagando una suscripción", "pagando una suscripcion", "permanencia", "dejo de pagar", "cancelar suscripción", "cancelar suscripcion"],
    answer:
      "La oferta actual combina un pago inicial de implantación con una cuota mensual por el uso de ZagaPro. En esta base todavía no están aprobadas las condiciones de permanencia, cancelación, impago o conservación del acceso. Esas condiciones deben aparecer en la propuesta o contrato y Gerardo debe confirmarlas antes de contratar.",
  },
  {
    id: "support-channels-hours",
    keywords: ["qué soporte", "que soporte", "canal de soporte", "horario de soporte", "soporte recibiré", "soporte recibire", "soporte prioritario"],
    answer:
      "ZagaPro contempla acompañamiento durante la implantación y el plan Pro indica soporte prioritario. Sin embargo, esta prueba todavía no tiene aprobados los canales, horarios ni tiempos de respuesta, por lo que no debo prometerlos. Gerardo puede confirmarte el soporte incluido en cada plan antes de contratar.",
  },
  {
    id: "real-case-trial",
    keywords: ["caso parecido", "reparación de mi taller", "reparacion de mi taller", "antes de contratar", "caso real"],
    answer:
      "Sí. La demo está pensada para revisar durante 20–30 minutos un flujo parecido al de tu taller. Después puedes solicitar una prueba de siete días, cuya activación gestiona el equipo de ZagaPro. No se entrega acceso automático: primero definimos qué proceso quieres comprobar. ¿Qué tipo de reparación te gustaría usar como ejemplo?",
  },
  {
    id: "installation",
    keywords: ["instalar", "instalación", "descargar", "descarga", "ordenador"],
    answer:
      "No. **ZagaPro funciona desde el navegador**, por lo que no tienes que instalar el programa por tu cuenta. El equipo de ZagaPro configura el acceso y te acompaña en la puesta en marcha según el plan contratado. ¿Desde cuántos equipos necesitarías utilizarlo?",
  },
  {
    id: "all-plan-features",
    keywords: [
      "qué incluye cada plan",
      "que incluye cada plan",
      "qué incluyen los planes",
      "que incluyen los planes",
      "diferencias entre planes",
      "comparar los planes",
      "comparación de planes",
      "comparacion de planes",
    ],
    answer:
      "Estos son los planes vigentes, con precios **sin impuestos**:\n\n- **Básico — 599 € de implantación y 129 €/mes:** clientes y vehículos, órdenes de trabajo, presupuestos, facturación, cobros y rentabilidad por recambio y servicio. No incluye fotos ni firma de recepción.\n- **Pro — 899 € de implantación y 179 €/mes:** todo lo del Básico, fotos y firma de recepción, albaranes, gestión avanzada de proveedores, inventario y repuestos, y soporte prioritario.\n- **Premium — 1.490 € de implantación y 229 €/mes:** todo lo del Pro, facturas recibidas e IVA soportado, balance y mayor contable, libro de compras, compras avanzadas y cuentas por pagar.\n\n¿Quieres que te recomiende uno según cómo trabaja tu taller?",
  },
  {
    id: "basic-plan-features",
    keywords: [
      "qué incluye el básico",
      "que incluye el basico",
      "qué incluye básico",
      "que incluye basico",
      "plan básico incluye",
      "plan basico incluye",
      "funciones del básico",
      "funciones del basico",
      "plan básico",
      "plan basico",
    ],
    answer:
      "El plan **Básico** incluye clientes y vehículos, órdenes de trabajo, presupuestos, facturación, cobros y rentabilidad por recambio y servicio. Está pensado para la operación diaria de talleres pequeños. No incluye fotos ni firma de recepción. Su precio, sin impuestos, es de **599 € de implantación y 129 €/mes**.",
  },
  {
    id: "pro-plan-features",
    keywords: [
      "qué incluye el pro",
      "que incluye el pro",
      "qué incluye pro",
      "que incluye pro",
      "plan pro incluye",
      "funciones del pro",
      "plan pro",
    ],
    answer:
      "El plan **Pro** incluye todo lo del Básico y añade fotos y firma de recepción, registro y conversión de albaranes a facturas, gestión avanzada de proveedores, inventario y repuestos, y soporte prioritario. Está orientado a talleres que necesitan más control operativo y comercial. Su precio, sin impuestos, es de **899 € de implantación y 179 €/mes**.",
  },
  {
    id: "premium-plan-features",
    keywords: [
      "qué incluye el premium",
      "que incluye el premium",
      "qué incluye premium",
      "que incluye premium",
      "plan premium incluye",
      "funciones del premium",
      "plan premium",
    ],
    answer:
      "El plan **Premium** incluye todo lo del Pro y añade gestión de facturas recibidas e IVA soportado, balance avanzado y mayor contable, libro de compras, compras avanzadas y cuentas por pagar. Está pensado para talleres que quieren controlar también toda la parte financiera. Su precio, sin impuestos, es de **1.490 € de implantación y 229 €/mes**.",
  },
  {
    id: "prices",
    keywords: ["precio", "precios", "cuánto", "cuanto", "planes", "plan"],
    answer:
      "Los precios vigentes, **sin impuestos**, son:\n\n- **Básico:** 599 € de implantación y 129 €/mes.\n- **Pro:** 899 € de implantación y 179 €/mes.\n- **Premium:** 1.490 € de implantación y 229 €/mes.\n\nSi me cuentas qué necesitas controlar, puedo orientarte provisionalmente y confirmarlo después en una demo.",
  },
  {
    id: "reception",
    keywords: ["foto", "fotos", "firma", "recepción", "recepcion"],
    answer:
      "Las **fotos y la firma de recepción están disponibles desde el plan Pro**; no se incluyen en Básico. Premium también las incorpora porque incluye todo lo de Pro. ¿Cuántas personas trabajan aproximadamente en tu taller?",
  },
  {
    id: "verifactu",
    keywords: ["verifactu", "veri*factu"],
    answer:
      "Actualmente ZagaPro no incluye VeriFactu. La integración está en negociación con un proveedor externo y tendría un coste adicional para el cliente. El alcance, la fecha y el precio todavía no están confirmados. ¿Quieres que esta cuestión se revise en una demo?",
  },
  {
    id: "demo",
    keywords: ["demo", "demostración", "demostracion", "probar", "prueba"],
    answer:
      "La demo personalizada dura entre **20 y 30 minutos**. Después se puede solicitar una prueba de siete días, cuya activación gestiona el equipo de ZagaPro. Para empezar, ¿cómo te llamas?",
  },
];

export function findSalesAgentAnswer(input) {
  const normalized = String(input || "").trim().toLowerCase();
  const matches = salesAgentAnswers
    .map((entry, index) => {
      const matchedKeywords = entry.keywords.filter((keyword) =>
        normalized.includes(keyword),
      );
      return {
        entry,
        index,
        count: matchedKeywords.length,
        longest: Math.max(0, ...matchedKeywords.map((keyword) => keyword.length)),
      };
    })
    .filter(({ count }) => count > 0)
    .sort((a, b) => b.count - a.count || b.longest - a.longest || a.index - b.index);

  return matches[0]?.entry.answer;
}
