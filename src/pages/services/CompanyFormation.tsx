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
import { Helmet } from "react-helmet-async";
import { companyFormationSchema } from "@/lib/schema/companyFormationSchema";

export default function CompanyFormation() {
  return (
    <>
      <Helmet>
        <title>Company Formation in Bahrain - Start in 3-7 Days | From BHD 750</title>
        <meta 
          name="description" 
          content="Register your company in Bahrain in 3-7 days. 100% foreign ownership, from BHD 750. Expert support for SPC, WLL & Branch formation. Free consultation." 
        />
        <meta name="keywords" content="company formation bahrain, bahrain company registration, start business bahrain, wll formation bahrain, spc registration bahrain" />
        <link rel="canonical" href="https://keylinkcorp.com/services/company-formation" />
        <script type="application/ld+json">
          {JSON.stringify(companyFormationSchema)}
        </script>
      </Helmet>
      
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
