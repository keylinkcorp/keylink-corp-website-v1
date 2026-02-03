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
  ArrowRight,
  Ruler,
  Zap,
  Clock,
  Plane,
  DollarSign
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ZoneInfo {
  name: string;
  icon: typeof Ship;
  location: string;
  focus: string;
  highlights: string[];
  incentives: string[];
  landCost: string;
  plotSizes: string;
  utilities: string;
  successStory: string;
  distanceToPort: string;
  distanceToAirport: string;
}

const zones: ZoneInfo[] = [
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
    landCost: "From BHD 2/sqm/month",
    plotSizes: "500 - 50,000 sqm available",
    utilities: "Industrial water, 3-phase power, fiber optic",
    successStory: "DHL regional hub and Amazon logistics center established 2022-2023",
    distanceToPort: "5 minutes to Khalifa Bin Salman Port",
    distanceToAirport: "15 minutes to Bahrain International Airport"
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
    landCost: "From BHD 3/sqm/month",
    plotSizes: "300 - 20,000 sqm available",
    utilities: "Cold storage, backup power, dedicated freight access",
    successStory: "Noon.com and Aramex regional fulfillment centers operational since 2021",
    distanceToPort: "25 minutes to Khalifa Bin Salman Port",
    distanceToAirport: "Adjacent to Bahrain International Airport"
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
    landCost: "From BHD 1.5/sqm/month",
    plotSizes: "1,000 - 100,000 sqm available",
    utilities: "Heavy industrial power, process water, effluent treatment",
    successStory: "Mondelez and Alba downstream industries manufacturing facilities",
    distanceToPort: "10 minutes to Khalifa Bin Salman Port",
    distanceToAirport: "20 minutes to Bahrain International Airport"
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
    landCost: "From BHD 1/sqm/month",
    plotSizes: "2,000 - 200,000 sqm available",
    utilities: "Heavy industrial infrastructure, marine access, tank farms",
    successStory: "BAPCO downstream partners and major contractors base of operations",
    distanceToPort: "15 minutes to Sitra Port",
    distanceToAirport: "30 minutes to Bahrain International Airport"
  },
];

// Comparison table data
const comparisonData = [
  { zone: "BIW", landCost: "BHD 2/sqm", minPlot: "500 sqm", bestFor: "Logistics & Warehousing", setupTime: "2-4 weeks" },
  { zone: "BLZ", landCost: "BHD 3/sqm", minPlot: "300 sqm", bestFor: "E-commerce & Distribution", setupTime: "2-3 weeks" },
  { zone: "BIIP", landCost: "BHD 1.5/sqm", minPlot: "1,000 sqm", bestFor: "Manufacturing & Tech", setupTime: "4-8 weeks" },
  { zone: "Sitra", landCost: "BHD 1/sqm", minPlot: "2,000 sqm", bestFor: "Heavy Industry", setupTime: "6-12 weeks" },
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
            incentives, and strategic access to regional markets. Land costs start from BHD 1/sqm/month.
          </motion.p>
        </motion.div>

        {/* Quick Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-16 overflow-x-auto"
        >
          <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-3">
            <DollarSign className="h-5 w-5 text-gold" />
            Quick Zone Comparison
          </h3>
          <div className="bg-white rounded-xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-semibold">Zone</th>
                  <th className="px-4 py-3 text-left font-semibold">Land Cost</th>
                  <th className="px-4 py-3 text-left font-semibold">Min Plot</th>
                  <th className="px-4 py-3 text-left font-semibold">Best For</th>
                  <th className="px-4 py-3 text-left font-semibold">Setup Time</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={row.zone} className={index % 2 === 0 ? "bg-white" : "bg-muted/30"}>
                    <td className="px-4 py-3 font-medium text-primary">{row.zone}</td>
                    <td className="px-4 py-3 text-gold font-medium">{row.landCost}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.minPlot}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.bestFor}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.setupTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <DollarSign className="w-3 h-3 text-gold" />
                      <span className="text-xs font-semibold text-primary">Land Cost</span>
                    </div>
                    <p className="text-sm text-gold font-medium">{zone.landCost}</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Ruler className="w-3 h-3 text-gold" />
                      <span className="text-xs font-semibold text-primary">Plot Sizes</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{zone.plotSizes}</p>
                  </div>
                </div>

                {/* Utilities */}
                <div className="mb-4 p-3 bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-3 h-3 text-gold" />
                    <span className="text-xs font-semibold text-primary">Infrastructure</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{zone.utilities}</p>
                </div>

                {/* Distances */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Ship className="w-3 h-3 text-gold" />
                    <span>{zone.distanceToPort}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Plane className="w-3 h-3 text-gold" />
                    <span>{zone.distanceToAirport}</span>
                  </div>
                </div>

                {/* Success Story */}
                <div className="mb-4 p-3 border border-gold/20 rounded-lg bg-gold/5">
                  <div className="flex items-center gap-2 mb-1">
                    <Check className="w-3 h-3 text-gold" />
                    <span className="text-xs font-semibold text-gold">Success Story</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{zone.successStory}</p>
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
                  operational needs, and budget. We also assist with plot applications and lease negotiations.
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
