import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { siteImages } from "@/lib/siteImages";

interface PageCtaProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const ctaImage = siteImages.about.studio;

const PageCta = ({ title, description, buttonText, buttonLink }: PageCtaProps) => (
  <section className="py-24 lg:py-32 px-6 lg:px-12 bg-foreground text-primary-foreground">
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr,1.05fr] lg:gap-20">
      <AnimatedSection>
        <p className="font-serif text-[40px] leading-tight text-primary-foreground mb-3">Ready to begin?</p>
        <h2 className="font-sans text-[24px] font-normal leading-relaxed text-primary-foreground/75 mb-6">{title}</h2>
        <p className="max-w-xl text-sm md:text-base leading-relaxed text-primary-foreground/70 mb-10">
          {description}
        </p>
        <Link
          to={buttonLink}
          className="inline-flex items-center justify-center border border-primary-foreground/40 px-10 py-4 text-xs tracking-[0.2em] uppercase text-primary-foreground transition hover:bg-primary-foreground hover:text-foreground"
        >
          {buttonText}
        </Link>
      </AnimatedSection>

      <AnimatedSection delay={160}>
        <div className="relative min-h-[22rem] overflow-hidden md:min-h-[28rem]">
          <img src={ctaImage} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/55 to-transparent" />
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default PageCta;
