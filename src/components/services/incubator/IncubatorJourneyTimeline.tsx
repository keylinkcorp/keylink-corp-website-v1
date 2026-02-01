import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Building2, 
  FileCheck, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  Calendar
} from "lucide-react";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const phases = [
  {
    number: "01",
    icon: Building2,
    title: "Foundation",
    subtitle: "Company Registration & Structure",
    timeline: "Weeks 1-2",
    description: "We register your business with the optimal structure for incubator eligibility. This includes Commercial Registration, business licensing, and ensuring your documentation meets each program's specific requirements.",
    deliverables: [
      "Commercial Registration (CR) certificate",
      "Business license aligned to program criteria",
      "Corporate bank account setup",
      "Registered office address"
    ]
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Preparation",
    subtitle: "Application Strategy & Documentation",
    timeline: "Weeks 2-4",
    description: "We analyze your business against each program's evaluation criteria, identify gaps, and strengthen your application before submission. This includes pitch deck refinement, financial projections, and market positioning.",
    deliverables: [
      "Program eligibility assessment",
      "Application documentation package",
      "Pitch deck review and optimization",
      "Financial projection templates"
    ]
  },
  {
    number: "03",
    icon: Send,
    title: "Placement",
    subtitle: "Submission & Follow-Through",
    timeline: "Weeks 4-8",
    description: "We submit your application through our direct program contacts, track progress, and handle any additional requests from the evaluation committee. If initial feedback requires adjustments, we refine and resubmit until you're accepted.",
    deliverables: [
      "Direct program submission",
      "Weekly status updates",
      "Interview preparation (if required)",
      "Acceptance confirmation"
    ]
  }
];

export function IncubatorJourneyTimeline() {
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
              <span className="section-badge">Your Path to Acceptance</span>
            </motion.div>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-4">
              From Zero to Incubator Acceptance: <span className="text-accent">The Keylink Method</span>
            </motion.h2>
            <motion.p variants={staggerItem} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Most consultants help you apply to incubator programs. We start earlier — with company formation — so your application arrives complete, compliant, and compelling from day one.
            </motion.p>
          </div>

          {/* Timeline Phases */}
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="relative group"
              >
                {/* Connector Line (desktop) */}
                {index < phases.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border z-0">
                    <ArrowRight className="absolute -right-2 -top-2 w-5 h-5 text-accent" />
                  </div>
                )}

                {/* Card */}
                <div className="relative bg-white rounded-2xl border-2 border-border p-6 shadow-sm hover:border-accent hover:shadow-lg transition-all duration-300 z-10">
                  {/* Phase Number & Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <phase.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-accent uppercase tracking-widest">Phase {phase.number}</span>
                      <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                    </div>
                  </div>

                  {/* Timeline Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                    <Calendar className="w-4 h-4" />
                    {phase.timeline}
                  </div>

                  {/* Subtitle */}
                  <h4 className="font-semibold text-foreground mb-3">{phase.subtitle}</h4>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {phase.description}
                  </p>

                  {/* Deliverables */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Deliverables</p>
                    <ul className="space-y-2">
                      {phase.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline Note */}
          <motion.div 
            variants={staggerItem}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-border shadow-sm">
              <Calendar className="w-5 h-5 text-accent" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Average time from first consultation to program acceptance:</strong> 6-8 weeks
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
