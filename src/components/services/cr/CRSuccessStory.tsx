import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Target, 
  Lightbulb, 
  TrendingUp, 
  Quote,
  CheckCircle2,
  Clock,
  Users,
  Building2
} from "lucide-react";

export function CRSuccessStory() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-accent text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              Client Success Story
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-4">
            From UK Startup to Bahrain Operations in{" "}
            <span className="text-accent">14 Days</span>
          </motion.h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Challenge */}
            <motion.div
              variants={staggerItem}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-red-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">The Challenge</h3>
              <p className="text-white/70">
                FinFlow, a UK-based fintech startup, wanted to establish a Bahrain presence 
                to access GCC markets. They faced regulatory complexity with CBB requirements 
                and had no local knowledge of the formation process.
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              variants={staggerItem}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Solution</h3>
              <p className="text-white/70">
                Keylink provided end-to-end support: entity type consultation, MOIC registration, 
                CBB regulatory guidance, bank account setup, and work visa processing for their 
                founding team—all managed remotely.
              </p>
            </motion.div>

            {/* Result */}
            <motion.div
              variants={staggerItem}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">The Result</h3>
              <p className="text-white/70">
                FinFlow became fully operational in Bahrain within 14 days. They now employ 
                12 local staff, have processed over BHD 5 million in transactions, and use 
                Bahrain as their GCC regional hub.
              </p>
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div
            variants={staggerItem}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10"
          >
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <Clock className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold">14</div>
              <div className="text-sm text-white/60">Days to Operational</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <Building2 className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold">WLL</div>
              <div className="text-sm text-white/60">Entity Formed</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <Users className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm text-white/60">Employees Hired</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-white/60">Remote Setup</div>
            </div>
          </motion.div>

          {/* Client Quote */}
          <motion.div
            variants={staggerItem}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-10 bg-white/5 rounded-2xl p-8 border border-white/10"
          >
            <Quote className="w-10 h-10 text-accent/40 mb-4" />
            <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
              "Keylink transformed what seemed like a daunting regulatory maze into a straightforward 
              process. Their expertise in both MOIC and CBB requirements was invaluable. We couldn't 
              have launched our Bahrain operations so quickly without them."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-xl font-bold text-accent">DK</span>
              </div>
              <div>
                <div className="font-semibold">David Kumar</div>
                <div className="text-sm text-white/60">Co-Founder & CEO, FinFlow</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
