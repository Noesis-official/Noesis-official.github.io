/* =====================================================
   NOESIS — books.js
   Lógica de la página Books: navbar, idioma, sidebar de
   categorías, buscador, grid de libros y modal de producto.
===================================================== */

/* -----------------------------------------------
   NAVBAR / HAMBURGUESA (igual que index.js)
----------------------------------------------- */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

/* -----------------------------------------------
   CURSOR PERSONALIZADO (igual que en index/marketplace)
----------------------------------------------- */
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

document.addEventListener('mouseover', (e) => {
  if (e.target.closest('a, button, .book-card')) {
    cursorFollower.style.width = '54px';
    cursorFollower.style.height = '54px';
    cursorFollower.style.opacity = '0.6';
  }
});
document.addEventListener('mouseout', (e) => {
  if (e.target.closest('a, button, .book-card')) {
    cursorFollower.style.width = '32px';
    cursorFollower.style.height = '32px';
    cursorFollower.style.opacity = '1';
  }
});

/* -----------------------------------------------
   TRADUCCIONES
----------------------------------------------- */
const translations = {
  es: {
    nav_menu: "MENU",
    nav_market: "MARKETPLACE",
    nav_community: "COMUNIDAD",
    nav_books: "LIBROS",
    books_hero_title: "Explora nuestra biblioteca",
    books_hero_text: "Libros de texto y guías compartidos por estudiantes de David, Chiriquí.",
    search_placeholder: "Busca un libro, autor o materia...",
    cat_all: "Todas",
    cat_medicine: "Medicina",
    cat_systems: "Ingeniería en Sistemas",
    cat_nursing: "Enfermería",
    cat_math: "Matemáticas",
    cat_biology: "Biología",
    cat_architecture: "Arquitectura",
    cat_physics: "Física",
    no_results_title: "¿Nada por aquí?",
    no_results: "No encontramos libros que coincidan con tu búsqueda.",
    modal_seller_label: "Publicado por",
    modal_condition_label: "Estado",
    modal_desc_title: "Descripción",
    modal_seller_title: "Vendedor",
    modal_add_cart: "Añadir al carrito",
    modal_contact: "Contactar vendedor",
    sell_btn: "Vender",
    publish_title: "Publicar un libro",
    publish_name_label: "Título del libro",
    publish_price_label: "Precio (B/.)",
    publish_condition_label: "Estado",
    cond_like_new: "Como nuevo",
    cond_good: "Buen estado",
    cond_used: "Usado",
    publish_category_label: "Categoría",
    publish_desc_label: "Descripción",
    publish_image_label: "Foto de la portada",
    publish_submit_btn: "Publicar libro",
    publish_hint: "Simulado con localStorage — tu publicación solo se guarda en este navegador.",
    publish_err_required: "Por favor completa todos los campos y elige una categoría.",
    publish_login_required: "Inicia sesión para publicar un libro.",
    publish_success: "¡Libro publicado con éxito! 🎉",
    delete_listing_btn: "Eliminar publicación",
    delete_confirm: "¿Seguro que quieres eliminar esta publicación?",
    delete_success: "Publicación eliminada.",
    card_mine_badge: "Tuyo",
    cart_title: "Tu carrito",
    cart_empty_msg: "Tu carrito está vacío",
    cart_total: "Total",
    cart_checkout: "Finalizar compra",
    cart_clear: "Vaciar carrito",
    cart_added_toast: "Añadido al carrito ✓",
    cart_removed_toast: "Producto eliminado",
    cart_cleared_toast: "Carrito vaciado",
    cart_checkout_success: "¡Compra realizada con éxito! 🎉",
    cart_checkout_empty: "Tu carrito está vacío",
    footer_desc: "El marketplace universitario de<br>David, Chiriquí.",
    footer_platform: "Plataforma",
    footer_marketplace: "Marketplace",
    footer_kits: "Kits de Inicio",
    footer_support: "Soporte",
    footer_faq: "Ayuda / FAQ",
    footer_contact: "Contáctanos",
    footer_terms: "Términos de uso",
    footer_follow: "Síguenos",
    footer_copyright: "© 2026 Noesis · Todos los derechos reservados · David, Chiriquí, Panamá"
  },
  en: {
    nav_menu: "MENU",
    nav_market: "MARKETPLACE",
    nav_community: "COMMUNITY",
    nav_books: "BOOKS",
    books_hero_title: "Explore our library",
    books_hero_text: "Textbooks and guides shared by students in David, Chiriquí.",
    search_placeholder: "Search a book, author or subject...",
    cat_all: "All",
    cat_medicine: "Medicine",
    cat_systems: "Systems Engineering",
    cat_nursing: "Nursing",
    cat_math: "Mathematics",
    cat_biology: "Biology",
    cat_architecture: "Architecture",
    cat_physics: "Physics",
    no_results_title: "Nothing here yet?",
    no_results: "We couldn't find any books matching your search.",
    modal_seller_label: "Posted by",
    modal_condition_label: "Condition",
    modal_desc_title: "Description",
    modal_seller_title: "Seller",
    modal_add_cart: "Add to cart",
    modal_contact: "Contact seller",
    sell_btn: "Sell",
    publish_title: "Publish a book",
    publish_name_label: "Book title",
    publish_price_label: "Price (B/.)",
    publish_condition_label: "Condition",
    cond_like_new: "Like new",
    cond_good: "Good condition",
    cond_used: "Used",
    publish_category_label: "Category",
    publish_desc_label: "Description",
    publish_image_label: "Cover photo",
    publish_submit_btn: "Publish book",
    publish_hint: "Simulated with localStorage — your listing is only saved on this browser.",
    publish_err_required: "Please fill in all fields and choose a category.",
    publish_login_required: "Log in to publish a book.",
    publish_success: "Book published successfully! 🎉",
    delete_listing_btn: "Delete listing",
    delete_confirm: "Are you sure you want to delete this listing?",
    delete_success: "Listing deleted.",
    card_mine_badge: "Yours",
    cart_title: "Your cart",
    cart_empty_msg: "Your cart is empty",
    cart_total: "Total",
    cart_checkout: "Checkout",
    cart_clear: "Clear cart",
    cart_added_toast: "Added to cart ✓",
    cart_removed_toast: "Item removed",
    cart_cleared_toast: "Cart cleared",
    cart_checkout_success: "Purchase completed successfully! 🎉",
    cart_checkout_empty: "Your cart is empty",
    footer_desc: "The university marketplace of<br>David, Chiriquí.",
    footer_platform: "Platform",
    footer_marketplace: "Marketplace",
    footer_kits: "Starter Kits",
    footer_support: "Support",
    footer_faq: "Help / FAQ",
    footer_contact: "Contact Us",
    footer_terms: "Terms of Use",
    footer_follow: "Follow Us",
    footer_copyright: "© 2026 Noesis · All rights reserved · David, Chiriquí, Panama"
  }
};

/* -----------------------------------------------
   CATEGORÍAS (para las etiquetas de subgrupo)
----------------------------------------------- */
const categoryTags = {
  medicine: { icon: "fa-solid fa-stethoscope", es: "Medicina", en: "Medicine" },
  systems: { icon: "fa-solid fa-laptop-code", es: "Ingeniería en Sistemas", en: "Systems Engineering" },
  nursing: { icon: "fa-solid fa-user-nurse", es: "Enfermería", en: "Nursing" },
  math: { icon: "fa-solid fa-square-root-variable", es: "Matemáticas", en: "Mathematics" },
  biology: { icon: "fa-solid fa-dna", es: "Biología", en: "Biology" },
  architecture: { icon: "fa-solid fa-drafting-compass", es: "Arquitectura", en: "Architecture" },
  physics: { icon: "fa-solid fa-atom", es: "Física", en: "Physics" }
};

/* -----------------------------------------------
   LIBROS PUBLICADOS POR USUARIOS (localStorage)
   Se guardan aparte del catálogo de ejemplo y se combinan con
   él al momento de renderizar (misma lógica que marketplace.js).
----------------------------------------------- */
const USER_BOOKS_KEY = "noesis_user_books";
const USERS_KEY = "noesis_users";
const SESSION_KEY = "noesis_session";

function loadUserBooks() {
  try {
    return JSON.parse(localStorage.getItem(USER_BOOKS_KEY)) || [];
  } catch {
    return [];
  }
}

function saveUserBooks(list) {
  localStorage.setItem(USER_BOOKS_KEY, JSON.stringify(list));
}

function getCurrentUser() {
  try {
    const session = JSON.parse(localStorage.getItem(SESSION_KEY));
    if (!session || !session.email) return null;
    const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    return users.find(u => u.email === session.email) || null;
  } catch {
    return null;
  }
}

// Combina el catálogo de ejemplo con los libros publicados por
// usuarios; se recalcula cada vez para reflejar publicaciones nuevas
// sin recargar la página.
function getAllBooks() {
  return [...books, ...loadUserBooks()];
}

/* -----------------------------------------------
   CATÁLOGO DE LIBROS
   -> "image" es la ruta donde debes colocar tu archivo.
      Mientras el archivo no exista, se muestra un
      espacio reservado (placeholder) automáticamente.
   -> "seller" simula que cada libro fue publicado por
      un estudiante distinto (dato de ejemplo/editable).
----------------------------------------------- */
const books = [
  // ---- MEDICINA / ANATOMÍA ----
  {
    id: "med-anat-1",
    category: "medicine",
    tag: { es: "Anatomía", en: "Anatomy" },
    title: { es: "Mini Netter Atlas de Anatomía Humana 8", en: "Mini Netter Atlas of Human Anatomy 8" },
    image: "IMG/books/anatomia-mini-netter.jpg",
    price: 28,
    seller: "Ariadna Gómez",
    condition: { es: "Buen estado", en: "Good condition" },
    location: { es: "UTP - David", en: "UTP - David" },
    description: {
      es: "Edición de bolsillo del atlas Netter, ideal para llevar a clases y prácticas clínicas. Todas las páginas en buen estado, sin marcas.",
      en: "Pocket edition of the Netter atlas, great for classes and clinical practice. All pages in good shape, no markings."
    }
  },
  {
    id: "med-anat-2",
    category: "medicine",
    tag: { es: "Anatomía", en: "Anatomy" },
    title: { es: "Anatomía Humana", en: "Human Anatomy" },
    image: "IMG/books/anatomia-humana.jpg",
    price: 32,
    seller: "Carlos Aizprúa",
    condition: { es: "Como nuevo", en: "Like new" },
    location: { es: "UNACHI - David", en: "UNACHI - David" },
    description: {
      es: "Libro de anatomía general con ilustraciones a color. Usado un semestre, sin subrayados.",
      en: "General anatomy textbook with color illustrations. Used for one semester, no highlighting."
    }
  },
  {
    id: "med-anat-3",
    category: "medicine",
    tag: { es: "Anatomía", en: "Anatomy" },
    title: { es: "Netter Atlas de Anatomía Humana 8", en: "Netter Atlas of Human Anatomy 8" },
    image: "IMG/books/netter-atlas-8.jpg",
    price: 45,
    seller: "Fernanda Ruiz",
    condition: { es: "Buen estado", en: "Good condition" },
    location: { es: "USMA - David", en: "USMA - David" },
    description: {
      es: "Edición completa del clásico atlas de anatomía. Tapa un poco desgastada, interior impecable.",
      en: "Full edition of the classic anatomy atlas. Cover slightly worn, interior in great shape."
    }
  },
  {
    id: "med-anat-4",
    category: "medicine",
    tag: { es: "Anatomía", en: "Anatomy" },
    title: { es: "El Gran Libro del Cuerpo Humano", en: "The Big Book of the Human Body" },
    image: "IMG/books/gran-libro-cuerpo-humano.jpg",
    price: 22,
    seller: "Isaac Delgado",
    condition: { es: "Usado - buen estado", en: "Used - good condition" },
    location: { es: "ISAE - David", en: "ISAE - David" },
    description: {
      es: "Guía visual completa del cuerpo humano, perfecta como material de consulta rápida.",
      en: "Complete visual guide to the human body, perfect as a quick reference."
    }
  },
  {
    id: "med-anat-5",
    category: "medicine",
    tag: { es: "Anatomía", en: "Anatomy" },
    title: { es: "Atlas de Anatomía Humana", en: "Atlas of Human Anatomy" },
    image: "IMG/books/atlas-anatomia-humana.jpg",
    price: 38,
    seller: "Melissa Ortega",
    condition: { es: "Buen estado", en: "Good condition" },
    location: { es: "UTP - David", en: "UTP - David" },
    description: {
      es: "Atlas con esquemas detallados, muy usado en el primer año de la carrera de medicina.",
      en: "Atlas with detailed diagrams, widely used in the first year of medical school."
    }
  },

  // ---- MEDICINA / PEDIATRÍA ----
  {
    id: "med-ped-1",
    category: "medicine",
    tag: { es: "Pediatría", en: "Pediatrics" },
    title: { es: "Manual de Diagnóstico y Terapéutica en Pediatría", en: "Manual of Pediatric Diagnosis and Therapy" },
    image: "IMG/books/manual-diagnostico-pediatria.jpg",
    price: 24,
    seller: "Diego Herrera",
    condition: { es: "Buen estado", en: "Good condition" },
    location: { es: "UNACHI - David", en: "UNACHI - David" },
    description: {
      es: "Manual de referencia rápida usado en rotaciones de pediatría. Algunas anotaciones a lápiz.",
      en: "Quick-reference manual used during pediatric rotations. A few pencil annotations."
    }
  },
  {
    id: "med-ped-2",
    category: "medicine",
    tag: { es: "Pediatría", en: "Pediatrics" },
    title: { es: "Tratado de Pediatría", en: "Treatise on Pediatrics" },
    image: "IMG/books/tratado-pediatria.jpg",
    price: 40,
    seller: "Valeria Sánchez",
    condition: { es: "Como nuevo", en: "Like new" },
    location: { es: "USMA - David", en: "USMA - David" },
    description: {
      es: "Tratado completo de pediatría, edición reciente. Ideal para estudiantes de últimos años.",
      en: "Complete pediatrics treatise, recent edition. Ideal for senior-year students."
    }
  },
  {
    id: "med-ped-3",
    category: "medicine",
    tag: { es: "Pediatría", en: "Pediatrics" },
    title: { es: "Pediatría — Revisión Integral", en: "Pediatrics — Comprehensive Review" },
    image: "IMG/books/pediatria-revision-integral.jpg",
    price: 27,
    seller: "Ricardo Núñez",
    condition: { es: "Usado - buen estado", en: "Used - good condition" },
    location: { es: "ISAE - David", en: "ISAE - David" },
    description: {
      es: "Guía de repaso integral, muy útil antes de exámenes. Portada con leve desgaste.",
      en: "Comprehensive review guide, very useful before exams. Cover slightly worn."
    }
  },
  {
    id: "med-ped-4",
    category: "medicine",
    tag: { es: "Pediatría", en: "Pediatrics" },
    title: { es: "Nelson — Tratado de Pediatría", en: "Nelson — Textbook of Pediatrics" },
    image: "IMG/books/nelson-tratado-pediatria.jpg",
    price: 55,
    seller: "Andrea Castillo",
    condition: { es: "Buen estado", en: "Good condition" },
    location: { es: "UTP - David", en: "UTP - David" },
    description: {
      es: "El clásico Nelson de pediatría, referencia obligada en la carrera. Sin páginas faltantes.",
      en: "The classic Nelson pediatrics textbook, a must-have reference. No missing pages."
    }
  },
  {
    id: "med-ped-5",
    category: "medicine",
    tag: { es: "Pediatría", en: "Pediatrics" },
    title: { es: "Urgencias en Pediatría", en: "Pediatric Emergencies" },
    image: "IMG/books/urgencias-pediatria.jpg",
    price: 19,
    seller: "Gabriel Espino",
    condition: { es: "Buen estado", en: "Good condition" },
    location: { es: "UNACHI - David", en: "UNACHI - David" },
    description: {
      es: "Guía práctica de bolsillo para el manejo de urgencias pediátricas.",
      en: "Practical pocket guide for handling pediatric emergencies."
    }
  },

  // ---- INGENIERÍA EN SISTEMAS ----
  {
    id: "sys-1",
    category: "systems",
    tag: { es: "Programación", en: "Programming" },
    title: { es: "Estructuras de Datos y Algoritmos", en: "Data Structures and Algorithms" },
    image: "IMG/books/estructuras-datos-algoritmos.jpg",
    price: 26,
    seller: "Kevin Batista",
    condition: { es: "Buen estado", en: "Good condition" },
    location: { es: "UTP - David", en: "UTP - David" },
    description: {
      es: "Libro base del curso de estructuras de datos, con ejemplos en pseudocódigo.",
      en: "Core textbook for the data structures course, with pseudocode examples."
    }
  },
  {
    id: "sys-2",
    category: "systems",
    tag: { es: "Bases de Datos", en: "Databases" },
    title: { es: "Fundamentos de Bases de Datos", en: "Database Fundamentals" },
    image: "IMG/books/fundamentos-bases-datos.jpg",
    price: 30,
    seller: "Natalia Prado",
    condition: { es: "Como nuevo", en: "Like new" },
    location: { es: "UTP - David", en: "UTP - David" },
    description: {
      es: "Cubre modelado relacional, normalización y SQL básico. Muy poco uso.",
      en: "Covers relational modeling, normalization and basic SQL. Barely used."
    }
  },
  {
    id: "sys-3",
    category: "systems",
    tag: { es: "Redes", en: "Networking" },
    title: { es: "Redes de Computadoras", en: "Computer Networking" },
    image: "IMG/books/redes-computadoras.jpg",
    price: 33,
    seller: "Josué Miranda",
    condition: { es: "Usado - buen estado", en: "Used - good condition" },
    location: { es: "USMA - David", en: "USMA - David" },
    description: {
      es: "Texto clásico de redes, cubre el modelo OSI y protocolos TCP/IP.",
      en: "Classic networking textbook, covers the OSI model and TCP/IP protocols."
    }
  },

  // ---- ENFERMERÍA ----
  {
    id: "nurs-1",
    category: "nursing",
    tag: { es: "Fundamentos", en: "Fundamentals" },
    title: { es: "Fundamentos de Enfermería", en: "Fundamentals of Nursing" },
    image: "IMG/books/fundamentos-enfermeria.jpg",
    price: 29,
    seller: "Yolanda Pinzón",
    condition: { es: "Buen estado", en: "Good condition" },
    location: { es: "UNACHI - David", en: "UNACHI - David" },
    description: {
      es: "Manual base para el primer año, con procedimientos y técnicas ilustradas.",
      en: "Core manual for first year, with illustrated procedures and techniques."
    }
  },
  {
    id: "nurs-2",
    category: "nursing",
    tag: { es: "Farmacología", en: "Pharmacology" },
    title: { es: "Farmacología para Enfermería", en: "Pharmacology for Nursing" },
    image: "IMG/books/farmacologia-enfermeria.jpg",
    price: 25,
    seller: "Brenda Solís",
    condition: { es: "Como nuevo", en: "Like new" },
    location: { es: "USMA - David", en: "USMA - David" },
    description: {
      es: "Guía de dosis y administración de medicamentos, muy usada en las prácticas clínicas.",
      en: "Guide to dosing and medication administration, widely used in clinical practice."
    }
  },
  {
    id: "nurs-3",
    category: "nursing",
    tag: { es: "Cuidados Críticos", en: "Critical Care" },
    title: { es: "Enfermería en Cuidados Críticos", en: "Critical Care Nursing" },
    image: "IMG/books/enfermeria-cuidados-criticos.jpg",
    price: 34,
    seller: "Eduardo Vásquez",
    condition: { es: "Buen estado", en: "Good condition" },
    location: { es: "ISAE - David", en: "ISAE - David" },
    description: {
      es: "Texto especializado para las rotaciones de cuidados intensivos.",
      en: "Specialized textbook for intensive care rotations."
    }
  },

  // ---- MATEMÁTICAS ----
  {
    id: "math-1",
    category: "math",
    tag: { es: "Cálculo", en: "Calculus" },
    title: { es: "Cálculo de una Variable", en: "Single Variable Calculus" },
    image: "IMG/books/calculo-una-variable.jpg",
    price: 20,
    seller: "Ana Batista",
    condition: { es: "Usado - buen estado", en: "Used - good condition" },
    location: { es: "UTP - David", en: "UTP - David" },
    description: {
      es: "Libro de cálculo I, con ejercicios resueltos al final de cada capítulo.",
      en: "Calculus I textbook, with solved exercises at the end of each chapter."
    }
  },
  {
    id: "math-2",
    category: "math",
    tag: { es: "Álgebra Lineal", en: "Linear Algebra" },
    title: { es: "Álgebra Lineal y sus Aplicaciones", en: "Linear Algebra and Its Applications" },
    image: "IMG/books/algebra-lineal.jpg",
    price: 23,
    seller: "Manuel Torres",
    condition: { es: "Buen estado", en: "Good condition" },
    location: { es: "UTP - David", en: "UTP - David" },
    description: {
      es: "Texto de álgebra lineal, con aplicaciones a ingeniería. Portada plastificada por el dueño anterior.",
      en: "Linear algebra textbook, with engineering applications. Cover laminated by the previous owner."
    }
  },
  {
    id: "math-3",
    category: "math",
    tag: { es: "Estadística", en: "Statistics" },
    title: { es: "Probabilidad y Estadística", en: "Probability and Statistics" },
    image: "IMG/books/probabilidad-estadistica.jpg",
    price: 21,
    seller: "Lourdes Jaén",
    condition: { es: "Como nuevo", en: "Like new" },
    location: { es: "UNACHI - David", en: "UNACHI - David" },
    description: {
      es: "Libro de estadística aplicada, incluye tablas de distribución al final.",
      en: "Applied statistics textbook, includes distribution tables at the end."
    }
  },

  // ---- BIOLOGÍA ----
  {
    id: "bio-1",
    category: "biology",
    tag: { es: "Genética", en: "Genetics" },
    title: { es: "Genética Moderna", en: "Modern Genetics" },
    image: "IMG/books/genetica-moderna.jpg",
    price: 27,
    seller: "Ivonne Castañeda",
    condition: { es: "Buen estado", en: "Good condition" },
    location: { es: "UNACHI - David", en: "UNACHI - David" },
    description: {
      es: "Cubre herencia mendeliana, genética molecular y ejercicios prácticos.",
      en: "Covers Mendelian inheritance, molecular genetics and practical exercises."
    }
  },
  {
    id: "bio-2",
    category: "biology",
    tag: { es: "Biología Celular", en: "Cell Biology" },
    title: { es: "Biología Celular y Molecular", en: "Cell and Molecular Biology" },
    image: "IMG/books/biologia-celular-molecular.jpg",
    price: 31,
    seller: "Pablo Concepción",
    condition: { es: "Usado - buen estado", en: "Used - good condition" },
    location: { es: "UTP - David", en: "UTP - David" },
    description: {
      es: "Texto ilustrado sobre estructura y función celular, algunas páginas subrayadas.",
      en: "Illustrated textbook on cell structure and function, some pages highlighted."
    }
  },
  {
    id: "bio-3",
    category: "biology",
    tag: { es: "Ecología", en: "Ecology" },
    title: { es: "Fundamentos de Ecología", en: "Fundamentals of Ecology" },
    image: "IMG/books/fundamentos-ecologia.jpg",
    price: 18,
    seller: "Camila Rodríguez",
    condition: { es: "Buen estado", en: "Good condition" },
    location: { es: "USMA - David", en: "USMA - David" },
    description: {
      es: "Introducción a los ecosistemas y su conservación, con casos de estudio locales.",
      en: "Introduction to ecosystems and conservation, with local case studies."
    }
  },

  // ---- ARQUITECTURA ----
  {
    id: "arch-1",
    category: "architecture",
    tag: { es: "Diseño", en: "Design" },
    title: { es: "Fundamentos del Diseño Arquitectónico", en: "Fundamentals of Architectural Design" },
    image: "IMG/books/diseno-arquitectonico.jpg",
    price: 36,
    seller: "Rodrigo Him",
    condition: { es: "Buen estado", en: "Good condition" },
    location: { es: "USMA - David", en: "USMA - David" },
    description: {
      es: "Libro guía para los primeros talleres de diseño, con láminas a color.",
      en: "Guide book for the first design studios, with color plates."
    }
  },
  {
    id: "arch-2",
    category: "architecture",
    tag: { es: "Historia", en: "History" },
    title: { es: "Historia de la Arquitectura", en: "History of Architecture" },
    image: "IMG/books/historia-arquitectura.jpg",
    price: 28,
    seller: "Sofía Guardia",
    condition: { es: "Como nuevo", en: "Like new" },
    location: { es: "USMA - David", en: "USMA - David" },
    description: {
      es: "Recorrido por los principales estilos arquitectónicos desde la antigüedad.",
      en: "A journey through the main architectural styles since antiquity."
    }
  },
  {
    id: "arch-3",
    category: "architecture",
    tag: { es: "Estructuras", en: "Structures" },
    title: { es: "Análisis Estructural Básico", en: "Basic Structural Analysis" },
    image: "IMG/books/analisis-estructural.jpg",
    price: 33,
    seller: "Emilio Barrios",
    condition: { es: "Usado - buen estado", en: "Used - good condition" },
    location: { es: "UTP - David", en: "UTP - David" },
    description: {
      es: "Texto introductorio a cargas, esfuerzos y estabilidad estructural.",
      en: "Introductory text on loads, stresses and structural stability."
    }
  },

  // ---- FÍSICA ----
  {
    id: "phy-1",
    category: "physics",
    tag: { es: "Mecánica", en: "Mechanics" },
    title: { es: "Física I — Mecánica Clásica", en: "Physics I — Classical Mechanics" },
    image: "IMG/books/fisica-mecanica-clasica.jpg",
    price: 24,
    seller: "Rubén Concepción",
    condition: { es: "Buen estado", en: "Good condition" },
    location: { es: "UTP - David", en: "UTP - David" },
    description: {
      es: "Libro base del curso de física I, con problemas resueltos paso a paso.",
      en: "Core textbook for Physics I, with step-by-step solved problems."
    }
  },
  {
    id: "phy-2",
    category: "physics",
    tag: { es: "Electromagnetismo", en: "Electromagnetism" },
    title: { es: "Electricidad y Magnetismo", en: "Electricity and Magnetism" },
    image: "IMG/books/electricidad-magnetismo.jpg",
    price: 27,
    seller: "Génesis Rodríguez",
    condition: { es: "Buen estado", en: "Good condition" },
    location: { es: "UNACHI - David", en: "UNACHI - David" },
    description: {
      es: "Texto de física II, cubre campos eléctricos, magnéticos y circuitos básicos.",
      en: "Physics II textbook, covers electric fields, magnetic fields and basic circuits."
    }
  },
  {
    id: "phy-3",
    category: "physics",
    tag: { es: "Termodinámica", en: "Thermodynamics" },
    title: { es: "Introducción a la Termodinámica", en: "Introduction to Thermodynamics" },
    image: "IMG/books/introduccion-termodinamica.jpg",
    price: 22,
    seller: "Alejandro Quintero",
    condition: { es: "Como nuevo", en: "Like new" },
    location: { es: "UTP - David", en: "UTP - David" },
    description: {
      es: "Cubre las leyes de la termodinámica con ejemplos aplicados a la ingeniería.",
      en: "Covers the laws of thermodynamics with examples applied to engineering."
    }
  }
];

/* -----------------------------------------------
   ESTADO
----------------------------------------------- */
let currentLang = localStorage.getItem('noesis_lang') || 'es';
let activeCategory = 'all';
let searchQuery = '';

function formatPrice(amount) {
  return `B/. ${Number(amount).toFixed(2)}`;
}

/* -----------------------------------------------
   RENDER DEL CATÁLOGO
----------------------------------------------- */
const booksResults = document.getElementById('booksResults');
const booksNoResults = document.getElementById('booksNoResults');

function getFilteredBooks() {
  return getAllBooks().filter(book => {
    const matchesCategory = activeCategory === 'all' || book.category === activeCategory;
    const title = book.title[currentLang].toLowerCase();
    const tag = book.tag[currentLang].toLowerCase();
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || title.includes(q) || tag.includes(q);
    return matchesCategory && matchesSearch;
  });
}

/* Agrupa los libros en filas.
   - Con "Todas" seleccionado: una fila por carrera/tema (Medicina,
     Sistemas, Enfermería...) para que cada fila tenga suficientes
     libros y se desplace de verdad de izquierda a derecha.
   - Con una categoría ya seleccionada: una fila por sub-tema
     (Anatomía, Cálculo, Fisiología...). */
function groupBooks(list) {
  const useCategory = activeCategory === 'all';
  const order = [];
  const map = {};

  list.forEach(book => {
    const key = useCategory ? book.category : book.tag.es; // clave estable
    if (!map[key]) {
      map[key] = { books: [] };
      order.push(map[key]);
    }
    map[key].books.push(book);
  });

  return order.map(group => {
    const cat = categoryTags[group.books[0].category];
    return {
      books: group.books,
      icon: cat ? cat.icon : 'fa-solid fa-book',
      label: useCategory
        ? (cat ? cat[currentLang] : group.books[0].category)
        : group.books[0].tag[currentLang]
    };
  });
}

function renderBooks() {
  const filtered = getFilteredBooks();
  booksResults.innerHTML = '';

  if (filtered.length === 0) {
    booksNoResults.classList.add('show');
    return;
  }
  booksNoResults.classList.remove('show');

  const groups = groupBooks(filtered);

  groups.forEach(group => {
    const groupBooks = group.books;

    const groupEl = document.createElement('div');
    groupEl.className = 'books-group';

    // Encabezado de la fila: ícono + nombre del tema + cantidad
    const total = groupBooks.length;
    const word = currentLang === 'es'
      ? (total === 1 ? 'libro' : 'libros')
      : (total === 1 ? 'book' : 'books');

    const headEl = document.createElement('div');
    headEl.className = 'books-group-head';
    headEl.innerHTML = `
      <span class="books-group-tag"><i class="${group.icon}"></i> ${group.label}</span>
      <span class="books-group-count">${total} ${word}</span>
    `;
    groupEl.appendChild(headEl);

    // Contenedor de la fila (permite colocar las flechas a los lados)
    const rowWrap = document.createElement('div');
    rowWrap.className = 'books-row-wrap';

    const gridEl = document.createElement('div');
    gridEl.className = 'books-grid';

    groupBooks.forEach(book => {
      const card = document.createElement('div');
      card.className = 'book-card';
      card.dataset.id = book.id;
      const currentUser = getCurrentUser();
      const isMine = currentUser && book.ownerEmail === currentUser.email;
      card.innerHTML = `
        ${isMine ? `<span class="card-mine-badge">${translations[currentLang].card_mine_badge}</span>` : ''}
        <div class="book-cover">
          <img src="${book.image}" alt="${book.title[currentLang]}" loading="lazy"
               onerror="this.parentElement.classList.add('img-missing')">
          <div class="img-placeholder">
            <i class="fa-solid fa-image"></i>
            <span>${book.image}</span>
          </div>
          <div class="book-cover-overlay" data-i18n-inline="view_details">
            ${currentLang === 'es' ? 'Ver detalles' : 'View details'}
          </div>
        </div>
        <div class="book-card-info">
          <span class="book-card-title">${book.title[currentLang]}</span>
          <span class="book-card-price">${formatPrice(book.price)}</span>
        </div>
      `;
      card.addEventListener('click', () => openModal(book));
      gridEl.appendChild(card);
    });

    // Flechas izquierda / derecha
    const leftBtn  = document.createElement('button');
    leftBtn.className = 'row-arrow left hidden';
    leftBtn.type = 'button';
    leftBtn.setAttribute('aria-label', 'Anterior');
    leftBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';

    const rightBtn = document.createElement('button');
    rightBtn.className = 'row-arrow right';
    rightBtn.type = 'button';
    rightBtn.setAttribute('aria-label', 'Siguiente');
    rightBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';

    // Desplaza aproximadamente el ancho visible de la fila
    const scrollRow = dir => {
      gridEl.scrollBy({ left: dir * (gridEl.clientWidth * 0.8), behavior: 'smooth' });
    };
    leftBtn.addEventListener('click', () => scrollRow(-1));
    rightBtn.addEventListener('click', () => scrollRow(1));

    // Oculta la flecha cuando ya no queda nada hacia ese lado y apaga
    // ambas si la fila cabe completa (no hay nada que desplazar).
    const updateArrows = () => {
      const max = gridEl.scrollWidth - gridEl.clientWidth;
      const scrollable = max > 4;

      rowWrap.classList.toggle('no-scroll', !scrollable);

      const atStart = gridEl.scrollLeft <= 4;
      const atEnd = gridEl.scrollLeft >= max - 4;

      leftBtn.classList.toggle('hidden', !scrollable || atStart);
      rightBtn.classList.toggle('hidden', !scrollable || atEnd);

      // Degradados que insinúan que hay más contenido al costado
      rowWrap.classList.toggle('fade-left', scrollable && !atStart);
      rowWrap.classList.toggle('fade-right', scrollable && !atEnd);
    };
    gridEl.addEventListener('scroll', updateArrows);
    window.addEventListener('resize', updateArrows);

    // Recalcula cuando cambian las medidas de la fila (portadas que
    // terminan de cargar, sidebar que se colapsa en móvil, etc.)
    if (window.ResizeObserver) {
      new ResizeObserver(updateArrows).observe(gridEl);
    }

    rowWrap.appendChild(leftBtn);
    rowWrap.appendChild(gridEl);
    rowWrap.appendChild(rightBtn);

    groupEl.appendChild(rowWrap);
    booksResults.appendChild(groupEl);

    // Se calcula después de que el navegador midió la fila
    requestAnimationFrame(updateArrows);
  });
}

/* -----------------------------------------------
   FILTROS — SIDEBAR Y BUSCADOR
----------------------------------------------- */
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.category;
    renderBooks();
  });
});

const bookSearchInput = document.getElementById('bookSearchInput');
bookSearchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value.trim();
  renderBooks();
});

/* -----------------------------------------------
   MODAL DE PRODUCTO
----------------------------------------------- */
const bookModalOverlay = document.getElementById('bookModalOverlay');
const bookModalClose = document.getElementById('bookModalClose');
const bookModalImg = document.getElementById('bookModalImg');
const bookModalImage = document.getElementById('bookModalImage');
const bookModalTag = document.getElementById('bookModalTag');
const bookModalTitle = document.getElementById('bookModalTitle');
const bookModalPrice = document.getElementById('bookModalPrice');
const bookModalDesc = document.getElementById('bookModalDesc');
const bookModalSeller = document.getElementById('bookModalSeller');
const bookModalCondition = document.getElementById('bookModalCondition');
const bookModalLocation = document.getElementById('bookModalLocation');
const bookModalAddCart = document.getElementById('bookModalAddCart');
const bookModalContact = document.getElementById('bookModalContact');
const deleteListingBtn = document.getElementById('deleteListingBtn');

let currentModalBook = null;

function openModal(book) {
  currentModalBook = book;

  bookModalImg.style.display = '';
  bookModalImg.src = book.image;
  bookModalImg.alt = book.title[currentLang];
  // Si la portada aún no existe, ocultamos la imagen y dejamos la
  // caja blanca (mismo tratamiento sobrio que el modal del marketplace).
  bookModalImg.onerror = () => { bookModalImg.style.display = 'none'; };

  bookModalTag.textContent = book.tag[currentLang];
  bookModalTitle.textContent = book.title[currentLang];
  bookModalPrice.textContent = formatPrice(book.price);
  bookModalDesc.textContent = book.description[currentLang];
  bookModalSeller.textContent = book.seller;
  bookModalCondition.textContent = book.condition[currentLang];
  bookModalLocation.textContent = book.location[currentLang];

  // ---- Botón de eliminar publicación (solo si el libro es tuyo) ----
  const currentUser = getCurrentUser();
  const isMine = currentUser && book.ownerEmail === currentUser.email;

  bookModalAddCart.style.display = isMine ? 'none' : '';
  bookModalContact.style.display = isMine ? 'none' : '';
  deleteListingBtn.style.display = isMine ? '' : 'none';

  if (isMine) {
    deleteListingBtn.onclick = () => {
      if (!window.confirm(translations[currentLang].delete_confirm)) return;

      const userBooks = loadUserBooks().filter(b => b.id !== book.id);
      saveUserBooks(userBooks);

      // Si el libro eliminado estaba en el carrito de alguien, lo quitamos
      // para no dejar una fila "fantasma" apuntando a un libro inexistente.
      removeFromCart(book.id);

      closeModal();
      renderBooks();
      showGlobalToast(translations[currentLang].delete_success);
    };
  }

  bookModalOverlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  bookModalOverlay.classList.remove('show');
  document.body.style.overflow = '';
  currentModalBook = null;
}

bookModalClose.addEventListener('click', closeModal);
bookModalOverlay.addEventListener('click', (e) => {
  if (e.target === bookModalOverlay) closeModal();
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

const bookCartToast = document.getElementById('bookCartToast');
let modalToastTimer = null;
function showModalToast(message) {
  if (!bookCartToast) return;
  bookCartToast.textContent = message;
  bookCartToast.classList.remove('show');
  void bookCartToast.offsetWidth;
  bookCartToast.classList.add('show');
  clearTimeout(modalToastTimer);
  modalToastTimer = setTimeout(() => bookCartToast.classList.remove('show'), 2200);
}

bookModalAddCart.addEventListener('click', () => {
  if (!currentModalBook) return;
  addToCart(currentModalBook);
  bookModalAddCart.classList.remove('pulse');
  void bookModalAddCart.offsetWidth;
  bookModalAddCart.classList.add('pulse');
  showModalToast(translations[currentLang].cart_added_toast);
});

bookModalContact.addEventListener('click', () => {
  if (!currentModalBook) return;
  const msg = currentLang === 'es'
    ? `Hola, me interesa el libro "${currentModalBook.title.es}" que publicaste en Noesis.`
    : `Hi, I'm interested in the book "${currentModalBook.title.en}" you posted on Noesis.`;
  window.open(`https://wa.me/50760000000?text=${encodeURIComponent(msg)}`, '_blank');
});

/* -----------------------------------------------
   CARRITO (compartido con marketplace e index)
   Antes Books usaba su propia clave ("noesis_books_cart"),
   por eso el carrito de Books y el del marketplace vivían
   separados. Ahora ambos usan la MISMA clave "noesis_cart",
   así lo que se agrega en una página aparece en la otra.

   Cada ítem se guarda como:
     { key, qty, snapshot: { title:{es,en}, price, image } }
   El "snapshot" permite que esta página muestre también los
   productos del marketplace (que no están en el catálogo de
   libros) sin necesidad de conocerlos, y viceversa.
----------------------------------------------- */
const CART_KEY = 'noesis_cart';

const cartSwitcher = document.getElementById('cartSwitcher');
const cartBtn = document.getElementById('cartBtn');
const cartDropdown = document.getElementById('cartDropdown');
const cartClose = document.getElementById('cartClose');
const cartItemsBox = document.getElementById('cartItems');
const cartEmptyBox = document.getElementById('cartEmpty');
const cartFooterBox = document.getElementById('cartFooter');
const cartBadge = document.getElementById('cartBadge');
const cartTotalAmount = document.getElementById('cartTotalAmount');
const cartCheckoutBtn = document.getElementById('cartCheckoutBtn');
const cartClearBtn = document.getElementById('cartClearBtn');
const globalToast = document.getElementById('globalToast');

function loadCart() {
  try {
    const stored = JSON.parse(localStorage.getItem(CART_KEY));
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}
function saveCart(data) {
  localStorage.setItem(CART_KEY, JSON.stringify(data));
}

let cart = loadCart();
let toastTimer = null;

function showGlobalToast(message) {
  if (!globalToast) return;
  globalToast.textContent = message;
  globalToast.classList.remove('show');
  void globalToast.offsetWidth;
  globalToast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => globalToast.classList.remove('show'), 2200);
}

function findBookById(id) {
  return getAllBooks().find(b => b.id === id);
}

// Normaliza la clave leída de un data-key: numérica (productos del
// catálogo del marketplace) o texto (libros y productos de usuario).
function normalizeKey(raw) {
  return /^-?\d+$/.test(String(raw)) ? Number(raw) : raw;
}

// Datos a mostrar de un ítem: si es un libro de este catálogo usamos
// sus datos frescos; si viene de otra página usamos su snapshot.
function getCartItemInfo(item) {
  const book = findBookById(item.key);
  if (book) {
    return {
      title: book.title[currentLang] || book.title.es,
      price: Number(book.price) || 0,
      image: book.image
    };
  }
  const snap = item.snapshot;
  if (snap) {
    const title = snap.title
      ? (snap.title[currentLang] || snap.title.es || snap.title.en || '')
      : String(item.key);
    return { title, price: Number(snap.price) || 0, image: snap.image || '' };
  }
  return null; // ítem antiguo sin snapshot (p. ej. de index) -> no se dibuja aquí
}

function cartTotalQty() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}
function cartTotalPrice() {
  return cart.reduce((sum, item) => {
    const info = getCartItemInfo(item);
    return info ? sum + info.price * item.qty : sum;
  }, 0);
}

function addToCart(book) {
  const key = book.id;
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      key,
      qty: 1,
      snapshot: {
        title: { es: book.title.es, en: book.title.en },
        price: book.price,
        image: book.image
      }
    });
  }
  saveCart(cart);
  renderCart({ pulse: true });
}

function removeFromCart(key) {
  cart = cart.filter(item => item.key !== key);
  saveCart(cart);
  renderCart();
}

function changeQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(key);
    return;
  }
  saveCart(cart);
  renderCart();
}

function clearCart() {
  cart = [];
  saveCart(cart);
  renderCart();
}

function renderCart({ pulse = false } = {}) {
  const totalQty = cartTotalQty();

  if (cartBadge) {
    cartBadge.textContent = totalQty > 99 ? '99+' : String(totalQty);
    cartBadge.classList.toggle('show', totalQty > 0);
    if (pulse) {
      cartBadge.classList.remove('pulse');
      void cartBadge.offsetWidth;
      cartBadge.classList.add('pulse');
    }
  }

  if (cartItemsBox) {
    cartItemsBox.innerHTML = '';
    cart.forEach((item) => {
      const info = getCartItemInfo(item);
      if (!info) return;
      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <div class="cart-item-img"><img src="${info.image}" alt="${info.title}" onerror="this.style.opacity=0"></div>
        <div class="cart-item-info">
          <span class="cart-item-name">${info.title}</span>
          <span class="cart-item-price">${formatPrice(info.price * item.qty)}</span>
          <div class="cart-item-qty">
            <button type="button" class="qty-btn" data-action="minus" data-key="${item.key}" aria-label="-">−</button>
            <span class="qty-value">${item.qty}</span>
            <button type="button" class="qty-btn" data-action="plus" data-key="${item.key}" aria-label="+">+</button>
          </div>
        </div>
        <button type="button" class="cart-item-remove" data-action="remove" data-key="${item.key}" aria-label="Eliminar">
          <i class="fa-solid fa-trash"></i>
        </button>
      `;
      cartItemsBox.appendChild(row);
    });
  }

  const isEmpty = cart.length === 0;
  if (cartEmptyBox) cartEmptyBox.classList.toggle('show', isEmpty);
  if (cartFooterBox) cartFooterBox.classList.toggle('hide', isEmpty);
  if (cartItemsBox) cartItemsBox.style.display = isEmpty ? 'none' : '';
  if (cartTotalAmount) cartTotalAmount.textContent = formatPrice(cartTotalPrice());
}

function openCartDropdown() {
  cartDropdown.classList.add('open');
  cartBtn.setAttribute('aria-expanded', 'true');
}
function closeCartDropdown() {
  cartDropdown.classList.remove('open');
  cartBtn.setAttribute('aria-expanded', 'false');
}

cartBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = cartDropdown.classList.contains('open');
  if (isOpen) {
    closeCartDropdown();
  } else {
    if (typeof langDropdown !== 'undefined' && langDropdown) langDropdown.classList.remove('open');
    openCartDropdown();
  }
});
cartClose.addEventListener('click', closeCartDropdown);

document.addEventListener('click', (e) => {
  if (cartSwitcher && !cartSwitcher.contains(e.target)) closeCartDropdown();
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeCartDropdown();
});

cartItemsBox.addEventListener('click', (e) => {
  const actionBtn = e.target.closest('[data-action]');
  if (!actionBtn) return;
  const key = normalizeKey(actionBtn.dataset.key);
  const action = actionBtn.dataset.action;

  if (action === 'plus') changeQty(key, 1);
  if (action === 'minus') changeQty(key, -1);
  if (action === 'remove') {
    removeFromCart(key);
    showGlobalToast(translations[currentLang].cart_removed_toast);
  }
});

cartClearBtn.addEventListener('click', () => {
  clearCart();
  showGlobalToast(translations[currentLang].cart_cleared_toast);
});

cartCheckoutBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    showGlobalToast(translations[currentLang].cart_checkout_empty);
    return;
  }
  showGlobalToast(translations[currentLang].cart_checkout_success);
  clearCart();
  closeCartDropdown();
});

// Sincroniza el carrito en vivo si se abre marketplace/index en otra
// pestaña y se modifica ahí (el navegador dispara "storage").
window.addEventListener('storage', (e) => {
  if (e.key === CART_KEY) {
    cart = loadCart();
    renderCart();
  }
});

/* -----------------------------------------------
   PUBLICAR UN LIBRO
   Requiere sesión activa. El libro se guarda en localStorage
   ("noesis_user_books") y se combina con el catálogo de ejemplo
   al renderizar el grid (misma lógica que el "Vender" de
   marketplace.js, adaptada a un solo campo de categoría por libro).
----------------------------------------------- */
const sellBtn = document.getElementById('sellBtn');
const publishModal = document.getElementById('publishModal');
const closePublishModal = document.getElementById('closePublishModal');
const publishForm = document.getElementById('publishForm');
const publishError = document.getElementById('publishError');
const publishTagsContainer = document.getElementById('publishTagsContainer');
const publishImageInput = document.getElementById('publishImage');
const publishImagePreview = document.getElementById('publishImagePreview');

// Mapea el valor guardado en <select id="publishCondition"> a su
// versión bilingüe, ya que el catálogo espera { es, en }.
const CONDITION_LABELS = {
  "Como nuevo": { es: "Como nuevo", en: "Like new" },
  "Buen estado": { es: "Buen estado", en: "Good condition" },
  "Usado": { es: "Usado", en: "Used" }
};

// Genera los chips de categoría dentro del modal de publicación, a
// partir del mismo objeto `categoryTags` que agrupa los resultados.
// A diferencia del marketplace (categorías múltiples), un libro
// pertenece a UNA sola categoría, así que los chips funcionan como
// radio buttons (selección única).
function renderPublishTagChips() {
  publishTagsContainer.innerHTML = '';

  Object.keys(categoryTags).forEach(key => {
    const cat = categoryTags[key];
    const label = document.createElement('label');
    label.className = 'publish-tag-chip';
    label.innerHTML = `
      <input type="radio" name="publishCategory" value="${key}">
      <i class="${cat.icon}"></i>
      <span>${cat[currentLang]}</span>
    `;
    const radio = label.querySelector('input');
    radio.addEventListener('change', () => {
      publishTagsContainer.querySelectorAll('.publish-tag-chip').forEach(el => el.classList.remove('selected'));
      label.classList.add('selected');
    });
    publishTagsContainer.appendChild(label);
  });
}

function openPublishModal() {
  const user = getCurrentUser();

  if (!user) {
    showGlobalToast(translations[currentLang].publish_login_required);
    setTimeout(() => { window.location.href = 'login.html'; }, 900);
    return;
  }

  publishForm.reset();
  publishError.classList.remove('visible');
  publishImagePreview.classList.remove('show');
  publishImagePreview.src = '';
  renderPublishTagChips();
  publishModal.classList.add('show');
}

sellBtn.addEventListener('click', openPublishModal);

closePublishModal.addEventListener('click', () => {
  publishModal.classList.remove('show');
});

window.addEventListener('click', (e) => {
  if (e.target === publishModal) {
    publishModal.classList.remove('show');
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    publishModal.classList.remove('show');
  }
});

// Vista previa de la portada seleccionada
publishImageInput.addEventListener('change', () => {
  const file = publishImageInput.files[0];
  if (!file) {
    publishImagePreview.classList.remove('show');
    return;
  }
  const reader = new FileReader();
  reader.onload = (ev) => {
    publishImagePreview.src = ev.target.result;
    publishImagePreview.classList.add('show');
  };
  reader.readAsDataURL(file);
});

function showPublishError(message) {
  publishError.textContent = message;
  publishError.classList.add('visible');
  publishForm.classList.remove('publish-shake');
  void publishForm.offsetWidth;
  publishForm.classList.add('publish-shake');
}

publishForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = getCurrentUser();
  if (!user) {
    showGlobalToast(translations[currentLang].publish_login_required);
    setTimeout(() => { window.location.href = 'login.html'; }, 900);
    return;
  }

  const title = publishForm.publishName.value.trim();
  const price = parseFloat(publishForm.publishPrice.value);
  const conditionValue = publishForm.publishCondition.value;
  const description = publishForm.publishDescription.value.trim();
  const file = publishImageInput.files[0];
  const selectedCategory = (publishForm.querySelector('input[name="publishCategory"]:checked') || {}).value;

  if (!title || isNaN(price) || price < 0 || !description || !file || !selectedCategory) {
    showPublishError(translations[currentLang].publish_err_required);
    return;
  }

  // Convierte la portada a base64 (Data URL) para poder guardarla en
  // localStorage, ya que no hay un servidor/backend real donde subirla.
  const reader = new FileReader();
  reader.onload = (ev) => {
    const imageDataUrl = ev.target.result;
    const catLabel = categoryTags[selectedCategory];

    const newBook = {
      id: 'u_' + Date.now().toString(36),
      category: selectedCategory,
      tag: { es: catLabel.es, en: catLabel.en },
      title: { es: title, en: title },
      image: imageDataUrl,
      price,
      seller: user.name,
      condition: CONDITION_LABELS[conditionValue] || { es: conditionValue, en: conditionValue },
      location: { es: user.location || 'David, Chiriquí', en: user.location || 'David, Chiriquí' },
      ownerEmail: user.email,
      description: { es: description, en: description },
      createdAt: new Date().toISOString()
    };

    const userBooks = loadUserBooks();
    userBooks.push(newBook);
    saveUserBooks(userBooks);

    publishModal.classList.remove('show');
    renderBooks();
    showGlobalToast(translations[currentLang].publish_success);
  };
  reader.readAsDataURL(file);
});

/* -----------------------------------------------
   IDIOMA (ES / EN) — comparte localStorage con el resto del sitio
----------------------------------------------- */
function setLanguage(lang) {
  currentLang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  const langCurrent = document.getElementById('langCurrent');
  if (langCurrent) langCurrent.textContent = lang.toUpperCase();

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('noesis_lang', lang);

  renderBooks();
  renderCart();
}

const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const langSwitcher = document.getElementById('langSwitcher');

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
  if (!langSwitcher.contains(e.target)) langDropdown.classList.remove('open');
});

/* -----------------------------------------------
   SESIÓN SIMULADA — mismo comportamiento que en index.js
----------------------------------------------- */
(function syncUserNavIcon() {
  const userNavBtn = document.getElementById('userNavBtn');
  if (!userNavBtn) return;
  try {
    const session = JSON.parse(localStorage.getItem('noesis_session'));
    const users = JSON.parse(localStorage.getItem('noesis_users')) || [];
    const loggedIn = session && users.some(u => u.email === session.email);
    userNavBtn.href = loggedIn ? 'perfil.html' : 'login.html';
    userNavBtn.title = loggedIn ? 'Mi perfil' : 'Iniciar sesión / Registrarse';
  } catch {
    userNavBtn.href = 'login.html';
  }
})();

/* -----------------------------------------------
   INICIALIZACIÓN
----------------------------------------------- */
setLanguage(currentLang);
renderBooks();
renderCart();