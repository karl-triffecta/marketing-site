import type { JSX } from "preact";

type ButtonProps = {
  href?: string;
  onClick?: (e: MouseEvent) => void;
  children: JSX.Element | string;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
};

export default function TriffectaButton({
  href,
  onClick,
  children,
  className = "px-4 py-2",
  type = "button",
  variant = "primary",
}: ButtonProps) {
  const baseClasses = "rounded-lg font-bold transition hover:shadow-2xl cursor-pointer";

  const variantClasses = {
    primary: "bg-action-primary text-accent hover:text-text hover:bg-accent-dark",
    secondary: "bg-accent-dark text-text hover:text-accent hover:bg-action-primary",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} class={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} class={combinedClasses}>
      {children}
    </button>
  );
}
