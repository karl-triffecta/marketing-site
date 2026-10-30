import LogoTriffecta from "./LogoTriffecta.js";
import FormSubscribeNewsletter from "./FormSubscribeNewsletter.tsx";
import IconLinkedIn from "./icon/IconLinkedIn.tsx";

const footerLinkClass =
  "text-sm leading-5 text-ink-600 transition hover:text-ink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring";

const legalLinkClass =
  "text-xs leading-4 text-ink-500 transition hover:text-ink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring";

const columnHeadingClass =
  "font-display text-xs font-bold tracking-[0.6px] text-ink-900 uppercase";

type FooterLink = { href: string; label: string };

/** Real routes only — Figma mock platform/product links omitted (see stage-4b docs). */
const platformLinks: FooterLink[] = [
  { href: "/team", label: "Meet the Team" },
  { href: "/lets-talk", label: "Let's talk" },
  { href: "/contact", label: "Contact team" },
  { href: "https://portal.triffecta.com/", label: "Portal sign in" },
];

type FooterProps = {
  showNewsletter?: boolean;
  /** Latest posts from Layout (newest first). */
  researchLinks?: FooterLink[];
};

export default function Footer({
  showNewsletter = true,
  researchLinks = [],
}: FooterProps) {
  return (
    <footer class="border-ink-200 bg-surface border-t pt-16 pb-12">
      <div class="container-content flex flex-col">
        {/* Brand + link columns */}
        <div class="border-ink-100 grid grid-cols-1 gap-12 border-b pb-16 md:grid-cols-12 md:gap-12">
          <div class="md:col-span-5">
            <a
              href="/"
              class="text-ink-900 focus-visible:outline-focus-ring inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              aria-label="Link back to the Triffecta homepage"
            >
              <LogoTriffecta size={2} strokeColor="var(--color-amber-500)" />
            </a>
            <p class="text-ink-500 mt-4 max-w-sm text-sm leading-[22.75px]">
              The single operating layer for retail media execution,
              cross-network synchronization and normalized analytics.
            </p>
          </div>

          <nav class="md:col-span-3" aria-labelledby="footer-platform-heading">
            <h2 id="footer-platform-heading" class={columnHeadingClass}>
              Platform
            </h2>
            <ul class="mt-3 flex flex-col gap-2">
              {platformLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} class={footerLinkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav class="md:col-span-4" aria-labelledby="footer-research-heading">
            <h2 id="footer-research-heading" class={columnHeadingClass}>
              Research &amp; Perspectives
            </h2>
            <ul class="mt-3 flex flex-col gap-2">
              {researchLinks.map((item) => {
                const external = /^https?:\/\//.test(item.href);
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      class={footerLinkClass}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Newsletter */}
        {showNewsletter && (
          <div class="border-ink-100 flex flex-col gap-8 border-b py-12 lg:flex-row lg:items-center lg:justify-between">
            <div class="max-w-md">
              <h2 class="font-display text-ink-900 text-2xl leading-8 font-bold tracking-[-0.6px]">
                You'll Want to Say You Were Here First
              </h2>
              <p class="text-ink-500 mt-2 text-sm leading-5">
                Get thoughtful takes on the retail media landscape, network API
                changes, and strategic playbooks.
              </p>
            </div>
            <div class="w-full max-w-md">
              <FormSubscribeNewsletter layout="footer" />
            </div>
          </div>
        )}

        {/* Legal row */}
        <div class="flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p class="text-ink-500 text-xs leading-4">
            © {new Date().getFullYear()} Triffecta Retail Media. All rights
            reserved.
          </p>
          <div class="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="/privacy" class={legalLinkClass}>
              Privacy Policy
            </a>
            <a href="/cookies" class={legalLinkClass}>
              Cookie Policy
            </a>
            <a
              href="https://www.linkedin.com/company/triffecta-com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Triffecta on LinkedIn"
              class="text-ink-500 hover:text-ink-700 focus-visible:outline-focus-ring transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <IconLinkedIn size="16px" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
