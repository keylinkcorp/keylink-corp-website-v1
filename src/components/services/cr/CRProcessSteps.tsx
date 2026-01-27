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
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";

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
    <section ref={ref} className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={staggerItem}>
            <span className="section-badge">Registration Process</span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-4">
            How We Register Your{" "}
            <span className="text-accent">Commercial Registration</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined 6-step process that gets your business registered in 3-7 business days
          </motion.p>
        </motion.div>

        {/* Timeline Indicator */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <Clock className="w-5 h-5 text-accent" />
          <span className="text-lg font-medium">
            Total Timeline: <span className="text-accent">3-7 Business Days</span>
          </span>
        </motion.div>

        {/* Process Steps Accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto space-y-4"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className={cn(
                "bg-white rounded-xl border overflow-hidden transition-all",
                expandedStep === index ? "border-accent shadow-lg" : "border-border"
              )}
            >
              {/* Step Header */}
              <button
                onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                className="w-full flex items-center gap-4 p-6 text-left hover:bg-secondary/30 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors",
                    expandedStep === index ? "bg-accent text-primary" : "bg-primary/5"
                  )}>
                    <step.icon className={cn(
                      "w-6 h-6",
                      expandedStep === index ? "text-primary" : "text-primary"
                    )} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-sm font-bold text-accent">{step.number}</span>
                      <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-medium rounded">
                        {step.timeline}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>
                </div>
                <ChevronDown className={cn(
                  "w-5 h-5 text-muted-foreground transition-transform",
                  expandedStep === index && "rotate-180"
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
                    <div className="px-6 pb-6 pt-2 border-t border-border/50">
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Ready to start your registration journey?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            Book Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
