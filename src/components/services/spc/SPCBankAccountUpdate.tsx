import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export function SPCBankAccountUpdate() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const requirements = [
    "Bank account must be opened before final CR issuance",
    "Minimum capital (BHD 50 for SPC) deposited and confirmed",
    "Keylink assists with bank selection and account opening process"
  ];

  return (
    <section ref={ref} className="py-16 md:py-20 relative overflow-hidden">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <div className="bg-gradient-to-br from-primary via-primary to-primary/90 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex items-start gap-5 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-7 h-7 text-gold" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-gold text-primary text-sm font-bold rounded-lg">
                    June 2024 Update
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Mandatory Bank Account Requirement
                </h3>
              </div>
            </div>

            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-3xl">
              As of June 2024, opening a corporate bank account and depositing your minimum capital is now 
              <span className="text-gold font-semibold"> mandatory before final CR issuance</span>. This applies 
              to all new company formations in Bahrain, including Single Person Companies.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {requirements.map((req, index) => (
                <div 
                  key={index}
                  className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium">{req}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 inline-block">
              <p className="text-white/90">
                <span className="font-semibold text-gold">Timeline impact:</span> The bank account opening 
                typically adds 3-5 business days to the overall SPC registration timeline.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
