import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <Link
            to="/"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <a
            href="#about"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Projects
          </a>
          <a
            href="#education"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Education
          </a>
          <a
            href="#contact"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
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
            className="text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <a
            href="#about"
            className="text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#experience"
            className="text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#education"
            className="text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Education
          </a>
          <a
            href="#contact"
            className="text-foreground/80 hover:text-foreground transition-colors"
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
