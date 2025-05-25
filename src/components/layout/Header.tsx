import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Calculate which section is currently in view
      const sections = [
        { id: "home", element: document.querySelector("section") },
        { id: "about", element: document.getElementById("about") },
        { id: "skills", element: document.getElementById("skills") },
        { id: "experience", element: document.getElementById("experience") },
        { id: "projects", element: document.getElementById("projects") },
        { id: "education", element: document.getElementById("education") },
        { id: "contact", element: document.getElementById("contact") },
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const sectionTop = section.element.offsetTop;

          if (scrollPosition >= sectionTop) {
            if (activeSection !== section.id) {
              setActiveSection(section.id);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const getNavLinkClass = (sectionId: string) => {
    return cn(
      "transition-colors",
      sectionId === activeSection
        ? "text-primary font-medium"
        : "text-foreground/80 hover:text-foreground",
    );
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Anand Galla
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className={getNavLinkClass("home")}>
            Home
          </Link>
          <a href="#about" className={getNavLinkClass("about")}>
            About
          </a>
          <a href="#skills" className={getNavLinkClass("skills")}>
            Skills
          </a>
          <a href="#experience" className={getNavLinkClass("experience")}>
            Experience
          </a>
          <a href="#projects" className={getNavLinkClass("projects")}>
            Projects
          </a>
          <a href="#education" className={getNavLinkClass("education")}>
            Education
          </a>
          <a href="#contact" className={getNavLinkClass("contact")}>
            Contact
          </a>
          <Link to="/resume">
            <Button variant="outline" size="sm">
              Resume
            </Button>
          </Link>
          <ModeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-md py-4 px-4 flex flex-col space-y-4">
          <Link
            to="/"
            className={getNavLinkClass("home")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <a
            href="#about"
            className={getNavLinkClass("about")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className={getNavLinkClass("skills")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#experience"
            className={getNavLinkClass("experience")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#projects"
            className={getNavLinkClass("projects")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#education"
            className={getNavLinkClass("education")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Education
          </a>
          <a
            href="#contact"
            className={getNavLinkClass("contact")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
          <Link
            to="/resume"
            className="w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Button variant="outline" size="sm" className="w-full">
              Resume
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
