import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D5XhpGUs.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_g1Rc6NXG.mjs';
export { renderers } from '../renderers.mjs';

const $$Demo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative bg-white py-8"> <div>Demo page</div> </section> ` })}`;
}, "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/pages/demo.astro", void 0);

const $$file = "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/pages/demo.astro";
const $$url = "/marketing-site/demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Demo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
