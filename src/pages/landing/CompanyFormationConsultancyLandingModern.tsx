import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import {
  Check,
  Clock,
  ClipboardList,
  FileText,
  Layers,
  Mail,
  MessageSquareText,
  Phone,
  Route,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  type LucideIcon,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import { CalendlyBooking } from "@/components/consultation/CalendlyBooking";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { MobileStickyConsultationBar } from "@/components/landing/MobileStickyConsultationBar";
import { ConsultancyCostCalculator } from "@/components/landing/consultancy/ConsultancyCostCalculator";
import { CompanyLogosTicker } from "@/components/landing/CompanyLogosTicker";
import { SectionBackgroundOverlay } from "@/components/shared/SectionBackgroundOverlay";
import { SplitSection } from "@/components/shared/SplitSection";
import { EditorialImage } from "@/components/shared/EditorialImage";

import { CompanyFormationHeroMontage } from "@/pages/landing/company-formation/CompanyFormationHeroMontage";

import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

import howItWorksImage from "@/assets/company-formation/lp/how-it-works-portrait.jpg";
import bookingImage from "@/assets/company-formation/lp/booking-portrait.jpg";
import testimonialsImage from "@/assets/company-formation/lp/testimonials-portrait.jpg";

import aboutConsultancyImage from "@/assets/company-formation/consultancy/about-consultancy.jpg";
import costCalculatorPortraitImage from "@/assets/company-formation/consultancy/cost-calculator-portrait.jpg";

import consultancyHeroImage from "@/assets/formation-hero-consultation-16x9.jpg";

const CALENDLY_BASE_URL =
  "https://calendly.com/keylinkcorp/free-consultation-google-meet?hide_gdpr_banner=1";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function mergeQueryParams(baseUrl: string, search: string) {
  try {
    const url = new URL(baseUrl);
    const incoming = new URLSearchParams(search);
    incoming.forEach((value, key) => {
      if (!url.searchParams.has(key)) url.searchParams.set(key, value);
    });
    return url.toString();
  } catch {
    return baseUrl;
  }
}

type FaqItem = { question: string; answer: string };

const FAQS: FaqItem[] = [
  {
    question: "How long does company formation in Bahrain typically take?",
    answer:
      "Timelines depend on your activity, shareholder profile, and any required approvals. In the consultation we map a realistic sequence and share a checklist so you know what to prepare and when.",
  },
  {
    question: "Can foreigners own 100% of a Bahrain company?",
    answer:
      "Many activities can support full overseas ownership, but eligibility depends on the exact activity and structure. We’ll clarify what’s typically workable for your case and what approvals may be needed.",
  },
  {
    question: "Do you issue the Commercial Registration (CR)?",
    answer:
      "No. We are an independent business consultancy. The Commercial Registration (CR) is issued only by the Bahrain government authorities.",
  },
  {
    question: "What documents do I need to start?",
    answer:
      "It varies based on shareholders, activity, and the chosen structure. After the call, we share a tailored checklist so you can prepare documents in the right order.",
  },
  {
    question: "Are government fees included in your advisory fee?",
    answer:
      "Government fees are paid directly to the relevant authorities. Our pricing covers consultancy/advisory work such as planning, checklists, guidance, and coordination.",
  },
  {
    question: "Can you help with licensing and regulatory steps?",
    answer:
      "We provide guidance on licensing pathways, common approval steps, and documentation readiness. Where specialist support is needed, we can help coordinate the right service providers.",
  },
  {
    question: "Is the consultation really free?",
    answer:
      "Yes—30 minutes, no obligation. You’ll leave with clarity on structure options, cost drivers, a realistic timeline, and next steps.",
  },
  {
    question: "What happens after I book?",
    answer:
      "We review your activity and shareholders, outline a recommended approach, and share a practical checklist. If you want ongoing support, we’ll suggest the best advisory package for your timeline.",
  },
];

type IconCardItem = {
  title: string;
  Icon: LucideIcon;
};

const COMMON_BLOCKERS: IconCardItem[] = [
  { title: "Unclear activity approvals and licensing steps", Icon: FileText },
  { title: "Confusing documentation requirements", Icon: ClipboardList },
  { title: "Uncertain timelines and sequencing", Icon: Clock },
  { title: "Inconsistent information across sources", Icon: Layers },
  { title: "Office/address decisions affecting costs", Icon: Route },
  { title: "Visa planning and compliance considerations", Icon: Shield },
];

export default function CompanyFormationConsultancyLandingModern() {
  const navigate = useNavigate();

  const calendlyUrl = useMemo(() => {
    if (typeof window === "undefined") return CALENDLY_BASE_URL;
    return mergeQueryParams(CALENDLY_BASE_URL, window.location.search);
  }, []);

  const faqJsonLd = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((i) => ({
        "@type": "Question",
        name: i.question,
        acceptedAnswer: { "@type": "Answer", text: i.answer },
      })),
    };
  }, []);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Company Formation Consultancy Bahrain | Free Call";

    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") ?? null;
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Start with a simple cost calculator, then book a free 30-minute consultation for Bahrain company formation guidance."
      );
    }

    // NOTE: Unique identifiers so we don't collide with other LP routes.
    let robots = document.querySelector(
      'meta[name="robots"][data-lp="company-formation-consultancy-modern"]'
    ) as HTMLMetaElement | null;
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      robots.setAttribute("data-lp", "company-formation-consultancy-modern");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, follow");

    let canonical = document.querySelector(
      'link[rel="canonical"][data-lp="company-formation-consultancy-modern"]'
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("data-lp", "company-formation-consultancy-modern");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/lp/company-formation-consultancy-modern");

    // Add FAQ JSON-LD (unique marker to avoid collisions)
    let ld = document.querySelector(
      'script[type="application/ld+json"][data-lp="cfc-modern-faq"]'
    ) as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.setAttribute("data-lp", "cfc-modern-faq");
      document.head.appendChild(ld);
    }
    ld.text = JSON.stringify(faqJsonLd);

    return () => {
      document.title = previousTitle;
      if (metaDescription && previousDescription !== null) metaDescription.setAttribute("content", previousDescription);
      robots?.remove();
      canonical?.remove();
      ld?.remove();
    };
  }, [faqJsonLd]);

  return (
    <div className="min-h-screen bg-muted/20 cfc-typography">
      {/* Full-width sticky header with full-width bottom border */}
      <LandingHeader layout="framed" onLogoClick={() => scrollToId("top")} />
      <main id="top" className="flex-1">
        {/* Full-width hero (no side frame borders) */}
        <CompanyFormationHeroMontage
          variant="centered"
          imageSrc={consultancyHeroImage}
          onBookClick={() => scrollToId("book")}
          badgeText="Free consultation • Independent business consultancy"
          title="Company Formation Consultancy in Bahrain"
          titleSuffix=""
          lead="Independent guidance for your Bahrain business setup—get a clear checklist, realistic timeline, and cost drivers before you commit time or fees."
          bullets={[
            { icon: Check, text: "Consultation-first: clarity before you spend" },
            { icon: Shield, text: "Guidance on typical approvals and compliance steps" },
            { icon: FileText, text: "Tailored checklist + next-step plan" },
          ]}
          primaryCtaLabel="Get Free Consultation"
          phoneCta={{ href: "tel:+97317008888", label: "Call +97317008888" }}
          showWhatsApp
          socialProofLine="4.9/5 reviews • 500+ clients supported • Response within 1 business day"
        />

        {/* Logos ticker: full-width borders, framed logos */}
        <CompanyLogosTicker />

        {/* Framed content starts AFTER the ticker */}
        <div className="mx-auto min-h-screen max-w-[1120px] bg-background md:border-x md:border-border/60">
          {/* COST CALCULATOR */}
          <section aria-label="Cost calculator" className="section-spacing-sm relative overflow-hidden bg-secondary/30">
            <SectionBackgroundOverlay variant="grid-lines" opacity={0.5} masked />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-5">
                  <div className="lp-card p-3 sm:p-4">
                    <EditorialImage
                      src={costCalculatorPortraitImage}
                      alt="Business consultant reviewing costs and paperwork"
                      ratio={3 / 4}
                      loading="eager"
                      overlayStrength={0.55}
                      imgClassName="object-[center_40%]"
                    />
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <span className="section-badge">Cost calculator</span>
                  <h2 className="lp-h2">Start here: get an estimate</h2>
                  <p className="lp-section-subtitle max-w-2xl">
                    Answer a few questions to see a simple cost breakdown, then continue to your free consultation.
                  </p>

                  <div className="mt-8">
                    <ConsultancyCostCalculator onContinue={() => navigate("/free-consultation")} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PROBLEM */}
          <SplitSection
            badge="Common blockers"
            title="Starting a Business in Bahrain? Here’s What Usually Slows People Down"
            subtitle="We help you turn uncertainty into a clear sequence: what to prepare, what to decide, and what to expect—before you spend time or fees."
            useLpHeadings
            align="center"
            headerPlacement="top"
            imageSrc={howItWorksImage}
            imageAlt="Consultant explaining options and requirements"
            imagePosition="right"
            mobileOrder="image-first"
            imageSticky
            variant="subtle"
            backgroundVariant="ibelick-soft"
            overlayOpacity={0.9}
            overlayMasked
            imageRatio={16 / 10}
            imageOverlayStrength={0.55}
            imageImgClassName="object-[center_35%]"
          >
            <div className="rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm">
              <ul className="divide-y divide-border/40">
                {COMMON_BLOCKERS.map(({ title, Icon }) => (
                  <li key={title} className="flex gap-3 px-5 py-4 sm:px-6 sm:py-5">
                    <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/30 bg-muted/20 shrink-0">
                      <Icon className="h-[22px] w-[22px] text-muted-foreground" />
                    </span>
                    <p className="text-base font-medium leading-relaxed text-foreground/90">{title}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 lp-card-flat bg-muted/20 p-6 md:p-7">
              <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                <div>
                  <p className="text-base font-semibold text-foreground">Get clarity in one free consultation.</p>
                  <p className="mt-1 text-base text-muted-foreground">
                    Clear checklist • Realistic timeline • Plain‑English next steps
                  </p>
                </div>
                <Button onClick={() => scrollToId("book")}>Get Free Consultation</Button>
              </div>
            </div>
          </SplitSection>

          {/* SOLUTION (5-step process) */}
          <SplitSection
            badge="Our approach"
            title="A 5‑Step Consultancy Process (Consultation → Checklist → Guidance)"
            subtitle="We provide independent advisory and guidance; authorities issue the CR. We keep everything structured, clear, and focused on decision-making."
            useLpHeadings
            align="center"
            headerPlacement="top"
            imageSrc={bookingImage}
            imageAlt="Consultation booking and checklist preview"
            imagePosition="left"
            mobileOrder="follow-imagePosition"
            imageSticky
            variant="default"
            backgroundVariant="ibelick-lines"
            overlayOpacity={0.8}
            overlayMasked
            imageRatio={16 / 10}
            imageOverlayStrength={0.55}
            imageImgClassName="object-[center_45%]"
          >
            <div className="grid gap-4">
              {[
                {
                  icon: Check,
                  title: "1) Free consultation",
                  desc: "We understand your activity, shareholders, and timeline—and clarify what decisions matter first.",
                },
                {
                  icon: FileText,
                  title: "2) Checklist + structure",
                  desc: "You receive a tailored document checklist and a recommended setup path based on your goals.",
                },
                {
                  icon: Shield,
                  title: "3) Compliance guidance",
                  desc: "We explain typical approvals and common requirements so you can avoid avoidable delays.",
                },
                {
                  icon: Clock,
                  title: "4) Timeline planning",
                  desc: "We sequence the steps and set realistic expectations around timing and dependencies.",
                },
                {
                  icon: Sparkles,
                  title: "5) Coordination",
                  desc: "When needed, we coordinate support services (e.g., documentation prep, address options) so the plan stays on track.",
                },
              ].map((s, idx) => (
                <div key={s.title} className="lp-card p-5 sm:p-6 md:p-7">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/20 bg-muted/10">
                        <s.icon className="h-[22px] w-[22px] text-accent" />
                      </span>
                      <div>
                        <p className="text-sm text-muted-foreground">Step {idx + 1}</p>
                        <p className="mt-1 text-sm font-semibold text-foreground">{s.title}</p>
                        <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                      </div>
                    </div>
                    <div className="hidden sm:flex step-number">{idx + 1}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button onClick={() => scrollToId("book")}>Get Free Consultation</Button>
              <Button variant="outline" asChild>
                <a href="tel:+97317008888">
                  <Phone className="mr-2 h-[22px] w-[22px]" />
                  Call for consultation
                </a>
              </Button>
            </div>
          </SplitSection>

          {/* SERVICES */}
          <SplitSection
            badge="Services"
            title="Business Setup Advisory Services in Bahrain"
            subtitle="Choose the support you need—then we turn it into a clear plan, checklist, and next steps."
            useLpHeadings
            imageSrc={testimonialsImage}
            imageAlt="Professional advisory meeting"
            imagePosition="right"
            mobileOrder="image-first"
            imageSticky
            variant="subtle"
            backgroundVariant="ibelick-soft"
            overlayOpacity={0.9}
            overlayMasked
            imageRatio={16 / 10}
            imageOverlayStrength={0.55}
            imageImgClassName="object-[center_40%]"
          >
            <div className="lp-card p-3 md:p-4">
              <Accordion type="single" collapsible>
                {[
                  {
                    k: "a",
                    title: "Company Formation Advisory",
                    bullets: [
                      "Structure and ownership discussion aligned to your activity",
                      "Activity and approval pathway overview (what typically applies)",
                      "Cost drivers and trade-offs (address, staffing, timing)",
                    ],
                    Icon: Target,
                  },
                  {
                    k: "b",
                    title: "Document Checklist & Readiness Review",
                    bullets: [
                      "Tailored checklist for shareholders and structure",
                      "Document readiness review to reduce back-and-forth",
                      "Clear sequencing: what to prepare first vs later",
                    ],
                    Icon: ClipboardList,
                  },
                  {
                    k: "c",
                    title: "Licensing & Regulatory Advisory",
                    bullets: [
                      "Guidance on common approvals for your activity",
                      "Requirements overview for regulated activities (where relevant)",
                      "Compliance checkpoints to keep the process predictable",
                    ],
                    Icon: ShieldCheck,
                  },
                  {
                    k: "d",
                    title: "Corporate Structuring Consultation",
                    bullets: [
                      "Guidance on common structures (e.g., SPC, WLL, branch)",
                      "Shareholder and governance considerations",
                    ],
                    Icon: Layers,
                  },
                  {
                    k: "e",
                    title: "Support Services Coordination",
                    bullets: [
                      "Coordination with support providers when needed",
                      "Accounting and bookkeeping options overview",
                      "Banking preparation guidance (what to expect and prepare)",
                    ],
                    Icon: MessageSquareText,
                  },
                ].map((s) => (
                  <AccordionItem key={s.k} value={s.k}>
                    <AccordionTrigger className="text-left">
                      <span className="inline-flex items-center gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/20 bg-muted/10">
                          <s.Icon className="h-[22px] w-[22px] text-accent" />
                        </span>
                        <span>{s.title}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="mt-3 space-y-2">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <Check className="mt-0.5 h-[22px] w-[22px] text-accent" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </SplitSection>

          {/* TESTIMONIALS */}
          <section aria-label="Testimonials" className="section-spacing-sm">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl">
                <span className="section-badge">Reviews</span>
                <h2 className="lp-h2">Clarity-first guidance (what clients say)</h2>
                <p className="lp-section-subtitle">Independent advisory, structured checklists, and realistic expectations.</p>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-2">
                {[testimonial1, testimonial2].map((img, idx) => (
                  <div key={img} className="lp-card p-6 md:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="h-[22px] w-[22px] text-accent" />
                          ))}
                        </div>
                        <p className="mt-4 text-sm text-muted-foreground">
                          {idx === 0
                            ? "The checklist and sequencing made everything much clearer. We knew what to prepare first and avoided delays."
                            : "Practical and direct. Clear next steps, realistic timeline, and helpful coordination when we needed it."}
                        </p>
                        <p className="mt-4 text-sm font-semibold text-foreground">Client review</p>
                      </div>
                      <img
                        src={img}
                        alt="Client testimonial portrait"
                        className="h-20 w-20 rounded-2xl object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section className="section-spacing-sm">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div className="order-2 lg:order-1">
                  <span className="section-badge">About</span>
                  <h2 className="lp-h2">About Our Business Setup Consultancy</h2>

                  <div className="mt-6 lp-card p-6 sm:p-7 md:p-8">
                    <p className="text-sm text-muted-foreground">
                      We’re an independent business consultancy focused on helping founders make confident setup decisions.
                      Our work is checklist-driven: you get clarity on options, cost drivers, timelines, and what to prepare
                      next.
                    </p>
                    <p className="mt-4 text-sm text-muted-foreground">
                      We are not affiliated with any government authority and we do not issue Commercial Registration (CR).
                    </p>
                  </div>
                </div>

                <div className="order-1 lg:order-2 lp-card p-3 sm:p-4 md:p-5">
                  <EditorialImage
                    src={aboutConsultancyImage}
                    alt="Business setup consultancy meeting with checklist review"
                    ratio={4 / 3}
                    overlayStrength={0.35}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* BOOKING / CONTACT */}
          <div id="book" />
          <section aria-label="Request a free consultation" className="section-spacing-sm">
            <div className="container mx-auto px-4 md:px-6">
              <span className="section-badge">Get started</span>
              <h2 className="lp-h2">Request your free consultation</h2>
              <p className="mt-4 lp-section-subtitle">
                Share a few details first so we can prepare the right checklist—then you can book immediately if you’d
                like.
              </p>
            </div>

            <div className="container mx-auto px-4 md:px-6">
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                {[
                  { icon: Phone, label: "Phone", value: "+973 1700 8888", href: "tel:+97317008888" },
                  { icon: Mail, label: "Email", value: "info@keylinkcorp.com", href: "mailto:info@keylinkcorp.com" },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="lp-card p-5 sm:p-6 md:p-7 flex items-start gap-3 hover:shadow-[0_8px_32px_hsl(var(--navy)/0.10)] transition-shadow"
                  >
                    <c.icon className="h-[22px] w-[22px] text-accent mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground">{c.label}</p>
                      <p className="text-sm font-semibold text-foreground">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Secondary: Calendly */}
            <div id="book-calendly" className="mt-10">
              <div className="container mx-auto px-4 md:px-6">
                <span className="section-badge">Booking</span>
                <h3 className="lp-h2">Prefer to book immediately?</h3>
                <p className="mt-4 lp-section-subtitle">Choose a time for your free consultation—30 minutes, no obligation.</p>
              </div>

              <CalendlyBooking
                variant="plain"
                calendlyUrl={calendlyUrl}
                sectionId="book-calendly"
                imageAlt="Business consultation call preview"
              />
            </div>
          </section>

          {/* FAQs */}
          <section aria-label="FAQs" className="section-spacing-sm bg-muted/10">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl">
                <span className="section-badge">FAQs</span>
                <h2 className="lp-h2">Common questions</h2>
                <p className="lp-section-subtitle">Short, direct answers—then we personalize it on the call.</p>
              </div>

              <div className="mt-8 lp-card p-2 md:p-3">
                <Accordion type="single" collapsible>
                  {FAQS.map((f, idx) => (
                    <AccordionItem key={f.question} value={`faq-${idx}`}>
                      <AccordionTrigger className="px-4 md:px-5">{f.question}</AccordionTrigger>
                      <AccordionContent className="px-4 md:px-5 text-sm text-muted-foreground">
                        {f.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="section-spacing-sm relative overflow-hidden">
            <SectionBackgroundOverlay variant="ibelick-soft" opacity={0.85} masked />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="relative overflow-hidden lp-card p-7 sm:p-8 md:p-10">
                <div aria-hidden className="absolute inset-0 overlay-gold-radial-center opacity-35" />
                <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  <div>
                    <h2 className="lp-h2 text-foreground">Ready to Start Your Business in Bahrain?</h2>
                    <p className="mt-3 lp-section-subtitle">
                      What happens next: we review your details, share a tailored checklist, and confirm the most practical
                      next steps for your timeline.
                    </p>
                    <ul className="mt-6 space-y-2 list-disc pl-5 text-base text-foreground/90">
                      {["Free consultation (30 min)", "Tailored checklist", "Clear timeline + cost drivers"].map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                    <Button size="lg" className="w-full sm:w-auto" onClick={() => scrollToId("book")}>
                      Get Free Consultation
                    </Button>
                    <Button variant="outline" size="default" className="w-full sm:w-auto" asChild>
                      <a href="tel:+97317008888">
                        <Phone className="mr-2 h-[22px] w-[22px]" />
                        Call for consultation
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="mt-6 lp-card-flat bg-muted/20 p-5">
                  <p className="text-xs text-muted-foreground">
                    Want to move faster? Ask for the document checklist template during your consultation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER DISCLAIMER (page-specific) */}
          <section className="pb-10">
            <div className="container mx-auto px-4 md:px-6">
              <div className="lp-card-flat bg-muted/20 p-5">
                <p className="text-xs text-muted-foreground">
                  We are not a government website or authority. CR issued by Bahrain government only.
                </p>
              </div>
            </div>
          </section>

          <MobileStickyConsultationBar
            onConsultationClick={() => scrollToId("book")}
            phoneHref="tel:+97317008888"
            phoneLabel="Call for consultation"
          />

          <LandingFooter />
        </div>
      </main>
    </div>
  );
}
