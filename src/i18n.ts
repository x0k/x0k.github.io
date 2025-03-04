import { Page } from './shared';
import type { Locale } from './paraglide/runtime';
import * as m from './paraglide/messages';

export const NEXT_LANG: Record<Locale, Locale> = {
  en: "ru",
  ru: "en",
}

export const PAGE_TITLES: Record<Page, () => string> = {
  [Page.Resume]: m.resumePageTitle,
  [Page.Projects]: m.projectsPageTitle,
}
