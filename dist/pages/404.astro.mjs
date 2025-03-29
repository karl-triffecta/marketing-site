import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderScript, b as addAttribute, d as renderComponent } from '../chunks/astro/server_D5XhpGUs.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_g1Rc6NXG.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Particles = createComponent(($$result, $$props, $$slots) => {
  const baseUrl = "/marketing-site";
  return renderTemplate(_a || (_a = __template(["<script", "></script> ", " ", '<div id="particles-js" class="absolute inset-0 z-0"></div>'])), addAttribute(`${baseUrl}/js/vendor/particles.js`, "src"), renderScript($$result, "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/components/Particles.astro?astro&type=script&index=0&lang.ts"), maybeRenderHead());
}, "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/components/Particles.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative flex h-[60vh] items-center justify-center bg-white py-8"> <div class="container mx-auto flex flex-col py-8 sm:flex-row sm:items-stretch sm:justify-between sm:px-8 md:px-12 lg:px-20"> <div class="z-10 w-full text-center"> <h1 class="mb-8 text-6xl">Page Not Found</h1> <p>Sorry, but the page you were trying to view does not exist.</p> </div> ${renderComponent($$result2, "Particles", $$Particles, {})} </div> </section> ` })}`;
}, "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/pages/404.astro", void 0);

const $$file = "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/pages/404.astro";
const $$url = "/marketing-site/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
