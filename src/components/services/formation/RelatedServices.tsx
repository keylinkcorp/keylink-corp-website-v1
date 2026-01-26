import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, RefreshCw, Plane, FileCheck, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import { staggerContainer, staggerItem } from "@/lib/animations";

const services = [
  {
    icon: RefreshCw,
    title: "Commercial Registration Renewal",
    description: "Annual CR renewal and ongoing compliance services to keep your business in good standing.",
    link: "/services/cr-renewal",
  },
  {
    icon: Plane,
    title: "Visa & Immigration",
    description: "Work visas, family visas, and the prestigious Golden Visa program for qualified investors.",
    link: "/services/visa-immigration",
  },
  {
    icon: FileCheck,
    title: "PRO Services",
    description: "Government liaison and document processing to handle all your administrative needs.",
    link: "/services/pro-services",
  },
  {
    icon: Calculator,
    title: "Accounting & Tax",
    description: "Professional bookkeeping, VAT registration, and comprehensive audit support.",
    link: "/services/accounting",
  },
];

export function RelatedServices() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-secondary/30 relative overflow-hidden">
      <div className="container relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">
            Complete Business Support
          </p>
          <h2 className="text-[44px] md:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
            Related Services
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            Beyond company formation, we provide comprehensive business support services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Link 
                to={service.link}
                className="block h-full bg-white rounded-2xl p-8 border border-border/50 hover:border-gold/40 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <service.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-[1.7] mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-gold font-medium text-sm group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
