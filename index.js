/* =====================================================
   NOESIS — index.js
===================================================== */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    initCursor();
    initNavbar();
    initMobileMenu();
    initLangSwitcher();
    initCart();
    initFaqAccordion();
    initFadeInSections();
    initContactForm();
    initOutsideClicks();
    initPageTransition();
    initKeyboardShortcuts();
  });

  // ¿El usuario prefiere menos movimiento? Lo respetamos en todo el sitio.
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* =====================================================
     CURSOR PERSONALIZADO
  ===================================================== */
  function initCursor() {
    const cursor = document.getElementById("cursor");
    const follower = document.getElementById("cursorFollower");
    if (!cursor || !follower) return;

    // En pantallas táctiles (o con movimiento reducido) no tiene
    // sentido un cursor personalizado.
    if (window.matchMedia("(pointer: coarse)").matches || reducedMotion) {
      cursor.style.display = "none";
      follower.style.display = "none";
      return;
    }

    let mouseX = 0,
      mouseY = 0,
      followerX = 0,
      followerY = 0;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";
    });

    (function animate() {
      followerX += (mouseX - followerX) * 0.18;
      followerY += (mouseY - followerY) * 0.18;
      follower.style.left = followerX + "px";
      follower.style.top = followerY + "px";
      requestAnimationFrame(animate);
    })();

    document
      .querySelectorAll("a, button, .faq-q, .service-card, input, textarea")
      .forEach((el) => {
        el.addEventListener("mouseenter", () => {
          follower.style.transform = "translate(-50%,-50%) scale(1.6)";
        });
        el.addEventListener("mouseleave", () => {
          follower.style.transform = "translate(-50%,-50%) scale(1)";
        });
      });
  }

  /* =====================================================
     NAVBAR — sombra/fondo sólido al hacer scroll
  ===================================================== */
  function initNavbar() {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    // El panel del menú móvil es "position:fixed" y necesita saber
    // la altura real del navbar (cambia un poco al hacer scroll y
    // entre pantallas) para no taparlo. La guardamos en una variable CSS.
    const syncNavbarHeight = () => {
      document.documentElement.style.setProperty("--navbar-h", navbar.offsetHeight + "px");
    };
    syncNavbarHeight();
    window.addEventListener("resize", syncNavbarHeight);

    // Agrupamos las lecturas de scroll en un solo frame para que
    // el desplazamiento se mantenga fluido.
    let ticking = false;
    const update = () => {
      navbar.classList.toggle("scrolled", window.scrollY > 30);
      syncNavbarHeight();
      ticking = false;
    };

    update();
    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(update);
      },
      { passive: true }
    );
  }

  /* =====================================================
     MENÚ HAMBURGUESA (móvil)
  ===================================================== */
  const NAV_BREAKPOINT = 1024; // debe coincidir con el @media de index.css

  // Función compartida para cerrar el menú móvil desde cualquier
  // parte del script (clic en enlace, Escape, clic afuera, resize).
  function closeMobileMenu() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const navOverlay = document.getElementById("navOverlay");
    if (!hamburger || !navLinks) return;

    hamburger.classList.remove("active");
    navLinks.classList.remove("open");
    if (navOverlay) navOverlay.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }

  function initMobileMenu() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    if (!hamburger || !navLinks) return;

    // Fondo oscuro detrás del panel, para poder cerrarlo tocando
    // afuera. Se crea una sola vez (no hace falta tocar el HTML).
    const navOverlay = document.createElement("div");
    navOverlay.className = "nav-overlay";
    navOverlay.id = "navOverlay";
    document.body.appendChild(navOverlay);

    hamburger.addEventListener("click", () => {
      const isOpen = navLinks.classList.contains("open");
      if (isOpen) {
        closeMobileMenu();
        return;
      }
      hamburger.classList.add("active");
      navLinks.classList.add("open");
      navOverlay.classList.add("open");
      hamburger.setAttribute("aria-expanded", "true");
      document.body.classList.add("nav-open"); // bloquea el scroll de fondo
    });

    navLinks.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    navOverlay.addEventListener("click", closeMobileMenu);

    // Si el usuario rota el dispositivo o pasa de tablet a monitor
    // con el menú abierto, lo cerramos para que no quede "flotando"
    // en modo desktop (donde .nav-links ya no es un panel).
    window.addEventListener("resize", () => {
      if (window.innerWidth > NAV_BREAKPOINT) closeMobileMenu();
    });
  }

  /* =====================================================
     SELECTOR DE IDIOMA (ES / EN)
  ===================================================== */
  const translations = {
    nav_Material: { es: "MATERIAL DE ESTUDIO", en: "STUDY MATERIAL" },
    nav_menu: { es: "MENÚ", en: "MENU" },
    nav_market: { es: "MARKETPLACE", en: "MARKETPLACE" },
    nav_community: { es: "COMUNIDAD", en: "COMMUNITY" },
    nav_books: { es: "LIBROS", en: "BOOKS" },

    cart_title: { es: "Tu carrito", en: "Your cart" },
    cart_empty_msg: { es: "Tu carrito está vacío", en: "Your cart is empty" },
    cart_total: { es: "Total", en: "Total" },
    cart_checkout: { es: "Finalizar compra", en: "Checkout" },
    cart_clear: { es: "Vaciar carrito", en: "Clear cart" },

    about_title: { es: "SOBRE NOSOTROS", en: "ABOUT US" },
    about_text: {
      es: "En Noesis creemos que todos merecen acceso a herramientas que apoyen su proceso de aprendizaje. Nuestro objetivo es ayudar a estudiantes de primaria, secundaria, media y universidad, ofreciendo materiales de estudio, recursos educativos y útiles escolares accesibles. Estamos construyendo un espacio moderno donde aprender, compartir y crecer sea más fácil y accesible para todos.",
      en: "At Noesis, we believe everyone deserves access to tools that support their learning journey. Our goal is to help students from elementary, middle school, high school, and university by providing study materials, educational resources, and affordable school supplies. We are building a modern space where learning, sharing, and growing become easier and more accessible for everyone.",
    },
    about_badge_sub: { es: "Recursos educativos", en: "Educational resources" },

    offer_title: { es: "¿QUÉ OFRECEMOS?", en: "WHAT WE OFFER?" },
    offer_text: {
      es: "Ofrecemos materiales de estudio, apuntes, guías, resúmenes y recursos educativos para estudiantes desde primaria hasta la universidad. También ofrecemos útiles escolares accesibles y artículos académicos de segunda mano para que aprender sea más accesible para todos. Nuestra plataforma está diseñada para ayudar a los estudiantes a estudiar, organizarse y explorar el conocimiento en un entorno moderno, creativo y de apoyo.",
      en: "We offer study materials, notes, guides, summaries, and educational resources for students from elementary school to university. We also provide affordable school supplies and second-hand academic items to make learning more accessible for everyone. Our platform is designed to help students study, stay organized, and explore knowledge in a modern, creative, and supportive environment.",
    },

    services_title: { es: "NUESTROS SERVICIOS", en: "OUR SERVICES" },
    service1_text: {
      es: "Accede a libros útiles y recursos de lectura para distintos niveles académicos y materias.",
      en: "Access useful books and reading resources for different academic levels and subjects.",
    },
    service1_label: { es: "LIBROS", en: "BOOKS" },
    service2_text: {
      es: "Compra, vende o intercambia útiles escolares accesibles y artículos de estudio de segunda mano.",
      en: "Buy, sell, or exchange affordable school supplies and second-hand study items.",
    },
    service2_label: { es: "MARKETPLACE", en: "MARKET PLACE" },
    service3_text: {
      es: "Encuentra apuntes, guías, resúmenes y recursos educativos diseñados para apoyar a estudiantes de todos los niveles.",
      en: "Find notes, guides, summaries, and educational resources designed to support students at every level.",
    },
    service3_label: { es: "ESTUDIO", en: "STUDY" },
    service4_text: {
      es: "Descubre kits de estudio, herramientas de productividad y consejos útiles para mejorar tus hábitos de aprendizaje.",
      en: "Discover study kits, productivity tools, and helpful tips to improve learning habits.",
    },
    service4_label: { es: "KITS Y CONSEJOS", en: "KITS AND TIPS" },

    vision_label: { es: "VISIÓN", en: "VISION" },
    vision_text: {
      es: "Crear oportunidades de aprendizaje para estudiantes de todos los niveles, ofreciendo materiales de estudio accesibles, recursos económicos y una comunidad donde las limitaciones financieras nunca sean una barrera para la educación.",
      en: "To create learning opportunities for students of all levels by providing accessible study materials, affordable resources, and a community where financial limitations never become a barrier to education.",
    },

    faq_tag: { es: "Ayuda", en: "Help" },
    faq_title: { es: "Preguntas frecuentes", en: "Frequently asked questions" },
    faq_q1: { es: "¿Noesis cobra comisión por las ventas?", en: "Does Noesis charge a commission on sales?" },
    faq_a1: {
      es: "No. Noesis es completamente gratuito para los estudiantes de David, Chiriquí. No cobramos ninguna comisión por ventas ni intercambios.",
      en: "No. Noesis is completely free for students in David, Chiriquí. We don't charge any commission on sales or exchanges.",
    },
    faq_q2: { es: "¿Cómo me registro?", en: "How do I sign up?" },
    faq_a2: {
      es: "Solo necesitas tu correo universitario o cédula para verificar que eres estudiante en David. El proceso toma menos de 2 minutos.",
      en: "You only need your university email or ID to verify you're a student in David. The process takes less than 2 minutes.",
    },
    faq_q3: { es: "¿Cómo se hacen los pagos?", en: "How do payments work?" },
    faq_a3: {
      es: "Los pagos se acuerdan directamente entre compradores y vendedores. Puedes pagar en efectivo al recoger el artículo en campus o usar Yappy/transferencia bancaria.",
      en: "Payments are arranged directly between buyers and sellers. You can pay in cash when picking up the item on campus, or use Yappy/bank transfer.",
    },
    faq_q4: { es: "¿Puedo publicar desde cualquier universidad de David?", en: "Can I post from any university in David?" },
    faq_a4: {
      es: "Sí. Noesis está abierto a estudiantes de la UTP, UNACHI, USMA, ISAE y demás universidades con sede en David, Chiriquí.",
      en: "Yes. Noesis is open to students from UTP, UNACHI, USMA, ISAE, and other universities based in David, Chiriquí.",
    },

    footer_desc: {
      es: "El marketplace universitario de<br/>David, Chiriquí.",
      en: "The university marketplace of<br/>David, Chiriquí.",
    },
    footer_platform: { es: "Plataforma", en: "Platform" },
    footer_marketplace: { es: "Marketplace", en: "Marketplace" },
    footer_material: { es: "Material de Estudio", en: "Study Material" },
    footer_books: { es: "Libros", en: "Books" },
    footer_support: { es: "Soporte", en: "Support" },
    footer_faq: { es: "Ayuda / FAQ", en: "Help / FAQ" },
    footer_contact: { es: "Contáctanos", en: "Contact us" },
    footer_terms: { es: "Términos de uso", en: "Terms of use" },
    footer_follow: { es: "Síguenos", en: "Follow us" },
    footer_copyright: {
      es: "© 2026 Noesis · Todos los derechos reservados · David, Chiriquí, Panamá",
      en: "© 2026 Noesis · All rights reserved · David, Chiriquí, Panama",
    },

    contact_tag: { es: "Contáctanos", en: "Contact us" },
    contact_title: { es: "Estamos en David", en: "We're based in David" },
    contact_text: {
      es: "¿Tienes dudas, sugerencias o quieres unirte como colaborador? Escríbenos y te respondemos rápido.",
      en: "Have questions, suggestions, or want to join as a collaborator? Write to us and we'll get back to you quickly.",
    },
    contact_location: { es: "David, Chiriquí, Panamá", en: "David, Chiriquí, Panama" },

    form_name: { es: "Nombre", en: "Name" },
    form_email: { es: "Correo electrónico", en: "Email" },
    form_message: { es: "Mensaje", en: "Message" },
    form_success: { es: "¡Mensaje enviado! Te contactamos pronto.", en: "Message sent! We'll contact you soon." },
    form_error: {
      es: "No se pudo enviar el mensaje. Inténtalo de nuevo o escríbenos directamente a esauc.montenegro2027@fegrjdavid.superate.org",
      en: "We couldn't send your message. Please try again or email us directly at esauc.montenegro2027@fegrjdavid.superate.org",
    },
    form_btn: { es: "Enviar mensaje", en: "Send message" },
  };

  /* Cambia el video del hero según el idioma activo, usando las
     rutas guardadas en data-video-es / data-video-en del <video>. */
  function updateHeroVideo(lang) {
    const video = document.getElementById("heroVideo");
    const source = document.getElementById("heroVideoSource");
    if (!video || !source) return;

    const newSrc = video.dataset[lang === "en" ? "videoEn" : "videoEs"];
    if (!newSrc || source.getAttribute("src") === newSrc) return;

    const wasPlaying = !video.paused;
    source.setAttribute("src", newSrc);
    video.load();
    if (wasPlaying) {
      video.play().catch(() => {
        /* el navegador puede bloquear el autoplay; no es crítico */
      });
    }
  }

  function applyLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const entry = translations[el.getAttribute("data-i18n")];
      if (entry && entry[lang]) el.innerHTML = entry[lang];
    });

    updateHeroVideo(lang);

    document.documentElement.setAttribute("lang", lang);

    const current = document.getElementById("langCurrent");
    if (current) current.textContent = lang.toUpperCase();

    document.querySelectorAll(".lang-option").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    try {
      localStorage.setItem("noesis_lang", lang);
    } catch (e) {
      /* localStorage no disponible, seguimos sin persistir */
    }
  }

  function initLangSwitcher() {
    const langBtn = document.getElementById("langBtn");
    const langDropdown = document.getElementById("langDropdown");

    if (langBtn && langDropdown) {
      langBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = langDropdown.classList.toggle("open");
        langBtn.setAttribute("aria-expanded", String(isOpen));
      });

      langDropdown.querySelectorAll(".lang-option").forEach((option) => {
        option.addEventListener("click", () => {
          applyLanguage(option.dataset.lang);
          langDropdown.classList.remove("open");
          langBtn.setAttribute("aria-expanded", "false");
        });
      });
    }

    let savedLang = "es";
    try {
      savedLang = localStorage.getItem("noesis_lang") || "es";
    } catch (e) {
      /* usa "es" por defecto */
    }
    applyLanguage(savedLang);
  }

  /* =====================================================
     CARRITO — persistido en localStorage, compartido
     entre index.html y marketplace.html
  ===================================================== */
  const CART_KEY = "noesis_cart";

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function saveCart(cart) {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (e) {
      /* no se pudo persistir el carrito */
    }
  }

  function formatPrice(n) {
    return "B/. " + Number(n || 0).toFixed(2);
  }

  function renderCart() {
    const itemsWrap = document.getElementById("cartItems");
    if (!itemsWrap) return;

    const cart = getCart();
    const emptyMsg = document.getElementById("cartEmpty");
    const footer = document.getElementById("cartFooter");
    const badge = document.getElementById("cartBadge");
    const totalEl = document.getElementById("cartTotalAmount");

    const totalQty = cart.reduce((sum, it) => sum + it.qty, 0);
    const totalPrice = cart.reduce((sum, it) => sum + it.qty * it.price, 0);

    if (badge) {
      badge.textContent = totalQty;
      badge.classList.toggle("show", totalQty > 0);
    }
    if (totalEl) totalEl.textContent = formatPrice(totalPrice);

    if (cart.length === 0) {
      itemsWrap.innerHTML = "";
      if (emptyMsg) emptyMsg.classList.add("show");
      if (footer) footer.classList.add("hide");
      return;
    }

    if (emptyMsg) emptyMsg.classList.remove("show");
    if (footer) footer.classList.remove("hide");

    itemsWrap.innerHTML = cart
      .map(
        (item) => `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item-img"><img src="${item.image || ""}" alt="${item.name}"></div>
        <div class="cart-item-info">
          <span class="cart-item-name">${item.name}</span>
          <span class="cart-item-price">${formatPrice(item.price)}</span>
          <div class="cart-item-qty">
            <button class="qty-btn" data-action="dec" type="button">&minus;</button>
            <span class="qty-value">${item.qty}</span>
            <button class="qty-btn" data-action="inc" type="button">+</button>
          </div>
        </div>
        <button class="cart-item-remove" data-action="remove" type="button" aria-label="Quitar"><i class="ph ph-trash"></i></button>
      </div>`
      )
      .join("");
  }

  function pulseBadge() {
    const badge = document.getElementById("cartBadge");
    if (!badge) return;
    badge.classList.remove("pulse");
    void badge.offsetWidth; // fuerza el reflow para reiniciar la animación
    badge.classList.add("pulse");
  }

  function addToCart(product) {
    const cart = getCart();
    const existing = cart.find((it) => String(it.id) === String(product.id));
    if (existing) {
      existing.qty += product.qty || 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: Number(product.price) || 0,
        image: product.image || "",
        qty: product.qty || 1,
      });
    }
    saveCart(cart);
    renderCart();
    pulseBadge();
    showToast(`${product.name} se añadió al carrito`);
  }

  function initCart() {
    renderCart();

    const cartBtn = document.getElementById("cartBtn");
    const cartDropdown = document.getElementById("cartDropdown");
    const cartClose = document.getElementById("cartClose");
    const clearBtn = document.getElementById("cartClearBtn");
    const checkoutBtn = document.getElementById("cartCheckoutBtn");
    const itemsWrap = document.getElementById("cartItems");

    if (cartBtn && cartDropdown) {
      cartBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = cartDropdown.classList.toggle("open");
        cartBtn.setAttribute("aria-expanded", String(isOpen));
      });
    }

    if (cartClose && cartDropdown) {
      cartClose.addEventListener("click", () => {
        cartDropdown.classList.remove("open");
        if (cartBtn) cartBtn.setAttribute("aria-expanded", "false");
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        saveCart([]);
        renderCart();
        showToast("Carrito vaciado");
      });
    }

    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", () => {
        if (getCart().length === 0) return;
        showToast("Escríbenos por WhatsApp para finalizar tu compra");
      });
    }

    if (itemsWrap) {
      itemsWrap.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-action]");
        if (!btn) return;
        const row = btn.closest(".cart-item");
        if (!row) return;

        const cart = getCart();
        const item = cart.find((it) => String(it.id) === row.dataset.id);
        if (!item) return;

        if (btn.dataset.action === "inc") item.qty += 1;
        if (btn.dataset.action === "dec") item.qty = Math.max(1, item.qty - 1);
        if (btn.dataset.action === "remove") {
          cart.splice(cart.indexOf(item), 1);
        }

        saveCart(cart);
        renderCart();
      });
    }

    // API pública mínima para que marketplace.html pueda añadir productos:
    // window.NoesisCart.add({ id, name, price, image, qty })
    window.NoesisCart = { add: addToCart, get: getCart, render: renderCart };
  }

  /* =====================================================
     ACORDEÓN DE PREGUNTAS FRECUENTES
  ===================================================== */
  function initFaqAccordion() {
    document.querySelectorAll(".faq-item").forEach((item) => {
      const btn = item.querySelector(".faq-q");
      if (!btn) return;
      btn.addEventListener("click", () => {
        const isOpen = item.classList.toggle("open");
        btn.setAttribute("aria-expanded", String(isOpen));
      });
    });
  }

  /* =====================================================
     REVELADO DE SECCIONES AL HACER SCROLL
  ===================================================== */
  function initFadeInSections() {
    const sections = document.querySelectorAll(".fade-in-section");
    if (!sections.length) return;

    if (!("IntersectionObserver" in window)) {
      sections.forEach((s) => s.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((s) => observer.observe(s));
  }

  /* =====================================================
     FORMULARIO DE CONTACTO (Web3Forms)
  ===================================================== */
  function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    const successMsg = document.getElementById("formSuccess");
    const errorMsg = document.getElementById("formErrorMsg");
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (successMsg) successMsg.classList.remove("visible");
      if (errorMsg) errorMsg.classList.remove("visible");
      if (submitBtn) submitBtn.disabled = true;

      try {
        const formData = new FormData(form);
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        });
        const result = await response.json();

        if (result.success) {
          form.reset();
          if (successMsg) successMsg.classList.add("visible");
        } else if (errorMsg) {
          errorMsg.classList.add("visible");
        }
      } catch (err) {
        if (errorMsg) errorMsg.classList.add("visible");
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  /* =====================================================
     TOAST GLOBAL
  ===================================================== */
  let toastTimer = null;
  function showToast(message) {
    const toast = document.getElementById("globalToast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  }
  window.NoesisShowToast = showToast;

  /* =====================================================
     TRANSICIÓN SUAVE AL NAVEGAR
     Aplica body.page-leaving antes de cambiar de página
     para que no se vea el "salto" blanco entre index,
     marketplace, books, comunidad, etc.
  ===================================================== */
  function initPageTransition() {
    if (reducedMotion) return;

    document.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href");

      // Ignoramos anclas, enlaces externos, descargas y nueva pestaña.
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        link.target === "_blank" ||
        link.hasAttribute("download") ||
        link.hostname !== window.location.hostname ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey
      ) {
        return;
      }

      e.preventDefault();
      document.body.classList.add("page-leaving");
      setTimeout(() => {
        window.location.href = href;
      }, 220);
    });

    // Al volver con el botón "atrás" el navegador puede restaurar la
    // página desde caché con la clase puesta: la quitamos.
    window.addEventListener("pageshow", () => {
      document.body.classList.remove("page-leaving");
    });
  }

  /* =====================================================
     ATAJOS DE TECLADO
  ===================================================== */
  function initKeyboardShortcuts() {
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;

      closeDropdowns();
      closeMobileMenu();
    });
  }

  function closeDropdowns() {
    const langDropdown = document.getElementById("langDropdown");
    const langBtn = document.getElementById("langBtn");
    if (langDropdown) langDropdown.classList.remove("open");
    if (langBtn) langBtn.setAttribute("aria-expanded", "false");

    const cartDropdown = document.getElementById("cartDropdown");
    const cartBtn = document.getElementById("cartBtn");
    if (cartDropdown) cartDropdown.classList.remove("open");
    if (cartBtn) cartBtn.setAttribute("aria-expanded", "false");
  }

  /* =====================================================
     CERRAR DROPDOWNS AL HACER CLIC AFUERA
  ===================================================== */
  function initOutsideClicks() {
    document.addEventListener("click", (e) => {
      const langSwitcher = document.getElementById("langSwitcher");
      const langDropdown = document.getElementById("langDropdown");
      const langBtn = document.getElementById("langBtn");
      if (langSwitcher && langDropdown && !langSwitcher.contains(e.target)) {
        langDropdown.classList.remove("open");
        if (langBtn) langBtn.setAttribute("aria-expanded", "false");
      }

      const cartSwitcher = document.getElementById("cartSwitcher");
      const cartDropdown = document.getElementById("cartDropdown");
      const cartBtn = document.getElementById("cartBtn");
      if (cartSwitcher && cartDropdown && !cartSwitcher.contains(e.target)) {
        cartDropdown.classList.remove("open");
        if (cartBtn) cartBtn.setAttribute("aria-expanded", "false");
      }
    });
  }
})();