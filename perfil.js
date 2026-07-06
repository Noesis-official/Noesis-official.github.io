// ============================================================
//  NOESIS — perfil.js
//  Lee la sesión simulada guardada en localStorage y muestra
//  los datos del usuario. Si no hay sesión activa, muestra
//  un mensaje invitando a iniciar sesión o registrarse.
// ============================================================

const USERS_KEY = "noesis_users";
const SESSION_KEY = "noesis_session";

const translations = {
  es: {
    back_menu: "Volver al menú",
    go_market: "Ir al marketplace",
    no_session_title: "No has iniciado sesión",
    no_session_text: "Inicia sesión o crea una cuenta para ver tu perfil de estudiante.",
    go_login: "Ir a inicio de sesión",
    profile_tag: "Cuenta simulada · localStorage",
    detail_university: "Universidad",
    detail_location: "Ubicación",
    detail_member_since: "Miembro desde",
    profile_go_market: "Explorar el marketplace",
    logout_btn: "Cerrar sesión",
    profile_note: "Esta cuenta es solo una simulación con localStorage para fines de prototipo — no hay servidor real detrás.",
    toast_logout: "Sesión cerrada."
  },
  en: {
    back_menu: "Back to menu",
    go_market: "Go to marketplace",
    no_session_title: "You're not logged in",
    no_session_text: "Log in or create an account to see your student profile.",
    go_login: "Go to login",
    profile_tag: "Simulated account · localStorage",
    detail_university: "University",
    detail_location: "Location",
    detail_member_since: "Member since",
    profile_go_market: "Explore the marketplace",
    logout_btn: "Log out",
    profile_note: "This account is only a localStorage simulation for prototyping — there's no real server behind it.",
    toast_logout: "Signed out."
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  document.documentElement.setAttribute('lang', lang);
}

setLanguage(localStorage.getItem('noesis_lang') || 'es');

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
}

function getSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
  } catch {
    return null;
  }
}

function formatDate(isoString, lang) {
  try {
    const date = new Date(isoString);
    return date.toLocaleDateString(lang === 'en' ? 'en-US' : 'es-PA', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  } catch {
    return '—';
  }
}

const noSession = document.getElementById('noSession');
const profileCard = document.getElementById('profileCard');
const lang = localStorage.getItem('noesis_lang') || 'es';

const session = getSession();
const user = session ? getUsers().find(u => u.email === session.email) : null;

if (!user) {
  noSession.classList.add('show');
} else {
  profileCard.classList.add('show');

  document.getElementById('profileAvatar').textContent = user.name.trim().charAt(0).toUpperCase() || 'N';
  document.getElementById('profileName').textContent = user.name;
  document.getElementById('profileEmail').textContent = user.email;
  document.getElementById('profileUniversity').textContent = user.university;
  document.getElementById('profileLocation').textContent = user.location;
  document.getElementById('profileSince').textContent = formatDate(user.createdAt, lang);
}

// -----------------------------------------------
// CERRAR SESIÓN
// -----------------------------------------------
const logoutBtn = document.getElementById('logoutBtn');
const profileToast = document.getElementById('profileToast');

if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem(SESSION_KEY);
    profileToast.textContent = translations[lang].toast_logout;
    profileToast.classList.add('show');
    setTimeout(() => { window.location.href = 'login.html'; }, 700);
  });
}

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
