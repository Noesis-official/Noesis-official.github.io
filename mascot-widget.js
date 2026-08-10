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

  const lang = localStorage.getItem('noesis_lang') || 'es';
  const bubbleText = lang === 'en' ? 'Join the community!' : '¡Únete a la comunidad!';

  const widget = document.createElement('a');
  widget.href = 'comunidad.html';
  widget.className = 'mascot-widget';
  widget.setAttribute('aria-label', bubbleText);
  widget.innerHTML = `
    <div class="mascot-widget-bubble">${bubbleText}</div>
    <button class="mascot-widget-close" type="button" aria-label="Cerrar">&times;</button>
    <img class="mascot-widget-img" src="IMG/mascot-jump.png" alt="Mascota Noesis"/>
  `;

  document.body.appendChild(widget);

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
