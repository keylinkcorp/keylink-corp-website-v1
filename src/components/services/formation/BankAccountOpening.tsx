import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Clock, FileCheck, CheckCircle2, ArrowRight, Banknote } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Link } from "react-router-dom";

const banks = [
  { name: "National Bank of Bahrain (NBB)", timeline: "2-3 weeks", minDeposit: "BHD 500", bestFor: "Local SMEs & Startups" },
  { name: "Bank of Bahrain & Kuwait (BBK)", timeline: "2-3 weeks", minDeposit: "BHD 1,000", bestFor: "Trading Companies" },
  { name: "Ahli United Bank", timeline: "2-4 weeks", minDeposit: "BHD 2,000", bestFor: "Regional Operations" },
  { name: "Standard Chartered", timeline: "3-4 weeks", minDeposit: "USD 10,000", bestFor: "International Business" },
];

const requiredDocs = [
  "Company Commercial Registration (CR) certificate",
  "Trade license copy",
  "Memorandum & Articles of Association",
  "Shareholder passport copies",
  "Proof of residential address",
  "Business plan summary",
  "Board resolution for signatories",
];

export function BankAccountOpening() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />

      <div className="container relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Banknote className="h-5 w-5 text-accent" />
              </div>
              <p className="text-sm font-medium text-accent tracking-wide uppercase">
                Corporate Banking
              </p>
            </div>
            <h2 className="text-[32px] md:text-[40px] lg:text-[46px] font-bold text-primary mb-4 tracking-tight leading-[1.15]">
              Opening a Corporate Bank Account
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A corporate bank account is essential to activate your Bahrain company. 
              We introduce you to relationship managers at all major banks.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Left Column - Bank Comparison */}
            <motion.div variants={staggerItem}>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-bold text-primary">Top Banks for Business Accounts</h3>
              </div>

              <div className="space-y-4">
                {banks.map((bank, index) => (
                  <div 
                    key={bank.name}
                    className="bg-white rounded-xl border border-border p-5 hover:shadow-md hover:border-accent/40 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <h4 className="font-semibold text-primary">{bank.name}</h4>
                      <span className="text-xs bg-accent/10 text-primary px-3 py-1 rounded-full font-medium">
                        {bank.bestFor}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4 text-accent" />
                        <span>{bank.timeline}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Banknote className="h-4 w-4 text-accent" />
                        <span>Min: {bank.minDeposit}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground mt-4">
                We work with all major Bahraini and international banks to find the best fit for your business needs.
              </p>
            </motion.div>

            {/* Right Column - Required Documents */}
            <motion.div variants={staggerItem}>
              <div className="flex items-center gap-3 mb-6">
                <FileCheck className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-bold text-primary">Required Documents</h3>
              </div>

              <div className="bg-white rounded-xl border border-border p-6 mb-6">
                <ul className="space-y-3">
                  {requiredDocs.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Service */}
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <h4 className="font-bold text-primary mb-3">Our Bank Introduction Service</h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We don't just prepare your documents — we introduce you directly to relationship managers 
                  at your chosen bank, schedule appointments, and follow up until your account is active.
                </p>
                <ul className="space-y-2 mb-5">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Direct introductions to bank officers
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Document preparation & review
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Application follow-up & support
                  </li>
                </ul>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link 
                    to="/free-consultation"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors"
                  >
                    Include in Your Package
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
