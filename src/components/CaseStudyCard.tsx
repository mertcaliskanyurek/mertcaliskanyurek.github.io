import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CaseStudyProps {
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  technologies: string[];
  metrics?: { label: string; value: string }[];
  link?: string;
  index: number;
}

const CaseStudyCard = ({
  title,
  subtitle,
  description,
  challenge,
  technologies,
  metrics,
  link,
  index,
}: CaseStudyProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border/50 card-hover"
    >
      {/* Project number */}
      <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
        <span className="text-sm font-mono text-primary">0{index + 1}</span>
      </div>

      {/* Header */}
      <div className="mb-6">
        <span className="text-xs font-mono text-primary uppercase tracking-wider">
          {subtitle}
        </span>
        <h3 className="text-2xl font-display text-foreground mt-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>

      {/* Technical Challenge */}
      <div className="mb-6 p-4 rounded-xl bg-secondary/30 border-l-2 border-primary">
        <span className="text-xs font-mono text-primary uppercase tracking-wider block mb-2">
          Technical Challenge
        </span>
        <p className="text-sm text-secondary-foreground">
          {challenge}
        </p>
      </div>

      {/* Metrics */}
      {metrics && metrics.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center p-3 rounded-lg bg-secondary/20">
              <div className="text-xl font-display text-primary">{metric.value}</div>
              <div className="text-xs text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      {/* Link */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          View Project
          <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
    </motion.article>
  );
};

export default CaseStudyCard;
