import LogoTriffecta from "./LogoTriffecta.js";
import FormSubscribeNewsletter from "./FormSubscribeNewsletter.tsx";
import IconLinkedIn from "./icon/IconLinkedIn.tsx";
import IconTwitter from "./icon/IconTwitter.tsx";

export default function Footer() {
  return (
    <footer class="bg-white">
      <section class="bg-triffecta-gradient p-1.25"></section>

      <div class="container mx-auto flex flex-col py-8 sm:flex-row sm:items-stretch sm:justify-between sm:px-8 md:px-12 lg:px-20">
        <div class="mb-8 flex-1 sm:mb-0">
          <FormSubscribeNewsletter />
        </div>
        <div class="flex flex-1 flex-col items-end justify-between pl-10">
          <a
            href=""
            class="mb-8 text-center lg:mb-0"
            aria-label="Link back to the Triffecta homepage"
          >
            <LogoTriffecta />
          </a>
          <div class="flex flex-col items-end space-y-2">
            <div>
              <div class="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/triffecta-com/"
                  target="_blank"
                  aria-label="Read more about Triffecta on LinkedIn"
                >
                  <IconLinkedIn />
                </a>
                {/*
                <a
                  href="https://x.com"
                  target="_blank"
                  aria-label="Read more about Triffecta on X"
                >
                  <IconTwitter />
                </a>
                */}
              </div>
            </div>
            <p>© 2025 Triffecta</p>
            <div>
              <a href="privacy" class="hover:underline">
                Privacy Policy
              </a>
              <span class="mx-2">|</span>
              <a href="cookies" class="hover:underline">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
