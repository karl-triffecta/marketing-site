const navLinkClass =
  "text-sm font-medium leading-5 text-ink-600 transition hover:text-ink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring";

const mobileLinkClass =
  "block border-b border-ink-100 py-4 text-base font-medium text-ink-700 transition hover:text-ink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring";

export const primaryNav = [
  { href: "/team", label: "Meet the Team" },
  { href: "/contact", label: "Contact Us" },
  { href: "/latest", label: "Insights" },
] as const;

type HeaderLinksProps = {
  mobileNav?: boolean;
  onNavigate?: () => void;
};

export default function HeaderLinks({
  mobileNav = false,
  onNavigate,
}: HeaderLinksProps) {
  if (mobileNav) {
    return (
      <ul class="w-full">
        {primaryNav.map((item) => (
          <li key={item.href}>
            <a href={item.href} class={mobileLinkClass} onClick={onNavigate}>
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="https://portal.triffecta.com/"
            class={mobileLinkClass}
            onClick={onNavigate}
          >
            Sign in
          </a>
        </li>
      </ul>
    );
  }

  return (
    <ul class="flex items-center gap-8">
      {primaryNav.map((item) => (
        <li key={item.href}>
          <a href={item.href} class={navLinkClass}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
