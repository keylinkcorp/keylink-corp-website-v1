import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Users, Briefcase, Network, TrendingUp, CalendarCheck } from "lucide-react";

const advantages = [
  {
    icon: MapPin,
    title: "Prime Manama Location",
    description: "Strategically located in Bahrain's financial district with easy access to major business hubs, government offices, and transportation links.",
  },
  {
    icon: Users,
    title: "Thriving Business Community",
    description: "Join a diverse community of over 500 professionals, entrepreneurs, and established businesses. Build meaningful connections that drive growth.",
  },
  {
    icon: Briefcase,
    title: "Professional Amenities",
    description: "From high-speed fiber internet to fully-equipped meeting rooms, everything you need to impress clients and work productively is included.",
  },
  {
    icon: Network,
    title: "Networking Opportunities",
    description: "Regular community events, workshops, and social gatherings help you connect with potential partners, clients, and collaborators.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Options",
    description: "Start with a hot desk and grow into a private office as your team expands. Our flexible workspace solutions adapt to your changing needs.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Memberships",
    description: "No long-term contracts required. Choose daily, weekly, or monthly plans that match your work style and budget. Cancel anytime.",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function CoworkingWhyChoose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-secondary/30 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border) / 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-badge">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Keylink <span className="text-accent">Advantage</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With over 10 years of experience in Bahrain's business services sector, 
            we understand what professionals need to succeed.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group relative p-8 rounded-2xl bg-background border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300"
              >
                {/* Hexagon Icon Container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-300">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent/20 group-hover:bg-accent/40 transition-colors" />
                </div>

                <h3 className="text-xl font-semibold text-primary mb-3">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
