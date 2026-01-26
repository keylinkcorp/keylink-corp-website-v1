import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building, Landmark, Database, Users, ExternalLink, ArrowRight } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Link } from "react-router-dom";

const authorities = [
  {
    name: "Ministry of Industry and Commerce (MOIC)",
    abbreviation: "MOIC",
    icon: Landmark,
    role: "Primary authority for commercial registration and trade licensing in Bahrain",
    services: [
      "Commercial Registration (CR) issuance",
      "Trade license approvals",
      "Company name reservation",
      "Activity classification"
    ],
    timeline: "1-3 business days",
    website: "https://www.moic.gov.bh",
    ourRole: "We handle all MOIC applications, documentation, and follow-up on your behalf"
  },
  {
    name: "Labour Market Regulatory Authority (LMRA)",
    abbreviation: "LMRA",
    icon: Users,
    role: "Regulates work permits, visa quotas, and employment compliance for all businesses",
    services: [
      "Work permit issuance",
      "Visa quota allocation",
      "Employee registration",
      "Labour compliance monitoring"
    ],
    timeline: "2-5 business days",
    website: "https://lmra.bh",
    ourRole: "We manage your LMRA registration, visa applications, and quota optimization"
  },
  {
    name: "SIJILAT System",
    abbreviation: "SIJILAT",
    icon: Database,
    role: "Electronic commercial registration system enabling online CR processing and renewals",
    services: [
      "Online CR applications",
      "Electronic document submission",
      "Real-time status tracking",
      "Digital certificate issuance"
    ],
    timeline: "Same-day processing",
    website: "https://www.sijilat.bh",
    ourRole: "We submit all applications through SIJILAT for fastest processing"
  },
  {
    name: "Bahrain Investors Center",
    abbreviation: "BIC",
    icon: Building,
    role: "One-stop shop for investors providing streamlined access to all government services",
    services: [
      "Single-window service",
      "Investment facilitation",
      "Multi-ministry coordination",
      "Investor support services"
    ],
    timeline: "Varies by service",
    website: "https://www.bahrainedb.com",
    ourRole: "We coordinate with BIC for complex multi-step registrations"
  },
];

export function MinistryAuthorityDetails() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Ellipse mask fade pattern */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
          style={{
            maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)"
          }}
        />
      </div>

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
                <Landmark className="h-5 w-5 text-accent" />
              </div>
              <p className="text-sm font-medium text-accent tracking-wide uppercase">
                Regulatory Authorities
              </p>
            </div>
            <h2 className="text-[32px] md:text-[40px] lg:text-[46px] font-bold text-primary mb-4 tracking-tight leading-[1.15]">
              Bahrain Government Authorities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Understanding the key government bodies involved in company formation. 
              We handle all interactions with these authorities on your behalf.
            </p>
          </motion.div>

          {/* Authority Cards Grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12"
          >
            {authorities.map((authority, index) => (
              <motion.div
                key={authority.abbreviation}
                variants={staggerItem}
                className="bg-white rounded-2xl border border-border p-6 lg:p-8 shadow-sm hover:shadow-lg hover:border-accent/40 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <authority.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">{authority.name}</h3>
                    <span className="text-sm font-medium text-accent">{authority.abbreviation}</span>
                  </div>
                </div>

                {/* Role */}
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {authority.role}
                </p>

                {/* Services */}
                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-primary mb-3">Key Services:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {authority.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline & Website */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-border">
                  <div>
                    <span className="text-xs text-muted-foreground">Processing Time:</span>
                    <p className="text-sm font-semibold text-primary">{authority.timeline}</p>
                  </div>
                  <a 
                    href={authority.website}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                  >
                    Official Website
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* Our Role */}
                <div className="mt-5 bg-accent/10 rounded-lg p-4">
                  <p className="text-sm text-primary">
                    <strong>How we help:</strong> {authority.ourRole}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div 
            variants={staggerItem}
            className="text-center bg-primary/5 rounded-2xl p-8 border border-primary/10"
          >
            <h3 className="text-xl font-bold text-primary mb-3">
              We Handle All Government Liaison
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Save time and avoid complications. Our team manages all interactions with 
              MOIC, LMRA, SIJILAT, and other authorities on your behalf.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link 
                to="/free-consultation"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20"
              >
                Get Started Today
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
