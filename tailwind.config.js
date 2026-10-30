/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        section: "var(--space-section)",
        "section-stack": "var(--space-section-stack)",
        "card-gap": "var(--space-card-gap)",
        gutter: "var(--gutter-desktop)",
        header: "var(--header-height)",
      },
      maxWidth: {
        content: "var(--container-content-max)",
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
      colors: {
        // Legacy (forms, photo heroes, secondary-page CTAs)
        primary: "var(--color-primary)",
        primaryDark: "var(--color-primary-dark)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        accentDark: "var(--color-accent-dark)",
        text: "var(--color-text)",
        textLight: "var(--color-text-light)",
        actionPrimary: "var(--color-action-primary)",
        error: "var(--color-error)",
        success: "var(--color-success)",
        successLight: "var(--color-success-light)",
        // Brand / UI
        ink: {
          950: "var(--color-ink-950)",
          900: "var(--color-ink-900)",
          800: "var(--color-ink-800)",
          700: "var(--color-ink-700)",
          600: "var(--color-ink-600)",
          500: "var(--color-ink-500)",
          400: "var(--color-ink-400)",
          300: "var(--color-ink-300)",
          200: "var(--color-ink-200)",
          100: "var(--color-ink-100)",
          "on-dark": "var(--color-ink-on-dark)",
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          page: "var(--color-surface-page)",
          "dark-elevated": "var(--color-surface-dark-elevated)",
        },
        amber: {
          600: "var(--color-amber-600)",
          500: "var(--color-amber-500)",
          400: "var(--color-amber-400)",
          300: "var(--color-amber-300)",
        },
        teal: {
          800: "var(--color-teal-800)",
          700: "var(--color-teal-700)",
          600: "var(--color-teal-600)",
          500: "var(--color-teal-500)",
        },
        rose: {
          600: "var(--color-rose-600)",
        },
        "header-glass": "var(--color-header-glass)",
        "border-default": "var(--color-border-default)",
        "action-dark": "var(--color-action-dark)",
        "focus-ring": "var(--color-focus-ring)",
      },
      backgroundImage: {
        "action-emphasis-gradient": "var(--gradient-action-emphasis)",
      },
      borderRadius: {
        "design-sm": "var(--radius-sm)",
        "design-md": "var(--radius-md)",
        "design-lg": "var(--radius-lg)",
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        elevated: "var(--shadow-elevated)",
        cta: "var(--shadow-cta)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
        ],
        display: [
          "Space Grotesk",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
