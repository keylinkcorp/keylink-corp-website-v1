import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { CompanyFormationProcess } from "@/components/home/CompanyFormationProcess";
import { TrustBar } from "@/components/home/TrustBar";
import { Services } from "@/components/home/Services";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { MissionVision } from "@/components/home/MissionVision";
import { IndustryServices } from "@/components/home/IndustryServices";
import { CostCalculatorPreview } from "@/components/home/CostCalculatorPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CTABanner } from "@/components/home/CTABanner";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TrustBar />
      <CompanyFormationProcess />
      <WhyChooseUs />
      <MissionVision />
      <IndustryServices />
      <CostCalculatorPreview />
      <Services />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <FloatingWhatsApp />
      <BackToTop />
    </Layout>
  );
};

export default Index;
