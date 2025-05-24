import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Anand Galla</h3>
            <p className="text-sm text-muted-foreground">
              Senior Java Full Stack Developer specializing in scalable web
              solutions and cloud-native architectures.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </a>
              <a
                href="#education"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Education
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
              <Link
                to="/resume"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Resume
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:anandgalla01@gmail.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/anandgalla"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <ModeToggle />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-4 border-t text-sm text-muted-foreground">
          <p>&copy; {currentYear} Anand Galla. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link
              to="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
