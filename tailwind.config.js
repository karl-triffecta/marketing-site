/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        80: "80px", // Custom margin
        32: "32px", // Custom gutter
        16: "16px", // Mobile gutter
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "32px",
          sm: "32px",
          md: "48px",
          lg: "80px",
        },
      },
      colors: {
        primary: "var(--color-primary)",
        primaryDark: "var(--color-primary-dark)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        accentDark: "var(--color-accent-dark)",
        accentLight: "var(--color-accent-dark)",
        background: "var(--color-background)",
        text: "var(--color-text)",
        textLight: "var(--color-text-light)",
        actionPrimary: "var(--color-action-primary)",
        gradient: "var(--color-gradient)",
      },
      backgroundImage: {
        "triffecta-gradient": "linear-gradient(90deg, #fad89a 25%, #4db6ac)",
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
