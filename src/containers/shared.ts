import type { CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<"projects">["data"] 

export const CATEGORTY_TO_ICON: Record<
  Project["category"],
  string
> = {
  app: "lucide:layout-grid",
  browserExtension: "lucide:chrome",
  cli: "lucide:terminal",
  chatBot: "lucide:bot-message-square",
  game: "lucide:gamepad-2",
};

export const CATEGORTY_TO_TITLE: Record<
  Project["category"],
  string
> = {
  app: "Application",
  browserExtension: "Browser Extension",
  cli: "CLI",
  chatBot: "Chat Bot",
  game: "Game",
};

export const LANG_TO_ICON: Record<
  Project["lang"],
  string
> = {
  typescript: "simple-icons:typescript",
  golang: "simple-icons:go",
  delphi: "simple-icons:delphi",
};

export const LANG_TO_TITLE: Record<
  Project["lang"],
  string
> = {
  typescript: "TypeScript",
  golang: "Go",
  delphi: "Delphi",
};

export const PLATFORM_TO_ICON: Record<
  Exclude<Project["platforms"], undefined>[number],
  string
> = {
  web: "lucide:globe",
  desktop: "lucide:monitor",
};

export const PLATFORM_TO_TITLE: Record<
  Exclude<Project["platforms"], undefined>[number],
  string
> = {
  web: "Web",
  desktop: "Desktop",
};

export const STACK_TO_ICON: Record<
  Exclude<Project["stack"], undefined>[number],
  string
> = {
  react: "simple-icons:react",
  svelte: "simple-icons:svelte",
  nextjs: "simple-icons:nextdotjs",
  fmx: "simple-icons:embarcadero",
  websocket: "lucide:unplug",
  pwa: "simple-icons:pwa",
};

export const STACK_TO_TITLE: Record<
  Exclude<Project["stack"], undefined>[number],
  string
> = {
  react: "React",
  svelte: "Svelte",
  nextjs: "Next.js",
  fmx: "FireMonkey",
  websocket: "WebSockets",
  pwa: "Progressive Web App",
};

export const INFRA_TO_ICON: Record<
  Exclude<Project["infra"], undefined>[number],
  string
> = {
  githubPages: "simple-icons:github",
  notion: "simple-icons:notion",
  vercel: "simple-icons:vercel",
  docker: "simple-icons:docker",
  terraform: "simple-icons:terraform",
};

export const INFRA_TO_TITLE: Record<
  Exclude<Project["infra"], undefined>[number],
  string
> = {
  githubPages: "GitHub Pages",
  notion: "Notion",
  vercel: "Vercel",
  docker: "Docker",
  terraform: "Terraform",
};
