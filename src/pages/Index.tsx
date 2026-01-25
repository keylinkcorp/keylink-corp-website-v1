import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { CompanyFormationProcess } from "@/components/home/CompanyFormationProcess";
import { TrustBar } from "@/components/home/TrustBar";
import { Services } from "@/components/home/Services";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { IndustryServices } from "@/components/home/IndustryServices";
import { CostCalculatorPreview } from "@/components/home/CostCalculatorPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CTABanner } from "@/components/home/CTABanner";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TrustBar />
      <CompanyFormationProcess />
      <ProcessSteps />
      <WhyChooseUs />
      <IndustryServices />
      <CostCalculatorPreview />
      <Services />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </Layout>
  );
};

export default Index;
