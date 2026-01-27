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
  Globe
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
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div variants={staggerItem}>
            <span className="section-badge">Entity Types</span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your <span className="text-accent">Company Structure</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare different CR types to find the right structure for your business goals
          </motion.p>
        </motion.div>

        {/* Type Selector Tabs */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {entityTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveType(type.id)}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-full border-2 transition-all",
                activeType === type.id
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-foreground border-border hover:border-accent"
              )}
            >
              <type.icon className="w-5 h-5" />
              <span className="font-medium">{type.name.split(" (")[0]}</span>
              {type.popular && (
                <span className="px-2 py-0.5 bg-accent text-primary text-xs font-semibold rounded-full">
                  Popular
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Selected Type Details */}
        <motion.div
          key={activeType}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-2xl border border-border shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Main Info */}
              <div className="lg:col-span-2 p-8 lg:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <selectedType.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{selectedType.name}</h3>
                    <p className="text-muted-foreground">{selectedType.bestFor}</p>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                    <Coins className="w-5 h-5 text-accent" />
                    <div>
                      <div className="text-sm text-muted-foreground">Minimum Capital</div>
                      <div className="font-semibold">{selectedType.capital}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                    <Globe className="w-5 h-5 text-accent" />
                    <div>
                      <div className="text-sm text-muted-foreground">Foreign Ownership</div>
                      <div className="font-semibold">{selectedType.ownership}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                    <Clock className="w-5 h-5 text-accent" />
                    <div>
                      <div className="text-sm text-muted-foreground">Processing Time</div>
                      <div className="font-semibold">{selectedType.processing}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                    <Building2 className="w-5 h-5 text-accent" />
                    <div>
                      <div className="text-sm text-muted-foreground">Liability</div>
                      <div className="font-semibold">{selectedType.liability}</div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <h4 className="font-semibold mb-4">Key Features</h4>
                <div className="space-y-3">
                  {selectedType.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Side */}
              <div className="bg-primary p-8 lg:p-10 text-white flex flex-col justify-center">
                <h4 className="text-xl font-bold mb-4">
                  Ready to Register Your {selectedType.name.split(" (")[0]}?
                </h4>
                <p className="text-white/70 mb-6">
                  Get expert guidance on choosing the right entity type and complete your 
                  registration with zero hassle.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Free entity type consultation</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>100% success rate guarantee</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Remote registration available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Comparison Table */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 overflow-x-auto"
        >
          <div className="bg-white rounded-xl border border-border p-6 min-w-[768px]">
            <h4 className="font-semibold mb-4">Quick Comparison</h4>
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Entity Type</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Best For</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Capital</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Processing</th>
                </tr>
              </thead>
              <tbody>
                {entityTypes.map((type) => (
                  <tr 
                    key={type.id} 
                    className={cn(
                      "border-b border-border/50 last:border-0 cursor-pointer hover:bg-secondary/30 transition-colors",
                      activeType === type.id && "bg-accent/5"
                    )}
                    onClick={() => setActiveType(type.id)}
                  >
                    <td className="py-3 px-4 font-medium">{type.name.split(" (")[0]}</td>
                    <td className="py-3 px-4 text-muted-foreground">{type.bestFor}</td>
                    <td className="py-3 px-4">{type.capital}</td>
                    <td className="py-3 px-4">{type.processing}</td>
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
