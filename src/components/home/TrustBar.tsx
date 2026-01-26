import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Clock, Building2, Globe, ThumbsUp } from "lucide-react";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience", icon: Clock },
  { value: 1000, suffix: "+", label: "Companies Formed", icon: Building2 },
  { value: 40, suffix: "+", label: "Countries Served", icon: Globe },
  { value: 98, suffix: "%", label: "Client Satisfaction", icon: ThumbsUp },
];

export function TrustBar() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Gold top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      
      <div className="container py-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Trust statement */}
          <p className="text-muted-foreground text-center lg:text-left">
            <span className="font-semibold text-primary">Bootstrapped & Founder-Led</span>
            <span className="hidden sm:inline"> — Helping entrepreneurs succeed since 2014</span>
          </p>

          {/* Stats with glass-morphism cards */}
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative"
              >
                {/* Glass card */}
                <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-border/50 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <stat.icon className="h-5 w-5 text-gold" />
                  </div>
                  {/* Stats */}
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary">
                      <AnimatedCounter 
                        value={stat.value} 
                        suffix={stat.suffix}
                        duration={2}
                      />
                    </div>
                    <div className="text-xs text-muted-foreground whitespace-nowrap">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}