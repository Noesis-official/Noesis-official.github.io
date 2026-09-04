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
    toast_logout: "Sesión cerrada.",
    my_listings_title: "Mis publicaciones",
    my_listings_empty: "Todavía no has publicado ningún producto. ¡Ve al marketplace y vende algo!",
    delete_confirm: "¿Seguro que quieres eliminar esta publicación?",
    delete_success: "Publicación eliminada.",
    role_student: "Estudiante",
    role_tutor: "Tutor",
    tutor_profile_title: "Mi perfil de tutor",
    field_tutor_subject: "Materia principal",
    field_tutor_price: "Precio por hora (B/.)",
    field_tutor_bio: "Cuéntanos de ti como tutor",
    field_tutor_photo: "Foto de perfil",
    field_tutor_phone: "Número de contacto",
    edit_tutor_profile: "Editar",
    view_in_community: "Ver en la comunidad",
    save_changes: "Guardar cambios",
    cancel: "Cancelar",
    find_tutors: "Buscar tutores",
    cat_physics: "Física", cat_chemistry: "Química", cat_economics: "Economía",
    cat_biology: "Biología", cat_math: "Matemáticas", cat_english: "Inglés", cat_systems: "Sistemas",
    toast_tutor_updated: "¡Perfil de tutor actualizado!"
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
    toast_logout: "Signed out.",
    my_listings_title: "My listings",
    my_listings_empty: "You haven't published any products yet. Go to the marketplace and sell something!",
    delete_confirm: "Are you sure you want to delete this listing?",
    delete_success: "Listing deleted.",
    role_student: "Student",
    role_tutor: "Tutor",
    tutor_profile_title: "My Tutor Profile",
    field_tutor_subject: "Main subject",
    field_tutor_price: "Price per hour (B/.)",
    field_tutor_bio: "Tell us about yourself as a tutor",
    field_tutor_photo: "Profile photo",
    field_tutor_phone: "Contact number",
    edit_tutor_profile: "Edit",
    view_in_community: "View in community",
    save_changes: "Save changes",
    cancel: "Cancel",
    find_tutors: "Find tutors",
    cat_physics: "Physics", cat_chemistry: "Chemistry", cat_economics: "Economics",
    cat_biology: "Biology", cat_math: "Mathematics", cat_english: "English", cat_systems: "Systems",
    toast_tutor_updated: "Tutor profile updated!"
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
const profileToast = document.getElementById('profileToast');

const session = getSession();
const user = session ? getUsers().find(u => u.email === session.email) : null;

// Etiquetas de materia (mismas categorías que usa comunidad.html)
const CATEGORY_LABELS = {
  physics: { es: "Física", en: "Physics" },
  chemistry: { es: "Química", en: "Chemistry" },
  economics: { es: "Economía", en: "Economics" },
  biology: { es: "Biología", en: "Biology" },
  math: { es: "Matemáticas", en: "Mathematics" },
  english: { es: "Inglés", en: "English" },
  systems: { es: "Sistemas", en: "Systems" }
};

function showProfileToast(message) {
  profileToast.textContent = message;
  profileToast.classList.remove('show');
  void profileToast.offsetWidth;
  profileToast.classList.add('show');
  setTimeout(() => profileToast.classList.remove('show'), 2200);
}

// -----------------------------------------------
// PERFIL DE TUTOR (solo si user.role === "tutor")
// Muestra su materia/precio/bio y permite editarlos;
// comunidad.js lee estos mismos campos para mostrarlo
// como tutor real en el listado.
// -----------------------------------------------
function populateTutorProfileView() {
  if (!user || user.role !== 'tutor') return;
  const subjectLabel = CATEGORY_LABELS[user.tutorSubject] ? CATEGORY_LABELS[user.tutorSubject][lang] : (user.tutorSubject || '—');
  document.getElementById('tutorProfileSubject').textContent = subjectLabel;
  document.getElementById('tutorProfilePrice').textContent = `B/. ${Number(user.tutorPrice || 0).toFixed(2)}`;
  document.getElementById('tutorProfilePhone').textContent = user.tutorPhone || '—';
  document.getElementById('tutorProfileBio').textContent = user.tutorBio || '—';

  const photoPreview = document.getElementById('tutorProfilePhotoPreview');
  const photoPlaceholder = document.getElementById('tutorProfilePhotoPlaceholder');
  if (photoPreview && photoPlaceholder) {
    if (user.tutorPhoto) {
      photoPreview.src = user.tutorPhoto;
      photoPreview.style.display = 'block';
      photoPlaceholder.style.display = 'none';
    } else {
      photoPreview.style.display = 'none';
      photoPlaceholder.style.display = 'flex';
    }
  }
}

function initTutorProfile() {
  const section = document.getElementById('tutorProfileSection');
  if (!section) return;

  if (!user || user.role !== 'tutor') {
    section.classList.remove('show');
    return;
  }

  section.classList.add('show');
  populateTutorProfileView();

  const viewBox = document.getElementById('tutorProfileView');
  const form = document.getElementById('tutorProfileForm');
  const editBtn = document.getElementById('editTutorProfileBtn');
  const cancelBtn = document.getElementById('cancelEditTutorBtn');
  const editPhotoInput = document.getElementById('editTutorPhoto');
  const editPhotoPreview = document.getElementById('editTutorPhotoPreview');
  const editPhotoPlaceholder = document.getElementById('editTutorPhotoPlaceholder');

  function showEditPhoto(src) {
    if (!editPhotoPreview || !editPhotoPlaceholder) return;
    if (src) {
      editPhotoPreview.src = src;
      editPhotoPreview.style.display = 'block';
      editPhotoPlaceholder.style.display = 'none';
    } else {
      editPhotoPreview.style.display = 'none';
      editPhotoPlaceholder.style.display = 'flex';
    }
  }

  // Estos listeners se adjuntan UNA sola vez (initTutorProfile solo
  // se llama una vez al cargar la página).
  editBtn.addEventListener('click', () => {
    document.getElementById('editTutorSubject').value = user.tutorSubject || 'physics';
    document.getElementById('editTutorPrice').value = user.tutorPrice || '';
    document.getElementById('editTutorPhone').value = user.tutorPhone || '';
    document.getElementById('editTutorBio').value = user.tutorBio || '';
    if (editPhotoInput) editPhotoInput.value = '';
    showEditPhoto(user.tutorPhoto || null);
    viewBox.style.display = 'none';
    form.classList.add('show');
  });

  cancelBtn.addEventListener('click', () => {
    form.classList.remove('show');
    viewBox.style.display = 'flex';
  });

  // Vista previa al elegir una foto nueva en el formulario de edición
  if (editPhotoInput) {
    editPhotoInput.addEventListener('change', () => {
      const file = editPhotoInput.files[0];
      if (!file) {
        showEditPhoto(user.tutorPhoto || null);
        return;
      }
      const reader = new FileReader();
      reader.onload = () => showEditPhoto(reader.result);
      reader.readAsDataURL(file);
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newSubject = document.getElementById('editTutorSubject').value;
    const newPrice = parseFloat(document.getElementById('editTutorPrice').value);
    const newPhone = document.getElementById('editTutorPhone').value.trim();
    const newBio = document.getElementById('editTutorBio').value.trim();

    if (!newSubject || isNaN(newPrice) || newPrice <= 0 || !newBio) return;

    function finishSave(newPhoto) {
      const users = getUsers();
      const idx = users.findIndex(u => u.email === user.email);
      if (idx !== -1) {
        users[idx].tutorSubject = newSubject;
        users[idx].tutorPrice = newPrice;
        users[idx].tutorPhone = newPhone;
        users[idx].phone = newPhone;
        users[idx].tutorBio = newBio;
        if (newPhoto) users[idx].tutorPhoto = newPhoto;
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
        user.tutorSubject = newSubject;
        user.tutorPrice = newPrice;
        user.tutorPhone = newPhone;
        user.phone = newPhone;
        user.tutorBio = newBio;
        if (newPhoto) user.tutorPhoto = newPhoto;
      }

      form.classList.remove('show');
      viewBox.style.display = 'flex';
      showProfileToast(translations[lang].toast_tutor_updated);
      populateTutorProfileView();
    }

    // La foto solo se vuelve a leer si se eligió un archivo nuevo;
    // si no, se conserva la que ya tenía guardada.
    const photoFile = editPhotoInput && editPhotoInput.files[0] ? editPhotoInput.files[0] : null;
    if (photoFile) {
      const reader = new FileReader();
      reader.onload = () => finishSave(reader.result);
      reader.onerror = () => finishSave(null);
      reader.readAsDataURL(photoFile);
    } else {
      finishSave(null);
    }
  });
}

// -----------------------------------------------
// MIS PUBLICACIONES (productos guardados en
// "noesis_user_products" cuyo ownerEmail coincide
// con el usuario de la sesión activa)
// -----------------------------------------------
const USER_PRODUCTS_KEY = "noesis_user_products";

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

function renderMyListings() {
  const myListingsGrid = document.getElementById('myListingsGrid');
  const myListingsEmpty = document.getElementById('myListingsEmpty');
  if (!myListingsGrid) return;

  const mine = loadUserProducts().filter(p => p.ownerEmail === user.email);

  myListingsGrid.innerHTML = '';
  myListingsEmpty.classList.toggle('show', mine.length === 0);

  mine.forEach(product => {
    const card = document.createElement('div');
    card.className = 'my-listing-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <span class="my-listing-name">${product.name}</span>
      <span class="my-listing-price">B/. ${Number(product.price).toFixed(2)}</span>
      <button class="my-listing-delete" type="button">
        <i class="fa-solid fa-trash"></i>
      </button>
    `;
    const deleteBtn = card.querySelector('.my-listing-delete');
    deleteBtn.addEventListener('click', () => {
      if (!window.confirm(translations[lang].delete_confirm)) return;
      const remaining = loadUserProducts().filter(p => p.id !== product.id);
      saveUserProducts(remaining);
      profileToast.textContent = translations[lang].delete_success;
      profileToast.classList.add('show');
      setTimeout(() => profileToast.classList.remove('show'), 2200);
      renderMyListings();
    });
    myListingsGrid.appendChild(card);
  });
}

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

  // Insignia de rol (Estudiante / Tutor). Las cuentas creadas antes
  // de este cambio no tienen "role" guardado — las tratamos como
  // estudiante por defecto.
  const role = user.role === 'tutor' ? 'tutor' : 'student';
  const roleBadge = document.getElementById('profileRoleBadge');
  if (roleBadge) {
    roleBadge.textContent = role === 'tutor' ? translations[lang].role_tutor : translations[lang].role_student;
  }

  const studentShortcut = document.getElementById('studentShortcut');
  if (studentShortcut) studentShortcut.classList.toggle('show', role === 'student');

  initTutorProfile();
  renderMyListings();
}

// -----------------------------------------------
// CERRAR SESIÓN
// -----------------------------------------------
const logoutBtn = document.getElementById('logoutBtn');

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
