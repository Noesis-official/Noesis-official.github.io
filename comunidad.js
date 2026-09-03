// ============================================================
//  NOESIS – Comunidad (Tutores)
// ============================================================

// -----------------------------------------------
// TRADUCCIONES
// -----------------------------------------------
const translations = {
  es: {
    nav_menu: "MENÚ", nav_market: "MARKETPLACE", nav_Material: "MATERIAL DE ESTUDIO",
    nav_community: "COMUNIDAD", nav_books: "LIBROS",
    footer_material: "Material de Estudio", footer_books: "Libros",
    search_tutors: "Buscar tutores...",
    notif_classes: "¡No olvides tus clases programadas!",
    cat_all: "Todas", cat_physics: "Física", cat_chemistry: "Química",
    cat_economics: "Economía", cat_biology: "Biología", cat_math: "Matemáticas",
    cat_english: "Inglés", cat_systems: "Sistemas",
    filter_title: "Filtrar búsqueda", filter_mode: "Modalidad",
    filter_mode_all: "Todas", filter_mode_online: "En línea",
    filter_mode_person: "Presencial",
    filter_availability: "Disponibilidad",
    filter_time_all: "Cualquier horario", filter_time_morning: "Mañana",
    filter_time_afternoon: "Tarde", filter_time_evening: "Noche",
    filter_price: "Rango de precio (por hora)",
    filter_apply: "Aplicar", filter_clear: "Limpiar",
    featured_tutors: "Tutores destacados",
    no_results_title: "¿Nada por aquí?",
    no_tutors: "No encontramos tutores que coincidan con tu búsqueda.",
    details_btn: "Detalles",
    cta_title: "¿Necesitas ayuda con algo específico?",
    cta_text: "Publica tu solicitud y encuentra al tutor ideal para ti.",
    cta_btn: "Publicar solicitud",
    badge_verified: "Tutores verificados",
    badge_verified_desc: "Cada tutor pasa por un proceso de verificación.",
    badge_pace: "Aprende a tu ritmo",
    badge_pace_desc: "Clases personalizadas según tu disponibilidad.",
    badge_secure: "Pagos seguros",
    badge_secure_desc: "Transacciones protegidas y confiables.",
    about_me: "Sobre mí", subjects_teach: "Materias que enseño",
    reviews_title: "Reseñas", view_all: "Ver todas",
    schedule_label: "Horarios disponibles",
    slot_morning: "Mañana", slot_afternoon: "Tarde", slot_evening: "Noche",
    price_per_hour: "Precio (por hora)", secure_payment: "Pago seguro",
    book_class: "Reservar clase", send_message: "Enviar mensaje", or_label: "o",
    footer_desc: "El marketplace universitario de<br>David, Chiriquí.",
    footer_platform: "Plataforma", footer_marketplace: "Marketplace",
    footer_support: "Soporte", footer_faq: "Ayuda / FAQ",
    footer_contact: "Contáctanos", footer_terms: "Términos de uso",
    footer_follow: "Síguenos",
    footer_copyright: "© 2026 Noesis · Todos los derechos reservados · David, Chiriquí, Panamá",
    toast_booked: "¡Clase reservada! Te contactaremos pronto.",
    toast_message_sent: "Mensaje enviado al tutor.",
    mascot_bubble: "¡Únete a la comunidad!",
    my_classes: "Mis clases reservadas",
    no_classes_booked: "Aún no tienes clases reservadas.",
    class_removed: "Clase eliminada de tus reservas.",
    featured_badge: "Destacado",
    contact_btn: "Contactar",
    request_title: "Publicar solicitud",
    request_subtitle: "Cuéntanos qué necesitas y los tutores disponibles podrán contactarte.",
    request_subject_label: "¿Qué materia necesitas?",
    request_desc_label: "Describe lo que necesitas",
    request_budget_label: "Presupuesto (por hora)",
    request_time_label: "Horario preferido",
    request_submit_btn: "Publicar solicitud",
    request_hint: "Simulado con localStorage — tu solicitud solo se guarda en este navegador.",
    request_err_required: "Por favor completa todos los campos.",
    request_success: "¡Solicitud publicada! Los tutores disponibles podrán contactarte. 🎉",
    login_required_booking: "Inicia sesión para reservar una clase.",
    login_required_request: "Inicia sesión para publicar una solicitud.",
    student_requests_title: "Solicitudes de estudiantes",
    no_student_requests: "Todavía no hay solicitudes publicadas por estudiantes.",
    contact_student_btn: "Contactar estudiante",
    requested_by: "Publicado por"
  },
  en: {
    nav_menu: "MENU", nav_market: "MARKETPLACE", nav_Material: "STUDY MATERIAL",
    nav_community: "COMMUNITY", nav_books: "BOOKS",
    footer_material: "Study Material", footer_books: "Books",
    search_tutors: "Search tutors...",
    notif_classes: "Don't forget your scheduled classes!",
    cat_all: "All", cat_physics: "Physics", cat_chemistry: "Chemistry",
    cat_economics: "Economics", cat_biology: "Biology", cat_math: "Math",
    cat_english: "English", cat_systems: "Systems",
    filter_title: "Filter Search", filter_mode: "Mode",
    filter_mode_all: "All", filter_mode_online: "Online",
    filter_mode_person: "In Person",
    filter_availability: "Availability",
    filter_time_all: "Any time", filter_time_morning: "Morning",
    filter_time_afternoon: "Afternoon", filter_time_evening: "Evening",
    filter_price: "Price Range (per hour)",
    filter_apply: "Apply", filter_clear: "Clear All",
    featured_tutors: "Featured Tutors",
    no_results_title: "Nothing here yet?",
    no_tutors: "We couldn't find any tutors matching your search.",
    details_btn: "Details",
    cta_title: "Do you need help with something specific?",
    cta_text: "Post your request and find the right tutor for you.",
    cta_btn: "Post your request",
    badge_verified: "Verified Tutors",
    badge_verified_desc: "Every tutor goes through a verification process.",
    badge_pace: "Learn at Your Own Pace",
    badge_pace_desc: "Personalized lessons based on your availability.",
    badge_secure: "Secure Payments",
    badge_secure_desc: "Safe and protected transactions.",
    about_me: "About Me", subjects_teach: "Subjects I Teach",
    reviews_title: "Reviews", view_all: "View all",
    schedule_label: "Available Times",
    slot_morning: "Morning", slot_afternoon: "Afternoon", slot_evening: "Evening",
    price_per_hour: "Price (per hour)", secure_payment: "Secure Payment",
    book_class: "Book a Class", send_message: "Send a Message", or_label: "or",
    footer_desc: "The university marketplace of<br>David, Chiriquí.",
    footer_platform: "Platform", footer_marketplace: "Marketplace",
    footer_support: "Support", footer_faq: "Help / FAQ",
    footer_contact: "Contact Us", footer_terms: "Terms of Use",
    footer_follow: "Follow Us",
    footer_copyright: "© 2026 Noesis · All rights reserved · David, Chiriquí, Panama",
    toast_booked: "Class booked! We'll contact you soon.",
    toast_message_sent: "Message sent to the tutor.",
    mascot_bubble: "Join the community!",
    my_classes: "My Booked Classes",
    no_classes_booked: "You don't have any booked classes yet.",
    class_removed: "Class removed from your bookings.",
    featured_badge: "Featured",
    contact_btn: "Contact",
    request_title: "Post a Request",
    request_subtitle: "Tell us what you need and available tutors will reach out to you.",
    request_subject_label: "What subject do you need?",
    request_desc_label: "Describe what you need",
    request_budget_label: "Budget (per hour)",
    request_time_label: "Preferred time",
    request_submit_btn: "Post Request",
    request_hint: "Simulated with localStorage — your request is only saved on this browser.",
    request_err_required: "Please fill in all fields.",
    request_success: "Request posted! Available tutors will reach out to you. 🎉",
    login_required_booking: "Log in to book a class.",
    login_required_request: "Log in to post a request.",
    student_requests_title: "Student requests",
    no_student_requests: "No student requests posted yet.",
    contact_student_btn: "Contact student",
    requested_by: "Posted by"
  }
};

let currentLang = localStorage.getItem('noesis_lang') || 'es';

// -----------------------------------------------
// CATÁLOGO DE TUTORES (datos de ejemplo)
// -----------------------------------------------
/* NOTA sobre las fotos:
   El campo "photo" apunta a los archivos de la carpeta "IMG Community".
   Los espacios del nombre van escritos como %20 para que el navegador
   encuentre el archivo (ej. "miss milenys.jpg" -> "miss%20milenys.jpg").
   Los tutores sin "photo" siguen mostrando el ícono de usuario. */
const tutors = [
  {
    id: "t1", name: "Milenys Gonzalez",
    photo: "IMG%20Community/miss%20milenys.jpg",
    category: "psychology",
    subject: { es: "Psicología", en: "Psychology" },
    rating: 4.9, reviews: 129, price: 10,
    mode: "online", availability: ["morning", "afternoon"],
    bio: {
      es: "Psicóloga con 5 años de experiencia en tutoría. Especialista en métodos de estudio adaptativos y preparación para exámenes.",
      en: "Psychologist with 5 years of tutoring experience. Specialist in adaptive study methods and exam preparation."
    },
    tags: { es: ["Paciente", "Explicaciones claras"], en: ["Patient", "Clear Explanations"] },
    subjects: { es: ["Psicología General", "Desarrollo Humano", "Estadística"], en: ["General Psychology", "Human Development", "Statistics"] },
    reviewsList: [
      { name: "Noe M.", rating: 5, text: { es: "¡Excelente tutora! Explica todo con mucha claridad.", en: "Excellent tutor! Explains everything very clearly." } },
      { name: "Jonh M.", rating: 4, text: { es: "Muy útil y preparada para cada clase.", en: "Very helpful and well prepared for each class." } }
    ]
  },
  {
    id: "t2", name: "Carlos Samudio",
    photo: "IMG%20Community/Mrs%20carlos.jpg",
    category: "systems",
    subject: { es: "Tecnología de la Información", en: "Information Technology" },
    rating: 4.9, reviews: 128, price: 12,
    mode: "online", availability: ["afternoon", "evening"],
    bio: {
      es: "Ingeniero en sistemas con experiencia en programación, bases de datos y redes. Clases prácticas con proyectos reales.",
      en: "Systems engineer experienced in programming, databases, and networking. Hands-on classes with real projects."
    },
    tags: { es: ["Práctico", "Proyectos reales", "Paciente"], en: ["Practical", "Real Projects", "Patient"] },
    subjects: { es: ["Programación", "Bases de Datos", "Redes"], en: ["Programming", "Databases", "Networking"] },
    reviewsList: [
      { name: "Luis R.", rating: 5, text: { es: "Muy buen tutor, aprendí muchísimo de bases de datos.", en: "Great tutor, learned a lot about databases." } },
      { name: "Ana P.", rating: 5, text: { es: "Explica los conceptos de forma práctica.", en: "Explains concepts in a practical way." } }
    ]
  },
  {
    id: "t3", name: "Fanny Sánchez",
    category: "engineering",
    subject: { es: "Ingeniería Industrial", en: "Industrial Engineering" },
    rating: 4.9, reviews: 189, price: 15,
    mode: "presencial", availability: ["morning", "afternoon"],
    bio: {
      es: "Ingeniera industrial con maestría. Especialista en logística, estadística y optimización de procesos.",
      en: "Industrial engineer with a master's degree. Specialist in logistics, statistics, and process optimization."
    },
    tags: { es: ["Estrategias de estudio", "Preparación de exámenes"], en: ["Study Strategies", "Exam Preparation"] },
    subjects: { es: ["Logística", "Estadística", "Procesos Industriales", "Cálculo"], en: ["Logistics", "Statistics", "Industrial Processes", "Calculus"] },
    reviewsList: [
      { name: "Pedro K.", rating: 5, text: { es: "La mejor tutora de estadística.", en: "The best statistics tutor." } },
      { name: "María L.", rating: 5, text: { es: "Muy organizada y puntual.", en: "Very organized and punctual." } }
    ]
  },
  {
    id: "t4", name: "Soleid Del Cid",
    photo: "IMG%20Community/Ms%20Soleid.jpg",
    category: "english",
    subject: { es: "Inglés", en: "English" },
    rating: 4.9, reviews: 126, price: 12,
    mode: "online", availability: ["morning", "afternoon", "evening"],
    bio: {
      es: "Profesora de inglés certificada con enfoque comunicativo. Preparo para TOEFL, IELTS y conversación general.",
      en: "Certified English teacher with a communicative approach. I prepare for TOEFL, IELTS, and general conversation."
    },
    tags: { es: ["Paciente y amigable", "Explicaciones claras", "Estrategias de estudio", "Preparación de exámenes"], en: ["Patient & Friendly", "Clear Explanations", "Study Strategies", "Exam Preparation"] },
    subjects: { es: ["Gramática", "Conversación", "TOEFL", "Escritura Académica"], en: ["Grammar", "Conversation", "TOEFL", "Academic Writing"] },
    reviewsList: [
      { name: "Noe M.", rating: 5, text: { es: "¡Excelente tutora! Explica todo con mucha claridad.", en: "Excellent Tutor! She explains everything very clearly." } },
      { name: "Jonh M.", rating: 4, text: { es: "Muy útil y bien preparada para cada clase. 100% recomendada.", en: "Very helpful and well prepared for each class. 100% recommended." } }
    ]
  },
  {
    id: "t5", name: "Richard Montenegro",
    photo: "IMG%20Community/Mrs%20Richard.jpg",
    category: "english",
    subject: { es: "Inglés", en: "English" },
    rating: 4.9, reviews: 127, price: 8,
    mode: "online", availability: ["afternoon", "evening"],
    bio: {
      es: "Estudiante avanzado de inglés con certificaciones internacionales. Clases dinámicas y accesibles para todos los niveles.",
      en: "Advanced English student with international certifications. Dynamic and accessible classes for all levels."
    },
    tags: { es: ["Dinámico", "Accesible", "Paciente"], en: ["Dynamic", "Accessible", "Patient"] },
    subjects: { es: ["Conversación", "Gramática", "Vocabulario"], en: ["Conversation", "Grammar", "Vocabulary"] },
    reviewsList: [
      { name: "Sara V.", rating: 5, text: { es: "Las clases son muy entretenidas.", en: "Classes are very engaging." } },
      { name: "Diego F.", rating: 5, text: { es: "Aprendí mucho vocabulario nuevo.", en: "I learned a lot of new vocabulary." } }
    ]
  },
  {
    id: "t6", name: "María José Pinto",
    photo: "IMG%20Community/Maria.jpg",
    category: "biology",
    subject: { es: "Biología", en: "Biology" },
    rating: 4.8, reviews: 95, price: 10,
    mode: "presencial", availability: ["morning"],
    bio: {
      es: "Bióloga con experiencia en docencia universitaria. Especialista en anatomía, genética y biología celular.",
      en: "Biologist with university teaching experience. Specialist in anatomy, genetics, and cell biology."
    },
    tags: { es: ["Explicaciones claras", "Material visual"], en: ["Clear Explanations", "Visual Materials"] },
    subjects: { es: ["Anatomía", "Genética", "Biología Celular"], en: ["Anatomy", "Genetics", "Cell Biology"] },
    reviewsList: [
      { name: "Karen J.", rating: 5, text: { es: "Sus diagramas son increíbles.", en: "Her diagrams are incredible." } },
      { name: "Alex M.", rating: 4, text: { es: "Buena explicando temas complejos.", en: "Good at explaining complex topics." } }
    ]
  },
  {
    id: "t7", name: "Andrés Ríos",
    photo: "IMG%20Community/Andres.jpg",
    category: "math",
    subject: { es: "Matemáticas", en: "Mathematics" },
    rating: 4.7, reviews: 112, price: 10,
    mode: "online", availability: ["afternoon", "evening"],
    bio: {
      es: "Ingeniero civil con pasión por la enseñanza de matemáticas. Desde álgebra hasta cálculo diferencial.",
      en: "Civil engineer passionate about teaching math. From algebra to differential calculus."
    },
    tags: { es: ["Paso a paso", "Paciente", "Ejercicios prácticos"], en: ["Step by Step", "Patient", "Practical Exercises"] },
    subjects: { es: ["Álgebra", "Cálculo", "Trigonometría", "Geometría"], en: ["Algebra", "Calculus", "Trigonometry", "Geometry"] },
    reviewsList: [
      { name: "Sofía B.", rating: 5, text: { es: "Por fin entendí cálculo, gracias a él.", en: "I finally understood calculus, thanks to him." } },
      { name: "Kevin S.", rating: 4, text: { es: "Muy paciente con las dudas.", en: "Very patient with questions." } }
    ]
  },
  {
    id: "t8", name: "Valeria Gómez",
    photo: "IMG%20Community/Valeria%20Gomez.jpg",
    category: "chemistry",
    subject: { es: "Química", en: "Chemistry" },
    rating: 4.8, reviews: 88, price: 12,
    mode: "online", availability: ["morning", "afternoon"],
    bio: {
      es: "Química farmacéutica con enfoque en enseñanza práctica. Laboratorios virtuales y resolución de problemas.",
      en: "Pharmaceutical chemist with a practical teaching approach. Virtual labs and problem solving."
    },
    tags: { es: ["Laboratorios virtuales", "Práctica"], en: ["Virtual Labs", "Practical"] },
    subjects: { es: ["Química General", "Química Orgánica", "Bioquímica"], en: ["General Chemistry", "Organic Chemistry", "Biochemistry"] },
    reviewsList: [
      { name: "Laura C.", rating: 5, text: { es: "Hace que la química sea divertida.", en: "Makes chemistry fun." } },
      { name: "Pablo R.", rating: 5, text: { es: "Los laboratorios virtuales son geniales.", en: "The virtual labs are great." } }
    ]
  },
  {
    id: "t9", name: "Diego Fernández",
    photo: "IMG%20Community/Diego%20Fernandez.jpg",
    category: "physics",
    subject: { es: "Física", en: "Physics" },
    rating: 4.6, reviews: 74, price: 10,
    mode: "presencial", availability: ["afternoon"],
    bio: {
      es: "Estudiante avanzado de ingeniería mecánica. Tutor de física desde hace 3 años con excelentes resultados.",
      en: "Advanced mechanical engineering student. Physics tutor for 3 years with excellent results."
    },
    tags: { es: ["Práctico", "Ejemplos reales"], en: ["Practical", "Real Examples"] },
    subjects: { es: ["Mecánica", "Termodinámica", "Electricidad"], en: ["Mechanics", "Thermodynamics", "Electricity"] },
    reviewsList: [
      { name: "Camila T.", rating: 5, text: { es: "Me ayudó a pasar física 2.", en: "Helped me pass Physics 2." } },
      { name: "Mario V.", rating: 4, text: { es: "Buenos ejemplos prácticos.", en: "Good practical examples." } }
    ]
  },
  {
    id: "t10", name: "Ana Lucía Herrera",
    photo: "IMG%20Community/Ana%20Lucia.jpg",
    category: "economics",
    subject: { es: "Economía", en: "Economics" },
    rating: 4.8, reviews: 103, price: 14,
    mode: "online", availability: ["morning", "evening"],
    bio: {
      es: "Economista con experiencia en banca y docencia. Especialista en micro/macroeconomía y finanzas personales.",
      en: "Economist with banking and teaching experience. Specialist in micro/macroeconomics and personal finance."
    },
    tags: { es: ["Casos reales", "Finanzas personales"], en: ["Real Cases", "Personal Finance"] },
    subjects: { es: ["Microeconomía", "Macroeconomía", "Finanzas"], en: ["Microeconomics", "Macroeconomics", "Finance"] },
    reviewsList: [
      { name: "Roberto P.", rating: 5, text: { es: "Excelente profesora, muy clara.", en: "Excellent teacher, very clear." } },
      { name: "Isabel G.", rating: 5, text: { es: "Me encantaron las clases de finanzas.", en: "Loved the finance classes." } }
    ]
  }
];

// Mapeo de categoría de cada tutor a las pestañas del filtro
const categoryMap = {
  psychology: "all", systems: "systems", engineering: "all",
  english: "english", biology: "biology", math: "math",
  chemistry: "chemistry", physics: "physics", economics: "economics"
};

// Etiquetas bilingües para las 7 categorías reales (las que usan
// registro.html y las pestañas de esta página).
const REAL_CATEGORY_LABELS = {
  physics: { es: "Física", en: "Physics" },
  chemistry: { es: "Química", en: "Chemistry" },
  economics: { es: "Economía", en: "Economics" },
  biology: { es: "Biología", en: "Biology" },
  math: { es: "Matemáticas", en: "Mathematics" },
  english: { es: "Inglés", en: "English" },
  systems: { es: "Sistemas", en: "Systems" }
};

// -----------------------------------------------
// TUTORES REGISTRADOS DE VERDAD (role: "tutor" en registro.html)
// Se combinan con el catálogo de ejemplo para que quien se registre
// como tutor aparezca realmente en este listado, no solo en su perfil.
// -----------------------------------------------
function getRegisteredTutors() {
  let users = [];
  try {
    users = JSON.parse(localStorage.getItem('noesis_users')) || [];
  } catch {
    users = [];
  }

  return users
    .filter(u => u.role === 'tutor' && u.tutorSubject)
    .map(u => {
      const subjectLabel = REAL_CATEGORY_LABELS[u.tutorSubject] || { es: u.tutorSubject, en: u.tutorSubject };
      return {
        id: 'user_' + u.email,
        name: u.name,
        category: u.tutorSubject,
        subject: subjectLabel,
        rating: 5.0,
        reviews: 0,
        price: Number(u.tutorPrice) || 0,
        mode: 'online',
        availability: ['morning', 'afternoon', 'evening'],
        bio: { es: u.tutorBio || '', en: u.tutorBio || '' },
        tags: { es: ['Nuevo en Noesis'], en: ['New on Noesis'] },
        subjects: { es: [subjectLabel.es], en: [subjectLabel.en] },
        reviewsList: [],
        isNewTutor: true
      };
    });
}

// Combina el catálogo de ejemplo con los tutores reales registrados.
// Se recalcula cada vez para reflejar registros nuevos sin recargar.
function getAllTutors() {
  return [...getRegisteredTutors(), ...tutors];
}

// -----------------------------------------------
// FAVORITOS (tutores destacados por el usuario)
// Persisten en localStorage; los tutores marcados como
// favoritos se muestran siempre arriba del listado.
// -----------------------------------------------
const FAV_TUTORS_KEY = 'noesis_fav_tutors';

function loadFavTutors() {
  try {
    const stored = JSON.parse(localStorage.getItem(FAV_TUTORS_KEY));
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function saveFavTutors(list) {
  localStorage.setItem(FAV_TUTORS_KEY, JSON.stringify(list));
}

let favTutorIds = loadFavTutors();

function isFavTutor(id) {
  return favTutorIds.includes(id);
}

function toggleFavTutor(id) {
  if (isFavTutor(id)) {
    favTutorIds = favTutorIds.filter(x => x !== id);
  } else {
    favTutorIds = [id, ...favTutorIds];
  }
  saveFavTutors(favTutorIds);
}

// -----------------------------------------------
// RESERVAS DE CLASES (para la campana de notificaciones)
// -----------------------------------------------
const BOOKINGS_KEY = 'noesis_tutor_bookings';

function loadBookings() {
  try {
    const stored = JSON.parse(localStorage.getItem(BOOKINGS_KEY));
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function saveBookings(list) {
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(list));
}

let bookings = loadBookings();

// -----------------------------------------------
// SOLICITUDES PUBLICADAS ("Publicar solicitud")
// -----------------------------------------------
const REQUESTS_KEY = 'noesis_tutor_requests';

function loadRequests() {
  try {
    const stored = JSON.parse(localStorage.getItem(REQUESTS_KEY));
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function saveRequests(list) {
  localStorage.setItem(REQUESTS_KEY, JSON.stringify(list));
}

// Muestra las solicitudes publicadas por estudiantes, pero solo si
// el usuario con sesión activa es un tutor — así cada tutor puede
// ver qué estudiantes necesitan ayuda y contactarlos directamente.
function renderStudentRequests() {
  const section = document.getElementById('studentRequestsSection');
  const list = document.getElementById('studentRequestsList');
  const empty = document.getElementById('studentRequestsEmpty');
  if (!section || !list || !empty) return;

  const user = getCurrentUser();
  const isTutor = !!(user && user.role === 'tutor');

  section.classList.toggle('show', isTutor);
  if (!isTutor) return;

  const requests = loadRequests().slice().reverse();

  list.innerHTML = '';
  empty.classList.toggle('show', requests.length === 0);

  const timeLabels = {
    morning: translations[currentLang].filter_time_morning,
    afternoon: translations[currentLang].filter_time_afternoon,
    evening: translations[currentLang].filter_time_evening
  };

  requests.forEach(req => {
    const card = document.createElement('div');
    card.className = 'request-card';
    card.innerHTML = `
      <div class="request-card-top">
        <span class="request-card-subject">${req.subject}</span>
        <span class="request-card-budget">B/. ${Number(req.budget).toFixed(0)}/h</span>
      </div>
      <p class="request-card-desc">${req.description}</p>
      <div class="request-card-meta">
        <span><i class="fa-regular fa-clock"></i> ${timeLabels[req.time] || req.time}</span>
        <span><i class="fa-solid fa-user"></i> ${translations[currentLang].requested_by}: ${req.studentName || '—'}</span>
      </div>
      <button class="request-card-contact-btn" type="button">
        <i class="fa-brands fa-whatsapp"></i> ${translations[currentLang].contact_student_btn}
      </button>
    `;
    const contactBtn = card.querySelector('.request-card-contact-btn');
    contactBtn.addEventListener('click', () => {
      const msg = currentLang === 'es'
        ? `Hola ${req.studentName || ''}, vi tu solicitud de "${req.subject}" en Noesis y puedo ayudarte.`
        : `Hi ${req.studentName || ''}, I saw your "${req.subject}" request on Noesis and I can help.`;
      window.open(`https://wa.me/50760000000?text=${encodeURIComponent(msg)}`, '_blank');
    });
    list.appendChild(card);
  });
}

// -----------------------------------------------
// ESTADO
// -----------------------------------------------
let activeCategory = "all";
let searchQuery = "";
let filterMode = "all";
let filterTime = "all";
let filterMaxPrice = 30;
let currentTutor = null;

// -----------------------------------------------
// ELEMENTOS
// -----------------------------------------------
const tutorGrid = document.getElementById('tutorGrid');
const noResults = document.getElementById('commNoResults');
const searchInput = document.getElementById('tutorSearch');
const priceRange = document.getElementById('filterPrice');
const priceValue = document.getElementById('priceValue');

// Modal
const tutorModal = document.getElementById('tutorModal');
const tutorModalClose = document.getElementById('tutorModalClose');

// -----------------------------------------------
// FORMATO
// -----------------------------------------------
function formatPrice(n) { return `B/. ${Number(n).toFixed(2)}`; }

// -----------------------------------------------
// FILTRADO
// -----------------------------------------------
function getFilteredTutors() {
  const filtered = getAllTutors().filter(t => {
    // Categoría
    if (activeCategory !== "all") {
      const mapped = categoryMap[t.category] || t.category;
      if (mapped !== activeCategory) return false;
    }

    // Búsqueda
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const nameMatch = t.name.toLowerCase().includes(q);
      const subjectMatch = (t.subject.es + ' ' + t.subject.en).toLowerCase().includes(q);
      if (!nameMatch && !subjectMatch) return false;
    }

    // Modalidad
    if (filterMode !== "all" && t.mode !== filterMode) return false;

    // Disponibilidad
    if (filterTime !== "all" && !t.availability.includes(filterTime)) return false;

    // Precio
    if (t.price > filterMaxPrice) return false;

    return true;
  });

  // Los tutores destacados (favoritos) siempre van primero,
  // conservando el orden relativo dentro de cada grupo.
  const favs = filtered.filter(t => isFavTutor(t.id));
  const rest = filtered.filter(t => !isFavTutor(t.id));
  return [...favs, ...rest];
}

// -----------------------------------------------
// RENDERIZADO
// -----------------------------------------------

/* Devuelve el círculo del avatar. Si el tutor tiene "photo" se pinta la
   imagen y se le agrega la clase "has-photo" (el CSS oculta el fondo
   decorativo). Si el archivo no existe, el onerror quita la clase y
   vuelve a dejar el ícono de usuario, así nunca queda un hueco roto. */
function avatarHTML(t, baseClass) {
  if (t.photo) {
    return `
      <div class="${baseClass} has-photo">
        <img src="${t.photo}" alt="${t.name}" loading="lazy"
             onerror="this.parentElement.classList.remove('has-photo'); this.remove();">
        <i class="fa-solid fa-user"></i>
      </div>`;
  }
  return `<div class="${baseClass}"><i class="fa-solid fa-user"></i></div>`;
}

function renderTutors() {
  const filtered = getFilteredTutors();
  tutorGrid.innerHTML = '';

  filtered.forEach(t => {
    const favActive = isFavTutor(t.id);
    const card = document.createElement('div');
    card.className = 'tutor-card';
    card.innerHTML = `
      <div class="tutor-card-top">
        <span class="tutor-card-featured-badge ${favActive ? 'show' : ''}">
          <i class="fa-solid fa-star"></i> ${translations[currentLang].featured_badge}
        </span>
        <button class="tutor-card-fav ${favActive ? 'liked' : ''}" type="button" aria-label="Favorito">
          <i class="fa-solid fa-heart"></i>
        </button>
      </div>
      ${avatarHTML(t, 'tutor-card-avatar')}
      <span class="tutor-card-name">${t.name}</span>
      <span class="tutor-card-subject">${t.subject[currentLang]}</span>
      <div class="tutor-card-rating">
        <i class="fa-solid fa-star"></i> ${t.rating}
      </div>
      <span class="tutor-card-reviews">(${t.reviews} ${currentLang === 'es' ? 'Reseñas' : 'Reviews'})</span>
      <button class="tutor-card-btn" type="button">${translations[currentLang].details_btn}</button>
      <button class="tutor-card-quick-contact" type="button">
        <i class="fa-brands fa-whatsapp"></i> ${translations[currentLang].contact_btn}
      </button>
    `;

    // Favorito (destaca al tutor y lo sube arriba del listado)
    const favBtn = card.querySelector('.tutor-card-fav');
    favBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavTutor(t.id);
      renderTutors();
      updateNotifBadge();
    });

    // Abrir modal de detalle
    const detailBtn = card.querySelector('.tutor-card-btn');
    detailBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openTutorModal(t);
    });
    card.addEventListener('click', () => openTutorModal(t));

    // Contacto rápido por WhatsApp (sin abrir el modal)
    const quickContactBtn = card.querySelector('.tutor-card-quick-contact');
    quickContactBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      contactTutorWhatsApp(t);
    });

    tutorGrid.appendChild(card);
  });

  noResults.classList.toggle('show', filtered.length === 0);
  tutorGrid.style.display = filtered.length === 0 ? 'none' : '';
}

// Abre WhatsApp con un mensaje prellenado para contactar al tutor
function contactTutorWhatsApp(t) {
  const msg = currentLang === 'es'
    ? `Hola ${t.name}, me interesa tomar clases contigo en Noesis.`
    : `Hi ${t.name}, I'm interested in taking classes with you on Noesis.`;
  window.open(`https://wa.me/50760000000?text=${encodeURIComponent(msg)}`, '_blank');
}

// -----------------------------------------------
// MODAL DE DETALLE
// -----------------------------------------------
function openTutorModal(t) {
  if (!t || !tutorModal) return;
  currentTutor = t;

  try {
    const el = (id) => document.getElementById(id);

    // Datos básicos (con null-check en cada uno)
    const avatar = el('tutorDetailAvatar');
    if (avatar) {
      // Misma lógica que en las tarjetas: foto si existe, si no el paisaje
      avatar.classList.toggle('has-photo', !!t.photo);
      avatar.innerHTML = t.photo
        ? `<img src="${t.photo}" alt="${t.name}"
                onerror="this.parentElement.classList.remove('has-photo'); this.remove();">`
        : '';
    }

    const nameEl = el('tutorDetailName');
    if (nameEl) nameEl.textContent = t.name;

    const subjEl = el('tutorDetailSubject');
    if (subjEl) subjEl.textContent = t.subject[currentLang] || '';

    const ratingEl = el('tutorDetailRating');
    if (ratingEl) ratingEl.textContent = t.rating;

    const revCountEl = el('tutorDetailReviewsCount');
    if (revCountEl) revCountEl.textContent = `(${t.reviews} ${currentLang === 'es' ? 'Reseñas' : 'Reviews'})`;

    const bioEl = el('tutorDetailBio');
    if (bioEl) bioEl.textContent = t.bio[currentLang] || '';

    const priceEl = el('tutorDetailPrice');
    if (priceEl) priceEl.textContent = formatPrice(t.price);

    const revLinkEl = el('tutorReviewsLink');
    if (revLinkEl) revLinkEl.textContent = `${translations[currentLang].view_all} (${t.reviews})`;

    // Favorito (sincronizado con la tarjeta y persistido)
    const favBtn = el('tutorFavBtn');
    if (favBtn) {
      favBtn.classList.toggle('liked', isFavTutor(t.id));
    }

    // Schedule slots
    const slotsBox = el('tutorScheduleSlots');
    if (slotsBox) {
      const slotLabels = {
        morning: translations[currentLang].slot_morning || 'Mañana',
        afternoon: translations[currentLang].slot_afternoon || 'Tarde',
        evening: translations[currentLang].slot_evening || 'Noche'
      };
      slotsBox.innerHTML = '';
      (t.availability || []).forEach(slot => {
        const span = document.createElement('span');
        span.className = 'schedule-slot';
        span.textContent = slotLabels[slot] || slot;
        slotsBox.appendChild(span);
      });
    }

    // Tags
    const tagsBox = el('tutorDetailTags');
    if (tagsBox) {
      tagsBox.innerHTML = '';
      (t.tags[currentLang] || []).forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tutor-tag';
        span.textContent = tag;
        tagsBox.appendChild(span);
      });
    }

    // Subjects
    const subjectsBox = el('tutorDetailSubjects');
    if (subjectsBox) {
      subjectsBox.innerHTML = '';
      (t.subjects[currentLang] || []).forEach(subj => {
        const span = document.createElement('span');
        span.className = 'tutor-subject-pill';
        span.textContent = subj;
        subjectsBox.appendChild(span);
      });
    }

    // Reviews
    const reviewsList = el('tutorReviewsList');
    if (reviewsList) {
      reviewsList.innerHTML = '';
      (t.reviewsList || []).forEach(r => {
        const card = document.createElement('div');
        card.className = 'tutor-review-card';
        const starsHTML = Array.from({ length: 5 }, (_, i) =>
          `<i class="fa-solid fa-star" style="opacity:${i < r.rating ? 1 : .3}"></i>`
        ).join('');
        card.innerHTML = `
          <div class="tutor-review-header">
            <div class="review-avatar">${r.name.charAt(0)}</div>
            <div>
              <div class="review-name">${r.name}</div>
              <div class="review-stars">${starsHTML}</div>
            </div>
          </div>
          <p class="review-text">${r.text[currentLang] || ''}</p>
        `;
        reviewsList.appendChild(card);
      });
    }
  } catch (err) {
    console.error('Error populating tutor modal:', err);
  }

  // Mostrar el modal DESPUÉS de poblar todo el contenido
  tutorModal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeTutorModal() {
  if (tutorModal) tutorModal.classList.remove('show');
  document.body.style.overflow = '';
  currentTutor = null;
}

tutorModalClose.addEventListener('click', closeTutorModal);
window.addEventListener('click', (e) => { if (e.target === tutorModal) closeTutorModal(); });
window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeTutorModal(); });

document.getElementById('tutorFavBtn').addEventListener('click', () => {
  if (!currentTutor) return;
  toggleFavTutor(currentTutor.id);
  document.getElementById('tutorFavBtn').classList.toggle('liked', isFavTutor(currentTutor.id));
  renderTutors();
  updateNotifBadge();
});

// Botones del modal
document.getElementById('tutorBookBtn').addEventListener('click', () => {
  if (!currentTutor) return;

  const user = getCurrentUser();
  if (!user) {
    showGlobalToast(translations[currentLang].login_required_booking);
    closeTutorModal();
    setTimeout(() => { window.location.href = 'login.html'; }, 900);
    return;
  }

  bookings.push({
    id: 'b_' + Date.now().toString(36),
    tutorId: currentTutor.id,
    tutorName: currentTutor.name,
    subject: currentTutor.subject,
    bookedAt: new Date().toISOString()
  });
  saveBookings(bookings);
  updateNotifBadge();
  showGlobalToast(translations[currentLang].toast_booked);
  closeTutorModal();
});

document.getElementById('tutorMsgBtn').addEventListener('click', () => {
  if (!currentTutor) return;
  contactTutorWhatsApp(currentTutor);
});

// -----------------------------------------------
// EVENTOS DE BÚSQUEDA Y FILTRO
// -----------------------------------------------
searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value.trim();
  renderTutors();
});

document.querySelectorAll('.comm-cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.comm-cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.category;
    renderTutors();
  });
});

priceRange.addEventListener('input', () => {
  filterMaxPrice = Number(priceRange.value);
  priceValue.textContent = filterMaxPrice >= 30 ? '30' : String(filterMaxPrice);
});

document.getElementById('filterApply').addEventListener('click', () => {
  filterMode = document.querySelector('input[name="mode"]:checked').value;
  filterTime = document.getElementById('filterTime').value;
  filterMaxPrice = Number(priceRange.value);
  renderTutors();
});

document.getElementById('filterClear').addEventListener('click', () => {
  document.querySelector('input[name="mode"][value="all"]').checked = true;
  document.getElementById('filterTime').value = 'all';
  priceRange.value = 30;
  priceValue.textContent = '30';
  filterMode = "all";
  filterTime = "all";
  filterMaxPrice = 30;
  renderTutors();
});

// -----------------------------------------------
// TOAST
// -----------------------------------------------
const globalToast = document.getElementById('globalToast');
let toastTimer = null;

function showGlobalToast(message) {
  if (!globalToast) return;
  globalToast.textContent = message;
  globalToast.classList.remove('show');
  void globalToast.offsetWidth;
  globalToast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => globalToast.classList.remove('show'), 2500);
}

// -----------------------------------------------
// IDIOMA
// -----------------------------------------------
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('noesis_lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  const langCurrent = document.getElementById('langCurrent');
  if (langCurrent) langCurrent.textContent = lang.toUpperCase();

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  document.documentElement.setAttribute('lang', lang);
  renderTutors();
  renderStudentRequests();
}

// Idioma dropdown
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const langSwitcher = document.getElementById('langSwitcher');

if (langBtn && langDropdown) {
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('open');
  });

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
      langDropdown.classList.remove('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (langSwitcher && !langSwitcher.contains(e.target)) {
      langDropdown.classList.remove('open');
    }
  });
}

// -----------------------------------------------
// CURSOR PERSONALIZADO
// -----------------------------------------------
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');

let mouseX = 0, mouseY = 0, follX = 0, follY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateFollower() {
  follX += (mouseX - follX) * 0.15;
  follY += (mouseY - follY) * 0.15;
  cursorFollower.style.left = follX + 'px';
  cursorFollower.style.top = follY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

const interactives = document.querySelectorAll('a, button, .tutor-card, .comm-cat-btn');
interactives.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorFollower.style.width = '54px';
    cursorFollower.style.height = '54px';
    cursorFollower.style.opacity = '0.6';
  });
  el.addEventListener('mouseleave', () => {
    cursorFollower.style.width = '32px';
    cursorFollower.style.height = '32px';
    cursorFollower.style.opacity = '1';
  });
});

// -----------------------------------------------
// NAVBAR SCROLL + HAMBURGUESA — BLOQUE REUTILIZABLE
// (idéntico al de Books.js; funciona en monitor, tablet
// y celular con el CSS de arriba. Solo necesita
// #navbar, #hamburger y #navLinks en el HTML.)
// -----------------------------------------------
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const NAV_BREAKPOINT = 1024; // debe coincidir con el @media del CSS

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  syncNavbarHeight();
});

const navOverlay = document.createElement('div');
navOverlay.className = 'nav-overlay';
navOverlay.id = 'navOverlay';
document.body.appendChild(navOverlay);

function syncNavbarHeight() {
  document.documentElement.style.setProperty('--navbar-h', navbar.offsetHeight + 'px');
}
syncNavbarHeight();
window.addEventListener('resize', syncNavbarHeight);

function openMenu() {
  hamburger.classList.add('active');
  navLinks.classList.add('open');
  navOverlay.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.classList.add('nav-open');
}

function closeMenu() {
  hamburger.classList.remove('active');
  navLinks.classList.remove('open');
  navOverlay.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('nav-open');
}

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.contains('open');
  isOpen ? closeMenu() : openMenu();
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', closeMenu);
});
navOverlay.addEventListener('click', closeMenu);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});
window.addEventListener('resize', () => {
  if (window.innerWidth > NAV_BREAKPOINT) closeMenu();
});

// -----------------------------------------------
// SESIÓN (user icon)
// -----------------------------------------------
function getCurrentUser() {
  try {
    const session = JSON.parse(localStorage.getItem('noesis_session'));
    if (!session || !session.email) return null;
    const users = JSON.parse(localStorage.getItem('noesis_users')) || [];
    return users.find(u => u.email === session.email) || null;
  } catch {
    return null;
  }
}

(function syncUserNavIcon() {
  const userNavBtn = document.getElementById('userNavBtn');
  if (!userNavBtn) return;
  try {
    const session = JSON.parse(localStorage.getItem('noesis_session'));
    const users = JSON.parse(localStorage.getItem('noesis_users')) || [];
    const loggedIn = session && users.some(u => u.email === session.email);
    userNavBtn.href = loggedIn ? 'perfil.html' : 'login.html';
  } catch {
    userNavBtn.href = 'login.html';
  }
})();

// -----------------------------------------------
// CAMPANA DE NOTIFICACIONES (clases reservadas)
// -----------------------------------------------
const commNotifSwitcher = document.getElementById('commNotifSwitcher');
const commNotifBtn = document.getElementById('commNotifBtn');
const commNotifDropdown = document.getElementById('commNotifDropdown');
const commNotifBadge = document.getElementById('commNotifBadge');
const commNotifList = document.getElementById('commNotifList');
const commNotifEmpty = document.getElementById('commNotifEmpty');

function updateNotifBadge() {
  if (!commNotifBadge) return;
  const count = bookings.length;
  commNotifBadge.textContent = count > 9 ? '9+' : String(count);
  commNotifBadge.classList.toggle('show', count > 0);
}

function renderNotifList() {
  if (!commNotifList) return;
  commNotifList.innerHTML = '';

  bookings.forEach(b => {
    const item = document.createElement('div');
    item.className = 'comm-notif-item';
    item.innerHTML = `
      <div class="comm-notif-item-avatar">${b.tutorName.charAt(0)}</div>
      <div class="comm-notif-item-info">
        <span class="comm-notif-item-name">${b.tutorName}</span>
        <span class="comm-notif-item-subject">${b.subject ? b.subject[currentLang] : ''}</span>
      </div>
      <button class="comm-notif-item-remove" type="button" data-id="${b.id}" aria-label="Eliminar">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;
    commNotifList.appendChild(item);
  });

  if (commNotifEmpty) commNotifEmpty.classList.toggle('show', bookings.length === 0);
  commNotifList.style.display = bookings.length === 0 ? 'none' : '';
}

if (commNotifBtn && commNotifDropdown) {
  commNotifBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const willOpen = !commNotifDropdown.classList.contains('open');
    if (willOpen) renderNotifList();
    commNotifDropdown.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (commNotifSwitcher && !commNotifSwitcher.contains(e.target)) {
      commNotifDropdown.classList.remove('open');
    }
  });

  commNotifList.addEventListener('click', (e) => {
    const btn = e.target.closest('.comm-notif-item-remove');
    if (!btn) return;
    const id = btn.dataset.id;
    bookings = bookings.filter(b => b.id !== id);
    saveBookings(bookings);
    updateNotifBadge();
    renderNotifList();
    showGlobalToast(translations[currentLang].class_removed);
  });
}

updateNotifBadge();

// -----------------------------------------------
// MODAL "PUBLICAR SOLICITUD"
// -----------------------------------------------
const postRequestBtn = document.getElementById('postRequestBtn');
const requestModal = document.getElementById('requestModal');
const closeRequestModal = document.getElementById('closeRequestModal');
const requestForm = document.getElementById('requestForm');
const requestError = document.getElementById('requestError');

function openRequestModal() {
  if (!requestModal) return;

  const user = getCurrentUser();
  if (!user) {
    showGlobalToast(translations[currentLang].login_required_request);
    setTimeout(() => { window.location.href = 'login.html'; }, 900);
    return;
  }

  requestForm.reset();
  requestError.classList.remove('visible');
  requestModal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeRequestModalFn() {
  if (!requestModal) return;
  requestModal.classList.remove('show');
  document.body.style.overflow = '';
}

if (postRequestBtn) postRequestBtn.addEventListener('click', openRequestModal);
if (closeRequestModal) closeRequestModal.addEventListener('click', closeRequestModalFn);

window.addEventListener('click', (e) => {
  if (e.target === requestModal) closeRequestModalFn();
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && requestModal && requestModal.classList.contains('show')) closeRequestModalFn();
});

if (requestForm) {
  requestForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const subject = requestForm.reqSubject.value.trim();
    const description = requestForm.reqDescription.value.trim();
    const budget = parseFloat(requestForm.reqBudget.value);
    const time = requestForm.reqTime.value;

    if (!subject || !description || isNaN(budget) || budget <= 0) {
      requestError.textContent = translations[currentLang].request_err_required;
      requestError.classList.add('visible');
      requestForm.classList.remove('publish-shake');
      void requestForm.offsetWidth;
      requestForm.classList.add('publish-shake');
      return;
    }

    const requests = loadRequests();
    const requestUser = getCurrentUser();
    requests.push({
      id: 'r_' + Date.now().toString(36),
      subject, description, budget, time,
      studentName: requestUser ? requestUser.name : '',
      studentEmail: requestUser ? requestUser.email : '',
      createdAt: new Date().toISOString()
    });
    saveRequests(requests);
    renderStudentRequests();

    closeRequestModalFn();
    showGlobalToast(translations[currentLang].request_success);
  });
}

// -----------------------------------------------
// INICIALIZACIÓN
// -----------------------------------------------
setLanguage(currentLang);