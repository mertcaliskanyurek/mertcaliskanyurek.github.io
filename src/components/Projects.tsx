import { motion } from "framer-motion";
import CaseStudyCard from "./CaseStudyCard";

const projects = [
  {
    title: "Betsson Core Mobile Platform",
    subtitle: "Enterprise Gaming • Malta",
    description:
      "Contributing to the core mobile platform supporting multiple brands within a large, multi-module Android application used by 1M+ active users. Owned and evolved critical authentication and networking infrastructure layers.",
    challenge:
      "Redesigned authentication and session flows while maintaining backward compatibility across multiple brands, resulting in ~30% reduction in auth-related incidents and improved session stability.",
    technologies: ["Kotlin", "Coroutines", "Multi-Module", "Authentication", "Networking"],
    metrics: [
      { label: "Active Users", value: "1M+" },
      { label: "Auth Incidents", value: "-30%" },
      { label: "Code Duplication", value: "-25%" },
    ],
  },
  {
    title: "Turknet Android App",
    subtitle: "Telecom • Turkey",
    description:
      "Developed Turknet's Android application from scratch, achieving 1 million downloads. Led complete app redesign with focus on performance optimization and Firebase integration for crash reporting.",
    challenge:
      "Redesigned and optimized a high-traffic telecom app, achieving 36% performance improvement and reducing app size by 89.83% through aggressive optimization techniques.",
    technologies: ["Kotlin", "MVVM", "Clean Architecture", "Firebase", "Spring Boot"],
    metrics: [
      { label: "Downloads", value: "1M" },
      { label: "Performance", value: "+36%" },
      { label: "App Size", value: "-89%" },
    ],
  },
  {
    title: "Huawei Health Smart Watch",
    subtitle: "Consumer Electronics • Remote",
    description:
      "Contributed to Huawei Health App's Smart Watch module, implementing new features such as membership-free watch face downloads, directly impacting user engagement metrics.",
    challenge:
      "Debugged and resolved critical issues related to region-based features and membership watch face storage, improving stability across global markets.",
    technologies: ["Android SDK", "Kotlin", "Watch OS Integration", "Region-based Logic"],
    metrics: [
      { label: "User Engagement", value: "+20%" },
      { label: "Markets", value: "Global" },
      { label: "Platform", value: "Wear OS" },
    ],
  },
  {
    title: "CepteTEB Mobile Banking",
    subtitle: "Fintech • Turkey",
    description:
      "Senior developer on a mobile banking application with 10M+ downloads. Developed QR transactions, NFC-based ID verification, and implemented facial recognition with liveness detection.",
    challenge:
      "Led integration of OpenCV and Google Vision AI for facial recognition and liveness detection, enhancing security for financial transactions while maintaining UX standards.",
    technologies: ["Kotlin", "Java", "OpenCV", "Google Vision AI", "NFC", "Firebase"],
    metrics: [
      { label: "Downloads", value: "10M+" },
      { label: "Load Time", value: "-25%" },
      { label: "Security", value: "AI-Powered" },
    ],
  },
  {
    title: "KMP Boilerplate",
    subtitle: "Open Source • Side Project",
    description:
      "An open-source Kotlin Multiplatform boilerplate providing a solid foundation for sharing code between Android and iOS applications with pre-configured libraries and best practices.",
    challenge:
      "Designed a flexible architecture that balances code sharing with platform-specific implementations, enabling rapid development of cross-platform mobile applications.",
    technologies: ["Kotlin Multiplatform", "Compose", "SwiftUI", "Ktor", "SQLDelight"],
    link: "https://github.com/mertcaliskanyurek/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
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
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-display mt-4 mb-4">
            Case Studies
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of projects showcasing complex problem-solving, 
            architectural decisions, and measurable impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <CaseStudyCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
