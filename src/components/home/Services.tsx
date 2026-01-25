import { Link } from "react-router-dom";
import { 
  Building2, 
  FileText, 
  Users, 
  Plane, 
  Briefcase, 
  Building,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Building2,
    title: "Company Formation",
    description: "Start your business in Bahrain with expert guidance. We handle everything from registration to licensing.",
    href: "/services/company-formation",
    features: ["SPC & WLL Setup", "Branch Office", "Business Licensing"],
  },
  {
    icon: FileText,
    title: "Commercial Registration",
    description: "Complete CR registration, amendments, and renewals with fast turnaround times.",
    href: "/services/commercial-registration",
    features: ["New CR Registration", "CR Amendments", "Lease Registration"],
  },
  {
    icon: Users,
    title: "PRO Services",
    description: "Professional government liaison services for all your document processing needs.",
    href: "/services/pro-services",
    features: ["Document Clearance", "Attestation", "Local Sponsorship"],
  },
  {
    icon: Plane,
    title: "Visa Services",
    description: "Complete visa solutions for your employees and their families.",
    href: "/services/visa-services",
    features: ["Work Visas", "Golden Visa", "Family Visas"],
  },
  {
    icon: Briefcase,
    title: "Business Support",
    description: "Comprehensive business services from consulting to accounting and legal support.",
    href: "/services/business-consulting",
    features: ["Consulting", "Accounting", "Tax Services"],
  },
  {
    icon: Building,
    title: "Workspace Solutions",
    description: "Flexible office solutions from virtual offices to co-working spaces.",
    href: "/services/virtual-office",
    features: ["Virtual Office", "Co-working", "Business Address"],
  },
];

export function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Complete Business Solutions for Bahrain
          </h2>
          <p className="text-lg text-muted-foreground">
            From company formation to ongoing business support, we provide end-to-end services 
            to help your business thrive in the Kingdom of Bahrain.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link key={service.title} to={service.href} className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-gold/50 group-hover:-translate-y-1">
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-5 group-hover:bg-gold transition-colors">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:text-gold transition-colors">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Not sure which service you need?
          </p>
          <Link
            to="/free-consultation"
            className="inline-flex items-center gap-2 text-gold font-semibold hover:underline"
          >
            Get a Free Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
