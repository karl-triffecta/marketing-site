import{A as c,y as l}from"./hooks.module.CsoCk8bO.js";import{u as f}from"./jsxRuntime.module.WrhyN42J.js";import"./preact.module.Dz6_IuHR.js";function v({children:r,className:s="",delay:i=0,duration:o=700}){const n=c(null);return l(()=>{const t=n.current;if(!t)return;const e=new IntersectionObserver(([a])=>{a.isIntersecting&&(t.classList.add("is-visible"),e.disconnect())},{threshold:.1});return e.observe(t),()=>e.disconnect()},[]),f("div",{ref:n,class:`triffecta-fade-in transition-all duration-700 ease-out will-change-transform ${s}`,style:{transitionDelay:`${i}ms`,transitionDuration:`${o}ms`},children:r})}export{v as default};
