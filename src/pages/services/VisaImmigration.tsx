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
import { VisaTypeComparison } from "@/components/services/visa/VisaTypeComparison";
import { VisaProcessSteps } from "@/components/services/visa/VisaProcessSteps";
import { GoldenVisaSection } from "@/components/services/visa/GoldenVisaSection";
import { VisaRequirements } from "@/components/services/visa/VisaRequirements";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { visaImmigrationSchema } from "@/lib/schema/visaImmigrationSchema";
import {
  Plane,
  Clock,
  CheckCircle2,
  Users,
  Globe,
  Award,
  Shield,
  Zap,
  Headphones,
  Calendar,
  FileCheck,
  Building2,
  RefreshCw,
  UserCheck,
  Calculator
} from "lucide-react";

const heroFeatures = [
  { icon: Clock, text: "5-Day Processing" },
  { icon: Award, text: "Golden Visa Eligible" },
  { icon: Users, text: "Family Sponsorship" }
];

const trustBarStats = [
  { icon: Plane, value: 5000, suffix: "+", label: "Visas Processed" },
  { icon: CheckCircle2, value: 100, suffix: "%", label: "Approval Rate" },
  { icon: Clock, value: 5, suffix: "days", label: "Average Processing" },
  { icon: Globe, value: 40, suffix: "+", label: "Nationalities Served" }
];

const benefits = [
  {
    icon: Zap,
    title: "Fast Processing",
    description: "Work visas processed in as little as 5 business days"
  },
  {
    icon: Users,
    title: "Family Sponsorship",
    description: "Bring your family with dependent visa sponsorship"
  },
  {
    icon: Award,
    title: "Golden Visa Support",
    description: "10-year residency for investors and professionals"
  },
  {
    icon: Calendar,
    title: "Renewal Reminders",
    description: "Never miss a visa renewal with our reminder service"
  },
  {
    icon: Shield,
    title: "LMRA Compliance",
    description: "Full compliance with labor market regulations"
  }
];

const pricingTiers = [
  {
    name: "Work Visa",
    price: "BHD 250",
    description: "Employment visa for company employees",
    features: [
      "Work permit application",
      "LMRA registration",
      "Medical coordination",
      "CPR card processing",
      "Visa stamping assistance"
    ],
    ctaText: "Apply Now",
    ctaHref: "/contact"
  },
  {
    name: "Family Visa",
    price: "BHD 350",
    description: "Dependent visas for spouse and children",
    popular: true,
    features: [
      "Spouse visa processing",
      "Children visa applications",
      "Family CPR cards",
      "School enrollment support",
      "Medical exam coordination",
      "Renewal management"
    ],
    ctaText: "Get Started",
    ctaHref: "/contact"
  },
  {
    name: "Golden Visa",
    price: "BHD 1,500",
    description: "10-year residency for investors",
    features: [
      "Eligibility assessment",
      "Application preparation",
      "Investment documentation",
      "Family inclusion",
      "Premium processing",
      "Dedicated case manager"
    ],
    ctaText: "Learn More",
    ctaHref: "/contact"
  }
];

const whyChooseDifferentiators = [
  {
    icon: CheckCircle2,
    title: "100% Approval Rate",
    description: "We've never had a visa application rejected"
  },
  {
    icon: Clock,
    title: "Fastest Processing",
    description: "Industry-leading turnaround times"
  },
  {
    icon: Globe,
    title: "All Nationalities",
    description: "Experience with 40+ nationalities"
  },
  {
    icon: Users,
    title: "Family Specialists",
    description: "Expert in dependent and family visas"
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal case manager throughout"
  },
  {
    icon: Shield,
    title: "Full Compliance",
    description: "100% LMRA and immigration compliant"
  }
];

const faqs = [
  {
    question: "How long does it take to get a work visa in Bahrain?",
    answer: "A standard work visa takes 5-10 business days once all documents are submitted. This includes LMRA approval, visa issuance, and CPR card processing. Express processing options are available for urgent cases."
  },
  {
    question: "Can I sponsor my family on a work visa?",
    answer: "Yes, employees earning above BHD 400/month can sponsor their spouse and unmarried children under 25. Family visa processing takes an additional 5-7 days after the primary visa is issued."
  },
  {
    question: "What is the Bahrain Golden Visa?",
    answer: "The Golden Visa is a 10-year renewable residency permit for investors, entrepreneurs, talented professionals, and retirees. It offers greater flexibility than standard visas and doesn't require a sponsor."
  },
  {
    question: "Who is eligible for the Golden Visa?",
    answer: "Eligibility includes: investors with BHD 100,000+ in Bahrain assets, company owners employing 10+ Bahrainis, executives earning BHD 2,000+/month, professionals with exceptional skills, and retirees with sufficient pension income."
  },
  {
    question: "What documents are required for a work visa?",
    answer: "Required documents include: passport copy (6+ months validity), passport-size photos, educational certificates (attested), employment contract, company CR and license copies, and medical fitness certificate."
  },
  {
    question: "Can I change employers while on a work visa?",
    answer: "Yes, visa transfer between employers is possible after completing 1 year with the current employer, or immediately with a No Objection Certificate (NOC) from your current employer."
  },
  {
    question: "What is the Flexi Permit and how does it work?",
    answer: "The Flexi Permit allows individuals to work for multiple employers in Bahrain without a fixed sponsor. It's valid for 2 years and is ideal for freelancers or those between jobs. Cost is approximately BHD 500/year."
  },
  {
    question: "How long can I stay in Bahrain on a visit visa?",
    answer: "Visit visas are typically valid for 14 days, extendable to 30 days. Multiple-entry visas are available for 3 months or 1 year. GCC residents can enter on e-visa for 2 weeks."
  },
  {
    question: "What medical tests are required for visa?",
    answer: "All work visa applicants must complete a medical exam including blood tests (HIV, Hepatitis B/C), chest X-ray, and general physical examination at an approved health center."
  },
  {
    question: "Can I apply for permanent residency in Bahrain?",
    answer: "Permanent residency is available after 15 years of continuous legal residence, or through the Golden Visa program for qualified investors and professionals. Our team can advise on the best pathway."
  },
  {
    question: "What happens if my visa expires?",
    answer: "Overstaying results in fines of BHD 10/day and potential deportation. You may also face entry bans. Contact us immediately if your visa is about to expire – we offer emergency renewal services."
  },
  {
    question: "Do you handle visa renewals?",
    answer: "Yes, we provide full visa renewal services including medical re-examination, LMRA renewal, and CPR card updates. We recommend starting the renewal process 30 days before expiry."
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
    icon: UserCheck,
    title: "PRO Services",
    description: "Government liaison and document processing",
    href: "/services/pro-services",
    price: "BHD 50"
  },
  {
    icon: Calculator,
    title: "Accounting & Tax",
    description: "Bookkeeping, VAT registration, and audit support",
    href: "/services/accounting",
    price: "BHD 200/mo"
  }
];

export default function VisaImmigration() {
  useEffect(() => {
    document.title = "Visa & Immigration Services Bahrain - Work Visa | Golden Visa";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Work visas, family visas, and Golden Visa in Bahrain. Fast processing from 5 days. Expert visa services for businesses and investors. 100% approval rate.");
    }

    const existingSchema = document.querySelector('script[data-schema="visa-immigration"]');
    if (!existingSchema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "visa-immigration");
      script.textContent = JSON.stringify(visaImmigrationSchema);
      document.head.appendChild(script);
    }

    return () => {
      const schemaScript = document.querySelector('script[data-schema="visa-immigration"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, []);

  return (
    <>
      <Layout>
        <ServiceHero
          badge="Visa & Immigration"
          title="Visa & Immigration"
          highlight="Services"
          titleEnd="in Bahrain"
          subtitle="Work Visas. Family Visas. Golden Visa. Expert Support for Living and Working in Bahrain."
          features={heroFeatures}
          primaryCTA={{ text: "Apply for Visa", href: "/contact" }}
          secondaryCTA={{ text: "Check Eligibility", href: "tel:+97317000000" }}
          priceFrom="BHD 250"
          priceLabel="Work visas from"
        />
        
        <ServiceTrustBar stats={trustBarStats} />
        
        <VisaTypeComparison />
        
        <ServiceBenefits
          badge="Why Choose Us"
          title="Expert Visa Services for Every Need"
          subtitle="From work permits to Golden Visa, we handle all your immigration needs"
          benefits={benefits}
        />
        
        <VisaProcessSteps />
        
        <GoldenVisaSection />
        
        <ServicePricing
          badge="Transparent Pricing"
          title="Visa Service Packages"
          subtitle="Clear pricing for all visa types – no hidden fees"
          tiers={pricingTiers}
        />
        
        <VisaRequirements />
        
        <ServiceWhyChoose
          badge="Why Keylink"
          title="Bahrain's Leading Visa Specialists"
          subtitle="5,000+ visas processed with 100% approval rate"
          differentiators={whyChooseDifferentiators}
          floatingStatValue="100%"
          floatingStatLabel="Approval Rate"
        />
        
        <ServiceFAQ
          badge="FAQ"
          title="Visa & Immigration Questions"
          subtitle="Everything you need to know about visas in Bahrain"
          faqs={faqs}
        />
        
        <RelatedServicesGrid
          badge="Related Services"
          title="Complete Your Business Journey"
          subtitle="Explore our other business services"
          services={relatedServices}
          currentService="/services/visa-immigration"
        />
        
        <ServiceCTA
          badge="Ready to Move to Bahrain?"
          title="Start Your Visa Application Today"
          subtitle="Expert support from application to approval. 100% success rate guaranteed."
          primaryCTA={{ text: "Apply Now", href: "/contact" }}
          secondaryCTA={{ text: "Call Us", href: "tel:+97317000000" }}
          features={["5-Day Processing", "100% Approval Rate", "Family Support"]}
        />
      </Layout>
      
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
