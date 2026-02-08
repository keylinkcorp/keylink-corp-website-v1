import { Layout } from "@/components/layout/Layout";

import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Services } from "@/components/home/Services";
import { CostCalculatorPreview } from "@/components/home/CostCalculatorPreview";
import { IndustryServices } from "@/components/home/IndustryServices";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CompanyFormationProcess } from "@/components/home/CompanyFormationProcess";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CTABanner } from "@/components/home/CTABanner";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TrustBar />
      <Services />
      <CostCalculatorPreview />
      <IndustryServices />
      <WhyChooseUs />
      <CompanyFormationProcess />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </Layout>
  );
}
