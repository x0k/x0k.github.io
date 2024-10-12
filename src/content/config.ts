import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projectSchema = z.object({
  archived: z.boolean().optional(),
  platforms: z.array(z.enum(["web", "desktop", "mobile"])).min(1),
  category: z.enum([
    "app",
    "cli",
    "chatBot",
    "game",
    "browserExtension",
    "package",
  ]),
  name: z.string(),
  source: z.string().url().optional(),
  link: z.string().url().optional(),
  createdAt: z.date(),
  languages: z
    .array(z.enum(["typescript", "golang", "delphi", "dart", "rust"]))
    .min(1),
  stack: z
    .array(
      z.enum([
        "svelte",
        "nextjs",
        "react",
        "fmx",
        "websocket",
        "pwa",
        "nestjs",
        "flutter",
        "telegram",
        "webassembly",
        "astro",
      ])
    )
    .optional(),
  infra: z
    .array(
      z.enum([
        "redis",
        "rabbitmq",
        "githubPages",
        "vercel",
        "notion",
        "docker",
        "opentofu",
        "gitlabci",
        "traefik",
        "nix",
        "npm",
      ])
    )
    .optional(),
});

export type ProjectSchema = z.infer<typeof projectSchema>;

const projectCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
  schema: projectSchema,
});

export const collections = {
  projects: projectCollection,
};
