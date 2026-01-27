import { ServiceHero } from "@/components/services/shared/ServiceHero";
import { CheckCircle2, Award, Briefcase } from "lucide-react";

const heroFeatures = [
  { icon: CheckCircle2, text: "100% Success Rate" },
  { icon: Award, text: "MOIC Expert" },
  { icon: Briefcase, text: "Full-Service" }
];

export function CRHero() {
  return (
    <ServiceHero
      badge="Commercial Registration Services"
      title="Commercial Registration in Bahrain"
      highlight="Made Simple"
      subtitle="New Registration. Amendments. Renewals. Your Complete CR Solution."
      features={heroFeatures}
      primaryCTA={{ text: "Free Consultation", href: "/contact" }}
      secondaryCTA={{ text: "Call Us Now", href: "tel:+97317000000" }}
    />
  );
}
