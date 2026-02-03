import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const stats = [
  { value: 2, suffix: "-3", label: "Weeks", sublabel: "Average Timeline" },
  { value: 500, prefix: "BHD ", label: "Min Deposit", sublabel: "Starting From" },
  { value: 4, label: "Partner Banks", sublabel: "Major Institutions" },
  { value: 95, suffix: "%", label: "Approval Rate", sublabel: "For Our Clients" },
];

const bankNames = [
  "National Bank of Bahrain",
  "Bank of Bahrain & Kuwait", 
  "Ahli United Bank",
  "Standard Chartered"
];

export function BankAccountOpening() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleContact = () => {
    const phone = "97317000000";
    const message = encodeURIComponent("Hi, I'm interested in your Bank Account Opening assistance service for my Bahrain company.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section
      ref={ref}
      aria-labelledby="bank-account-heading"
      className="py-24 lg:py-32 bg-white"
    >
      <div className="container max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-gold tracking-wide uppercase mb-3">
            Post-Formation Banking
          </p>
          <h2
            id="bank-account-heading"
            className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight"
          >
            Corporate Bank Account Opening
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Open your business bank account in Bahrain with our direct introductions to major banks.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-1">
                {stat.prefix}
                <AnimatedCounter value={stat.value} duration={1.5} />
                {stat.suffix}
              </div>
              <div className="text-sm font-medium text-primary">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border mb-12" />

        {/* Bank Names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Partner Banks
          </p>
          <p className="text-lg text-primary font-medium">
            {bankNames.join(" • ")}
          </p>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border mb-12" />

        {/* Inline CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">
            We handle bank introductions and documentation
          </p>
          <button
            onClick={handleContact}
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-gold transition-colors group"
          >
            Get bank introduction
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
