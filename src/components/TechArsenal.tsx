import { motion } from "framer-motion";
import { Zap, Layers, Cloud, GitBranch, Lightbulb, Briefcase } from "lucide-react";

const skillCategories = [
  {
    title: "Core Mastery",
    icon: Zap,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: [
      { name: "Kotlin", level: 95 },
      { name: "Android SDK", level: 95 },
      { name: "Jetpack Compose", level: 90 },
      { name: "Coroutines & Flow", level: 92 },
      { name: "React Native", level: 85 },
      { name: "Kotlin Multiplatform", level: 80 },
    ],
  },
  {
    title: "Architecture & Patterns",
    icon: Layers,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: [
      { name: "Clean Architecture", level: 90 },
      { name: "MVVM / MVI", level: 95 },
      { name: "Dependency Injection", level: 90 },
      { name: "SOLID Principles", level: 88 },
      { name: "Design Patterns", level: 85 },
      { name: "Multi-Module Apps", level: 88 },
    ],
  },
  {
    title: "Backend & Cloud",
    icon: Cloud,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: [
      { name: "Spring Boot", level: 75 },
      { name: "Firebase Suite", level: 88 },
      { name: "RESTful APIs", level: 90 },
      { name: "Node.js / Express", level: 70 },
      { name: "PostgreSQL / MySQL", level: 75 },
      { name: "OAuth / JWT", level: 82 },
    ],
  },
  {
    title: "DevOps & Tooling",
    icon: GitBranch,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: [
      { name: "Git / Gitflow", level: 92 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "Gradle / Build Tools", level: 88 },
      { name: "Unit Testing (JUnit)", level: 85 },
      { name: "UI Testing (Espresso)", level: 80 },
      { name: "Agile / Scrum", level: 90 },
    ],
  },
];

const peripheralSkills = [
  { icon: Briefcase, label: "SaaS Business Development", description: "Founded & scaled a tech company" },
  { icon: Lightbulb, label: "Product Architecture", description: "End-to-end system design" },
];

const TechArsenal = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] -translate-y-1/2" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-wider">
            Technical Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-display mt-4 mb-4">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            7+ years of accumulated expertise across mobile development, 
            backend systems, and software architecture.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-card border border-border/50"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl ${category.bgColor}`}>
                  <category.icon className={`h-5 w-5 ${category.color}`} />
                </div>
                <h3 className="text-lg font-display">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Peripheral Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {peripheralSkills.map((skill, index) => (
            <div
              key={skill.label}
              className="flex items-center gap-4 p-5 rounded-xl surface-glass"
            >
              <div className="p-3 rounded-xl bg-accent/10">
                <skill.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">{skill.label}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechArsenal;
