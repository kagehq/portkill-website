import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
// import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";
import vue from "@astrojs/vue";
import node from '@astrojs/node';

// import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://envkit.co",
  server: {
    port: 8081,
    host: true,
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        limitInputPixels: false,
      },
    },
  },
  integrations: [
    tailwind(),
    robotsTxt(),
    sitemap(),
    mdx(),
    vue({
      appEntrypoint: "/src/pages/_app",
    }),
  ],
  // output: "server",
  // adapter: node({
  //   mode: 'standalone'
  // }),
  // output: "server",
  // adapter: cloudflare()
});
