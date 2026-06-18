import { ReactNode } from "react";
import AnimatedSection from "@/components/AnimatedSection";

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
  imgSrc: string;
  children?: ReactNode;
}

const PageHero = ({ label, title, description, imgSrc, children }: PageHeroProps) => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={imgSrc} alt={title} loading="lazy" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/60" />
    </div>

    <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24 lg:py-32 text-center text-white">
      <AnimatedSection>
        <p className="font-serif text-[clamp(2.5rem,5vw,4rem)] uppercase leading-tight text-white mb-3">{label}</p>
        <h1 className="font-sans text-[24px] uppercase font-normal leading-relaxed text-white/80">{title}</h1>
        <p className="mt-6 text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed text-white/80">
          {description}
        </p>
      </AnimatedSection>
      {children && <div className="mt-12">{children}</div>}
    </div>
  </section>
);

export default PageHero;
