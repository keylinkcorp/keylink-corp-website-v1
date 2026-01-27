import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
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
import crSuccessImage from "@/assets/cr-success-david.jpg";

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 } }
};

export function CRSuccessStory() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-primary text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
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
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
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
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
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
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
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

          {/* Stats Row - Glass Effect */}
          <motion.div
            variants={staggerItem}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10"
          >
            <div className="text-center p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
              <Clock className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold">14</div>
              <div className="text-sm text-white/60">Days to Operational</div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
              <Building2 className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold">WLL</div>
              <div className="text-sm text-white/60">Entity Formed</div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
              <Users className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm text-white/60">Employees Hired</div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
              <CheckCircle2 className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-white/60">Remote Setup</div>
            </div>
          </motion.div>

          {/* Client Quote with Portrait */}
          <motion.div
            variants={staggerItem}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-10 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Portrait */}
              <motion.div
                variants={imageReveal}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex-shrink-0"
              >
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-accent/30 shadow-xl">
                    <img
                      src={crSuccessImage}
                      alt="David Kumar, CEO of FinFlow"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Accent Corner */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                    <Quote className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </motion.div>
              
              {/* Quote Content */}
              <div className="flex-1 text-center md:text-left">
                <Quote className="w-10 h-10 text-accent/40 mb-4 hidden md:block" />
                <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                  "Keylink transformed what seemed like a daunting regulatory maze into a straightforward 
                  process. Their expertise in both MOIC and CBB requirements was invaluable. We couldn't 
                  have launched our Bahrain operations so quickly without them."
                </blockquote>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div>
                    <div className="font-semibold text-lg">David Kumar</div>
                    <div className="text-sm text-white/60">Co-Founder & CEO, FinFlow</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
