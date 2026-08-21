// ============================================================
//  NOESIS – Study Material  |  
// ============================================================

// -----------------------------------------------
// CATEGORÍAS DE KITS
// -----------------------------------------------
const categories = {
  ingenieria:   { icon: "fa-solid fa-hard-hat",         es: "Ingeniería",        en: "Engineering" },
  arquitectura: { icon: "fa-solid fa-drafting-compass", es: "Arquitectura",      en: "Architecture" },
  medicina:     { icon: "fa-solid fa-stethoscope",      es: "Medicina",          en: "Medicine" },
  enfermeria:   { icon: "fa-solid fa-user-nurse",       es: "Enfermería",        en: "Nursing" },
  derecho:      { icon: "fa-solid fa-gavel",            es: "Derecho",           en: "Law" }
};

const conditionLabels = {
  new:       { es: "Nuevo",           en: "New" },
  excellent: { es: "Excelente estado", en: "Excellent condition" },
  used:      { es: "Segunda mano",     en: "Second-hand" }
};

// -----------------------------------------------
// KITS DE ESTUDIO (catálogo de ejemplo)
//  AGREGAR IMÁGENES AQUÍ: reemplaza `image`/`gallery` con las
// fotos reales de cada kit cuando las tengas.
// -----------------------------------------------
const products = [
  {
    name: { es: "Kit de inicio - Ingeniería Química", en: "Chemical Engineering Entry Kit" },
    image: "IMG Study/kit de quimica.png",
    gallery: ["IMG Study/kit de quimica.png"],
    price: 120,
    condition: "excellent",
    category: "ingenieria",
    postedAt: "2026-07-14",
    includes: {
      es: ["Calculadora científica", "Gafas de seguridad", "Libreta de laboratorio", "Set básico de herramientas de laboratorio", "Libro de texto de Química"],
      en: ["Scientific calculator", "Safety glasses", "Lab notebook", "Basic lab tools set", "Chemistry textbook"]
    },
    seller: { name: "Jonh Maikol", university: "UNACHI", location: "David, Chiriquí" }
  },
  {
    name: { es: "Kit de inicio - Arquitectura", en: "Architecture Entry Kit" },
    image: "IMG Study/kit arquitectura.png",
    gallery: ["IMG Study/kit arquitectura.png"],
    price: 95,
    condition: "new",
    category: "arquitectura",
    postedAt: "2026-07-10",
    includes: {
      es: ["Set de reglas de dibujo", "Lápices técnicos", "Tablero de dibujo", "Papel para planos", "Manual de arquitectura"],
      en: ["Drafting ruler set", "Technical pencils", "Drawing board", "Blueprint paper", "Architecture handbook"]
    },
    seller: { name: "Valeria Gómez", university: "USMA", location: "David, Chiriquí" }
  },
  {
    name: { es: "Kit de inicio - Ingeniería en Sistemas", en: "Systems Engineering Entry Kit" },
    image: "IMG/kit-sistemas.png",
    gallery: ["IMG/kit-sistemas-1.png", "IMG/kit-sistemas-2.png", "IMG/kit-sistemas-3.png", "IMG/kit-sistemas-4.png"],
    price: 150,
    condition: "used",
    category: "ingenieria",
    postedAt: "2026-07-16",
    includes: {
      es: ["Base para laptop", "Disco duro externo", "Libro de lógica de programación", "Libreta y marcadores", "Memoria USB"],
      en: ["Laptop stand", "External hard drive", "Programming logic textbook", "Notebook & markers", "USB flash drive"]
    },
    seller: { name: "Diego Fernández", university: "ISAE", location: "David, Chiriquí" }
  },
  {
    name: { es: "Kit de inicio - Medicina", en: "Medical Entry Kit" },
    image: "IMG/kit-medicina.png",
    gallery: ["IMG/kit-medicina-1.png", "IMG/kit-medicina-2.png", "IMG/kit-medicina-3.png", "IMG/kit-medicina-4.png"],
    price: 110,
    condition: "new",
    category: "medicina",
    postedAt: "2026-07-09",
    includes: {
      es: ["Estetoscopio", "Tensiómetro", "Set de batas clínicas", "Libreta clínica", "Linterna de bolsillo"],
      en: ["Stethoscope", "Blood pressure monitor", "Scrubs set", "Clinical notebook", "Penlight"]
    },
    seller: { name: "Ana Lucía Herrera", university: "USMA", location: "David, Chiriquí" }
  },
  {
    name: { es: "Kit de inicio - Enfermería", en: "Nursing Entry Kit" },
    image: "IMG/kit-enfermeria.png",
    gallery: ["IMG/kit-enfermeria-1.png", "IMG/kit-enfermeria-2.png", "IMG/kit-enfermeria-3.png", "IMG/kit-enfermeria-4.png"],
    price: 90,
    condition: "new",
    category: "enfermeria",
    postedAt: "2026-07-12",
    includes: {
      es: ["Set de uniforme de enfermería", "Kit de vendas y curitas", "Termómetro digital", "Manual de enfermería", "Gafete con nombre"],
      en: ["Nursing scrubs", "Bandage & dressing kit", "Digital thermometer", "Nursing handbook", "Name badge"]
    },
    seller: { name: "María José Pinto", university: "USMA", location: "David, Chiriquí" }
  },
  {
    name: { es: "Kit de inicio - Derecho", en: "Law Entry Kit" },
    image: "IMG/kit-derecho.png",
    gallery: ["IMG/kit-derecho-1.png", "IMG/kit-derecho-2.png", "IMG/kit-derecho-3.png", "IMG/kit-derecho-4.png"],
    price: 130,
    condition: "used",
    category: "derecho",
    postedAt: "2026-07-08",
    includes: {
      es: ["Libretas de apuntes legales", "Código civil", "Réplica de mazo de juez", "Set de resaltadores", "Carpeta portadocumentos"],
      en: ["Legal pad notebooks", "Civil code textbook", "Gavel replica", "Highlighter set", "Briefcase folder"]
    },
    seller: { name: "Carlos Espinoza", university: "UNACHI", location: "David, Chiriquí" }
  }
];

// -----------------------------------------------
// KITS PUBLICADOS POR USUARIOS (localStorage)
// -----------------------------------------------
const USER_PRODUCTS_KEY = "noesis_study_user_products";
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

function getAllProducts() {
  return [...products, ...loadUserProducts()];
}

// -----------------------------------------------
// TRADUCCIONES
// -----------------------------------------------
const translations = {
  es: {
    nav_menu: "MENU",
    nav_market: "MARKETPLACE",
    nav_study: "STUDY MATERIAL",
    nav_community: "COMUNIDAD",
    nav_books: "LIBROS",
    search_placeholder_study: "Buscar kits de estudio...",
    details_btn: "Detalles",
    modal_default_title: "Nombre del kit",
    modal_includes_title: "Incluye",
    modal_category_label: "Categoría",
    modal_condition_label: "Condición",
    modal_posted_label: "Publicado",
    modal_seller_student_label: "Vendedor estudiante",
    modal_message_seller: "Contactar vendedor",
    modal_add_cart: "Añadir al carrito",
    modal_buy_now: "Comprar ahora",
    condition_new: "Nuevo",
    condition_excellent: "Excelente estado",
    condition_used: "Segunda mano",
    cart_toast: "Añadido al carrito ✓",
    no_results_msg: "No encontramos kits con ese nombre.",
    sell_btn: "Vender",
    publish_title_study: "Publicar un kit de estudio",
    publish_name_label_study: "Nombre del kit",
    publish_price_label: "Precio (B/.)",
    publish_condition_label: "Condición",
    publish_category_label: "Categoría (elige una)",
    publish_includes_label: "¿Qué incluye? (una por línea)",
    publish_image_label: "Foto del kit",
    publish_submit_btn_study: "Publicar kit",
    publish_hint: "Simulado con localStorage — tu publicación solo se guarda en este navegador.",
    publish_err_required: "Por favor completa todos los campos y elige una categoría.",
    publish_login_required: "Inicia sesión para publicar un kit.",
    publish_success: "¡Kit publicado con éxito! 🎉",
    delete_listing_btn: "Eliminar publicación",
    delete_confirm: "¿Seguro que quieres eliminar esta publicación?",
    delete_success: "Publicación eliminada.",
    card_mine_badge: "Tuyo",
    notif_msg_study: "¡Aquí te avisaremos si agregamos nuevos kits de estudio!",
    notif_panel_title: "Novedades",
    notif_new_msg: "Hay {count} kits nuevos desde tu última visita",
    notif_none_msg: "No hay kits nuevos desde tu última visita.",
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
    nav_study: "STUDY MATERIAL",
    nav_community: "COMMUNITY",
    nav_books: "BOOKS",
    search_placeholder_study: "Search study kits...",
    details_btn: "Details",
    modal_default_title: "Kit name",
    modal_includes_title: "Includes",
    modal_category_label: "Category",
    modal_condition_label: "Condition",
    modal_posted_label: "Posted",
    modal_seller_student_label: "Student seller",
    modal_message_seller: "Message seller",
    modal_add_cart: "Add to cart",
    modal_buy_now: "Buy this now",
    condition_new: "New",
    condition_excellent: "Excellent condition",
    condition_used: "Second-hand",
    cart_toast: "Added to cart ✓",
    no_results_msg: "We couldn't find any kits with that name.",
    sell_btn: "Sell",
    publish_title_study: "Publish a study kit",
    publish_name_label_study: "Kit name",
    publish_price_label: "Price (B/.)",
    publish_condition_label: "Condition",
    publish_category_label: "Category (choose one)",
    publish_includes_label: "What's included? (one per line)",
    publish_image_label: "Kit photo",
    publish_submit_btn_study: "Publish kit",
    publish_hint: "Simulated with localStorage — your listing is only saved on this browser.",
    publish_err_required: "Please fill in all fields and choose a category.",
    publish_login_required: "Log in to publish a kit.",
    publish_success: "Kit published successfully! 🎉",
    delete_listing_btn: "Delete listing",
    delete_confirm: "Are you sure you want to delete this listing?",
    delete_success: "Listing deleted.",
    card_mine_badge: "Yours",
    notif_msg_study: "Here we'll let you know if we add new study kits.",
    notif_panel_title: "What's new",
    notif_new_msg: "There are {count} new kits since your last visit",
    notif_none_msg: "No new kits since your last visit.",
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
    footer_menu: "Menu",
    footer_marketplace: "Marketplace",
    footer_books: "Books",
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

function normalize(str) {
  return String(str)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function formatPrice(amount) {
  return `B/. ${Number(amount).toFixed(2)}`;
}

function formatDate(isoDate, lang) {
  const d = new Date(isoDate);
  if (isNaN(d)) return '';
  return d.toLocaleDateString(lang === 'es' ? 'es-PA' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function getName(product, lang) {
  if (typeof product.name === 'string') return product.name;
  return product.name[lang] || product.name.es || product.name.en;
}

function getIncludes(product, lang) {
  if (!product.includes) return [];
  if (Array.isArray(product.includes)) return product.includes;
  return product.includes[lang] || product.includes.es || product.includes.en || [];
}

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

    const displayName = getName(product, lang);
    const detailsLabel = translations[lang].details_btn;
    const seller = product.seller;
    const isMine = currentUser && product.ownerEmail === currentUser.email;

    // Si la imagen no existe se muestra un recuadro con la ruta que el
    // navegador intentó cargar (no aplica a fotos subidas por el usuario,
    // que son data URLs muy largas).
    const imgHint = (product.image && product.image.startsWith('data:')) ? '' : (product.image || '');

    card.innerHTML = `
${isMine ? `<span class="card-mine-badge">${translations[lang].card_mine_badge}</span>` : ''}
<div class="card-icon-wrap kit-cover">
    <img src="${product.image}" alt="${displayName}" loading="lazy"
         onerror="this.parentElement.classList.add('img-missing')">
    <div class="img-placeholder">
      <i class="fa-solid fa-image"></i>
      <span>${imgHint}</span>
    </div>
</div>
    <span class="card-name">${displayName}</span>
    ${seller ? `
    <div class="card-seller">
      <i class="fa-solid fa-graduation-cap"></i>
      <span>${seller.university} · ${seller.location}</span>
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
// FILTROS (categoría, precio, universidad)
// -----------------------------------------------
const activeFilters = {
  category: 'all',
  priceMin: null,
  priceMax: null,
  university: 'all'
};

const categoryFilterGroup = document.getElementById('categoryFilterGroup');
const priceMinInput = document.getElementById('priceMinInput');
const priceMaxInput = document.getElementById('priceMaxInput');
const universityFilterSelect = document.getElementById('universityFilterSelect');
const clearFiltersBtn = document.getElementById('clearFiltersBtn');

// Genera los chips de categoría a partir de las categorías que
// realmente aparecen en el catálogo (de ejemplo + publicados).
function populateCategoryFilter() {
  if (!categoryFilterGroup) return;
  const lang = localStorage.getItem('noesis_lang') || 'es';
  const usedKeys = Array.from(new Set(getAllProducts().map(p => p.category).filter(Boolean)));

  const allChip = categoryFilterGroup.querySelector('[data-category="all"]');
  categoryFilterGroup.innerHTML = '';
  categoryFilterGroup.appendChild(allChip || createAllChip(lang));

  usedKeys.forEach(key => {
    const cat = categories[key];
    if (!cat) return;
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'filter-chip' + (activeFilters.category === key ? ' active' : '');
    chip.dataset.category = key;
    chip.textContent = cat[lang];
    categoryFilterGroup.appendChild(chip);
  });

  categoryFilterGroup.querySelectorAll('.filter-chip').forEach(c => {
    c.classList.toggle('active', c.getAttribute('data-category') === activeFilters.category);
  });
}

function createAllChip(lang) {
  const chip = document.createElement('button');
  chip.type = 'button';
  chip.className = 'filter-chip active';
  chip.dataset.category = 'all';
  chip.setAttribute('data-i18n', 'filter_all');
  chip.textContent = translations[lang].filter_all;
  return chip;
}

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

  if ([...universityFilterSelect.options].some(o => o.value === selected)) {
    universityFilterSelect.value = selected;
  }
}

function getFilteredEntries(query) {
  const lang = localStorage.getItem('noesis_lang') || 'es';
  const q = normalize(query.trim());

  const all = getAllProducts().map((product, index) => ({ product, index }));

  return all.filter(({ product }) => {
    if (q) {
      const nameEs = normalize(getName(product, 'es'));
      const nameEn = normalize(getName(product, 'en'));
      if (!(nameEs.includes(q) || nameEn.includes(q))) return false;
    }

    if (activeFilters.category !== 'all' && product.category !== activeFilters.category) {
      return false;
    }

    const price = Number(product.price) || 0;
    if (activeFilters.priceMin !== null && price < activeFilters.priceMin) return false;
    if (activeFilters.priceMax !== null && price > activeFilters.priceMax) return false;

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

if (categoryFilterGroup) {
  categoryFilterGroup.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;
    categoryFilterGroup.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    activeFilters.category = chip.getAttribute('data-category');
    refreshGrid();
  });
}

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

if (universityFilterSelect) {
  universityFilterSelect.addEventListener('change', () => {
    activeFilters.university = universityFilterSelect.value;
    refreshGrid();
  });
}

if (clearFiltersBtn) {
  clearFiltersBtn.addEventListener('click', () => {
    activeFilters.category = 'all';
    activeFilters.priceMin = null;
    activeFilters.priceMax = null;
    activeFilters.university = 'all';

    if (categoryFilterGroup) {
      categoryFilterGroup.querySelectorAll('.filter-chip').forEach(c => {
        c.classList.toggle('active', c.getAttribute('data-category') === 'all');
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

populateCategoryFilter();
populateUniversityFilter();

// -----------------------------------------------
// CAMPANITA: kits nuevos desde la última visita
// -----------------------------------------------
const LAST_VISIT_KEY = 'noesis_study_last_visit';

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
      : translations[lang].notif_msg_study;
  }

  if (notifPanelBody) {
    notifPanelBody.textContent = newCount > 0
      ? (translations[lang].notif_new_msg || '').replace('{count}', newCount)
      : translations[lang].notif_none_msg;
  }
}

const storedLastVisit = localStorage.getItem(LAST_VISIT_KEY);
const lastVisitDate = storedLastVisit ? new Date(storedLastVisit) : new Date(0);

updateBellUI(countNewListingsSince(lastVisitDate));

localStorage.setItem(LAST_VISIT_KEY, new Date().toISOString());

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

refreshGrid();

if (searchInput) {
  searchInput.addEventListener('input', () => {
    searchInput.parentElement.classList.toggle('has-value', searchInput.value.trim() !== '');
    refreshGrid();
  });
}

// -----------------------------------------------
// MODAL DE DETALLES
// -----------------------------------------------
const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalCondition = document.getElementById("modalCondition");
const modalPrice = document.getElementById("modalPrice");
const modalImage = document.getElementById("modalMainImage");
const modalGallery = document.getElementById("modalGallery");
const modalIncludes = document.getElementById("modalIncludes");
const modalCategory = document.getElementById("modalCategory");
const modalConditionValue = document.getElementById("modalConditionValue");
const modalPosted = document.getElementById("modalPosted");
const modalSellerName = document.getElementById("modalSellerName");
const modalSellerUniLine = document.getElementById("modalSellerUniLine");
const closeModal = document.getElementById("closeModal");
const addToCartBtn = document.getElementById("addToCartBtn");
const buyNowBtn = document.getElementById("buyNowBtn");
const contactSellerBtn = document.getElementById("contactSellerBtn");
const deleteListingBtn = document.getElementById("deleteListingBtn");
const cartToast = document.getElementById("cartToast");

let currentOpenProduct = null;
let toastTimer = null;

function showToast(message) {
  cartToast.textContent = message;
  cartToast.classList.remove('show');
  void cartToast.offsetWidth;
  cartToast.classList.add('show');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => cartToast.classList.remove('show'), 2200);
}

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
  const displayName = getName(product, lang);

  modalTitle.textContent = displayName;

  const cat = categories[product.category];
  modalSellerUniLine.textContent = product.seller ? `${product.seller.university}, ${product.seller.location}` : '';

  modalCondition.textContent = (conditionLabels[product.condition] && conditionLabels[product.condition][lang]) || '';
  modalPrice.textContent = formatPrice(product.price);

  modalImage.src = product.image;
  modalImage.alt = displayName;

  // ---- Galería de miniaturas ----
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

  // ---- Incluye ----
  modalIncludes.innerHTML = '';
  getIncludes(product, lang).forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    modalIncludes.appendChild(li);
  });

  // ---- Datos del kit ----
  modalCategory.textContent = cat ? cat[lang] : '—';
  modalConditionValue.textContent = (conditionLabels[product.condition] && conditionLabels[product.condition][lang]) || '—';
  modalPosted.textContent = product.postedAt ? formatDate(product.postedAt, lang) : '—';
  modalSellerName.textContent = product.seller ? product.seller.name : '—';

  // ---- Botón de eliminar publicación (solo si el kit es tuyo) ----
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

      if (typeof removeFromCart === 'function') removeFromCart(product.id);

      modal.classList.remove('show');
      populateCategoryFilter();
      populateUniversityFilter();
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

    addToCart(currentOpenProduct, 1);
    modal.classList.remove('show');
    if (typeof langDropdown !== 'undefined' && langDropdown) langDropdown.classList.remove('open');
    openCartDropdown();
  });
}

if (contactSellerBtn) {
  contactSellerBtn.addEventListener('click', () => {
    if (!currentOpenProduct) return;
    const lang = localStorage.getItem('noesis_lang') || 'es';
    const displayName = getName(currentOpenProduct, lang);
    const msg = lang === 'es'
      ? `Hola, me interesa el kit "${displayName}" que publicaste en Noesis.`
      : `Hi, I'm interested in the "${displayName}" kit you posted on Noesis.`;
    window.open(`https://wa.me/50760000000?text=${encodeURIComponent(msg)}`, '_blank');
  });
}

// -----------------------------------------------
// CARRITO DE COMPRAS
// Comparte la misma clave 'noesis_cart' que marketplace.js/index.js.
// Las claves se prefijan con "kit_" para no chocar con los índices
// numéricos que usa el catálogo de marketplace.
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

function getProductCartKey(product) {
  if (product.id) return product.id;
  const idx = products.indexOf(product);
  return idx === -1 ? null : `kit_${idx}`;
}

function resolveProductByKey(key) {
  if (typeof key === 'string' && key.startsWith('kit_')) {
    return products[Number(key.slice(4))] || null;
  }
  return loadUserProducts().find(p => p.id === key) || null;
}

function cartTotalQty() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function productSnapshot(product) {
  const lang = localStorage.getItem('noesis_lang') || 'es';
  return { title: { es: getName(product, 'es'), en: getName(product, 'en') }, price: product.price, image: product.image };
}

function getCartItemInfo(item) {
  const lang = localStorage.getItem('noesis_lang') || 'es';
  const product = resolveProductByKey(item.key);
  if (product) {
    return { title: getName(product, lang), price: Number(product.price) || 0, image: product.image };
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
  if (key === null || key === undefined) return;

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

if (cartItemsBox) {
  cartItemsBox.addEventListener('click', (e) => {
    const actionBtn = e.target.closest('[data-action]');
    if (!actionBtn) return;

    const rawKey = actionBtn.dataset.key;
    const key = rawKey;
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

renderCart();

window.addEventListener('storage', (e) => {
  if (e.key === CART_KEY) {
    cart = loadCart();
    renderCart();
  }
});

// -----------------------------------------------
// PUBLICAR UN KIT
// -----------------------------------------------
const sellBtn = document.getElementById('sellBtn');
const publishModal = document.getElementById('publishModal');
const closePublishModal = document.getElementById('closePublishModal');
const publishForm = document.getElementById('publishForm');
const publishError = document.getElementById('publishError');
const publishTagsContainer = document.getElementById('publishTagsContainer');
const publishImageInput = document.getElementById('publishImage');
const publishImagePreview = document.getElementById('publishImagePreview');

function renderPublishTagChips() {
  const lang = localStorage.getItem('noesis_lang') || 'es';
  publishTagsContainer.innerHTML = '';

  Object.keys(categories).forEach(key => {
    const cat = categories[key];
    const label = document.createElement('label');
    label.className = 'publish-tag-chip';
    label.innerHTML = `
      <input type="radio" name="publishCategory" value="${key}">
      <i class="${cat.icon}"></i>
      <span>${cat[lang]}</span>
    `;
    const radio = label.querySelector('input');
    radio.addEventListener('change', () => {
      publishTagsContainer.querySelectorAll('.publish-tag-chip').forEach(el => el.classList.remove('selected'));
      label.classList.toggle('selected', radio.checked);
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
    const includesRaw = publishForm.publishIncludes.value.trim();
    const file = publishImageInput.files[0];
    const selectedCategory = (publishForm.querySelector('input[name="publishCategory"]:checked') || {}).value;

    if (!name || isNaN(price) || price < 0 || !includesRaw || !file || !selectedCategory) {
      showPublishError(translations[lang].publish_err_required);
      return;
    }

    const includesList = includesRaw.split('\n').map(s => s.trim()).filter(Boolean);

    const reader = new FileReader();
    reader.onload = (ev) => {
      const imageDataUrl = ev.target.result;

      const newProduct = {
        id: 'u_' + Date.now().toString(36),
        name: { es: name, en: name },
        image: imageDataUrl,
        gallery: [imageDataUrl],
        price,
        condition,
        category: selectedCategory,
        postedAt: new Date().toISOString(),
        includes: { es: includesList, en: includesList },
        seller: { name: user.name, university: user.university, location: user.location },
        ownerEmail: user.email,
        createdAt: new Date().toISOString()
      };

      const userProducts = loadUserProducts();
      userProducts.push(newProduct);
      saveUserProducts(userProducts);

      publishModal.classList.remove('show');
      populateCategoryFilter();
      populateUniversityFilter();
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

  refreshGrid(false);

  if (typeof updateBellUI === 'function') updateBellUI(lastKnownNewCount);
  if (typeof populateCategoryFilter === 'function') populateCategoryFilter();
  if (typeof populateUniversityFilter === 'function') populateUniversityFilter();

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

const savedLang = localStorage.getItem('noesis_lang') || 'es';
setLanguage(savedLang);

// -----------------------------------------------
// SESIÓN SIMULADA (localStorage)
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
// NAVBAR: sombra al hacer scroll
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
// MENÚ HAMBURGUESA (móvil) 
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