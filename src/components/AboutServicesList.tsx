const services = [
  "Architecture Design",
  "Interior Design",
  "Planning & Design Development",
  "Construction Documentation",
  "Construction Administration",
  "Sustainable & Green Design Consulting",
  "Permitting & Approvals",
  "Project Management",
];

const AboutServicesList = () => (
  <div>
    <p className="font-serif text-[40px] leading-tight text-foreground mb-8">Services</p>
    <div>
      {services.map((service, index) => (
        <div key={service} className="group relative py-6 md:py-7" data-gsap-item>
          <div className="flex flex-col gap-3 md:grid md:grid-cols-[9rem,1fr] md:items-baseline">
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">0{index + 1}</span>
            <p className="font-serif text-3xl text-foreground transition-colors duration-300 group-hover:text-accent md:text-4xl lg:text-5xl">
              {service}
            </p>
          </div>
          <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-border" data-gsap-line />
        </div>
      ))}
    </div>
  </div>
);

export default AboutServicesList;
