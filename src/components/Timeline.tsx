import { motion } from "framer-motion";
import { MapPin, Building2, Rocket, Award, Users } from "lucide-react";

const experiences = [
  {
    year: "2024 - Present",
    title: "Senior Android Developer",
    company: "Betsson Group",
    location: "Malta 🇲🇹",
    type: "On-Site",
    icon: Building2,
    highlights: [
      "Core mobile platform team for 1M+ active users",
      "Owned authentication & networking infrastructure",
      "Multi-module, multi-brand architecture",
    ],
    milestone: "European Market Entry",
  },
  {
    year: "2023 - Present",
    title: "Senior Android Developer",
    company: "Turknet",
    location: "Turkey 🇹🇷",
    type: "Remote",
    icon: Rocket,
    highlights: [
      "Built app from scratch to 1M downloads",
      "36% performance boost, 89% size reduction",
      "Led Firebase integration & Spring Boot collaboration",
    ],
    milestone: "Performance Excellence",
  },
  {
    year: "2022 - 2023",
    title: "Android Developer",
    company: "Huawei Turkey",
    location: "Turkey 🇹🇷",
    type: "Remote",
    icon: Award,
    highlights: [
      "Huawei Health App Smart Watch module",
      "20% increase in user engagement",
      "Global region-based feature development",
    ],
    milestone: "Global Scale",
  },
  {
    year: "2021 - 2022",
    title: "Android Developer",
    company: "TEB ARF Teknoloji",
    location: "İzmir, Turkey 🇹🇷",
    type: "On-Site",
    icon: Building2,
    highlights: [
      "CepteTEB app with 10M+ downloads",
      "OpenCV & Google Vision AI integration",
      "NFC, QR, and facial recognition features",
    ],
    milestone: "Fintech Innovation",
  },
  {
    year: "2018 - 2021",
    title: "Jr. Mobile Developer → Android Developer",
    company: "Datahan Software",
    location: "İzmir, Turkey 🇹🇷",
    type: "On-Site",
    icon: Users,
    highlights: [
      "Founded & scaled mobile development practice",
      "Built React Native cross-platform apps",
      "Integrated third-party APIs & Firebase",
    ],
    milestone: "Career Foundation",
  },
];

const Timeline = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-wider">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-display mt-4 mb-4">
            Experience Timeline
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From the Turkish tech ecosystem to the European market — 
            a journey of growth, leadership, and architectural mastery.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-border" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                <div className="w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                  <exp.icon className="h-4 w-4 text-primary" />
                </div>
              </div>

              {/* Content Card */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <div className="p-6 rounded-2xl bg-card border border-border/50 card-hover">
                  {/* Year & Location */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-primary">{exp.year}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Title & Company */}
                  <h3 className="text-lg font-display text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-primary mb-4">
                    {exp.company}
                    <span className="ml-2 px-2 py-0.5 rounded-full bg-secondary text-xs text-muted-foreground">
                      {exp.type}
                    </span>
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Milestone Badge */}
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                    <span className="text-xs font-mono text-accent">{exp.milestone}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
