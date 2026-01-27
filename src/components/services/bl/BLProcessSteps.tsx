import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  MessageSquare, 
  FileText, 
  Search, 
  Send, 
  Award,
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
    icon: MessageSquare,
    title: "Initial Consultation",
    timeline: "Day 1",
    description: "We analyze your business model, recommend the right license type, and create a customized documentation checklist.",
    details: [
      "Review your business activities and goals",
      "Recommend optimal license type",
      "Outline timeline and requirements",
      "Provide transparent fee breakdown"
    ]
  },
  {
    number: "02",
    icon: Search,
    title: "Trade Name Reservation",
    timeline: "Days 1-2",
    description: "Reserve your unique business name through MOIC's SIJILAT portal. We ensure compliance with naming regulations.",
    details: [
      "Search name availability in MOIC database",
      "Check for trademark conflicts",
      "Reserve approved name (valid 60 days)",
      "Prepare alternative names if needed"
    ]
  },
  {
    number: "03",
    icon: FileText,
    title: "Document Preparation",
    timeline: "Days 2-4",
    description: "We prepare all required documents including MOA/AOA drafting, shareholder details, and activity mapping.",
    details: [
      "Collect and verify shareholder documents",
      "Draft Memorandum of Association",
      "Prepare company bylaws",
      "Arrange Power of Attorney if required"
    ]
  },
  {
    number: "04",
    icon: Send,
    title: "MOIC Submission & CR Issuance",
    timeline: "Days 4-6",
    description: "Submit application through SIJILAT, pay government fees, and receive your Commercial Registration certificate.",
    details: [
      "Submit complete application via SIJILAT",
      "Pay government registration fees",
      "Track application status",
      "Receive CR certificate"
    ]
  },
  {
    number: "05",
    icon: Award,
    title: "Trade License Activation",
    timeline: "Days 5-7",
    description: "Activate your trade license for approved commercial activities. Additional sector approvals obtained if required.",
    details: [
      "Activate trade license",
      "Obtain sector-specific permits",
      "Register with Chamber of Commerce",
      "Collect all license documents"
    ]
  },
  {
    number: "06",
    icon: CreditCard,
    title: "Bank Account & Final Compliance",
    timeline: "Days 7-14",
    description: "Open your corporate bank account (mandatory since June 2024) and complete LMRA registration if hiring staff.",
    details: [
      "Coordinate bank account opening",
      "Complete LMRA registration",
      "Set up visa quota if needed",
      "Deliver complete package to client"
    ]
  }
];

export function BLProcessSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedStep, setExpandedStep] = useState<number | null>(0);

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Clean Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      
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
              Your Journey
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            How to Get Your{" "}
            <span className="text-accent">Business License in Bahrain</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven 6-step process with transparent timelines
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
                  Total Timeline: <span className="text-accent">7-14 Business Days</span>
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
                    {/* Step number in gold circle */}
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

        {/* Total Timeline Note */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto mt-10 p-6 bg-accent/5 border-2 border-accent/20 rounded-2xl text-center"
        >
          <p className="text-lg text-muted-foreground">
            <strong className="text-foreground">Most straightforward business licenses complete in 7-14 days.</strong> Complex cases with sector approvals may take 2-4 weeks.
          </p>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-14"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your licensing journey?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary rounded-xl font-bold hover:bg-accent/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 group"
          >
            <MessageSquare className="w-5 h-5" />
            Book Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
