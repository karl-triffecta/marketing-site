import { c as createComponent, a as renderScript, r as renderTemplate, e as createAstro, d as renderComponent, f as renderSlot, g as renderHead, b as addAttribute } from './astro/server_D5XhpGUs.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                           */
import { useState, useEffect } from 'preact/hooks';
import { jsx, jsxs } from 'preact/jsx-runtime';
import 'clsx';

function IconTriffecta({
  size = "100px",
  strokeColor = "var(--color-accent)",
  strokeWidth = "1.2",
  transform = "rotate(180)"
}) {
  return jsx("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: strokeColor,
    "stroke-width": strokeWidth,
    "stroke-linecap": "round",
    "stroke-linejoin": "miter",
    transform,
    children: jsx("polygon", {
      points: "12 3 2.5 21 21.5 21 12 3"
    })
  });
}

function LogoTriffecta({
  size = 1,
  strokeColor = "var(--color-accent)"
}) {
  let largeTextSize = "27px", smallTextSize = "20px", showSmallText = false, iconSize = "50px", iconLeft = "-17px", iconTop = "-2px";
  if (size > 1) {
    largeTextSize = "55px";
    iconSize = "100px";
    iconLeft = "-33.5px";
    iconTop = "-4px";
    showSmallText = true;
  }
  return jsx("div", {
    class: "flex flex-col",
    children: jsxs("div", {
      class: "pointer-events-none flex flex-col items-start",
      children: [jsxs("div", {
        class: "relative",
        children: [jsx("div", {
          class: `absolute`,
          style: {
            left: iconLeft,
            top: iconTop
          },
          children: jsx(IconTriffecta, {
            size: iconSize,
            strokeColor
          })
        }), jsx("div", {
          class: "relative",
          children: jsx("span", {
            style: {
              "font-size": largeTextSize
            },
            children: "Triffecta"
          })
        })]
      }), showSmallText && jsx("div", {
        class: "relative top-[-25px] right-[2.5px] flex h-[0] w-full justify-end font-semibold",
        children: jsx("span", {
          style: {
            "font-size": smallTextSize
          },
          children: "Retail Media"
        })
      })]
    })
  });
}

function TriffectaButton({
  href,
  onClick,
  children,
  className = "px-4 py-2",
  type = "button",
  variant = "primary"
}) {
  const baseClasses = "rounded-lg font-bold transition hover:shadow-2xl cursor-pointer";
  const variantClasses = {
    primary: "bg-action-primary text-accent hover:text-text hover:bg-accent-dark",
    secondary: "bg-accent-dark text-text hover:text-accent hover:bg-action-primary"
  };
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  if (href) {
    return jsx("a", {
      href,
      class: combinedClasses,
      children
    });
  }
  return jsx("button", {
    type,
    onClick,
    class: combinedClasses,
    children
  });
}

function LinkButtonRequestDemo({
  classes = "px-15 py-2"
}) {
  return jsx(TriffectaButton, {
    href: "/demo",
    className: classes,
    children: "Request a Demo"
  });
}

function HeaderLinks({
  mobileNav = false
}) {
  return jsx("nav", {
    className: `relative ${mobileNav ? "w-full space-y-4 bg-white text-center" : ""}`,
    style: mobileNav ? {
      width: "calc(100% + 40px)",
      left: "-20px"
    } : {},
    children: jsxs("ul", {
      className: mobileNav ? "" : "flex justify-center space-x-8",
      children: [jsx("li", {
        className: mobileNav ? "border-t-1 border-b-1 border-[#CCCCCC] py-4" : "",
        children: jsx("a", {
          href: "team",
          class: "hover:underline",
          children: "Meet the Team"
        })
      }), jsx("li", {
        className: mobileNav ? "border-b-1 border-[#CCCCCC] py-4" : "",
        children: jsx("a", {
          href: "contact",
          class: "hover:underline",
          children: "Contact Us"
        })
      }), jsx("li", {
        className: mobileNav ? "border-b-1 border-[#CCCCCC] py-4" : "",
        children: jsx("a", {
          href: "https://portal.triffecta.com/",
          class: "hover:underline",
          children: "Sign In"
        })
      })]
    })
  });
}

function IconMenu({
  size = "40px",
  strokeColor = "#FFFFFF"
}) {
  return jsxs("svg", {
    width: size,
    height: size,
    stroke: strokeColor,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [jsx("path", {
      d: "M4 18L20 18",
      "stroke-width": "2",
      "stroke-linecap": "round"
    }), jsx("path", {
      d: "M4 12L20 12",
      "stroke-width": "2",
      "stroke-linecap": "round"
    }), jsx("path", {
      d: "M4 6L20 6",
      "stroke-width": "2",
      "stroke-linecap": "round"
    })]
  });
}

function IconCross({
  size = "40px",
  strokeColor = "#FFFFFF"
}) {
  return jsx("svg", {
    width: size,
    height: size,
    stroke: strokeColor,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: jsx("path", {
      d: "M19 5L4.99998 19M5.00001 5L19 19",
      stroke: strokeColor,
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })
  });
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return jsxs("header", {
    class: "relative z-50",
    children: [jsxs("div", {
      class: `overflow-hidden transition-all duration-300 ${scrolled ? "fixed left-0 z-40 w-full bg-white sm:top-0 sm:py-3" : "bg-primary p-1 sm:p-4"}`,
      children: [jsxs("div", {
        class: "container mx-auto hidden items-center justify-between px-4 sm:flex sm:px-8 lg:px-20",
        children: [jsx("a", {
          href: "#top",
          id: "top",
          className: `block flex-shrink-0 text-center ${scrolled ? "mb-0" : "mb-2"}`,
          children: jsx(LogoTriffecta, {
            size: scrolled ? 1 : 2,
            strokeColor: scrolled ? "#fad89a" : "#FFFFFF"
          })
        }), jsx("div", {
          className: scrolled ? "block" : "hidden",
          children: jsx(HeaderLinks, {})
        }), jsx(LinkButtonRequestDemo, {})]
      }), jsxs("div", {
        class: "container mx-auto flex items-center justify-between p-3 sm:hidden",
        children: [jsx("a", {
          href: "#top",
          id: "top",
          class: "ml-2 flex-shrink-0 text-center",
          children: jsx(LogoTriffecta, {
            size: 1,
            strokeColor: scrolled ? "#fad89a" : "#FFFFFF"
          })
        }), jsxs("nav", {
          class: "mx-0 flex items-center",
          children: [jsx(LinkButtonRequestDemo, {
            classes: "px-5 py-2"
          }), jsxs("div", {
            class: "text-center",
            children: [jsx("input", {
              type: "checkbox",
              id: "menu-toggle",
              class: "peer hidden"
            }), jsx("label", {
              htmlFor: "menu-toggle",
              class: "ml-3 block cursor-pointer peer-checked:hidden",
              children: jsx(IconMenu, {
                strokeColor: scrolled ? "#000000" : "#FFFFFF"
              })
            }), jsx("label", {
              htmlFor: "menu-toggle",
              class: "ml-3 block hidden cursor-pointer peer-checked:block",
              children: jsx(IconCross, {
                strokeColor: scrolled ? "#000000" : "#FFFFFF"
              })
            }), jsx("div", {
              className: `fixed top-[-100%] left-0 h-0 w-full px-4 transition-all duration-300 sm:hidden ${scrolled ? "peer-checked:top-15" : "peer-checked:top-18"}`,
              children: jsx(HeaderLinks, {
                mobileNav: true
              })
            })]
          })]
        })]
      })]
    }), jsx("section", {
      class: "hidden bg-white py-5 text-center sm:block",
      children: jsx(HeaderLinks, {})
    })]
  });
}

function FormSubscribeNewsletter() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());
    alert(`To submit: ${JSON.stringify(values, null, 2)}`);
    event.currentTarget.reset();
  };
  return jsx("div", {
    class: "rounded-2xl bg-white lg:w-md",
    children: jsxs("form", {
      class: "flex flex-col space-y-8 sm:flex-row lg:flex-col",
      onSubmit: handleSubmit,
      children: [jsx("h3", {
        class: "text-xl font-bold",
        children: "Subscribe to our Newsletter"
      }), jsx("input", {
        autocomplete: "on",
        id: "email",
        placeholder: "Email",
        name: "email",
        required: true,
        type: "email",
        class: "rounded-xl border-1 border-[#CCCCCC] py-2 pl-4"
      }), jsx(TriffectaButton, {
        type: "submit",
        children: "Subscribe"
      })]
    })
  });
}

function IconLinkedIn({
  size = "25px"
}) {
  return jsx("svg", {
    width: size,
    height: size,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    class: "text-text-light hover:text-primary-dark transition",
    children: jsx("path", {
      fill: "currentColor",
      d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
    })
  });
}

function IconTwitter({
  size = "25px"
}) {
  return jsx("svg", {
    width: size,
    height: size,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    class: "text-text-light hover:text-primary-dark transition",
    children: jsx("path", {
      fill: "currentColor",
      d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
    })
  });
}

function Footer() {
  return jsxs("footer", {
    class: "bg-white",
    children: [jsx("section", {
      class: "bg-triffecta-gradient p-1.25"
    }), jsxs("div", {
      class: "container mx-auto flex flex-col py-8 sm:flex-row sm:items-stretch sm:justify-between sm:px-8 md:px-12 lg:px-20",
      children: [jsx("div", {
        class: "mb-8 flex-1 sm:mb-0",
        children: jsx(FormSubscribeNewsletter, {})
      }), jsxs("div", {
        class: "flex flex-1 flex-col items-end justify-between pl-10",
        children: [jsx("a", {
          href: "#top",
          class: "mb-8 text-center lg:mb-0",
          children: jsx(LogoTriffecta, {})
        }), jsxs("div", {
          class: "flex flex-col items-end space-y-2",
          children: [jsx("div", {
            children: jsxs("div", {
              class: "flex space-x-4",
              children: [jsx("a", {
                href: "https://linkedin.com",
                target: "_blank",
                children: jsx(IconLinkedIn, {})
              }), jsx("a", {
                href: "https://x.com",
                target: "_blank",
                children: jsx(IconTwitter, {})
              })]
            })
          }), jsx("p", {
            children: "© 2025 Triffecta. All rights reserved."
          }), jsxs("div", {
            children: [jsx("a", {
              href: "privacy",
              class: "hover:underline",
              children: "Privacy Policy"
            }), jsx("span", {
              class: "mx-2",
              children: "|"
            }), jsx("a", {
              href: "cookies",
              class: "hover:underline",
              children: "Cookie Policy"
            })]
          })]
        })]
      })]
    })]
  });
}

function CookieBanner({
  baseUrl = ""
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const cookiesAccepted = document.cookie.split(";").some((item) => item.trim().startsWith("cookies_accepted="));
    if (cookiesAccepted) {
      loadAnalytics();
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, []);
  const acceptCookies = () => {
    document.cookie = `cookies_accepted=true; max-age=${60 * 60 * 24 * 30}; path=/`;
    setVisible(false);
    loadAnalytics();
  };
  const loadAnalytics = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args) {
      window.dataLayer.push(args);
    }
    gtag("js", /* @__PURE__ */ new Date());
    gtag("config", "G-C1LG8PF9LR");
  };
  if (!visible) return null;
  return jsx("div", {
    class: "text-accent-dark fixed bottom-0 left-0 z-50 flex w-full flex-row items-center justify-between space-y-0 px-4 py-3 shadow-md",
    style: {
      backgroundColor: "rgba(38, 50, 56, 0.85)"
    },
    children: jsxs("div", {
      class: "container mx-auto flex items-center justify-between px-4 sm:px-20",
      children: [jsxs("p", {
        class: "mr-2",
        children: ["This website uses cookies to ensure you get the best experience. See our", " ", jsx("a", {
          href: `${baseUrl}privacy`,
          class: "underline",
          children: "Privacy"
        }), " ", "and", " ", jsx("a", {
          href: `${baseUrl}cookies`,
          class: "underline",
          children: "Cookie"
        }), " ", "Policies for more."]
      }), jsx(TriffectaButton, {
        variant: "secondary",
        onClick: acceptCookies,
        children: "Accept"
      })]
    })
  });
}

const $$DevConsole = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/components/DevConsole.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/components/DevConsole.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("http://localhost:4321/marketing-site/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const base = "/marketing-site/";
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><!-- When not hosted on domain --><base', '><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"', '><title>Triffecta | Revolutionizing Retail Media</title><meta name="description" content="Triffecta | Revolutionizing Retail Media"><script async src="https://www.googletagmanager.com/gtag/js?id=G-C1LG8PF9LR"><\/script><!--\n    TODO: SEO tags... <meta property="og:title" content="">\n    --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet"><link rel="icon"', ' sizes="any"><link rel="icon"', ' type="image/svg+xml"><link rel="apple-touch-icon" href="/icon.png"><meta name="theme-color" content="#fad89a"><link rel="manifest" href="site.webmanifest">', '</head> <body class="bg-background"> ', " <main> ", " </main> ", " ", " ", " </body></html>"])), addAttribute(base, "href"), addAttribute(Astro2.generator, "content"), addAttribute(`${base}favicon.ico`, "href"), addAttribute(`${base}favicon.svg`, "href"), renderHead(), renderComponent($$result, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/components/Header.tsx", "client:component-export": "default" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/components/Footer.tsx", "client:component-export": "default" }), renderComponent($$result, "DevConsole", $$DevConsole, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/components/DevConsole.astro", "client:component-export": "default" }), renderComponent($$result, "CookieBanner", CookieBanner, { "baseUrl": base, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/components/CookieBanner.tsx", "client:component-export": "default" }));
}, "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/layouts/Layout.astro", void 0);

export { $$Layout as $, IconTriffecta as I, LinkButtonRequestDemo as L, TriffectaButton as T, IconLinkedIn as a };
