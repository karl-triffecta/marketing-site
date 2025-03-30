import { useEffect, useState } from "preact/hooks";
import LogoTriffecta from "./LogoTriffecta.tsx";
import LinkButtonRequestDemo from "./LinkButtonRequestDemo.tsx";
import HeaderLinks from "./HeaderLinks.tsx";
import IconMenu from "./icon/IconMenu.tsx";
import IconCross from "./icon/IconCross.tsx";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header class="relative z-50">
      <div
        class={`z-40 overflow-hidden transition-all duration-300 ${
          scrolled
            ? "fixed top-0 left-0 w-full bg-white shadow-lg sm:py-3"
            : "bg-primary p-1 sm:p-4"
        }`}
      >
        {/* Desktop Header */}
        <div class="container mx-auto hidden items-center justify-between px-4 sm:flex sm:px-8 lg:px-20">
          <a
            aria-label="Link back to the Triffecta homepage"
            href=""
            className={`block flex-shrink-0 text-center ${
              scrolled ? "mb-0" : "mb-2"
            }`}
          >
            <LogoTriffecta
              size={scrolled ? 1 : 2}
              strokeColor={scrolled ? "#fad89a" : "#FFFFFF"}
            />
          </a>

          <div className={scrolled ? "block" : "hidden"}>
            <HeaderLinks />
          </div>

          <LinkButtonRequestDemo />
        </div>

        {/* Mobile Header */}
        <div class="container mx-auto flex items-center justify-between p-3 sm:hidden">
          <a href="" class="ml-2 flex-shrink-0 text-center">
            <LogoTriffecta
              size={1}
              strokeColor={scrolled ? "#fad89a" : "#FFFFFF"}
            />
          </a>

          <nav class="mx-0 flex items-center">
            <LinkButtonRequestDemo classes="px-5 py-2" />
            <div class="text-center">
              <input type="checkbox" id="menu-toggle" class="peer hidden" />
              <label
                htmlFor="menu-toggle"
                class="ml-3 block cursor-pointer peer-checked:hidden"
              >
                <IconMenu strokeColor={scrolled ? "#000000" : "#FFFFFF"} />
              </label>
              <label
                htmlFor="menu-toggle"
                class="ml-3 block hidden cursor-pointer peer-checked:block"
              >
                <IconCross strokeColor={scrolled ? "#000000" : "#FFFFFF"} />
              </label>
              {/* Mobile Nav (visible when peer is checked) */}
              <div
                className={`fixed top-[-100%] left-0 h-0 w-full px-4 transition-all duration-300 sm:hidden ${scrolled ? "peer-checked:top-15" : "peer-checked:top-18"}`}
              >
                <HeaderLinks mobileNav={true} />
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Desktop Nav Below Header */}
      <section class="hidden bg-white py-5 text-center sm:block">
        <HeaderLinks />
      </section>
    </header>
  );
}
