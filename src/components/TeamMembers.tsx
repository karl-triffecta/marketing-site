import ImgTeamKen from "../assets/team/ken.png";
import ImgTeamMark from "../assets/team/mark.png";
import ImgTeamLesley from "../assets/team/lesley.png";
import IconLinkedIn from "./IconLinkedIn";
import IconDetective from "./IconDetective";
import FadeIn from "./FadeIn";

const team = [
  {
    image: ImgTeamKen.src,
    name: "Ken Platt",
    title: "CEO & Co-Founder",
    link: "https://www.linkedin.com/in/ken-platt-retail-media-expert/",
    description:
      "CEO and Co-Founder of Triffecta, Ken is a seasoned expert in retail media networks. With a wealth of experience in the industry, he has been instrumental in shaping the company's vision and strategy.",
  },
  {
    image: ImgTeamMark.src,
    name: "Mark Briggs",
    title: "CTO & Co-Founder",
    link: "https://www.linkedin.com/in/mark-briggs-1755394b/",
    description:
      "CTO and Co-Founder of Triffecta, Mark is a technology visionary with a passion for innovation. He leads the development of cutting-edge solutions that drive the company's success.",
  },
  {
    image: ImgTeamLesley.src,
    name: "Lesley Mace",
    title: "Sales & Marketing",
    link: "https://www.linkedin.com/in/lesley-mace-3471409/",
    description:
      "Sales and Marketing professional at Triffecta, Lesley is dedicated to building strong relationships with clients and partners. Her expertise in sales and marketing strategies has been key to the company's growth.",
  },
  {
    name: "Incognito",
    title: "Technical Wizard",
    description:
      "Over a decade of technical experience building software and systems. Incognito is a master of all things technical, with a knack for solving complex problems and creating innovative solutions.",
  },
  {
    name: "Incognito",
    title: "Technical Wizard",
    description:
      "Also with a decade of technical experience building software and systems. Incognito is a master of all things technical, with a knack for solving complex problems and creating innovative solutions.",
  },
  {
    name: "Incognito",
    title: "",
    description: "",
  },
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
                    <div class="relative flex h-70 items-center justify-center">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={`A picture of ${member.name}`}
                          class="absolute top-0 left-0 z-0 h-full w-full rounded-2xl object-cover object-center"
                        />
                      ) : (
                        <div class="relative top-[-1%]">
                          <IconDetective
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
