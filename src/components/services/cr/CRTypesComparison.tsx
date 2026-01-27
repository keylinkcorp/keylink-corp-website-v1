import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  User, 
  Users, 
  Building2, 
  Landmark,
  CheckCircle2,
  Clock,
  Coins,
  Globe,
  Star,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const entityTypes = [
  {
    id: "spc",
    icon: User,
    name: "Single Person Company (SPC)",
    bestFor: "Solo entrepreneurs & freelancers",
    capital: "BHD 50 minimum",
    ownership: "100% foreign allowed",
    processing: "3-5 business days",
    liability: "Limited to share capital",
    features: [
      "Single shareholder structure",
      "Simplest formation process",
      "Ideal for consultants & professionals",
      "Full management control",
      "Lower compliance requirements"
    ],
    popular: true
  },
  {
    id: "wll",
    icon: Users,
    name: "WLL (Limited Liability Company)",
    bestFor: "Partnerships & growing businesses",
    capital: "BHD 20,000 minimum",
    ownership: "100% foreign allowed",
    processing: "5-7 business days",
    liability: "Limited to share capital",
    features: [
      "2-50 shareholders allowed",
      "Suitable for partnerships",
      "Credibility with larger clients",
      "Flexible profit distribution",
      "Scalable structure"
    ],
    popular: false
  },
  {
    id: "branch",
    icon: Building2,
    name: "Branch Office",
    bestFor: "Foreign companies expanding to Bahrain",
    capital: "No minimum (parent company)",
    ownership: "Parent company retains 100%",
    processing: "7-10 business days",
    liability: "Parent company liable",
    features: [
      "Extension of parent company",
      "No separate legal entity",
      "Activities limited to parent's scope",
      "Profit repatriation allowed",
      "Requires parent company financials"
    ],
    popular: false
  },
  {
    id: "holding",
    icon: Landmark,
    name: "Holding Company",
    bestFor: "Investment vehicles & group structures",
    capital: "BHD 250,000 minimum",
    ownership: "100% foreign allowed",
    processing: "7-10 business days",
    liability: "Limited to share capital",
    features: [
      "Owns shares in other companies",
      "Tax optimization benefits",
      "Asset protection structure",
      "Dividend income focus",
      "Ideal for multi-company groups"
    ],
    popular: false
  }
];

export function CRTypesComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeType, setActiveType] = useState("spc");

  const selectedType = entityTypes.find(t => t.id === activeType)!;

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Pattern - Enhanced */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <Building2 className="w-4 h-4" />
              Entity Types
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Choose Your <span className="text-accent">Company Structure</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compare different CR types to find the right structure for your business goals
          </motion.p>
        </motion.div>

        {/* Type Selector Tabs - Enhanced with icons and gold underline */}
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
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                  : "bg-white text-foreground border-border hover:border-accent hover:shadow-md"
              )}
            >
              <type.icon className="w-5 h-5" />
              <span>{type.name.split(" (")[0]}</span>
              {type.popular && (
                <span className={cn(
                  "px-2 py-0.5 text-xs font-bold rounded-full",
                  activeType === type.id
                    ? "bg-accent text-primary"
                    : "bg-accent/10 text-accent"
                )}>
                  <Star className="w-3 h-3 inline mr-1" />
                  Popular
                </span>
              )}
              {activeType === type.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-0.5 left-4 right-4 h-1 bg-accent rounded-full"
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Selected Type Details - Enhanced */}
        <motion.div
          key={activeType}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-3xl border-2 border-border shadow-2xl overflow-hidden hover:border-accent/50 transition-colors">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Main Info */}
              <div className="lg:col-span-2 p-10">
                <div className="flex items-start gap-5 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <selectedType.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{selectedType.name}</h3>
                    <p className="text-lg text-muted-foreground">{selectedType.bestFor}</p>
                  </div>
                </div>

                {/* Key Metrics - Enhanced */}
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  <div className="flex items-center gap-4 p-5 bg-secondary/60 rounded-xl border border-border hover:border-accent/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Coins className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-medium">Minimum Capital</div>
                      <div className="font-bold text-lg">{selectedType.capital}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-5 bg-secondary/60 rounded-xl border border-border hover:border-accent/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-medium">Foreign Ownership</div>
                      <div className="font-bold text-lg">{selectedType.ownership}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-5 bg-secondary/60 rounded-xl border border-border hover:border-accent/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-medium">Processing Time</div>
                      <div className="font-bold text-lg">{selectedType.processing}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-5 bg-secondary/60 rounded-xl border border-border hover:border-accent/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-medium">Liability</div>
                      <div className="font-bold text-lg">{selectedType.liability}</div>
                    </div>
                  </div>
                </div>

                {/* Features - Enhanced */}
                <h4 className="font-bold text-lg mb-5">Key Features</h4>
                <div className="space-y-3">
                  {selectedType.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg hover:bg-accent/10 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Side - Enhanced with gradient */}
              <div className="bg-gradient-to-br from-primary via-primary to-primary/90 p-10 text-white flex flex-col justify-center relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
                
                <h4 className="text-2xl font-bold mb-4 relative z-10">
                  Ready to Register Your {selectedType.name.split(" (")[0]}?
                </h4>
                <p className="text-white/70 mb-8 text-lg relative z-10">
                  Get expert guidance on choosing the right entity type and complete your 
                  registration with zero hassle.
                </p>
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="font-medium">Free entity type consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="font-medium">100% success rate guarantee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="font-medium">Remote registration available</span>
                  </div>
                </div>

                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-4 bg-accent text-primary rounded-xl font-bold hover:bg-accent/90 transition-colors shadow-lg relative z-10 group"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Comparison Table - Enhanced */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-14 overflow-x-auto"
        >
          <div className="bg-white rounded-2xl border-2 border-border shadow-lg p-8 min-w-[768px]">
            <h4 className="font-bold text-xl mb-6">Quick Comparison</h4>
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-bold text-primary">Entity Type</th>
                  <th className="text-left py-4 px-4 font-bold text-primary">Best For</th>
                  <th className="text-left py-4 px-4 font-bold text-primary">Capital</th>
                  <th className="text-left py-4 px-4 font-bold text-primary">Processing</th>
                </tr>
              </thead>
              <tbody>
                {entityTypes.map((type, index) => (
                  <tr 
                    key={type.id} 
                    className={cn(
                      "border-b border-border/50 last:border-0 cursor-pointer transition-all",
                      activeType === type.id 
                        ? "bg-accent/10" 
                        : index % 2 === 0 ? "bg-secondary/30" : "bg-white",
                      "hover:bg-accent/10"
                    )}
                    onClick={() => setActiveType(type.id)}
                  >
                    <td className="py-4 px-4 font-bold">{type.name.split(" (")[0]}</td>
                    <td className="py-4 px-4 text-muted-foreground">{type.bestFor}</td>
                    <td className="py-4 px-4 font-semibold text-primary">{type.capital}</td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent font-semibold rounded-full text-sm">
                        <Clock className="w-3 h-3" />
                        {type.processing}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
