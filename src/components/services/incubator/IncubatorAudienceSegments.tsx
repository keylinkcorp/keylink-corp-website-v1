import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Lightbulb, Check, ArrowRight } from "lucide-react";
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

const segments = [
  {
    icon: Globe,
    title: "Launching from Abroad",
    subtitle: "Foreign Entrepreneurs",
    description: "You're an international entrepreneur looking to establish your startup in Bahrain's tax-free environment. You need a registered company, a local presence, and access to funding — but you're navigating this from outside the country.",
    services: [
      "Company formation without physical presence",
      "Virtual office and registered agent services",
      "Incubator applications optimized for foreign founders",
      "Visa and residency pathway guidance"
    ],
    color: "from-primary to-primary/80"
  },
  {
    icon: Lightbulb,
    title: "Starting Your First Business",
    subtitle: "Local First-Time Founders",
    description: "You're a Bahraini entrepreneur with a business idea, but you've never navigated company registration or incubator applications before. You want expert guidance without the trial-and-error.",
    services: [
      "Choosing the right business structure (SPC, WLL, etc.)",
      "Tamkeen eligibility optimization",
      "Application coaching and documentation",
      "Ongoing support after acceptance"
    ],
    color: "from-accent to-accent/80"
  }
];

export function IncubatorAudienceSegments() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Dot Pattern with Ellipse Mask */}
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
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div variants={staggerItem}>
              <span className="section-badge">Who We Help</span>
            </motion.div>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-4">
              Built for Founders Who <span className="text-accent">Want to Move Fast</span>
            </motion.h2>
          </div>

          {/* Segment Cards */}
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {segments.map((segment, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group bg-white rounded-2xl border-2 border-border overflow-hidden shadow-sm hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                {/* Header Gradient */}
                <div className={`bg-gradient-to-r ${segment.color} p-6`}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                      <segment.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-medium">{segment.subtitle}</p>
                      <h3 className="text-xl font-bold text-white">{segment.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {segment.description}
                  </p>

                  {/* Services List */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">What we handle</p>
                    <ul className="space-y-3">
                      {segment.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-accent" />
                          </div>
                          <span className="text-sm text-muted-foreground">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Button asChild variant="outline" className="w-full group-hover:border-accent group-hover:text-accent transition-colors">
                    <Link to="/free-consultation">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
