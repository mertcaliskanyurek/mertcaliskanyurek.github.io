import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowUpRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-display mb-4">
            Let's Build Something <span className="text-primary">Great</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            Open to discussing new opportunities, collaborations, 
            or interesting technical challenges.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="mailto:m.caliskanyurek@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                m.caliskanyurek@gmail.com
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://www.linkedin.com/in/mertcaliskanyurek/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
                <ArrowUpRight className="ml-2 h-3 w-3" />
              </a>
            </Button>
          </div>
        </motion.div>

        <div className="section-divider mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-display text-foreground">Mert Caliskanyurek</span>
            <span className="text-xs font-mono text-muted-foreground px-2 py-1 rounded-md bg-secondary">
              v2025
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mertcaliskanyurek/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mertcaliskanyurek/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://stackoverflow.com/users/8613355/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
              aria-label="Stack Overflow"
            >
              <FileText className="h-5 w-5" />
            </a>
            <a
              href="https://medium.com/@m-caliskanyurek"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
              aria-label="Medium"
            >
              <FileText className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            © {currentYear} — Built with <Heart className="h-3 w-3 text-destructive" /> in Malta
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
