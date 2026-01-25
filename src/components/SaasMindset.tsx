import { motion } from "framer-motion";
import { Rocket, TrendingUp, Users, Code } from "lucide-react";

const SaasMindset = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-12 rounded-3xl bg-card border border-border/50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                  <Rocket className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <span className="text-xs font-mono text-accent uppercase tracking-wider">
                    Beyond Code
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display">The SaaS Mindset</h2>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                I don't just write code — I build products. With experience founding a technology 
                company in Turkey and understanding the full lifecycle of software businesses, 
                I bring a unique perspective that bridges engineering excellence with business strategy.
              </p>

              {/* Key Points */}
              <div className="grid sm:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-xl bg-secondary/30"
                >
                  <TrendingUp className="h-5 w-5 text-primary mb-3" />
                  <h3 className="font-medium text-foreground mb-2">Business Acumen</h3>
                  <p className="text-sm text-muted-foreground">
                    Experience in SaaS business development, from ideation to market fit.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-xl bg-secondary/30"
                >
                  <Users className="h-5 w-5 text-primary mb-3" />
                  <h3 className="font-medium text-foreground mb-2">Team Leadership</h3>
                  <p className="text-sm text-muted-foreground">
                    Mentored developers, led cross-functional teams, and drove technical decisions.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-xl bg-secondary/30"
                >
                  <Code className="h-5 w-5 text-primary mb-3" />
                  <h3 className="font-medium text-foreground mb-2">Product Thinking</h3>
                  <p className="text-sm text-muted-foreground">
                    Building scalable architectures that serve both users and business goals.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SaasMindset;
