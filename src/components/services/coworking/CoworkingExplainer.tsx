import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Zap, Shield, Globe, TrendingUp, Clock, Sparkles } from "lucide-react";

const benefits = [
  { icon: Zap, text: "Instant access to professional workspaces" },
  { icon: Shield, text: "All-inclusive pricing with no hidden fees" },
  { icon: Globe, text: "Professional business address in Manama" },
  { icon: TrendingUp, text: "Networking opportunities with entrepreneurs" },
  { icon: Clock, text: "Flexible hours including 24/7 access options" },
];

const facts = [
  { label: "Starting From", value: "BHD 15/day" },
  { label: "Contract Length", value: "No commitment" },
  { label: "Locations", value: "Prime Manama" },
  { label: "Amenities", value: "12+ included" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function CoworkingExplainer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />

      {/* Floating Orbs */}
      <div className="absolute top-20 right-[15%] w-64 h-64 floating-orb floating-orb-gold animate-float opacity-25" />
      <div className="absolute bottom-32 left-[10%] w-48 h-48 floating-orb floating-orb-navy animate-float-slow opacity-30" />

      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={staggerItem}>
              <span className="section-badge">What is Coworking?</span>
            </motion.div>

            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-6">
              Flexible Workspace Solutions for{" "}
              <span className="text-accent">Modern Professionals</span>
            </motion.h2>

            <motion.div variants={staggerItem} className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                A coworking space in Bahrain provides shared office facilities where 
                freelancers, startups, and established businesses work alongside each other 
                in a dynamic, collaborative environment. Unlike traditional office leases, 
                coworking offers the flexibility to scale your workspace as your business grows.
              </p>
              <p>
                At Keylink Corp's coworking spaces in Manama, you'll find everything from 
                hot desks for daily use to dedicated desks and private offices for teams. 
                Our serviced office solutions include high-speed internet, meeting room access, 
                mail handling, and a prestigious business address—all with flexible membership terms.
              </p>
              <p>
                Whether you're a freelancer seeking a productive environment, a startup 
                looking to minimize overhead costs, or an established company needing 
                satellite office space in Bahrain, our workspace solutions adapt to your needs.
              </p>
            </motion.div>
          </motion.div>

          {/* Benefits Panel with Glass Effect */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative bg-[hsl(var(--navy))] rounded-2xl p-8 md:p-10 text-white overflow-hidden"
          >
            {/* Decorative orbs */}
            <div className="absolute top-0 right-0 w-48 h-48 floating-orb floating-orb-gold opacity-30" />
            <div className="absolute bottom-0 left-0 w-32 h-32 floating-orb floating-orb-gold opacity-20" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--gold)/0.15)] border border-[hsl(var(--gold)/0.2)] mb-6">
                <Sparkles className="w-4 h-4 text-[hsl(var(--gold))]" />
                <span className="text-sm font-medium text-[hsl(var(--gold))]">Key Benefits</span>
              </div>

              <h3 className="text-xl font-semibold mb-6">
                Why Choose a Shared Office Space?
              </h3>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.li 
                      key={index} 
                      className="flex items-start gap-3 group"
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[hsl(var(--gold)/0.15)] flex items-center justify-center mt-0.5 group-hover:bg-[hsl(var(--gold)/0.25)] transition-colors">
                        <Icon className="w-5 h-5 text-[hsl(var(--gold))]" />
                      </div>
                      <span className="text-white/80 pt-2">{benefit.text}</span>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Key Facts Grid */}
              <div className="grid grid-cols-2 gap-4">
                {facts.map((fact, index) => (
                  <motion.div
                    key={index}
                    className="glass-card p-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-xs text-white/50 mb-1">{fact.label}</div>
                    <div className="text-lg font-bold text-[hsl(var(--gold))]">{fact.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
