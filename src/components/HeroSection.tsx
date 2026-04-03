import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Eye, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = ["Full-Stack Developer", "Backend Engineer", "System Builder"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary text-sm tracking-[0.3em] uppercase mb-4"
          >
            Personal site — React, TypeScript & Vite
          </motion.p>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-4">
            <span className="gradient-text">Sai Nikhil</span>
          </h1>

          <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
            <span className="text-xl sm:text-2xl text-muted-foreground">
              {text}
              <span className="inline-block w-[2px] h-6 bg-primary ml-1 animate-pulse" />
            </span>
          </div>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Building scalable web platforms, APIs, and real-world tech solutions.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <Button size="lg" className="glow-primary hover-glow" asChild>
              <a href="#projects">
                <Eye className="mr-2 h-4 w-4" /> View Projects
              </a>
            </Button>
            <Button size="lg" variant="outline" className="hover-glow" asChild>
              <a href="/resume.pdf" download="Sai-Nikhil-Resume.pdf" type="application/pdf">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
            <Button size="lg" variant="secondary" className="hover-glow" asChild>
              <a href="#contact">
                <Send className="mr-2 h-4 w-4" /> Contact Me
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center gap-6"
          >
            {[
              { icon: Github, href: "https://github.com/sainikhil-sys", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/saininikhilbhoopathi", label: "LinkedIn" },
              { icon: Mail, href: "mailto:sainikhil6300725603@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover-glow text-muted-foreground hover:text-foreground transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
