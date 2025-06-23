import { useEffect, useRef } from "preact/hooks";

type Props = {
  webmSrc: string;
  mp4Src: string;
  poster: string;
  className?: string;
  delay?: number; // Delay in milliseconds before the video starts
};

export default function HeroBackgroundVideo({
  webmSrc,
  mp4Src,
  poster,
  className = "",
  delay = 1000,
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleLoad = () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const connection =
        (navigator as Navigator & { connection?: { effectiveType?: string } })
          .connection?.effectiveType || "4g";

      if (!prefersReducedMotion && ["4g", "5g"].includes(connection)) {
        setTimeout(() => {
          const video = videoRef.current;
          if (video) {
            video.load();
            video.classList.add("opacity-100");
          }
        }, delay);
      }
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <video
      ref={videoRef}
      autoplay
      loop
      muted
      playsInline
      preload="none"
      poster={poster}
      class={`${className}`}
      aria-hidden="true"
      tabindex={-1}
    >
      <source src={webmSrc} type="video/webm" />
      <source src={mp4Src} type="video/mp4" />
    </video>
  );
}
