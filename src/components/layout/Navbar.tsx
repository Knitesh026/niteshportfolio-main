
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  // Smooth scroll to section when clicking nav links
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 backdrop-blur-lg bg-background/80 shadow-sm"
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl md:text-2xl font-bold tracking-tight flex items-center"
            onClick={(e) => handleNavLinkClick(e, "#home")}
          >
            <span className="text-primary">N</span>
            <span>itesh</span>
            <span className="text-primary ml-1">K</span>
            <span>umar</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className={cn(
                  "nav-link", 
                  activeSection === link.href.substring(1) ? "active font-medium" : ""
                )}
              >
                {link.name}
              </a>
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-2 p-2 rounded-md text-foreground"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="flex flex-col justify-center items-center w-6 h-6 space-y-1.5">
                <span
                  className={cn(
                    "block h-0.5 w-6 bg-current transition-all duration-300",
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  )}
                ></span>
                <span
                  className={cn(
                    "block h-0.5 w-6 bg-current transition-all duration-300",
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  )}
                ></span>
                <span
                  className={cn(
                    "block h-0.5 w-6 bg-current transition-all duration-300",
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  )}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "absolute top-full left-0 right-0 backdrop-blur-lg bg-background/90 transition-all duration-300 overflow-hidden md:hidden shadow-sm",
          isMobileMenuOpen ? "max-h-[300px] border-b" : "max-h-0"
        )}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className={cn(
                "block px-3 py-2 text-base font-medium transition-colors",
                activeSection === link.href.substring(1)
                  ? "text-primary font-medium"
                  : "text-foreground/80 hover:text-foreground"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
