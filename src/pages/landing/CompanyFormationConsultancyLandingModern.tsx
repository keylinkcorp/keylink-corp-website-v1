import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import {
  Check,
  ClipboardList,
  Clock,
  FileText,
  Layers,
  Route,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import { CalendlyBooking } from "@/components/consultation/CalendlyBooking";
import { MobileStickyConsultationBar } from "@/components/landing/MobileStickyConsultationBar";
import { ConsultancyCostCalculator } from "@/components/landing/consultancy/ConsultancyCostCalculator";
import { CompanyLogosTicker } from "@/components/landing/CompanyLogosTicker";
import { SectionBackgroundOverlay } from "@/components/shared/SectionBackgroundOverlay";
import { SplitSection } from "@/components/shared/SplitSection";
import { EditorialImage } from "@/components/shared/EditorialImage";

import { CompanyFormationHeroMontage } from "@/pages/landing/company-formation/CompanyFormationHeroMontage";

import howItWorksImage from "@/assets/company-formation/lp/how-it-works-portrait.jpg";
import bookingImage from "@/assets/company-formation/lp/booking-portrait.jpg";
import testimonialsImage from "@/assets/company-formation/lp/testimonials-portrait.jpg";

import aboutConsultancyImage from "@/assets/company-formation/consultancy/about-consultancy.jpg";
import costCalculatorPortraitImage from "@/assets/company-formation/consultancy/cost-calculator-portrait.jpg";

import { ConsultancyModernHeader } from "@/components/landing/modern/ConsultancyModernHeader";
import { ConsultancyModernFooter } from "@/components/landing/modern/ConsultancyModernFooter";

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

// Keep V1 FAQ content (unchanged)
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
    answer: "No. We are an independent business consultancy. The Commercial Registration (CR) is issued only by the Bahrain government authorities.",
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
    document.title = "Company Formation Consultancy Bahrain | Modern Landing";

    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") ?? null;
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Company formation consultancy in Bahrain. Use the cost calculator and book a free consultation for checklist-driven guidance."
      );
    }

    let robots = document.querySelector('meta[name="robots"][data-lp="company-formation-consultancy-modern"]') as
      | HTMLMetaElement
      | null;
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      robots.setAttribute("data-lp", "company-formation-consultancy-modern");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, follow");

    let canonical = document.querySelector('link[rel="canonical"][data-lp="company-formation-consultancy-modern"]') as
      | HTMLLinkElement
      | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("data-lp", "company-formation-consultancy-modern");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/lp/company-formation-consultancy-modern");

    // Add FAQ JSON-LD (unique marker to avoid collisions)
    let ld = document.querySelector('script[type="application/ld+json"][data-lp="cfc-modern-faq"]') as
      | HTMLScriptElement
      | null;
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
    <div className="min-h-screen bg-muted/20">
      <div className="cfc-typography mx-auto min-h-screen max-w-[1120px] bg-background md:border-x md:border-border/60">
        <ConsultancyModernHeader onLogoClick={() => scrollToId("top")} onPrimaryClick={() => scrollToId("calculator")} />

        <main id="top" className="flex-1">
          {/* HERO (modern layout; same montage imagery + same copy) */}
          <section aria-label="Hero" className="relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 pt-10 md:pt-12 pb-8">
              <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/10 px-3 py-1 text-xs text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60" aria-hidden />
                    Free consultation • Independent business consultancy
                  </div>

                  <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                    Company Formation Consultancy in Bahrain
                  </h1>

                  <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                    Independent guidance for your Bahrain business setup—get a clear checklist, realistic timeline, and cost drivers before you commit time or fees.
                  </p>

                  <div className="mt-6 grid gap-3">
                    {[
                      { Icon: Check, text: "Consultation-first: clarity before you spend" },
                      { Icon: Shield, text: "Guidance on typical approvals and compliance steps" },
                      { Icon: FileText, text: "Tailored checklist + next-step plan" },
                    ].map((b) => (
                      <div key={b.text} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/20 bg-muted/10">
                          <b.Icon className="h-4 w-4 text-accent" />
                        </span>
                        <p className="text-sm leading-relaxed text-foreground/90 md:text-base">{b.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button size="lg" onClick={() => scrollToId("calculator")}>
                      Start cost calculator
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => scrollToId("book")}>Book free consultation</Button>
                  </div>

                  <p className="mt-5 text-sm text-muted-foreground">
                    4.9/5 reviews • 500+ clients supported • Response within 1 business day
                  </p>
                </div>

                <div className="lg:col-span-6">
                  <div className="lp-card p-3 sm:p-4 md:p-5">
                    <CompanyFormationHeroMontage
                      onBookClick={() => scrollToId("calculator")}
                      badgeText="Calculator-first • Free 30‑minute consultation"
                      title=""
                      titleSuffix=""
                      lead=""
                      bullets={[]}
                      primaryCtaLabel=""
                      phoneCta={{ href: "tel:+97317008888", label: "Call +97317008888" }}
                      showWhatsApp={false}
                      socialProofLine=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <CompanyLogosTicker />

          {/* TRUST STRIP (compact) */}
          <section aria-label="Trust" className="relative border-y border-border/60 bg-muted/10">
            <div className="container mx-auto px-4 md:px-6 py-8">
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Independent consultancy",
                    desc: "Guidance and sequencing—no government claims.",
                    Icon: ShieldCheck,
                  },
                  {
                    title: "Typical approvals guidance",
                    desc: "We map what usually applies for your activity.",
                    Icon: Route,
                  },
                  {
                    title: "Checklist-driven",
                    desc: "Know what to prepare (and when).",
                    Icon: ClipboardList,
                  },
                ].map((i) => (
                  <div key={i.title} className="lp-card-flat bg-background/70 backdrop-blur-sm p-6">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/20 bg-muted/10">
                        <i.Icon className="h-5 w-5 text-accent" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{i.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{i.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* COST CALCULATOR (same functionality, modern shell) */}
          <section
            id="calculator"
            aria-label="Cost calculator"
            className="section-spacing-sm relative overflow-hidden bg-secondary/30 scroll-mt-24"
          >
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
                  <div className="mt-4 lp-card p-6">
                    <p className="text-sm text-muted-foreground">Takes ~2 minutes</p>
                    <h2 className="mt-2 text-xl font-semibold tracking-tight text-foreground">Start here: get an estimate</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      No pricing tables—just the inputs that actually change your costs.
                    </p>
                    <div className="mt-5">
                      <Button className="w-full" onClick={() => scrollToId("calculator-form")}>Start</Button>
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground">
                      Then you can book your free call and we’ll confirm the checklist + sequence.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <span className="section-badge">Calculator</span>
                  <h2 className="lp-h2" id="calculator-form">Answer a few questions</h2>
                  <p className="lp-section-subtitle max-w-2xl">
                    You’ll see the key cost drivers, then continue to your free consultation.
                  </p>

                  <div className="mt-8">
                    <ConsultancyCostCalculator onContinue={() => navigate("/free-consultation")} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PROBLEM (same content, modern rhythm) */}
          <SplitSection
            badge="Common blockers"
            title="Starting a Business in Bahrain? Here’s What Usually Slows People Down"
            subtitle="We help you turn uncertainty into a clear sequence: what to prepare, what to decide, and what to expect—before you spend time or fees."
            useLpHeadings
            imageSrc={howItWorksImage}
            imageAlt="Consultant explaining options and requirements"
            imagePosition="right"
            imageSticky
            variant="subtle"
            backgroundVariant="ibelick-soft"
            overlayOpacity={0.9}
            overlayMasked
            imageRatio={16 / 10}
            imageOverlayStrength={0.55}
            imageImgClassName="object-[center_35%]"
          >
            <div className="grid md:grid-cols-2 gap-4">
              {COMMON_BLOCKERS.map(({ title, Icon }) => (
                <div key={title} className="lp-card p-5 sm:p-6 md:p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/20 bg-muted/10">
                    <Icon className="h-5 w-5 text-accent" />
                  </span>
                  <p className="mt-3 text-base leading-relaxed text-foreground/90">{title}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 lp-card-flat bg-muted/20 p-6 md:p-7">
              <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                <div>
                  <p className="text-base font-semibold text-foreground">Get clarity in one free consultation.</p>
                  <p className="mt-1 text-base text-muted-foreground">
                    Clear checklist • Realistic timeline • Plain‑English next steps
                  </p>
                </div>
                <Button onClick={() => scrollToId("book")}>Book free consultation</Button>
              </div>
            </div>
          </SplitSection>

          {/* PROCESS (same content) */}
          <SplitSection
            badge="Our approach"
            title="A 5‑Step Consultancy Process (Consultation → Checklist → Guidance)"
            subtitle="We provide independent advisory and guidance; authorities issue the CR. We keep everything structured, clear, and focused on decision-making."
            useLpHeadings
            imageSrc={bookingImage}
            imageAlt="Consultation booking and checklist preview"
            imagePosition="left"
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
                        <s.icon className="h-5 w-5 text-accent" />
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
              <Button onClick={() => scrollToId("book")}>Book free consultation</Button>
              <Button variant="outline" onClick={() => scrollToId("calculator")}>Edit calculator inputs</Button>
            </div>
          </SplitSection>

          {/* SERVICES (same content) */}
          <SplitSection
            badge="Services"
            title="Business Setup Advisory Services in Bahrain"
            subtitle="Choose the support you need—then we turn it into a clear plan, checklist, and next steps."
            useLpHeadings
            imageSrc={testimonialsImage}
            imageAlt="Professional advisory meeting"
            imagePosition="right"
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
                  },
                  {
                    k: "b",
                    title: "Document Checklist & Readiness Review",
                    bullets: [
                      "Tailored checklist for shareholders and structure",
                      "Document readiness review to reduce back-and-forth",
                      "Clear sequencing: what to prepare first vs later",
                    ],
                  },
                  {
                    k: "c",
                    title: "Licensing & Regulatory Advisory",
                    bullets: [
                      "Guidance on common approvals for your activity",
                      "Requirements overview for regulated activities (where relevant)",
                      "Compliance checkpoints to keep the process predictable",
                    ],
                  },
                  {
                    k: "d",
                    title: "Corporate Structuring Consultation",
                    bullets: [
                      "Guidance on common structures (e.g., SPC, WLL, branch)",
                      "Shareholder and governance considerations",
                    ],
                  },
                  {
                    k: "e",
                    title: "Support Services Coordination",
                    bullets: [
                      "Coordination with support providers when needed",
                      "Accounting and bookkeeping options overview",
                      "Banking preparation guidance (what to expect and prepare)",
                    ],
                  },
                ].map((s) => (
                  <AccordionItem key={s.k} value={s.k}>
                    <AccordionTrigger className="text-base font-semibold leading-snug">{s.title}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="mt-3 space-y-2 list-disc pl-5">
                        {s.bullets.map((b) => (
                          <li key={b} className="text-base text-muted-foreground leading-relaxed">
                            {b}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-6">
              <Button onClick={() => scrollToId("book")}>Book free consultation</Button>
            </div>
          </SplitSection>

          {/* ABOUT (same content) */}
          <section aria-label="About" className="section-spacing-sm">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <span className="section-badge">About</span>
                  <h2 className="lp-h2">About Our Business Setup Consultancy</h2>

                  <div className="mt-6 lp-card p-6 sm:p-7 md:p-8">
                    <p className="text-sm text-muted-foreground">
                      We’re an independent business consultancy focused on helping founders make confident setup decisions.
                      Our work is checklist-driven: you get clarity on options, cost drivers, timelines, and what to prepare next.
                    </p>
                    <p className="mt-4 text-sm text-muted-foreground">
                      We are not affiliated with any government authority and we do not issue Commercial Registration (CR).
                    </p>
                  </div>
                </div>

                <div className="lp-card p-3 sm:p-4 md:p-5">
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

          {/* BOOKING (Calendly preserved) */}
          <section id="book" aria-label="Book" className="section-spacing-sm scroll-mt-24 bg-muted/10">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-5">
                  <span className="section-badge">Free call</span>
                  <h2 className="lp-h2">Book your 30‑minute consultation</h2>
                  <p className="lp-section-subtitle">
                    We’ll review your activity + shareholders, and share a realistic sequence and checklist.
                  </p>
                  <div className="mt-5 lp-card-flat bg-muted/20 p-6">
                    <p className="text-sm font-semibold text-foreground">You’ll leave with:</p>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-accent" />A tailored checklist</li>
                      <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-accent" />A realistic timeline</li>
                      <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-accent" />Clear next steps</li>
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="lp-card p-3 md:p-4">
                    <CalendlyBooking calendlyUrl={calendlyUrl} variant="plain" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ (content preserved) */}
          <section aria-label="FAQs" className="section-spacing-sm">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl">
                <span className="section-badge">FAQs</span>
                <h2 className="lp-h2">Frequently Asked Questions About Company Formation in Bahrain</h2>
                <p className="lp-section-subtitle">Short, direct answers—then we personalize it on the call.</p>
              </div>

              <div className="mt-8 lp-card p-2 md:p-3">
                <Accordion type="single" collapsible>
                  {FAQS.map((f, idx) => (
                    <AccordionItem key={f.question} value={`cfc-modern-${idx}`}>
                      <AccordionTrigger className="px-4 md:px-5 text-sm font-semibold">{f.question}</AccordionTrigger>
                      <AccordionContent className="px-4 md:px-5 text-sm text-muted-foreground">{f.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="mt-6">
                <Button onClick={() => scrollToId("book")}>Book free consultation</Button>
              </div>
            </div>
          </section>

          {/* Footer disclaimer */}
          <section className="pb-10">
            <div className="container mx-auto px-4 md:px-6">
              <div className="lp-card-flat bg-muted/20 p-5">
                <p className="text-xs text-muted-foreground">
                  We are not a government website or authority. CR issued by Bahrain government only.
                </p>
              </div>
            </div>
          </section>
        </main>

        <MobileStickyConsultationBar
          onConsultationClick={() => scrollToId("book")}
          phoneHref="tel:+97317008888"
          phoneLabel="Call for consultation"
        />

        <ConsultancyModernFooter />
      </div>
    </div>
  );
}
