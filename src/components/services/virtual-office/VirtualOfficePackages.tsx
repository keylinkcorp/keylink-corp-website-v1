import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Users, Building2, Clock, Sparkles } from "lucide-react";

const packages = [
  {
    id: "essential",
    title: "Essential Address",
    description: "Business address for CR registration",
    icon: MapPin,
    features: ["Sanabis business address", "CR registration use", "Mail handling & storage", "Building directory listing"],
    size: "small",
  },
  {
    id: "business-plus",
    title: "Business Plus",
    description: "Complete virtual office solution",
    icon: Phone,
    features: [
      "Everything in Essential",
      "Dedicated business phone line",
      "Live call answering (50/month)",
      "Mail scanning & forwarding",
      "4 hours meeting room/month",
    ],
    size: "large",
    featured: true,
  },
  {
    id: "executive",
    title: "Executive Suite",
    description: "Premium business presence",
    icon: Building2,
    features: [
      "Everything in Business Plus",
      "Unlimited call answering",
      "Priority mail handling",
      "10 hours meeting room/month",
      "Dedicated receptionist",
    ],
    size: "medium",
  },
  {
    id: "meeting-room",
    title: "Meeting Room Add-On",
    description: "On-demand meeting space",
    icon: Users,
    features: ["Hourly meeting room booking", "Video conferencing setup", "Catering options available"],
    size: "small",
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
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export function VirtualOfficePackages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-[#FAFAFA]">
      {/* Radial gold gradient */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse 60% 40% at 50% 0%, hsl(var(--gold) / 0.04) 0%, transparent 50%)`,
        }}
      />
      
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 50%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 50%, transparent 100%)",
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
          <span className="section-badge">Virtual Office Packages</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-primary">
            Choose Your Virtual Office in Bahrain
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible packages designed to meet every business need, from simple address services 
            to complete virtual office solutions.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.id}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  pkg.featured
                    ? "lg:col-span-2 lg:row-span-1 bg-primary text-primary-foreground shadow-lg"
                    : "bg-background border border-border hover:border-accent/30 hover:shadow-md"
                }`}
              >
                {/* Featured Badge */}
                {pkg.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                )}

                <div className="p-6 md:p-8">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                    pkg.featured ? "bg-accent/20" : "bg-accent/10 group-hover:bg-accent/20"
                  } transition-colors`}>
                    <Icon className={`w-7 h-7 ${pkg.featured ? "text-accent" : "text-accent"}`} />
                  </div>

                  {/* Title & Description */}
                  <h3 className={`text-xl font-bold mb-2 ${pkg.featured ? "" : "text-primary"}`}>
                    {pkg.title}
                  </h3>
                  <p className={`text-sm mb-5 ${pkg.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {pkg.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          pkg.featured ? "bg-accent/30" : "bg-accent/10"
                        }`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${pkg.featured ? "bg-accent" : "bg-accent"}`} />
                        </div>
                        <span className={`text-sm ${pkg.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  pkg.featured ? "opacity-100" : ""
                }`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
