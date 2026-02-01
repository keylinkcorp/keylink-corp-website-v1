import { useEffect } from "react";
import { 
  Rocket, 
  Target, 
  Users, 
  Globe,
  Building2,
  Handshake,
  CheckCircle2,
  TrendingUp
} from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/services/shared/ServiceHero";
import { ServiceTrustBar } from "@/components/services/shared/ServiceTrustBar";
import { ServiceWhyChoose } from "@/components/services/shared/ServiceWhyChoose";
import { ServicePricing } from "@/components/services/shared/ServicePricing";
import { ServiceFAQ } from "@/components/services/shared/ServiceFAQ";
import { ServiceCTA } from "@/components/services/shared/ServiceCTA";

import {
  IncubatorProblemAgitation,
  IncubatorLandscape,
  ProgramComparisonTable,
  IncubatorJourneyTimeline,
  IncubatorAudienceSegments,
  EligibilityChecker
} from "@/components/services/incubator";

import { businessIncubatorsSchema } from "@/lib/schema/businessIncubatorsSchema";
import incubatorTeamImage from "@/assets/incubator-team-meeting.jpg";

// Hero features
const heroFeatures = [
  { icon: Rocket, text: "End-to-End Support" },
  { icon: Target, text: "85%+ Acceptance Rate" },
  { icon: Users, text: "3 Partner Programs" },
  { icon: Globe, text: "Foreign Founder Friendly" }
];

// Trust bar stats
const trustStats = [
  { icon: Rocket, value: 50, suffix: "+", label: "Startups Placed Into Partner Programs" },
  { icon: Target, value: 85, suffix: "%", label: "First Application Acceptance Rate" },
  { icon: Users, value: 3, suffix: "", label: "Active Program Partnerships" },
  { icon: Building2, value: 8, suffix: "+", label: "Years Experience in Bahrain" }
];

// Why Choose differentiators
const differentiators = [
  {
    icon: TrendingUp,
    title: "End-to-End Integration",
    description: "Most consultants help with applications. We handle company formation, licensing, AND incubator placement — so nothing falls through the cracks."
  },
  {
    icon: Handshake,
    title: "Direct Program Relationships",
    description: "We work directly with Tamkeen, FinTech Bay, and C5. Your application goes through established channels, not the public inbox."
  },
  {
    icon: CheckCircle2,
    title: "85% First-Submission Acceptance",
    description: "Our pre-application review catches issues before they become rejections. You apply once, correctly."
  },
  {
    icon: Globe,
    title: "Foreign Founder Specialists",
    description: "We've helped 50+ international entrepreneurs establish and get accepted into Bahrain programs — remotely."
  }
];

// Pricing tiers
const pricingTiers = [
  {
    name: "Application Review",
    price: "BHD 150",
    description: "For founders who already have a company registered",
    features: [
      "Program eligibility assessment",
      "Application documentation review",
      "One round of feedback",
      "Email support"
    ],
    ctaText: "Get Started",
    ctaHref: "/free-consultation"
  },
  {
    name: "Complete Package",
    price: "BHD 750",
    description: "Company formation through incubator acceptance",
    features: [
      "Company registration included",
      "Full application preparation",
      "Direct program submission",
      "Interview coaching",
      "Resubmission if needed",
      "3 months post-acceptance support"
    ],
    popular: true,
    ctaText: "Most Popular",
    ctaHref: "/free-consultation"
  },
  {
    name: "Multi-Program Strategy",
    price: "BHD 1,200",
    description: "Apply to 2-3 programs strategically",
    features: [
      "Everything in Complete Package",
      "Sequential program applications",
      "Investor pitch preparation",
      "6 months ongoing support",
      "Priority WhatsApp access"
    ],
    ctaText: "Go Premium",
    ctaHref: "/free-consultation"
  }
];

// FAQ items
const faqItems = [
  {
    question: "What is the difference between an incubator and an accelerator in Bahrain?",
    answer: "Incubators like Tamkeen provide longer-term support (6-12 months) with grants and resources for early-stage ideas. Accelerators like C5 and FinTech Bay run intensive 12-week programs focused on rapid growth and investor readiness. Most Bahrain programs offer a blend of both elements."
  },
  {
    question: "Can foreign entrepreneurs apply to Tamkeen programs?",
    answer: "Yes. Foreign entrepreneurs with a registered Bahrain company are eligible for most Tamkeen startup support programs. We specialize in structuring companies specifically for Tamkeen eligibility."
  },
  {
    question: "How long does the incubator application process take?",
    answer: "From company formation to acceptance, the typical timeline is 6-8 weeks with our support. Direct applications without prior company registration often take 3-4 months due to documentation requirements."
  },
  {
    question: "Do I need a physical office in Bahrain to apply?",
    answer: "No. Most programs accept virtual office addresses. We provide registered office services that meet all program requirements for founders operating remotely."
  },
  {
    question: "What funding is available through Bahrain incubator programs?",
    answer: "Tamkeen offers non-dilutive grants up to BHD 10,000. FinTech Bay provides access to investor networks and regulatory sandbox benefits. C5 focuses on investment-readiness preparation rather than direct funding."
  },
  {
    question: "Is FinTech Bay only for fintech startups?",
    answer: "Yes. FinTech Bay specifically supports financial technology, digital banking, and payment solutions startups. For non-fintech ventures, Tamkeen or C5 are better fits."
  },
  {
    question: "What happens if my application is rejected?",
    answer: "With our Complete Package, we refine and resubmit your application at no additional cost. We also identify alternative programs you may qualify for."
  },
  {
    question: "Do incubator programs in Bahrain require equity?",
    answer: "Tamkeen programs are non-dilutive (no equity). FinTech Bay and C5 arrangements vary by cohort and individual negotiation. We help you understand terms before committing."
  },
  {
    question: "Can I apply to multiple programs at once?",
    answer: "Yes, with strategic timing. Our Multi-Program Strategy package helps you sequence applications to maximize acceptance chances without conflicting commitments."
  },
  {
    question: "What documents do I need for an incubator application?",
    answer: "Typical requirements include Commercial Registration, business plan or pitch deck, financial projections, and founder identification. Specific requirements vary by program — we provide a complete checklist during consultation."
  },
  {
    question: "How do I get a visa to live in Bahrain as a startup founder?",
    answer: "Once your company is registered, you can sponsor your own work visa. For larger investments, the Golden Visa program offers 10-year residency. We assist with both pathways."
  },
  {
    question: "What support do I get after being accepted into a program?",
    answer: "Our Complete Package includes 3 months of post-acceptance support to help you navigate program requirements, access resources, and prepare for any follow-on applications."
  }
];

export default function BusinessIncubators() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

      <Header />

      <main>
        {/* Hero Section */}
        <ServiceHero
          badge="Startup Growth Partner"
          title="Launch Your Startup in Bahrain's Thriving"
          highlight="Incubator Ecosystem"
          subtitle="From business registration to program acceptance. We guide foreign entrepreneurs and first-time founders through Tamkeen, FinTech Bay, and C5 Accelerate — so you can focus on building, not paperwork."
          features={heroFeatures}
          primaryCTA={{ text: "Start Free Consultation", href: "/free-consultation" }}
          secondaryCTA={{ text: "Call Us Now", href: "tel:+97317000000" }}
          priceFrom="BHD 150"
          priceLabel="Starting from"
        />

        {/* Trust Bar */}
        <ServiceTrustBar stats={trustStats} />

        {/* Problem Agitation */}
        <IncubatorProblemAgitation />

        {/* Ecosystem Overview */}
        <IncubatorLandscape />

        {/* Comparison Table */}
        <ProgramComparisonTable />

        {/* Journey Timeline */}
        <IncubatorJourneyTimeline />

        {/* Audience Segments */}
        <IncubatorAudienceSegments />

        {/* Why Choose Keylink */}
        <ServiceWhyChoose
          badge="Why Keylink"
          title="The Only Partner That Starts Where Others Skip"
          subtitle="Most consultants help with applications. We handle company formation, licensing, AND incubator placement — so nothing falls through the cracks."
          differentiators={differentiators}
          imageSrc={incubatorTeamImage}
          imageAlt="Diverse entrepreneurs collaborating in modern Bahrain co-working space"
          floatingStatValue="50+"
          floatingStatLabel="Startups Placed"
        />

        {/* Eligibility Checker */}
        <EligibilityChecker />

        {/* Pricing */}
        <ServicePricing
          badge="Transparent Pricing"
          title="Investment That Pays Back Through Acceptance"
          subtitle="Choose the package that matches your current stage and goals."
          tiers={pricingTiers}
        />

        {/* FAQ */}
        <ServiceFAQ
          badge="Common Questions"
          title="Everything You Need to Know About Bahrain Incubators"
          subtitle="Answers to the questions founders ask most."
          faqs={faqItems}
        />

        {/* Final CTA */}
        <ServiceCTA
          badge="Ready to Launch?"
          title="Your Startup Journey Starts with a Single Conversation"
          subtitle="Book a free 15-minute WhatsApp consultation. We'll assess your eligibility, recommend the right program, and outline your fastest path to acceptance."
          primaryCTA={{ text: "Start WhatsApp Consultation", href: "https://wa.me/97317000000" }}
          secondaryCTA={{ text: "Call +973 1700 0000", href: "tel:+97317000000" }}
          features={[
            "Free eligibility assessment",
            "No commitment required",
            "Response within 2 hours"
          ]}
        />
      </main>

      <Footer />
    </>
  );
}
