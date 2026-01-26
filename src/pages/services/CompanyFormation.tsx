import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { FormationHero } from "@/components/services/formation/FormationHero";
import { FormationTrustBar } from "@/components/services/formation/FormationTrustBar";
import { ProblemValueProp } from "@/components/services/formation/ProblemValueProp";
import { CompanyTypesComparison } from "@/components/services/formation/CompanyTypesComparison";
import { FormationProcessDetailed } from "@/components/services/formation/FormationProcessDetailed";
import { PricingPackages } from "@/components/services/formation/PricingPackages";
import { RequirementsChecklist } from "@/components/services/formation/RequirementsChecklist";
import { WhyChooseKeylink } from "@/components/services/formation/WhyChooseKeylink";
import { FormationTestimonials } from "@/components/services/formation/FormationTestimonials";
import { FormationFAQ } from "@/components/services/formation/FormationFAQ";
import { RelatedServices } from "@/components/services/formation/RelatedServices";
import { FormationCTA } from "@/components/services/formation/FormationCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { companyFormationSchema } from "@/lib/schema/companyFormationSchema";

export default function CompanyFormation() {
  useEffect(() => {
    // Set page title and meta
    document.title = "Company Formation in Bahrain - Start in 3-7 Days | From BHD 750";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Register your company in Bahrain in 3-7 days. 100% foreign ownership, from BHD 750. Expert support for SPC, WLL & Branch formation. Free consultation.");
    }

    // Add JSON-LD schema
    const existingSchema = document.querySelector('script[data-schema="company-formation"]');
    if (!existingSchema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "company-formation");
      script.textContent = JSON.stringify(companyFormationSchema);
      document.head.appendChild(script);
    }

    // Cleanup
    return () => {
      const schemaScript = document.querySelector('script[data-schema="company-formation"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, []);

  return (
    <>
      <Layout>
        <FormationHero />
        <FormationTrustBar />
        <ProblemValueProp />
        <CompanyTypesComparison />
        <FormationProcessDetailed />
        <PricingPackages />
        <RequirementsChecklist />
        <WhyChooseKeylink />
        <FormationTestimonials />
        <FormationFAQ />
        <RelatedServices />
        <FormationCTA />
      </Layout>
      
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}