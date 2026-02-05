import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ServiceHero } from "@/components/services/shared/ServiceHero";
import { FreeZonesGuide } from "@/components/services/formation/FreeZonesGuide";
import { FormationCTA } from "@/components/services/formation/FormationCTA";
import { Clock, Globe, Shield } from "lucide-react";
import { FreeZoneQuickAnswer } from "@/components/services/formation/free-zone/FreeZoneQuickAnswer";
import { FreeZoneComparison } from "@/components/services/formation/free-zone/FreeZoneComparison";
import { FreeZoneSetupSteps } from "@/components/services/formation/free-zone/FreeZoneSetupSteps";
import { FreeZoneFAQ } from "@/components/services/formation/free-zone/FreeZoneFAQ";

export default function FreeZoneInBahrain() {
  useEffect(() => {
    document.title = "Free Zone in Bahrain | Zones, Setup & Costs Guide | Keylink Corp";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Free zone in Bahrain: compare BLZ, BIIP, BIW and other industrial zones, understand setup steps and costs, and get expert support to register your business with confidence."
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/free-zone-in-bahrain");

    // FAQ schema cleanup (if hot-reloaded / navigated)
    const existingSchema = document.querySelector('script[type="application/ld+json"][data-schema="free-zone-bahrain-faq"]');
    if (existingSchema) existingSchema.remove();
  }, []);

  return (
    <Layout>
      <ServiceHero
        badge="Launch Business"
        title="Free zone in"
        highlight="Bahrain"
        subtitle="A modern, practical guide to Bahrain’s industrial zones and business parks—compare locations, understand costs, and choose a compliant setup path." 
        features={[
          { icon: Clock, text: "Fast setup guidance" },
          { icon: Shield, text: "Compliance-first" },
          { icon: Globe, text: "Built for foreign founders" },
        ]}
        primaryCTA={{ text: "Get Free Consultation", href: "/free-consultation" }}
        secondaryCTA={{ text: "Call +973 1700 0000", href: "tel:+97317000000" }}
        priceFrom="BHD 1/sqm"
        priceLabel="Land from"
      />

      <FreeZoneQuickAnswer />

      <FreeZoneComparison />

      <FreeZonesGuide />

      <FreeZoneSetupSteps />

      <FreeZoneFAQ />

      <FormationCTA />
    </Layout>
  );
}
