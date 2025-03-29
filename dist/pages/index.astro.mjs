import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_D5XhpGUs.mjs';
import 'kleur/colors';
import 'html-escaper';
import { T as TriffectaButton, $ as $$Layout, L as LinkButtonRequestDemo, I as IconTriffecta } from '../chunks/Layout_g1Rc6NXG.mjs';
import { F as FadeIn } from '../chunks/FadeIn_BgmUbDAM.mjs';
import { useLayoutEffect } from 'preact/hooks';
import { jsx, jsxs } from 'preact/jsx-runtime';
import { I as ImgHeroTop } from '../chunks/hero-top_BOQ3snct.mjs';
export { renderers } from '../renderers.mjs';

const ImgPublishers = new Proxy({"src":"/marketing-site/_astro/publishers.oNBVdEwI.png","width":1024,"height":768,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/assets/publishers.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/assets/publishers.png");
							return target[name];
						}
					});

const ImgCharts = new Proxy({"src":"/marketing-site/_astro/charts.Cq4sDuZj.png","width":512,"height":384,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/assets/charts.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/assets/charts.png");
							return target[name];
						}
					});

const ImgAutomation = new Proxy({"src":"/marketing-site/_astro/automation.efT7BY1k.png","width":475,"height":330,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/assets/automation.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/assets/automation.png");
							return target[name];
						}
					});

const features = [{
  image: ImgPublishers.src,
  title: "One Platform, All Publishers",
  alt: "A graph of different publishers connected to the Triffecta platform",
  description: "Execute and manage campaigns effortlessly across multiple retail media networks—no more juggling multiple logins or platforms."
}, {
  image: ImgCharts.src,
  title: "Unified, Actionable Insights",
  alt: "A mixture of graphs and analytics the Triffecta platform provides",
  description: "Access consolidated, standardized data in real time to make smarter decisions, faster. Our robust reporting and analytics empower you to act on insights with confidence."
}, {
  image: ImgAutomation.src,
  title: "AI-Driven Efficiency",
  alt: "Examples of how Triffecta platform automates and optimizes campaigns",
  description: "Leverage machine learning and automation to optimize campaigns at scale. Focus on strategic growth while our intelligent technology handles the heavy lifting."
}];
function FeatureScrollStack() {
  const className = "feature-content";
  useLayoutEffect(() => {
    const updateHeights = () => {
      if (window.innerWidth < 1024) return;
      const elements = Array.from(document.querySelectorAll(`.${className}`));
      if (!elements.length) return;
      elements.forEach((el) => el.style.height = "auto");
      const maxHeight = Math.max(...elements.map((el) => el.offsetHeight));
      elements.forEach((el) => {
        el.style.height = `${maxHeight}px`;
      });
    };
    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => {
      window.removeEventListener("resize", updateHeights);
    };
  }, []);
  return jsx("section", {
    class: "container mx-auto my-15",
    children: jsx("div", {
      class: "grid grid-cols-6 gap-4 sm:grid-cols-6 sm:gap-4 lg:grid-cols-12 lg:gap-8",
      children: features.map((feature, index) => {
        const staggerMap = ["lg:mt-[32vh]", "lg:mt-[60vh]", "lg:mt-[90vh]"];
        const marginTop = staggerMap[index] || `lg:mt-[${90 + index * 30}vh]`;
        return jsx("div", {
          class: "col-span-6 sm:col-span-3 lg:col-span-4 lg:p-6",
          children: jsxs("div", {
            class: `${className} lg:sticky lg:top-[100px] ${marginTop}`,
            children: [jsx("div", {
              class: "relative rounded-2xl bg-white p-2.5",
              children: jsx("div", {
                class: "relative flex lg:h-64 items-center justify-center",
                children: jsx("img", {
                  src: feature.image,
                  alt: feature.alt || feature.title,
                  class: "relative max-h-full w-full object-contain"
                })
              })
            }), jsx("h2", {
              class: "mt-6 text-xl font-bold",
              children: feature.title
            }), jsx("p", {
              class: "text-text-light mt-2 text-lg",
              children: feature.description
            })]
          })
        }, index);
      })
    })
  });
}

function FormSignupDemo() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());
    alert(`To submit: ${JSON.stringify(values, null, 2)}`);
    event.currentTarget.reset();
  };
  return jsx("div", {
    class: "rounded-2xl bg-white p-10 lg:w-md",
    children: jsxs("form", {
      id: "demo-signup",
      class: "flex flex-col space-y-8",
      onSubmit: handleSubmit,
      children: [jsx("h3", {
        class: "text-center text-3xl font-bold",
        children: "Demo Signup"
      }), jsx("input", {
        autocomplete: "on",
        id: "name",
        placeholder: "Name",
        name: "name",
        required: true,
        type: "text",
        class: "focus:border-accent rounded-xl border-1 border-[#CCCCCC] py-2 pl-4"
      }), jsx("input", {
        autocomplete: "on",
        id: "company",
        placeholder: "Company",
        name: "company",
        type: "text",
        class: "focus:border-accent rounded-xl border-1 border-[#CCCCCC] py-2 pl-4"
      }), jsx("input", {
        autocomplete: "on",
        id: "email",
        placeholder: "Email",
        name: "email",
        required: true,
        type: "email",
        class: "focus:border-accent rounded-xl border-1 border-[#CCCCCC] py-2 pl-4"
      }), jsx(TriffectaButton, {
        type: "submit",
        children: "Request a Demo"
      })]
    })
  });
}

const ImgHeroBottom = new Proxy({"src":"/marketing-site/_astro/hero-bottom.DyRRtdm5.png","width":1439,"height":367,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/assets/hero-bottom.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/assets/hero-bottom.png");
							return target[name];
						}
					});

const ImgMacbook = new Proxy({"src":"/marketing-site/_astro/mackbook.D1GGG9fU.png","width":800,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/assets/mackbook.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/assets/mackbook.png");
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-secondary relative overflow-hidden py-18 text-white"> <div class="relative z-10 container mx-auto"> ${renderComponent($$result2, "FadeIn", FadeIn, { "client:load": true, "delay": 300, "duration": 3e3, "client:component-hydration": "load", "client:component-path": "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/components/FadeIn.tsx", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` <div class="relative z-20"> <div class="inline-block rounded-lg bg-[rgba(38,50,56,0.75)] p-4"> <h1 class="text-4xl font-bold text-wrap text-clip sm:text-5xl md:text-6xl">
Revolutionising Retail Media
</h1> <p class="text-accent-dark mt-4 inline-block text-4xl font-bold sm:text-5xl">
Simplified, Scalable, Smarter
</p> </div> <div class="mt-6 mb-6 inline-block rounded-lg bg-[rgba(38,50,56,0.75)] p-4"> <p class="text-lg">
Unlock the full potential of retail media with the only aggregator
              designed specifically for retailers.
</p> </div> <div class="block"> ${renderComponent($$result3, "LinkButtonRequestDemo", LinkButtonRequestDemo, {})} </div> </div> <div class="absolute top-[-50%] right-[-40%] z-10 lg:top-[-80%] lg:right-[-10%]"> ${renderComponent($$result3, "IconTriffecta", IconTriffecta, { "size": "1000px", "strokeWidth": "0.7", "transform": "rotate(212)" })} </div> ` })} </div> <img id="hero"${addAttribute(ImgHeroTop.src, "src")} alt="A picture of a woman shopping for groceries" fetchpriority="high" class="absolute top-0 left-0 z-0 h-full w-full object-cover object-[70%_center] sm:object-center"> </section> <section class="bg-triffecta-gradient p-1.25"></section> ${renderComponent($$result2, "FeatureScroller", FeatureScrollStack, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/components/FeatureScroller.tsx", "client:component-export": "default" })} <section class="overflow-hidden bg-white py-10"> <div class="relative container mx-auto"> ${renderComponent($$result2, "FadeIn", FadeIn, { "client:load": true, "delay": 300, "duration": 3e3, "client:component-hydration": "load", "client:component-path": "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/components/FadeIn.tsx", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` <div class="relative z-20"> <section class="grid grid-cols-6 gap-4 sm:grid-cols-6 sm:gap-4 lg:grid-cols-12 lg:gap-8"> <div class="col-span-6 sm:col-span-3 lg:col-span-4 lg:p-6"> <div class="relative flex h-full items-center justify-center"> <img id="macbook"${addAttribute(ImgMacbook.src, "src")} alt="A picture of a laptop using the Triffeca platform" class="relative lg:top-[2%] lg:scale-160"> </div> </div> <div class="col-span-6 sm:col-span-3 lg:col-span-8 lg:p-6"> <h2 class="text-4xl font-bold">Why Triffecta?</h2> <ul class="mt-6 space-y-8"> <li class="flex"> <span class="text-accent-dark mt-1 text-xl sm:mt-2.5">▼</span> <p class="ml-2 text-lg"> <span class="font-bold">Built for Retailers:</span> We understand
                    the nuances of retail media and have designed every feature with
                    your needs in mind.
</p> </li> <li class="flex"> <span class="text-accent-dark mt-1 text-xl sm:mt-2.5">▼</span> <p class="ml-2 text-lg"> <span class="font-bold">Scalable Solutions:</span> Whether you’re
                    managing a single store or multiple brands, our platform adapts
                    to your growth.
</p> </li> <li class="flex"> <span class="text-accent-dark mt-1 text-xl sm:mt-2.5">▼</span> <p class="ml-2 text-lg"> <span class="font-bold">Seamless Onboarding & Support:
</span>
Our dedicated customer success team is here to ensure you’re
                    up and running in no time.
</p> </li> </ul> </div> </section> </div> <div class="absolute top-[-60%] left-[-40%] z-10 lg:top-[-80%] lg:left-[5%]"> ${renderComponent($$result3, "IconTriffecta", IconTriffecta, { "size": "1400px", "strokeWidth": "0.4", "transform": "rotate(164)" })} </div> ` })} </div> </section> <section class="bg-triffecta-gradient p-1.25"></section> <section class="container mx-auto my-15"> <div class="rounded-2xl bg-white p-6 py-8"> <p class="text-lg">
“Since partnering with Triffecta, we’ve seen a 40% increase in campaign
        efficiency across all our retail media channels.”
</p> <div class="mt-12 flex items-center"> <div class="bg-primary mr-5 h-11 w-11 rounded-full p-5"></div> <div class="flex flex-col"> <span class="font-semibold">Retail Media Manager</span> <span class="text-text-light">National Grocery Chain</span> </div> </div> </div> </section> <section class="relative overflow-hidden bg-white py-18 text-white"> <div class="relative z-10 container mx-auto"> ${renderComponent($$result2, "FadeIn", FadeIn, { "client:load": true, "delay": 300, "duration": 3e3, "client:component-hydration": "load", "client:component-path": "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/components/FadeIn.tsx", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` <div class="relative z-20"> <div class="inline-block rounded-lg bg-[rgba(38,50,56,0.75)] p-4"> <h2 class="text-6xl font-bold">
Ready to <span class="text-accent-dark">Simplify</span>, <span class="text-accent-dark">Scale</span>, and <span class="text-accent-dark">Succeed</span>?
</h2> </div> <div class="mt-6 mb-6 inline-block rounded-lg bg-[rgba(38,50,56,0.75)] p-4"> <p class="text-lg">
Discover how Triffecta can revolutionize your retail media
              campaigns.
</p> </div> <div class="block"> ${renderComponent($$result3, "LinkButtonRequestDemo", LinkButtonRequestDemo, {})} </div> </div> <div class="absolute top-[-150%] left-[-130%] z-10 lg:top-[-350%] lg:left-[-8%]"> ${renderComponent($$result3, "IconTriffecta", IconTriffecta, { "size": "1400px", "strokeWidth": "0.4", "transform": "rotate(99)" })} </div> ` })} </div> <img id="hero"${addAttribute(ImgHeroBottom.src, "src")} alt="A picture of woman looking at products on shelves" fetchpriority="high" class="absolute top-0 left-0 z-0 h-full w-full object-cover"> </section> <section class="bg-triffecta-gradient p-1.25"></section> <section class="container mx-auto my-15 lg:flex lg:justify-center"> ${renderComponent($$result2, "FormSignupDemo", FormSignupDemo, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/components/FormSignupDemo.tsx", "client:component-export": "default" })} </section> ` })}`;
}, "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/pages/index.astro", void 0);

const $$file = "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/pages/index.astro";
const $$url = "/marketing-site";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
