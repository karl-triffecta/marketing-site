import { useRef, useEffect } from 'preact/hooks';
import { jsx } from 'preact/jsx-runtime';

function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 700
}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add("is-visible");
        observer.disconnect();
      }
    }, {
      threshold: 0.1
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return jsx("div", {
    ref,
    class: `triffecta-fade-in transition-all duration-700 ease-out will-change-transform ${className}`,
    style: {
      transitionDelay: `${delay}ms`,
      transitionDuration: `${duration}ms`
    },
    children
  });
}

export { FadeIn as F };
