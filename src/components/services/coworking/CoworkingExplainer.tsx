import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Zap, Shield, Globe, TrendingUp, Clock } from "lucide-react";

const benefits = [
  { icon: Zap, text: "Instant access to professional workspaces" },
  { icon: Shield, text: "All-inclusive pricing with no hidden fees" },
  { icon: Globe, text: "Professional business address in Manama" },
  { icon: TrendingUp, text: "Networking opportunities with entrepreneurs" },
  { icon: Clock, text: "Flexible hours including 24/7 access options" },
];

const facts = [
  { label: "Starting From", value: "BHD 15/day" },
  { label: "Contract Length", value: "No long-term commitment" },
  { label: "Locations", value: "Prime Manama District" },
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
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
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

          {/* Benefits Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-secondary/50 rounded-2xl border border-border p-8"
          >
            <h3 className="text-xl font-semibold text-primary mb-6">
              Why Choose a Shared Office Space?
            </h3>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mt-0.5">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-muted-foreground">{benefit.text}</span>
                  </li>
                );
              })}
            </ul>

            {/* Key Facts Grid */}
            <div className="grid grid-cols-2 gap-4">
              {facts.map((fact, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl p-4 border border-border"
                >
                  <div className="text-sm text-muted-foreground mb-1">{fact.label}</div>
                  <div className="text-lg font-semibold text-primary">{fact.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
