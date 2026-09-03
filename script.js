/* ============================================================
   NICOLÁS HIDALGO — PORTFOLIO
   Vanilla JS, sin dependencias. Módulos:
   storage · i18n · theme · nav · scrollspy · reveal · form
   ============================================================ */
(() => {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const root = document.documentElement;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ------------------------------------------------------------
     STORAGE — localStorage con fallback en memoria
     ------------------------------------------------------------ */
  const store = {
    get(key, fallback) {
      try { return localStorage.getItem(key) ?? fallback; }
      catch { return (window.__mem || {})[key] ?? fallback; }
    },
    set(key, value) {
      try { localStorage.setItem(key, value); }
      catch { (window.__mem = window.__mem || {})[key] = value; }
    }
  };

  /* ------------------------------------------------------------
     I18N — diccionario ES/EN
     ------------------------------------------------------------ */
  const I18N = {
    es: {
      "meta.title": "Nicolás Hidalgo — Desarrollador Full-Stack",
      "a11y.skip": "Saltar al contenido",
      "a11y.home": "Inicio",
      "a11y.nav": "Navegación principal",
      "a11y.nav_mobile": "Navegación móvil",
      "a11y.theme": "Cambiar tema",
      "a11y.lang": "Cambiar idioma a inglés",
      "a11y.menu_open": "Abrir menú",
      "a11y.menu_close": "Cerrar menú",
      "a11y.footer": "Enlaces",
      "nav.about": "Sobre mí", "nav.experience": "Experiencia", "nav.projects": "Proyectos", "nav.certificates": "Certificados", "nav.contact": "Contacto",
      "hero.eyebrow": "Desarrollador Full-Stack",
      "hero.available": "Abierto a oportunidades",
      "hero.location": "Alicante, España",
      "hero.tagline": "Construyo aplicaciones web y móviles con Angular, React, Vue.js, Node.js y Firebase. Con una base poco habitual: experiencia real en sistemas mainframe de NTT Data.",
      "hero.cta_projects": "Ver proyectos", "hero.cta_contact": "Contactar",
      "about.eyebrow": "Perfil", "about.title": "Sobre mí",
      "about.p1": "Soy estudiante de último año de Ingeniería Multimedia en la Universidad de Alicante, con un perfil full-stack centrado en aplicaciones web y móviles interactivas.",
      "about.p2": "Trabajo principalmente con Angular, Ionic, React, Vue.js, Firebase y TypeScript, y lo complemento con experiencia en backend (Node.js, C#, PL/SQL) y sistemas mainframe —COBOL, JCL y DB2— adquirida durante mis prácticas en NTT Data.",
      "about.p3": "Me interesan la integración de IA en producto, el diseño de interfaces cuidadas y construir proyectos de principio a fin.",
      "about.skills.frontend": "Frontend & Móvil", "about.skills.backend": "Backend & Datos", "about.skills.mainframe": "Mainframe", "about.skills.langs": "Lenguajes", "about.skills.ai": "IA & Herramientas", "about.skills.other": "Otros lenguajes",
      "exp.eyebrow": "Trayectoria", "exp.title": "Experiencia y formación",
      "exp.ntt.date": "Abr 2026 — Jul 2026", "exp.ntt.role": "Prácticas — Sistemas Mainframe",
      "exp.ntt.desc": "Desarrollo y mantenimiento de programas COBOL y procesos batch con JCL en un equipo de sistemas, trabajando sobre infraestructura mainframe empresarial.",
      "exp.uni.date": "2022 — 2026 (TFG pendiente)", "exp.uni.role": "Grado en Ingeniería Multimedia",
      "exp.uni.desc": "Desarrollo web y móvil, entornos gráficos e interactivos, bases de datos y diseño UX/UI. TFG: CarGest, aplicación de gestión de vehículos.",
      "proj.eyebrow": "Trabajo", "proj.title": "Proyectos", "proj.subtitle": "Una selección de los proyectos en los que he trabajado.",
      "proj.status.live": "Publicado", "proj.status.progress": "En desarrollo",
      "proj.noma.desc": "Plataforma digital para descubrir productos artesanales de proximidad con distintivos de calidad (DO, DOP, IGP), mapa interactivo y asistente conversacional.",
      "proj.noma.alt": "Captura de la interfaz de Noma",
      "proj.epicbox.desc": "Marketplace de recursos digitales para creadores: modelos 3D y 2D, scripts, packs y efectos. Catálogo por categorías, cuentas de usuario y carrito.",
      "proj.epicbox.alt": "Captura de la interfaz de EpicBox",
      "proj.cargest.desc": "Aplicación móvil para gestionar tu flota de vehículos: ficha de cada coche, documentación y mantenimientos en un mismo lugar. TFG en la Universidad de Alicante.",
      "proj.cargest.alt": "Captura de la interfaz de CarGest",
      "proj.link.noma": "Ver Noma", "proj.link.github": "Ver en GitHub", "proj.link.soon": "Disponible próximamente",
      "cert.eyebrow": "Formación continua", "cert.title": "Certificados",
      "cert.empty.title": "Aún no hay certificados publicados",
      "cert.empty.desc": "Iré añadiendo aquí las certificaciones que complete, como cursos de LinkedIn Learning o mi nivel de inglés.",
      "form.name": "Nombre", "form.email": "Email", "form.subject": "Asunto", "form.message": "Mensaje",
      "form.name_ph": "Tu nombre", "form.email_ph": "tu@email.com",
      "form.subject_ph": "¿En qué puedo ayudarte?", "form.message_ph": "Cuéntame más...",
      "form.send": "Enviar mensaje", "form.sending": "Enviando...",
      "form.success": "¡Mensaje enviado! Te responderé pronto.",
      "form.error": "Algo fue mal. Inténtalo de nuevo o escríbeme directamente.",
      "contact.eyebrow": "Contacto", "contact.title": "Hablemos",
      "contact.subtitle": "Estoy abierto a oportunidades y colaboraciones. Puedes escribirme por cualquiera de estos canales."
    },
    en: {
      "meta.title": "Nicolás Hidalgo — Full-Stack Developer",
      "a11y.skip": "Skip to content",
      "a11y.home": "Home",
      "a11y.nav": "Main navigation",
      "a11y.nav_mobile": "Mobile navigation",
      "a11y.theme": "Toggle theme",
      "a11y.lang": "Switch language to Spanish",
      "a11y.menu_open": "Open menu",
      "a11y.menu_close": "Close menu",
      "a11y.footer": "Links",
      "nav.about": "About", "nav.experience": "Experience", "nav.projects": "Projects", "nav.certificates": "Certificates", "nav.contact": "Contact",
      "hero.eyebrow": "Full-Stack Developer",
      "hero.available": "Open to opportunities",
      "hero.location": "Alicante, Spain",
      "hero.tagline": "I build web and mobile apps with Angular, React, Vue.js, Node.js and Firebase. With an unusual foundation: real mainframe experience from NTT Data.",
      "hero.cta_projects": "View projects", "hero.cta_contact": "Get in touch",
      "about.eyebrow": "Profile", "about.title": "About me",
      "about.p1": "I'm a final-year Multimedia Engineering student at the University of Alicante, with a full-stack profile focused on interactive web and mobile applications.",
      "about.p2": "I mainly work with Angular, Ionic, React, Vue.js, Firebase and TypeScript, complemented by backend experience (Node.js, C#, PL/SQL) and mainframe systems —COBOL, JCL and DB2— from my internship at NTT Data.",
      "about.p3": "I'm especially interested in AI integration in products, careful interface design, and building things end-to-end.",
      "about.skills.frontend": "Frontend & Mobile", "about.skills.backend": "Backend & Data", "about.skills.mainframe": "Mainframe", "about.skills.langs": "Languages", "about.skills.ai": "AI & Tools", "about.skills.other": "Other languages",
      "exp.eyebrow": "Career", "exp.title": "Experience & education",
      "exp.ntt.date": "Apr 2026 — Jul 2026", "exp.ntt.role": "Internship — Mainframe Systems",
      "exp.ntt.desc": "Development and maintenance of COBOL programs and JCL batch processes within a systems team, working on enterprise mainframe infrastructure.",
      "exp.uni.date": "2022 — 2026 (TFG pending)", "exp.uni.role": "BSc in Multimedia Engineering",
      "exp.uni.desc": "Web and mobile development, graphical/interactive environments, databases and UX/UI design. Final-year project: CarGest, a vehicle management app.",
      "proj.eyebrow": "Work", "proj.title": "Projects", "proj.subtitle": "A selection of the projects I've worked on.",
      "proj.status.live": "Live", "proj.status.progress": "In progress",
      "proj.noma.desc": "A digital platform to discover local artisanal products with quality certifications (DO, DOP, IGP), interactive map and conversational assistant.",
      "proj.noma.alt": "Screenshot of the Noma interface",
      "proj.epicbox.desc": "Digital asset marketplace for creators: 3D and 2D models, scripts, packs and effects. Category catalog, user accounts and shopping cart.",
      "proj.epicbox.alt": "Screenshot of the EpicBox interface",
      "proj.cargest.desc": "Mobile app to manage your vehicle fleet: each car's details, documentation and maintenance in one place. Final-year project at University of Alicante.",
      "proj.cargest.alt": "Screenshot of the CarGest interface",
      "proj.link.noma": "View Noma", "proj.link.github": "View on GitHub", "proj.link.soon": "Coming soon",
      "cert.eyebrow": "Continuous learning", "cert.title": "Certificates",
      "cert.empty.title": "No certificates published yet",
      "cert.empty.desc": "I'll add the certifications I complete here, such as LinkedIn Learning courses or my English level.",
      "form.name": "Name", "form.email": "Email", "form.subject": "Subject", "form.message": "Message",
      "form.name_ph": "Your name", "form.email_ph": "you@email.com",
      "form.subject_ph": "How can I help?", "form.message_ph": "Tell me more...",
      "form.send": "Send message", "form.sending": "Sending...",
      "form.success": "Message sent! I'll get back to you soon.",
      "form.error": "Something went wrong. Try again or write to me directly.",
      "contact.eyebrow": "Contact", "contact.title": "Let's talk",
      "contact.subtitle": "I'm open to opportunities and collaborations. Reach me through any of these channels."
    }
  };

  /* ------------------------------------------------------------
     STATE — el script inline del <head> ya fijó tema e idioma
     en <html>, aquí solo lo leemos para mantener una única fuente
     ------------------------------------------------------------ */
  const state = {
    lang: root.lang === "en" ? "en" : "es",
    theme: root.getAttribute("data-theme") === "light" ? "light" : "dark",
    formStatus: null // "success" | "error" | null
  };

  const t = (key) => I18N[state.lang][key] ?? I18N.es[key] ?? "";

  /* ------------------------------------------------------------
     I18N — aplicar traducciones a texto, placeholder, alt y aria
     ------------------------------------------------------------ */
  const langLabel = $("[data-lang-label]");
  const langToggle = $("#lang-toggle");
  const burger = $("#nav-toggle");
  const formStatusEl = $("#form-status");

  function applyI18n() {
    root.lang = state.lang;
    document.title = t("meta.title");

    $$("[data-i18n]").forEach((el) => {
      const value = t(el.dataset.i18n);
      if (value) el.textContent = value;
    });
    $$("[data-i18n-placeholder]").forEach((el) => {
      const value = t(el.dataset.i18nPlaceholder);
      if (value) el.placeholder = value;
    });
    $$("[data-i18n-alt]").forEach((el) => {
      const value = t(el.dataset.i18nAlt);
      if (value) el.alt = value;
    });
    $$("[data-i18n-aria]").forEach((el) => {
      const value = t(el.dataset.i18nAria);
      if (value) el.setAttribute("aria-label", value);
    });

    if (langLabel) langLabel.textContent = state.lang === "es" ? "EN" : "ES";
    if (langToggle) langToggle.setAttribute("aria-label", t("a11y.lang"));
    syncBurgerLabel();
    syncFormStatusText();
  }

  /* ------------------------------------------------------------
     THEME — atributo + meta theme-color sincronizados
     ------------------------------------------------------------ */
  const THEME_COLORS = { dark: "#131210", light: "#f7f5f0" };
  const metaTheme = $("#meta-theme-color");

  function applyTheme() {
    root.setAttribute("data-theme", state.theme);
    if (metaTheme) metaTheme.content = THEME_COLORS[state.theme];
  }

  $("#theme-toggle")?.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    store.set("theme", state.theme);
    applyTheme();
  });

  langToggle?.addEventListener("click", () => {
    state.lang = state.lang === "es" ? "en" : "es";
    store.set("lang", state.lang);
    applyI18n();
  });

  /* ------------------------------------------------------------
     NAV — menú móvil con Escape, clic fuera y foco gestionado
     ------------------------------------------------------------ */
  const header = $("#nav");
  const mobilePanel = $("#nav-mobile");

  function setMenu(open) {
    mobilePanel.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
    syncBurgerLabel();
  }
  function syncBurgerLabel() {
    if (!burger) return;
    const open = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-label", t(open ? "a11y.menu_close" : "a11y.menu_open"));
  }

  if (burger && mobilePanel) {
    burger.addEventListener("click", () => {
      setMenu(!mobilePanel.classList.contains("open"));
    });
    $$("a", mobilePanel).forEach((link) =>
      link.addEventListener("click", () => setMenu(false))
    );
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && mobilePanel.classList.contains("open")) {
        setMenu(false);
        burger.focus();
      }
    });
    document.addEventListener("click", (event) => {
      if (mobilePanel.classList.contains("open") && !header.contains(event.target)) {
        setMenu(false);
      }
    });
  }

  /* Sombra/borde del header al hacer scroll */
  let scrollTick = false;
  function onScroll() {
    if (scrollTick) return;
    scrollTick = true;
    requestAnimationFrame(() => {
      header?.classList.toggle("scrolled", window.scrollY > 8);
      scrollTick = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ------------------------------------------------------------
     SCROLLSPY — marca la sección activa en la navegación
     ------------------------------------------------------------ */
  const navLinks = $$('.nav-links a, .nav-mobile a');
  const sections = navLinks
    .map((link) => $(link.getAttribute("href")))
    .filter(Boolean);

  function setActiveSection(id) {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      if (isActive) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((section) => spy.observe(section));
  }

  /* ------------------------------------------------------------
     REVEAL — aparición al hacer scroll con escalonado por lote
     ------------------------------------------------------------ */
  const revealEls = $$(".reveal");

  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, index) => {
            // Los elementos que entran juntos se escalonan entre sí
            entry.target.style.setProperty("--reveal-delay", `${Math.min(index * 70, 350)}ms`);
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  /* ------------------------------------------------------------
     FORM — envío a Formspree con validación y estado accesible
     ------------------------------------------------------------ */
  const contactForm = $("#contact-form");

  function setFormStatus(type) {
    state.formStatus = type;
    if (!formStatusEl) return;
    formStatusEl.className = "form-status" + (type ? ` is-${type}` : "");
    syncFormStatusText();
  }
  function syncFormStatusText() {
    if (!formStatusEl || !state.formStatus) return;
    formStatusEl.textContent = t(state.formStatus === "success" ? "form.success" : "form.error");
  }

  contactForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    setFormStatus(null);

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const button = $(".btn-submit", contactForm);
    const label = $(".btn-label", contactForm);
    button.disabled = true;
    label.textContent = t("form.sending");

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" }
      });
      if (response.ok) {
        setFormStatus("success");
        contactForm.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    } finally {
      button.disabled = false;
      label.textContent = t("form.send");
    }
  });

  /* ------------------------------------------------------------
     INIT
     ------------------------------------------------------------ */
  applyTheme();
  applyI18n();
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
