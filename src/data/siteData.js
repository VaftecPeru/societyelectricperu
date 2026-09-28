import {
  Activity,
  Building2,
  Cable,
  CircuitBoard,
  Droplets,
  Factory,
  Gauge,
  HardHat,
  PanelsTopLeft,
  Power,
  RefreshCw,
  Settings2,
  ShieldCheck,
  Warehouse,
  Wrench,
  Zap,
} from 'lucide-react'

export const company = {
  name: 'Society Electric',
  phoneDisplay: '+51 912 257 315',
  phoneRaw: '51912257315',
  email: 'info@societyelectricperu.com',
  salesEmail: 'venta@societyelectricperu.com',
  address: 'Jr. José Pardo 130, Carabayllo, Lima, Perú',
  since: '2014',
}

export const images = {
  logo: '/assets/logo.svg',
  hero: 'https://images.pexels.com/photos/236089/pexels-photo-236089.jpeg?auto=compress&cs=tinysrgb&w=1920',
  transformer: 'https://dnznrvs05pmza.cloudfront.net/gemini/gemini-3-pro-image/images/23d358bc-0f59-42c5-819c-6f3b4e872e1f/5da47548-f5a7-4437-bada-68f60431a76a/_input__Mant_n_la_misma_fotograf_a__encuadre__persona__pose_.png?_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlIYXNoIjoiM2RkMTJkMzViYTVlZjFlNSIsImJ1Y2tldCI6InJ1bndheS10YXNrLWFydGlmYWN0cyIsInN0YWdlIjoicHJvZCIsImV4cCI6MTc5MDYxMzE3M30.ZAivTc7xkZRDidPiYqGsNRbIb-1LXBV1y1RwtA_WmAw',
  panels: 'https://images.pexels.com/photos/33694019/pexels-photo-33694019.jpeg?auto=compress&cs=tinysrgb&w=1400',
  safety: 'https://images.pexels.com/photos/34526423/pexels-photo-34526423.jpeg?auto=compress&cs=tinysrgb&w=1400',
  winding: 'https://images.pexels.com/photos/31499909/pexels-photo-31499909.jpeg?auto=compress&cs=tinysrgb&w=1400',
  electric: 'https://images.pexels.com/photos/236089/pexels-photo-236089.jpeg?auto=compress&cs=tinysrgb&w=1400',
  project: 'https://images.pexels.com/photos/9720534/pexels-photo-9720534.jpeg?auto=compress&cs=tinysrgb&w=1400',
}


export const heroSlides = [
  {
    id: 'transformadores',
    image: 'https://dnznrvs05pmza.cloudfront.net/gemini/gemini-3-pro-image/images/01d9be6d-cc42-452a-967f-75e690c9c193/0b9acac4-c992-4252-8710-7a4d8d85dd77/Premium_photorealistic_corporate_hero_banner_for_Society_Ele.png?_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlIYXNoIjoiNjUxMjU2ZDI4ZGYzNGExMyIsImJ1Y2tldCI6InJ1bndheS10YXNrLWFydGlmYWN0cyIsInN0YWdlIjoicHJvZCIsImV4cCI6MTc5MDc0MDY5MH0.VrS4zs8fzHArKQwNozUAxR6F8mQ4a_Sba-EoXFT4TPg',
    fallback: images.hero,
    eyebrow: 'Transformadores · diagnóstico · mantenimiento',
    title: 'Transformadores confiables para una operación que no se detiene.',
    text: 'Mantenimiento, reparación, pruebas eléctricas y atención técnica para transformadores de distribución y potencia.',
    cardTitle: 'Desde 2014',
    cardText: 'Experiencia aplicada a equipos críticos y continuidad eléctrica.',
  },
  {
    id: 'subestaciones',
    image: 'https://dnznrvs05pmza.cloudfront.net/gemini/gemini-3-pro-image/images/e684f765-9cf2-43fc-b01e-f477ab3b6242/19473c46-f12e-44e7-b0cd-fbb2657c3206/Premium_photorealistic_corporate_hero_banner_for_Society_Ele.png?_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlIYXNoIjoiMTk3YzBkMDBiZTZkZGNjOCIsImJ1Y2tldCI6InJ1bndheS10YXNrLWFydGlmYWN0cyIsInN0YWdlIjoicHJvZCIsImV4cCI6MTc5MDY5Mjk5Mn0.NMWk714M_N2AwGoMpc2NYTIXWesJQNiNkiYBD2ppLno',
    fallback: images.safety,
    eyebrow: 'Subestaciones · seguridad · prevención',
    title: 'Mantenimiento de subestaciones con seguridad y continuidad.',
    text: 'Intervenciones preventivas y correctivas para preservar la confiabilidad de la infraestructura eléctrica industrial.',
    cardTitle: 'Prevención',
    cardText: 'Inspección, mantenimiento planificado y control de condición.',
  },
  {
    id: 'tableros',
    image: 'https://dnznrvs05pmza.cloudfront.net/gemini/gemini-3-pro-image/images/de224656-ee72-423a-ab8a-2a9ca9fec543/2b93bdf4-b2ae-4de0-8589-6c477eb148c7/Premium_photorealistic_corporate_hero_banner_for_Society_Ele.png?_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlIYXNoIjoiMzhkZjUxMWNiN2FjNDJjNiIsImJ1Y2tldCI6InJ1bndheS10YXNrLWFydGlmYWN0cyIsInN0YWdlIjoicHJvZCIsImV4cCI6MTc5MDY4NDE4OH0.MZGaiupzs14KwxAS_txKXhGP-oAy9FD4FxKIo_WNBqM',
    fallback: images.panels,
    eyebrow: 'Tableros · control · automatización',
    title: 'Control y distribución eléctrica con precisión industrial.',
    text: 'Diseño, fabricación e implementación de tableros eléctricos para control, protección, automatización y distribución.',
    cardTitle: 'Control técnico',
    cardText: 'Soluciones ordenadas para distribución, protección y automatización.',
  },
]

export const navItems = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Sectores', to: '/sectores' },
  { label: 'Contacto', to: '/contacto' },
]

export const services = [
  {
    slug: 'transformadores',
    title: 'Transformadores de distribución y potencia',
    short: 'Fabricación, reparación y mantenimiento con diagnóstico técnico y pruebas eléctricas.',
    icon: Zap,
    image: images.transformer,
    intro: 'Atención técnica para transformadores de distribución y potencia, orientada a recuperar confiabilidad operativa y extender la vida útil del equipo.',
    bullets: ['Inspección y diagnóstico', 'Reparación y mantenimiento', 'Pruebas eléctricas y verificación', 'Atención preventiva y correctiva'],
  },
  {
    slug: 'bobinado',
    title: 'Bobinado de motores y transformadores',
    short: 'Rebobinado y recuperación de equipos monofásicos y trifásicos para operación industrial.',
    icon: RefreshCw,
    image: images.winding,
    intro: 'Servicio de bobinado con revisión de aislamiento, devanados y condición general para motores y transformadores.',
    bullets: ['Motores eléctricos', 'Transformadores monofásicos y trifásicos', 'Evaluación de devanados', 'Pruebas posteriores al servicio'],
  },
  {
    slug: 'subestaciones',
    title: 'Mantenimiento de subestaciones',
    short: 'Mantenimiento programado y correctivo para infraestructura eléctrica industrial.',
    icon: PanelsTopLeft,
    image: images.safety,
    intro: 'Intervenciones planificadas para preservar seguridad, continuidad y condición de los componentes de una subestación.',
    bullets: ['Inspección visual y funcional', 'Ajuste y limpieza técnica', 'Revisión de componentes', 'Plan de mantenimiento preventivo'],
  },
  {
    slug: 'tableros-electricos',
    title: 'Tableros eléctricos automatizados',
    short: 'Diseño, fabricación e implementación de tableros para control y distribución industrial.',
    icon: CircuitBoard,
    image: images.panels,
    intro: 'Fabricación y adecuación de tableros eléctricos de acuerdo con el requerimiento de control, protección y distribución de cada operación.',
    bullets: ['Tableros de distribución', 'Control y automatización', 'Integración de protecciones', 'Ordenamiento y conexionado'],
  },
  {
    slug: 'aceites-dielectricos',
    title: 'Análisis y tratamiento de aceite dieléctrico',
    short: 'Evaluación y tratamiento de aceite para transformadores como parte del mantenimiento integral.',
    icon: Droplets,
    image: images.electric,
    intro: 'Servicio orientado al cuidado del sistema de aislamiento líquido y a la conservación del transformador.',
    bullets: ['Toma y evaluación de condición', 'Tratamiento de aceite', 'Filtrado y acondicionamiento', 'Recomendaciones técnicas'],
  },
  {
    slug: 'conexionado',
    title: 'Conexionado y pruebas eléctricas',
    short: 'Verificación de conexiones, continuidad y condiciones operativas antes de la puesta en servicio.',
    icon: Cable,
    image: images.electric,
    intro: 'Ejecución y revisión del conexionado según la configuración del equipo y el requerimiento de la instalación.',
    bullets: ['Verificación de terminales', 'Continuidad y aislamiento', 'Ajuste de conexiones', 'Pruebas previas a energización'],
  },
  {
    slug: 'mantenimiento-industrial',
    title: 'Mantenimiento eléctrico industrial',
    short: 'Soporte técnico preventivo y correctivo para equipos e instalaciones eléctricas.',
    icon: Wrench,
    image: images.safety,
    intro: 'Soporte técnico para reducir incidencias, ordenar mantenimientos y mejorar la confiabilidad de la infraestructura eléctrica.',
    bullets: ['Diagnóstico de fallas', 'Mantenimiento preventivo', 'Intervenciones correctivas', 'Recomendaciones de mejora'],
  },
]

export const sectors = [
  { title: 'Industria manufacturera', icon: Factory, text: 'Soporte a equipos, tableros, motores y sistemas eléctricos de planta.' },
  { title: 'Plantas y talleres', icon: Warehouse, text: 'Mantenimiento y recuperación de equipos eléctricos de uso continuo.' },
  { title: 'Edificaciones y comercios', icon: Building2, text: 'Soluciones de distribución, protección y continuidad eléctrica.' },
  { title: 'Infraestructura eléctrica', icon: Power, text: 'Mantenimiento de transformadores, subestaciones y sistemas asociados.' },
  { title: 'Operaciones de mantenimiento', icon: HardHat, text: 'Intervenciones coordinadas bajo criterios de seguridad y orden técnico.' },
  { title: 'Automatización y control', icon: Settings2, text: 'Tableros y soluciones de control adaptadas al proceso operativo.' },
]

export const values = [
  { title: 'Seguridad', icon: ShieldCheck, text: 'Priorizamos procedimientos ordenados y una cultura preventiva en cada intervención.' },
  { title: 'Confiabilidad', icon: Gauge, text: 'Buscamos que cada solución aporte continuidad y estabilidad a la operación.' },
  { title: 'Respuesta técnica', icon: Activity, text: 'Evaluamos cada necesidad desde el diagnóstico hasta la recomendación final.' },
]

export const projects = [
  { title: 'Servicio de transformadores', category: 'Mantenimiento especializado', image: images.hero, text: 'Diagnóstico, mantenimiento y recuperación de equipos para continuidad operativa.' },
  { title: 'Tableros eléctricos', category: 'Control y distribución', image: images.project, text: 'Fabricación, ordenamiento y adecuación de tableros para requerimientos industriales.' },
  { title: 'Instalaciones industriales', category: 'Infraestructura eléctrica', image: images.panels, text: 'Intervenciones técnicas para circuitos, protecciones y sistemas de distribución.' },
  { title: 'Bobinado y recuperación', category: 'Motores y devanados', image: images.winding, text: 'Revisión y recuperación de devanados como parte del mantenimiento de equipos.' },
]
