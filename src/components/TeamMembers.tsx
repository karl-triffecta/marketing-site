import ImgTeamKenJpg from "../assets/team/ken.jpg";
import ImgTeamKenAvif from "../assets/team/ken.avif";
import ImgTeamKenWebp from "../assets/team/ken.webp";
import ImgTeamMarkJpg from "../assets/team/mark.jpg";
import ImgTeamMarkAvif from "../assets/team/mark.avif";
import ImgTeamMarkWebp from "../assets/team/mark.webp";
import ImgTeamLesleyJpg from "../assets/team/lesley.jpg";
import ImgTeamLesleyAvif from "../assets/team/lesley.avif";
import ImgTeamLesleyWebp from "../assets/team/lesley.webp";
import IconIncognito from "./icon/IconIncognito";
import IconLinkedIn from "./icon/IconLinkedIn";
import FadeIn from "./FadeIn";

type TeamImage = {
  jpg: string;
  avif: string;
  webp: string;
};

type TeamMember = {
  name: string;
  title: string;
  description: string;
  image?: TeamImage;
  link?: string;
};

const team: TeamMember[] = [
  {
    image: {
      jpg: ImgTeamKenJpg.src,
      avif: ImgTeamKenAvif.src,
      webp: ImgTeamKenWebp.src,
    },
    name: "Ken Platt",
    title: "Founder & CEO",
    link: "https://www.linkedin.com/in/ken-platt-retail-media-expert/",
    description:
      "eCommerce expert and Retail Media Veteran with 20+ years experience spanning the retail, consultancy & agency industries.",
  },
  {
    image: {
      jpg: ImgTeamMarkJpg.src,
      avif: ImgTeamMarkAvif.src,
      webp: ImgTeamMarkWebp.src,
    },
    name: "Mark Briggs",
    title: "CTO",
    link: "https://www.linkedin.com/in/mark-briggs-1755394b/",
    description:
      "Product leader with 20 years experience across multiple industries inc. financial & ad-tech. Worked with US retailers and brands for the last 5 years.",
  },
  {
    image: {
      jpg: ImgTeamLesleyJpg.src,
      avif: ImgTeamLesleyAvif.src,
      webp: ImgTeamLesleyWebp.src,
    },
    name: "Lesley Mace",
    title: "Operations & Customer Lead",
    link: "https://www.linkedin.com/in/lesley-mace-3471409/",
    description:
      "Global Alliance Director. Led customer success operation in retail media across 10 US retailers.",
  },
  {
    name: "Incognito",
    title: "Technical Wizard",
    description:
      "20+ years experience in leading, architecting & building eCommerce & ad tech solutions",
  },
  {
    name: "Incognito",
    title: "Technical Wizard",
    description:
      "15+ years of web dev & engineering across eCommerce & ad tech",
  },
];

export default function TeamMembers() {
  return (
    <section class="page-shell relative overflow-hidden py-section">
      <div class="container-content">
        <div class="gap-card-gap grid sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <FadeIn key={index} delay={300 * index} duration={3000}>
              <article class="border-border-default bg-surface group flex h-full flex-col overflow-hidden rounded-design-lg border shadow-card transition hover:border-ink-300">
                <div class="bg-ink-100 relative aspect-square w-full overflow-hidden">
                  {member.image ? (
                    <picture>
                      <source
                        srcSet={member.image.avif}
                        type="image/avif"
                      />
                      <source
                        srcSet={member.image.webp}
                        type="image/webp"
                      />
                      <img
                        src={member.image.jpg}
                        alt={`A picture of ${member.name}`}
                        width={600}
                        height={600}
                        loading="lazy"
                        decoding="async"
                        class="absolute inset-0 h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                        style={{
                          filter:
                            "sepia(0.7) hue-rotate(-10deg) saturate(0.8) brightness(1)",
                        }}
                      />
                    </picture>
                  ) : (
                    <div class="bg-ink-100 flex h-full w-full items-center justify-center">
                      <IconIncognito
                        size="160px"
                        stroke="var(--color-primary-dark)"
                      />
                    </div>
                  )}
                </div>

                <div class="flex flex-1 flex-col justify-between p-6">
                  <div class="flex flex-col gap-2.5">
                    <h2 class="font-display text-ink-900 text-xl leading-[27.5px] font-bold tracking-[-0.5px]">
                      {member.name}
                    </h2>
                    <p class="text-ink-400 text-xs leading-4 font-medium">
                      {member.title}
                    </p>
                    <p class="text-ink-600 text-sm leading-[22.75px]">
                      {member.description}
                    </p>
                  </div>

                  {member.link && (
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="border-ink-100 text-ink-900 focus-visible:outline-focus-ring mt-6 flex items-center justify-between border-t pt-4 text-xs leading-4 font-semibold transition hover:text-ink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      <span class="inline-flex items-center gap-2">
                        <IconLinkedIn size="16px" />
                        View LinkedIn
                      </span>
                      <span
                        class="text-ink-400 transition group-hover:translate-x-0.5"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </a>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
