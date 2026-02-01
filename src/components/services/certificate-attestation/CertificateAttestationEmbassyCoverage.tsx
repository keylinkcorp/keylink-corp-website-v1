import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Clock } from "lucide-react";

const embassies = [
  { country: "UAE", flag: "🇦🇪", code: "AE", processingTime: "2-3 days" },
  { country: "Saudi Arabia", flag: "🇸🇦", code: "SA", processingTime: "3-5 days" },
  { country: "Kuwait", flag: "🇰🇼", code: "KW", processingTime: "2-3 days" },
  { country: "Qatar", flag: "🇶🇦", code: "QA", processingTime: "2-3 days" },
  { country: "Oman", flag: "🇴🇲", code: "OM", processingTime: "2-3 days" },
  { country: "India", flag: "🇮🇳", code: "IN", processingTime: "3-5 days" },
  { country: "Pakistan", flag: "🇵🇰", code: "PK", processingTime: "3-5 days" },
  { country: "Philippines", flag: "🇵🇭", code: "PH", processingTime: "2-3 days" },
  { country: "Egypt", flag: "🇪🇬", code: "EG", processingTime: "3-5 days" }
];

export function CertificateAttestationEmbassyCoverage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Pattern - Grid lines */}
      <div 
        className="absolute inset-0 -z-10 bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Embassy Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              15+ Embassies. One Point of Contact.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We have established relationships with major embassies in Bahrain, ensuring smooth and predictable processing for your documents.
            </p>
          </motion.div>

          {/* Embassy Grid */}
          <motion.div 
            variants={staggerItem}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto"
          >
            {embassies.map((embassy, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md hover:border-accent/30 transition-all text-center group"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {embassy.flag}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{embassy.country}</h3>
                <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-3.5 h-3.5 text-accent" />
                  <span>{embassy.processingTime}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Additional Note */}
          <motion.div 
            variants={staggerItem}
            className="mt-10 text-center"
          >
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Plus 6+ more embassies.</span>{" "}
              Need attestation for a country not listed? Contact us — we likely cover it.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
