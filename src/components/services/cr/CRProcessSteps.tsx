import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  MessageSquare, 
  FileText, 
  Search, 
  Send, 
  Award,
  HeartHandshake,
  Clock,
  CheckCircle2,
  ChevronDown,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import crConsultantImage from "@/assets/cr-consultant-working.jpg";

const processSteps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consultation & Planning",
    timeline: "Day 1",
    description: "We start with a comprehensive consultation to understand your business goals and recommend the optimal company structure.",
    details: [
      "Review your business activities and requirements",
      "Recommend the best entity type (SPC, WLL, Branch, etc.)",
      "Explain capital requirements and ownership options",
      "Outline timeline and documentation needed",
      "Provide transparent fee structure"
    ]
  },
  {
    number: "02",
    icon: FileText,
    title: "Document Preparation",
    timeline: "Day 1-2",
    description: "Our team prepares and verifies all required documentation to ensure first-time approval from MOIC.",
    details: [
      "Collect and verify shareholder documents",
      "Prepare Memorandum of Association (MOA)",
      "Draft company bylaws and resolutions",
      "Arrange Power of Attorney if required",
      "Coordinate document attestation if needed"
    ]
  },
  {
    number: "03",
    icon: Search,
    title: "Name Reservation",
    timeline: "Day 2",
    description: "We conduct a thorough name search and reserve your company name through the SIJILAT portal.",
    details: [
      "Search for name availability in MOIC database",
      "Check for trademark conflicts",
      "Reserve approved name (valid for 60 days)",
      "Prepare alternative names if needed",
      "Confirm name approval with client"
    ]
  },
  {
    number: "04",
    icon: Send,
    title: "MOIC Submission",
    timeline: "Day 2-3",
    description: "Complete CR application is submitted to the Ministry of Industry and Commerce for processing.",
    details: [
      "Submit complete application via SIJILAT",
      "Pay government registration fees",
      "Upload all supporting documents",
      "Track application status",
      "Address any MOIC queries promptly"
    ]
  },
  {
    number: "05",
    icon: Award,
    title: "CR Issuance",
    timeline: "Day 3-5",
    description: "Upon approval, we collect your Commercial Registration certificate and trade license on your behalf.",
    details: [
      "Receive CR approval notification",
      "Collect physical CR certificate",
      "Obtain trade license for activities",
      "Register with Chamber of Commerce",
      "Deliver documents to client"
    ]
  },
  {
    number: "06",
    icon: HeartHandshake,
    title: "Post-Registration Support",
    timeline: "Ongoing",
    description: "Our support continues beyond CR issuance to help you become fully operational.",
    details: [
      "Assist with corporate bank account opening",
      "Guide LMRA registration for hiring",
      "Support visa applications for staff",
      "Set up virtual office if needed",
      "Provide ongoing compliance reminders"
    ]
  }
];

export function CRProcessSteps() {
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
              Registration Process
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            How We Register Your{" "}
            <span className="text-accent">Commercial Registration</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A streamlined 6-step process that gets your business registered in 3-7 business days
          </motion.p>
        </motion.div>

        {/* Timeline Indicator - Enhanced */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex items-center justify-center gap-4 mb-14"
        >
          <div className="bg-white rounded-2xl px-8 py-4 shadow-md border-2 border-accent/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="text-2xl font-bold">
                  Total Timeline: <span className="text-accent">3-7 Business Days</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Process Steps Accordion - Enhanced with vertical timeline */}
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
                  "bg-white rounded-2xl border-2 overflow-hidden transition-all shadow-md hover:shadow-lg",
                  expandedStep === index ? "border-accent shadow-lg" : "border-border"
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

                {/* Step Details - Enhanced */}
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

        {/* Bottom CTA - Enhanced */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-14"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your registration journey?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary rounded-xl font-bold hover:bg-accent/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-1 group"
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
