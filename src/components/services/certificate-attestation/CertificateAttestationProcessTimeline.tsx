import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { MessageSquare, FileText, Stamp, Flag, Package } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Free Consultation",
    subtitle: "Tell us what you need",
    timeline: "Instant",
    content: {
      description: "Contact us via WhatsApp with your attestation requirements. We'll assess your documents and provide a clear quote within the hour.",
      details: [
        "WhatsApp or phone consultation",
        "Document requirements checklist",
        "Clear pricing quote",
        "Timeline estimate"
      ]
    }
  },
  {
    number: "02",
    icon: FileText,
    title: "Document Review",
    subtitle: "We verify everything",
    timeline: "Same Day",
    content: {
      description: "Submit your documents for verification. We check for completeness, identify potential issues, and confirm the attestation chain required.",
      details: [
        "Pre-submission verification",
        "Error prevention check",
        "Missing document alerts",
        "Office pickup available"
      ]
    }
  },
  {
    number: "03",
    icon: Stamp,
    title: "MOFA Attestation",
    subtitle: "Ministry authentication",
    timeline: "1-2 Days",
    content: {
      description: "We submit your documents to the Ministry of Foreign Affairs for official attestation. This critical step validates your documents for international use.",
      details: [
        "MOFA submission",
        "Fee payment handled",
        "Status tracking",
        "WhatsApp updates"
      ]
    }
  },
  {
    number: "04",
    icon: Flag,
    title: "Embassy Legalization",
    subtitle: "Country-specific certification",
    timeline: "2-5 Days",
    content: {
      description: "Your MOFA-attested documents are submitted to the destination country's embassy for final legalization. Each embassy has unique requirements we navigate expertly.",
      details: [
        "Embassy submission",
        "Requirement compliance",
        "Follow-up handling",
        "Issue resolution"
      ]
    }
  },
  {
    number: "05",
    icon: Package,
    title: "Delivery",
    subtitle: "Attested documents in hand",
    timeline: "Same Day",
    content: {
      description: "Once attested, we deliver your completed documents with all stamps and certifications. Digital copies sent immediately, physical delivery same-day.",
      details: [
        "Digital copies via WhatsApp",
        "Physical delivery included",
        "Verification guidance",
        "Receipt confirmation"
      ]
    }
  }
];

export function CertificateAttestationProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Attestation Process: 5 Clear Steps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From consultation to delivery, we handle every detail. You stay informed, we do the work.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div 
            variants={staggerItem}
            className="max-w-3xl mx-auto relative"
          >
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-accent hidden md:block" />

            <Accordion type="single" collapsible defaultValue="step-1" className="space-y-6">
              {steps.map((step, index) => (
                <AccordionItem 
                  key={index} 
                  value={`step-${index + 1}`}
                  className="border-0"
                >
                  <div className="flex gap-4 md:gap-6">
                    {/* Step Number Circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent flex items-center justify-center border-4 border-white shadow-md">
                        <step.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 bg-white rounded-xl border border-border shadow-sm overflow-hidden">
                      <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-secondary/30 transition-colors [&[data-state=open]]:bg-secondary/30">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-left w-full pr-4">
                          <span className="text-xs font-bold text-accent uppercase tracking-wider">
                            Step {step.number}
                          </span>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.subtitle}</p>
                          </div>
                          <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium whitespace-nowrap">
                            {step.timeline}
                          </span>
                        </div>
                      </AccordionTrigger>
                      
                      <AccordionContent className="px-6 pb-6">
                        <p className="text-muted-foreground mb-4">
                          {step.content.description}
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {step.content.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </div>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
