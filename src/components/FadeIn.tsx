import { useEffect, useRef, useState } from "preact/hooks";
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
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [effectiveDuration, setEffectiveDuration] = useState(duration);

  useEffect(() => {
    const prefersMotion = window.matchMedia(
      "(prefers-reduced-motion: no-preference)",
    ).matches;

    const isMobile = window.innerWidth <= 480;

    setShouldAnimate(prefersMotion);

    if (isMobile && duration > 1000) {
      setEffectiveDuration(1000);
    } else {
      setEffectiveDuration(duration);
    }
  }, []);

  useEffect(() => {
    if (!shouldAnimate) return;

    const handle = window.requestIdleCallback(() => {
      const el = ref.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.disconnect();
          }
        },
        { threshold: 0.1 },
      );

      observer.observe(el);
    });

    return () => window.cancelIdleCallback(handle);
  }, [shouldAnimate]);

  if (!shouldAnimate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      class={`triffecta-fade-in transition-all duration-700 ease-out ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${effectiveDuration}ms`,
      }}
    >
      {children}
    </div>
  );
}
