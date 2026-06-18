import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  FileText,
  HardHat,
  KeyRound,
  Lightbulb,
  PenTool,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedSection from "@/components/AnimatedSection";
import PageCta from "@/components/PageCta";
import PageHero from "@/components/PageHero";
import { siteImages } from "@/lib/siteImages";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Architecture Design",
    desc: "Designing buildings that are rooted in context, light, and livability across every scale.",
    details: ["Residential Design", "Commercial Spaces", "Hospitality Environments", "Institutional Planning"],
    imgSrc: siteImages.projects.architecture.balajiAngan,
  },
  {
    title: "Interior Design",
    desc: "Curating interiors with clarity, material warmth, and enduring comfort for daily life.",
    details: ["Space Planning", "Material & Finish Selection", "Furniture Curation", "Lighting & Atmosphere"],
    imgSrc: siteImages.projects.turnkey.interiorFour,
  },
  {
    title: "Turnkey Solutions",
    desc: "Managing every step from design development through construction administration and handover.",
    details: ["Construction Documentation", "Project Management", "Contractor Coordination", "Quality Assurance"],
    imgSrc: siteImages.projects.turnkey.interiorThree,
  },
  {
    title: "Sustainable & Green Design",
    desc: "Integrating environmental thinking into every design decision, from materials to energy efficiency.",
    details: ["Passive Design Strategies", "Green Materials", "Energy Efficient Systems", "Certifications Support"],
    imgSrc: siteImages.projects.architecture.cambridgeSchool,
  },
];

const processSteps: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: ClipboardList,
    title: "Project Brief",
    description: "Understanding requirements, goals, budget, and expectations at the outset.",
  },
  {
    icon: Lightbulb,
    title: "Concept Design",
    description: "Developing creative concepts, layouts, and design directions that feel right for the project.",
  },
  {
    icon: PenTool,
    title: "Design Development",
    description: "Refining the design through technical planning, materials, and detailing.",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Preparing construction drawings, specifications, and execution documents.",
  },
  {
    icon: BadgeCheck,
    title: "Approvals & Coordination",
    description: "Managing permits, consultant coordination, and technical reviews for a seamless process.",
  },
  {
    icon: HardHat,
    title: "Construction Phase",
    description: "Providing site visits, execution support, quality monitoring, and contractor coordination.",
  },
  {
    icon: KeyRound,
    title: "Project Handover",
    description: "Final inspections, documentation, and smooth project completion.",
  },
];

const Services = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-service-reveal]").forEach((element, index) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 46 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            delay: (index % 3) * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-service-image]").forEach((image) => {
        gsap.fromTo(
          image,
          { autoAlpha: 0, scale: 0.96 },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: image,
              start: "top 82%",
            },
          },
        );
      });
    }, pageRef);

    return () => context.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <PageHero
        label="Services"
        title="Full-Service Architecture, Interior, and Turnkey Solutions"
        description="We guide each project from concept through construction, combining thoughtful design, technical coordination, and practical delivery."
        imgSrc={siteImages.home.slides[0]}
      />

      <section className="py-20 lg:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="grid gap-8 lg:grid-cols-[0.8fr,1.2fr] lg:items-end" data-service-reveal>
              <div>
                <p className="font-serif text-[40px] leading-tight text-foreground mb-3">What We Do</p>
                <h1 className="font-sans text-[24px] font-normal leading-relaxed text-muted-foreground max-w-3xl">
                  Design support from the first sketch to the final handover.
                </h1>
              </div>
              <p className="max-w-xl text-muted-foreground text-lg leading-relaxed lg:ml-auto">
                We bring architecture, interiors, documentation, approvals, and site coordination into one steady process, so every decision moves the project closer to a space that works beautifully.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid gap-12">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <article className="grid gap-8 border-t border-border pt-10 lg:grid-cols-[0.85fr,1.15fr]" data-service-reveal>
                  <div>
                    <div className="mb-8 grid gap-4 md:grid-cols-[6rem,1fr] md:items-baseline">
                      <span className="font-serif text-3xl text-accent">0{index + 1}</span>
                      <h2 className="font-serif text-3xl text-foreground md:text-4xl">{service.title}</h2>
                    </div>
                    <p className="text-lg leading-relaxed text-muted-foreground">{service.desc}</p>
                    <Link
                      to="/contact"
                      className="mt-8 inline-flex w-fit items-center gap-2 text-xs tracking-[0.2em] uppercase text-foreground hover:text-accent transition-colors duration-300"
                    >
                      Inquire <ArrowRight size={12} />
                    </Link>
                  </div>

                  <div className="grid gap-6 md:grid-cols-[0.9fr,1.1fr]">
                    <div className="group h-[18rem] overflow-hidden md:h-[20rem]" data-service-image>
                      <img src={service.imgSrc} alt={service.title} loading="lazy" className="image-motion h-full w-full object-cover" />
                    </div>
                    <div className="grid content-center border-y border-border">
                      {service.details.map((detail) => (
                        <div key={detail} className="border-b border-border py-5 text-lg text-foreground last:border-b-0">
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-36 px-6 lg:px-12 bg-card">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="grid gap-8 lg:grid-cols-[0.72fr,1.28fr] lg:items-start" data-service-reveal>
              <div>
                <p className="font-serif text-[40px] leading-tight text-foreground mb-3">Workflow Process</p>
                <h2 className="font-sans text-[24px] font-normal leading-relaxed text-muted-foreground">
                  Clear stages, steady decisions, better execution.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground lg:ml-auto">
                A disciplined process keeps the work calm, coordinated, and ready for real construction. Every phase is connected, documented, and reviewed so the finished space feels intentional from structure to detail.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <AnimatedSection key={step.title} delay={index * 80}>
                  <div
                    className="grid min-h-[18rem] gap-6 border border-border bg-background p-7 sm:grid-cols-[4.5rem,1fr]"
                    data-service-reveal
                  >
                    <div className="flex h-14 w-14 items-center justify-center border border-border text-accent">
                      <Icon size={24} strokeWidth={1.7} />
                    </div>
                    <div>
                      <p className="mb-5 text-xs tracking-[0.2em] uppercase text-muted-foreground">Phase 0{index + 1}</p>
                      <h3 className="font-serif text-2xl text-foreground">{step.title}</h3>
                      <p className="mt-5 text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <PageCta
        title="Ready to move your project forward?"
        description="From early design to construction delivery, our team can help guide your next architecture or interior project with clarity and care."
        buttonText="Connect With Us"
        buttonLink="/contact"
      />
    </div>
  );
};

export default Services;
