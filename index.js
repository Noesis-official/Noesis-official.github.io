const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');


window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
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

// -----------------------------------------------
// TRANSICIÓN SUAVE AL NAVEGAR ENTRE PÁGINAS
// Evita el salto brusco al pasar de index.html a
// marketplace.html: hace un fundido de salida antes
// de cargar la siguiente página. Solo aplica a enlaces
// que van a otra página (ignora "#" y anclas internas).
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


const fadeSections = document.querySelectorAll('.fade-in-section');

const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      sectionObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeSections.forEach(section => {
  sectionObserver.observe(section);
});


const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease';
  });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    // Ignora los enlaces placeholder ("#" solo) para no romper con un
    // selector inválido ni saltar bruscamente al inicio de la página.
    if (!href || href === '#') {
      e.preventDefault();
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


const visionImages = document.querySelectorAll('.vision-img-left img, .vision-img-center img, .vision-img-right img');

const imgObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'scale(1)';
      }, i * 120);
      imgObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

visionImages.forEach(img => {
  img.style.opacity = '0';
  img.style.transform = 'scale(0.96)';
  img.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  imgObserver.observe(img);
});

// -----------------------------------------------
// 1. CURSOR PERSONALIZADO
//    Mueve el punto y el anillo con el mouse
// -----------------------------------------------
const cursor         = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');

let mouseX = 0, mouseY = 0;   // posición real del mouse
let follX  = 0, follY  = 0;   // posición suavizada del anillo

// Actualiza la posición del cursor puntual inmediatamente
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});

// El anillo sigue con una leve inercia (animación de persecución)
function animateFollower() {
  follX += (mouseX - follX) * 0.12;
  follY += (mouseY - follY) * 0.12;
  cursorFollower.style.left = follX + 'px';
  cursorFollower.style.top  = follY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

// Al pasar sobre un enlace o botón, agranda el anillo
const interactives = document.querySelectorAll('a, button, .cat-card, .kit-card, .faq-q');
interactives.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorFollower.style.width   = '54px';
    cursorFollower.style.height  = '54px';
    cursorFollower.style.opacity = '0.6';
  });
  el.addEventListener('mouseleave', () => {
    cursorFollower.style.width   = '32px';
    cursorFollower.style.height  = '32px';
    cursorFollower.style.opacity = '1';
  });
});

// -----------------------------------------------
// 7. FORMULARIO DE CONTACTO — validación y envío simulado
// -----------------------------------------------
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // evitar recarga de página

  const nombre  = contactForm.nombre.value.trim();
  const email   = contactForm.email.value.trim();
  const mensaje = contactForm.mensaje.value.trim();

  // Validación básica de campos
  if (!nombre || !email || !mensaje) {
    shakeForm(contactForm);  // efecto de sacudida si faltan campos
    return;
  }

  // Validar formato de email con regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    shakeForm(contactForm.email);
    contactForm.email.focus();
    return;
  }

  // Simular envío: mostrar estado de carga en el botón
  const btn = contactForm.querySelector('button[type="submit"]');
  const currentLang = localStorage.getItem('noesis_lang') || 'es';
  btn.disabled    = true;
  btn.textContent = currentLang === 'en' ? '⏳ Sending...' : '⏳ Enviando...';

  // Simular respuesta del servidor después de 1.5s
  setTimeout(() => {
    formSuccess.classList.add('visible');
    contactForm.reset();
    btn.disabled    = false;
    btn.innerHTML   = '<i class="ph ph-paper-plane-tilt"></i> <span data-i18n="form_btn">' +
      (translations[currentLang] ? translations[currentLang].form_btn : 'Enviar mensaje') + '</span>';

    // Ocultar el mensaje de éxito después de 5s
    setTimeout(() => formSuccess.classList.remove('visible'), 5000);
  }, 1500);
});

// Función auxiliar: sacudir elemento con error
function shakeForm(el) {
  el.style.animation = 'none';
  el.style.borderColor = '#ff6b6b';
  setTimeout(() => { el.style.borderColor = ''; }, 2000);

  // Insertar keyframe de sacudida dinámicamente
  el.animate([
    { transform: 'translateX(0)' },
    { transform: 'translateX(-8px)' },
    { transform: 'translateX(8px)' },
    { transform: 'translateX(-6px)' },
    { transform: 'translateX(6px)' },
    { transform: 'translateX(0)' }
  ], { duration: 400, easing: 'ease-out' });
}

// -----------------------------------------------
// 6. ACORDEÓN DE PREGUNTAS FRECUENTES
// -----------------------------------------------
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const btn = item.querySelector('.faq-q');
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    // Cerrar todos los demás antes de abrir el actual
    faqItems.forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// -----------------------------------------------
// 8. SELECTOR DE IDIOMA (ES / EN)
// -----------------------------------------------
const translations = {
  es: {
    nav_menu: "MENU",
    nav_market: "MARKETPLACE",
    nav_study: "MATERIAL DE ESTUDIO",
    nav_books: "LIBROS",
    about_title: "SOBRE NOSOTROS",
    about_text: "En Noesis creemos que todos merecen acceso a herramientas que apoyen su aprendizaje. Nuestro objetivo es ayudar a estudiantes de primaria, secundaria y universidad, ofreciendo materiales de estudio, recursos educativos y útiles escolares accesibles. Estamos construyendo un espacio moderno donde aprender, compartir y crecer sea más fácil para todos.",
    about_badge_sub: "Recursos educativos",
    offer_title: "QUÉ OFRECEMOS",
    offer_text: "Ofrecemos materiales de estudio, apuntes, guías, resúmenes y recursos educativos para estudiantes desde primaria hasta la universidad. También ofrecemos útiles escolares accesibles y artículos académicos de segunda mano para hacer el aprendizaje más accesible para todos.",
    services_title: "NUESTROS SERVICIOS",
    service1_text: "Accede a libros y recursos de lectura útiles para diferentes niveles y materias académicas.",
    service1_label: "LIBROS",
    service2_text: "Compra, vende o intercambia útiles escolares accesibles y artículos de estudio de segunda mano.",
    service2_label: "MARKETPLACE",
    service3_text: "Encuentra apuntes, guías, resúmenes y recursos educativos diseñados para apoyar a los estudiantes en cada nivel.",
    service3_label: "ESTUDIO",
    service4_text: "Descubre kits de estudio, herramientas de productividad y consejos útiles para mejorar tus hábitos de aprendizaje.",
    service4_label: "KITS Y CONSEJOS",
    vision_label: "VISIÓN",
    vision_text: "Crear oportunidades de aprendizaje para estudiantes de todos los niveles, ofreciendo materiales de estudio accesibles, recursos asequibles y una comunidad donde las limitaciones económicas nunca sean una barrera para la educación.",
    faq_tag: "Ayuda",
    faq_title: "Preguntas frecuentes",
    faq_q1: "¿Noesis cobra comisión por las ventas?",
    faq_a1: "No. Noesis es completamente gratuito para los estudiantes de David, Chiriquí. No cobramos ninguna comisión por ventas ni intercambios.",
    faq_q2: "¿Cómo me registro?",
    faq_a2: "Solo necesitas tu correo universitario o cédula para verificar que eres estudiante en David. El proceso toma menos de 2 minutos.",
    faq_q3: "¿Cómo se hacen los pagos?",
    faq_a3: "Los pagos se acuerdan directamente entre compradores y vendedores. Puedes pagar en efectivo al recoger el artículo en campus o usar Yappy/transferencia bancaria.",
    faq_q4: "¿Puedo publicar desde cualquier universidad de David?",
    faq_a4: "Sí. Noesis está abierto a estudiantes de la UTP, UNACHI, USMA, ISAE y demás universidades con sede en David, Chiriquí.",
    contact_tag: "Contáctanos",
    contact_title: "Estamos en David",
    contact_text: "¿Tienes dudas, sugerencias o quieres unirte como colaborador? Escríbenos y te respondemos rápido.",
    contact_location: "David, Chiriquí, Panamá",
    form_name: "Nombre",
    form_email: "Correo electrónico",
    form_message: "Mensaje",
    form_success: "¡Mensaje enviado! Te contactamos pronto.",
    form_btn: "Enviar mensaje",
    footer_desc: "El marketplace universitario de<br>David, Chiriquí.",
    footer_platform: "Plataforma",
    footer_marketplace: "Marketplace",
    footer_exchanges: "Intercambios",
    footer_kits: "Kits de Inicio",
    footer_support: "Soporte",
    footer_faq: "Ayuda / FAQ",
    footer_contact: "Contáctanos",
    footer_terms: "Términos de uso",
    footer_follow: "Síguenos",
    footer_copyright: "© 2026 Noesis · Todos los derechos reservados · David, Chiriquí, Panamá",
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
    about_title: "ABOUT US",
    about_text: "At Noesis, we believe everyone deserves access to tools that support their learning journey. Our goal is to help students from elementary, middle school, high school, and university by providing study materials, educational resources, and affordable school supplies. We are building a modern space where learning, sharing, and growing become easier and more accessible for everyone.",
    about_badge_sub: "Educational resources",
    offer_title: "WHAT WE OFFER",
    offer_text: "We offer study materials, notes, guides, summaries, and educational resources for students from elementary school to university. We also provide affordable school supplies and second-hand academic items to make learning more accessible for everyone. Our platform is designed to help students study, stay organized, and explore knowledge in a modern, creative, and supportive environment.",
    services_title: "OUR SERVICES",
    service1_text: "Access useful books and reading resources for different academic levels and subjects.",
    service1_label: "BOOKS",
    service2_text: "Buy, sell, or exchange affordable school supplies and second-hand study items.",
    service2_label: "MARKETPLACE",
    service3_text: "Find notes, guides, summaries, and educational resources designed to support students at every level.",
    service3_label: "STUDY",
    service4_text: "Discover study kits, productivity tools, and helpful tips to improve learning habits.",
    service4_label: "KITS and TIPS",
    vision_label: "VISION",
    vision_text: "To create learning opportunities for students of all levels by providing accessible study materials, affordable resources, and a community where financial limitations never become a barrier to education.",
    faq_tag: "Help",
    faq_title: "Frequently Asked Questions",
    faq_q1: "Does Noesis charge a commission on sales?",
    faq_a1: "No. Noesis is completely free for students in David, Chiriquí. We don't charge any commission on sales or exchanges.",
    faq_q2: "How do I sign up?",
    faq_a2: "You only need your university email or ID to verify you're a student in David. The process takes less than 2 minutes.",
    faq_q3: "How are payments made?",
    faq_a3: "Payments are arranged directly between buyers and sellers. You can pay in cash when picking up the item on campus or use Yappy/bank transfer.",
    faq_q4: "Can I post from any university in David?",
    faq_a4: "Yes. Noesis is open to students from UTP, UNACHI, USMA, ISAE, and other universities based in David, Chiriquí.",
    contact_tag: "Contact Us",
    contact_title: "We're in David",
    contact_text: "Have questions, suggestions, or want to join as a collaborator? Write to us and we'll get back to you quickly.",
    contact_location: "David, Chiriquí, Panama",
    form_name: "Name",
    form_email: "Email",
    form_message: "Message",
    form_success: "Message sent! We'll contact you soon.",
    form_btn: "Send message",
    footer_desc: "The university marketplace of<br>David, Chiriquí.",
    footer_platform: "Platform",
    footer_marketplace: "Marketplace",
    footer_exchanges: "Exchanges",
    footer_kits: "Starter Kits",
    footer_support: "Support",
    footer_faq: "Help / FAQ",
    footer_contact: "Contact Us",
    footer_terms: "Terms of Use",
    footer_follow: "Follow Us",
    footer_copyright: "© 2026 Noesis · All rights reserved · David, Chiriquí, Panama",
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
// PRODUCTOS
// Mismo catálogo que en marketplace.js. Se necesita aquí
// solo para poder mostrar nombre, imagen y precio de cada
// producto dentro del carrito (los datos del carrito en sí
// se comparten vía localStorage con marketplace.html).
// -----------------------------------------------
const products = [
  { name: "Calculadora", image: "IMG/Calculadora.png", price: 20 },
  { name: "Ipad", image: "IMG/Ipad.png", price: 450 },
  { name: "Casco", image: "IMG/Casco.png", price: 18 },
  { name: "Bata", image: "IMG/Bata.png", price: 25 },
  { name: "Tubos de ensayo", image: "IMG/Tubodeensayo.png", price: 12 },
  { name: "Estetoscopio", image: "IMG/Estetoscopio.png", price: 30 },
  { name: "Laptop", image: "IMG/Laptop.png", price: 700 },
  { name: "Globo terráqueo", image: "IMG/GloboT.png", price: 35 }
];

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

function formatPrice(amount) {
  return `B/. ${Number(amount).toFixed(2)}`;
}

// -----------------------------------------------
// CARRITO DE COMPRAS
// Persiste en localStorage bajo la misma clave que usa
// marketplace.js ('noesis_cart'), como un arreglo de
// { index, qty } donde `index` es la posición del producto
// dentro de `products`. Así, lo que se agregue en el
// marketplace aparece también aquí, y viceversa.
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

function cartTotalQty() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function cartTotalPrice() {
  return cart.reduce((sum, item) => {
    const product = products[item.index];
    return product ? sum + product.price * item.qty : sum;
  }, 0);
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

// Render inicial del carrito (respeta lo guardado en localStorage,
// incluyendo lo que se haya agregado desde marketplace.html)
renderCart();

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Refresca los nombres de producto dentro del carrito, si ya existe
  if (typeof renderCart === 'function' && document.getElementById('cartItems')) {
    renderCart();
  }

  // Placeholders del formulario
  const nombreInput = document.getElementById('nombre');
  const emailInput = document.getElementById('email');
  const mensajeInput = document.getElementById('mensaje');
  if (lang === 'en') {
    if (nombreInput) nombreInput.placeholder = 'Your full name';
    if (emailInput) emailInput.placeholder = 'youremail@university.edu';
    if (mensajeInput) mensajeInput.placeholder = 'Tell us how we can help...';
  } else {
    if (nombreInput) nombreInput.placeholder = 'Tu nombre completo';
    if (emailInput) emailInput.placeholder = 'tucorreo@universidad.edu';
    if (mensajeInput) mensajeInput.placeholder = 'Cuéntanos en qué podemos ayudarte...';
  }

  const langCurrent = document.getElementById('langCurrent');
  if (langCurrent) langCurrent.textContent = lang.toUpperCase();

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('noesis_lang', lang);
}

// Abrir/cerrar el dropdown de idioma
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

  // Cerrar el dropdown al hacer clic afuera
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