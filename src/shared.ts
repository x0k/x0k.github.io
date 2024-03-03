export enum Lang {
  RU = "ru",
  EN = "en",
}

const NEXT_LANGUAGES: Record<Lang, Lang> = {
  [Lang.RU]: Lang.EN,
  [Lang.EN]: Lang.RU,
};

export function getNextLang(lang: Lang): Lang {
  return NEXT_LANGUAGES[lang];
}

export enum Page {
  Resume = "/",
  Projects = "projects",
}

export const BIRTHDAY = new Date(1997, 7, 31);
export const EMAIL = "x4s9hvyny@mozmail.com";
