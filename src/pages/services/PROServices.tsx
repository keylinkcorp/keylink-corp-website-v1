import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ServiceHero } from "@/components/services/shared/ServiceHero";
import { ServiceTrustBar } from "@/components/services/shared/ServiceTrustBar";
import { ServiceBenefits } from "@/components/services/shared/ServiceBenefits";
import { ServicePricing } from "@/components/services/shared/ServicePricing";
import { ServiceWhyChoose } from "@/components/services/shared/ServiceWhyChoose";
import { ServiceFAQ } from "@/components/services/shared/ServiceFAQ";
import { ServiceCTA } from "@/components/services/shared/ServiceCTA";
import { RelatedServicesGrid } from "@/components/services/shared/RelatedServicesGrid";
import { PROServicesList } from "@/components/services/pro/PROServicesList";
import { MinistriesCovered } from "@/components/services/pro/MinistriesCovered";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { proServicesSchema } from "@/lib/schema/proServicesSchema";
import {
  UserCheck,
  Clock,
  Building2,
  FileCheck,
  CheckCircle2,
  Award,
  Zap,
  Headphones,
  Calendar,
  Shield,
  RefreshCw,
  Plane,
  Calculator
} from "lucide-react";

const heroFeatures = [
  { icon: Building2, text: "All Ministries" },
  { icon: Clock, text: "Same-Day Collection" },
  { icon: FileCheck, text: "Document Attestation" }
];

const trustBarStats = [
  { icon: FileCheck, value: 10000, suffix: "+", label: "Documents Processed" },
  { icon: Building2, value: 15, suffix: "+", label: "Ministries Covered" },
  { icon: Clock, value: 24, suffix: "hr", label: "Service Speed" },
  { icon: Award, value: 10, suffix: "+", label: "Years Experience" }
];

const benefits = [
  {
    icon: Clock,
    title: "No Waiting Lines",
    description: "Skip the queues – we handle all government office visits for you"
  },
  {
    icon: UserCheck,
    title: "Expert Navigation",
    description: "Our PROs know every process, form, and shortcut"
  },
  {
    icon: Zap,
    title: "Same-Day Service",
    description: "Many documents collected and delivered same day"
  },
  {
    icon: Calendar,
    title: "Status Updates",
    description: "Real-time tracking of all your document requests"
  },
  {
    icon: Shield,
    title: "Cost Savings",
    description: "Fixed fees with no hidden charges or surprises"
  }
];

const pricingTiers = [
  {
    name: "Pay-Per-Service",
    price: "BHD 50",
    period: "service",
    description: "One-time document processing",
    features: [
      "Single document processing",
      "Government fee handling",
      "Collection & delivery",
      "Email confirmation",
      "Standard 24-48hr processing"
    ],
    ctaText: "Request Service",
    ctaHref: "/contact"
  },
  {
    name: "Monthly Retainer",
    price: "BHD 300",
    period: "month",
    description: "Regular PRO support for growing businesses",
    popular: true,
    features: [
      "5 services included/month",
      "Priority processing",
      "Dedicated PRO assigned",
      "Renewal reminders",
      "Phone & WhatsApp support",
      "Additional services at BHD 40"
    ],
    ctaText: "Get Started",
    ctaHref: "/contact"
  },
  {
    name: "Annual Contract",
    price: "BHD 3,000",
    period: "year",
    description: "Unlimited PRO services for enterprises",
    features: [
      "Unlimited services",
      "Express same-day processing",
      "Senior PRO assigned",
      "All renewals handled",
      "Quarterly compliance review",
      "24/7 emergency support"
    ],
    ctaText: "Contact Sales",
    ctaHref: "/contact"
  }
];

const whyChooseDifferentiators = [
  {
    icon: Building2,
    title: "All Ministries",
    description: "We cover every government office in Bahrain"
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "Most documents processed within 24 hours"
  },
  {
    icon: UserCheck,
    title: "Expert PROs",
    description: "Experienced government relations specialists"
  },
  {
    icon: Shield,
    title: "Full Transparency",
    description: "Real-time updates on all your requests"
  },
  {
    icon: Zap,
    title: "Express Options",
    description: "Urgent processing when you need it fast"
  },
  {
    icon: Award,
    title: "100% Success",
    description: "We get your documents approved right"
  }
];

const faqs = [
  {
    question: "What is a PRO and what do they do?",
    answer: "A PRO (Public Relations Officer) is a government liaison specialist who handles document processing, visa applications, and other formalities with Bahrain government ministries on behalf of companies and individuals."
  },
  {
    question: "What services do your PROs handle?",
    answer: "Our PROs handle: CR registration and renewal, trade license processing, visa and immigration, LMRA formalities, document attestation, ministry approvals, chamber of commerce, municipality clearances, and more."
  },
  {
    question: "How long does PRO service take?",
    answer: "Most single-document services are completed within 24-48 hours. Complex processes involving multiple ministries may take 3-5 business days. We offer express same-day service for urgent requests."
  },
  {
    question: "Do I need to visit any government offices?",
    answer: "No, that's the whole point! Our PROs visit all offices on your behalf. You simply provide documents, and we handle everything from submission to collection."
  },
  {
    question: "What's included in the monthly retainer?",
    answer: "The monthly retainer includes 5 PRO services, priority processing, a dedicated PRO, renewal reminders, and phone/WhatsApp support. Additional services beyond 5 are charged at BHD 40 each."
  },
  {
    question: "Can you handle urgent/emergency requests?",
    answer: "Yes, we offer express same-day processing for urgent matters. Contact us immediately for emergency requests – our team is available during extended hours for critical documents."
  },
  {
    question: "Do you cover all government ministries?",
    answer: "Yes, we cover all 15+ government ministries and agencies including MOIC, LMRA, Immigration, Municipality, Chamber of Commerce, Ministry of Foreign Affairs, courts, and specialized authorities."
  },
  {
    question: "What documents do I need to provide?",
    answer: "This varies by service. Generally, you'll need relevant original documents, ID copies, and authorization letters. We provide a specific checklist for each request type."
  },
  {
    question: "How do you handle payments to government offices?",
    answer: "We advance all government fees on your behalf and include them in our invoice. This way, you receive a single consolidated bill with no hidden charges."
  },
  {
    question: "Can you help with document attestation?",
    answer: "Yes, we handle all types of document attestation including Ministry of Foreign Affairs, embassies, chamber of commerce, and notarization services for local and international use."
  }
];

const relatedServices = [
  {
    icon: Building2,
    title: "Company Formation",
    description: "Start a new business in Bahrain with 100% foreign ownership",
    href: "/services/company-formation",
    price: "BHD 750"
  },
  {
    icon: RefreshCw,
    title: "CR Renewal",
    description: "Annual commercial registration renewal services",
    href: "/services/cr-renewal",
    price: "BHD 150"
  },
  {
    icon: Plane,
    title: "Visa & Immigration",
    description: "Work visas, family visas, and Golden Visa services",
    href: "/services/visa-immigration",
    price: "BHD 250"
  },
  {
    icon: Calculator,
    title: "Accounting & Tax",
    description: "Bookkeeping, VAT registration, and audit support",
    href: "/services/accounting",
    price: "BHD 200/mo"
  }
];

export default function PROServices() {
  useEffect(() => {
    document.title = "PRO Services Bahrain - Government Liaison | Document Processing";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional PRO services in Bahrain. Government liaison, document processing, and attestation. Expert support from BHD 50/service. All ministries covered.");
    }

    const existingSchema = document.querySelector('script[data-schema="pro-services"]');
    if (!existingSchema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "pro-services");
      script.textContent = JSON.stringify(proServicesSchema);
      document.head.appendChild(script);
    }

    return () => {
      const schemaScript = document.querySelector('script[data-schema="pro-services"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, []);

  return (
    <>
      <Layout>
        <ServiceHero
          badge="PRO Services"
          title="PRO Services"
          highlight="in Bahrain"
          subtitle="Government Liaison. Document Processing. Save Time on Government Paperwork."
          features={heroFeatures}
          primaryCTA={{ text: "Get PRO Support", href: "/contact" }}
          secondaryCTA={{ text: "View Services", href: "#services" }}
          priceFrom="BHD 50"
          priceLabel="Services from"
        />
        
        <ServiceTrustBar stats={trustBarStats} />
        
        <PROServicesList />
        
        <ServiceBenefits
          badge="Why PRO Services"
          title="Let Us Handle the Paperwork"
          subtitle="Focus on your business while we navigate government processes"
          benefits={benefits}
        />
        
        <ServicePricing
          badge="Flexible Pricing"
          title="PRO Service Packages"
          subtitle="Choose pay-per-service or save with a retainer"
          tiers={pricingTiers}
        />
        
        <MinistriesCovered />
        
        <ServiceWhyChoose
          badge="Why Keylink"
          title="Bahrain's Most Trusted PRO Team"
          subtitle="10,000+ documents processed across all government ministries"
          differentiators={whyChooseDifferentiators}
          floatingStatValue="10,000+"
          floatingStatLabel="Documents Processed"
        />
        
        <ServiceFAQ
          badge="FAQ"
          title="PRO Services Questions"
          subtitle="Common questions about our government liaison services"
          faqs={faqs}
        />
        
        <RelatedServicesGrid
          badge="Related Services"
          title="Complete Business Support"
          subtitle="Explore our other business services"
          services={relatedServices}
          currentService="/services/pro-services"
        />
        
        <ServiceCTA
          badge="Skip the Queues"
          title="Let Us Handle Your Government Paperwork"
          subtitle="Professional PRO services that save you time and hassle"
          primaryCTA={{ text: "Request Service", href: "/contact" }}
          secondaryCTA={{ text: "Call Us", href: "tel:+97317000000" }}
          features={["All Ministries", "Same-Day Service", "Fixed Pricing"]}
        />
      </Layout>
      
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
