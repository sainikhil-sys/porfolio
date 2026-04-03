import { motion } from "framer-motion";
import { Code, Layout, Server, Database, Cloud, Brain } from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "JavaScript", "TypeScript", "C++", "Java"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Angular", "HTML", "CSS", "Tailwind", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Django", "Django REST", "Node.js", "Express"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools & Cloud",
    icon: Cloud,
    skills: ["Git", "GitHub", "AWS", "Netlify", "Vercel"],
  },
  {
    title: "AI / Data",
    icon: Brain,
    skills: ["NumPy", "Pandas", "TensorFlow", "OpenCV"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover-glow group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <group.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
