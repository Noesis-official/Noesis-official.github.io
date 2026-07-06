// ============================================================
//  NOESIS — registro.js
//  Simula el registro de una cuenta nueva usando localStorage.
//  No hay backend real: todo vive en el navegador.
//
//  Estructura guardada en localStorage:
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

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
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
    register_pill: "¿No tienes cuenta todavía?",
    auth_logo_sub: "Recursos educativos",
    field_name: "Nombre completo",
    field_email: "Correo electrónico",
    field_university: "Universidad",
    field_location: "Ubicación",
    field_password: "Contraseña",
    field_password_confirm: "Confirmar contraseña",
    uni_placeholder: "Selecciona tu universidad",
    uni_other: "Otra",
    register_btn: "Crear cuenta",
    have_account: "¿Ya tienes cuenta?",
    go_login: "Inicia sesión aquí",
    register_hint: "Simulado con localStorage — no se envía a ningún servidor.",
    err_required: "Por favor completa todos los campos.",
    err_email_taken: "Ya existe una cuenta con ese correo.",
    err_password_mismatch: "Las contraseñas no coinciden.",
    err_password_short: "La contraseña debe tener al menos 4 caracteres.",
    toast_account_created: "¡Cuenta creada con éxito!",
    active_session_text: "Ya tienes una sesión activa —",
    active_session_link: "ir a tu perfil"
  },
  en: {
    back_menu: "Back to menu",
    register_pill: "Don't have an account yet?",
    auth_logo_sub: "Educational resources",
    field_name: "Full name",
    field_email: "Email",
    field_university: "University",
    field_location: "Location",
    field_password: "Password",
    field_password_confirm: "Confirm password",
    uni_placeholder: "Select your university",
    uni_other: "Other",
    register_btn: "Create account",
    have_account: "Already have an account?",
    go_login: "Log in here",
    register_hint: "Simulated with localStorage — nothing is sent to a server.",
    err_required: "Please fill in all fields.",
    err_email_taken: "An account with that email already exists.",
    err_password_mismatch: "Passwords don't match.",
    err_password_short: "Password must be at least 4 characters.",
    toast_account_created: "Account created successfully!",
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
// REGISTRO
// -----------------------------------------------
const registerForm = document.getElementById('registerForm');
const registerError = document.getElementById('registerError');

if (registerForm) {
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearFormError(registerError);

    const name = registerForm.registerName.value.trim();
    const email = registerForm.registerEmail.value.trim();
    const university = registerForm.registerUniversity.value;
    const location = registerForm.registerLocation.value.trim();
    const password = registerForm.registerPassword.value;
    const password2 = registerForm.registerPassword2.value;

    if (!name || !email || !university || !location || !password || !password2) {
      showFormError(registerForm, registerError, t('err_required'));
      return;
    }

    if (password.length < 4) {
      showFormError(registerForm, registerError, t('err_password_short'));
      return;
    }

    if (password !== password2) {
      showFormError(registerForm, registerError, t('err_password_mismatch'));
      return;
    }

    if (findUserByEmail(email)) {
      showFormError(registerForm, registerError, t('err_email_taken'));
      return;
    }

    const users = getUsers();
    const newUser = {
      id: Date.now().toString(36),
      name,
      email,
      password, // ⚠️ Solo simulado — nunca guardar contraseñas en texto plano en un sistema real
      university,
      location,
      createdAt: new Date().toISOString()
    };
    users.push(newUser);
    saveUsers(users);
    setSession(newUser.email);

    showToast(t('toast_account_created'));
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
localStorage.clear();