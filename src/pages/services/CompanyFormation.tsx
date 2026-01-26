import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { FormationHero } from "@/components/services/formation/FormationHero";
import { FormationTrustBar } from "@/components/services/formation/FormationTrustBar";
import { ProblemValueProp } from "@/components/services/formation/ProblemValueProp";
import { CompanyTypesComparison } from "@/components/services/formation/CompanyTypesComparison";
import { FormationProcessDetailed } from "@/components/services/formation/FormationProcessDetailed";
import { PricingPackages } from "@/components/services/formation/PricingPackages";
import { FormationCostCalculator } from "@/components/services/formation/FormationCostCalculator";
import { BankAccountOpening } from "@/components/services/formation/BankAccountOpening";
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
    // Set page title - Primary keyword at start
    document.title = "Company Formation in Bahrain - Register Business in 3-7 Days | From BHD 750 | Keylink Corp";
    
    // Set meta description with CTA and secondary keywords
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Start your business in Bahrain with 100% foreign ownership. Register WLL, SPC, or branch office in 3-7 days from BHD 750. Expert MOIC registration, commercial licensing & LMRA support. Free consultation.");
    }

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/services/company-formation");

    // Set Open Graph tags
    const ogTags = [
      { property: "og:title", content: "Company Formation in Bahrain - 100% Foreign Ownership | Keylink Corp" },
      { property: "og:description", content: "Register your company in Bahrain in 3-7 days. WLL, SPC & branch office formation from BHD 750. Expert business setup services with full MOIC and LMRA compliance." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://keylinkcorp.com/services/company-formation" },
      { property: "og:image", content: "https://keylinkcorp.com/og-company-formation.jpg" },
      { property: "og:site_name", content: "Keylink Corp" },
      { property: "og:locale", content: "en_US" },
    ];

    ogTags.forEach(({ property, content }) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    });

    // Set Twitter Card tags
    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Company Formation in Bahrain - Start in 3-7 Days" },
      { name: "twitter:description", content: "Register WLL, SPC, or branch office with 100% foreign ownership from BHD 750. Expert Bahrain business setup services." },
      { name: "twitter:image", content: "https://keylinkcorp.com/og-company-formation.jpg" },
    ];

    twitterTags.forEach(({ name, content }) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    });

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
        <FormationCostCalculator />
        <BankAccountOpening />
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