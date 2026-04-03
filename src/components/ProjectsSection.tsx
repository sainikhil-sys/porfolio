import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, ExternalLink, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import nexuschatwebImage from "@/projects/nexuschatweb.jpg";
import stocksenseImage from "@/projects/stocksense.jpg";
import paystreamxImage from "@/projects/paystreamx.jpg";
import portfolioImage from "@/projects/portfolio.jpg";

type Category = "All" | "Full Stack" | "AI" | "Backend";

type Project = {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  category: Category;
  github: string;
  /** Optional thumbnail shown on the project card. */
  image?: string;
  /** External demo or repo landing; omit for on-site-only projects */
  live?: string;
};

const projects: Project[] = [
  {
    title: "NexusChat Web",
    description:
      "A modern, real-time chat platform built with Django, Django Channels, and a premium glassmorphism UI. Nexus Chat Web provides WebSocket-powered messaging, presence tracking, media sharing, emoji reactions, and a responsive 3-panel chat interface designed for production-quality performance and user experience.",
    tech: ["Django Channels", "Channels with InMemory (development)", "SQLite (development)", "PostgreSQL (production)", "JWT (SimpleJWT)", "WebSockets (Django Channels)"],

    features: ["Real-time messaging (WebSocket)", "Online/offline presence & last seeng", "Admin dashboard with analytics"],
    category: "Full Stack" as Category,
    live: "https://nexus-chat-web.onrender.com/",
    github: "https://github.com/sainikhil-sys/nexuschatweb",
    image: nexuschatwebImage,
  },
  {
    title: "StockSense",
    description:
      "A stocks-focused project workspace on GitHub—ideal for analytics dashboards, market data experiments, or API integrations as you extend it.",
    tech: ["Python", "APIs", "Data"],
    features: ["Public source repo", "Ready to extend with your stack", "Version-controlled experiments"],
    category: "Backend" as Category,
    live:"https://stocksense-ai-buddy.lovable.app/",
    github: "https://github.com/sainikhil-sys/stocksense-ai-assistant",
    image: stocksenseImage,
  },
  {
    title: "PayStreamX",
    description:
      "Decentralized payroll streaming platform built on Algorand blockchain.",
    tech: ["React.js + Tailwind CSS (Vite)","Django REST Framework"," Algorand Smart Contracts (PyTeal)","SQLite (dev) / PostgreSQL (production)","JWT (SimpleJWT)","WebSockets (Django Channels)"],
    features: ["Employer/Employee role-based authentication", "Milestone-based payments", "Algorand wallet creation and management"],
    category: "Full Stack" as Category,
    github: "https://github.com/sainikhil-sys/PayStreamX",
    image: paystreamxImage,
  },
  {
    title: "Portfolio (this site)",
    description:
      "This portfolio: responsive layout, animated sections, project showcase, and contact surface—built and maintained as first-party code.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    features: ["Component-driven UI", "Accessible navigation", "Fast Vite builds"],
    category: "Full Stack" as Category,
    github: "https://github.com/sainikhil-sys/sai-nikhil-portfolio",
    image: portfolioImage,
  },
];

const filters: Category[] = ["All", "Full Stack", "AI", "Backend"];

const ProjectsSection = () => {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  const fallbackImage = "/placeholder.svg";

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-8" />

          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === f
                    ? "bg-primary text-primary-foreground glow-primary"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass rounded-2xl overflow-hidden hover-glow group"
              >
                {/* Preview area */}
                <div className="h-44 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={project.image ?? fallbackImage}
                    alt={`${project.title} preview`}
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                    onError={(e) => {
                      // If the project image isn't present yet, fall back to the generic placeholder.
                      (e.currentTarget as HTMLImageElement).src = fallbackImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  {/* Keeps some visual identity even if the image is a single-color placeholder */}
                  <div className="relative z-10">
                    <Layers className="w-12 h-12 text-muted-foreground/30" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-[10px] bg-muted text-muted-foreground">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <ul className="text-xs text-muted-foreground space-y-1 mb-5">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    <Button size="sm" variant="outline" className="hover-glow" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Code className="mr-1 h-3.5 w-3.5" /> GitHub
                      </a>
                    </Button>
                    {project.live ? (
                      <Button size="sm" className="hover-glow" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-3.5 w-3.5" /> Live / Repo
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
