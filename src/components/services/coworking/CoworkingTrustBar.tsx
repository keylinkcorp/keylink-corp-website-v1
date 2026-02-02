import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Award, Building, Star } from "lucide-react";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Active Members" },
  { icon: Award, value: 10, suffix: "+", label: "Years Experience" },
  { icon: Building, value: 50, suffix: "+", label: "Workspace Options" },
  { icon: Star, value: 98, suffix: "%", label: "Satisfaction Rate" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function CoworkingTrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 md:py-24 overflow-hidden bg-[hsl(var(--navy))]">
      {/* Floating Orbs */}
      <div className="absolute top-0 left-[10%] w-64 h-64 floating-orb floating-orb-gold animate-float opacity-30" />
      <div className="absolute bottom-0 right-[15%] w-48 h-48 floating-orb floating-orb-gold animate-float-slow opacity-20" />

      {/* Gradient Mesh Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 20% 40%, hsl(var(--gold) / 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 60%, hsl(var(--gold) / 0.1) 0%, transparent 50%)
          `,
        }}
      />

      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(199, 167, 99, 0.5) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card p-6 md:p-8 text-center transition-all duration-300 hover:bg-white/15 hover:scale-[1.02]">
                  {/* Icon with glow effect */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 mb-4">
                    <div className="absolute inset-0 rounded-2xl bg-[hsl(var(--gold)/0.2)] group-hover:bg-[hsl(var(--gold)/0.3)] transition-colors" />
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-[hsl(var(--gold)/0.1)] blur-xl" />
                    <Icon className="w-8 h-8 text-[hsl(var(--gold))] relative z-10 transition-transform group-hover:scale-110 duration-300" />
                  </div>
                  
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm md:text-base text-white/60">{stat.label}</div>

                  {/* Shimmer effect */}
                  <div className="shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Connecting Line (desktop only) */}
        <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.3)] to-transparent -translate-y-1/2 z-0" />
      </div>
    </section>
  );
}
