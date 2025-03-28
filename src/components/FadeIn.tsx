import { useEffect, useRef } from "preact/hooks";
import type { JSX } from "preact";

type FadeInProps = {
  children: JSX.Element | JSX.Element[];
  className?: string;
  delay?: number;
  duration?: number;
};

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 700,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add("is-visible");
        observer.disconnect();
      }
    }, {
      threshold: 0.1,
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      class={`triffecta-fade-in transition-all duration-700 ease-out will-change-transform ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}
