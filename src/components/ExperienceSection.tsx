import { motion } from "framer-motion";
import { Briefcase, Trophy } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "Django Instructor Intern",
    subtitle: "Teaching & Mentorship",
    period: "2024",
    description:
      "Guided students through Django fundamentals, REST API development, and backend architecture patterns. Created hands-on curriculum covering models, views, serializers, and deployment workflows.",
  },
  {
    icon: Trophy,
    title: "Technical Events & Hackathons",
    subtitle: "Competitions & Community",
    period: "2023 – Present",
    description:
      "Active participant in hackathons and technical competitions. Built rapid prototypes under time constraints, collaborated with cross-functional teams, and sharpened problem-solving skills in competitive environments.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative pl-16"
              >
                {/* Node */}
                <div className="absolute left-3 top-1 w-7 h-7 rounded-full bg-card border-2 border-primary flex items-center justify-center glow-primary">
                  <exp.icon className="w-3.5 h-3.5 text-primary" />
                </div>

                <div className="glass rounded-2xl p-6 hover-glow">
                  <span className="text-xs text-primary font-medium">{exp.period}</span>
                  <h3 className="text-lg font-bold text-foreground mt-1">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{exp.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
