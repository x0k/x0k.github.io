import { fileURLToPath } from "node:url";
import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import paraglide from "@inlang/paraglide-astro";

// https://astro.build/config
export default defineConfig({
  site: "https://x0k.online",
  integrations: [
    tailwind(),
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
