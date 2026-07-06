// ============================================================
//  NOESIS – Market Place  |  script.js
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
    nav_menu: "MENU",
    nav_market: "MARKETPLACE",
    nav_study: "MATERIAL DE ESTUDIO",
    nav_books: "LIBROS",
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
    seller_login_hint: "Inicia sesión para contactar al vendedor",
    cart_title: "Tu carrito",
    cart_empty_msg: "Tu carrito está vacío",
    cart_total: "Total",
    cart_checkout: "Finalizar compra",
    cart_clear: "Vaciar carrito",
    cart_added_toast: "Añadido al carrito ✓",
    cart_removed_toast: "Producto eliminado",
    cart_cleared_toast: "Carrito vaciado",
    cart_checkout_success: "¡Compra realizada con éxito! 🎉",
    cart_checkout_empty: "Tu carrito está vacío"
  },
  en: {
    nav_menu: "MENU",
    nav_market: "MARKETPLACE",
    nav_study: "STUDY MATERIAL",
    nav_books: "BOOKS",
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
    seller_login_hint: "Log in to contact the seller",
    cart_title: "Your cart",
    cart_empty_msg: "Your cart is empty",
    cart_total: "Total",
    cart_checkout: "Checkout",
    cart_clear: "Clear cart",
    cart_added_toast: "Added to cart ✓",
    cart_removed_toast: "Item removed",
    cart_cleared_toast: "Cart cleared",
    cart_checkout_success: "Purchase completed successfully! 🎉",
    cart_checkout_empty: "Your cart is empty"
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

    card.innerHTML = `
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

function getFilteredEntries(query) {
  const lang = localStorage.getItem('noesis_lang') || 'es';
  const q = normalize(query.trim());

  const all = products.map((product, index) => ({ product, index }));

  if (!q) return all;

  return all.filter(({ product }) => {
    const nameEs = normalize(product.name);
    const nameEn = normalize(productNamesTranslations.en[product.name] || '');
    const nameLocalized = normalize(productNamesTranslations[lang][product.name] || '');
    return nameEs.includes(q) || nameEn.includes(q) || nameLocalized.includes(q);
  });
}

function refreshGrid(animate = true) {
  const query = searchInput ? searchInput.value : '';
  renderProducts(getFilteredEntries(query), { animate });
}

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
const cartToast = document.getElementById("cartToast");

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

let currentModalProductIndex = null;

function openModal(product, index) {
  currentModalProductIndex = typeof index === 'number' ? index : products.indexOf(product);
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

  modal.classList.add('show');
}

grid.addEventListener('click', (e) => {
  const btn = e.target.closest('.card-btn');
  if (!btn) return;

  const card = btn.closest('.card');
  const index = Number(card.dataset.index);
  const product = products[index];
  if (!product) return;

  openModal(product, index);
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

// -----------------------------------------------
// CARRITO DE COMPRAS
// Persiste en localStorage como un arreglo de
// { index, qty } donde `index` es la posición del
// producto dentro de `products`.
// -----------------------------------------------
const CART_KEY = 'noesis_cart';

const cartSwitcher   = document.getElementById('cartSwitcher');
const cartBtn        = document.getElementById('cartBtn');
const cartDropdown   = document.getElementById('cartDropdown');
const cartClose      = document.getElementById('cartClose');
const cartItemsBox   = document.getElementById('cartItems');
const cartEmptyBox   = document.getElementById('cartEmpty');
const cartFooterBox  = document.getElementById('cartFooter');
const cartBadge      = document.getElementById('cartBadge');
const cartTotalAmount = document.getElementById('cartTotalAmount');
const cartCheckoutBtn = document.getElementById('cartCheckoutBtn');
const cartClearBtn   = document.getElementById('cartClearBtn');
const globalToast    = document.getElementById('globalToast');

function loadCart() {
  try {
    const stored = JSON.parse(localStorage.getItem(CART_KEY));
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
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

function cartTotalQty() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function cartTotalPrice() {
  return cart.reduce((sum, item) => {
    const product = products[item.index];
    return product ? sum + product.price * item.qty : sum;
  }, 0);
}

function addToCart(index, qty = 1) {
  if (typeof index !== 'number' || !products[index]) return;
  const existing = cart.find(item => item.index === index);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ index, qty });
  }
  saveCart(cart);
  renderCart({ pulse: true });
}

function removeFromCart(index) {
  cart = cart.filter(item => item.index !== index);
  saveCart(cart);
  renderCart();
}

function changeQty(index, delta) {
  const item = cart.find(i => i.index === index);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(index);
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
    cart.forEach(({ index, qty }) => {
      const product = products[index];
      if (!product) return;

      const displayName = productNamesTranslations[lang][product.name] || product.name;
      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <div class="cart-item-img"><img src="${product.image}" alt="${displayName}"></div>
        <div class="cart-item-info">
          <span class="cart-item-name">${displayName}</span>
          <span class="cart-item-price">${formatPrice(product.price * qty)}</span>
          <div class="cart-item-qty">
            <button type="button" class="qty-btn" data-action="minus" data-index="${index}" aria-label="-">−</button>
            <span class="qty-value">${qty}</span>
            <button type="button" class="qty-btn" data-action="plus" data-index="${index}" aria-label="+">+</button>
          </div>
        </div>
        <button type="button" class="cart-item-remove" data-action="remove" data-index="${index}" aria-label="Eliminar">
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
      // Cierra el selector de idioma si estaba abierto
      if (langDropdown) langDropdown.classList.remove('open');
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

    const index = Number(actionBtn.dataset.index);
    const action = actionBtn.dataset.action;
    const lang = localStorage.getItem('noesis_lang') || 'es';

    if (action === 'plus') changeQty(index, 1);
    if (action === 'minus') changeQty(index, -1);
    if (action === 'remove') {
      removeFromCart(index);
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

// ---- Botones dentro del modal de producto ----
if (addToCartBtn) {
  addToCartBtn.addEventListener('click', () => {
    if (currentModalProductIndex === null) return;
    const lang = localStorage.getItem('noesis_lang') || 'es';
    addToCart(currentModalProductIndex, 1);
    addToCartBtn.classList.remove('pulse');
    void addToCartBtn.offsetWidth;
    addToCartBtn.classList.add('pulse');
    showToast(translations[lang].cart_added_toast);
  });
}

if (buyNowBtn) {
  buyNowBtn.addEventListener('click', () => {
    if (currentModalProductIndex === null) return;
    buyNowBtn.classList.remove('pulse');
    void buyNowBtn.offsetWidth;
    buyNowBtn.classList.add('pulse');
    addToCart(currentModalProductIndex, 1);
    modal.classList.remove('show');
    openCartDropdown();
  });
}

// Render inicial del carrito (respeta lo guardado en localStorage)
renderCart();

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
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
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

  // Refresca los nombres de producto dentro del carrito, si ya existe
  if (typeof renderCart === 'function' && document.getElementById('cartItems')) {
    renderCart();
  }

  const langCurrent = document.getElementById('langCurrent');
  if (langCurrent) langCurrent.textContent = lang.toUpperCase();

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('noesis_lang', lang);
}

const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const langSwitcher = document.getElementById('langSwitcher');

if (langBtn && langDropdown && langSwitcher) {
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
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });
}

// -----------------------------------------------
// MENÚ HAMBURGUESA (móvil)
// -----------------------------------------------
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
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
