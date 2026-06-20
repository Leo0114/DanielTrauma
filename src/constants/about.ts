// ── about.ts ── Constantes para la página Acerca del Doctor

export const aboutHero = {
  name: "Dr. Daniel Hernández Coronado",
  title: "Traumatólogo y Ortopedista",
  subtitle: "Especialista en Cirugía de Columna Vertebral",
  location: "Monterrey, Nuevo León",
  tags: [
    "Traumatología y Ortopedia",
    "Cirugía de Columna",
    "Lesiones Deportivas",
    "Reemplazo Articular",
  ],
  cedula: "Cédula Profesional verificada — SSA",
};

export const bio = {
  badge: "Acerca del Doctor",
  title: "Pasión por la medicina, compromiso con el paciente",
  paragraphs: [
    "El Dr. Daniel Hernández Coronado es un médico traumatólogo y ortopedista con amplia trayectoria en el diagnóstico y tratamiento de lesiones del aparato musculoesquelético. Formado con rigor académico y entrenado en los centros más exigentes de México, ha dedicado su carrera a devolver la movilidad, aliviar el dolor y mejorar la calidad de vida de sus pacientes.",
    "Con una subespecialidad enfocada en patología y cirugía de columna vertebral, el Dr. Hernández Coronado atiende desde casos de hernia de disco y estenosis espinal hasta deformidades complejas y fracturas vertebrales. Su enfoque combina las técnicas quirúrgicas más avanzadas con una visión humana y cercana del paciente.",
    "Convencido de que la cirugía es el último recurso y no el primero, el Dr. Hernández Coronado siempre prioriza tratamientos conservadores y no invasivos cuando la condición del paciente lo permite. Cada diagnóstico va acompañado de una explicación clara y completa para que el paciente entienda su situación y participe activamente en su proceso de recuperación.",
    "Fuera de la práctica clínica, el Dr. Hernández Coronado se mantiene en constante actualización, participando en congresos nacionales e internacionales de traumatología y columna vertebral para ofrecer siempre los tratamientos más actualizados disponibles.",
  ],
  quote: {
    text: "Mi mayor satisfacción no es la cirugía bien hecha, sino el paciente que evita la cirugía gracias a un diagnóstico oportuno y un tratamiento adecuado.",
    author: "Dr. Daniel Hernández Coronado",
  },
};

export const education = {
  badge: "Formación Académica",
  title: "Excelencia académica y clínica",
  timeline: [
    {
      year: "Licenciatura",
      period: "Médico Cirujano y Partero",
      institution: "Universidad Autónoma de Nuevo León (UANL)",
      location: "Monterrey, N.L.",
      description:
        "Formación médica de base con sólidos fundamentos en ciencias básicas y clínicas.",
      type: "degree",
    },
    {
      year: "Especialidad",
      period: "Traumatología y Ortopedia",
      institution: "Centro Médico Nacional La Raza — IMSS",
      location: "Ciudad de México",
      description:
        "Especialización en diagnóstico y tratamiento quirúrgico de afecciones del aparato musculoesquelético.",
      type: "specialty",
    },
    {
      year: "Subespecialidad",
      period: "Cirugía de Columna Vertebral",
      institution: "Instituto Nacional de Rehabilitación",
      location: "Ciudad de México",
      description:
        "Entrenamiento avanzado en patologías degenerativas, traumáticas y deformidades de la columna vertebral.",
      type: "subspecialty",
    },
    {
      year: "Actualización",
      period: "Técnicas Mínimamente Invasivas",
      institution: "Programa de Educación Continua — AMCOT",
      location: "Monterrey, N.L.",
      description:
        "Certificación en artroscopia avanzada y cirugía de columna por acceso mínimamente invasivo.",
      type: "certification",
    },
  ],
};

export const awards = {
  badge: "Reconocimientos y Diplomas",
  title: "Trayectoria reconocida",
  subtitle:
    "A lo largo de su carrera, el Dr. Hernández Coronado ha acumulado certificaciones y reconocimientos que avalan su excelencia clínica.",
  note: "Las imágenes de diplomas y certificaciones serán actualizadas próximamente.",
  list: [
    {
      title: "Certificado por el Consejo Mexicano de Ortopedia y Traumatología",
      year: "Vigente",
      institution: "CMOT",
      type: "certification",
      placeholder: true,
    },
    {
      title: "Miembro de la Asociación Mexicana de Cirugía de Columna",
      year: "Miembro activo",
      institution: "AMCOT",
      type: "membership",
      placeholder: true,
    },
    {
      title: "Miembro de la Sociedad Mexicana de Ortopedia",
      year: "Miembro activo",
      institution: "SMO",
      type: "membership",
      placeholder: true,
    },
    {
      title: "Especialista certificado — Registro Nacional de Médicos Especialistas",
      year: "SSA",
      institution: "Secretaría de Salud",
      type: "certification",
      placeholder: true,
    },
  ],
};

export const philosophy = {
  title: "Filosofía de Atención",
  pillars: [
    {
      icon: "search",
      title: "Diagnóstico preciso",
      description:
        "Un buen tratamiento comienza con un diagnóstico correcto. Cada paciente recibe una evaluación exhaustiva antes de cualquier recomendación.",
    },
    {
      icon: "shield",
      title: "Primero lo conservador",
      description:
        "La cirugía es el último recurso. Se exploran siempre las opciones no quirúrgicas antes de considerar cualquier procedimiento invasivo.",
    },
    {
      icon: "message-circle",
      title: "Comunicación clara",
      description:
        "El paciente merece entender su condición y las opciones disponibles. No hay preguntas tontas cuando se trata de su salud.",
    },
    {
      icon: "user-check",
      title: "Atención personalizada",
      description:
        "Cada caso es único. Los planes de tratamiento se diseñan específicamente para cada persona, considerando su condición y estilo de vida.",
    },
  ],
};

export const specialtyAreas = {
  badge: "Especialidades",
  title: "Áreas de experiencia",
  list: [
    {
      icon: "spine",
      title: "Columna Vertebral",
      isHighlighted: true,
      conditions: [
        "Hernia de disco lumbar y cervical",
        "Estenosis espinal",
        "Escoliosis del adulto y adolescente",
        "Espondilolistesis",
        "Fracturas vertebrales por compresión",
        "Dolor lumbar crónico",
        "Síndrome de cola de caballo",
        "Radiculopatía cervical y lumbar",
      ],
    },
    {
      icon: "leg",
      title: "Rodilla",
      conditions: [
        "Lesiones de menisco",
        "Ruptura de ligamento cruzado anterior (LCA)",
        "Condromalacia rotuliana",
        "Artroplastia total de rodilla",
        "Bursitis y tendinitis",
      ],
    },
    {
      icon: "shoulder",
      title: "Hombro y Manguito Rotador",
      conditions: [
        "Ruptura del manguito rotador",
        "Luxación recidivante de hombro",
        "Síndrome de pinzamiento",
        "Artrosis glenohumeral",
        "Tendinitis del bíceps",
      ],
    },
    {
      icon: "hip",
      title: "Cadera",
      conditions: [
        "Artroplastia total de cadera",
        "Conflicto femoroacetabular",
        "Fracturas de cadera",
        "Bursitis trocantérica",
        "Displasia de cadera en adulto",
      ],
    },
    {
      icon: "hand",
      title: "Mano y Muñeca",
      conditions: [
        "Síndrome del túnel carpiano",
        "Fracturas de radio distal",
        "Dedo en gatillo",
        "Quiste sinovial",
        "Lesiones de tendones flexores",
      ],
    },
    {
      icon: "foot",
      title: "Pie y Tobillo",
      conditions: [
        "Esguince crónico de tobillo",
        "Fascitis plantar",
        "Hallux valgus (juanete)",
        "Fracturas maleolares",
        "Tendinopatía de Aquiles",
      ],
    },
  ],
};

export const insurances = {
  badge: "Cobertura",
  title: "Aseguradoras aceptadas",
  subtitle: "Trabajamos con las principales aseguradoras de México para facilitar su acceso a la atención médica especializada.",
  list: [
    "IMSS",
    "ISSSTE",
    "GNP Seguros",
    "MetLife",
    "Mapfre",
    "AXA Seguros",
    "Seguros Monterrey New York Life",
    "BBVA Seguros",
    "Allianz",
    "Qualitas",
    "Consulta privada disponible",
  ],
  note: "Consulte disponibilidad de su aseguradora. También se atienden consultas privadas.",
};
