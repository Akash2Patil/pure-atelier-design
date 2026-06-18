import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageCta from "@/components/PageCta";
import PageHero from "@/components/PageHero";
import { siteImages } from "@/lib/siteImages";

const address =
  "No. 9, Vanraj Harshad Apartment, Opp. Modakeshwar Tennis Court, Modakeshwar Housing Society, Indira Nagar, Nashik 42009";
const mapSrc =
  `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out. We'll be in touch soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <PageHero
        label="Contact"
        title="Let's talk about your next architecture or interior project"
        description="Reach out to discuss a new home, workplace, hospitality venue, or renovation. We help create spaces that feel thoughtful, elegant, and easy to live in."
        imgSrc={siteImages.projects.turnkey.interiorEight}
      />

      <section className="py-24 lg:py-36 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-serif text-[40px] leading-tight text-foreground mb-3">Contact Information</p>
            <h1 className="font-sans text-[24px] font-normal leading-relaxed text-muted-foreground max-w-2xl">
              Let’s Create Something Meaningful Together
            </h1>
            <p className="mt-8 text-muted-foreground max-w-2xl leading-relaxed">
              Reach out to discuss your next project, request a consultation, or learn how we can help you transform your space with thoughtful architecture and interiors.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24 lg:pb-36 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-8">
              {[
                { label: "Name", key: "name" as const, type: "text" },
                { label: "Email", key: "email" as const, type: "email" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required
                    value={form[field.key]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-accent transition-colors duration-300 text-sm"
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-accent transition-colors duration-300 text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="border border-foreground px-10 py-4 text-xs tracking-[0.2em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-500 mt-4"
              >
                Send Inquiry
              </button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="space-y-10 lg:pl-12">
              <div>
                <h3 className="font-serif text-xl mb-6">Studio</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 text-accent" />
                    <span>
                      No. 9, Vanraj Harshad Apartment, Opp. Modakeshwar Tennis Court,
                      <br /> Modakeshwar Housing Society, Indira Nagar,
                      <br /> Nashik 42009
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-accent" />
                    <span>info@thedesignatelier.co.in</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-accent" />
                    <span>+91 9225 5363 55</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl mb-6">Working Hours</h3>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>Monday — Friday: 10:00 AM — 7:00 PM</p>
                  <p>Saturday: By Appointment</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-serif text-xl">Visit Us</h3>
                <div className="aspect-[4/3] overflow-hidden rounded-[2rem] border border-border bg-background">
                  <iframe
                    title="The Design Atelier location"
                    src={mapSrc}
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="rounded-3xl border border-border p-6 bg-muted text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground mb-3">Studio Address</p>
                  <p>{address}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <PageCta
        title="Need an expert design team on your next project?"
        description="Book a conversation with us today and let's explore what your space can become together."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </div>
  );
};

export default Contact;
