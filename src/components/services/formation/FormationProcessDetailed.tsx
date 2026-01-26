import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, Building2, Landmark, Users, MapPin, FileCheck, 
  Stamp, Wallet, ClipboardList, HeartPulse, IdCard, CreditCard,
  ChevronDown, Clock, CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessStep {
  icon: React.ElementType;
  title: string;
  description: string;
  requirements?: string[];
  timeframe: string;
}

interface Phase {
  id: string;
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

const phases: Phase[] = [
  {
    id: "phase-1",
    title: "Phase 1",
    subtitle: "Initial Registration and Documentation",
    steps: [
      {
        icon: ShieldCheck,
        title: "Security Approval Application",
        description: "The company formation process begins with security approval from Bahrain's Ministry of Interior, verifying backgrounds of shareholders and directors. Our team handles document preparation and submission, ensuring 100% approval success for eligible applicants.",
        requirements: [
          "Passport copies of shareholders/directors",
          "Security clearance application form",
          "Professional CV for each shareholder",
          "Proof of address"
        ],
        timeframe: "3-5 working days"
      },
      {
        icon: Building2,
        title: "Company Name Registration",
        description: "Submit up to four commercial names for approval by the Ministry of Industry and Commerce (MOIC). Names must comply with local regulations and reflect your business activities.",
        timeframe: "1-2 days"
      },
      {
        icon: Landmark,
        title: "Capital Requirements",
        description: "Determine the minimum share capital based on your company type and business plan. For limited liability companies (WLL), capital is based on operational needs. Once deposited, your bank issues a capital deposit certificate required for registration.",
        timeframe: "Same day"
      },
      {
        icon: Users,
        title: "Partner & Director Setup",
        description: "Select partners based on skills and resources. Appoint a director to manage daily operations and ensure legal compliance. Designate an authorized signatory (typically the director) to sign official documents on behalf of the company.",
        timeframe: "Same day"
      }
    ]
  },
  {
    id: "phase-2",
    title: "Phase 2",
    subtitle: "Location Setup and Government Approvals",
    steps: [
      {
        icon: MapPin,
        title: "Business Address Registration",
        description: "Register your company with a valid business address. Choose between a physical office location or a virtual office address. Virtual offices offer cost savings while meeting legal requirements and providing a professional business presence.",
        timeframe: "1-2 days"
      },
      {
        icon: FileCheck,
        title: "Sector-Specific Approvals",
        description: "Certain business activities require additional approvals from regulatory bodies. Industries like finance, healthcare, and energy need specialized licenses. Our team identifies all required permits for your specific business type.",
        timeframe: "Varies by sector"
      },
      {
        icon: Stamp,
        title: "Document Notarization",
        description: "Key company documents, including the Memorandum of Association and Deed of Association, must be notarized by a certified notary office in Bahrain. This step validates your company's legal structure and is mandatory for registration.",
        timeframe: "Same day"
      },
      {
        icon: Wallet,
        title: "Corporate Bank Account",
        description: "Open a corporate bank account to deposit share capital and manage business finances. We assist with account opening at all major Bahrain banks.",
        requirements: [
          "Business plan",
          "Capital deposit certificate",
          "Shareholder identification",
          "Company registration papers"
        ],
        timeframe: "2-3 days"
      }
    ]
  },
  {
    id: "phase-3",
    title: "Phase 3",
    subtitle: "Final Registrations and Compliance",
    steps: [
      {
        icon: ClipboardList,
        title: "LMRA Registration",
        description: "Register with the Labour Market Regulatory Authority (LMRA) to hire employees. This registration is mandatory for obtaining work visas and residence permits for foreign staff.",
        timeframe: "1-2 days"
      },
      {
        icon: HeartPulse,
        title: "Medical Examination",
        description: "Required for certain roles, particularly in healthcare and food services. Employees must complete medical examinations at approved health facilities.",
        timeframe: "1-2 days"
      },
      {
        icon: IdCard,
        title: "Residence Permit",
        description: "Foreign nationals living or working in Bahrain require a valid Residence Permit. Requirements include company registration documents, proof of employment, and a valid business address.",
        timeframe: "3-5 days"
      },
      {
        icon: CreditCard,
        title: "Bahrain ID Card (CPR)",
        description: "All employees must obtain a Bahrain ID Card (CPR - Central Population Registry). This applies to both Bahraini nationals and foreign workers and is required for legal employment.",
        timeframe: "2-3 days"
      }
    ]
  }
];

export function FormationProcessDetailed() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activePhase, setActivePhase] = useState("phase-1");
  const [expandedSteps, setExpandedSteps] = useState<string[]>([]);

  const toggleStep = (stepId: string) => {
    setExpandedSteps(prev => 
      prev.includes(stepId) 
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  const activePhaseData = phases.find(p => p.id === activePhase);

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-secondary/30 relative overflow-hidden">
      {/* Dot grid pattern */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, #000 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, #000 40%, transparent 100%)",
        }}
      />
      
      <div className="container relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">
            Step-by-Step Process
          </p>
          <h2 className="text-[44px] md:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
            Your Complete Formation Journey
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            Our comprehensive 3-phase process ensures a smooth and compliant company formation experience.
          </p>
        </motion.div>

        {/* Phase Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {phases.map((phase, index) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(phase.id)}
              className={cn(
                "relative px-6 py-4 rounded-xl font-medium transition-all duration-300",
                activePhase === phase.id
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-white text-muted-foreground hover:bg-primary/5 border border-border"
              )}
            >
              <span className="flex items-center gap-3">
                <span className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                  activePhase === phase.id
                    ? "bg-gold text-primary"
                    : "bg-primary/10 text-primary"
                )}>
                  {index + 1}
                </span>
                <span className="hidden sm:block">
                  <span className="block text-left font-semibold">{phase.title}</span>
                  <span className={cn(
                    "block text-xs",
                    activePhase === phase.id ? "text-white/80" : "text-muted-foreground"
                  )}>
                    {phase.subtitle}
                  </span>
                </span>
              </span>
            </button>
          ))}
        </motion.div>

        {/* Steps Accordion */}
        <AnimatePresence mode="wait">
          {activePhaseData && (
            <motion.div
              key={activePhaseData.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto space-y-4"
            >
              {activePhaseData.steps.map((step, stepIndex) => {
                const stepId = `${activePhaseData.id}-step-${stepIndex}`;
                const isExpanded = expandedSteps.includes(stepId);
                const Icon = step.icon;

                return (
                  <motion.div
                    key={stepId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: stepIndex * 0.1 }}
                    className={cn(
                      "bg-white rounded-2xl border overflow-hidden transition-all duration-300",
                      isExpanded 
                        ? "border-gold/40 shadow-lg border-l-4 border-l-gold" 
                        : "border-border hover:border-gold/20"
                    )}
                  >
                    <button
                      onClick={() => toggleStep(stepId)}
                      className="w-full px-6 py-5 flex items-center gap-4 text-left"
                    >
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                        isExpanded ? "bg-gold text-primary" : "bg-gold/10 text-gold"
                      )}>
                        <Icon className="h-6 w-6" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-gold">
                            Step {stepIndex + 1}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                            <Clock className="h-3 w-3" />
                            {step.timeframe}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-primary">
                          {step.title}
                        </h3>
                      </div>

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
                            <p className="text-muted-foreground leading-[1.8] mb-4">
                              {step.description}
                            </p>
                            
                            {step.requirements && step.requirements.length > 0 && (
                              <div className="mt-4 p-4 bg-secondary/50 rounded-xl">
                                <p className="text-sm font-semibold text-primary mb-3">
                                  Requirements:
                                </p>
                                <ul className="space-y-2">
                                  {step.requirements.map((req, reqIndex) => (
                                    <li 
                                      key={reqIndex}
                                      className="flex items-start gap-2 text-sm text-muted-foreground"
                                    >
                                      <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                                      {req}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Timeline badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary rounded-full text-white">
            <Clock className="h-5 w-5 text-gold" />
            <span className="font-medium">Complete Formation in 3-7 Business Days</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
