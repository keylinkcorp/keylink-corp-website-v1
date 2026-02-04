import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { X, Check } from "lucide-react";

const comparisonRows = [
  {
    factor: "Sponsor Quality",
    diy: "Unknown background",
    keylink: "5-point vetted network"
  },
  {
    factor: "Legal Protection",
    diy: "Basic or none",
    keylink: "Comprehensive framework"
  },
  {
    factor: "Documentation",
    diy: "Generic templates",
    keylink: "Custom legal drafting"
  },
  {
    factor: "Dispute Risk",
    diy: "High (no safeguards)",
    keylink: "Minimal (binding agreements)"
  },
  {
    factor: "Time to Arrange",
    diy: "2-6 months",
    keylink: "5-7 business days"
  },
  {
    factor: "Replacement if Issues",
    diy: "Start from scratch",
    keylink: "Free sponsor replacement"
  },
  {
    factor: "Cost Predictability",
    diy: "Hidden fees possible",
    keylink: "Fixed annual fee"
  }
];

export function SponsorshipComparison() {
  const ref = useRef(null);
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
            <span className="section-badge">
              The Comparison
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Finding a Sponsor Yourself vs. Working With Keylink
            </h2>
          </motion.div>

          {/* Comparison Cards Grid */}
          <motion.div 
            variants={staggerItem}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto"
          >
            {comparisonRows.map((row, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Card Header - Factor Name */}
                <div className="px-5 py-4 border-b border-border bg-secondary/30">
                  <h3 className="font-semibold text-foreground text-sm">
                    {row.factor}
                  </h3>
                </div>

                {/* Card Body - Comparison */}
                <div className="p-5 space-y-4">
                  {/* DIY Row */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                      <X className="w-3 h-3 text-destructive" />
                    </div>
                    <div>
                      <span className="text-[11px] font-medium text-destructive/80 uppercase tracking-wide">DIY</span>
                      <p className="text-sm text-muted-foreground leading-snug">{row.diy}</p>
                    </div>
                  </div>

                  {/* Keylink Row */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <div>
                      <span className="text-[11px] font-medium text-accent uppercase tracking-wide">Keylink</span>
                      <p className="text-sm text-foreground font-medium leading-snug">{row.keylink}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Line Box */}
          <motion.div 
            variants={staggerItem}
            className="mt-12 max-w-3xl mx-auto"
          >
            <div className="bg-accent/5 rounded-2xl p-6 border border-accent/20 text-center">
              <p className="text-lg text-foreground leading-relaxed">
                The <span className="font-bold text-accent">BHD 600/year</span> investment in professional sponsorship arrangement costs less than a single hour of legal consultation if disputes arise later.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
