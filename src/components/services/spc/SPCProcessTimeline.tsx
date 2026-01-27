import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  ShieldCheck, 
  FileText, 
  Wallet, 
  Stamp, 
  Building2, 
  CreditCard,
  Clock,
  CheckCircle2,
  ChevronDown,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const processSteps = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Security Approval",
    timeline: "Day 1-3",
    description: "MOIC security clearance for foreign nationals to conduct business in Bahrain.",
    details: [
      "Submit passport copy and background details",
      "MOIC security verification process",
      "Clearance typically within 1-3 business days",
      "Bahraini/GCC nationals may have expedited processing",
      "Keylink tracks status and handles any queries"
    ]
  },
  {
    number: "02",
    icon: FileText,
    title: "Name Reservation",
    timeline: "Day 2-3",
    description: "Reserve your unique company name through the SIJILAT portal.",
    details: [
      "Search for name availability in MOIC database",
      "Check for trademark conflicts",
      "Reserve approved name (valid for 60 days)",
      "Prepare alternative names if needed",
      "Confirm name approval with client"
    ]
  },
  {
    number: "03",
    icon: Wallet,
    title: "Bank Account Opening",
    timeline: "Day 3-7",
    description: "Open your corporate bank account and deposit minimum capital (mandatory since June 2024).",
    details: [
      "Select from major Bahraini banks (NBB, BBK, AUB)",
      "Submit company formation documents",
      "Deposit minimum capital (BHD 50 for SPC)",
      "Obtain bank letter confirming capital deposit",
      "Required for final CR issuance"
    ]
  },
  {
    number: "04",
    icon: Stamp,
    title: "Document Notarization",
    timeline: "Day 5-8",
    description: "Notarize Memorandum of Association and company documents at the Notary Public.",
    details: [
      "Prepare Memorandum of Association (MOA)",
      "Draft company bylaws and resolutions",
      "Notarize documents at Bahrain Notary Public",
      "Power of Attorney if owner not present",
      "All documents in Arabic (translation provided)"
    ]
  },
  {
    number: "05",
    icon: Building2,
    title: "CR Issuance",
    timeline: "Day 7-12",
    description: "Commercial Registration certificate issued by MOIC along with your trade license.",
    details: [
      "Submit complete application via SIJILAT",
      "Pay government registration fees",
      "MOIC review and approval",
      "CR certificate and trade license issued",
      "Register with Chamber of Commerce"
    ]
  },
  {
    number: "06",
    icon: CreditCard,
    title: "LMRA & ID Processing",
    timeline: "Day 10-14",
    description: "Register with LMRA for visa quotas and obtain business ID cards.",
    details: [
      "LMRA registration for employment",
      "Investor visa application if needed",
      "Signatory card for authorized personnel",
      "National ID registration",
      "Company fully operational"
    ]
  }
];

export function SPCProcessTimeline() {
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20 mb-4">
              <FileText className="w-4 h-4" />
              SPC Registration Process
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            How We Register Your{" "}
            <span className="text-gold">Single Person Company</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A streamlined 6-step process that gets your SPC registered in 3-14 business days
          </motion.p>
        </motion.div>

        {/* Timeline Indicator */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex items-center justify-center gap-4 mb-14"
        >
          <div className="bg-white rounded-2xl px-8 py-4 shadow-sm border-2 border-gold/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <div>
                <span className="text-2xl font-bold">
                  Total Timeline: <span className="text-gold">3-14 Business Days</span>
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
          <div className="absolute left-[2.75rem] top-8 bottom-8 w-0.5 bg-gradient-to-b from-gold via-gold/50 to-gold/20 hidden md:block" />
          
          <div className="space-y-5">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className={cn(
                  "bg-white rounded-2xl border-2 overflow-hidden transition-all shadow-sm hover:shadow-md",
                  expandedStep === index ? "border-gold shadow-md" : "border-border"
                )}
              >
                {/* Step Header */}
                <button
                  onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                  className="w-full flex items-center gap-5 p-6 text-left hover:bg-secondary/40 transition-colors"
                >
                  <div className="flex items-center gap-5 flex-1">
                    {/* Step number in gold circle */}
                    <div className={cn(
                      "w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg transition-all relative z-10",
                      expandedStep === index 
                        ? "bg-gold text-primary shadow-lg" 
                        : "bg-gold/10 text-gold border-2 border-gold/20"
                    )}>
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="px-3 py-1 bg-gold/10 text-gold text-sm font-bold rounded-lg">
                          {step.timeline}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                  </div>
                  <ChevronDown className={cn(
                    "w-6 h-6 text-muted-foreground transition-transform",
                    expandedStep === index && "rotate-180 text-gold"
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
                            <div key={idx} className="flex items-start gap-3 p-3 bg-gold/5 rounded-xl">
                              <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
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
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gold/10 rounded-full border border-gold/20">
            <CheckCircle2 className="w-5 h-5 text-gold" />
            <span className="font-semibold text-primary">Complete SPC Formation in 3-14 Business Days</span>
          </div>
          
          <div className="mt-8">
            <a
              href="/free-consultation"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary rounded-xl font-bold hover:bg-gold/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 group"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
