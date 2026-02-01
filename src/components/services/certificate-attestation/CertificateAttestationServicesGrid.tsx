import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Building2, Flag, Stamp, FileCheck, GraduationCap, Briefcase, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building2,
    title: "MOFA Attestation",
    description: "Ministry of Foreign Affairs authentication for all document types. The essential second step in the attestation chain.",
    examples: ["Educational certificates", "Commercial documents", "Personal documents"]
  },
  {
    icon: Flag,
    title: "Embassy Legalization",
    description: "Country-specific legalization for 15+ embassies in Bahrain. Each embassy has unique requirements we handle expertly.",
    examples: ["UAE Embassy", "Saudi Embassy", "Indian Embassy"]
  },
  {
    icon: Stamp,
    title: "Apostille Services",
    description: "Hague Convention apostille for applicable countries. Single certification accepted by 120+ member nations.",
    examples: ["UK documents", "EU recognition", "US verification"]
  },
  {
    icon: FileCheck,
    title: "Notarization",
    description: "Initial notarization and authentication from issuing authorities. The critical first step in the chain.",
    examples: ["Document verification", "Notary authentication", "Initial certification"]
  },
  {
    icon: GraduationCap,
    title: "Educational Certificates",
    description: "Degree, diploma, and transcript attestation for employment and higher education abroad.",
    examples: ["Bachelor's degree", "Master's diploma", "School transcripts"]
  },
  {
    icon: Briefcase,
    title: "Commercial Documents",
    description: "Company documents, contracts, and Power of Attorney legalization for international business.",
    examples: ["Company CR", "Contracts", "Power of Attorney"]
  },
  {
    icon: User,
    title: "Personal Documents",
    description: "Birth certificates, marriage certificates, and police clearance attestation for visas and immigration.",
    examples: ["Birth certificate", "Marriage certificate", "Police clearance"]
  }
];

export function CertificateAttestationServicesGrid() {
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
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Certificate Attestation Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From MOFA to embassies, educational to commercial — we handle every type of document attestation in Bahrain.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            variants={staggerItem}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10"
          >
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
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
              Need a specific attestation not listed?
            </p>
            <Button 
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <a href="https://wa.me/97317000000" target="_blank" rel="noopener noreferrer">
                Ask About Your Document
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
