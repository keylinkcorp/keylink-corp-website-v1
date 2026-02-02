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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

export function CoworkingBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-[hsl(var(--navy))]">
      {/* Floating Orbs */}
      <div className="absolute top-20 left-[15%] w-72 h-72 floating-orb floating-orb-gold animate-float opacity-20" />
      <div className="absolute bottom-32 right-[10%] w-56 h-56 floating-orb floating-orb-gold animate-float-slow opacity-15" />

      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(199, 167, 99, 0.4) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient Mesh */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 60% 40% at 30% 20%, hsl(var(--gold) / 0.1) 0%, transparent 50%),
            radial-gradient(ellipse 50% 50% at 70% 80%, hsl(var(--gold) / 0.08) 0%, transparent 50%)
          `,
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(var(--gold)/0.15)] text-[hsl(var(--gold))] text-sm font-medium mb-4 border border-[hsl(var(--gold)/0.2)]">
            Member Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Work Smarter, <span className="text-[hsl(var(--gold))]">Not Harder</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Our coworking membership is designed to remove friction and help you focus on what matters most.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                benefit.size === "large" ? "md:col-span-1" : ""
              } ${benefit.image ? "min-h-[300px]" : "glass-card p-8"}`}
            >
              {benefit.image ? (
                <>
                  {/* Image Background */}
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Multi-layer Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy))] via-[hsl(var(--navy)/0.6)] to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--gold)/0.15)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="glass-card p-1 inline-block mb-3">
                      <Sparkles className="w-5 h-5 text-[hsl(var(--gold))]" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Icon with glow */}
                  {benefit.icon && (
                    <div className="relative w-14 h-14 rounded-xl bg-[hsl(var(--gold)/0.15)] flex items-center justify-center mb-5 group-hover:bg-[hsl(var(--gold)/0.25)] transition-all duration-300">
                      <div className="absolute inset-0 rounded-xl bg-[hsl(var(--gold)/0.2)] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <benefit.icon className="w-7 h-7 text-[hsl(var(--gold))] relative z-10 transition-transform group-hover:scale-110 duration-300" />
                    </div>
                  )}
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[hsl(var(--gold))] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Shimmer */}
                  <div className="shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
