// RabbitHole — mock data (seed for a future API)
//
// Reads go through the small accessor functions at the bottom of this file
// (getIdeas, getIdea, …). When a real backend arrives, swap each accessor's
// body for a `fetch` — call sites don't change.

import type {
  ActivityEvent,
  Category,
  Idea,
  IdeaDetailContent,
  Opportunity,
  Problem,
  Sparks,
  StatusMeta,
} from "./types";

export const STATUSES: StatusMeta[] = [
  { id: "exploring", label: "Exploring" },
  { id: "researching", label: "Researching" },
  { id: "validating", label: "Validating" },
  { id: "building", label: "Building" },
  { id: "paused", label: "Paused" },
  { id: "archived", label: "Archived" },
];

const IDEAS: Idea[] = [
  {
    id: "i01",
    title: "CFE Express para microemprendimientos",
    desc: "Desde enero 2025 todos los contribuyentes de IVA deben emitir CFE. Pero miles de vendedores de WhatsApp/Instagram (ropa, comida, manualidades) están en el limbo. Suben una captura del pedido y sale el comprobante fiscal. Sin jerga contable.",
    tags: ["FinTech", "CFE", "Microemprendimientos"],
    status: "validating",
    potential: 9,
    complexity: 7,
    updated: "1d ago",
    updatedISO: "2026-05-24",
    favorite: true,
    progress: 40,
    glyph: "C",
  },
  {
    id: "i02",
    title: "CRM-lite para inmobiliarias unipersonales",
    desc: "Cientos de corredores en Montevideo, Punta del Este y Maldonado manejan leads en Excel y WhatsApp. InfoCasas les da listados pero ningún CRM. Pierden ventas por falta de seguimiento. Ya pagan USD 80-200/mes por InfoCasas, pagarían USD 25-40 por un CRM que les funcione.",
    tags: ["CRM", "Inmobiliario", "B2B"],
    status: "validating",
    potential: 8,
    complexity: 3,
    updated: "2d ago",
    updatedISO: "2026-05-23",
    favorite: true,
    progress: 35,
    glyph: "I",
  },
  {
    id: "i03",
    title: "Reservas y cobranza para canchas de padel",
    desc: "El padel explotó en Uruguay con 1500+ canchas. Los dueños gestionan reservas por WhatsApp, cobran por transferencia y anotan en planilla quién pagó. PlayTomic cobra comisión alta y es complejo para clubes chicos. El negocio real son las reservas recurrentes.",
    tags: ["SaaS", "Deportes", "B2B"],
    status: "exploring",
    potential: 8,
    complexity: 5,
    updated: "3d ago",
    updatedISO: "2026-05-22",
    favorite: false,
    progress: 15,
    glyph: "P",
  },
  {
    id: "i04",
    title: "Asistente operativo para profesionales de salud",
    desc: "Psicólogos, kinesiólogos y nutricionistas independientes usan Google Calendar + WhatsApp + cuaderno. Pierden sesiones por olvidos, cobran tarde, no saben quién les debe. Doctoralia capta pacientes nuevos pero no gestiona la relación.",
    tags: ["SaaS", "Salud", "B2B"],
    status: "validating",
    potential: 8,
    complexity: 4,
    updated: "1d ago",
    updatedISO: "2026-05-24",
    favorite: true,
    progress: 30,
    glyph: "S",
  },
  {
    id: "i05",
    title: "Cotizador rápido para constructores y oficios",
    desc: "Albañiles, plomeros y electricistas pierden trabajos porque tardan en cotizar. El cliente pide presupuesto, el oficial promete 'te paso en la noche', y al día siguiente ya tomaron otro. Freemium con marca de agua. El que automatiza sube su tasa de cierre 30-50% inmediatamente.",
    tags: ["FinTech", "Oficios", "B2B"],
    status: "exploring",
    potential: 8,
    complexity: 4,
    updated: "4d ago",
    updatedISO: "2026-05-21",
    favorite: false,
    progress: 10,
    glyph: "O",
  },
  {
    id: "i06",
    title: "Gestión de cuotas para clubes deportivos",
    desc: "Uruguay tiene miles de clubes (baby fútbol, gimnasia artística, escuelitas) con 50-500 socios. Tesorería en Excel, transferencias sin identificar, padres que deben 3 meses. El software existente apunta a Defensor o Nacional, no al club del barrio.",
    tags: ["SaaS", "Deportes", "Comunidad"],
    status: "exploring",
    potential: 7,
    complexity: 4,
    updated: "5d ago",
    updatedISO: "2026-05-20",
    favorite: false,
    progress: 8,
    glyph: "C",
  },
  {
    id: "i07",
    title: "Portal cliente white-label para contadores",
    desc: "Miles de contadores en Uruguay atienden 20-80 clientes PYME. Pasan el día persiguiendo facturas y gastos por WhatsApp. Con la obligatoriedad CFE 2025 también monitorean cumplimiento de cada cliente. El white-label con el logo del estudio los hace ver 'hi-tech'.",
    tags: ["FinTech", "Contabilidad", "White-label"],
    status: "researching",
    potential: 7,
    complexity: 5,
    updated: "3d ago",
    updatedISO: "2026-05-22",
    favorite: false,
    progress: 20,
    glyph: "W",
  },
  {
    id: "i08",
    title: "Sistema integral para veterinarias pequeñas",
    desc: "600+ veterinarias en Uruguay con 1-3 veterinarios. Historia clínica en cuaderno, vacunación en tarjeta de papel, agenda en planilla. Pierden clientes porque no recuerdan avisar la vacuna anual. VetSoft argentino es caro y tiene interfaces de 2010.",
    tags: ["SaaS", "Salud Animal", "B2B"],
    status: "researching",
    potential: 7,
    complexity: 5,
    updated: "6d ago",
    updatedISO: "2026-05-19",
    favorite: false,
    progress: 12,
    glyph: "V",
  },
];

const PROBLEMS: Problem[] = [
  {
    id: "p01",
    title: "Microemprendedores bloqueados por obligatoriedad CFE 2025",
    desc: "Desde enero 2025 todos deben emitir CFE pero las herramientas asumen que hay un contador detrás. El vendedor de WhatsApp no quiere saber qué es 'tasa básica' vs 'tasa mínima'. O informaliza o no vende.",
    severity: 4,
    severityLevel: "high",
    domain: "FinTech",
    notes: 12,
  },
  {
    id: "p02",
    title: "Corredores inmobiliarios pierden leads por falta de seguimiento",
    desc: "El lead entra por InfoCasas o MercadoLibre, cae al WhatsApp del corredor y muere ahí. Sin pipeline estructurado, el que llama primero gana. El Excel no tiene recordatorios.",
    severity: 3,
    severityLevel: "warn",
    domain: "Inmobiliario",
    notes: 7,
  },
  {
    id: "p03",
    title: "Clubes deportivos chicos sin herramienta asequible para cuotas",
    desc: "El software de gestión de socios apunta a clubes grandes. Los chicos siguen con Excel, llamadas incómodas y morosidad acumulada sin visibilidad. El tesorero es voluntario y lleva esto como puede.",
    severity: 3,
    severityLevel: "warn",
    domain: "Deportes",
    notes: 5,
  },
];

const OPPORTUNITIES: Opportunity[] = [
  {
    id: "o01",
    score: 91,
    title: "CFE Express y portal contadores comparten el mismo core DGI",
    sub: "Ambas ideas necesitan integrar e-Factura vía SimpleFactura.uy. Un módulo CFE compartido puede servir los dos verticales y reducir el costo de certificación a la mitad.",
    glyph: "∿",
  },
  {
    id: "o02",
    score: 84,
    title: "Salud, veterinarias y clubes comparten el mismo engine",
    sub: "Agenda + cobro MercadoPago + recordatorio WhatsApp Cloud API sirve los tres verticales. Arquitectura modular desde día uno ahorra 3-4 semanas por idea adicional.",
    glyph: "⌖",
  },
  {
    id: "o03",
    score: 77,
    title: "Cotizador de oficios tiene el ROI más obvio para vender",
    sub: "Si cerrás 1 trabajo extra por mes con la herramienta, pagó 25x con el primer cliente. Argumento de venta que se explica solo — menor fricción de adopción que las otras ideas.",
    glyph: "↑",
  },
];

const ACTIVITY: ActivityEvent[] = [
  {
    kind: "validate",
    time: "Hoy, 10:30",
    text: "6 de 8 microemprendedoras de WhatsApp confirmaron disposición a pagar. <b>CFE Express</b>.",
    tone: "pos",
  },
  {
    kind: "status",
    time: "Ayer",
    text: "Movido <b>Asistente salud independientes</b> de Researching a <b>Validating</b>.",
    tone: "accent",
  },
  {
    kind: "note",
    time: "Hace 2d",
    text: "Agregadas 4 notas de entrevistas con corredores a <b>CRM inmobiliarias</b>.",
    tone: "",
  },
  {
    kind: "create",
    time: "Hace 3d",
    text: "Creada idea <b>Reservas y cobranza canchas de padel</b>.",
    tone: "",
  },
  {
    kind: "note",
    time: "Hace 4d",
    text: "Contactado SimpleFactura.uy para evaluar API intermediaria de e-Factura. <b>CFE Express</b>.",
    tone: "",
  },
  {
    kind: "create",
    time: "Hace 6d",
    text: "Creada idea <b>Gestión de cuotas para clubes deportivos</b>.",
    tone: "",
  },
];

const CATEGORIES: Category[] = [
  { name: "B2B",                  count: 8, delta: +8 },
  { name: "SaaS",                 count: 5, delta: +5 },
  { name: "FinTech",              count: 3, delta: +3 },
  { name: "Deportes",             count: 2, delta: +2 },
  { name: "Salud",                count: 2, delta: +2 },
  { name: "CFE",                  count: 1, delta: +1 },
  { name: "Contabilidad",         count: 1, delta: +1 },
  { name: "Comunidad",            count: 1, delta: +1 },
  { name: "Inmobiliario",         count: 1, delta: +1 },
  { name: "Microemprendimientos", count: 1, delta: +1 },
  { name: "Oficios",              count: 1, delta: +1 },
  { name: "White-label",          count: 1, delta: +1 },
];

// Sparkline arrays (12 weekly points)
const SPARKS: Sparks = {
  total: [42, 44, 47, 49, 51, 54, 58, 61, 64, 68, 71, 74],
  active: [12, 13, 11, 14, 16, 17, 18, 17, 19, 21, 22, 23],
  building: [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4],
  potential: [3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8],
  archived: [8, 9, 10, 11, 12, 12, 13, 14, 14, 15, 16, 17],
  updates: [9, 12, 8, 14, 11, 17, 15, 19, 22, 18, 24, 21],
};

// Idea detail content (for one specific idea — used in detail view)
const IDEA_DETAIL: IdeaDetailContent = {
  id: "i01",
  title: "CFE Express",
  subtitle: "para microemprendimientos de WhatsApp/Instagram",
  summary:
    "Desde enero 2025 todos los contribuyentes de IVA en Uruguay están obligados a emitir CFE. Pero decenas de miles de microemprendedores que venden por WhatsApp/Instagram viven en un limbo: o no emiten nada (informal), o se complican con herramientas diseñadas para empresas más grandes. La propuesta: subís una captura del chat de WhatsApp y sale el CFE. Sin ver 'tasa básica' ni 'tasa mínima'.",
  status: "validating",
  potential: 9,
  complexity: 7,
  created: "May 10, 2026",
  updated: "1d ago",
  owner: "Vos",
  tags: ["FinTech", "CFE", "Microemprendimientos", "Uruguay"],
  sections: {
    problem:
      "La obligatoriedad CFE de DGI desde enero 2025 aplica a todos los contribuyentes de IVA, incluyendo pequeños vendedores de ropa, comida casera, productos de belleza y manualidades que operan por redes sociales. Las soluciones actuales (bill.uy, Memory, Contabilium) asumen un usuario que entiende fiscalidad o tiene contador. El microemprendedor solo quiere subir una foto del producto vendido y que salga el comprobante.",
    solution:
      "App mobile-first con tres pasos: (1) subís foto/captura del pedido de WhatsApp, (2) la app extrae monto, descripción y cliente con OCR, (3) emite el CFE vía API de proveedor intermediario (SimpleFactura.uy o Pyme.uy). Sin formularios, sin selects de tipo de IVA. El usuario ve 'Comprobante enviado' y listo.",
    why: "La regulación crea demanda forzada. El microemprendedor no elige si emitir CFE — está obligado. El que llegue primero con una UX simple captura un mercado de decenas de miles de usuarios que hoy no tienen solución. La integración técnica es replicable pero la UX de 'foto → CFE' es el diferencial.",
    users:
      "Microemprendimientos unipersonales con facturación menor a USD 30k/año que venden por WhatsApp o Instagram. Principalmente mujeres de 25-45 años en sectores de moda, gastronomía, cosmética y artesanías.",
    market:
      "Uruguay tiene ~150.000 contribuyentes de IVA activos. Estimando 30-40% en el segmento micro, hay 45.000-60.000 usuarios potenciales. A USD 5-8/mes = USD 2.7M-5.8M ARR teórico. Mercado chico pero sin competencia directa hoy.",
    monetization:
      "Freemium: gratis hasta 10 CFE/mes. Pago USD 5-8/mes ilimitado, o pay-per-CFE a USD 0.30. Upsell posible: panel de contabilidad simple a USD 12/mes para las que quieren ver ingresos/gastos sin herramientas contables.",
  },
  pros: [
    "Demanda forzada por regulación DGI — no hay que crear el hábito",
    "Mercado sin solución directa hoy en el segmento micro",
    "No necesitás certificación DGI propia — revendés API de SimpleFactura.uy",
    "Modelo freemium facilita adquisición viral por redes",
  ],
  cons: [
    "Margen comprimido si el costo por CFE del proveedor sube",
    "DGI puede simplificar su portal propio y reducir urgencia",
    "Ticket bajo requiere volumen alto para ser negocio relevante",
  ],
  risks: [
    "Competidor grande (ANTEL, Abitab, Redpagos) lanza solución gratuita",
    "OCR falla en capturas de baja calidad — experiencia rota en primer uso",
    "Certificación con proveedor intermediario puede demorar el MVP",
  ],
  validation: [
    { done: true,  text: "8 entrevistas con microemprendedoras de WhatsApp/Instagram" },
    { done: true,  text: "6 de 8 confirmaron disposición a pagar USD 5-8/mes" },
    { done: true,  text: "Contacto inicial con SimpleFactura.uy para evaluar API" },
    { done: false, text: "Obtener acceso sandbox a API de proveedor CFE" },
    { done: false, text: "Prototipo clickeable para testear flujo foto → CFE con 5 usuarias" },
    { done: false, text: "Validar pricing pay-per-CFE vs suscripción con 10 usuarios más" },
  ],
  competitors: [
    { name: "bill.uy",     note: "Diseñado para PYMEs, interfaz fiscal compleja" },
    { name: "Memory",      note: "Apunta a empresas, no microemprendedores" },
    { name: "Contabilium", note: "Requiere conocimiento contable básico" },
    { name: "Portal DGI",  note: "Estado actual de muchos: entrar al portal y pelearse" },
  ],
  questions: [
    "¿El OCR de captura de WhatsApp es suficientemente confiable o hay que ofrecer entrada manual siempre?",
    "¿SimpleFactura.uy o Pyme.uy — cuál tiene mejor API y precio por CFE emitido?",
    "¿El modelo pay-per-CFE convierte mejor que suscripción para usuarios con volumen muy variable?",
  ],
  related: [
    { id: "i07", title: "Portal cliente para contadores",     sub: "Researching · score 7" },
    { id: "i04", title: "Asistente para profesionales salud", sub: "Validating · score 8" },
    { id: "i05", title: "Cotizador para constructores",       sub: "Exploring · score 8" },
  ],
  timeline: [
    { time: "Hoy, 10:30", text: "<b>6/8</b> microemprendedoras confirmaron disposición a pagar", accent: true },
    { time: "Ayer",       text: "Contactado SimpleFactura.uy — respuesta pendiente" },
    { time: "May 22",     text: "Definido modelo freemium: 10 CFE gratis / USD 5-8 ilimitado" },
    { time: "May 20",     text: "Completadas 8 entrevistas de validación" },
    { time: "May 15",     text: "Identificado SimpleFactura.uy y Pyme.uy como proveedores API" },
    { time: "May 10",     text: "Creada idea" },
  ],
};

/* ============================================================
   Accessors — the only sanctioned way to read the data.
   Swap each body for a `fetch` when a backend lands.
   ============================================================ */

export function getIdeas(): Idea[] {
  return IDEAS;
}

export function getIdea(id: string): Idea | undefined {
  return IDEAS.find((i) => i.id === id);
}

export function getProblems(): Problem[] {
  return PROBLEMS;
}

export function getOpportunities(): Opportunity[] {
  return OPPORTUNITIES;
}

export function getActivity(): ActivityEvent[] {
  return ACTIVITY;
}

export function getCategories(): Category[] {
  return CATEGORIES;
}

export function getSparks(): Sparks {
  return SPARKS;
}

/** Rich detail content for the showcase idea (i01). */
export function getIdeaDetailContent(): IdeaDetailContent {
  return IDEA_DETAIL;
}
