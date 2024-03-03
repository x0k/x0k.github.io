import { defineCollection, z } from "astro:content";

const projectSchema = z.object({
  platforms: z.array(z.enum(["web", "desktop"])),
  category: z.enum(["app", "cli", "chat-bot", "game", "browser-extension"]),
  name: z.string(),
  source: z.string(),
  createdAt: z.date(),
  lang: z.enum(["typescript", "golang", "delphi", "websocket"]),
  stack: z.array(z.enum(["svelte", "nextjs", "react", "fmx"])).optional(),
  infra: z
    .array(z.enum(["github-pages", "vercel", "notion", "docker", "terraform"]))
    .optional(),
});

const projectCollection = defineCollection({
  type: "content",
  schema: projectSchema,
});

export const collections = {
  projects: projectCollection,
};
