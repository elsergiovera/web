import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: "https://veraserg.io",
  integrations: [
  tailwind(),
  mdx(),
  sitemap(),
  robotsTxt(),
  tailwind()]
});