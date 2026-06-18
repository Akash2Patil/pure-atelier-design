import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageCta from "@/components/PageCta";
import { siteImages } from "@/lib/siteImages";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  ...siteImages.home.slides.map((img, index) => ({
    img,
    alt: `The Design Atelier slider image ${index + 1}`,
  })),
];

const projects = [
  {
    img: siteImages.home.highlighted.balajiAngan,
    title: "Balaji Angan",
    category: "Residential",
    className: "md:col-span-5 md:row-span-2",
    imageClassName: "h-[18rem] md:h-full",
  },
  {
    img: siteImages.home.highlighted.cambridgeSchool,
    title: "Cambridge School",
    category: "Institutional",
    className: "md:col-span-4",
    imageClassName: "h-[14rem] md:h-[17rem]",
  },
  {
    img: siteImages.home.highlighted.livingRoom,
    title: "Warm Residential Interior",
    category: "Interiors",
    className: "md:col-span-3",
    imageClassName: "h-[14rem] md:h-[17rem]",
  },
  {
    img: siteImages.home.highlighted.balajiVihar,
    title: "Balaji Vihar",
    category: "Architecture",
    className: "md:col-span-4",
    imageClassName: "h-[14rem] md:h-[17rem]",
  },
  {
    img: siteImages.home.highlighted.livingRoomTwo,
    title: "Interior Detail",
    category: "Interiors",
    className: "md:col-span-3",
    imageClassName: "h-[14rem] md:h-[17rem]",
  },
];

const clients = [
  "Nashik Residence",
  "Modakeshwar Tennis Court Society",
  "Urban Hospitality",
  "Greenfield Healthcare",
  "Luxury Residential Studio",
  "Retail Experience Design",
];

const reasons = [
  {
    title: "Clear design direction",
    text: "We translate the brief into a practical, elegant plan before details start multiplying.",
  },
  {
    title: "Execution-aware detailing",
    text: "Drawings, materials, and site decisions are coordinated so the finished space stays true to intent.",
  },
  {
    title: "Calm communication",
    text: "You always know what is decided, what needs input, and what is moving next.",
  },
  {
    title: "Long-term usability",
    text: "Every choice is shaped around durability, comfort, and how the space will work over time.",
  },
];

const Index = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((value) => (value + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!pageRef.current) return;

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-home-reveal]").forEach((element, index) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 48 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            delay: (index % 3) * 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-home-image]").forEach((image) => {
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
      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <AnimatedSection className="absolute inset-0">
          <div className="absolute inset-0">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.img}
                alt={slide.alt}
                loading="lazy"
                data-no-scroll-reveal
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === activeSlide ? "hero-slide-motion opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-foreground/30" />
          </div>
        </AnimatedSection>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pb-20 lg:pb-28">
          <AnimatedSection>
            <h1 className="font-serif text-[clamp(2rem,4.6vw,4rem)] uppercase text-primary-foreground leading-[1.08] max-w-3xl">
              Designing Timeless Spaces with Purpose & Precision
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <p className="mt-6 text-primary-foreground/80 text-base md:text-lg max-w-2xl tracking-wide">
              At The Design Atelier, we believe every space should feel effortless, timeless, and deeply connected to the people who experience it. Our work combines thoughtful planning, refined aesthetics, and practical functionality to create environments that age beautifully over time.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center border border-foreground px-10 py-4 text-xs tracking-[0.2em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Explore Projects
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-foreground px-10 py-4 text-xs tracking-[0.2em] uppercase text-background hover:bg-foreground/90 transition-all duration-300"
              >
                Schedule a Consultation
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={450}>
            <div className="mt-10 flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 w-8 rounded-full transition-all duration-300 ${
                    activeSlide === index ? "bg-foreground" : "bg-white/60"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-6">
              <div>
                <p className="font-serif text-[40px] leading-tight text-foreground mb-2">Selected Work</p>
                <h2 className="font-sans text-[24px] font-normal leading-relaxed text-muted-foreground">Featured Projects</h2>
              </div>
              <Link to="/projects" className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-accent transition-colors duration-300">
                All Projects <ArrowRight size={12} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[17rem]">
            {projects.map((p, i) => (
              <AnimatedSection key={i} delay={i * 150} className={p.className}>
                <Link to="/projects" className="group block h-full overflow-hidden" data-home-image>
                  <div className={`relative overflow-hidden ${p.imageClassName}`}>
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="home-hover-image w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-xs tracking-[0.15em] uppercase text-primary-foreground/70">{p.category}</p>
                      <h3 className="font-serif text-2xl text-primary-foreground mt-1">{p.title}</h3>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 border-y border-border/80">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div data-home-reveal>
              <p className="font-serif text-[40px] leading-tight text-foreground">Clients</p>
            </div>
          </AnimatedSection>

          <div className="mt-8 overflow-hidden border-y border-border">
            <div
              className="flex gap-12 py-8"
              style={{ animation: "marquee 28s linear infinite" }}
            >
              {clients.concat(clients).map((client, index) => (
                <p key={index} className="min-w-max font-serif text-xl text-foreground/75">
                  {client}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

    {/* About Preview */}
    <section className="py-24 lg:py-36 px-6 lg:px-12 bg-card">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <AnimatedSection>
          <div data-home-reveal>
          <p className="font-serif text-[40px] leading-tight text-foreground mb-3">About the Studio</p>
          <h2 className="font-sans text-[24px] font-normal leading-relaxed text-muted-foreground mb-8">
            Designing Spaces With Clarity & Character
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
            The Design Atelier is an architecture and interior design studio based in Nashik and Mumbai, focused on creating spaces that feel elegant, functional, and authentic.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
            Founded by Ar. Aditya Anil Mulay, the studio brings together years of professional experience, technical understanding, and a deep appreciation for thoughtful design.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-foreground hover:text-accent transition-colors duration-300"
          >
            Learn More <ArrowRight size={12} />
          </Link>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <div className="group aspect-[4/3] overflow-hidden" data-home-image>
            <img src={siteImages.about.studio} alt="Design Atelier studio" loading="lazy" width={800} height={600} className="home-hover-image w-full h-full object-cover" />
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="max-w-4xl" data-home-reveal>
            <p className="font-serif text-[40px] leading-tight text-foreground mb-3">Why Choose Us</p>
            <h2 className="font-sans text-[24px] font-normal leading-relaxed text-muted-foreground">
              A calm process for clients who want strong design without confusion.
            </h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              We keep the design language refined and the project journey practical, with decisions that are easy to understand and easier to build.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-stretch">
          <AnimatedSection delay={100}>
            <div className="relative h-[32rem] overflow-hidden bg-card" data-home-image>
              <img
                src={siteImages.home.highlighted.livingRoomOne}
                alt="Warm interior designed by The Design Atelier"
                loading="lazy"
                className="home-hover-image absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 max-w-md p-8 text-primary-foreground">
                <p className="font-serif text-[40px] leading-tight text-primary-foreground">Design Method</p>
                <h3 className="mt-3 font-sans text-[24px] font-normal leading-relaxed text-primary-foreground/80">Thoughtful choices, clearly carried through.</h3>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid h-[32rem] gap-px overflow-hidden bg-border sm:grid-cols-2">
            {reasons.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 120}>
                <div className="group flex h-full flex-col bg-card p-7 transition-colors duration-300 hover:bg-foreground" data-home-reveal>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/60">
                    0{i + 1}
                  </p>
                  <h3 className="mt-8 font-serif text-2xl leading-tight text-foreground transition-colors duration-300 group-hover:text-primary-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/70">
                    {item.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <PageCta
      title="Ready to begin your next design project?"
      description="Let’s create a space that is both beautiful and built to last, with purpose-driven design and careful execution."
      buttonText="Schedule a Consultation"
      buttonLink="/contact"
    />
  </div>
  );
};

export default Index;
