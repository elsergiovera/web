import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import mdx from '@astrojs/mdx';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  site: "https://veraserg.io",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", es: "es" }
      }
    }),
    robotsTxt(),
    react()
  ]
});
