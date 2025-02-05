// @ts-check
import { fileURLToPath } from "node:url";
import { defineConfig, envField } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import paraglide from "@inlang/paraglide-astro";

// https://astro.build/config
export default defineConfig({
  site: "https://x0k.online",
  integrations: [
    icon(),
    paraglide({
      project: "./project.inlang",
      outdir: "./src/paraglide",
    }),
  ],
  i18n: {
    defaultLocale: "ru",
    locales: ["ru", "en"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
    fallback: {
      en: "ru",
    },
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
  env: {
    validateSecrets: true,
    schema: {
      GIT_HUB_TOKEN: envField.string({ access: "secret", context: "server" }),
    },
  },
});
