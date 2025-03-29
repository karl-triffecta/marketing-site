const ImgHeroTop = new Proxy({"src":"/marketing-site/_astro/hero-top.B7348nJ_.png","width":1440,"height":463,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/assets/hero-top.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/karllieser/Documents/GitHub/triffecta/marketing-site/src/assets/hero-top.png");
							return target[name];
						}
					});

export { ImgHeroTop as I };
