import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { FileCheck, Stamp, Building2, Globe, AlertTriangle, ArrowRight } from "lucide-react";

const attestationChain = [
  { step: "1", icon: FileCheck, title: "Notarization", description: "Document verified by notary or issuing authority" },
  { step: "2", icon: Building2, title: "MOFA Attestation", description: "Ministry of Foreign Affairs authentication" },
  { step: "3", icon: Stamp, title: "Embassy Legalization", description: "Destination country embassy certification" }
];

const keyFacts = [
  { term: "Attestation", definition: "Multi-step verification through Notary → MOFA → Embassy chain. Required for GCC countries." },
  { term: "Apostille", definition: "Single-step Hague Convention certification. Accepted by member countries only (not GCC)." },
  { term: "Legalization", definition: "Embassy's official stamp confirming document validity for their country." }
];

export function CertificateAttestationWhatIs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Understanding Attestation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Is Certificate Attestation?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Certificate attestation is the process of verifying document authenticity through official government channels for international recognition.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <motion.div 
            variants={staggerItem}
            className="grid lg:grid-cols-2 gap-12 items-start mb-12"
          >
            {/* Left Column - Attestation Chain Visual */}
            <div>
              <h3 className="text-xl font-bold mb-6">The Attestation Chain</h3>
              <p className="text-muted-foreground mb-8">
                Documents must pass through a specific verification sequence. Each step validates the previous, creating an unbroken chain of authentication.
              </p>
              
              <div className="space-y-4">
                {attestationChain.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                        <item.icon className="w-7 h-7 text-primary" />
                      </div>
                      {index < attestationChain.length - 1 && (
                        <div className="absolute top-full left-1/2 w-0.5 h-4 bg-accent/30 -translate-x-1/2" />
                      )}
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-accent uppercase">Step {item.step}</span>
                      </div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Key Terms */}
            <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-accent" />
                Key Terms Explained
              </h3>
              
              <div className="space-y-6">
                {keyFacts.map((fact, index) => (
                  <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <h4 className="font-semibold text-primary mb-1">{fact.term}</h4>
                    <p className="text-sm text-muted-foreground">{fact.definition}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Bahrain & Hague Convention:</strong> Bahrain is a member of the Hague Convention, but most GCC countries (where Bahrainis commonly work) require full embassy attestation, not apostille.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Callout Box */}
          <motion.div 
            variants={staggerItem}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Critical:</strong> Breaking the attestation chain (skipping a step or doing them out of order) invalidates the entire process. You'll need to start over, losing weeks and fees. Our team ensures every document follows the correct sequence.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
