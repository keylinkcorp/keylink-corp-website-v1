import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";

const comparisonData = [
  {
    feature: "Monthly Cost",
    coworking: "From BHD 15/day",
    traditional: "BHD 800+/month minimum",
    isCoworkingBetter: true,
  },
  {
    feature: "Commitment",
    coworking: "No long-term contracts",
    traditional: "1-3 year lease required",
    isCoworkingBetter: true,
  },
  {
    feature: "Setup Time",
    coworking: "Start working tomorrow",
    traditional: "Weeks of setup & furnishing",
    isCoworkingBetter: true,
  },
  {
    feature: "Utilities & Internet",
    coworking: "All included",
    traditional: "Separate bills & contracts",
    isCoworkingBetter: true,
  },
  {
    feature: "Maintenance & Cleaning",
    coworking: "Fully managed",
    traditional: "Your responsibility",
    isCoworkingBetter: true,
  },
  {
    feature: "Networking",
    coworking: "Built-in community",
    traditional: "Isolated environment",
    isCoworkingBetter: true,
  },
  {
    feature: "Scalability",
    coworking: "Scale up/down anytime",
    traditional: "Locked into fixed size",
    isCoworkingBetter: true,
  },
  {
    feature: "Meeting Rooms",
    coworking: "On-demand booking",
    traditional: "Must build or rent separately",
    isCoworkingBetter: true,
  },
];

export function CoworkingComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/20" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse 70% 50% at 50% 0%, hsl(var(--gold) / 0.08) 0%, transparent 50%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
            maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-badge">Smart Choice</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-primary">
            Why Choose Coworking Over Traditional?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            See how flexible workspace compares to traditional office leases
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-background rounded-2xl border border-border overflow-hidden shadow-lg">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-primary text-primary-foreground">
              <div className="p-4 md:p-6 font-medium text-sm md:text-base">
                Feature
              </div>
              <div className="p-4 md:p-6 font-semibold text-sm md:text-base text-center border-l border-white/10">
                <span className="hidden sm:inline">Keylink </span>Coworking
              </div>
              <div className="p-4 md:p-6 font-medium text-sm md:text-base text-center border-l border-white/10 text-primary-foreground/70">
                Traditional Office
              </div>
            </div>

            {/* Table Body */}
            {comparisonData.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 ${
                  index % 2 === 0 ? "bg-background" : "bg-secondary/30"
                } ${index < comparisonData.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="p-4 md:p-5 text-sm md:text-base font-medium text-primary">
                  {row.feature}
                </div>
                <div className="p-4 md:p-5 text-sm md:text-base text-center border-l border-border">
                  <div className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-primary">{row.coworking}</span>
                  </div>
                </div>
                <div className="p-4 md:p-5 text-sm md:text-base text-center border-l border-border">
                  <div className="flex items-center justify-center gap-2">
                    <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{row.traditional}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Savings Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border border-accent/30 text-center"
          >
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Sparkles className="w-6 h-6 text-accent" />
              <p className="text-lg md:text-xl font-bold text-primary">
                Save up to <span className="text-accent">BHD 6,000/year</span> vs traditional office leases
              </p>
              <Sparkles className="w-6 h-6 text-accent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
