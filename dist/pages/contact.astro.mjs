import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_D5XhpGUs.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout, I as IconTriffecta } from '../chunks/Layout_g1Rc6NXG.mjs';
import { I as ImgHeroTop } from '../chunks/hero-top_BOQ3snct.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-secondary relative overflow-hidden py-18 text-white"> <div class="relative z-10 container mx-auto"> <div class="relative z-20"> <div class="inline-block rounded-lg bg-[rgba(38,50,56,0.75)] p-4"> <h1 class="text-4xl font-bold text-wrap text-clip sm:text-5xl md:text-6xl">
Contact Us
</h1> </div> </div> <div class="absolute top-[-20%] left-[-75%] z-10 sm:top-[-300%] sm:left-[-20%]"> ${renderComponent($$result2, "IconTriffecta", IconTriffecta, { "size": "1000px", "strokeWidth": "0.7", "transform": "rotate(212)" })} </div> </div> <img id="hero"${addAttribute(ImgHeroTop.src, "src")} alt="A picture of a woman shopping for groceries" fetchpriority="high" class="absolute top-0 left-0 z-0 h-full w-full object-cover object-top"> </section> <section class="overflow-hidden bg-white py-10"> <div class="relative container mx-auto text-lg"> <p>
If you have any inquiries or are curious about what Triffecta does,
        please send us a message and a member of our team will contact you
        shortly.
</p> <p class="mt-6">
Green Lea,<br>
Mytholmroyd,<br>
Hebden Bridge,<br>
West Yorkshire,<br>
HX7 5AW
</p> <p class="mt-6"> <a href="tel:+447790831528">07790 831528</a><br><a class="text-primary-dark mt-4 hover:underline" href="mailto:sales@triffecta.com">sales@triffecta.com</a> </p> <p class="mt-6">Company Number: 15554685</p> </div> </section> ` })}`;
}, "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/pages/contact.astro", void 0);

const $$file = "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/pages/contact.astro";
const $$url = "/marketing-site/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
