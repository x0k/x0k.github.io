import { Page } from "./shared";

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

export enum Label {
  Name = "person.name",
  ResumePage = "page.resume",
  ProjectsPage = "page.projects",
  Lang = "project.lang",
  Stack = "project.stack",
  Infra = "project.infra",
}

const strings: Record<Lang, Record<Label, string>> = {
  [Lang.RU]: {
    [Label.Name]: "Красильников Р.Б.",
    [Label.ResumePage]: "Резюме",
    [Label.ProjectsPage]: "Проекты",
    [Label.Lang]: "Языки",
    [Label.Stack]: "Технологии",
    [Label.Infra]: "Инфраструктура",
  },
  [Lang.EN]: {
    [Label.Name]: "R.B. Krasilnikov",
    [Label.ResumePage]: "VC",
    [Label.ProjectsPage]: "Projects",
    [Label.Lang]: "Languages",
    [Label.Stack]: "Technologies",
    [Label.Infra]: "Infrastructure",
  },
};

export function useTranslations(lang: Lang) {
  return (label: Label) => strings[lang][label];
}

const PAGE_TO_LABEL: Record<Page, Label> = {
  [Page.Resume]: Label.ResumePage,
  [Page.Projects]: Label.ProjectsPage,
};

export function getPageLabel(page: Page) {
  return PAGE_TO_LABEL[page];
}
