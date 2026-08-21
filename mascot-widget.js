// ============================================================
// Widget flotante de la mascota — redirige a comunidad.html
// Incluir en cualquier página con <script src="mascot-widget.js"></script>
// Se auto-oculta si ya estamos en comunidad.html.
// ============================================================
(function () {
  // No mostrar en la propia página de comunidad
  if (window.location.pathname.includes('comunidad')) return;

  // Respetar si el usuario ya lo cerró en esta sesión
  if (sessionStorage.getItem('noesis_mascot_dismissed')) return;

  const BUBBLE_TEXT = {
    es: '¡Únete a la comunidad!',
    en: 'Join the community!'
  };

  function getCurrentLang() {
    return localStorage.getItem('noesis_lang') || 'es';
  }

  const widget = document.createElement('a');
  widget.href = 'comunidad.html';
  widget.className = 'mascot-widget';
  widget.innerHTML = `
    <div class="mascot-widget-bubble"></div>
    <button class="mascot-widget-close" type="button" aria-label="Cerrar">&times;</button>
    <img class="mascot-widget-img" src="IMG/mascot-jump.png" alt="Mascota Noesis"/>
  `;

  const bubble = widget.querySelector('.mascot-widget-bubble');

  // Actualiza el texto de la burbuja 
  function refreshLanguage() {
    const text = BUBBLE_TEXT[getCurrentLang()] || BUBBLE_TEXT.es;
    bubble.textContent = text;
    widget.setAttribute('aria-label', text);
  }

  refreshLanguage();
  document.body.appendChild(widget);

  // El selector de idioma de cada página
  document.addEventListener('click', (e) => {
    const langOption = e.target.closest('.lang-option[data-lang]');
    if (langOption) {
      // Se dispara justo después de que la página guarde el nuevo
      // idioma en localStorage, así que esperamos un instante para
      // leer el valor ya actualizado.
      setTimeout(refreshLanguage, 0);
    }
  });

  window.addEventListener('storage', (e) => {
    if (e.key === 'noesis_lang') refreshLanguage();
  });

  // Botón de cerrar (no navega, solo oculta)
  const closeBtn = widget.querySelector('.mascot-widget-close');
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    widget.style.opacity = '0';
    widget.style.transform = 'translateY(20px) scale(.8)';
    widget.style.pointerEvents = 'none';
    setTimeout(() => widget.remove(), 300);
    sessionStorage.setItem('noesis_mascot_dismissed', '1');
  });
})();