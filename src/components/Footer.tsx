import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-16 px-6 lg:px-12">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-serif text-lg mb-4">The Design Atelier</h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Architecture and interior design that balances aesthetics, function, and long-term value.
          </p>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Navigation</h4>
          <div className="flex flex-col gap-3">
            {["Home", "About", "Projects", "Services", "Contact"].map((link) => (
              <Link
                key={link}
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className="text-sm text-foreground hover:text-accent transition-colors duration-300"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Connect</h4>
          <div className="flex flex-col gap-3 text-sm">
            <span className="text-foreground">info@thedesignatelier.co.in</span>
            <span className="text-foreground">+91 9225 5363 55</span>
            <span className="text-foreground">No. 9, Vanraj Harshad Apartment, Opp. Modakeshwar Tennis Court, Modakeshwar Housing Society, Indira Nagar, Nashik 42009</span>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground tracking-wider">
          © 2026 The Design Atelier. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
