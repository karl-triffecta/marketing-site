import type { JSX } from "preact";

type ButtonVariant = "primary" | "secondary" | "dark" | "emphasis";

type ButtonProps = {
  href?: string;
  onClick?: (e: MouseEvent) => void;
  children: JSX.Element | string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
};

const baseClasses =
  "inline-flex items-center justify-center font-sans transition duration-150 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring";

const variantClasses: Record<ButtonVariant, string> = {
  // Forms, cookie banner, secondary-page CTAs
  primary:
    "rounded-lg font-bold px-4 py-2 bg-action-primary text-accent hover:text-text hover:bg-accent-dark hover:shadow-2xl",
  secondary:
    "rounded-lg font-bold px-4 py-2 bg-accent-dark text-text hover:text-accent hover:bg-action-primary hover:shadow-2xl",
  // Header, hero, newsletter, article CTAs
  dark: "rounded-design-sm border border-ink-700/40 bg-action-dark px-[21px] py-[11px] text-sm font-medium leading-5 text-ink-on-dark shadow-card hover:bg-ink-800",
  // Homepage final CTA
  emphasis:
    "rounded-design-md bg-action-emphasis-gradient px-8 py-4 text-base font-bold leading-6 text-ink-900 shadow-cta hover:brightness-105",
};

export default function TriffectaButton({
  href,
  onClick,
  children,
  className = "",
  type = "button",
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  const combinedClasses =
    `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} class={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      class={combinedClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
