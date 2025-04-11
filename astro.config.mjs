// @ts-check
import { fileURLToPath } from "node:url";
import { defineConfig, envField } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import { paraglideVitePlugin } from "@inlang/paraglide-js";

// https://astro.build/config
export default defineConfig({
  site: "https://x0k.dev",
  integrations: [icon()],
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
    plugins: [
      tailwindcss(),
      paraglideVitePlugin({
        project: "./project.inlang",
        outdir: "./src/paraglide",
        strategy: ["url", "baseLocale"],
        urlPatterns: [
          {
            pattern:
              ":protocol://:domain(.*)::port?/:locale(ru|en)?/:path(.*)?",
            deLocalizedNamedGroups: { locale: null },
            localizedNamedGroups: {
              ru: { locale: "ru" },
              en: { locale: "en" },
            },
          },
        ],
      }),
    ],
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
