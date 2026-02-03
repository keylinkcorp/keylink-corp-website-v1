import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Ship, Warehouse, Factory, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const zones = [
  {
    name: "BIW",
    fullName: "Bahrain Investment Wharf",
    icon: Ship,
    focus: "Logistics & Warehousing",
    price: "From BHD 2/sqm",
  },
  {
    name: "BLZ",
    fullName: "Bahrain Logistics Zone",
    icon: Warehouse,
    focus: "E-commerce & Distribution",
    price: "From BHD 3/sqm",
  },
  {
    name: "BIIP",
    fullName: "Bahrain International Investment Park",
    icon: Factory,
    focus: "Manufacturing & Tech",
    price: "From BHD 1.5/sqm",
  },
  {
    name: "Sitra",
    fullName: "Sitra Industrial Area",
    icon: Building2,
    focus: "Heavy Industry",
    price: "From BHD 1/sqm",
  },
];

export function FreeZonesGuide() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-3">
              Strategic Locations
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
              Industrial Zones & Business Parks
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Specialized industrial areas with excellent infrastructure and regional market access.
            </p>
          </motion.div>

          {/* Zone Cards Grid */}
          <motion.div 
            variants={staggerItem}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12"
          >
            {zones.map((zone) => (
              <div 
                key={zone.name} 
                className="text-center group cursor-default"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <zone.icon className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-1">
                  {zone.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {zone.focus}
                </p>
                <p className="text-sm font-medium text-accent">
                  {zone.price}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div 
            variants={staggerItem}
            className="border-t border-border my-8"
          />

          {/* Footer CTA */}
          <motion.div 
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center"
          >
            <span className="text-muted-foreground">
              Land from BHD 1/sqm/month
            </span>
            <span className="hidden sm:inline text-muted-foreground/50">•</span>
            <Link 
              to="/free-consultation"
              className="inline-flex items-center gap-1.5 text-accent hover:underline font-medium"
            >
              Get location advice
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
