import { defineCollection, z } from "astro:content";

const projectSchema = z.object({
  archived: z.boolean().optional(),
  platforms: z.array(z.enum(["web", "desktop", "mobile"])).min(1),
  category: z.enum(["app", "cli", "chatBot", "game", "browserExtension"]),
  name: z.string(),
  source: z.string().url().optional(),
  link: z.string().url().optional(),
  createdAt: z.date(),
  languages: z.array(z.enum(["typescript", "golang", "delphi", "dart", "rust"])).min(1),
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
        "redis",
        "rabbitmq",
        "flutter",
        "telegram",
      ])
    )
    .optional(),
  infra: z
    .array(
      z.enum([
        "githubPages",
        "vercel",
        "notion",
        "docker",
        "opentofu",
        "gitlabci",
        "traefik",
      ])
    )
    .optional(),
});

export type ProjectSchema = z.infer<typeof projectSchema>;

const projectCollection = defineCollection({
  type: "content",
  schema: projectSchema,
});

export const collections = {
  projects: projectCollection,
};
