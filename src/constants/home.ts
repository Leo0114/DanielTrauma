// ── home.ts ── Constantes para la página de Inicio

export const hero = {
  badge: "Especialista en Columna Vertebral",
  title: "Su salud musculoesquelética en las mejores manos",
  subtitle:
    "El Dr. Daniel Hernández Coronado es Traumatólogo y Ortopedista con amplia experiencia en el tratamiento de la columna vertebral, fracturas, lesiones deportivas y afecciones del aparato locomotor.",
  cta: {
    primary: {
      label: "Agenda tu Consulta",
      href: "/contacto",
    },
    secondary: {
      label: "Conoce al Doctor",
      href: "/acerca",
    },
  },
  location: "Monterrey, Nuevo León",
};

export const stats = [
  {
    value: 15,
    suffix: "+",
    label: "Años de Experiencia",
    description: "Trayectoria sólida en traumatología y ortopedia",
    icon: "calendar",
  },
  {
    value: 2500,
    suffix: "+",
    label: "Pacientes Atendidos",
    description: "Cada caso, tratado con dedicación y precisión",
    icon: "users",
  },
  {
    value: 800,
    suffix: "+",
    label: "Procedimientos Exitosos",
    description: "Desde cirugías de columna hasta artroscopias",
    icon: "check-circle",
  },
  {
    value: 9.8,
    suffix: "/10",
    label: "Calificación de Pacientes",
    description: "Valorado altamente en Doctoralia",
    icon: "star",
  },
];

export const mythSection = {
  badge: "Desmitificando la Traumatología",
  title: "Visitar al traumatólogo no significa que necesita cirugía",
  subtitle:
    "Uno de los mayores mitos en salud es pensar que ir al traumatólogo implica inevitablemente una intervención quirúrgica. La realidad es muy diferente.",
  description:
    "La gran mayoría de los pacientes que visitan al Dr. Hernández Coronado encuentran solución a sus problemas a través de tratamientos conservadores: fisioterapia, medicación, infiltraciones o simplemente un diagnóstico correcto que les da tranquilidad. La cirugía es siempre el último recurso, no el primero.",
  points: [
    {
      icon: "shield",
      title: "Diagnóstico preciso primero",
      description:
        "Antes de hablar de cualquier tratamiento, se realiza una evaluación completa para entender exactamente qué está ocurriendo.",
    },
    {
      icon: "leaf",
      title: "Tratamiento conservador",
      description:
        "En la mayoría de los casos se priorizan terapias físicas, medicación y cambios de hábitos antes de considerar opciones quirúrgicas.",
    },
    {
      icon: "message",
      title: "Comunicación abierta",
      description:
        "El Dr. Hernández explica con claridad cada opción disponible para que usted tome decisiones informadas sobre su salud.",
    },
    {
      icon: "heart",
      title: "Su comodidad importa",
      description:
        "El objetivo siempre es mejorar su calidad de vida. No se realiza ningún procedimiento sin pleno consentimiento y comprensión del paciente.",
    },
  ],
  cta: {
    label: "Consulte sin compromiso",
    href: "/contacto",
  },
};

export const specialties = {
  badge: "Áreas de Especialización",
  title: "Experto en lo que necesita",
  subtitle:
    "Con formación especializada en cirugía de columna vertebral y amplio dominio de toda la traumatología y ortopedia.",
  featured: {
    title: "Especialista en Columna Vertebral",
    description:
      "El Dr. Hernández Coronado cuenta con subespecialidad en patología y cirugía de columna vertebral. Desde hernias de disco y estenosis espinal hasta deformidades complejas, ofrece el tratamiento más avanzado y preciso disponible en Monterrey.",
    highlights: [
      "Hernia de disco lumbar y cervical",
      "Estenosis espinal",
      "Escoliosis y deformidades espinales",
      "Cirugía de fusión espinal mínimamente invasiva",
      "Fracturas vertebrales",
      "Dolor crónico de espalda",
    ],
    badge: "Subespecialidad destacada",
  },
  list: [
    {
      icon: "bone",
      title: "Traumatología General",
      description:
        "Diagnóstico y tratamiento de fracturas, luxaciones y lesiones traumáticas en cualquier parte del cuerpo.",
    },
    {
      icon: "zap",
      title: "Lesiones Deportivas",
      description:
        "Atención especializada para atletas y personas activas, con enfoque en recuperación rápida y completa.",
    },
    {
      icon: "rotate-cw",
      title: "Artroscopias",
      description:
        "Procedimientos mínimamente invasivos de rodilla, hombro y tobillo con menor tiempo de recuperación.",
    },
    {
      icon: "activity",
      title: "Reemplazo Articular",
      description:
        "Prótesis de rodilla y cadera para recuperar movilidad y eliminar el dolor crónico articular.",
    },
    {
      icon: "hand",
      title: "Cirugía de Mano y Muñeca",
      description:
        "Tratamiento del síndrome del túnel carpiano, lesiones de tendones y fracturas de la extremidad superior.",
    },
    {
      icon: "footprints",
      title: "Pie y Tobillo",
      description:
        "Corrección de deformidades, esguinces crónicos, fascitis plantar y patologías del pie.",
    },
  ],
};

export const services = {
  badge: "Servicios",
  title: "¿En qué le podemos ayudar?",
  subtitle:
    "Ofrecemos atención integral desde la consulta inicial hasta el seguimiento post-tratamiento.",
  list: [
    {
      title: "Consulta de Primera Vez",
      description:
        "Evaluación completa de su condición, revisión de síntomas y diagnóstico clínico con plan de tratamiento personalizado.",
      duration: "45-60 min",
      icon: "clipboard",
    },
    {
      title: "Segunda Opinión Médica",
      description:
        "¿Le han dado un diagnóstico o recomendado cirugía? Solicite una segunda opinión informada antes de tomar cualquier decisión.",
      duration: "30-45 min",
      icon: "search",
    },
    {
      title: "Revisión de Estudios",
      description:
        "Interpretación de radiografías, resonancias magnéticas, tomografías y otros estudios de imagen para un diagnóstico preciso.",
      duration: "20-30 min",
      icon: "image",
    },
    {
      title: "Seguimiento Post-Tratamiento",
      description:
        "Monitoreo de su evolución después de un procedimiento o tratamiento para garantizar una recuperación óptima.",
      duration: "20-30 min",
      icon: "trending-up",
    },
  ],
};

export const testimonials = {
  badge: "Lo que dicen nuestros pacientes",
  title: "Miles de historias de recuperación",
  subtitle:
    "La satisfacción de nuestros pacientes es nuestro mayor reconocimiento.",
  list: [
    {
      name: "María González",
      age: 52,
      condition: "Hernia de disco lumbar",
      text: "Llevaba años con dolor de espalda y pensé que la única solución era operarme. El Dr. Hernández me explicó con paciencia todas las opciones y con tratamiento conservador mejoré notablemente. ¡Es un doctor excepcional!",
      rating: 5,
      avatar: "MG",
    },
    {
      name: "Carlos Morales",
      age: 34,
      condition: "Lesión deportiva de rodilla",
      text: "Jugando fútbol me lesioné los meniscos. La artroscopia fue rápida, la recuperación mejor de lo esperado. En 3 meses ya estaba corriendo. Altamente recomendado.",
      rating: 5,
      avatar: "CM",
    },
    {
      name: "Rosario Vega",
      age: 67,
      condition: "Prótesis de cadera",
      text: "No podía caminar sin dolor. La cirugía de reemplazo de cadera cambió completamente mi calidad de vida. El Dr. Hernández fue muy claro y profesional en todo el proceso.",
      rating: 5,
      avatar: "RV",
    },
    {
      name: "Jorge Reyes",
      age: 45,
      condition: "Estenosis espinal",
      text: "Segunda opinión que me salvó de una cirugía innecesaria. El Dr. Hernández identificó que mi problema podía manejarse con fisioterapia y medicación. Un año después me siento excelente.",
      rating: 5,
      avatar: "JR",
    },
  ],
};

export const ctaSection = {
  title: "Dé el primer paso hacia su bienestar",
  subtitle:
    "Agendar una consulta es sencillo y sin compromiso. Nuestro equipo está listo para atenderle y resolver todas sus dudas.",
  cta: {
    primary: {
      label: "Agendar Consulta",
      href: "/contacto",
    },
    secondary: {
      label: "Llamar Ahora",
      href: "tel:+528180229071",
    },
  },
  phone: "+52 81 8022 9071",
  note: "Respuesta en menos de 24 horas • Sin compromiso • Atención personalizada",
};
