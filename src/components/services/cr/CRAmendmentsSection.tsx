import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Settings, 
  Users, 
  TrendingUp, 
  Edit3, 
  MapPin, 
  UserCog,
  Building2,
  ArrowRight,
  Clock
} from "lucide-react";

const amendmentTypes = [
  {
    icon: Settings,
    title: "Activity Changes",
    description: "Add or remove commercial activities from your CR",
    timeline: "2-3 days"
  },
  {
    icon: Users,
    title: "Shareholder Transfers",
    description: "Transfer shares or add/remove shareholders",
    timeline: "3-5 days"
  },
  {
    icon: TrendingUp,
    title: "Capital Adjustments",
    description: "Increase or decrease registered share capital",
    timeline: "3-5 days"
  },
  {
    icon: Edit3,
    title: "Company Name Change",
    description: "Update your registered company name",
    timeline: "3-5 days"
  },
  {
    icon: MapPin,
    title: "Address Change",
    description: "Update registered office address",
    timeline: "2-3 days"
  },
  {
    icon: UserCog,
    title: "Signatory Updates",
    description: "Add, remove, or change authorized signatories",
    timeline: "2-3 days"
  },
  {
    icon: Building2,
    title: "Entity Conversion",
    description: "Convert between company types (e.g., SPC to WLL)",
    timeline: "5-10 days"
  },
  {
    icon: Users,
    title: "Manager/Director Changes",
    description: "Update management or board composition",
    timeline: "3-5 days"
  }
];

export function CRAmendmentsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={staggerItem}>
              <span className="section-badge">CR Amendments</span>
            </motion.div>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-6">
              Need to Modify Your{" "}
              <span className="text-accent">Commercial Registration</span>?
            </motion.h2>
            <motion.p variants={staggerItem} className="text-lg text-muted-foreground mb-8">
              Business needs change. Whether you're expanding activities, restructuring ownership, 
              or updating company details, we handle all types of CR amendments efficiently through 
              the MOIC SIJILAT system.
            </motion.p>

            <motion.div variants={staggerItem} className="space-y-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                <Clock className="w-6 h-6 text-accent" />
                <div>
                  <div className="font-semibold">Fast Processing</div>
                  <div className="text-sm text-muted-foreground">Most amendments complete in 2-5 business days</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                <Settings className="w-6 h-6 text-accent" />
                <div>
                  <div className="font-semibold">Full-Service Handling</div>
                  <div className="text-sm text-muted-foreground">We manage all MOIC submissions and follow-ups</div>
                </div>
              </div>
            </motion.div>

            <motion.a
              variants={staggerItem}
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Request CR Amendment
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Amendment Types Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 gap-4"
          >
            {amendmentTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-xl p-5 border border-border hover:border-accent hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <type.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{type.description}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-accent">
                      <Clock className="w-3 h-3" />
                      {type.timeline}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Have a complex amendment or company restructuring? 
            <a href="/contact" className="text-accent font-medium ml-1 hover:underline">
              Book a consultation for expert guidance →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
