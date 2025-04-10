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
          DEFAULT: "1rem", // 16px
          sm: "1rem",
          md: "2rem",
          lg: "2rem", // 32px instead of 48px
          xl: "4rem", // 64px
          "2xl": "6rem", // 96px for very large screens
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
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
        error: "var(--color-error)",
        errorLight: "var(--color-error-light)",
        success: "var(--color-success)",
        successLight: "var(--color-success-light)",
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
