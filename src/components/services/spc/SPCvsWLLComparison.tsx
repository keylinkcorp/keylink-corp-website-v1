import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  User, 
  Users, 
  CheckCircle2,
  Clock,
  Coins,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const comparisonData = [
  { attribute: "Shareholders", spc: "1 only", wll: "2-50" },
  { attribute: "Minimum Capital", spc: "BHD 50", wll: "BHD 20,000" },
  { attribute: "Best For", spc: "Solo entrepreneurs", wll: "Partnerships" },
  { attribute: "Control", spc: "Full owner control", wll: "Shared decision-making" },
  { attribute: "Conversion", spc: "Can upgrade to WLL", wll: "N/A" },
  { attribute: "Processing", spc: "3-14 days", wll: "5-7 days" },
];

const entityTypes = [
  {
    id: "spc",
    icon: User,
    name: "Single Person Company",
    description: "Perfect for solo entrepreneurs who want full control with minimal capital",
    popular: true
  },
  {
    id: "wll",
    icon: Users,
    name: "WLL (Partnership)",
    description: "Ideal for businesses with multiple shareholders and larger operations",
    popular: false
  }
];

export function SPCvsWLLComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeType, setActiveType] = useState("spc");

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Dot grid pattern */}
      <div className="absolute inset-0 -z-10 bg-secondary/30 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20 mb-4">
              <User className="w-4 h-4" />
              Compare Structures
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            SPC vs WLL: <span className="text-gold">Which is Right for You?</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understanding the key differences helps you choose the right structure for your business goals
          </motion.p>
        </motion.div>

        {/* Type Selector Tabs */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {entityTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveType(type.id)}
              className={cn(
                "relative flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 transition-all font-semibold",
                activeType === type.id
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-white text-foreground border-border hover:border-gold hover:shadow-sm"
              )}
            >
              <type.icon className="w-5 h-5" />
              <span>{type.name}</span>
              {type.popular && (
                <span className={cn(
                  "px-2 py-0.5 text-xs font-bold rounded-full",
                  activeType === type.id
                    ? "bg-gold text-primary"
                    : "bg-gold/10 text-gold"
                )}>
                  Recommended
                </span>
              )}
              {activeType === type.id && (
                <motion.div
                  layoutId="activeComparisonTab"
                  className="absolute -bottom-0.5 left-4 right-4 h-1 bg-gold rounded-full"
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Comparison Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-3xl border-2 border-border shadow-sm overflow-hidden hover:border-gold/50 transition-colors">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Comparison Table */}
              <div className="lg:col-span-2 p-8 md:p-10">
                <h3 className="text-xl font-bold mb-6">Quick Comparison</h3>
                
                <div className="space-y-4">
                  {comparisonData.map((row, index) => (
                    <div 
                      key={index}
                      className="grid grid-cols-3 gap-4 p-4 bg-secondary/40 rounded-xl"
                    >
                      <div className="font-medium text-muted-foreground">{row.attribute}</div>
                      <div className={cn(
                        "font-bold",
                        activeType === "spc" ? "text-gold" : "text-primary"
                      )}>
                        {row.spc}
                      </div>
                      <div className={cn(
                        "font-bold",
                        activeType === "wll" ? "text-gold" : "text-primary"
                      )}>
                        {row.wll}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key metrics */}
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-4 p-5 bg-secondary/60 rounded-xl border border-border">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                      <Coins className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-medium">SPC Minimum Capital</div>
                      <div className="font-bold text-lg text-gold">BHD 50</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-5 bg-secondary/60 rounded-xl border border-border">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-medium">SPC Processing Time</div>
                      <div className="font-bold text-lg text-gold">3-14 Days</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Side Panel */}
              <div className="bg-gradient-to-br from-primary via-primary to-primary/90 p-8 md:p-10 text-white flex flex-col justify-center relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
                
                <h4 className="text-2xl font-bold mb-4 relative z-10">
                  Ready to Start Your SPC?
                </h4>
                <p className="text-white/70 mb-8 text-lg relative z-10">
                  Get expert guidance on choosing the right structure and complete your registration with zero hassle.
                </p>
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                    <span className="font-medium">Free structure consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                    <span className="font-medium">100% success rate guarantee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                    <span className="font-medium">Remote registration available</span>
                  </div>
                </div>

                <a
                  href="/free-consultation"
                  className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-4 bg-gold text-primary rounded-xl font-bold hover:bg-gold/90 transition-colors shadow-lg relative z-10 group"
                >
                  Start Your SPC Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
