import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { X, Check, Clock, TrendingUp, Eye, Receipt, Building2, FileCheck, Shield } from "lucide-react";

const comparisonRows = [
  {
    icon: Clock,
    factor: "Time Investment",
    diy: "3-5 office visits",
    pro: "0 visits",
    diyBad: true
  },
  {
    icon: TrendingUp,
    factor: "Success Rate",
    diy: "~60% first attempt",
    pro: "99.5% first attempt",
    diyBad: true
  },
  {
    icon: Eye,
    factor: "Processing Time",
    diy: "2-4 weeks",
    pro: "3-5 days standard",
    diyBad: true
  },
  {
    icon: Receipt,
    factor: "Hidden Costs",
    diy: "Re-submissions, travel, time off",
    pro: "Fixed quote upfront",
    diyBad: true
  },
  {
    icon: Building2,
    factor: "Arabic Forms",
    diy: "Your responsibility",
    pro: "We handle everything",
    diyBad: true
  },
  {
    icon: FileCheck,
    factor: "Embassy Protocols",
    diy: "Learn each embassy's rules",
    pro: "8+ years expertise",
    diyBad: true
  },
  {
    icon: Shield,
    factor: "Document Safety",
    diy: "You carry originals",
    pro: "Secure handling & tracking",
    diyBad: true
  }
];

export function CertificateAttestationDIYComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Pattern - Center ellipse fade */}
      <div className="absolute inset-0 -z-10 bg-white">
        <div 
          className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
          style={{
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)"
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              The Comparison
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              DIY vs. Keylink Attestation Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what you gain when you let professionals handle your attestation.
            </p>
          </motion.div>

          {/* Comparison Table */}
          <motion.div 
            variants={staggerItem}
            className="max-w-4xl mx-auto"
          >
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="font-semibold text-muted-foreground">Factor</div>
              <div className="text-center">
                <span className="inline-block px-4 py-2 bg-red-50 text-destructive rounded-lg font-semibold text-sm">
                  DIY Approach
                </span>
              </div>
              <div className="text-center">
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-lg font-semibold text-sm">
                  With Keylink
                </span>
              </div>
            </div>

            {/* Table Rows */}
            <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
              {comparisonRows.map((row, index) => (
                <div 
                  key={index}
                  className={`grid grid-cols-3 gap-4 px-6 py-5 ${
                    index !== comparisonRows.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  {/* Factor */}
                  <div className="flex items-center gap-3">
                    <row.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-sm md:text-base">{row.factor}</span>
                  </div>
                  
                  {/* DIY */}
                  <div className="flex items-center justify-center gap-2 text-center">
                    <X className="w-4 h-4 text-destructive flex-shrink-0 hidden md:block" />
                    <span className="text-sm text-muted-foreground">{row.diy}</span>
                  </div>
                  
                  {/* PRO */}
                  <div className="flex items-center justify-center gap-2 text-center">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 hidden md:block" />
                    <span className="text-sm font-medium text-foreground">{row.pro}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Line Summary */}
          <motion.div 
            variants={staggerItem}
            className="max-w-3xl mx-auto mt-10"
          >
            <div className="bg-primary rounded-2xl p-8 text-white text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                The Bottom Line
              </h3>
              <p className="text-white/80 mb-4">
                At BHD 75 for a complete attestation package, our service costs less than the 
                productivity lost from multiple office visits. With our 
                <span className="text-accent font-semibold"> 99.5% first-time approval rate</span>, 
                you skip the re-submission nightmare entirely.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div>
                  <span className="text-2xl font-bold text-accent">99.5%</span>
                  <span className="text-white/70 ml-2">Approval rate</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-accent">0</span>
                  <span className="text-white/70 ml-2">Office visits</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-accent">3-5</span>
                  <span className="text-white/70 ml-2">Days processing</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
