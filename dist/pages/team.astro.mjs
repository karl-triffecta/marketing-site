import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_D5XhpGUs.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as IconLinkedIn, $ as $$Layout, I as IconTriffecta } from '../chunks/Layout_g1Rc6NXG.mjs';
import { jsxs, jsx } from 'preact/jsx-runtime';
import { F as FadeIn } from '../chunks/FadeIn_BgmUbDAM.mjs';
export { renderers } from '../renderers.mjs';

const ImgTeamKen = new Proxy({"src":"/marketing-site/_astro/ken.BhaCd_Ag.png","width":200,"height":200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/assets/team/ken.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/assets/team/ken.png");
							return target[name];
						}
					});

const ImgTeamMark = new Proxy({"src":"/marketing-site/_astro/mark.CkBA66UM.png","width":170,"height":170,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/assets/team/mark.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/assets/team/mark.png");
							return target[name];
						}
					});

const ImgTeamLesley = new Proxy({"src":"/marketing-site/_astro/lesley.56Z75Zk9.png","width":746,"height":828,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/assets/team/lesley.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/assets/team/lesley.png");
							return target[name];
						}
					});

function IconIncognito({
  size = "25px",
  stroke = "#000000"
}) {
  return jsxs("svg", {
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    children: [jsx("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M5.371 1.072a1 1 0 00-1.32.612L2.28 7H1a1 1 0 000 2h14a1 1 0 100-2h-1.28l-1.77-5.316a1 1 0 00-1.32-.612L8 2.123 5.371 1.072zM11.613 7l-1.226-3.678-2.016.806a1 1 0 01-.742 0l-2.016-.806L4.387 7h7.226z",
      fill: stroke
    }), jsx("path", {
      d: "M2 11a1 1 0 100 2c.552 0 .98.475 1.244.959A2 2 0 005 15h.558a2 2 0 001.898-1.367l.105-.317a.463.463 0 01.878 0l.105.316A2 2 0 0010.441 15H11a2 2 0 001.755-1.041c.266-.484.693-.959 1.245-.959a1 1 0 100-2H2z",
      fill: stroke
    })]
  });
}

const team = [{
  image: ImgTeamKen.src,
  name: "Ken Platt",
  title: "Founder & CEO",
  link: "https://www.linkedin.com/in/ken-platt-retail-media-expert/",
  description: "eCommerce expert and Retail Media Veteran with 20+ years experience spanning the retail, consultancy & agency industries. Led Retail Media business through acquisition, and scales to $80 across the US in 2 years."
}, {
  image: ImgTeamMark.src,
  name: "Mark Briggs",
  title: "CTO",
  link: "https://www.linkedin.com/in/mark-briggs-1755394b/",
  description: "Product leader with 20 years experience across multiple industries inc. financial & ad-tech. Worked with US retailers and brands for the last 5 years."
}, {
  image: ImgTeamLesley.src,
  name: "Lesley Mace",
  title: "Operations & Customer Lead",
  link: "https://www.linkedin.com/in/lesley-mace-3471409/",
  description: "Global Alliance Director. Led customer success operation in retail media across 10 US retailers."
}, {
  name: "Incognito",
  title: "Technical Wizard",
  description: "Over a decade of technical experience building complex software and systems."
}, {
  name: "Incognito",
  title: "Technical Wizard",
  description: "Over a decade of technical experience building complex software and systems."
}, {
  name: "Incognito",
  title: "",
  description: ""
}];
function TeamMembers() {
  return jsx("section", {
    class: "container mx-auto my-15",
    children: jsx("div", {
      class: "grid grid-cols-6 gap-4 sm:grid-cols-6 sm:gap-4 lg:grid-cols-12 lg:gap-8",
      children: team.map((member, index) => {
        return jsx("div", {
          class: "col-span-6 sm:col-span-3 lg:col-span-4 lg:p-6",
          children: jsx(FadeIn, {
            delay: 300 * index,
            duration: 3e3,
            children: jsxs("div", {
              class: "relative",
              children: [jsx("div", {
                class: "relative rounded-2xl bg-white",
                children: jsx("div", {
                  class: "relative flex h-70 items-center justify-center",
                  children: member.image ? jsx("img", {
                    src: member.image,
                    alt: `A picture of ${member.name}`,
                    class: "absolute top-0 left-0 z-0 h-full w-full rounded-2xl object-cover object-center"
                  }) : jsx("div", {
                    class: "relative top-[-1%]",
                    children: jsx(IconIncognito, {
                      size: "200px",
                      stroke: "var(--color-primary-dark)"
                    })
                  })
                })
              }), jsxs("div", {
                class: "mt-4 flex items-center justify-between",
                children: [jsxs("div", {
                  children: [jsx("h2", {
                    class: "text-xl font-bold",
                    children: member.name
                  }), jsx("h3", {
                    class: "text-l text-text-light font-bold",
                    children: member.title
                  })]
                }), member.link && jsx("a", {
                  href: member.link,
                  target: "_blank",
                  class: "",
                  children: jsx(IconLinkedIn, {
                    size: "30px"
                  })
                })]
              }), jsx("p", {
                class: "text-text-light mt-2 text-lg",
                children: member.description
              })]
            })
          })
        }, index);
      })
    })
  });
}

const ImgHeroLights = new Proxy({"src":"/marketing-site/_astro/hero-lights.cYDSpZD1.png","width":1440,"height":463,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/assets/hero-lights.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/assets/hero-lights.png");
							return target[name];
						}
					});

const $$Team = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-secondary relative overflow-hidden py-18 text-white"> <div class="relative z-10 container mx-auto"> <div class="relative z-20"> <div class="inline-block rounded-lg bg-[rgba(38,50,56,0.75)] p-4"> <h1 class="text-4xl font-bold text-wrap text-clip sm:text-5xl md:text-6xl">
Meet the <span class="text-accent-dark">Team</span> </h1> </div> </div> <div class="absolute top-[-20%] left-[-75%] z-10 sm:top-[-300%] sm:left-[-20%]"> ${renderComponent($$result2, "IconTriffecta", IconTriffecta, { "size": "1000px", "strokeWidth": "0.7", "transform": "rotate(212)" })} </div> </div> <img id="hero"${addAttribute(ImgHeroLights.src, "src")} alt="A picture of a woman shopping for groceries" fetchpriority="high" class="absolute top-0 left-0 z-0 h-full w-full object-cover object-bottom"> </section> ${renderComponent($$result2, "TeamMembers", TeamMembers, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/components/TeamMembers.tsx", "client:component-export": "default" })} ` })}`;
}, "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/pages/team.astro", void 0);

const $$file = "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/pages/team.astro";
const $$url = "/marketing-site/team";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Team,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
