import { motion } from "framer-motion";
import { Code2, Rocket, Database } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-center max-w-5xl mx-auto">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-56 h-56 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-[3px] animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <img
                    src="/avatar.png"
                    alt="Sai Nikhil"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a Computer Science (Data Science) undergraduate and Full-Stack Developer with a strong focus on
              backend architecture, APIs, and building scalable platforms. I thrive at the intersection of engineering
              and product thinking — turning ideas into real, deployed software.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              From building <span className="text-foreground font-medium">ExpoShip</span>, a logistics platform with
              real-time tracking architecture, to creating <span className="text-foreground font-medium">Trash2Treasure</span>,
              a sustainability-focused platform — I'm driven by solving real-world problems through clean code and
              thoughtful system design.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: Code2, label: "Backend Expertise", desc: "Django, REST APIs" },
                { icon: Database, label: "Data-Driven", desc: "SQL, NoSQL, ML" },
                { icon: Rocket, label: "Startup Mindset", desc: "Ship fast, iterate" },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="glass rounded-xl p-4 text-center hover-glow cursor-default">
                  <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
