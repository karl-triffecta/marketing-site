// @ts-check
import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Setup for base path before domain moved to production
  output: "static",
  base: "/marketing-site",
  site: "http://localhost:4321/marketing-site/",
  //
  integrations: [preact()],
  vite: {
    plugins: [tailwindcss()],
  },
});
