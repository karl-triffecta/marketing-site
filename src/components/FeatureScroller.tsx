import { useLayoutEffect } from "preact/hooks";
import ImgPublishers from "../assets/publishers.png";
import ImgCharts from "../assets/charts.png";
import ImgAutomation from "../assets/automation.png";

const features = [
  {
    image: ImgPublishers.src,
    title: "One Platform, All Publishers",
    alt: "A graph of different publishers connected to the Triffecta platform",
    description:
      "Execute and manage campaigns effortlessly across multiple retail media networks—no more juggling multiple logins or platforms.",
  },
  {
    image: ImgCharts.src,
    title: "Unified, Actionable Insights",
    alt: "A mixture of graphs and analytics the Triffecta platform provides",
    description:
      "Access consolidated, standardized data in real time to make smarter decisions, faster. Our robust reporting and analytics empower you to act on insights with confidence.",
  },
  {
    image: ImgAutomation.src,
    title: "AI-Driven Efficiency",
    alt: "Examples of how Triffecta platform automates and optimizes campaigns",
    description:
      "Leverage machine learning and automation to optimize campaigns at scale. Focus on strategic growth while our intelligent technology handles the heavy lifting.",
  },
];

export default function FeatureScrollStack() {

  const className = "feature-content"

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
          const staggerMap = ["lg:mt-[32vh]", "lg:mt-[60vh]", "lg:mt-[90vh]"];
          const marginTop = staggerMap[index] || `lg:mt-[${90 + index * 30}vh]`;

          return (
            <div
              key={index}
              class="col-span-6 sm:col-span-3 lg:col-span-4 lg:p-6"
            >
              <div
                class={`${className} lg:sticky lg:top-[100px] ${marginTop}`}
              >
                <div class="relative rounded-2xl bg-white p-2.5 shadow">
                  <div class="relative flex h-72 items-center justify-center">
                    <img
                      src={feature.image}
                      alt={feature.alt || feature.title}
                      class="relative max-h-full w-full object-contain"
                    />
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
