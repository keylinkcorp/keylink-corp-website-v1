import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Users, Coffee, Wifi, X, Sparkles } from "lucide-react";
import hotDeskImg from "@/assets/coworking/hot-desk.jpg";
import loungeImg from "@/assets/coworking/lounge-kitchen.jpg";

const benefits = [
  {
    icon: Zap,
    title: "Flexible Credit System",
    description: "Buy credits and use them whenever you need. No expiry, maximum flexibility.",
    size: "small",
  },
  {
    icon: Users,
    title: "Instant Access",
    description: "Sign up today and start working tomorrow. Quick onboarding, no paperwork.",
    size: "small",
  },
  {
    title: "Networking That Ignites Opportunities",
    description: "Connect with entrepreneurs, freelancers, and business leaders who can help grow your network.",
    image: hotDeskImg,
    size: "large",
  },
  {
    icon: Coffee,
    title: "Free Coffee & High-Speed WiFi",
    description: "Fuel your productivity with unlimited premium coffee and gigabit internet.",
    size: "small",
  },
  {
    icon: X,
    title: "Cancel Anytime",
    description: "No long-term commitments. Upgrade, downgrade, or cancel with 30 days notice.",
    size: "small",
  },
  {
    title: "The Right Energy & Environment",
    description: "Designed spaces that boost creativity and productivity. Natural light, ergonomic furniture, and inspiring vibes.",
    image: loungeImg,
    size: "large",
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function CoworkingBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
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
          <span className="section-badge">Member Benefits</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work Smarter, <span className="text-accent">Not Harder</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our coworking membership is designed to remove friction and help you focus on what matters most.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className={`group relative rounded-2xl overflow-hidden ${
                benefit.size === "large" ? "md:col-span-2 lg:col-span-1" : ""
              } ${benefit.image ? "min-h-[280px]" : "bg-background border border-border p-8"}`}
            >
              {benefit.image ? (
                <>
                  {/* Image Background */}
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Icon */}
                  {benefit.icon && (
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                      <benefit.icon className="w-6 h-6 text-accent" />
                    </div>
                  )}
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
