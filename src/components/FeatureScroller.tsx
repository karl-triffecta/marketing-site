import { useLayoutEffect } from "preact/hooks";
import ImgPublishersPng from "../assets/features/publishers.png";
import ImgPublishersAvif from "../assets/features/publishers.avif";
import ImgPublishersWebp from "../assets/features/publishers.webp";
import ImgChartsPng from "../assets/features/charts.png";
import ImgChartsAvif from "../assets/features/charts.avif";
import ImgChartsWebp from "../assets/features/charts.webp";
import ImgAutomationPng from "../assets/features/automation.png";
import ImgAutomationAvif from "../assets/features/automation.avif";
import ImgAutomationWebp from "../assets/features/automation.webp";

const features = [
  {
    image: {
      png: ImgPublishersPng.src,
      avif: ImgPublishersAvif.src,
      webp: ImgPublishersWebp.src,
    },
    title: "One Platform, All Publishers",
    alt: "A graph of different publishers connected to the Triffecta platform",
    description:
      "Execute and manage campaigns effortlessly across multiple retail media networks—no more juggling multiple logins or platforms.",
  },
  {
    image: {
      png: ImgChartsPng.src,
      avif: ImgChartsAvif.src,
      webp: ImgChartsWebp.src,
    },
    title: "Unified, Actionable Insights",
    alt: "A mixture of graphs and analytics the Triffecta platform provides",
    description:
      "Access consolidated, standardized data in real time to make smarter decisions, faster. Our robust reporting and analytics empower you to act on insights with confidence.",
  },
  {
    image: {
      png: ImgAutomationPng.src,
      avif: ImgAutomationAvif.src,
      webp: ImgAutomationWebp.src,
    },
    title: "AI-Driven Efficiency",
    alt: "Examples of how Triffecta platform automates and optimizes campaigns",
    description:
      "Leverage machine learning and automation to optimize campaigns at scale. Focus on strategic growth while our intelligent technology handles the heavy lifting.",
  },
];

export default function FeatureScrollStack() {
  const className = "feature-content";

  useLayoutEffect(() => {
    const updateHeights = () => {
      if (window.innerWidth < 1024) return; // Skip on small screens

      const elements = Array.from(
        document.querySelectorAll(`.${className}`),
      ) as HTMLElement[];

      if (!elements.length) return;

      // Reset height first
      elements.forEach((el) => (el.style.height = "auto"));

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

  return (
    <section class="container mx-auto my-15">
      <div class="grid grid-cols-6 gap-4 sm:grid-cols-6 sm:gap-4 lg:grid-cols-12 lg:gap-8">
        {features.map((feature, index) => {
          // Updated staggerMap for faster completion
          const staggerMap = ["lg:mt-0", "lg:mt-[30vh]", "lg:mt-[60vh]"];
          const marginTop = staggerMap[index] || `lg:mt-[${75 + index * 15}vh]`;

          return (
            <div
              key={index}
              class="col-span-6 sm:col-span-3 lg:col-span-4 lg:p-6"
            >
              <div class={`${className} lg:sticky lg:top-[100px] ${marginTop}`}>
                <div class="relative rounded-2xl bg-white p-2.5">
                  <div class="relative flex items-center justify-center lg:h-64">
                    <picture>
                      <source
                        srcSet={`${feature.image.avif}`}
                        type="image/avif"
                      />
                      <source
                        srcSet={`${feature.image.webp}`}
                        type="image/webp"
                      />
                      <img
                        src={`${feature.image.png}`}
                        alt={feature.alt || feature.title}
                        loading="lazy"
                        decoding="async"
                        width={378}
                        height={284}
                        className="relative max-h-full w-full object-contain"
                      />
                    </picture>
                  </div>
                </div>
                <h2 class="mt-6 text-xl font-bold">{feature.title}</h2>
                <p class="text-text-light mt-2 text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
