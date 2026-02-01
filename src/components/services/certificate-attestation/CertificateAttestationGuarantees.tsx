import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { RefreshCw, Clock, Shield } from "lucide-react";

const guarantees = [
  {
    icon: RefreshCw,
    title: "Free Re-submission Guarantee",
    description: "If your document is rejected due to any error on our part, we re-process it at no additional service charge. We stand behind our 99.5% first-time approval rate."
  },
  {
    icon: Clock,
    title: "Timeline Guarantee",
    description: "We commit to specific processing timelines. If we miss our committed delivery date through our own delay, your service fee is waived. No excuses."
  },
  {
    icon: Shield,
    title: "Document Safety Guarantee",
    description: "Your original documents are handled with bank-level security. Full tracking from pickup to delivery, secure storage during processing, and insured against loss."
  }
];

export function CertificateAttestationGuarantees() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-primary" />
      
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
              Our Guarantees
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Your Peace of Mind, Guaranteed
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We put our money where our mouth is. These aren't just promises — they're commitments.
            </p>
          </motion.div>

          {/* Guarantees Grid */}
          <motion.div 
            variants={staggerItem}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {guarantees.map((guarantee, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                  <guarantee.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white">{guarantee.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{guarantee.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
