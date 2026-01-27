import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  ShoppingCart, 
  Factory, 
  Briefcase, 
  Building2,
  CheckCircle2,
  Clock,
  Coins,
  Users,
  ArrowRight,
  Star
} from "lucide-react";
import { cn } from "@/lib/utils";

const licenseTypes = [
  {
    id: "commercial",
    icon: ShoppingCart,
    name: "Commercial License",
    bestFor: "Trading, retail, import/export, e-commerce",
    activities: ["General trading", "Wholesale & distribution", "Commercial agencies", "Retail operations"],
    entity: "WLL, SPC, Branch Office",
    govFee: "BHD 50-200/year per activity",
    processing: "3-5 business days",
    popular: true
  },
  {
    id: "industrial",
    icon: Factory,
    name: "Industrial License",
    bestFor: "Manufacturing, production, assembly",
    activities: ["Factory operations", "Industrial processing", "Fabrication", "Assembly plants"],
    entity: "WLL, Holding Company",
    govFee: "BHD 100-300/year",
    processing: "5-10 business days",
    popular: false
  },
  {
    id: "professional",
    icon: Briefcase,
    name: "Professional License",
    bestFor: "Consultants, freelancers, service providers",
    activities: ["Legal & accounting", "IT consulting", "Engineering services", "Management consulting"],
    entity: "SPC (Single Person Company)",
    govFee: "BHD 50-100/year",
    processing: "3-5 business days",
    popular: false
  },
  {
    id: "services",
    icon: Building2,
    name: "Services License",
    bestFor: "Hospitality, tourism, healthcare, education",
    activities: ["Restaurants & hotels", "Clinics & healthcare", "Training centers", "Tourism services"],
    entity: "WLL, Branch",
    govFee: "BHD 100-250/year",
    processing: "5-7 business days",
    popular: false
  }
];

export function BLTypesComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeType, setActiveType] = useState("commercial");

  const selectedType = licenseTypes.find(t => t.id === activeType)!;

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Pattern */}
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
              License Categories
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Choose the Right <span className="text-accent">License for Your Business</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bahrain offers four main license categories based on your business activities
          </motion.p>
        </motion.div>

        {/* Type Selector Tabs */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {licenseTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveType(type.id)}
              className={cn(
                "relative flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 transition-all font-semibold",
                activeType === type.id
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-white text-foreground border-border hover:border-accent hover:shadow-sm"
              )}
            >
              <type.icon className="w-5 h-5" />
              <span>{type.name.replace(" License", "")}</span>
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

        {/* Selected Type Details */}
        <motion.div
          key={activeType}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-3xl border-2 border-border shadow-sm overflow-hidden hover:border-accent/50 transition-colors">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Main Info */}
              <div className="lg:col-span-2 p-10">
                <div className="flex items-start gap-5 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <selectedType.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{selectedType.name}</h3>
                    <p className="text-lg text-muted-foreground">{selectedType.bestFor}</p>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  <div className="flex items-center gap-4 p-5 bg-secondary/60 rounded-xl border border-border hover:border-accent/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Coins className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-medium">Government Fee</div>
                      <div className="font-bold text-lg">{selectedType.govFee}</div>
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
                  <div className="flex items-center gap-4 p-5 bg-secondary/60 rounded-xl border border-border hover:border-accent/30 transition-colors sm:col-span-2">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-medium">Typical Entity</div>
                      <div className="font-bold text-lg">{selectedType.entity}</div>
                    </div>
                  </div>
                </div>

                {/* Activities */}
                <h4 className="font-bold text-lg mb-5">Typical Activities</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedType.activities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg hover:bg-accent/10 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="font-medium">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Side */}
              <div className="bg-gradient-to-br from-primary via-primary to-primary/90 p-10 text-white flex flex-col justify-center relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
                
                <h4 className="text-2xl font-bold mb-4 relative z-10">
                  Not Sure Which License?
                </h4>
                <p className="text-white/70 mb-8 text-lg relative z-10">
                  Our experts analyze your activities and recommend the optimal license structure.
                </p>
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="font-medium">Free license consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="font-medium">Activity mapping included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="font-medium">100% success guarantee</span>
                  </div>
                </div>

                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-4 bg-accent text-primary rounded-xl font-bold hover:bg-accent/90 transition-colors shadow-lg relative z-10 group"
                >
                  Get Expert Advice
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Comparison Table */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-14 overflow-x-auto"
        >
          <div className="bg-white rounded-2xl border-2 border-border shadow-sm p-8 min-w-[768px]">
            <h4 className="font-bold text-xl mb-6">Quick Comparison</h4>
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-bold text-primary">License Type</th>
                  <th className="text-left py-4 px-4 font-bold text-primary">Best For</th>
                  <th className="text-left py-4 px-4 font-bold text-primary">Gov. Fee</th>
                  <th className="text-left py-4 px-4 font-bold text-primary">Processing</th>
                </tr>
              </thead>
              <tbody>
                {licenseTypes.map((type, index) => (
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
                    <td className="py-4 px-4 font-bold">{type.name}</td>
                    <td className="py-4 px-4 text-muted-foreground">{type.bestFor}</td>
                    <td className="py-4 px-4 font-semibold text-primary">{type.govFee}</td>
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
