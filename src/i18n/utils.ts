import { getCollection, type CollectionEntry } from "astro:content";
import { ui, defaultLang, languages, type Lang } from "./ui";
import infoEN from "@data/info.json";
import infoES from "@data/infoES.json";

const infoByLang = { en: infoEN, es: infoES };

export function getLang(locale: string | undefined): Lang {
  return locale && locale in languages ? (locale as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return (key: keyof (typeof ui)[typeof defaultLang]) =>
    ui[lang][key] ?? ui[defaultLang][key];
}

export function getInfo(lang: Lang) {
  return infoByLang[lang];
}

// Default locale lives at the root (/), others under their prefix (/es/...)
export function localizePath(lang: Lang, path: string) {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean}`;
}

// Strips the locale prefix so the same page can be linked in another language
export function pathWithoutLocale(pathname: string) {
  const [, first, ...rest] = pathname.split("/");
  return first in languages ? `/${rest.join("/")}` : pathname;
}

// Projects live in src/content/projects/<lang>/<name>.mdx; missing translations fall back to English
export async function getProjects(lang: Lang) {
  const all = await getCollection("projects");
  const byName = new Map<string, CollectionEntry<"projects">>();
  for (const l of [defaultLang, lang]) {
    all
      .filter((entry) => entry.slug.startsWith(`${l}/`))
      .forEach((entry) => byName.set(entry.data.name, entry));
  }
  return [...byName.values()];
}
