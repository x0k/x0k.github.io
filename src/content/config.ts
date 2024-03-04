import { defineCollection, z } from "astro:content";

const projectSchema = z.object({
  archived: z.boolean().optional(),
  platforms: z.array(z.enum(["web", "desktop"])).min(1),
  category: z.enum(["app", "cli", "chatBot", "game", "browserExtension"]),
  name: z.string(),
  source: z.string().url(),
  link: z.string().url().optional(),
  createdAt: z.date(),
  lang: z.enum(["typescript", "golang", "delphi"]),
  stack: z
    .array(z.enum(["svelte", "nextjs", "react", "fmx", "websocket", "pwa"]))
    .optional(),
  infra: z
    .array(z.enum(["githubPages", "vercel", "notion", "docker", "terraform"]))
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
