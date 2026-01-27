import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, User, Building2, FileText, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const requirementCategories = [
  {
    id: "individual",
    icon: User,
    title: "For Individual Shareholders",
    items: [
      "Valid passport (6+ months validity)",
      "Passport-size photographs (white background)",
      "Proof of residential address (utility bill or bank statement)",
      "Professional CV/resume",
      "No objection letter (if currently employed)",
      "Personal bank statement (last 3 months)"
    ]
  },
  {
    id: "corporate",
    icon: Building2,
    title: "For Corporate Shareholders",
    items: [
      "Certificate of incorporation",
      "Memorandum & Articles of Association",
      "Board resolution authorizing investment in Bahrain",
      "Audited financial statements (last 2 years)",
      "Power of Attorney (for authorized representatives)",
      "Good standing certificate"
    ]
  },
  {
    id: "general",
    icon: FileText,
    title: "General Requirements",
    items: [
      "Business plan (required for certain activities)",
      "Initial share capital (varies by company type)",
      "Registered business address (physical or virtual)",
      "Completed application forms",
      "Activity description and trade name options"
    ]
  }
];

export function RequirementsChecklist() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["individual"]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-secondary/30 relative overflow-hidden">
      {/* Dashed pattern */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          maskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">
              Requirements
            </p>
            <h2 className="text-[44px] md:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
              What You'll Need
            </h2>
            <p className="text-lg text-muted-foreground leading-[1.8] mb-8">
              Prepare these documents to streamline your company formation process. Our team will guide you through each requirement.
            </p>

            {/* Pro tip */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gold/10 border border-gold/20 rounded-2xl p-6 flex gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="font-semibold text-primary mb-1">Pro Tip</p>
                <p className="text-muted-foreground text-sm leading-[1.7]">
                  Don't have all documents ready? No problem! Our team can advise on alternatives and help you prepare everything needed for a successful application.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Checklists */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {requirementCategories.map((category, index) => {
              const isExpanded = expandedCategories.includes(category.id);
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className={cn(
                    "bg-white rounded-2xl border overflow-hidden transition-all duration-300",
                    isExpanded 
                      ? "border-gold/40 shadow-md" 
                      : "border-border hover:border-gold/20"
                  )}
                >
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full px-6 py-5 flex items-center gap-4 text-left"
                  >
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                      isExpanded ? "bg-gold text-primary" : "bg-gold/10 text-gold"
                    )}>
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <h3 className="flex-1 text-lg font-semibold text-primary">
                      {category.title}
                    </h3>

                    <ChevronDown className={cn(
                      "h-5 w-5 text-muted-foreground transition-transform duration-300",
                      isExpanded && "rotate-180"
                    )} />
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 ml-16">
                          <ul className="space-y-3">
                            {category.items.map((item, itemIndex) => (
                              <motion.li 
                                key={itemIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                                className="flex items-start gap-3 text-muted-foreground"
                              >
                                <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                                {item}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
