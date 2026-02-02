import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Badge } from "@/components/ui/badge";
import teamPhoto from "@/assets/about/team-group-photo.png";

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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, x: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.3 },
  },
};

export function AboutHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Patterns Only - NO Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-background" />
        
        {/* Dashed Center Fade Grid Pattern */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
            maskImage: `
              repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
              repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
              radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
            `,
            WebkitMaskImage: `
              repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
              repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
              radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
        
        {/* Subtle dot pattern focused on left */}
        <div 
          className="absolute inset-0 
            bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] 
            [background-size:16px_16px] 
            [mask-image:radial-gradient(ellipse_80%_60%_at_30%_50%,#000_40%,transparent_100%)]
            opacity-60"
        />
        
        {/* Floating orbs - decorative */}
        <div className="absolute top-10 left-0 w-96 h-96 floating-orb floating-orb-gold opacity-20 animate-float-slow" />
        <div className="absolute bottom-0 right-20 w-80 h-80 floating-orb floating-orb-navy opacity-15 animate-float" />
      </div>

      {/* Content Grid */}
      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.div variants={itemVariants}>
              <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 mb-6 px-4 py-1.5">
                About Keylink Corp
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight"
            >
              Your Trusted Partner in{" "}
              <span className="text-accent">Bahrain Business Success</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
            >
              Since 2014, we've been empowering entrepreneurs and businesses with 
              comprehensive formation, licensing, and support services. Your success 
              is our mission.
            </motion.p>

            {/* Trust Stats - 2x2 Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="glass-card p-5 text-center group hover:bg-primary/5 transition-all duration-300 border border-border/50"
                >
                  <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right: Team Photo */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              <img 
                src={teamPhoto} 
                alt="Keylink Corp professional team"
                className="w-full h-auto object-contain max-h-[600px]"
              />
              
              {/* Subtle shadow underneath */}
              <div 
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-8 
                  bg-foreground/10 blur-xl rounded-full -z-10" 
              />
              
              {/* Floating badge - Team Members */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-2 right-4 md:right-8 bg-background rounded-xl shadow-lg px-4 py-2 border border-border"
              >
                <span className="text-2xl font-bold text-accent">50+</span>
                <span className="text-sm text-muted-foreground ml-1">Team Members</span>
              </motion.div>
              
              {/* Floating badge - Est. Year */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute top-4 left-4 md:left-0 bg-primary text-primary-foreground rounded-xl shadow-lg px-4 py-2"
              >
                <span className="text-sm font-medium">Est.</span>
                <span className="text-xl font-bold ml-1">2014</span>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
