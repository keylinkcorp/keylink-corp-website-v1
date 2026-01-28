import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { FileText, CheckCircle2, AlertTriangle, Clock, Building2 } from "lucide-react";

const keyPoints = [
  { icon: CheckCircle2, text: "Mandatory for any business structure change" },
  { icon: Building2, text: "Processed through Sijilat 3.0 portal" },
  { icon: FileText, text: "Required for continued legal operations" },
  { icon: AlertTriangle, text: "Non-compliance triggers penalties and restrictions" }
];

export function WhatIsCRAmendment() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <FileText className="w-4 h-4" />
              Understanding CR Amendments
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              What Is a <span className="text-accent">CR Amendment</span> in Bahrain?
            </h2>
          </motion.div>

          <motion.div variants={staggerItem} className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              A Commercial Registration amendment is an official update to your existing CR details through the 
              Ministry of Industry and Commerce (MOIC). When your business structure, activities, or ownership 
              changes, Bahrain law requires you to reflect these updates in your CR within specific timeframes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The MOIC processes all amendments through the Sijilat 3.0 electronic portal. Each amendment type 
              follows a distinct workflow with different document requirements, government fees, and processing windows.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Failing to update your CR creates real problems. Banks may freeze transactions. Visa processing stops. 
              Contracts become legally questionable. The MOIC can impose penalties or even cancel non-compliant registrations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most amendments complete in 2-5 business days when filed correctly. Complex changes like entity 
              conversions or multi-shareholder transfers may extend to 7-10 days.
            </p>
          </motion.div>

          {/* Key Points Box */}
          <motion.div 
            variants={staggerItem}
            className="bg-white rounded-2xl border-2 border-border shadow-sm p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Key Points About CR Amendments</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                  <point.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{point.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
