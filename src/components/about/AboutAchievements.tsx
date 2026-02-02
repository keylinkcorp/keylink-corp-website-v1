import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Briefcase, Clock, Award, Building2, Globe, Headphones } from "lucide-react";

const stats = [
  { icon: Calendar, value: 10, suffix: "+", label: "Years in Business" },
  { icon: Users, value: 1000, suffix: "+", label: "Clients Served" },
  { icon: Briefcase, value: 50, suffix: "+", label: "Services Offered" },
  { icon: Headphones, value: 24, suffix: "/7", label: "Support Available" },
];

const milestones = [
  { year: "2014", title: "Company Founded", icon: Building2 },
  { year: "2016", title: "First 100 Clients", icon: Users },
  { year: "2018", title: "Full-Service Expansion", icon: Briefcase },
  { year: "2020", title: "New HQ in Sanabis", icon: Globe },
  { year: "2022", title: "1,000th Client", icon: Award },
  { year: "2024", title: "10 Year Anniversary", icon: Calendar },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function AboutAchievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing relative overflow-hidden bg-primary">
      {/* Grid Lines Pattern Overlay (white lines) */}
      <div className="absolute inset-0 pattern-grid-lines" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-dots opacity-10" />
      
      {/* Gold Sweep Gradient Animation */}
      <div className="absolute inset-0 animate-gradient-sweep pointer-events-none" />
      
      {/* Enhanced Floating decorative elements with pulse-glow */}
      <div className="absolute top-20 left-10 w-64 h-64 floating-orb floating-orb-gold animate-float-pulse opacity-25" />
      <div className="absolute bottom-20 right-10 w-80 h-80 floating-orb floating-orb-gold animate-float-slow animate-pulse-glow opacity-20" />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 floating-orb floating-orb-gold animate-pulse-glow opacity-15" />

      <div className="container px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="bg-accent/20 text-accent border-accent/30 mb-4">
            Our Achievements
          </Badge>
          <h2 className="text-white mb-4">A Decade of Excellence</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Our numbers tell the story of trust, growth, and commitment to client success.
          </p>
        </motion.div>

        {/* Stats Grid with Enhanced Glass Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="glass-card p-8 text-center group hover:bg-white/15 transition-all duration-300 relative overflow-hidden"
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="shimmer" />
              </div>
              
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4 relative z-10">
                <stat.icon className="w-7 h-7 text-accent" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 relative z-10">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/60 text-sm relative z-10">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Milestones Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl font-bold text-white mb-2">Our Journey</h3>
          <p className="text-white/60">Key milestones that shaped who we are today</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line with glow effect */}
          <div 
            className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(199, 167, 99, 0.5), transparent)",
              boxShadow: "0 0 10px rgba(199, 167, 99, 0.3)"
            }}
          />
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                variants={itemVariants}
                className="relative flex flex-col items-center text-center"
              >
                {/* Connector dot with glow */}
                <div 
                  className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent z-10"
                  style={{
                    boxShadow: "0 0 15px rgba(199, 167, 99, 0.6)"
                  }}
                />
                
                <div className="glass-card p-4 w-full group hover:bg-white/15 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/30 transition-colors">
                    <milestone.icon className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-accent font-bold text-lg mb-1">{milestone.year}</p>
                  <p className="text-white/80 text-sm">{milestone.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
