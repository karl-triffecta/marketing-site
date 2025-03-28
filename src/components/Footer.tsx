import LogoTriffecta from "./LogoTriffecta.js";
import FormSubscribeNewsletter from "./FormSubscribeNewsletter.js";
import IconLinkedIn from "./IconLinkedIn.js";
import IconTwitter from "./IconTwitter.js";

export default function Footer() {
  return (
    <footer class="bg-white">
      <section class="bg-triffecta-gradient p-1.25"></section>

      <div class="container mx-auto flex flex-col py-8 sm:flex-row sm:items-stretch sm:justify-between sm:px-8 md:px-12 lg:px-20">
        <div class="mb-8 flex-1 sm:mb-0">
          <FormSubscribeNewsletter />
        </div>
        <div class="flex flex-1 flex-col items-end justify-between pl-10">
          <a href="#top" class="mb-8 text-center lg:mb-0">
            <LogoTriffecta />
          </a>
          <div class="flex flex-col items-end space-y-2">
            <div>
              <div class="flex space-x-4">
                <a href="https://linkedin.com" target="_blank">
                  <IconLinkedIn />
                </a>
                <a href="https://x.com" target="_blank">
                  <IconTwitter />
                </a>
              </div>
            </div>
            <p>© 2025 Triffecta. All rights reserved.</p>
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
