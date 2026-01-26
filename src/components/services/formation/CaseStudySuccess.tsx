import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Clock, Users, CheckCircle2, ArrowRight, Quote, Building2, Briefcase, Calendar, Target } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Link } from "react-router-dom";

const timeline = [
  { day: "Day 1-2", action: "Security approval + Name registration", icon: Building2 },
  { day: "Day 3", action: "Capital deposit + Partner registration", icon: Briefcase },
  { day: "Day 4", action: "Trade license + CR certificate issued", icon: Calendar },
  { day: "Day 5", action: "LMRA registration + Visa quota approved", icon: Target },
];

const results = [
  { metric: "5", label: "Days to operational", subtext: "vs 6-week average" },
  { metric: "3", label: "Work visas issued", subtext: "within 25 days" },
  { metric: "100%", label: "Compliance", subtext: "zero issues in year 1" },
];

export function CaseStudySuccess() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Dot pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Trophy className="h-5 w-5 text-accent" />
              </div>
              <p className="text-sm font-medium text-accent tracking-wide uppercase">
                Client Success Story
              </p>
            </div>
            <h2 className="text-[32px] md:text-[40px] lg:text-[46px] font-bold text-primary mb-4 tracking-tight leading-[1.15]">
              From Idea to Operating Company in 5 Days
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See how we helped a technology consulting firm establish their Bahrain 
              presence in record time with full compliance.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Client Overview */}
            <motion.div variants={staggerItem} className="lg:col-span-1">
              <div className="bg-primary rounded-2xl p-6 text-white h-full">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-accent" />
                  Client Overview
                </h3>
                
                <div className="space-y-5">
                  <div>
                    <span className="text-sm text-white/60">Company</span>
                    <p className="font-semibold">TechVentures MENA</p>
                  </div>
                  <div>
                    <span className="text-sm text-white/60">Industry</span>
                    <p className="font-semibold">Technology Consulting</p>
                  </div>
                  <div>
                    <span className="text-sm text-white/60">Company Type</span>
                    <p className="font-semibold">WLL (Limited Liability)</p>
                  </div>
                  <div>
                    <span className="text-sm text-white/60">Formation Timeline</span>
                    <p className="font-semibold text-accent">5 Business Days</p>
                  </div>
                  <div>
                    <span className="text-sm text-white/60">Outcome</span>
                    <p className="font-semibold">Fully operational with 3 work visas</p>
                  </div>
                </div>

                {/* Result Metrics */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {results.map((result, index) => (
                      <div key={index}>
                        <span className="block text-2xl font-bold text-accent">{result.metric}</span>
                        <span className="block text-xs text-white/80">{result.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Story */}
            <motion.div variants={staggerItem} className="lg:col-span-2 space-y-8">
              {/* The Challenge */}
              <div className="bg-muted/30 rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-bold text-primary mb-4">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The founders of TechVentures needed to establish their Bahrain presence quickly 
                  to secure a major regional contract. They faced tight deadlines and specific requirements:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Needed market entry within 2 weeks to meet client deadline</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Required 100% foreign ownership structure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Needed to hire 3 employees within 30 days</span>
                  </li>
                </ul>
              </div>

              {/* Our Solution - Timeline */}
              <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-6">Our Solution</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {timeline.map((step, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <step.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-accent">{step.day}</span>
                        <p className="text-sm text-muted-foreground">{step.action}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Quote */}
              <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20 relative">
                <Quote className="h-10 w-10 text-accent/30 absolute top-4 right-4" />
                <blockquote className="text-lg text-primary italic leading-relaxed mb-4">
                  "Keylink made what seemed impossible feel effortless. Their deep knowledge of 
                  Bahrain's regulatory landscape and established relationships with government 
                  authorities saved us weeks of time. We were operational and invoicing within 
                  a week of our first call."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Ahmed Hassan</p>
                    <p className="text-sm text-muted-foreground">Co-Founder, TechVentures MENA</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div 
            variants={staggerItem}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-6">
              Ready to achieve similar results? Let's discuss your business setup needs.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Link 
                to="/free-consultation"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20"
              >
                Start Your Success Story
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
