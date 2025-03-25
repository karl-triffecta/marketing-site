import { useEffect, useState } from "preact/hooks";
import LogoTriffecta from "./LogoTriffecta.jsx";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      class={`transition-all duration-300 ${
        scrolled
          ? "fixed top-0 left-0 z-40 w-full bg-white py-3"
          : "bg-primary p-4"
      }`}
    >
      <div class="container mx-auto flex flex-col items-center transition-all duration-300 sm:flex-row sm:justify-between sm:px-8 md:px-12 lg:px-20">
        <a
          href="#top"
          className={scrolled ? "mb-2 sm:mb-0 lg:mb-0" : "lg:mb-2"}
          class="mb-4 text-center"
          id="top"
        >
          <LogoTriffecta
            size={scrolled ? 1 : 2}
            strokeColor={scrolled ? "#fad89a" : "#FFFFFF"}
          />
        </a>
        <nav class="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
          <a
            href="#demo-signup"
            class="bg-action-primary text-accent rounded-lg px-15 py-2 font-bold"
          >
            Request a Demo
          </a>
          <a
            href="https://portal.triffecta.com/"
            class="px-4 font-bold hover:underline"
          >
            Sign In
          </a>
        </nav>
      </div>
    </header>
  );
}
