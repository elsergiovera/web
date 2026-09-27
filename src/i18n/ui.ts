export const languages = {
  en: "English",
  es: "Español",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const ui = {
  en: {
    "hero.im": "I'm",
    "projects.featured": "FEATURED PROJECTS",
    "experience.recent": "RECENT EXPERIENCE",
    "experience.downloadCv": "Download CV",
    "footer.from": "from",
    "footer.with": "with",
    "nav.switchLang": "Ver en español",
    "project.github": "View source code on GitHub",
    "project.url": "Visit project",
    "project.cover": "Project cover",
    "profile.alt": "Profile picture",
  },
  es: {
    "hero.im": "Soy",
    "projects.featured": "PROYECTOS DESTACADOS",
    "experience.recent": "EXPERIENCIA RECIENTE",
    "experience.downloadCv": "Descargar CV",
    "footer.from": "desde",
    "footer.with": "con",
    "nav.switchLang": "View in English",
    "project.github": "Ver código fuente en GitHub",
    "project.url": "Visitar proyecto",
    "project.cover": "Portada del proyecto",
    "profile.alt": "Foto de perfil",
  },
} as const;
