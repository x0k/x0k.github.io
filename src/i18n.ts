import { Lang, Page } from './shared';

export enum Label {
  Name = "person.name",
  ResumePage = "page.resume",
  ProjectsPage = "page.projects",
}

const strings: Record<Lang, Record<Label, string>> = {
  [Lang.RU]: {
    [Label.Name]: "Красильников Р.Б.",
    [Label.ResumePage]: "Резюме",
    [Label.ProjectsPage]: "Проекты",
  },
  [Lang.EN]: {
    [Label.Name]: "R.B. Krasilnikov",
    [Label.ResumePage]: "VC",
    [Label.ProjectsPage]: "Projects",
  },
}

export function useTranslations(lang: Lang) {
  return (label: Label) => strings[lang][label];
}

const PAGE_TO_LABEL: Record<Page, Label> = {
  [Page.Resume]: Label.ResumePage,
  [Page.Projects]: Label.ProjectsPage,
}

export function getPageLabel(page: Page) {
  return PAGE_TO_LABEL[page]
}
