import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Star, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Starter",
    price: "750",
    timeline: "5-7 Business Days",
    description: "Perfect for solo entrepreneurs starting with SPC",
    popular: false,
    features: [
      "SPC Registration",
      "Commercial Registration",
      "Security Approval",
      "Name Registration",
      "Document Notarization",
      "Basic Support"
    ],
    cta: "Get Started"
  },
  {
    name: "Business",
    price: "1,200",
    timeline: "3-5 Business Days",
    description: "Ideal for partnerships and growing SMEs",
    popular: true,
    features: [
      "Everything in Starter",
      "WLL Registration",
      "Bank Account Assistance",
      "Virtual Office (3 months)",
      "LMRA Registration",
      "1 Work Visa Processing",
      "Priority Support"
    ],
    cta: "Most Popular"
  },
  {
    name: "Premium",
    price: "1,800",
    timeline: "2-3 Business Days",
    description: "Full-service package for established businesses",
    popular: false,
    features: [
      "Everything in Business",
      "Priority Processing",
      "Physical Office Setup",
      "3 Work Visas Included",
      "PRO Services (6 months)",
      "Dedicated Account Manager",
      "24/7 Priority Support"
    ],
    cta: "Contact Us"
  }
];

export function PricingPackages() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
      
      <div className="container relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">
            Pricing
          </p>
          <h2 className="text-[44px] md:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
            Transparent Pricing — No Hidden Fees
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            Choose the package that fits your business needs. All prices are fixed with no surprises.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={cn(
                "relative rounded-2xl p-8 transition-all duration-300",
                pkg.popular 
                  ? "bg-primary text-white shadow-sm scale-105" 
                  : "bg-white border-2 border-border hover:border-gold/40 hover:shadow-md"
              )}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-2 bg-gold text-primary text-sm font-semibold rounded-full">
                  <Star className="h-4 w-4 fill-current" />
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={cn(
                  "text-xl font-bold mb-2",
                  pkg.popular ? "text-white" : "text-primary"
                )}>
                  {pkg.name}
                </h3>
                <p className={cn(
                  "text-sm mb-4",
                  pkg.popular ? "text-white/80" : "text-muted-foreground"
                )}>
                  {pkg.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={cn(
                    "text-sm",
                    pkg.popular ? "text-white/80" : "text-muted-foreground"
                  )}>
                    BHD
                  </span>
                  <span className={cn(
                    "text-5xl font-bold",
                    pkg.popular ? "text-white" : "text-gold"
                  )}>
                    {pkg.price}
                  </span>
                </div>
                <div className={cn(
                  "flex items-center justify-center gap-1 mt-2 text-sm",
                  pkg.popular ? "text-white/80" : "text-muted-foreground"
                )}>
                  <Clock className="h-4 w-4" />
                  {pkg.timeline}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className={cn(
                      "flex items-start gap-3 text-sm",
                      pkg.popular ? "text-white/90" : "text-muted-foreground"
                    )}
                  >
                    <Check className={cn(
                      "h-5 w-5 flex-shrink-0 mt-0.5",
                      pkg.popular ? "text-gold" : "text-gold"
                    )} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to="/free-consultation" className="block">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2",
                    pkg.popular 
                      ? "bg-gold text-primary hover:bg-gold/90" 
                      : "bg-primary text-white hover:bg-primary/90"
                  )}
                >
                  {pkg.cta}
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Custom package note */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-muted-foreground mt-12"
        >
          Need a custom solution?{" "}
          <Link to="/free-consultation" className="text-gold font-medium hover:underline">
            Contact us for a tailored quote →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
