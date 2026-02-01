import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Building2, 
  Landmark, 
  Rocket, 
  Clock, 
  Wallet, 
  Target, 
  Users, 
  Shield,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const programs = [
  {
    name: "Tamkeen Startup Support",
    icon: Building2,
    focus: "General business growth and Bahraini market entry",
    stage: "Idea to early revenue",
    funding: "Non-dilutive grants up to BHD 10,000",
    duration: "6-12 month support cycles",
    bestFor: "Foreign entrepreneurs needing registration assistance and local market guidance",
    keyBenefit: "Direct government backing with no equity required",
    color: "bg-primary"
  },
  {
    name: "FinTech Bay Accelerator",
    icon: Landmark,
    focus: "Financial technology and digital banking solutions",
    stage: "MVP to Series A",
    funding: "Access to investor network and sandbox licensing",
    duration: "3-6 month acceleration cohorts",
    bestFor: "Fintech startups targeting GCC and MENA expansion",
    keyBenefit: "Regulatory sandbox access and CBB connections",
    color: "bg-accent"
  },
  {
    name: "C5 Accelerate",
    icon: Rocket,
    focus: "Tech-enabled businesses across sectors",
    stage: "Seed to growth",
    funding: "Investment-ready preparation and pitch coaching",
    duration: "12-week intensive programs",
    bestFor: "Scalable tech startups seeking international investors",
    keyBenefit: "Global investor network and Silicon Valley methodology",
    color: "bg-primary"
  }
];

const infoItems = [
  { icon: Target, label: "Focus" },
  { icon: Users, label: "Stage" },
  { icon: Wallet, label: "Funding" },
  { icon: Clock, label: "Duration" }
];

export function IncubatorLandscape() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden bg-secondary/30">
      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div variants={staggerItem}>
              <span className="section-badge">Bahrain's Startup Ecosystem</span>
            </motion.div>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-4">
              Three Powerhouse Programs. <span className="text-accent">One Strategic Entry Point.</span>
            </motion.h2>
            <motion.p variants={staggerItem} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Bahrain's incubator and accelerator landscape offers distinct pathways depending on your industry, stage, and growth ambitions. Understanding the differences helps you apply to the right program — and avoid wasting months on applications that were never a good fit.
            </motion.p>
          </div>

          {/* Program Cards */}
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {programs.map((program, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group relative bg-white rounded-2xl border-2 border-border p-8 shadow-sm hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                {/* Icon Header */}
                <div className={`w-14 h-14 ${program.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <program.icon className="w-7 h-7 text-white" />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold mb-4 text-foreground">{program.name}</h3>

                {/* Info Grid */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Target className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Focus</p>
                      <p className="text-sm text-foreground">{program.focus}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Stage</p>
                      <p className="text-sm text-foreground">{program.stage}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Wallet className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Funding</p>
                      <p className="text-sm text-foreground">{program.funding}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Duration</p>
                      <p className="text-sm text-foreground">{program.duration}</p>
                    </div>
                  </div>
                </div>

                {/* Best For */}
                <div className="p-4 bg-secondary/50 rounded-xl mb-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Best For</p>
                  <p className="text-sm text-foreground">{program.bestFor}</p>
                </div>

                {/* Key Benefit */}
                <div className="flex items-center gap-2 pt-4 border-t border-border">
                  <Shield className="w-4 h-4 text-accent flex-shrink-0" />
                  <p className="text-sm font-medium text-accent">{program.keyBenefit}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            variants={staggerItem}
            className="text-center p-6 bg-white rounded-2xl border border-border shadow-sm max-w-3xl mx-auto"
          >
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">Not sure which program fits?</strong> Most founders we work with qualify for at least two programs. We help you prioritize based on your funding needs, timeline, and growth strategy — sometimes applying to multiple programs in sequence for maximum support.
            </p>
            <Button asChild className="btn-gold">
              <Link to="/free-consultation">
                Find Your Best Fit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
