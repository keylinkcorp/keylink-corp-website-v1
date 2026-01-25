import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye } from "lucide-react";

const content = {
  mission: {
    icon: Target,
    title: "Our Mission",
    text: "To empower entrepreneurs and businesses by providing seamless, efficient, and fully compliant company formation services in Bahrain, enabling them to focus on growth while we handle the complexities of business setup.",
  },
  vision: {
    icon: Eye,
    title: "Our Vision",
    text: "To be the most trusted and preferred partner for business formation in the Gulf region, recognized for our integrity, expertise, and unwavering commitment to client success.",
  },
};

export function MissionVision() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-background relative overflow-hidden">
      {/* Subtle dot grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
      
      <div className="container relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">
            Our Purpose
          </p>
          <h2 className="text-[44px] md:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
            Driven by Values, Focused on Your Success
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className="bg-card rounded-2xl p-8 lg:p-10 border border-border/50 h-full transition-all duration-300 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/5">
              <motion.div 
                className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <content.mission.icon className="h-7 w-7 text-gold" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {content.mission.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-[1.8]">
                {content.mission.text}
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="group"
          >
            <div className="bg-card rounded-2xl p-8 lg:p-10 border border-border/50 h-full transition-all duration-300 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/5">
              <motion.div 
                className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <content.vision.icon className="h-7 w-7 text-gold" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {content.vision.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-[1.8]">
                {content.vision.text}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
