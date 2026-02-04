import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Services } from "@/components/home/Services";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CompanyFormationProcess } from "@/components/home/CompanyFormationProcess";
import { CostCalculatorPreview } from "@/components/home/CostCalculatorPreview";
import { IndustryServices } from "@/components/home/IndustryServices";
import { Testimonials } from "@/components/home/Testimonials";
import { MissionVision } from "@/components/home/MissionVision";
import { FAQ } from "@/components/home/FAQ";
import { CTABanner } from "@/components/home/CTABanner";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";

export default function Index() {
  useEffect(() => {
    document.title = "Keylink Corp - Business Setup & Company Formation in Bahrain | 100% Foreign Ownership";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Keylink Corp offers complete business setup services in Bahrain. Company formation, CR registration, visa services, PRO services & more. Start your business in 3-7 days with 100% foreign ownership.");
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com");
  }, []);

  return (
    <>
      <Layout>
        <div className="w-full border-b border-border bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 py-2 text-xs text-muted-foreground">
            GitHub sync test: 2026-02-04
          </div>
        </div>
        <Hero />
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <CompanyFormationProcess />
        <CostCalculatorPreview />
        <IndustryServices />
        <Testimonials />
        <MissionVision />
        <FAQ />
        <CTABanner />
      </Layout>
      
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
