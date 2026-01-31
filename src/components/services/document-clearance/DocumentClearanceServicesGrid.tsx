import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Receipt, Users, Shield, Heart, Package, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Receipt,
    title: "Tax/NBR Clearance",
    description: "VAT and tax obligation confirmation from National Bureau for Revenue. Required for company closure and certain visa processes.",
    examples: ["VAT clearance", "Tax settlement", "NBR no-objection"]
  },
  {
    icon: Users,
    title: "LMRA Clearance",
    description: "Labour Market Regulatory Authority confirmation of work permit settlements and employee obligations.",
    examples: ["Work permit clearance", "Employee exit", "Visa cancellation"]
  },
  {
    icon: Shield,
    title: "Police Clearance",
    description: "Criminal record check from General Directorate of Criminal Investigation. Required for emigration and certain visa applications.",
    examples: ["Good conduct certificate", "Background check", "Embassy requirements"]
  },
  {
    icon: Heart,
    title: "SIO/GOSI Clearance",
    description: "Social Insurance Organization confirmation of pension and insurance contribution settlements.",
    examples: ["Social insurance settlement", "End-of-service", "Pension clearance"]
  },
  {
    icon: Package,
    title: "Customs Clearance",
    description: "Customs Affairs clearance for import/export obligations and trade compliance.",
    examples: ["Trade obligations", "Import clearance", "Duty settlements"]
  },
  {
    icon: MapPin,
    title: "Municipality Clearance",
    description: "Local authority confirmation for permit settlements and zoning compliance.",
    examples: ["Permit settlements", "Health clearance", "Business location"]
  }
];

export function DocumentClearanceServicesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-secondary/30" />
      
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Clearance Types
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Clearance Certificate Coverage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We process every clearance your business needs — from employee exits to company closures.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            variants={staggerItem}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
          >
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {service.examples.map((example, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-secondary px-2 py-1 rounded-full text-muted-foreground"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={staggerItem} className="text-center">
            <p className="text-muted-foreground mb-4">
              Need a clearance not listed?
            </p>
            <Button 
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <a href="https://wa.me/97317000000" target="_blank" rel="noopener noreferrer">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
