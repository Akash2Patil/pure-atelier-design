import AnimatedSection from "@/components/AnimatedSection";
import founderImg from "@/assets/founder.jpg";
import { siteImages } from "@/lib/siteImages";

const teamMembers = [
  {
    name: "Ar. Aditya Anil Mulay",
    role: "Founder & Principal Architect",
    description: "Leads design strategy, client direction, and project delivery with a focus on clarity and craft.",
    imgSrc: founderImg,
  },
  {
    name: "Nikita Sharma",
    role: "Senior Interior Designer",
    description: "Shapes thoughtful interiors with refined material palettes, spatial flow, and user comfort.",
    imgSrc: siteImages.home.highlighted.livingRoomOne,
  },
  {
    name: "Rahul Deshmukh",
    role: "Project Manager",
    description: "Coordinates documentation, consultants, and site delivery to ensure timelines and quality.",
    imgSrc: siteImages.projects.architecture.balajiAngan,
  },
];

const TeamMembers = () => (
  <section className="py-24 lg:py-36 px-6 lg:px-12 bg-card">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="font-serif text-[40px] leading-tight text-foreground mb-3">Meet the Team</p>
        <h2 className="font-sans text-[24px] font-normal leading-relaxed text-muted-foreground mb-12">A Small Team with Clear Design Focus</h2>
      </AnimatedSection>

      <div className="grid gap-10 md:grid-cols-3">
        {teamMembers.map((member, index) => (
          <AnimatedSection key={index} delay={index * 100}>
            <article className="rounded-[2rem] border border-border bg-background/90 p-8 text-center shadow-xl shadow-black/5 transition-shadow duration-300 hover:shadow-black/10">
              <div className="group mx-auto mb-8 h-40 w-40 overflow-hidden rounded-full border border-border bg-muted">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  loading="lazy"
                  className="image-motion h-full w-full object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-2">{member.name}</h3>
              <p className="text-sm font-medium text-muted-foreground mb-5">{member.role}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{member.description}</p>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TeamMembers;
