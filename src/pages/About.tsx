import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutServicesList from "@/components/AboutServicesList";
import AnimatedSection from "@/components/AnimatedSection";
import PageCta from "@/components/PageCta";
import PageHero from "@/components/PageHero";
import TeamMembers from "@/components/TeamMembers";
import WorkInShowcase from "@/components/WorkInShowcase";
import { siteImages } from "@/lib/siteImages";

gsap.registerPlugin(ScrollTrigger);

const philosophy = [
  {
    title: "Listen",
    description: "We understand client vision and requirements carefully, then shape the design around those priorities.",
  },
  {
    title: "Anticipate",
    description: "We design spaces that support future growth, flexibility, and long-term comfort.",
  },
  {
    title: "Empathize",
    description: "Every decision prioritizes user experience, from circulation to material selections.",
  },
  {
    title: "Collaborate",
    description: "We work closely with consultants, engineers, and contractors for seamless execution.",
  },
];

const About = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-gsap-section]").forEach((section) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 56 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap-item]").forEach((item, index) => {
        gsap.fromTo(
          item,
          { autoAlpha: 0, y: 34 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            delay: (index % 4) * 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 84%",
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap-line]").forEach((line) => {
        gsap.to(line, {
          scaleX: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: line,
            start: "top 88%",
          },
        });
      });
    }, pageRef);

    return () => context.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <PageHero
        label="About Us"
        title="Designing Spaces With Clarity & Character"
        description="A studio that combines architecture, interiors, and thoughtful project delivery to create spaces that feel elegant, functional, and authentic."
        imgSrc={siteImages.about.studio}
      />

      <section className="py-24 lg:py-36 px-6 lg:px-12" data-gsap-section>
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[0.8fr,1.2fr] lg:gap-20">
          <AnimatedSection>
            <p className="font-serif text-[40px] leading-tight text-foreground mb-3">About Us</p>
            <h1 className="font-sans text-[24px] font-normal leading-relaxed text-muted-foreground">
              Designing Spaces With Clarity & Character
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="space-y-6 border-l border-border pl-8 text-muted-foreground leading-relaxed text-lg">
              <p>
                The Design Atelier is an architecture and interior design studio based in Nashik and Mumbai, focused on creating spaces that feel elegant, functional, and authentic.
              </p>
              <p>
                Founded by Ar. Aditya Anil Mulay, the studio brings together years of professional experience, technical understanding, and a deep appreciation for thoughtful design.
              </p>
              <p>
                Our work is driven by the belief that good design is not about trends - it is about creating spaces that truly work for the people using them.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 lg:py-36 px-6 lg:px-12" data-gsap-section>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-serif text-[40px] leading-tight text-foreground mb-3">Our Philosophy</p>
            <h2 className="font-sans text-[24px] font-normal leading-relaxed text-muted-foreground mb-8">Design Thinking That Feels Right</h2>
            <p className="max-w-3xl text-muted-foreground leading-relaxed">
              Every project is different. Our thinking remains the same: clarity, long-term value, and human-centered design guide every decision.
            </p>
          </AnimatedSection>

          <div className="mt-14 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {philosophy.map((item, index) => (
              <AnimatedSection key={index} delay={index * 120}>
                <div className="border-t border-border pt-6" data-gsap-item>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-5">{item.title}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-36 px-6 lg:px-12" data-gsap-section>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-serif text-[40px] leading-tight text-foreground mb-3">Expertise</p>
            <h2 className="font-sans text-[24px] font-normal leading-relaxed text-muted-foreground mb-8">Focused Skills for Every Project</h2>
            <p className="max-w-3xl text-muted-foreground leading-relaxed">
              We bring architecture, interiors, documentation, and project coordination together to build spaces that work beautifully.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid gap-20">
            <AboutServicesList />
            <WorkInShowcase />
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-36 px-6 lg:px-12 bg-card" data-gsap-section>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <AnimatedSection>
            <div className="group overflow-hidden">
              <img src={siteImages.about.studio} alt="Design Atelier workspace" loading="lazy" width={800} height={600} className="image-motion w-full h-full object-cover" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="font-serif text-[40px] leading-tight text-foreground mb-3">Principal Architect</p>
            <h2 className="font-sans text-[24px] font-normal leading-relaxed text-muted-foreground mb-8">Ar. Aditya Anil Mulay</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 16 years of professional experience, Ar. Aditya Mulay brings together global exposure, technical expertise, and a refined understanding of modern architectural practices.
              </p>
              <p>
                He leads the studio with a focus on honest communication, clear design thinking, attention to detail, and long-term functionality.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 border-y border-border text-sm text-muted-foreground">
              <div className="border-b border-border py-5">
                COA - Council of Architecture, India | Registered Architect
              </div>
              <div className="border-b border-border py-5">
                LEED Accredited Professional | IGBC Accredited Professional
              </div>
              <div className="py-5">
                MBA - Environmental Management | PMP - Project Management Professional
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div data-gsap-section>
        <TeamMembers />
      </div>

      <PageCta
        title="Want to design a space that feels both beautiful and practical?"
        description="We work with thoughtful clients to create architecture and interiors that are grounded in context, function, and long-term value."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </div>
  );
};

export default About;
