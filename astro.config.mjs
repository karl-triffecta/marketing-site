// @ts-check
import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { minify } from "terser";

// https://astro.build/config
export default defineConfig({
  /*
    ##########################################
    Setup for base path before domain moved to production
    ##########################################
  */
  output: "static",
  site: "https://triffecta.com",
  //base: "/marketing-site",
  //site: "http://localhost:4321/marketing-site/",
  /*
    ##########################################
    ##########################################
  */
  integrations: [preact()],
  vite: {
    plugins: [
      tailwindcss(),
      viteStaticCopy({
        targets: [
          {
            src: "public/js/vendor/*.js",
            dest: "js/vendor",
            transform: async (content) => {
              const minified = await minify(content.toString());
              return minified.code || null;
            },
          },
          {
            src: "public/js/*.json",
            dest: "js",
            transform: async (content) => {
              const json = JSON.parse(content.toString());
              return JSON.stringify(json) || null;
            },
          },
        ],
      }),
    ],
  },
});
