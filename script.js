// ============================================================
// STORAGE (con fallback en memoria)
// ============================================================
const store = {
  get(k, fb) { try { return localStorage.getItem(k) ?? fb; } catch (e) { return (window.__mem || {})[k] ?? fb; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) { window.__mem = window.__mem || {}; window.__mem[k] = v; } }
};

// ============================================================
// I18N
// ============================================================
const I18N = {
  es: {
    "nav.about": "Sobre mí", "nav.experience": "Experiencia", "nav.projects": "Proyectos",
    "nav.certificates": "Certificados", "nav.contact": "Contacto",
    "hero.available": "Abierto a oportunidades",
    "hero.role": "Desarrollador Full-Stack · Ingeniería Multimedia",
    "hero.tagline": "Desarrollo aplicaciones web y móviles con Angular, Ionic y Firebase. Estudiante de último curso en la Universidad de Alicante, con experiencia también en sistemas mainframe.",
    "hero.cta_projects": "Ver proyectos", "hero.cta_contact": "Contactar",
    "about.eyebrow": "Perfil", "about.title": "Sobre mí",
    "about.p1": "Soy estudiante de último año de Ingeniería Multimedia en la Universidad de Alicante, con un perfil full-stack centrado en aplicaciones web y móviles interactivas.",
    "about.p2": "Trabajo sobre todo con Angular, Ionic, Firebase y TypeScript, y complemento el desarrollo moderno con experiencia real en sistemas mainframe (COBOL, JCL, DB2). Esa combinación me da una visión completa del software: desde la interfaz que usa la persona hasta los procesos que sostienen sistemas críticos.",
    "about.p3": "Me interesan especialmente la integración de IA en producto, el diseño de interfaces cuidadas y construir proyectos de principio a fin, de la idea al despliegue.",
    "about.skills.frontend": "Frontend & Móvil", "about.skills.backend": "Backend & Datos",
    "about.skills.mainframe": "Mainframe", "about.skills.langs": "Lenguajes", "about.skills.ai": "IA & Herramientas",
    "exp.eyebrow": "Trayectoria", "exp.title": "Experiencia y formación",
    "exp.ntt.date": "Abr 2026 — Jul 2026", "exp.ntt.role": "Prácticas — Sistemas Mainframe",
    "exp.ntt.desc": "Desarrollo y mantenimiento de programas COBOL y procesos batch con JCL en un equipo de sistemas, trabajando sobre infraestructura mainframe.",
    "exp.uni.date": "2022 — Actualidad", "exp.uni.role": "Grado en Ingeniería Multimedia",
    "exp.uni.desc": "Desarrollo web y móvil, entornos gráficos e interactivos, bases de datos y diseño UX/UI. Trabajo de Fin de Grado: CarGest, una aplicación de gestión de vehículos.",
    "proj.eyebrow": "Trabajo", "proj.title": "Proyectos",
    "proj.subtitle": "Una selección de los proyectos en los que he trabajado.",
    "proj.status.live": "Publicado", "proj.status.progress": "En desarrollo",
    "proj.noma.desc": "Plataforma digital para descubrir productos artesanales de proximidad. Presenta productos con distintivos de calidad (DO, DOP, IGP) sobre un mapa interactivo y ayuda a encontrarlos mediante un asistente conversacional, con un enfoque cuidado en SEO y rendimiento.",
    "proj.epicbox.desc": "Marketplace de recursos digitales para creadores: modelos 3D y 2D, scripts, packs y efectos. Incluye catálogo por categorías, cuentas de usuario y carrito de compra.",
    "proj.cargest.desc": "Aplicación móvil para la gestión de vehículos: permite llevar el control de cada vehículo, su documentación y sus mantenimientos desde un mismo sitio. Es mi Trabajo de Fin de Grado, actualmente en desarrollo.",
    "proj.link.noma": "Ver NOMA →", "proj.link.github": "Ver en GitHub →", "proj.link.soon": "Disponible próximamente",
    "cert.eyebrow": "Formación continua", "cert.title": "Certificados",
    "cert.empty.title": "Aún no hay certificados publicados",
    "cert.empty.desc": "Iré añadiendo aquí las certificaciones que complete, como cursos de LinkedIn Learning o mi nivel de inglés.",
    "contact.eyebrow": "Contacto", "contact.title": "Hablemos",
    "contact.subtitle": "Estoy abierto a oportunidades y colaboraciones. Puedes escribirme por cualquiera de estos canales."
  },
  en: {
    "nav.about": "About", "nav.experience": "Experience", "nav.projects": "Projects",
    "nav.certificates": "Certificates", "nav.contact": "Contact",
    "hero.available": "Open to opportunities",
    "hero.role": "Full-Stack Developer · Multimedia Engineering",
    "hero.tagline": "I build web and mobile applications with Angular, Ionic and Firebase. Final-year student at the University of Alicante, with experience in mainframe systems too.",
    "hero.cta_projects": "View projects", "hero.cta_contact": "Get in touch",
    "about.eyebrow": "Profile", "about.title": "About me",
    "about.p1": "I'm a final-year Multimedia Engineering student at the University of Alicante, with a full-stack profile focused on interactive web and mobile applications.",
    "about.p2": "I mainly work with Angular, Ionic, Firebase and TypeScript, and I complement modern development with real experience in mainframe systems (COBOL, JCL, DB2). That mix gives me a full picture of software: from the interface people use to the processes that keep critical systems running.",
    "about.p3": "I'm especially interested in integrating AI into products, careful interface design, and building projects end-to-end, from idea to deployment.",
    "about.skills.frontend": "Frontend & Mobile", "about.skills.backend": "Backend & Data",
    "about.skills.mainframe": "Mainframe", "about.skills.langs": "Languages", "about.skills.ai": "AI & Tools",
    "exp.eyebrow": "Career", "exp.title": "Experience & education",
    "exp.ntt.date": "Apr 2026 — Jul 2026", "exp.ntt.role": "Internship — Mainframe Systems",
    "exp.ntt.desc": "Development and maintenance of COBOL programs and JCL batch processes within a systems team, working on mainframe infrastructure.",
    "exp.uni.date": "2022 — Present", "exp.uni.role": "BSc in Multimedia Engineering",
    "exp.uni.desc": "Web and mobile development, graphical/interactive environments, databases and UX/UI design. Final-year project: CarGest, a vehicle management app.",
    "proj.eyebrow": "Work", "proj.title": "Projects",
    "proj.subtitle": "A selection of the projects I've worked on.",
    "proj.status.live": "Live", "proj.status.progress": "In progress",
    "proj.noma.desc": "A digital platform for discovering local artisanal products. It presents quality-certified products (DO, DOP, IGP) on an interactive map and helps find them through a conversational assistant, with a strong focus on SEO and performance.",
    "proj.epicbox.desc": "A digital asset marketplace for creators: 3D and 2D models, scripts, packs and effects. Includes a category catalog, user accounts and a shopping cart.",
    "proj.cargest.desc": "A mobile app for vehicle management: it lets you keep track of each vehicle, its documentation and maintenance in one place. It's my final-year project, currently in development.",
    "proj.link.noma": "View NOMA →", "proj.link.github": "View on GitHub →", "proj.link.soon": "Coming soon",
    "cert.eyebrow": "Continuous learning", "cert.title": "Certificates",
    "cert.empty.title": "No certificates published yet",
    "cert.empty.desc": "I'll add the certifications I complete here, such as LinkedIn Learning courses or my English level.",
    "contact.eyebrow": "Contact", "contact.title": "Let's talk",
    "contact.subtitle": "I'm open to opportunities and collaborations. Reach me through any of these channels."
  }
};

let currentLang = store.get("lang", "es");
let currentTheme = store.get("theme", "dark");

function applyI18n(lang) {
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelector("[data-lang-label]").textContent = lang === "es" ? "EN" : "ES";
}
function applyTheme(theme) { document.documentElement.setAttribute("data-theme", theme); }

document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  store.set("lang", currentLang);
  applyI18n(currentLang);
});
document.getElementById("theme-toggle").addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  store.set("theme", currentTheme);
  applyTheme(currentTheme);
});

const navToggle = document.getElementById("nav-toggle");
const mobileNav = document.getElementById("nav-links-mobile");
navToggle.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
mobileNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}));

// INIT
applyTheme(currentTheme);
applyI18n(currentLang);
document.getElementById("year").textContent = new Date().getFullYear();