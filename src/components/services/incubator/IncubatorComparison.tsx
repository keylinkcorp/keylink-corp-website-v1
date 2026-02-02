import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X, Quote } from "lucide-react";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const comparisonData = [
  { factor: "Company Formation", direct: "Handle separately", keylink: "Included & optimized for programs" },
  { factor: "Application Review", direct: "One attempt", keylink: "Pre-vetted with unlimited revisions" },
  { factor: "Program Access", direct: "Public inbox", keylink: "Direct relationships" },
  { factor: "Interview Prep", direct: "Figure it out", keylink: "Structured coaching" },
  { factor: "Timeline", direct: "3-4 months typical", keylink: "6-8 weeks average" },
  { factor: "Acceptance Rate", direct: "~53% first attempt", keylink: "85% first attempt" },
  { factor: "Post-Acceptance", direct: "On your own", keylink: "3 months support" },
  { factor: "Cost", direct: "Free (+ time)", keylink: "BHD 150-1,200" }
];

export function IncubatorComparison() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div variants={staggerItem}>
              <span className="section-badge">The Keylink Advantage</span>
            </motion.div>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Why Use Keylink vs. <span className="text-accent">Applying Directly?</span>
            </motion.h2>
          </div>

          {/* Comparison Table */}
          <motion.div 
            variants={staggerItem}
            className="max-w-4xl mx-auto bg-background rounded-2xl border-2 border-border overflow-hidden shadow-sm"
          >
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-muted">
              <div className="p-4 md:p-6 font-semibold text-sm">Factor</div>
              <div className="p-4 md:p-6 text-center border-l border-border">
                <span className="text-muted-foreground text-sm font-semibold">Direct Application</span>
              </div>
              <div className="p-4 md:p-6 text-center border-l border-border bg-accent/10">
                <span className="text-accent text-sm font-bold">With Keylink</span>
              </div>
            </div>

            {/* Data Rows */}
            {comparisonData.map((row, index) => (
              <div 
                key={index} 
                className="grid grid-cols-3 border-t border-border"
              >
                <div className="p-4 md:p-6 font-medium text-sm flex items-center">
                  {row.factor}
                </div>
                <div className="p-4 md:p-6 text-center border-l border-border flex items-center justify-center">
                  <span className="text-muted-foreground text-sm flex items-center gap-2">
                    <X className="w-4 h-4 text-destructive/60 flex-shrink-0 hidden md:block" />
                    {row.direct}
                  </span>
                </div>
                <div className="p-4 md:p-6 text-center border-l border-border bg-accent/5 flex items-center justify-center">
                  <span className="text-sm font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 hidden md:block" />
                    {row.keylink}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Quote Box */}
          <motion.div 
            variants={staggerItem}
            className="max-w-3xl mx-auto mt-12 bg-primary text-primary-foreground rounded-2xl p-8 relative"
          >
            <Quote className="absolute top-6 left-6 w-8 h-8 text-accent/30" />
            <p className="text-lg md:text-xl leading-relaxed text-center relative z-10">
              "Most founders who apply directly get rejected not because their idea is bad, 
              but because their documentation doesn't match what programs are actually looking for. 
              We've reviewed 200+ applications — <span className="text-accent font-semibold">we know exactly what works.</span>"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
