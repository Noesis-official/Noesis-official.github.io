// ============================================================
//  NOESIS — login.js
//  Simula el inicio de sesión usando localStorage.
//  No hay backend real: todo vive en el navegador.
//
//  Estructura leída de localStorage:
//  - "noesis_users"   -> arreglo de usuarios registrados
//                        [{ id, name, email, password, university, location, createdAt }]
//  - "noesis_session" -> { email } del usuario con sesión activa
// ============================================================

const USERS_KEY = "noesis_users";
const SESSION_KEY = "noesis_session";

// -----------------------------------------------
// HELPERS DE ALMACENAMIENTO (localStorage)
// -----------------------------------------------
function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
}

function findUserByEmail(email) {
  const normalized = email.trim().toLowerCase();
  return getUsers().find(u => u.email.toLowerCase() === normalized);
}

function setSession(email) {
  localStorage.setItem(SESSION_KEY, JSON.stringify({ email }));
}

// -----------------------------------------------
// TRADUCCIONES
// -----------------------------------------------
const translations = {
  es: {
    back_menu: "Volver al menú",
    login_pill: "¿Ya tienes cuenta? Inicia sesión",
    auth_logo_sub: "Recursos educativos",
    field_email: "Correo electrónico",
    field_password: "Contraseña",
    login_btn: "Iniciar sesión",
    no_account_yet: "¿No tienes cuenta todavía?",
    go_register: "Regístrate aquí",
    login_hint: "Simulado con localStorage — no se envía a ningún servidor.",
    err_required: "Por favor completa todos los campos.",
    err_login_invalid: "Correo o contraseña incorrectos.",
    toast_welcome_back: "¡Bienvenido de nuevo!",
    active_session_text: "Ya tienes una sesión activa —",
    active_session_link: "ir a tu perfil"
  },
  en: {
    back_menu: "Back to menu",
    login_pill: "Already have an account? Log in",
    auth_logo_sub: "Educational resources",
    field_email: "Email",
    field_password: "Password",
    login_btn: "Log in",
    no_account_yet: "Don't have an account yet?",
    go_register: "Register here",
    login_hint: "Simulated with localStorage — nothing is sent to a server.",
    err_required: "Please fill in all fields.",
    err_login_invalid: "Incorrect email or password.",
    toast_welcome_back: "Welcome back!",
    active_session_text: "You already have an active session —",
    active_session_link: "go to your profile"
  }
};

function t(key) {
  const lang = localStorage.getItem('noesis_lang') || 'es';
  return (translations[lang] && translations[lang][key]) || key;
}

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

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

setLanguage(localStorage.getItem('noesis_lang') || 'es');

// -----------------------------------------------
// TOAST
// -----------------------------------------------
const authToast = document.getElementById('authToast');
let toastTimer = null;

function showToast(message) {
  authToast.textContent = message;
  authToast.classList.remove('show');
  void authToast.offsetWidth;
  authToast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => authToast.classList.remove('show'), 2200);
}

// -----------------------------------------------
// MOSTRAR / OCULTAR CONTRASEÑA
// -----------------------------------------------
document.querySelectorAll('.auth-toggle-pass').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = document.getElementById(btn.dataset.target);
    if (!input) return;
    const icon = btn.querySelector('i');
    if (input.type === 'password') {
      input.type = 'text';
      icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
      input.type = 'password';
      icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
  });
});

// -----------------------------------------------
// UTILIDAD: mostrar error + sacudir formulario
// -----------------------------------------------
function showFormError(form, errorBox, message) {
  errorBox.textContent = message;
  errorBox.classList.add('visible');
  form.classList.remove('auth-shake');
  void form.offsetWidth;
  form.classList.add('auth-shake');
}

function clearFormError(errorBox) {
  errorBox.classList.remove('visible');
  errorBox.textContent = '';
}

// -----------------------------------------------
// LOGIN
// -----------------------------------------------
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearFormError(loginError);

    const email = loginForm.loginEmail.value.trim();
    const password = loginForm.loginPassword.value;

    if (!email || !password) {
      showFormError(loginForm, loginError, t('err_required'));
      return;
    }

    const user = findUserByEmail(email);

    if (!user || user.password !== password) {
      showFormError(loginForm, loginError, t('err_login_invalid'));
      return;
    }

    setSession(user.email);
    showToast(t('toast_welcome_back'));
    setTimeout(() => { window.location.href = 'perfil.html'; }, 600);
  });
}

// -----------------------------------------------
// Si ya hay una sesión activa, ofrecemos ir directo al perfil
// -----------------------------------------------
(function showActiveSessionBanner() {
  try {
    const session = JSON.parse(localStorage.getItem(SESSION_KEY));
    if (session && session.email && findUserByEmail(session.email)) {
      const banner = document.createElement('div');
      banner.className = 'auth-session-banner';
      banner.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${t('active_session_text')} <a href="perfil.html">${t('active_session_link')}</a>`;
      const panel = document.querySelector('.auth-panel');
      if (panel) panel.insertBefore(banner, panel.firstChild);
    }
  } catch { /* noop */ }
})();

// -----------------------------------------------
// CURSOR PERSONALIZADO
// -----------------------------------------------
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');
let mouseX = 0, mouseY = 0, follX = 0, follY = 0;

if (cursor && cursorFollower) {
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
}
