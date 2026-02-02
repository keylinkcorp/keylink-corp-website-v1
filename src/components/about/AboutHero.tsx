import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/about/about-hero-team.jpg";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 1000, suffix: "+", label: "Businesses Helped" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "Team Members" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function AboutHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Keylink Corp professional team"
          className="w-full h-full object-cover"
        />
        {/* Navy Overlay Gradient */}
        <div className="absolute inset-0 overlay-navy-gradient" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 floating-orb floating-orb-gold animate-float opacity-40" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] floating-orb floating-orb-navy animate-float-slow opacity-30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants}>
            <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 mb-6 px-4 py-1.5">
              About Keylink Corp
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            Your Trusted Partner in{" "}
            <span className="text-accent">Bahrain Business Success</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Since 2014, we've been empowering entrepreneurs and businesses with 
            comprehensive formation, licensing, and support services. Your success 
            is our mission.
          </motion.p>

          {/* Trust Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="glass-card p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/70 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
