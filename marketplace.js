// ============================================================
//  NOESIS – Market Place 2  |  script.js
//  Renderiza las tarjetas de productos, maneja la búsqueda,
//  el modal de detalles (con galería, categorías y precio),
//  el idioma y el cursor personalizado.
// ============================================================

// -----------------------------------------------
// CATEGORÍAS ("¿Quiénes lo usan?")
// Cada categoría tiene un ícono (Font Awesome, ya cargado
// en index.html) y su nombre en cada idioma.
// -----------------------------------------------
const categories = {
  ingenieria:   { icon: "fa-solid fa-hard-hat",            es: "Ingeniería",        en: "Engineering" },
  fisica:       { icon: "fa-solid fa-atom",                es: "Física",            en: "Physics" },
  matematicas:  { icon: "fa-solid fa-square-root-variable", es: "Matemáticas",      en: "Mathematics" },
  economia:     { icon: "fa-solid fa-chart-column",        es: "Economía",          en: "Economics" },
  medicina:     { icon: "fa-solid fa-stethoscope",         es: "Medicina",          en: "Medicine" },
  quimica:      { icon: "fa-solid fa-flask",               es: "Química",           en: "Chemistry" },
  diseno:       { icon: "fa-solid fa-pen-ruler",           es: "Diseño",            en: "Design" },
  arquitectura: { icon: "fa-solid fa-drafting-compass",    es: "Arquitectura",      en: "Architecture" },
  geografia:    { icon: "fa-solid fa-earth-americas",      es: "Geografía",         en: "Geography" },
  general:      { icon: "fa-solid fa-graduation-cap",      es: "Todas las carreras", en: "All majors" }
};

// -----------------------------------------------
// PRODUCTOS
// Información genérica de ejemplo (condición, categorías,
// galería). Ajusta estos valores con los datos reales de tu
// catálogo cuando los tengas.
//
// 📷 AGREGAR IMÁGENES AQUÍ:
// - `image`   → foto principal de la tarjeta y del modal.
// - `gallery` → hasta 4 fotos para las miniaturas del modal.
//               Si un archivo todavía no existe, el sitio
//               muestra automáticamente la imagen principal
//               como respaldo (no se rompe el diseño).
//   Ejemplo para agregar fotos reales de la Calculadora:
//   gallery: ["IMG/Calculadora-1.png", "IMG/Calculadora-2.png",
//             "IMG/Calculadora-3.png", "IMG/Calculadora-4.png"]
// -----------------------------------------------
const products = [
  {
    name: "Calculadora",
    icon: "fa-solid fa-calculator",
    image: "IMG/Calculadora.png",
    // 📷 AGREGAR IMÁGENES AQUÍ (galería de la Calculadora)
    gallery: ["IMG/Calculadora-1.png", "IMG/Calculadora-2.png", "IMG/Calculadora-3.png", "IMG/Calculadora-4.png"],
    price: 20,
    condition: "used",
    tags: ["ingenieria", "fisica", "matematicas", "economia"],
    seller: { name: "Andrés Ríos", university: "UTP", location: "David, Chiriquí" },
    description: {
      es: "Calculadora científica ideal para matemáticas, física y química. Herramienta en buen estado, incluye tapa protectora.",
      en: "Scientific calculator ideal for mathematics, physics and chemistry. In good condition, includes protective cover."
    }
  },
  {
    name: "Ipad",
    icon: "fa-solid fa-tablet-screen-button",
    image: "IMG/Ipad.png",
    // 📷 AGREGAR IMÁGENES AQUÍ (galería del Ipad)
    gallery: ["IMG/Ipad-1.png", "IMG/Ipad-2.png", "IMG/Ipad-3.png", "IMG/Ipad-4.png"],
    price: 450,
    condition: "used",
    tags: ["diseno", "arquitectura", "general"],
    seller: { name: "Valeria Gómez", university: "USMA", location: "David, Chiriquí" },
    description: {
      es: "Tablet de Apple utilizada para estudiar y tomar apuntes. Ideal para tomar notas a mano y trabajar con apps de diseño.",
      en: "Apple tablet used for studying and taking notes. Great for handwritten notes and design apps."
    }
  },
  {
    name: "Casco",
    icon: "fa-solid fa-hard-hat",
    image: "IMG/Casco.png",
    // 📷 AGREGAR IMÁGENES AQUÍ (galería del Casco)
    gallery: ["IMG/Casco-1.png", "IMG/Casco-2.png", "IMG/Casco-3.png", "IMG/Casco-4.png"],
    price: 18,
    condition: "new",
    tags: ["ingenieria", "arquitectura"],
    seller: { name: "Kevin Santos", university: "UTP", location: "David, Chiriquí" },
    description: {
      es: "Casco de seguridad utilizado en laboratorios y construcciones. Cumple con normas básicas de protección.",
      en: "Safety helmet used in laboratories and construction sites. Meets basic protection standards."
    }
  },
  {
    name: "Bata",
    icon: "fa-solid fa-user-doctor",
    image: "IMG/Bata.png",
    // 📷 AGREGAR IMÁGENES AQUÍ (galería de la Bata)
    gallery: ["IMG/Bata-1.png", "IMG/Bata-2.png", "IMG/Bata-3.png", "IMG/Bata-4.png"],
    price: 25,
    condition: "new",
    tags: ["medicina", "quimica"],
    seller: { name: "María José Pinto", university: "USMA", location: "David, Chiriquí" },
    description: {
      es: "Bata de laboratorio utilizada en prácticas de ciencias. Tela resistente y fácil de lavar.",
      en: "Laboratory coat used in science practices. Durable, easy-to-wash fabric."
    }
  },
  {
    name: "Tubos de ensayo",
    icon: "fa-solid fa-vial",
    image: "IMG/Tubodeensayo.png",
    // 📷 AGREGAR IMÁGENES AQUÍ (galería de los Tubos de ensayo)
    gallery: ["IMG/Tubodeensayo-1.png", "IMG/Tubodeensayo-2.png", "IMG/Tubodeensayo-3.png", "IMG/Tubodeensayo-4.png"],
    price: 12,
    condition: "new",
    tags: ["quimica", "fisica", "medicina"],
    seller: { name: "Carlos Espinoza", university: "UNACHI", location: "David, Chiriquí" },
    description: {
      es: "Conjunto de tubos de ensayo para experimentos de laboratorio. Vidrio resistente al calor.",
      en: "Set of test tubes used for laboratory experiments. Heat-resistant glass."
    }
  },
  {
    name: "Estetoscopio",
    icon: "fa-solid fa-stethoscope",
    image: "IMG/Estetoscopio.png",
    // 📷 AGREGAR IMÁGENES AQUÍ (galería del Estetoscopio)
    gallery: ["IMG/Estetoscopio-1.png", "IMG/Estetoscopio-2.png", "IMG/Estetoscopio-3.png", "IMG/Estetoscopio-4.png"],
    price: 30,
    condition: "used",
    tags: ["medicina"],
    seller: { name: "Ana Lucía Herrera", university: "USMA", location: "David, Chiriquí" },
    description: {
      es: "Instrumento médico para escuchar los sonidos del cuerpo. Ideal para prácticas de enfermería y medicina.",
      en: "Medical instrument used to listen to body sounds. Great for nursing and medicine practice."
    }
  },
  {
    name: "Laptop",
    icon: "fa-solid fa-laptop",
    image: "IMG/Laptop.png",
    // 📷 AGREGAR IMÁGENES AQUÍ (galería de la Laptop)
    gallery: ["IMG/Laptop-1.png", "IMG/Laptop-2.png", "IMG/Laptop-3.png", "IMG/Laptop-4.png"],
    price: 700,
    condition: "used",
    tags: ["general"],
    seller: { name: "Diego Fernández", university: "ISAE", location: "David, Chiriquí" },
    description: {
      es: "Computadora portátil ideal para estudiar y trabajar. Buen rendimiento para tareas y clases virtuales.",
      en: "Portable computer ideal for studying and working. Good performance for homework and online classes."
    }
  },
  {
    name: "Globo terráqueo",
    icon: "fa-solid fa-earth-americas",
    image: "IMG/GloboT.png",
    // 📷 AGREGAR IMÁGENES AQUÍ (galería del Globo terráqueo)
    gallery: ["IMG/GloboT-1.png", "IMG/GloboT-2.png", "IMG/GloboT-3.png", "IMG/GloboT-4.png"],
    price: 35,
    condition: "new",
    tags: ["geografia", "general"],
    seller: { name: "Sofía Batista", university: "UNACHI", location: "David, Chiriquí" },
    description: {
      es: "Representación de la Tierra utilizada en geografía. Buen tamaño para escritorio o estantería.",
      en: "Representation of the Earth used in geography. Good size for a desk or shelf."
    }
  }
];

// -----------------------------------------------
// PRODUCTOS PUBLICADOS POR USUARIOS (localStorage)
// Se guardan aparte del catálogo de ejemplo y se combinan
// con él al momento de renderizar el grid.
// -----------------------------------------------
const USER_PRODUCTS_KEY = "noesis_user_products";
const USERS_KEY = "noesis_users";
const SESSION_KEY = "noesis_session";

function loadUserProducts() {
  try {
    return JSON.parse(localStorage.getItem(USER_PRODUCTS_KEY)) || [];
  } catch {
    return [];
  }
}

function saveUserProducts(list) {
  localStorage.setItem(USER_PRODUCTS_KEY, JSON.stringify(list));
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

// Combina el catálogo de ejemplo con las publicaciones de usuarios.
// Se recalcula cada vez que se llama, así que una publicación nueva
// aparece de inmediato sin recargar la página.
function getAllProducts() {
  return [...products, ...loadUserProducts()];
}

// -----------------------------------------------
// TRADUCCIONES
// -----------------------------------------------
const productNamesTranslations = {
  es: {
    "Calculadora": "Calculadora",
    "Ipad": "Ipad",
    "Casco": "Casco",
    "Bata": "Bata",
    "Tubos de ensayo": "Tubos de ensayo",
    "Estetoscopio": "Estetoscopio",
    "Laptop": "Laptop",
    "Globo terráqueo": "Globo terráqueo"
  },
  en: {
    "Calculadora": "Calculator",
    "Ipad": "iPad",
    "Casco": "Helmet",
    "Bata": "Lab Coat",
    "Tubos de ensayo": "Test Tubes",
    "Estetoscopio": "Stethoscope",
    "Laptop": "Laptop",
    "Globo terráqueo": "Globe"
  }
};

const translations = {
  es: {
    nav_menu: "MENÚ",
    nav_market: "MARKETPLACE",
    nav_Material: "MATERIAL DE ESTUDIO",
    nav_community: "COMUNIDAD",
    nav_books: "LIBROS",
    footer_material: "Material de Estudio",
    footer_books: "Libros",
    search_placeholder: "Buscar productos...",
    notif_msg: "¡Recuerda usar esta sección correctamente!",
    details_btn: "Detalles",
    modal_default_title: "Nombre del producto",
    modal_default_desc: "Descripción del producto.",
    modal_close_btn: "Cerrar",
    modal_details_prefix: "Detalles de:",
    modal_price: "Precio",
    modal_desc_title: "Descripción",
    modal_tags_title: "¿Quiénes lo usan?",
    modal_add_cart: "Añadir al carrito",
    modal_buy_now: "Comprar ahora",
    condition_new: "Nuevo",
    condition_used: "Segunda mano",
    cart_toast: "Añadido al carrito ✓",
    no_results_msg: "No encontramos productos con ese nombre.",
    seller_label: "Vendido por",
    modal_seller_title: "Vendedor",
    modal_contact: "Contactar vendedor",
    seller_login_hint: "Inicia sesión para contactar al vendedor",
    sell_btn: "Vender",
    publish_title: "Publicar un producto",
    publish_name_label: "Nombre del producto",
    publish_price_label: "Precio (B/.)",
    publish_condition_label: "Condición",
    publish_tags_label: "¿Quiénes lo usan? (elige una o más)",
    publish_desc_label: "Descripción",
    publish_image_label: "Foto del producto",
    publish_submit_btn: "Publicar producto",
    publish_hint: "Simulado con localStorage — tu publicación solo se guarda en este navegador.",
    publish_err_required: "Por favor completa todos los campos y elige al menos una categoría.",
    publish_login_required: "Inicia sesión para publicar un producto.",
    publish_success: "¡Producto publicado con éxito! 🎉",
    delete_listing_btn: "Eliminar publicación",
    delete_confirm: "¿Seguro que quieres eliminar esta publicación?",
    delete_success: "Publicación eliminada.",
    card_mine_badge: "Tuyo",
    notif_panel_title: "Novedades",
    notif_new_msg: "Hay {count} publicaciones nuevas desde tu última visita",
    notif_none_msg: "No hay publicaciones nuevas desde tu última visita.",
    filter_all: "Todos",
    filter_price_label: "Precio",
    filter_all_universities: "Todas las universidades",
    filter_clear: "Limpiar filtros",
    cart_title: "Tu carrito",
    cart_empty_msg: "Tu carrito está vacío",
    cart_total: "Total",
    cart_checkout: "Finalizar compra",
    cart_clear: "Vaciar carrito",
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
    nav_Material: "STUDY MATERIAL",
    nav_community: "COMMUNITY",
    nav_books: "BOOKS",
    footer_material: "Study Material",
    footer_books: "Books",
    search_placeholder: "Search products...",
    notif_msg: "Remember to use this section correctly!",
    details_btn: "Details",
    modal_default_title: "Product name",
    modal_default_desc: "Product description.",
    modal_close_btn: "Close",
    modal_details_prefix: "Details of:",
    modal_price: "Price",
    modal_desc_title: "Description",
    modal_tags_title: "Who uses this?",
    modal_add_cart: "Add to cart",
    modal_buy_now: "Buy now",
    condition_new: "New",
    condition_used: "Second-hand",
    cart_toast: "Added to cart ✓",
    no_results_msg: "We couldn't find any products with that name.",
    seller_label: "Sold by",
    modal_seller_title: "Seller",
    modal_contact: "Contact seller",
    seller_login_hint: "Log in to contact the seller",
    sell_btn: "Sell",
    publish_title: "Publish a product",
    publish_name_label: "Product name",
    publish_price_label: "Price (B/.)",
    publish_condition_label: "Condition",
    publish_tags_label: "Who uses this? (choose one or more)",
    publish_desc_label: "Description",
    publish_image_label: "Product photo",
    publish_submit_btn: "Publish product",
    publish_hint: "Simulated with localStorage — your listing is only saved on this browser.",
    publish_err_required: "Please fill in all fields and choose at least one category.",
    publish_login_required: "Log in to publish a product.",
    publish_success: "Product published successfully! 🎉",
    delete_listing_btn: "Delete listing",
    delete_confirm: "Are you sure you want to delete this listing?",
    delete_success: "Listing deleted.",
    card_mine_badge: "Yours",
    notif_panel_title: "What's new",
    notif_new_msg: "There are {count} new listings since your last visit",
    notif_none_msg: "No new listings since your last visit.",
    filter_all: "All",
    filter_price_label: "Price",
    filter_all_universities: "All universities",
    filter_clear: "Clear filters",
    cart_title: "Your cart",
    cart_empty_msg: "Your cart is empty",
    cart_total: "Total",
    cart_checkout: "Checkout",
    cart_clear: "Clear cart",
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

// -----------------------------------------------
// RENDER + BÚSQUEDA
// -----------------------------------------------
const grid = document.getElementById('product-grid');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('searchInput');

// Quita acentos y pasa a minúsculas para que la búsqueda sea flexible
// (p. ej. "estetoscopio", "Estetoscopio" e "ESTETOSCOPIO" son equivalentes).
function normalize(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function formatPrice(amount) {
  return `B/. ${Number(amount).toFixed(2)}`;
}

// Cada tarjeta guarda el índice real del producto en `products` dentro de
// data-index, así el modal siempre abre lo correcto sin importar cuántas
// veces se haya filtrado o reordenado la lista visible.
function renderProducts(entries, { animate = true } = {}) {
  const lang = localStorage.getItem('noesis_lang') || 'es';
  const currentUser = getCurrentUser();

  grid.innerHTML = '';

  entries.forEach(({ product, index }, position) => {
    const card = document.createElement('div');
    card.className = 'card' + (animate ? ' card-enter' : '');
    card.dataset.index = index;
    if (animate) {
      card.style.animationDelay = `${position * 55}ms`;
    }

    const displayName = productNamesTranslations[lang][product.name] || product.name;
    const detailsLabel = translations[lang].details_btn;
    const seller = product.seller;
    const isMine = currentUser && product.ownerEmail === currentUser.email;

    card.innerHTML = `
${isMine ? `<span class="card-mine-badge">${translations[lang].card_mine_badge}</span>` : ''}
<div class="card-icon-wrap">
    <img src="${product.image}" alt="${displayName}">
</div>
    <span class="card-name">${displayName}</span>
    ${seller ? `
    <div class="card-seller">
      <i class="fa-solid fa-user"></i>
      <span>${seller.name} · ${seller.university}</span>
    </div>` : ''}
    <button class="card-btn" type="button">${detailsLabel}</button>
  `;

    grid.appendChild(card);
  });

  const hasResults = entries.length > 0;
  noResults.classList.toggle('show', !hasResults);
  grid.classList.toggle('grid-empty', !hasResults);
}

// -----------------------------------------------
// FILTROS (condición, precio, universidad)
// Estado actual de los filtros seleccionados. "all" = sin filtrar.
// -----------------------------------------------
const activeFilters = {
  condition: 'all',   // 'all' | 'new' | 'used'
  priceMin: null,
  priceMax: null,
  university: 'all'
};

const conditionFilterGroup = document.getElementById('conditionFilterGroup');
const priceMinInput = document.getElementById('priceMinInput');
const priceMaxInput = document.getElementById('priceMaxInput');
const universityFilterSelect = document.getElementById('universityFilterSelect');
const clearFiltersBtn = document.getElementById('clearFiltersBtn');

// Rellena el <select> de universidades con las universidades reales
// que aparecen en el catálogo (de ejemplo + publicadas por usuarios).
function populateUniversityFilter() {
  if (!universityFilterSelect) return;

  const selected = universityFilterSelect.value || 'all';
  const universities = Array.from(
    new Set(
      getAllProducts()
        .map(p => p.seller && p.seller.university)
        .filter(Boolean)
    )
  ).sort((a, b) => a.localeCompare(b));

  const lang = localStorage.getItem('noesis_lang') || 'es';
  universityFilterSelect.innerHTML = `<option value="all" data-i18n="filter_all_universities">${translations[lang].filter_all_universities}</option>` +
    universities.map(u => `<option value="${u}">${u}</option>`).join('');

  // Conserva la selección previa si sigue existiendo en la lista
  if ([...universityFilterSelect.options].some(o => o.value === selected)) {
    universityFilterSelect.value = selected;
  }
}

function getFilteredEntries(query) {
  const lang = localStorage.getItem('noesis_lang') || 'es';
  const q = normalize(query.trim());

  const all = getAllProducts().map((product, index) => ({ product, index }));

  return all.filter(({ product }) => {
    // --- búsqueda por nombre ---
    if (q) {
      const nameEs = normalize(product.name);
      const nameEn = normalize(productNamesTranslations.en[product.name] || product.name);
      const nameLocalized = normalize(productNamesTranslations[lang][product.name] || product.name);
      if (!(nameEs.includes(q) || nameEn.includes(q) || nameLocalized.includes(q))) return false;
    }

    // --- filtro por condición (nuevo / segunda mano) ---
    if (activeFilters.condition !== 'all' && product.condition !== activeFilters.condition) {
      return false;
    }

    // --- filtro por precio ---
    const price = Number(product.price) || 0;
    if (activeFilters.priceMin !== null && price < activeFilters.priceMin) return false;
    if (activeFilters.priceMax !== null && price > activeFilters.priceMax) return false;

    // --- filtro por universidad ---
    if (activeFilters.university !== 'all') {
      const university = product.seller && product.seller.university;
      if (university !== activeFilters.university) return false;
    }

    return true;
  });
}

function refreshGrid(animate = true) {
  const query = searchInput ? searchInput.value : '';
  renderProducts(getFilteredEntries(query), { animate });
}

// Chips de condición (Todos / Nuevo / Segunda mano)
if (conditionFilterGroup) {
  conditionFilterGroup.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;
    conditionFilterGroup.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    activeFilters.condition = chip.getAttribute('data-condition');
    refreshGrid();
  });
}

// Precio mínimo / máximo
if (priceMinInput) {
  priceMinInput.addEventListener('input', () => {
    const v = parseFloat(priceMinInput.value);
    activeFilters.priceMin = isNaN(v) ? null : v;
    refreshGrid();
  });
}
if (priceMaxInput) {
  priceMaxInput.addEventListener('input', () => {
    const v = parseFloat(priceMaxInput.value);
    activeFilters.priceMax = isNaN(v) ? null : v;
    refreshGrid();
  });
}

// Universidad
if (universityFilterSelect) {
  universityFilterSelect.addEventListener('change', () => {
    activeFilters.university = universityFilterSelect.value;
    refreshGrid();
  });
}

// Limpiar filtros
if (clearFiltersBtn) {
  clearFiltersBtn.addEventListener('click', () => {
    activeFilters.condition = 'all';
    activeFilters.priceMin = null;
    activeFilters.priceMax = null;
    activeFilters.university = 'all';

    if (conditionFilterGroup) {
      conditionFilterGroup.querySelectorAll('.filter-chip').forEach(c => {
        c.classList.toggle('active', c.getAttribute('data-condition') === 'all');
      });
    }
    if (priceMinInput) priceMinInput.value = '';
    if (priceMaxInput) priceMaxInput.value = '';
    if (universityFilterSelect) universityFilterSelect.value = 'all';
    if (searchInput) {
      searchInput.value = '';
      searchInput.parentElement.classList.remove('has-value');
    }

    refreshGrid();
  });
}

populateUniversityFilter();

// -----------------------------------------------
// CAMPANITA: publicaciones nuevas desde la última visita
// Compara la fecha guardada de la última visita al marketplace
// con el campo `createdAt` de los productos guardados en
// localStorage (solo los publicados por usuarios lo tienen).
// -----------------------------------------------
const LAST_VISIT_KEY = 'noesis_marketplace_last_visit';

const bellBtn = document.getElementById('bellBtn');
const bellBadge = document.getElementById('bellBadge');
const notifMsg = document.getElementById('notifMsg');
const notifPanel = document.getElementById('notifPanel');
const notifPanelBody = document.getElementById('notifPanelBody');

function countNewListingsSince(lastVisitDate) {
  return loadUserProducts().filter(p => {
    if (!p.createdAt) return false;
    const created = new Date(p.createdAt);
    return !isNaN(created) && created > lastVisitDate;
  }).length;
}

let lastKnownNewCount = 0;

function updateBellUI(newCount) {
  lastKnownNewCount = newCount;
  const lang = localStorage.getItem('noesis_lang') || 'es';

  if (bellBadge) {
    if (newCount > 0) {
      bellBadge.textContent = newCount > 99 ? '99+' : String(newCount);
      bellBadge.style.display = 'flex';
    } else {
      bellBadge.style.display = 'none';
    }
  }

  if (bellBtn) bellBtn.classList.toggle('has-news', newCount > 0);

  if (notifMsg) {
    notifMsg.textContent = newCount > 0
      ? (translations[lang].notif_new_msg || '').replace('{count}', newCount)
      : translations[lang].notif_msg;
  }

  if (notifPanelBody) {
    notifPanelBody.textContent = newCount > 0
      ? (translations[lang].notif_new_msg || '').replace('{count}', newCount)
      : translations[lang].notif_none_msg;
  }
}

// 1) Leemos la fecha de la última visita ANTES de sobreescribirla.
const storedLastVisit = localStorage.getItem(LAST_VISIT_KEY);
const lastVisitDate = storedLastVisit ? new Date(storedLastVisit) : new Date(0); // sin visitas previas = todo es "nuevo"

// 2) Calculamos y mostramos cuántas publicaciones son nuevas desde esa fecha.
updateBellUI(countNewListingsSince(lastVisitDate));

// 3) Guardamos "ahora" como la nueva última visita, para que en la
//    próxima carga solo cuenten las publicaciones creadas después de esto.
localStorage.setItem(LAST_VISIT_KEY, new Date().toISOString());

// Abrir/cerrar el panel de novedades al hacer clic en la campana o el mensaje
function toggleNotifPanel(forceState) {
  if (!notifPanel || !bellBtn) return;
  const willOpen = typeof forceState === 'boolean' ? forceState : !notifPanel.classList.contains('open');
  notifPanel.classList.toggle('open', willOpen);
  bellBtn.setAttribute('aria-expanded', String(willOpen));
}

if (bellBtn) {
  bellBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleNotifPanel();
  });
}
if (notifMsg) {
  notifMsg.addEventListener('click', () => toggleNotifPanel(true));
}
document.addEventListener('click', (e) => {
  if (notifPanel && notifPanel.classList.contains('open') && !e.target.closest('.notification-bar')) {
    toggleNotifPanel(false);
  }
});

// Render inicial
refreshGrid();

// Filtra en vivo mientras el usuario escribe
if (searchInput) {
  searchInput.addEventListener('input', () => {
    searchInput.parentElement.classList.toggle('has-value', searchInput.value.trim() !== '');
    refreshGrid();
  });
}

// -----------------------------------------------
// MODAL DE DETALLES (delegación de eventos:
// funciona sin importar cuántas veces se re-renderice el grid)
// -----------------------------------------------
const modal = document.getElementById("productModal");
const modalIcon = document.getElementById("modalIcon");
const modalTitle = document.getElementById("modalTitle");
const modalCondition = document.getElementById("modalCondition");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");
const modalImage = document.getElementById("modalMainImage");
const modalGallery = document.getElementById("modalGallery");
const modalTags = document.getElementById("modalTags");
const closeModal = document.getElementById("closeModal");
const addToCartBtn = document.getElementById("addToCartBtn");
const buyNowBtn = document.getElementById("buyNowBtn");
const contactSellerBtn = document.getElementById("contactSellerBtn");
const deleteListingBtn = document.getElementById("deleteListingBtn");
const cartToast = document.getElementById("cartToast");

let currentOpenProduct = null; // Producto que se está viendo en el modal (para el carrito)
let toastTimer = null;

function showToast(message) {
  cartToast.textContent = message;
  cartToast.classList.remove('show'); // reinicia la animación si ya estaba visible
  // Forzamos reflow para poder reiniciar la animación en clics seguidos
  void cartToast.offsetWidth;
  cartToast.classList.add('show');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => cartToast.classList.remove('show'), 2200);
}

// Cambia la imagen principal con una pequeña transición (crossfade)
function setMainImage(src, alt) {
  modalImage.classList.add('swapping');
  window.setTimeout(() => {
    modalImage.src = src;
    modalImage.alt = alt;
    modalImage.classList.remove('swapping');
  }, 120);
}

function openModal(product) {
  currentOpenProduct = product;
  const lang = localStorage.getItem('noesis_lang') || 'es';
  const displayName = productNamesTranslations[lang][product.name] || product.name;

  modalIcon.innerHTML = `<i class="${product.icon || 'fa-solid fa-box'}"></i>`;
  modalTitle.textContent = displayName;

  modalCondition.textContent = translations[lang][`condition_${product.condition}`] || '';
  modalPrice.textContent = formatPrice(product.price);

  modalDescription.textContent = product.description[lang];

  modalImage.src = product.image;
  modalImage.alt = displayName;

  // ---- Galería de miniaturas ----
  // Si una imagen de `gallery` todavía no existe (404), se reemplaza
  // automáticamente por la imagen principal del producto (onerror).
  modalGallery.innerHTML = '';
  const galleryImages = (product.gallery && product.gallery.length ? product.gallery : [product.image]);

  galleryImages.forEach((src, i) => {
    const thumb = document.createElement('button');
    thumb.type = 'button';
    thumb.className = 'gallery-item' + (i === 0 ? ' active' : '');
    thumb.style.animationDelay = `${i * 60}ms`;
    thumb.innerHTML = `<img src="${src}" alt="${displayName} ${i + 1}" onerror="this.onerror=null;this.src='${product.image}';">`;

    thumb.addEventListener('click', () => {
      modalGallery.querySelectorAll('.gallery-item').forEach(el => el.classList.remove('active'));
      thumb.classList.add('active');
      setMainImage(thumb.querySelector('img').src, `${displayName} ${i + 1}`);
    });

    modalGallery.appendChild(thumb);
  });

  // ---- Vendedor (nombre, universidad y ubicación) ----
  const modalSellerBox = document.getElementById('modalSellerBox');
  if (modalSellerBox) {
    if (product.seller) {
      modalSellerBox.innerHTML = `
        <h3 class="modal-section-title">${translations[lang].modal_seller_title}</h3>
        <div class="modal-seller">
          <div class="modal-seller-avatar"><i class="fa-solid fa-user"></i></div>
          <div class="modal-seller-info">
            <span class="modal-seller-name">${product.seller.name}</span>
            <span class="modal-seller-meta"><i class="fa-solid fa-graduation-cap"></i> ${product.seller.university}</span>
            <span class="modal-seller-meta"><i class="fa-solid fa-location-dot"></i> ${product.seller.location}</span>
          </div>
        </div>
      `;
      modalSellerBox.style.display = '';
    } else {
      modalSellerBox.innerHTML = '';
      modalSellerBox.style.display = 'none';
    }
  }

  // ---- Categorías ("¿Quiénes lo usan?") ----
  modalTags.innerHTML = '';
  (product.tags || []).forEach((tagKey, i) => {
    const tag = categories[tagKey];
    if (!tag) return;

    const chip = document.createElement('div');
    chip.className = 'modal-tag';
    chip.style.animationDelay = `${i * 70}ms`;
    chip.innerHTML = `
      <i class="${tag.icon}"></i>
      <span>${tag[lang]}</span>
    `;
    modalTags.appendChild(chip);
  });

  // ---- Botón de eliminar publicación (solo si el producto es tuyo) ----
  const currentUser = getCurrentUser();
  const isMine = currentUser && product.ownerEmail === currentUser.email;

  deleteListingBtn.style.display = isMine ? '' : 'none';
  addToCartBtn.style.display = isMine ? 'none' : '';
  buyNowBtn.style.display = isMine ? 'none' : '';
  if (contactSellerBtn) contactSellerBtn.style.display = (isMine || !product.seller) ? 'none' : '';

  if (isMine) {
    deleteListingBtn.onclick = () => {
      const lang2 = localStorage.getItem('noesis_lang') || 'es';
      if (!window.confirm(translations[lang2].delete_confirm)) return;

      const userProducts = loadUserProducts().filter(p => p.id !== product.id);
      saveUserProducts(userProducts);

      // Si el producto eliminado estaba en el carrito de alguien, lo quitamos
      // para no dejar una fila "fantasma" apuntando a un producto inexistente.
      if (typeof removeFromCart === 'function') removeFromCart(product.id);

      modal.classList.remove('show');
      if (typeof populateUniversityFilter === 'function') populateUniversityFilter();
      refreshGrid(false);
      showToast(translations[lang2].delete_success);
    };
  }

  modal.classList.add('show');
}

grid.addEventListener('click', (e) => {
  const btn = e.target.closest('.card-btn');
  if (!btn) return;

  const card = btn.closest('.card');
  const product = getAllProducts()[Number(card.dataset.index)];
  if (!product) return;

  openModal(product);
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("show");
  }
});

// ---- Botones de acción: conectados al carrito real (ver sección CARRITO más abajo) ----
if (addToCartBtn) {
  addToCartBtn.addEventListener('click', () => {
    if (!currentOpenProduct) return;
    const lang = localStorage.getItem('noesis_lang') || 'es';
    addToCart(currentOpenProduct, 1);
    addToCartBtn.classList.remove('pulse');
    void addToCartBtn.offsetWidth;
    addToCartBtn.classList.add('pulse');
    showToast(translations[lang].cart_toast);
  });
}

if (buyNowBtn) {
  buyNowBtn.addEventListener('click', () => {
    if (!currentOpenProduct) return;
    buyNowBtn.classList.remove('pulse');
    void buyNowBtn.offsetWidth;
    buyNowBtn.classList.add('pulse');

    // "Comprar ahora": agrega el producto al carrito y abre el
    // carrito de inmediato para que el usuario finalice la compra.
    addToCart(currentOpenProduct, 1);
    modal.classList.remove('show');
    if (typeof langDropdown !== 'undefined' && langDropdown) langDropdown.classList.remove('open');
    openCartDropdown();
  });
}

// "Contactar vendedor": abre WhatsApp con un mensaje prellenado sobre
// el producto que se está viendo (mismo comportamiento que en Books).
if (contactSellerBtn) {
  contactSellerBtn.addEventListener('click', () => {
    if (!currentOpenProduct) return;
    const lang = localStorage.getItem('noesis_lang') || 'es';
    const displayName = productNamesTranslations[lang][currentOpenProduct.name] || currentOpenProduct.name;
    const msg = lang === 'es'
      ? `Hola, me interesa "${displayName}" que publicaste en Noesis.`
      : `Hi, I'm interested in "${displayName}" you posted on Noesis.`;
    window.open(`https://wa.me/50760000000?text=${encodeURIComponent(msg)}`, '_blank');
  });
}

// -----------------------------------------------
// CARRITO DE COMPRAS
// Persiste en localStorage bajo 'noesis_cart', la misma clave
// que usa index.js, así que lo agregado aquí se ve también en
// la página principal (y viceversa).
//
// Cada ítem se guarda como { key, qty }:
// - Productos del catálogo fijo -> `key` es su índice numérico
//   dentro de `products` (mismo esquema que usa index.js).
// - Productos publicados por usuarios -> `key` es su id de texto
//   (ej. "u_abc123"), ya que index.js no conoce estos productos.
// -----------------------------------------------
const CART_KEY = 'noesis_cart';

const cartSwitcher    = document.getElementById('cartSwitcher');
const cartBtn         = document.getElementById('cartBtn');
const cartDropdown    = document.getElementById('cartDropdown');
const cartClose       = document.getElementById('cartClose');
const cartItemsBox    = document.getElementById('cartItems');
const cartEmptyBox    = document.getElementById('cartEmpty');
const cartFooterBox   = document.getElementById('cartFooter');
const cartBadge       = document.getElementById('cartBadge');
const cartTotalAmount = document.getElementById('cartTotalAmount');
const cartCheckoutBtn = document.getElementById('cartCheckoutBtn');
const cartClearBtn    = document.getElementById('cartClearBtn');
const globalToast     = document.getElementById('globalToast');

function loadCart() {
  try {
    const stored = JSON.parse(localStorage.getItem(CART_KEY));
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function saveCart(cartData) {
  localStorage.setItem(CART_KEY, JSON.stringify(cartData));
}

let cart = loadCart();
let globalToastTimer = null;

function showGlobalToast(message) {
  if (!globalToast) return;
  globalToast.textContent = message;
  globalToast.classList.remove('show');
  void globalToast.offsetWidth;
  globalToast.classList.add('show');
  clearTimeout(globalToastTimer);
  globalToastTimer = setTimeout(() => globalToast.classList.remove('show'), 2200);
}

// Resuelve la "clave" de carrito de un producto: su índice numérico
// si pertenece al catálogo fijo (compatible con index.js), o su id
// de texto si fue publicado por un usuario.
function getProductCartKey(product) {
  if (product.id) return product.id;
  return products.indexOf(product);
}

function resolveProductByKey(key) {
  if (typeof key === 'number' || /^-?\d+$/.test(String(key))) {
    return products[Number(key)] || null;
  }
  return loadUserProducts().find(p => p.id === key) || null;
}

function cartTotalQty() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

// Guarda una "foto" del producto dentro del ítem del carrito, para que
// OTRAS páginas (como Books, que no conoce este catálogo) puedan mostrar
// el ítem sin necesidad de resolverlo contra `products`.
function productSnapshot(product) {
  const es = productNamesTranslations.es[product.name] || product.name;
  const en = productNamesTranslations.en[product.name] || product.name;
  return { title: { es, en }, price: product.price, image: product.image };
}

// Datos a mostrar de un ítem: si pertenece a este catálogo usamos sus
// datos frescos; si viene de otra página (p. ej. un libro) usamos el
// snapshot guardado en el propio ítem.
function getCartItemInfo(item) {
  const lang = localStorage.getItem('noesis_lang') || 'es';
  const product = resolveProductByKey(item.key);
  if (product) {
    const title = productNamesTranslations[lang][product.name] || product.name;
    return { title, price: Number(product.price) || 0, image: product.image };
  }
  const snap = item.snapshot;
  if (snap) {
    const title = snap.title
      ? (snap.title[lang] || snap.title.es || snap.title.en || '')
      : String(item.key);
    return { title, price: Number(snap.price) || 0, image: snap.image || '' };
  }
  return null;
}

function cartTotalPrice() {
  return cart.reduce((sum, item) => {
    const info = getCartItemInfo(item);
    return info ? sum + info.price * item.qty : sum;
  }, 0);
}

function addToCart(product, qty = 1) {
  const key = getProductCartKey(product);
  if (key === -1 || key === undefined || key === null) return;

  const existing = cart.find(item => item.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ key, qty, snapshot: productSnapshot(product) });
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
  const lang = localStorage.getItem('noesis_lang') || 'es';
  const totalQty = cartTotalQty();

  // ---- Badge ----
  if (cartBadge) {
    cartBadge.textContent = totalQty > 99 ? '99+' : String(totalQty);
    cartBadge.classList.toggle('show', totalQty > 0);
    if (pulse) {
      cartBadge.classList.remove('pulse');
      void cartBadge.offsetWidth;
      cartBadge.classList.add('pulse');
    }
  }

  // ---- Lista de ítems ----
  if (cartItemsBox) {
    cartItemsBox.innerHTML = '';
    cart.forEach((item) => {
      const info = getCartItemInfo(item);
      if (!info) return;
      const { key, qty } = item;

      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <div class="cart-item-img"><img src="${info.image}" alt="${info.title}" onerror="this.style.opacity=0"></div>
        <div class="cart-item-info">
          <span class="cart-item-name">${info.title}</span>
          <span class="cart-item-price">${formatPrice(info.price * qty)}</span>
          <div class="cart-item-qty">
            <button type="button" class="qty-btn" data-action="minus" data-key="${key}" aria-label="-">−</button>
            <span class="qty-value">${qty}</span>
            <button type="button" class="qty-btn" data-action="plus" data-key="${key}" aria-label="+">+</button>
          </div>
        </div>
        <button type="button" class="cart-item-remove" data-action="remove" data-key="${key}" aria-label="Eliminar">
          <i class="fa-solid fa-trash"></i>
        </button>
      `;
      cartItemsBox.appendChild(row);
    });
  }

  // ---- Estado vacío vs. footer ----
  const isEmpty = cart.length === 0;
  if (cartEmptyBox) cartEmptyBox.classList.toggle('show', isEmpty);
  if (cartFooterBox) cartFooterBox.classList.toggle('hide', isEmpty);
  if (cartItemsBox) cartItemsBox.style.display = isEmpty ? 'none' : '';

  if (cartTotalAmount) cartTotalAmount.textContent = formatPrice(cartTotalPrice());
}

function openCartDropdown() {
  if (!cartDropdown) return;
  cartDropdown.classList.add('open');
  cartBtn.setAttribute('aria-expanded', 'true');
}

function closeCartDropdown() {
  if (!cartDropdown) return;
  cartDropdown.classList.remove('open');
  cartBtn.setAttribute('aria-expanded', 'false');
}

if (cartBtn) {
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
}

if (cartClose) {
  cartClose.addEventListener('click', () => closeCartDropdown());
}

document.addEventListener('click', (e) => {
  if (cartSwitcher && !cartSwitcher.contains(e.target)) {
    closeCartDropdown();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeCartDropdown();
});

// Delegación de eventos para +/-/eliminar dentro del carrito
if (cartItemsBox) {
  cartItemsBox.addEventListener('click', (e) => {
    const actionBtn = e.target.closest('[data-action]');
    if (!actionBtn) return;

    const rawKey = actionBtn.dataset.key;
    const key = /^-?\d+$/.test(rawKey) ? Number(rawKey) : rawKey;
    const action = actionBtn.dataset.action;
    const lang = localStorage.getItem('noesis_lang') || 'es';

    if (action === 'plus') changeQty(key, 1);
    if (action === 'minus') changeQty(key, -1);
    if (action === 'remove') {
      removeFromCart(key);
      showGlobalToast(translations[lang].cart_removed_toast);
    }
  });
}

if (cartClearBtn) {
  cartClearBtn.addEventListener('click', () => {
    const lang = localStorage.getItem('noesis_lang') || 'es';
    clearCart();
    showGlobalToast(translations[lang].cart_cleared_toast);
  });
}

if (cartCheckoutBtn) {
  cartCheckoutBtn.addEventListener('click', () => {
    const lang = localStorage.getItem('noesis_lang') || 'es';
    if (cart.length === 0) {
      showGlobalToast(translations[lang].cart_checkout_empty);
      return;
    }
    showGlobalToast(translations[lang].cart_checkout_success);
    clearCart();
    closeCartDropdown();
  });
}

// Render inicial del carrito (respeta lo guardado en localStorage,
// incluyendo lo que se haya agregado desde index.html o Books.html)
renderCart();

// Sincroniza el carrito en vivo si se modifica en otra pestaña
// (p. ej. Books abierto al mismo tiempo). El navegador dispara "storage".
window.addEventListener('storage', (e) => {
  if (e.key === CART_KEY) {
    cart = loadCart();
    renderCart();
  }
});

// -----------------------------------------------
// PUBLICAR UN PRODUCTO
// Requiere sesión activa. El producto se guarda en
// localStorage ("noesis_user_products") y se combina con
// el catálogo de ejemplo al renderizar el grid.
// -----------------------------------------------
const sellBtn = document.getElementById('sellBtn');
const publishModal = document.getElementById('publishModal');
const closePublishModal = document.getElementById('closePublishModal');
const publishForm = document.getElementById('publishForm');
const publishError = document.getElementById('publishError');
const publishTagsContainer = document.getElementById('publishTagsContainer');
const publishImageInput = document.getElementById('publishImage');
const publishImagePreview = document.getElementById('publishImagePreview');

// Genera los chips de categorías dentro del modal de publicación,
// a partir del mismo objeto `categories` que usa el modal de detalles.
function renderPublishTagChips() {
  const lang = localStorage.getItem('noesis_lang') || 'es';
  publishTagsContainer.innerHTML = '';

  Object.keys(categories).forEach(key => {
    const cat = categories[key];
    const label = document.createElement('label');
    label.className = 'publish-tag-chip';
    label.innerHTML = `
      <input type="checkbox" name="publishTags" value="${key}">
      <i class="${cat.icon}"></i>
      <span>${cat[lang]}</span>
    `;
    const checkbox = label.querySelector('input');
    checkbox.addEventListener('change', () => {
      label.classList.toggle('selected', checkbox.checked);
    });
    publishTagsContainer.appendChild(label);
  });
}

function openPublishModal() {
  const user = getCurrentUser();
  const lang = localStorage.getItem('noesis_lang') || 'es';

  if (!user) {
    showToast(translations[lang].publish_login_required);
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

if (sellBtn) {
  sellBtn.addEventListener('click', openPublishModal);
}

if (closePublishModal) {
  closePublishModal.addEventListener('click', () => {
    publishModal.classList.remove('show');
  });
}

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

// Vista previa de la imagen seleccionada
if (publishImageInput) {
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
}

function showPublishError(message) {
  publishError.textContent = message;
  publishError.classList.add('visible');
  publishForm.classList.remove('publish-shake');
  void publishForm.offsetWidth;
  publishForm.classList.add('publish-shake');
}

if (publishForm) {
  publishForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const lang = localStorage.getItem('noesis_lang') || 'es';
    const user = getCurrentUser();

    if (!user) {
      showToast(translations[lang].publish_login_required);
      setTimeout(() => { window.location.href = 'login.html'; }, 900);
      return;
    }

    const name = publishForm.publishName.value.trim();
    const price = parseFloat(publishForm.publishPrice.value);
    const condition = publishForm.publishCondition.value;
    const description = publishForm.publishDescription.value.trim();
    const file = publishImageInput.files[0];
    const selectedTags = Array.from(publishForm.querySelectorAll('input[name="publishTags"]:checked')).map(el => el.value);

    if (!name || isNaN(price) || price < 0 || !description || !file || selectedTags.length === 0) {
      showPublishError(translations[lang].publish_err_required);
      return;
    }

    // Convierte la imagen a base64 (Data URL) para poder guardarla en localStorage,
    // ya que no hay un servidor/backend real donde subir archivos.
    const reader = new FileReader();
    reader.onload = (ev) => {
      const imageDataUrl = ev.target.result;

      const newProduct = {
        id: 'u_' + Date.now().toString(36),
        name,
        icon: 'fa-solid fa-box',
        image: imageDataUrl,
        gallery: [imageDataUrl],
        price,
        condition,
        tags: selectedTags,
        seller: { name: user.name, university: user.university, location: user.location },
        ownerEmail: user.email,
        description: { es: description, en: description },
        createdAt: new Date().toISOString()
      };

      const userProducts = loadUserProducts();
      userProducts.push(newProduct);
      saveUserProducts(userProducts);

      publishModal.classList.remove('show');
      if (typeof populateUniversityFilter === 'function') populateUniversityFilter();
      refreshGrid(false);
      showToast(translations[lang].publish_success);
    };
    reader.readAsDataURL(file);
  });
}

// -----------------------------------------------
// CURSOR PERSONALIZADO
// -----------------------------------------------
const cursor         = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');

let mouseX = 0, mouseY = 0;
let follX  = 0, follY  = 0;
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

// -----------------------------------------------
// SELECTOR DE IDIOMA (ES / EN)
// -----------------------------------------------
function setLanguage(lang) {
  // IMPORTANTE: guardamos el idioma en localStorage ANTES de re-renderizar
  // nada, porque renderProducts(), populateUniversityFilter() y renderCart()
  // leen el idioma actual desde localStorage. Si esto se hacía al final
  // (como estaba antes), esas funciones seguían usando el idioma viejo
  // y por eso el botón "Detalles" y el select de universidades se
  // quedaban en español al cambiar a inglés.
  document.documentElement.setAttribute('lang', lang);
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

  // Re-renderiza el grid respetando el término de búsqueda actual,
  // para que los nombres de producto cambien de idioma al instante.
  refreshGrid(false);

  // Vuelve a traducir el mensaje de la campana y el select de universidades
  if (typeof updateBellUI === 'function') updateBellUI(lastKnownNewCount);
  if (typeof populateUniversityFilter === 'function') populateUniversityFilter();

  // Refresca los nombres de producto dentro del carrito, si ya existe
  if (typeof renderCart === 'function' && document.getElementById('cartItems')) {
    renderCart();
  }

  const langCurrent = document.getElementById('langCurrent');
  if (langCurrent) langCurrent.textContent = lang.toUpperCase();

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const langSwitcher = document.getElementById('langSwitcher');

if (langBtn && langDropdown && langSwitcher) {
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (typeof closeCartDropdown === 'function') closeCartDropdown();
    langDropdown.classList.toggle('open');
  });

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
      langDropdown.classList.remove('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!langSwitcher.contains(e.target)) {
      langDropdown.classList.remove('open');
    }
  });
}

// Cargar idioma guardado (o español por defecto)
const savedLang = localStorage.getItem('noesis_lang') || 'es';
setLanguage(savedLang);

// -----------------------------------------------
// SESIÓN SIMULADA (localStorage)
// Si hay un usuario con sesión activa, el ícono de usuario
// lleva al perfil en lugar de a la pantalla de inicio de sesión.
// -----------------------------------------------
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

// -----------------------------------------------
// NAVBAR: sombra al hacer scroll (detalle visual)
// -----------------------------------------------
const navbar = document.querySelector('.navbar');

// El panel del menú móvil es "position:fixed" y necesita saber la
// altura real del navbar (cambia un poco al hacer scroll y entre
// pantallas) para no taparlo. La guardamos en una variable CSS.
function syncNavbarHeight() {
  if (!navbar) return;
  document.documentElement.style.setProperty('--navbar-h', navbar.offsetHeight + 'px');
}
syncNavbarHeight();
window.addEventListener('resize', syncNavbarHeight);

if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
    syncNavbarHeight();
  });
}

// -----------------------------------------------
// MENÚ HAMBURGUESA (móvil) — BLOQUE REUTILIZABLE
// (idéntico al de Books.js / comunidad.js / index.js;
// funciona en monitor, tablet y celular con el CSS de
// arriba. Solo necesita #navbar, #hamburger y #navLinks.)
// -----------------------------------------------
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const NAV_BREAKPOINT = 1024; // debe coincidir con el @media del CSS

if (hamburger && navLinks) {
  const navOverlay = document.createElement('div');
  navOverlay.className = 'nav-overlay';
  navOverlay.id = 'navOverlay';
  document.body.appendChild(navOverlay);

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
}

// -----------------------------------------------
// TRANSICIÓN SUAVE AL NAVEGAR ENTRE PÁGINAS
// Mismo comportamiento que index.js: evita el salto
// brusco al pasar de marketplace.html a index.html.
// -----------------------------------------------
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;

    e.preventDefault();
    if (prefersReducedMotion) {
      window.location.href = href;
      return;
    }
    document.body.classList.add('page-leaving');
    window.setTimeout(() => { window.location.href = href; }, 220);
  });
});
