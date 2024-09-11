import type { CollectionEntry } from "astro:content";

type Project = CollectionEntry<"projects">["data"];

export const CATEGORTY_TO_ICON: Record<Project["category"], string> = {
  app: "lucide:layout-grid",
  browserExtension: "lucide:chrome",
  cli: "lucide:terminal",
  chatBot: "lucide:bot-message-square",
  game: "lucide:gamepad-2",
};

export const CATEGORTY_TO_TITLE: Record<Project["category"], string> = {
  app: "Application",
  browserExtension: "Browser Extension",
  cli: "CLI",
  chatBot: "Chat Bot",
  game: "Game",
};

export const LANG_TO_ICON: Record<Project["languages"][number], string> = {
  typescript: "simple-icons:typescript",
  golang: "simple-icons:go",
  delphi: "simple-icons:delphi",
  dart: "simple-icons:dart",
  rust: "simple-icons:rust",
};

export const LANG_TO_TITLE: Record<Project["languages"][number], string> = {
  typescript: "TypeScript",
  golang: "Go",
  delphi: "Delphi",
  dart: "Dart",
  rust: "Rust",
};

export const PLATFORM_TO_ICON: Record<Project["platforms"][number], string> = {
  web: "lucide:globe",
  desktop: "lucide:monitor",
  mobile: "lucide:smartphone",
};

export const PLATFORM_TO_TITLE: Record<
  Exclude<Project["platforms"], undefined>[number],
  string
> = {
  web: "Web",
  desktop: "Desktop",
  mobile: "Mobile",
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
  nestjs: "simple-icons:nestjs",
  redis: "simple-icons:redis",
  rabbitmq: "simple-icons:rabbitmq",
  flutter: "simple-icons:flutter",
  telegram: "simple-icons:telegram",
  webassembly: "simple-icons:webassembly",
  astro: "simple-icons:astro",
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
  nestjs: "NestJS",
  redis: "Redis",
  rabbitmq: "RabbitMQ",
  flutter: "Flutter",
  telegram: "Telegram Bot",
  webassembly: "WebAssembly",
  astro: "Astro",
};

export const INFRA_TO_ICON: Record<
  Exclude<Project["infra"], undefined>[number],
  string
> = {
  githubPages: "simple-icons:github",
  notion: "simple-icons:notion",
  vercel: "simple-icons:vercel",
  docker: "simple-icons:docker",
  opentofu: "simple-icons:opentofu",
  gitlabci: "simple-icons:gitlab",
  traefik: "simple-icons:traefikproxy",
};

export const INFRA_TO_TITLE: Record<
  Exclude<Project["infra"], undefined>[number],
  string
> = {
  githubPages: "GitHub Pages",
  notion: "Notion",
  vercel: "Vercel",
  docker: "Docker",
  opentofu: "OpenTofu",
  gitlabci: "GitLab CI",
  traefik: "Traefik Proxy",
};
