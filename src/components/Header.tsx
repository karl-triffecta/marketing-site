import { useState } from "preact/hooks";
import LogoTriffecta from "./LogoTriffecta.tsx";
import HeaderLinks from "./HeaderLinks.tsx";
import TriffectaButton from "./TriffectaButton.tsx";
import IconMenu from "./icon/IconMenu.tsx";
import IconCross from "./icon/IconCross.tsx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <header class="border-ink-200 bg-header-glass sticky top-0 z-50 border-b backdrop-blur-[6px]">
      {/* Desktop: auto | 1fr | auto | 1fr | auto so nav is optically
          centered in the free space between logo and actions (Figma). */}
      <div class="container-content h-header grid grid-cols-[auto_1fr_auto] items-center gap-x-4 lg:grid-cols-[auto_1fr_auto_1fr_auto] lg:gap-x-0">
        <a
          href="/"
          aria-label="Link back to the Triffecta homepage"
          class="text-ink-900 focus-visible:outline-focus-ring focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <LogoTriffecta size={1} strokeColor="var(--color-amber-500)" />
        </a>

        <div class="hidden lg:block" aria-hidden="true"></div>

        <nav class="hidden lg:block" aria-label="Primary">
          <HeaderLinks />
        </nav>

        <div class="hidden lg:block" aria-hidden="true"></div>

        <div class="hidden items-center lg:flex">
          <a
            href="https://portal.triffecta.com/"
            class="text-ink-700 hover:text-ink-900 focus-visible:outline-focus-ring text-sm leading-5 font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Sign in
          </a>
          <TriffectaButton href="/lets-talk" variant="dark" className="ml-5">
            Let's talk retail media
          </TriffectaButton>
        </div>

        <div class="col-start-3 flex items-center gap-2 justify-self-end lg:hidden">
          <TriffectaButton
            href="/lets-talk"
            variant="dark"
            className="!px-3 !py-2 text-xs"
          >
            Let's talk
          </TriffectaButton>
          <button
            type="button"
            class="rounded-design-sm text-ink-900 hover:bg-ink-100 focus-visible:outline-focus-ring inline-flex size-11 items-center justify-center transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <IconCross size="24px" strokeColor="currentColor" />
            ) : (
              <IconMenu size="24px" strokeColor="currentColor" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          class="border-ink-200 bg-surface border-t lg:hidden"
          aria-label="Mobile"
        >
          <div class="container-content py-2">
            <HeaderLinks mobileNav onNavigate={closeMenu} />
          </div>
        </nav>
      )}
    </header>
  );
}
