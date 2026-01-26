import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const companyTypes = [
  {
    name: "SPC",
    fullName: "Single Person Company",
    bestFor: "Solo entrepreneurs",
    ownership: "100%",
    minShareholders: "1",
    minCapital: "BHD 50",
    timeline: "3-5 days",
    price: "BHD 750",
    popular: false,
  },
  {
    name: "WLL",
    fullName: "Limited Liability Company",
    bestFor: "Partnerships & SMEs",
    ownership: "100%",
    minShareholders: "2-50",
    minCapital: "BHD 20,000",
    timeline: "5-7 days",
    price: "BHD 1,200",
    popular: true,
  },
  {
    name: "Branch Office",
    fullName: "Branch of Foreign Company",
    bestFor: "Foreign expansion",
    ownership: "100%",
    minShareholders: "Parent Company",
    minCapital: "Parent's Capital",
    timeline: "7-10 days",
    price: "BHD 1,500",
    popular: false,
  },
  {
    name: "Holding Company",
    fullName: "Bahrain Holding Company",
    bestFor: "Investment vehicles",
    ownership: "100%",
    minShareholders: "1+",
    minCapital: "BHD 250,000",
    timeline: "7-10 days",
    price: "BHD 2,500",
    popular: false,
  },
];

const features = [
  { label: "Best For", key: "bestFor" },
  { label: "Foreign Ownership", key: "ownership" },
  { label: "Min. Shareholders", key: "minShareholders" },
  { label: "Min. Capital", key: "minCapital" },
  { label: "Timeline", key: "timeline" },
  { label: "Starting Price", key: "price" },
];

export function CompanyTypesComparison() {
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">
            Company Types
          </p>
          <h2 className="text-[44px] md:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
            Choose the Right Company Structure
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            Select the business entity that best fits your goals. All structures allow 100% foreign ownership.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <div className="min-w-[800px]">
            {/* Header row */}
            <div className="grid grid-cols-5 gap-4 mb-4">
              <div className="p-4" /> {/* Empty cell for feature labels */}
              {companyTypes.map((type, index) => (
                <motion.div 
                  key={type.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className={`relative p-6 rounded-t-2xl text-center ${
                    type.popular 
                      ? "bg-primary text-white" 
                      : "bg-secondary/50"
                  }`}
                >
                  {type.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-gold text-primary text-xs font-semibold rounded-full">
                      <Star className="h-3 w-3 fill-current" />
                      Most Popular
                    </div>
                  )}
                  <h3 className={`text-2xl font-bold mb-1 ${type.popular ? "text-white" : "text-primary"}`}>
                    {type.name}
                  </h3>
                  <p className={`text-sm ${type.popular ? "text-white/80" : "text-muted-foreground"}`}>
                    {type.fullName}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Feature rows */}
            {features.map((feature, featureIndex) => (
              <div 
                key={feature.key}
                className={`grid grid-cols-5 gap-4 ${
                  featureIndex % 2 === 0 ? "bg-secondary/30" : "bg-white"
                }`}
              >
                <div className="p-4 font-medium text-primary">
                  {feature.label}
                </div>
                {companyTypes.map((type) => (
                  <div 
                    key={`${type.name}-${feature.key}`}
                    className={`p-4 text-center ${
                      type.popular ? "bg-primary/5 font-medium" : ""
                    } ${feature.key === "price" ? "text-gold font-bold text-lg" : "text-muted-foreground"}`}
                  >
                    {feature.key === "ownership" ? (
                      <span className="flex items-center justify-center gap-1">
                        <Check className="h-4 w-4 text-green-500" />
                        {type[feature.key as keyof typeof type]}
                      </span>
                    ) : (
                      type[feature.key as keyof typeof type]
                    )}
                  </div>
                ))}
              </div>
            ))}

            {/* CTA row */}
            <div className="grid grid-cols-5 gap-4 mt-4">
              <div className="p-4" />
              {companyTypes.map((type) => (
                <div key={`cta-${type.name}`} className="p-4 text-center">
                  <Link to="/free-consultation">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                        type.popular 
                          ? "bg-gold text-primary hover:bg-gold/90" 
                          : "bg-primary text-white hover:bg-primary/90"
                      }`}
                    >
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Help text */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-muted-foreground mt-8"
        >
          Not sure which structure is right for you?{" "}
          <Link to="/free-consultation" className="text-gold font-medium hover:underline">
            Get expert advice →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
