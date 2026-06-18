import { siteImages } from "@/lib/siteImages";

const sectors = [
  { title: "Residential Homes", imgSrc: siteImages.home.highlighted.livingRoom, className: "md:col-span-5 md:row-span-2" },
  { title: "Commercial Spaces", imgSrc: siteImages.projects.turnkey.interiorTwo, className: "md:col-span-4" },
  { title: "Hospitality Projects", imgSrc: siteImages.projects.turnkey.interiorThree, className: "md:col-span-3" },
  { title: "Healthcare Facilities", imgSrc: siteImages.projects.architecture.balajiVihar, className: "md:col-span-3" },
  { title: "Educational Institutions", imgSrc: siteImages.projects.architecture.cambridgeSchool, className: "md:col-span-4" },
  { title: "Recreational Spaces", imgSrc: siteImages.projects.architecture.exteriorThree, className: "md:col-span-4" },
  { title: "Mixed-Use Developments", imgSrc: siteImages.projects.architecture.exteriorOne, className: "md:col-span-5" },
  { title: "Restoration & Renovation Projects", imgSrc: siteImages.projects.turnkey.interiorFive, className: "md:col-span-3" },
];

const WorkInShowcase = () => (
  <div>
    <p className="font-serif text-[40px] leading-tight text-foreground mb-8">We Work In</p>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[13rem] lg:auto-rows-[14rem]">
      {sectors.map((sector, index) => (
        <div
          key={sector.title}
          className={`group relative min-h-[15rem] overflow-hidden bg-foreground md:min-h-0 ${sector.className}`}
          data-gsap-item
        >
          <img
            src={sector.imgSrc}
            alt={sector.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity duration-500 group-hover:opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/25 to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-between p-6">
            <span className="text-xs tracking-[0.2em] uppercase text-primary-foreground/65">
              0{index + 1}
            </span>
            <h3 className="max-w-xs font-serif text-2xl leading-tight text-primary-foreground">
              {sector.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default WorkInShowcase;
