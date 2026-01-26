import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Target, Wallet, Shield, Users, Award } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import consultantImage from "@/assets/formation-consultant.webp";

const differentiators = [
  {
    icon: Zap,
    title: "Fastest in Bahrain",
    description: "3-7 day average turnaround vs. industry standard 2-6 weeks.",
  },
  {
    icon: Target,
    title: "100% Success Rate",
    description: "Every eligible application approved. No failed formations in 10+ years.",
  },
  {
    icon: Wallet,
    title: "Lowest Transparent Pricing",
    description: "From BHD 750 with no hidden fees. Price match guarantee.",
  },
  {
    icon: Shield,
    title: "Government Authorized",
    description: "Registered with MOIC, LMRA, and Bahrain Chamber of Commerce.",
  },
  {
    icon: Users,
    title: "End-to-End Support",
    description: "From initial consultation to your first employee hire.",
  },
  {
    icon: Award,
    title: "500+ Companies Formed",
    description: "Trusted by startups, SMEs, and multinationals worldwide.",
  },
];

export function WhyChooseKeylink() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-white relative overflow-hidden">
      <div className="container relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">
            Why Keylink Corp
          </p>
          <h2 className="text-[44px] md:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
            Why 500+ Businesses Choose Keylink
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            We combine local expertise with international standards to deliver exceptional service and results.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <img 
                  src={consultantImage} 
                  alt="Keylink Corp Formation Consultant" 
                  className="w-full h-[480px] object-cover"
                />
              </div>
              {/* Floating stat */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-5 border border-border"
              >
                <p className="text-3xl font-bold text-gold">10+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Benefits grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-1 lg:order-2 grid sm:grid-cols-2 gap-8"
          >
            {differentiators.map((item, index) => (
              <motion.div 
                key={index} 
                variants={staggerItem}
                className="group"
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <item.icon className="h-6 w-6 text-gold" />
                </motion.div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-[1.7]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
