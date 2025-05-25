import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowUp,
  MapPin,
  ExternalLink,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t bg-background">
      {/* Back to top button */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <Button
          variant="default"
          size="icon"
          className="rounded-full shadow-lg hover:shadow-xl transition-all h-12 w-12"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>

      <div className="container px-4 md:px-6 pt-12 pb-8">
        {/* Top section with logo and social links */}
        <div className="flex flex-col items-center justify-center pb-8 border-b mb-8">
          <h2 className="text-2xl font-bold mb-4">Anand Galla</h2>
          <div className="flex items-center space-x-4 mb-6">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
              asChild
            >
              <a href="mailto:anandgalla01@gmail.com" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
              asChild
            >
              <a href="tel:+18707139318" aria-label="Phone">
                <Phone className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
              asChild
            >
              <a
                href="https://linkedin.com/in/anandgalla"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
              asChild
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
              asChild
            >
              <a href="#" aria-label="Location">
                <MapPin className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="text-center text-muted-foreground max-w-xl">
            Senior Java Full Stack Developer specializing in scalable web
            solutions, cloud-native architectures, and enterprise applications.
          </p>
        </div>

        {/* Middle section with sitemap and info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors flex items-center gap-1"
                >
                  <ExternalLink className="h-3 w-3" /> About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors flex items-center gap-1"
                >
                  <ExternalLink className="h-3 w-3" /> Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors flex items-center gap-1"
                >
                  <ExternalLink className="h-3 w-3" /> Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors flex items-center gap-1"
                >
                  <ExternalLink className="h-3 w-3" /> Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">More</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#education"
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors flex items-center gap-1"
                >
                  <ExternalLink className="h-3 w-3" /> Education
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors flex items-center gap-1"
                >
                  <ExternalLink className="h-3 w-3" /> Contact
                </a>
              </li>
              <li>
                <Link
                  to="/resume"
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors flex items-center gap-1"
                >
                  <ExternalLink className="h-3 w-3" /> Resume
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <span>anandgalla01@gmail.com</span>
              </li>
              <li className="text-muted-foreground flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <span>+1 870-713-9318</span>
              </li>
              <li className="text-muted-foreground flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Atlanta, GA</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Appearance</h3>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-muted-foreground">Toggle theme:</span>
                <ModeToggle />
              </div>
              <p className="text-xs text-muted-foreground pt-2">
                Change between light and dark mode to suit your preference.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Anand Galla. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/sitemap"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
