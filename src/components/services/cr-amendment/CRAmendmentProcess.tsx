import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  MessageSquare, 
  FileText, 
  Key, 
  Building2, 
  FileCheck,
  Clock,
  CheckCircle2,
  ChevronDown,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const processSteps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Initial Consultation",
    timeline: "Day 1",
    description: "We review your current CR and identify exactly what changes need filing.",
    details: [
      "Analyze current CR registration details",
      "Identify all required amendments",
      "Determine document requirements",
      "Fixed quote with no hidden fees",
      "Same-day consultation response"
    ]
  },
  {
    number: "02",
    icon: FileText,
    title: "Document Preparation",
    timeline: "Day 1-2",
    description: "Our team prepares all required documents, translations, and attestations.",
    details: [
      "Gather required documentation",
      "Arabic translations in-house",
      "Document attestation coordination",
      "Draft updated MOA if needed",
      "Prepare all government forms"
    ]
  },
  {
    number: "03",
    icon: Key,
    title: "eKey Authentication",
    timeline: "Day 2",
    description: "Using your eKey (Basic or Advanced), we authenticate and submit through Sijilat 3.0.",
    details: [
      "Secure eKey authentication",
      "Sijilat 3.0 portal submission",
      "Complete application filing",
      "Payment of government fees",
      "Submission confirmation obtained"
    ]
  },
  {
    number: "04",
    icon: Building2,
    title: "MOIC Processing",
    timeline: "Day 2-5",
    description: "The Ministry reviews your submission. We monitor status and respond immediately.",
    details: [
      "Real-time application monitoring",
      "Query response within hours",
      "Additional document submission if needed",
      "Direct MOIC liaison",
      "Status updates to client"
    ]
  },
  {
    number: "05",
    icon: FileCheck,
    title: "Updated CR Issuance",
    timeline: "Day 5",
    description: "Once approved, you receive your amended CR certificate with all updates.",
    details: [
      "Amendment approval confirmation",
      "Updated CR certificate issued",
      "Digital copy delivery",
      "Physical copy courier option",
      "Bank notification guidance"
    ]
  }
];

export function CRAmendmentProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedStep, setExpandedStep] = useState<number | null>(0);

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-secondary/30 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_30%,transparent_70%)]" />
      
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <FileText className="w-4 h-4" />
              How It Works
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            CR Amendment <span className="text-accent">Process</span> in Bahrain
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A clear 5-step workflow that gets your amendment completed on time
          </motion.p>
        </motion.div>

        {/* Timeline Indicator */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex items-center justify-center gap-4 mb-14"
        >
          <div className="bg-white rounded-2xl px-8 py-4 shadow-sm border-2 border-accent/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="text-2xl font-bold">
                  Total Timeline: <span className="text-accent">2-5 Business Days</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Process Steps Accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto relative"
        >
          {/* Vertical connecting line */}
          <div className="absolute left-[2.75rem] top-8 bottom-8 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/20 hidden md:block" />
          
          <div className="space-y-5">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className={cn(
                  "bg-white rounded-2xl border-2 overflow-hidden transition-all shadow-sm hover:shadow-md",
                  expandedStep === index ? "border-accent shadow-md" : "border-border"
                )}
              >
                {/* Step Header */}
                <button
                  onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                  className="w-full flex items-center gap-5 p-6 text-left hover:bg-secondary/40 transition-colors"
                >
                  <div className="flex items-center gap-5 flex-1">
                    <div className={cn(
                      "w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg transition-all relative z-10",
                      expandedStep === index 
                        ? "bg-accent text-primary shadow-lg" 
                        : "bg-accent/10 text-accent border-2 border-accent/20"
                    )}>
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-bold rounded-lg">
                          {step.timeline}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                  </div>
                  <ChevronDown className={cn(
                    "w-6 h-6 text-muted-foreground transition-transform",
                    expandedStep === index && "rotate-180 text-accent"
                  )} />
                </button>

                {/* Step Details */}
                <AnimatePresence>
                  {expandedStep === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t-2 border-border/50 ml-[4.75rem]">
                        <p className="text-lg text-muted-foreground mb-5">{step.description}</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 bg-accent/5 rounded-xl">
                              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                              <span className="font-medium">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Badge */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-14"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 rounded-full border border-accent/20">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span className="font-semibold text-primary">Most amendments complete in 2-5 business days. Express processing available.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
