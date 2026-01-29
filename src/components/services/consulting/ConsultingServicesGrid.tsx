import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Building2, 
  Compass, 
  FileText, 
  Headphones,
  ChevronDown,
  Check
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Company Formation & Setup",
    description: "Complete company registration and licensing services",
    features: [
      "WLL, SPC, Branch Office formation",
      "Commercial Registration (CR)",
      "Business License acquisition",
      "Bank account opening",
      "MOIC & LMRA coordination"
    ]
  },
  {
    icon: Compass,
    title: "Strategic Business Advisory",
    description: "Expert guidance for market entry and growth",
    features: [
      "Market entry strategy",
      "Business structure optimization",
      "Regulatory landscape navigation",
      "Growth planning & execution",
      "Partnership & JV facilitation"
    ]
  },
  {
    icon: FileText,
    title: "Government Liaison (PRO)",
    description: "Seamless coordination with all government agencies",
    features: [
      "Ministry coordination",
      "Visa & immigration processing",
      "Labor clearances (LMRA)",
      "Trade license renewals",
      "Regulatory compliance"
    ]
  },
  {
    icon: Headphones,
    title: "Ongoing Operations Support",
    description: "Continuous support for smooth business operations",
    features: [
      "Accounting & bookkeeping",
      "VAT compliance",
      "Lease registration",
      "CR amendments & renewals",
      "Annual compliance management"
    ]
  }
];

export function ConsultingServicesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Dot Grid Pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-14">
            <span className="section-badge">Our Services</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Full-Spectrum Business Consultancy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From market entry to daily operations, we've got you covered.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group"
              >
                <div
                  className={`bg-white rounded-2xl border transition-all duration-300 h-full ${
                    expandedIndex === index
                      ? "border-accent shadow-lg"
                      : "border-border hover:border-accent/50 hover:shadow-md"
                  }`}
                >
                  {/* Card Header */}
                  <div className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <service.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {service.description}
                    </p>
                    
                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      {expandedIndex === index ? "Show Less" : "View Details"}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          expandedIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Expandable Features */}
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-border">
                          <ul className="space-y-2">
                            {service.features.map((feature, fIndex) => (
                              <li
                                key={fIndex}
                                className="flex items-start gap-2 text-sm"
                              >
                                <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
