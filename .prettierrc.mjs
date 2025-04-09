/** @type {import("prettier").Config} */
export default {
  // Note: tailwind must come last in the list apparently: https://github.com/tailwindlabs/prettier-plugin-tailwindcss?tab=readme-ov-file#compatibility-with-other-prettier-plugins
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.js",
  overrides: [
    {
      files: ["src/**/*.astro"],
      options: {
        parser: "astro",
      },
    },
    {
      files: ["src/**/*.ts", "src/**/*.tsx"],
      options: {
        parser: "typescript",
      },
    },
    {
      files: ["src/**/*.jsx"],
      options: {
        parser: "babel",
      },
    },
  ],
};
