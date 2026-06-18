import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { siteImages } from "@/lib/siteImages";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex w-1/2 max-w-[18rem] items-center sm:w-1/3 lg:w-1/4">
            <img src={siteImages.logo} alt="The Design Atelier" loading="lazy" className="h-auto w-full max-h-10 object-contain object-left" />
            <span className="sr-only">The Design Atelier</span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:text-accent before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:origin-left before:bg-accent before:transition-all before:duration-300 hover:before:w-full ${
                  location.pathname === link.to ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-6 py-8 flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-sm tracking-[0.15em] uppercase transition-colors duration-300 hover:text-accent before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:origin-left before:bg-accent before:transition-all before:duration-300 hover:before:w-full ${
                  location.pathname === link.to ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
