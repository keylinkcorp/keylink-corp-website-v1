import { Link } from "react-router-dom";
import { 
  Building2, 
  FileText, 
  UserCheck, 
  Plane, 
  Briefcase, 
  MapPin,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Company Formation",
    description: "Establish your business presence in Bahrain with full legal compliance and 100% ownership options.",
    href: "/services/company-formation",
    features: ["SPC & WLL Setup", "Branch Offices", "Free Zone Companies"],
  },
  {
    icon: FileText,
    title: "Commercial Registration",
    description: "Obtain and manage your Commercial Registration (CR) with expert guidance through every step.",
    href: "/services/commercial-registration",
    features: ["New CR Registration", "CR Amendments", "License Renewal"],
  },
  {
    icon: UserCheck,
    title: "PRO Services",
    description: "Leave government paperwork to our expert team. We handle all ministries and departments for you.",
    href: "/services/pro-services",
    features: ["Document Clearance", "Attestation", "Sponsorship"],
  },
  {
    icon: Plane,
    title: "Visa Services",
    description: "Comprehensive visa solutions for your workforce, from work permits to the Golden Visa program.",
    href: "/services/visa-services",
    features: ["Work Visas", "Golden Visa", "Family Visas"],
  },
  {
    icon: Briefcase,
    title: "Business Support",
    description: "Expert consulting, accounting, and compliance services to keep your business running smoothly.",
    href: "/services/business-consulting",
    features: ["Consulting", "Accounting", "Tax Services"],
  },
  {
    icon: MapPin,
    title: "Workspace Solutions",
    description: "Professional business addresses and flexible workspace options to suit your needs.",
    href: "/services/virtual-office",
    features: ["Virtual Office", "Co-working", "Incubators"],
  },
];

export function Services() {
  return (
    <section className="section-spacing bg-background">
      <div className="container">
        {/* Header - Bizee style centered */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge">Our Services</span>
          <h2 className="mb-6">Everything You Need to Start and Grow Your Business</h2>
          <p className="lead">
            From company formation to ongoing business support, we provide comprehensive 
            solutions for entrepreneurs and businesses in Bahrain.
          </p>
        </div>

        {/* Services Grid - 2x3 layout like Bizee */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={service.href}
              className="group card-elevated-hover p-8"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <service.icon className="h-8 w-8 text-gold" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="link-arrow text-gold">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Not sure which service you need? Let our experts guide you.
          </p>
          <Link to="/free-consultation" className="btn-gold">
            Get Free Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
