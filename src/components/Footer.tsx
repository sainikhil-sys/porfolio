import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sai Nikhil. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/sainikhil-sys" },
            { icon: Linkedin, href: "https://linkedin.com/in/saininikhilbhoopathi" },
            { icon: Mail, href: "mailto:sainikhil6300725603@gmail.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}

          <button
            onClick={scrollToTop}
            className="ml-2 p-2 rounded-full glass hover-glow text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
