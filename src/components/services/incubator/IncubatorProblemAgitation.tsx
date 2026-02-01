import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, TrendingDown, Clock, FileX } from "lucide-react";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const painPoints = [
  { icon: FileX, text: "Complex eligibility requirements differ between programs" },
  { icon: Clock, text: "Months of delays from incomplete applications" },
  { icon: TrendingDown, text: "Missed funding opportunities that don't return" },
  { icon: AlertTriangle, text: "Wrong business structure blocks acceptance" }
];

export function IncubatorProblemAgitation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Pattern - Ellipse mask fade dot grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
            backgroundSize: "16px 16px",
            maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)"
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={staggerItem} className="text-center mb-6">
            <span className="section-badge">The Challenge</span>
          </motion.div>

          {/* Headline */}
          <motion.h2 
            variants={staggerItem}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Why Most Startups Never Make It <span className="text-accent">Past the Application Stage</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <motion.div variants={staggerItem} className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bahrain offers one of the most startup-friendly ecosystems in the Gulf. Zero corporate tax, 100% foreign ownership, and direct access to funding programs that have launched hundreds of successful businesses.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">But here's what they don't tell you on the brochures.</strong>
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Getting accepted into Tamkeen's support programs, FinTech Bay's accelerator, or C5's growth track isn't just about having a good idea. It's about understanding what each program actually looks for — and presenting your business in a way that checks every box before your application even lands on their desk.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Foreign entrepreneurs face an additional layer of complexity. You need a registered company before most programs will consider you. That means navigating Commercial Registration, choosing the right business structure, and meeting specific eligibility criteria that differ from program to program.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                First-time founders in Bahrain often don't know where to start. Do you apply to Tamkeen first or register your company first? Is FinTech Bay only for fintech startups? What funding is actually available versus what requires equity?
              </p>
              
              <p className="text-muted-foreground leading-relaxed font-medium text-foreground">
                These questions cost months of delay — and sometimes, missed opportunities that don't come back.
              </p>
            </motion.div>

            {/* Pain Points & Callout Column */}
            <motion.div variants={staggerItem} className="space-y-6">
              {/* Pain Points Grid */}
              <div className="grid grid-cols-2 gap-4">
                {painPoints.map((point, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-white rounded-xl border border-border shadow-sm hover:border-accent/50 transition-colors"
                  >
                    <point.icon className="w-6 h-6 text-accent mb-3" />
                    <p className="text-sm text-muted-foreground">{point.text}</p>
                  </div>
                ))}
              </div>

              {/* Callout Box */}
              <div className="relative p-6 bg-primary/5 border-l-4 border-accent rounded-r-xl">
                <div className="absolute -left-3 top-6 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-3 h-3 text-primary" />
                </div>
                <p className="text-lg font-semibold text-foreground mb-2">
                  47% Rejection Rate
                </p>
                <p className="text-muted-foreground">
                  of first-time applicants are rejected due to incomplete documentation or misaligned business structure — not because of their idea.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
