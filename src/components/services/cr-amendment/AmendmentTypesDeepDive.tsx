import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  FileText, 
  Users, 
  DollarSign, 
  Edit, 
  MapPin, 
  UserCheck, 
  RefreshCw, 
  Briefcase,
  Star,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

const amendmentTypes = [
  {
    icon: FileText,
    title: "Activity Changes",
    badge: "Most Common",
    timeline: "2-3 days",
    fee: "BHD 20-50/activity",
    description: "Adding or removing commercial activities is the most requested CR amendment. Businesses expand into new markets, pivot their offerings, or streamline operations. Each activity on your CR must match an approved ISIC4 code from the MOIC classification system.",
    details: "You can add multiple activities in a single amendment. Some activities require additional sector approvals—financial services need CBB clearance, food businesses need municipal permits. We handle all coordination.",
    highlighted: true
  },
  {
    icon: Users,
    title: "Shareholder Transfers",
    badge: null,
    timeline: "3-5 days",
    fee: "BHD 30",
    description: "Transferring shares or adding new shareholders changes your CR ownership structure. This applies to WLLs, holding companies, and any multi-partner arrangement.",
    details: "The amendment requires notarized share transfer agreements and updated MOA documentation. Foreign shareholder additions may need security clearance from the Ministry of Interior, extending processing by 3-5 days.",
    highlighted: false
  },
  {
    icon: DollarSign,
    title: "Capital Adjustments",
    badge: null,
    timeline: "3-5 days",
    fee: "BHD 20",
    description: "Increasing or decreasing your registered capital reflects changes in your business investment.",
    details: "Capital increases are straightforward—deposit additional funds, update the CR. Decreases require creditor notification periods and MOIC approval to protect third-party interests.",
    highlighted: false
  },
  {
    icon: Edit,
    title: "Trade Name Change",
    badge: null,
    timeline: "3-5 days",
    fee: "BHD 30 + BHD 15",
    description: "Rebranding your business requires a new trade name registration.",
    details: "MOIC must approve the new name—it cannot duplicate existing registrations or violate naming guidelines. Name reservation expires after 60 days, so coordinate your branding timeline.",
    highlighted: false
  },
  {
    icon: MapPin,
    title: "Address Change",
    badge: null,
    timeline: "2-3 days",
    fee: "BHD 10",
    description: "Relocating your registered office address is a quick amendment.",
    details: "You need a valid lease agreement or flexi-desk contract for the new location. Some free zones have specific address requirements.",
    highlighted: false
  },
  {
    icon: UserCheck,
    title: "Signatory Updates",
    badge: null,
    timeline: "2-3 days",
    fee: "BHD 10",
    description: "Adding or removing authorized signatories affects who can legally bind your company.",
    details: "New signatories need valid CPR or passport documentation. Banks require updated signatory cards before processing transactions.",
    highlighted: false
  },
  {
    icon: RefreshCw,
    title: "Entity Conversion",
    badge: "Most Complex",
    timeline: "5-10 days",
    fee: "BHD 50",
    description: "Converting between entity types—SPC to WLL, or vice versa—is the most complex amendment.",
    details: "It affects capital requirements, shareholder structures, and sometimes requires fresh banking documentation. Plan for 5-10 days processing.",
    highlighted: false
  },
  {
    icon: Briefcase,
    title: "Manager/Director Changes",
    badge: null,
    timeline: "3-5 days",
    fee: "BHD 20",
    description: "Updating management positions or board composition reflects your current leadership.",
    details: "Required documents include board resolutions and updated signatory information. LMRA may need notification for visa-sponsored managers.",
    highlighted: false
  }
];

export function AmendmentTypesDeepDive() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-secondary/30">
      {/* Ellipse mask fade pattern */}
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
              <FileText className="w-4 h-4" />
              Amendment Services
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Types of <span className="text-accent">CR Amendment</span> in Bahrain
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We handle all CR modification types through Sijilat with expert processing
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {amendmentTypes.map((type, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className={cn(
                "bg-white rounded-2xl border-2 p-6 transition-all hover:shadow-lg",
                type.highlighted 
                  ? "border-accent shadow-md md:col-span-2" 
                  : "border-border hover:border-accent/50"
              )}
            >
              <div className="flex items-start gap-5">
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0",
                  type.highlighted 
                    ? "bg-gradient-to-br from-accent to-accent/80" 
                    : "bg-accent/10"
                )}>
                  <type.icon className={cn(
                    "w-7 h-7",
                    type.highlighted ? "text-primary" : "text-accent"
                  )} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-xl font-bold">{type.title}</h3>
                    {type.badge && (
                      <span className={cn(
                        "px-3 py-1 text-xs font-bold rounded-full flex items-center gap-1",
                        type.badge === "Most Common" 
                          ? "bg-accent/10 text-accent" 
                          : "bg-primary/10 text-primary"
                      )}>
                        <Star className="w-3 h-3" />
                        {type.badge}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {type.timeline}
                    </span>
                    <span className="text-sm font-semibold text-accent">{type.fee}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-3">{type.description}</p>
                  <p className="text-sm text-muted-foreground">{type.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
