import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Projects Completed", target: 10 },
  { label: "Technologies Used", target: 20 },
  { label: "GitHub Commits", target: 250 },
];

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}+</span>;
};

const GitHubSection = () => {
  const username = "sainikhil-sys";

  return (
    <section id="github" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            GitHub <span className="gradient-text">Stats</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-8" />
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="glow-primary hover-glow" asChild>
              <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Profile on GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" className="hover-glow" asChild>
              <a
                href={`https://github.com/${username}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FolderGit2 className="mr-2 h-4 w-4" />
                All repositories
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Stat cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-2xl p-6 text-center hover-glow"
            >
              <p className="text-3xl font-bold gradient-text mb-1">
                <Counter target={stat.target} />
              </p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* GitHub stats images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 max-w-3xl mx-auto"
        >
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117`}
            alt="GitHub Stats"
            className="rounded-xl w-full max-w-lg"
            loading="lazy"
          />
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=0d1117`}
            alt="GitHub Streak"
            className="rounded-xl w-full max-w-lg"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubSection;
