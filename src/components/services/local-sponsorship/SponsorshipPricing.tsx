import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const includedItems = [
  "Vetted sponsor from our network",
  "Side agreement drafting",
  "Power of Attorney documentation",
  "Notarization of all documents",
  "MOIC registration support",
  "Annual renewal management",
  "Free sponsor replacement if needed",
  "WhatsApp support"
];

export function SponsorshipPricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Pattern - Grid lines */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
          </motion.div>

          {/* Pricing Card */}
          <motion.div 
            variants={staggerItem}
            className="max-w-lg mx-auto"
          >
            <div className="bg-white rounded-2xl border-2 border-accent shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-primary p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Local Sponsorship Package</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-extrabold text-accent">BHD 600</span>
                  <span className="text-white/70">/year</span>
                </div>
                <p className="text-white/70 mt-2">Setup Fee: BHD 200 (one-time)</p>
              </div>

              {/* Features */}
              <div className="p-8">
                <h4 className="font-semibold text-primary mb-4">What's Included:</h4>
                <ul className="space-y-3 mb-8">
                  {includedItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Note */}
                <p className="text-sm text-muted-foreground mb-6 p-4 bg-muted/50 rounded-lg">
                  Annual fee covers sponsor compensation and ongoing compliance. No hidden charges, no percentage of profits.
                </p>

                {/* CTA */}
                <Button asChild className="w-full btn-gold py-6">
                  <a 
                    href="https://wa.me/97317000000?text=I'm%20interested%20in%20the%20local%20sponsorship%20package"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start WhatsApp Consultation
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
