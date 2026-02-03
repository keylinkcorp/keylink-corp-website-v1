import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  MapPin, 
  Ship, 
  Factory, 
  Building2, 
  Warehouse,
  Check,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const zones = [
  {
    name: "Bahrain Investment Wharf (BIW)",
    icon: Ship,
    location: "Hidd Industrial Area",
    focus: "Logistics, Warehousing, Light Manufacturing",
    highlights: [
      "Direct access to Khalifa Bin Salman Port",
      "Pre-built warehouses and facilities",
      "Customs bonded zone available",
      "Flexible plot sizes"
    ],
    incentives: ["Reduced utility rates", "Streamlined customs"],
  },
  {
    name: "Bahrain Logistics Zone (BLZ)",
    icon: Warehouse,
    location: "Muharraq",
    focus: "Logistics, Distribution, E-commerce",
    highlights: [
      "Adjacent to airport cargo terminal",
      "Temperature-controlled facilities",
      "24/7 operations permitted",
      "E-commerce fulfillment ready"
    ],
    incentives: ["Airport proximity", "Fast customs clearance"],
  },
  {
    name: "Bahrain International Investment Park (BIIP)",
    icon: Factory,
    location: "Hidd",
    focus: "Manufacturing, Technology, Pharmaceuticals",
    highlights: [
      "Purpose-built industrial plots",
      "Advanced infrastructure",
      "Environmental compliance support",
      "Skilled labor access"
    ],
    incentives: ["Tamkeen support", "Export orientation"],
  },
  {
    name: "Sitra Industrial Area",
    icon: Building2,
    location: "Sitra",
    focus: "Heavy Industry, Oil & Gas Services",
    highlights: [
      "Established industrial hub",
      "Heavy machinery permitted",
      "Large plot availability",
      "Industrial utilities"
    ],
    incentives: ["Lower land costs", "Industrial ecosystem"],
  },
];

export function FreeZonesGuide() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-50" />

      <div className="container relative">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.p 
            variants={staggerItem}
            className="text-sm font-medium text-accent tracking-wide uppercase mb-4"
          >
            Strategic Locations
          </motion.p>
          <motion.h2 
            variants={staggerItem}
            className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]"
          >
            Industrial Zones & Business Parks
          </motion.h2>
          <motion.p 
            variants={staggerItem}
            className="text-lg text-muted-foreground leading-[1.8]"
          >
            Bahrain offers specialized industrial areas with excellent infrastructure, 
            incentives, and strategic access to regional markets.
          </motion.p>
        </motion.div>

        {/* Zones Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {zones.map((zone, index) => (
            <motion.div
              key={zone.name}
              variants={staggerItem}
              className="bg-white rounded-xl border border-border overflow-hidden hover:border-accent/40 hover:shadow-lg transition-all duration-300"
            >
              {/* Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <zone.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">{zone.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {zone.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Focus */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Focus Sectors</p>
                  <p className="text-sm text-muted-foreground">{zone.focus}</p>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Key Features</p>
                  <ul className="space-y-2">
                    {zone.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Incentives */}
                <div className="flex flex-wrap gap-2">
                  {zone.incentives.map((incentive) => (
                    <Badge 
                      key={incentive} 
                      className="bg-accent/10 text-accent border-0 text-xs"
                    >
                      {incentive}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-3xl mx-auto mt-12"
        >
          <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-1">
                <h4 className="font-semibold text-primary mb-1">Need Help Choosing a Location?</h4>
                <p className="text-sm text-muted-foreground">
                  Our team can advise on the best location based on your industry, 
                  operational needs, and budget.
                </p>
              </div>
              <Link to="/free-consultation">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-5 text-sm font-semibold rounded-xl whitespace-nowrap">
                  Get Location Advice
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
