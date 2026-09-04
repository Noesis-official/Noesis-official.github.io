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
    field_phone: "Número de contacto (WhatsApp)",
    field_password: "Contraseña",
    field_password_confirm: "Confirmar contraseña",
    field_role: "¿Cómo quieres usar Noesis?",
    role_student: "Soy estudiante",
    role_student_desc: "Quiero comprar, publicar y encontrar tutores",
    role_tutor: "Soy tutor",
    role_tutor_desc: "Quiero ofrecer clases en la comunidad",
    field_tutor_subject: "Materia principal",
    field_tutor_price: "Precio por hora (B/.)",
    field_tutor_bio: "Cuéntanos de ti como tutor",
    field_tutor_phone: "Número de contacto (WhatsApp)",
    field_tutor_photo: "Foto de perfil",
    cat_physics: "Física", cat_chemistry: "Química", cat_economics: "Economía",
    cat_biology: "Biología", cat_math: "Matemáticas", cat_english: "Inglés", cat_systems: "Sistemas",
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
    field_phone: "Contact number (WhatsApp)",
    field_password: "Password",
    field_password_confirm: "Confirm password",
    field_role: "How do you want to use Noesis?",
    role_student: "I'm a student",
    role_student_desc: "I want to buy, sell, and find tutors",
    role_tutor: "I'm a tutor",
    role_tutor_desc: "I want to offer classes in the community",
    field_tutor_subject: "Main subject",
    field_tutor_price: "Price per hour (B/.)",
    field_tutor_bio: "Tell us about yourself as a tutor",
    field_tutor_phone: "Contact number (WhatsApp)",
    field_tutor_photo: "Profile photo",
    cat_physics: "Physics", cat_chemistry: "Chemistry", cat_economics: "Economics",
    cat_biology: "Biology", cat_math: "Mathematics", cat_english: "English", cat_systems: "Systems",
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
// SELECTOR DE ROL (estudiante / tutor)
// Muestra/oculta los campos exclusivos de tutor según
// la opción elegida, y resalta la tarjeta seleccionada.
// -----------------------------------------------
const roleSelector = document.getElementById('roleSelector');
const tutorFields = document.getElementById('tutorFields');

function updateRoleUI() {
  if (!roleSelector) return;
  const checked = roleSelector.querySelector('input[name="registerRole"]:checked');
  const role = checked ? checked.value : 'student';

  roleSelector.querySelectorAll('.role-card').forEach(card => {
    card.classList.toggle('selected', card.dataset.role === role);
  });

  if (tutorFields) {
    tutorFields.classList.toggle('show', role === 'tutor');
    // Los campos de tutor solo son "required" cuando son visibles
    const subjectSelect = document.getElementById('registerSubject');
    const priceInput = document.getElementById('registerPrice');
    if (subjectSelect) subjectSelect.required = (role === 'tutor');
    if (priceInput) priceInput.required = (role === 'tutor');
  }
}

if (roleSelector) {
  roleSelector.querySelectorAll('input[name="registerRole"]').forEach(input => {
    input.addEventListener('change', updateRoleUI);
  });
  updateRoleUI();
}

// -----------------------------------------------
// VISTA PREVIA DE LA FOTO DE TUTOR
// -----------------------------------------------
const registerPhotoInput = document.getElementById('registerPhoto');
const registerPhotoPreview = document.getElementById('registerPhotoPreview');

if (registerPhotoInput && registerPhotoPreview) {
  registerPhotoInput.addEventListener('change', () => {
    const file = registerPhotoInput.files[0];
    if (!file) {
      registerPhotoPreview.style.display = 'none';
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      registerPhotoPreview.src = reader.result;
      registerPhotoPreview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  });
}

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
    const phone = registerForm.registerPhone.value.trim();
    const password = registerForm.registerPassword.value;
    const password2 = registerForm.registerPassword2.value;

    const roleChecked = registerForm.querySelector('input[name="registerRole"]:checked');
    const role = roleChecked ? roleChecked.value : 'student';

    if (!name || !email || !university || !location || !password || !password2) {
      showFormError(registerForm, registerError, t('err_required'));
      return;
    }

    // Campos exclusivos de tutor: solo se validan si el rol elegido es "tutor"
    let tutorSubject = null, tutorPrice = null, tutorBio = '';
    if (role === 'tutor') {
      tutorSubject = registerForm.registerSubject.value;
      tutorPrice = parseFloat(registerForm.registerPrice.value);
      tutorBio = registerForm.registerBio.value.trim();

      if (!tutorSubject || isNaN(tutorPrice) || tutorPrice <= 0 || !tutorBio) {
        showFormError(registerForm, registerError, t('err_required'));
        return;
      }
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

    function finishRegistration(tutorPhoto) {
      const users = getUsers();
      const newUser = {
        id: Date.now().toString(36),
        name,
        email,
        password, // ⚠️ Solo simulado — nunca guardar contraseñas en texto plano en un sistema real
        university,
        location,
        phone, // número de contacto (WhatsApp) — disponible para cualquier rol
        role, // "student" o "tutor"
        createdAt: new Date().toISOString()
      };

      // Si es tutor, guardamos también su información de tutoría —
      // comunidad.js la lee para mostrarlo como tutor real en el listado.
      // tutorPhone se mantiene en espejo con "phone" para no romper el
      // código existente que ya usa u.tutorPhone al mostrar tutores.
      if (role === 'tutor') {
        newUser.tutorSubject = tutorSubject;
        newUser.tutorPrice = tutorPrice;
        newUser.tutorBio = tutorBio;
        newUser.tutorPhone = phone;
        if (tutorPhoto) newUser.tutorPhoto = tutorPhoto;
      }

      users.push(newUser);
      saveUsers(users);
      setSession(newUser.email);

      showToast(t('toast_account_created'));
      setTimeout(() => { window.location.href = 'perfil.html'; }, 600);
    }

    // La foto es opcional y se lee de forma asíncrona (FileReader);
    // si no se eligió ninguna, terminamos el registro de inmediato.
    const photoInput = document.getElementById('registerPhoto');
    const photoFile = (role === 'tutor' && photoInput && photoInput.files[0]) ? photoInput.files[0] : null;

    if (photoFile) {
      const reader = new FileReader();
      reader.onload = () => finishRegistration(reader.result);
      reader.onerror = () => finishRegistration(null);
      reader.readAsDataURL(photoFile);
    } else {
      finishRegistration(null);
    }
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