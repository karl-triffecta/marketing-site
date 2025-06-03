import ImgTeamKenJpg from "../assets/team/ken.jpg";
import ImgTeamKenAvif from "../assets/team/ken.avif";
import ImgTeamKenWebp from "../assets/team/ken.webp";
import ImgTeamMarkJpg from "../assets/team/mark.jpg";
import ImgTeamMarkAvif from "../assets/team/mark.avif";
import ImgTeamMarkWebp from "../assets/team/mark.webp";
import ImgTeamLesleyJpg from "../assets/team/lesley.jpg";
import ImgTeamLesleyAvif from "../assets/team/lesley.avif";
import ImgTeamLesleyWebp from "../assets/team/lesley.webp";
import IconLinkedIn from "./icon/IconLinkedIn";
import IconIncognito from "./icon/IconIncognito";
import FadeIn from "./FadeIn";

const team = [
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
  /*
  {
    name: "Incognito",
    title: "",
    description: "",
  },
  */
];

export default function TeamMembers() {
  return (
    <section class="container mx-auto my-15">
      <div class="grid grid-cols-6 gap-4 sm:grid-cols-6 sm:gap-4 lg:grid-cols-12 lg:gap-8">
        {team.map((member, index) => {
          return (
            <div
              key={index}
              class="col-span-6 sm:col-span-3 lg:col-span-4 lg:p-6"
            >
              <FadeIn delay={300 * index} duration={3000}>
                <div class="relative">
                  <div class="relative rounded-2xl bg-white">
                    <div class="relative flex h-84 items-center justify-center md:h-74">
                      {member.image ? (
                        <picture>
                          <source
                            srcSet={`${member.image.avif}`}
                            type="image/avif"
                          />
                          <source
                            srcSet={`${member.image.webp}`}
                            type="image/webp"
                          />
                          <img
                            src={`${member.image.jpg}`}
                            alt={`A picture of ${member.name}`}
                            width={600}
                            height={600}
                            loading="lazy"
                            decoding="async"
                            className="absolute top-0 left-0 z-0 h-full w-full rounded-2xl object-cover object-top"
                            style={{
                              filter:
                                "sepia(0.7) hue-rotate(-10deg) saturate(0.8) brightness(1)",
                            }}
                          />
                        </picture>
                      ) : (
                        <div class="relative top-[-1%]">
                          <IconIncognito
                            size="200px"
                            stroke="var(--color-primary-dark)"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div class="mt-4 flex items-center justify-between">
                    <div>
                      <h2 class="text-xl font-bold">{member.name}</h2>
                      <h3 class="text-l text-text-light font-bold">
                        {member.title}
                      </h3>
                    </div>
                    {member.link && (
                      <a href={member.link} target="_blank" class="">
                        <IconLinkedIn size="30px" />
                      </a>
                    )}
                  </div>

                  <p class="text-text-light mt-2 text-lg">
                    {member.description}
                  </p>
                </div>
              </FadeIn>
            </div>
          );
        })}
      </div>
    </section>
  );
}
