import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Receipt, 
  Info,
  CheckCircle2,
  Calculator
} from "lucide-react";

const fees = [
  {
    name: "Name Reservation",
    amount: "BHD 15",
    notes: "Valid for 60 days",
    category: "Registration"
  },
  {
    name: "CR Registration Fee",
    amount: "BHD 50",
    notes: "Annual fee (per year)",
    category: "Registration"
  },
  {
    name: "Trade License",
    amount: "BHD 20 - 200",
    notes: "Varies by number of activities",
    category: "Registration"
  },
  {
    name: "LMRA Registration",
    amount: "BHD 50",
    notes: "One-time fee for labor market access",
    category: "Post-Registration"
  },
  {
    name: "Chamber of Commerce",
    amount: "BHD 50 - 100",
    notes: "Annual membership fee",
    category: "Post-Registration"
  },
  {
    name: "Signatory Card",
    amount: "BHD 10",
    notes: "Per authorized signatory",
    category: "Registration"
  },
  {
    name: "Lease Attestation",
    amount: "BHD 20",
    notes: "If attestation required",
    category: "Optional"
  },
  {
    name: "Commercial Address Fee",
    amount: "BHD 100+",
    notes: "Virtual office or physical lease",
    category: "Optional"
  }
];

const registrationFees = fees.filter(f => f.category === "Registration");
const postRegistrationFees = fees.filter(f => f.category === "Post-Registration");
const optionalFees = fees.filter(f => f.category === "Optional");

export function CRGovernmentFees() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div variants={staggerItem}>
            <span className="section-badge">Transparent Pricing</span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-4">
            Government Fees for{" "}
            <span className="text-accent">Commercial Registration</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Official MOIC government fees for CR registration in Bahrain
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Registration Fees */}
            <motion.div
              variants={staggerItem}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-white rounded-2xl border border-border overflow-hidden"
            >
              <div className="p-5 border-b border-border bg-primary text-white">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-accent" />
                  Registration Fees
                </h3>
              </div>
              <div className="divide-y divide-border">
                {registrationFees.map((fee, index) => (
                  <div key={index} className="p-4">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium">{fee.name}</span>
                      <span className="font-bold text-primary">{fee.amount}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{fee.notes}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Post-Registration Fees */}
            <motion.div
              variants={staggerItem}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-white rounded-2xl border border-border overflow-hidden"
            >
              <div className="p-5 border-b border-border bg-accent/10">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  Post-Registration
                </h3>
              </div>
              <div className="divide-y divide-border">
                {postRegistrationFees.map((fee, index) => (
                  <div key={index} className="p-4">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium">{fee.name}</span>
                      <span className="font-bold text-primary">{fee.amount}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{fee.notes}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Optional Fees */}
            <motion.div
              variants={staggerItem}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-white rounded-2xl border border-border overflow-hidden"
            >
              <div className="p-5 border-b border-border bg-secondary">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-muted-foreground" />
                  Optional / Variable
                </h3>
              </div>
              <div className="divide-y divide-border">
                {optionalFees.map((fee, index) => (
                  <div key={index} className="p-4">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium">{fee.name}</span>
                      <span className="font-bold text-primary">{fee.amount}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{fee.notes}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Disclaimer */}
          <motion.div
            variants={staggerItem}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-8 p-6 bg-accent/5 border border-accent/20 rounded-xl"
          >
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold mb-2">Important Notes</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Government fees shown are official MOIC rates as of 2024 and may change.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Professional service fees for CR processing are quoted separately during consultation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Additional fees may apply for regulated activities requiring special permits.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>WLL companies require BHD 20,000 minimum capital deposit at a Bahraini bank.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={staggerItem}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mt-10"
          >
            <p className="text-muted-foreground mb-4">
              Want a detailed cost breakdown for your specific business?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              <Calculator className="w-5 h-5" />
              Get Free Cost Estimate
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
