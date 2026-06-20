// ── contact.ts ── Constantes para la página de Contacto

export const contactHero = {
  badge: "Contacto",
  title: "Dar el primer paso es más sencillo de lo que cree",
  subtitle:
    "No necesita tener un diagnóstico previo ni estar seguro de si necesita cirugía. Solo compártanos su situación y el Dr. Hernández Coronado le orientará.",
  trustPoints: [
    "Sin compromiso quirúrgico",
    "Respuesta en menos de 24 horas",
    "Atención personalizada",
    "Segunda opinión bienvenida",
  ],
};

export const offices = [
  {
    id: "hospital-angeles",
    name: "Hospital Ángeles Valle Oriente",
    address: "Av. Rufino Tamayo 1500, Valle Oriente, San Pedro Garza García, N.L.",
    phone: "+52 81 8022 9071",
    whatsapp: "528180229071",
    schedule: [
      { days: "Lunes a Viernes", hours: "9:00 – 14:00 y 16:00 – 20:00" },
      { days: "Sábados", hours: "9:00 – 13:00" },
      { days: "Domingos", hours: "Urgencias únicamente" },
    ],
    mapUrl: "https://maps.google.com/?q=Hospital+Angeles+Valle+Oriente+Monterrey",
    isPrimary: true,
  },
  {
    id: "consultorio-privado",
    name: "Consultorio Privado — Monterrey",
    address: "Monterrey, Nuevo León (dirección exacta por confirmar)",
    phone: "+52 81 8022 9071",
    whatsapp: "528180229071",
    schedule: [
      { days: "Martes y Jueves", hours: "16:00 – 20:00" },
      { days: "Con previa cita", hours: "Horarios flexibles disponibles" },
    ],
    mapUrl: "https://maps.google.com/?q=Monterrey+Nuevo+Leon",
    isPrimary: false,
  },
];

export const contactInfo = {
  phone: "+52 81 8022 9071",
  whatsapp: "528180229071",
  whatsappMessage:
    "Hola Dr. Hernández, me gustaría agendar una consulta. ",
  email: "consultas@drhernandezcoronado.com",
  doctoralia: "https://www.doctoralia.com.mx/daniel-hernandez-coronado/traumatologo/monterrey",
};

export const consultTypes = [
  {
    value: "primera-consulta",
    label: "Primera consulta",
    description: "Es la primera vez que visito a un traumatólogo por este problema",
    icon: "user-plus",
  },
  {
    value: "segunda-opinion",
    label: "Segunda opinión médica",
    description: "Ya tengo un diagnóstico y quiero una perspectiva adicional",
    icon: "search",
  },
  {
    value: "revision-estudios",
    label: "Revisión de estudios",
    description: "Tengo radiografías, resonancias o tomografías y necesito interpretación",
    icon: "image",
  },
  {
    value: "seguimiento",
    label: "Seguimiento post-tratamiento",
    description: "Ya fui atendido y necesito revisión de mi evolución",
    icon: "activity",
  },
  {
    value: "urgencia",
    label: "Evaluación por lesión reciente",
    description: "Sufrí una lesión o accidente y necesito evaluación pronto",
    icon: "alert-circle",
  },
];

export const bodyParts = [
  {
    group: "Columna Vertebral",
    icon: "spine",
    parts: [
      { value: "columna-cervical", label: "Columna cervical (cuello)" },
      { value: "columna-dorsal", label: "Columna dorsal / torácica (espalda media)" },
      { value: "columna-lumbar", label: "Columna lumbar (espalda baja / cintura)" },
      { value: "coxis", label: "Coxis / zona sacra" },
    ],
  },
  {
    group: "Extremidad Superior",
    icon: "arm",
    parts: [
      { value: "hombro", label: "Hombro / Manguito rotador" },
      { value: "codo", label: "Codo" },
      { value: "muneca", label: "Muñeca" },
      { value: "mano-dedos", label: "Mano / Dedos" },
    ],
  },
  {
    group: "Extremidad Inferior",
    icon: "leg",
    parts: [
      { value: "cadera", label: "Cadera" },
      { value: "rodilla", label: "Rodilla" },
      { value: "tobillo", label: "Tobillo" },
      { value: "pie-dedos", label: "Pie / Dedos" },
    ],
  },
  {
    group: "Otro",
    icon: "more-horizontal",
    parts: [
      { value: "otro", label: "Otra zona / No estoy seguro" },
    ],
  },
];

export const allowedFileTypes = {
  extensions: [".dcm", ".dicom", ".pdf", ".jpg", ".jpeg", ".png", ".webp"],
  mimeTypes: [
    "application/dicom",
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/webp",
  ],
  maxSizeMB: 50,
  maxFiles: 5,
  info: {
    title: "Formatos de archivo aceptados",
    dicomNote:
      "Los archivos DICOM (.dcm) son el formato estándar de imágenes médicas (resonancias magnéticas, tomografías, radiografías digitales). Si tiene estos archivos, son muy útiles para el diagnóstico.",
    generalNote:
      "También puede subir radiografías fotográficas, documentos de resultados o imágenes en PDF o JPG.",
  },
};

export const contactPreferences = [
  { value: "whatsapp", label: "WhatsApp", icon: "message-circle" },
  { value: "email", label: "Correo electrónico", icon: "mail" },
  { value: "llamada", label: "Llamada telefónica", icon: "phone" },
];

export const faq = [
  {
    question: "¿Necesito una referencia médica para hacer mi consulta?",
    answer:
      "No. Puede agendar su consulta directamente, sin necesidad de referencia de otro médico. Simplemente contáctenos y le asignamos cita.",
  },
  {
    question: "¿Qué debo llevar a mi primera consulta?",
    answer:
      "Le recomendamos traer cualquier estudio médico previo relacionado con su problema (radiografías, resonancias, tomografías), resultados de laboratorio, lista de medicamentos que toma actualmente y su identificación oficial.",
  },
  {
    question: "¿Si vengo a consulta me van a operar?",
    answer:
      "No necesariamente. La gran mayoría de los problemas musculoesqueléticos tienen solución sin cirugía. El objetivo de la consulta es evaluar su caso, dar un diagnóstico correcto y plantear las opciones de tratamiento. La cirugía siempre es el último recurso.",
  },
  {
    question: "¿Aceptan mi seguro médico?",
    answer:
      "Trabajamos con las principales aseguradoras de México incluyendo GNP, MetLife, Mapfre, AXA y más. También atendemos consulta privada. Consulte la disponibilidad de su seguro con nuestro equipo.",
  },
  {
    question: "¿Puedo enviar mis estudios de imagen antes de la consulta?",
    answer:
      "Sí. A través del formulario de contacto puede adjuntar sus estudios en formato DICOM, PDF o imagen. Esto permite que el Dr. Hernández los revise con anticipación para aprovechar mejor el tiempo de consulta.",
  },
  {
    question: "¿Cuánto tiempo dura una consulta?",
    answer:
      "Una primera consulta dura aproximadamente 45 a 60 minutos. Las consultas de seguimiento o revisión de estudios toman entre 20 y 30 minutos. Siempre se dedica el tiempo necesario para cada caso.",
  },
  {
    question: "¿Atienden urgencias?",
    answer:
      "Sí. Para situaciones urgentes como fracturas, luxaciones o lesiones recientes puede comunicarse directamente al +52 81 8022 9071 y le orientaremos sobre los pasos a seguir.",
  },
  {
    question: "¿Qué diferencia hay entre un traumatólogo y un ortopedista?",
    answer:
      "En México, el término correcto es 'Traumatología y Ortopedia': son la misma especialidad. El traumatólogo atiende lesiones agudas (accidentes, fracturas) mientras que el ortopedista se enfoca en condiciones crónicas y correctivas. El Dr. Hernández está certificado en ambas áreas.",
  },
];
