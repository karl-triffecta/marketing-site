const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/signals.module.CjXCsi4e.js","_astro/preact.module.Dz6_IuHR.js","_astro/hooks.module.CsoCk8bO.js"])))=>i.map(i=>d[i]);
import{_ as h,G as b,E as S}from"./preact.module.Dz6_IuHR.js";const N="modulepreload",k=function(n){return"/marketing-site/"+n},_={},A=function(f,a,d){let m=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),r=s?.nonce||s?.getAttribute("nonce");m=Promise.allSettled(a.map(t=>{if(t=k(t),t in _)return;_[t]=!0;const o=t.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${l}`))return;const e=document.createElement("link");if(e.rel=o?"stylesheet":N,o||(e.as="script"),e.crossOrigin="",e.href=t,r&&e.setAttribute("nonce",r),document.head.appendChild(e),o)return new Promise((i,c)=>{e.addEventListener("load",i),e.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${t}`)))})}))}function g(s){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=s,window.dispatchEvent(r),!r.defaultPrevented)throw s}return m.then(s=>{for(const r of s||[])r.status==="rejected"&&g(r.reason);return f().catch(g)})},y=({value:n,name:f,hydrate:a=!0})=>n?h(a?"astro-slot":"astro-static-slot",{name:f,dangerouslySetInnerHTML:{__html:n}}):null;y.shouldComponentUpdate=()=>!1;var p=y;const u=new Map;var R=n=>async(f,a,{default:d,...m},{client:g})=>{if(!n.hasAttribute("ssr"))return;for(const[t,o]of Object.entries(m))a[t]=h(p,{value:o,name:t});if(n.dataset.preactSignals){const{signal:t}=await A(async()=>{const{signal:l}=await import("./signals.module.CjXCsi4e.js");return{signal:l}},__vite__mapDeps([0,1,2]));let o=JSON.parse(n.dataset.preactSignals);for(const[l,e]of Object.entries(o))if(Array.isArray(e))e.forEach(([i,c])=>{const v=a[l][c];let E=v;if(typeof c!="string"&&(E=v[0],c=v[1]),!u.has(i)){const w=t(E);u.set(i,w)}a[l][c]=u.get(i)});else{if(!u.has(e)){const i=t(a[l]);u.set(e,i)}a[l]=u.get(e)}}(g!=="only"?b:S)(h(f,a,d!=null?h(p,{value:d}):d),n),n.addEventListener("astro:unmount",()=>S(null,n),{once:!0})};export{R as default};
