import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import PageCta from "@/components/PageCta";
import PageHero from "@/components/PageHero";
import { siteImages } from "@/lib/siteImages";

const allProjects = [
  {
    img: siteImages.projects.architecture.balajiAngan,
    title: "Balaji Angan",
    category: "Architecture",
    desc: "A residential architecture project planned around clarity, usability, and long-term comfort.",
  },
  {
    img: siteImages.projects.architecture.balajiVihar,
    title: "Balaji Vihar",
    category: "Architecture",
    desc: "A composed built form with clean massing, practical planning, and a calm residential presence.",
  },
  {
    img: siteImages.projects.architecture.cambridgeSchool,
    title: "Cambridge School",
    category: "Institutional",
    desc: "An educational environment shaped for structure, learning, and everyday movement.",
  },
  {
    img: siteImages.projects.architecture.exteriorOne,
    title: "Architecture Detail Study",
    category: "Architecture",
    desc: "An architectural study balancing proportion, planning clarity, and visual presence.",
  },
  {
    img: siteImages.projects.architecture.exteriorTwo,
    title: "Residential Design Study",
    category: "Architecture",
    desc: "A residential design study exploring proportion, openings, and practical expression.",
  },
  {
    img: siteImages.projects.architecture.sitePhotoOne,
    title: "Site Coordination",
    category: "Architecture",
    desc: "On-site architectural coordination supporting practical execution and construction progress.",
  },
  {
    img: siteImages.projects.architecture.planRender,
    title: "First Floor Plan",
    category: "Planning",
    desc: "Floor plan communicating organization, circulation, and spatial logic.",
  },
  {
    img: siteImages.home.highlighted.livingRoom,
    title: "Residential Living Room",
    category: "Interior",
    desc: "A composed interior designed with soft material balance, warmth, and everyday comfort.",
  },
  {
    img: siteImages.home.highlighted.livingRoomOne,
    title: "Living Room Palette",
    category: "Interior",
    desc: "An interior palette focused on texture, proportion, and a refined residential atmosphere.",
  },
  {
    img: siteImages.home.highlighted.livingRoomTwo,
    title: "Interior Detail Study",
    category: "Interior",
    desc: "A layered living-space detail that brings together lighting, furniture, and finish coordination.",
  },
  {
    img: siteImages.projects.turnkey.interiorOne,
    title: "Turnkey Interior Project",
    category: "Turnkey",
    desc: "A warm interior built through coordinated design, documentation, and execution.",
  },
  {
    img: siteImages.projects.turnkey.interiorTwo,
    title: "Commercial Interior Fit-Out",
    category: "Turnkey",
    desc: "A commercial interior crafted for efficient flow, material richness, and practical delivery.",
  },
  {
    img: siteImages.projects.turnkey.interiorThree,
    title: "Kitchen and Storage Detail",
    category: "Turnkey",
    desc: "A turnkey interior detail where storage, lighting, and surface finishes are resolved together.",
  },
  {
    img: siteImages.projects.turnkey.interiorFour,
    title: "Custom Interior Execution",
    category: "Turnkey",
    desc: "A finished interior execution showing the transition from design intent to site-ready detail.",
  },
  {
    img: siteImages.projects.turnkey.interiorSeven,
    title: "Built-In Furniture Detail",
    category: "Turnkey",
    desc: "A turnkey detail focused on clean joinery, practical storage, and coordinated finishes.",
  },
];

const planningProjects = [
  { img: siteImages.projects.architecture.planRender, title: "A1 — First Floor Plan", desc: "First floor plan showing circulation and spatial layout." },
  { img: siteImages.projects.architecture.planRenderA2, title: "A2 — 2nd to 7th Floor", desc: "Typical floor plan from 2nd to 7th level." },
  { img: siteImages.projects.architecture.planRenderA3, title: "A3 — 8th Floor Plan", desc: "Top-level floor plan with dedicated spatial zones." },
  { img: siteImages.projects.architecture.planRenderB1, title: "B1 — Ground Floor (R.C. Office)", desc: "Ground floor plan for the R.C. office block." },
  { img: siteImages.projects.architecture.planRenderB2, title: "B2 — First Floor (C.M. Office)", desc: "First floor plan for the C.M. office block." },
  { img: siteImages.projects.architecture.planRenderB3, title: "B3 — First Floor (C.M. Office)", desc: "Alternate first floor plan for the C.M. office." },
  { img: siteImages.projects.architecture.planRenderB4, title: "B4 — Class-I Quarters", desc: "Residential quarters floor plan with room allocation." },
];

const projectVideos = [
  {
    src: siteImages.projects.videos.architectureOne,
    title: "Architecture Walkthrough",
    category: "Architecture",
  },
  {
    src: siteImages.projects.videos.architectureTwo,
    title: "Facade Motion Study",
    category: "Architecture",
  },
  {
    src: siteImages.projects.videos.turnkeyOne,
    title: "Turnkey Interior Reel",
    category: "Turnkey",
  },
  {
    src: siteImages.projects.videos.slidingPartition,
    title: "Sliding Partition Detail",
    category: "Turnkey",
  },
];

const categories = ["All", "Architecture", "Institutional", "Interior", "Turnkey", "Planning"];

// Project collage layout: one large square beside two smaller square cards.
const ZigzagGrid = ({ items }: { items: typeof allProjects }) => {
  const rows: (typeof allProjects)[] = [];
  let i = 0;
  while (i < items.length) {
    const remaining = items.length - i;
    if (remaining >= 3) {
      rows.push(items.slice(i, i + 3));
      i += 3;
    } else {
      rows.push(items.slice(i));
      i = items.length;
    }
  }

  return (
    <div className="flex flex-col gap-10">
      {rows.map((row, ri) => {
        if (row.length === 1) {
          return (
            <AnimatedSection key={`row-${ri}`} className="w-full max-w-sm">
              <ProjectCard p={row[0]} />
            </AnimatedSection>
          );
        }

        if (row.length === 2) {
          return (
            <div key={`row-${ri}`} className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {row.map((p, ci) => (
                <AnimatedSection key={`${ri}-${ci}`} delay={ci * 80}>
                  <ProjectCard p={p} />
                </AnimatedSection>
              ))}
            </div>
          );
        }

        const bigOnLeft = ri % 2 === 0;
        const bigCard = row[0];
        const smallCards = row.slice(1);

        return (
          <div key={`row-${ri}`} className={`grid grid-cols-1 gap-6 ${bigOnLeft ? "md:grid-cols-[2fr_1fr]" : "md:grid-cols-[1fr_2fr]"}`}>
            {bigOnLeft && (
              <AnimatedSection>
                <ProjectCard p={bigCard} featured />
              </AnimatedSection>
            )}

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-1">
              {smallCards.map((p, ci) => (
                <AnimatedSection key={`${ri}-${ci}`} delay={(ci + 1) * 80}>
                  <ProjectCard p={p} compact />
                </AnimatedSection>
              ))}
            </div>

            {!bigOnLeft && (
              <AnimatedSection>
                <ProjectCard p={bigCard} featured />
              </AnimatedSection>
            )}
          </div>
        );
      })}
    </div>
  );
};

const ProjectCard = ({ p, featured = false, compact = false }: { p: typeof allProjects[0]; featured?: boolean; compact?: boolean }) => (
  <div className="group cursor-pointer">
    <div className={`relative overflow-hidden mb-4 rounded-lg bg-muted ${p.category === "Planning" ? "aspect-[4/3]" : "aspect-square"}`}>
      <img
        src={p.img}
        alt={p.title}
        loading="lazy"
        className={`project-static-image w-full h-full ${p.category === "Planning" ? "object-contain bg-white p-4" : "object-cover"}`}
      />
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
    </div>
    <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">{p.category}</p>
    <h3 className={`font-serif text-foreground mb-1 ${featured ? "text-2xl" : "text-lg"}`}>{p.title}</h3>
    <p className={`text-muted-foreground leading-relaxed ${compact ? "text-xs" : "text-sm"}`}>{p.desc}</p>
  </div>
);

// Planning layout: full-width images one by one, some paired side-by-side
const PlanningGrid = () => (
  <div className="flex flex-col gap-10">
    {/* First plan: full width */}
    <AnimatedSection>
      <div className="group mx-auto max-w-2xl cursor-pointer">
        <div className="relative overflow-hidden rounded-lg bg-muted">
          <img
            src={planningProjects[0].img}
            alt={planningProjects[0].title}
            loading="lazy"
            className="project-static-image max-h-[22rem] w-full object-contain bg-white p-4"
          />
        </div>
        <p className="mt-3 text-xs tracking-[0.15em] uppercase text-muted-foreground">Planning</p>
        <h3 className="font-serif text-lg text-foreground mt-1">{planningProjects[0].title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{planningProjects[0].desc}</p>
      </div>
    </AnimatedSection>

    {/* A2 + A3 side by side */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {planningProjects.slice(1, 3).map((p, i) => (
        <AnimatedSection key={p.title} delay={i * 100}>
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg bg-white">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="project-static-image max-h-[24rem] w-full object-contain"
              />
            </div>
            <p className="mt-3 text-xs tracking-[0.15em] uppercase text-muted-foreground">Planning</p>
            <h3 className="font-serif text-lg text-foreground mt-1">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        </AnimatedSection>
      ))}
    </div>

    {/* B1 full width */}
    <AnimatedSection>
      <div className="group mx-auto max-w-4xl cursor-pointer">
        <div className="relative overflow-hidden rounded-lg bg-white">
          <img
            src={planningProjects[3].img}
            alt={planningProjects[3].title}
            loading="lazy"
            className="project-static-image max-h-[32rem] w-full object-contain"
          />
        </div>
        <p className="mt-3 text-xs tracking-[0.15em] uppercase text-muted-foreground">Planning</p>
        <h3 className="font-serif text-lg text-foreground mt-1">{planningProjects[3].title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{planningProjects[3].desc}</p>
      </div>
    </AnimatedSection>

    {/* B2 + B3 side by side */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {planningProjects.slice(4, 6).map((p, i) => (
        <AnimatedSection key={p.title} delay={i * 100}>
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg bg-white">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="project-static-image max-h-[24rem] w-full object-contain"
              />
            </div>
            <p className="mt-3 text-xs tracking-[0.15em] uppercase text-muted-foreground">Planning</p>
            <h3 className="font-serif text-lg text-foreground mt-1">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        </AnimatedSection>
      ))}
    </div>

    {/* B4 full width */}
    <AnimatedSection>
      <div className="group mx-auto max-w-4xl cursor-pointer">
        <div className="relative overflow-hidden rounded-lg bg-white">
          <img
            src={planningProjects[6].img}
            alt={planningProjects[6].title}
            loading="lazy"
            className="project-static-image max-h-[32rem] w-full object-contain"
          />
        </div>
        <p className="mt-3 text-xs tracking-[0.15em] uppercase text-muted-foreground">Planning</p>
        <h3 className="font-serif text-lg text-foreground mt-1">{planningProjects[6].title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{planningProjects[6].desc}</p>
      </div>
    </AnimatedSection>
  </div>
);

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? allProjects : allProjects.filter((p) => p.category === active);

  return (
    <div>
      <PageHero
        label="Our Work"
        title="A Portfolio of Thoughtful Architecture and Interiors"
        description="From architecture and institutional spaces to interiors, turnkey execution, and planning work, our portfolio shows how we create environments that feel clear, purposeful, and refined."
        imgSrc={siteImages.projects.architecture.balajiAngan}
      />

      <section className="py-24 lg:py-36 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="grid gap-8 lg:grid-cols-[0.72fr,1.28fr] lg:items-end">
              <div>
                <p className="font-serif text-[40px] leading-tight text-foreground mb-3">Our Work</p>
                <h1 className="font-sans text-[24px] font-normal leading-relaxed text-muted-foreground">Projects</h1>
              </div>
              <p className="max-w-2xl text-muted-foreground leading-relaxed lg:ml-auto">
                The Design Atelier creates architecture, interiors, turnkey spaces, institutional environments, and planning documentation designed to feel both purposeful and timeless.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="mt-12 mb-16 flex flex-wrap items-center gap-x-7 gap-y-4 border-y border-border py-5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`relative pb-1 text-[0.68rem] tracking-[0.18em] uppercase transition-colors duration-300 md:text-xs ${
                    active === cat ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                  <span
                    className={`absolute inset-x-0 -bottom-1 h-px origin-left bg-foreground transition-transform duration-300 ${
                      active === cat ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              ))}
            </div>
          </AnimatedSection>

          {active === "Planning" ? (
            <PlanningGrid />
          ) : (
            <ZigzagGrid items={filtered} />
          )}
        </div>
      </section>

      <section className="pb-24 lg:pb-36 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto border-t border-border pt-16">
          <AnimatedSection>
            <div className="grid gap-8 lg:grid-cols-[0.72fr,1.28fr] lg:items-end">
              <div>
                <p className="font-serif text-[40px] leading-tight text-foreground mb-3">Project Videos</p>
                <h2 className="font-sans text-[24px] font-normal leading-relaxed text-muted-foreground">Motion Studies & Site Reels</h2>
              </div>
              <p className="max-w-2xl text-muted-foreground leading-relaxed lg:ml-auto">
                Short videos from architecture and turnkey folders show project movement, partition details, and execution moments in a more direct way.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-8 grid-cols-2 md:grid-cols-4">
            {projectVideos.map((video, index) => (
              <AnimatedSection key={video.src} delay={index * 100}>
                <article className="group">
                  <div className="aspect-[9/16] overflow-hidden rounded-lg bg-foreground">
                    <video
                      className="h-full w-full object-cover"
                      controls
                      muted
                      playsInline
                      preload="metadata"
                    >
                      <source src={video.src} type="video/mp4" />
                    </video>
                  </div>
                  <p className="mt-4 text-xs tracking-[0.15em] uppercase text-muted-foreground">{video.category}</p>
                  <h3 className="mt-1 font-serif text-base text-foreground">{video.title}</h3>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Interested in a project like this?"
        description="Let's discuss how we can translate your brief into a timeless built environment with clarity, detail, and durability."
        buttonText="Talk to Our Team"
        buttonLink="/contact"
      />
    </div>
  );
};

export default Projects;
