import { useEffect, useMemo } from "react";

import {
  Check,
  Clock,
  FileText,
  HelpCircle,
  Mail,
  MessageCircle,
  Phone,
  Shield,
  Sparkles,
  Star,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

import { CalendlyBooking } from "@/components/consultation/CalendlyBooking";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { MobileStickyConsultationBar } from "@/components/landing/MobileStickyConsultationBar";
import { SectionBackgroundOverlay } from "@/components/shared/SectionBackgroundOverlay";
import { SplitSection } from "@/components/shared/SplitSection";

import { CompanyFormationHeroMontage } from "@/pages/landing/company-formation/CompanyFormationHeroMontage";

import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

import howItWorksImage from "@/assets/company-formation/lp/how-it-works-portrait.jpg";
import bookingImage from "@/assets/company-formation/lp/booking-portrait.jpg";
import testimonialsImage from "@/assets/company-formation/lp/testimonials-portrait.jpg";

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
      "Placeholder: Most straightforward setups can be completed in days once documents and approvals are aligned. Timelines vary by activity and shareholder profile.",
  },
  {
    question: "Can foreigners own 100% of a Bahrain company?",
    answer:
      "Placeholder: Many activities allow 100% foreign ownership. Eligibility depends on the specific activity and structure.",
  },
  {
    question: "Do you issue the Commercial Registration (CR)?",
    answer:
      "No. We are an independent business consultancy. The Commercial Registration (CR) is issued only by the Bahrain government authorities.",
  },
  {
    question: "What documents do I need to start?",
    answer:
      "Placeholder: Requirements depend on your shareholders and activity. We provide a tailored checklist after the consultation.",
  },
  {
    question: "Are government fees included in your advisory fee?",
    answer:
      "Placeholder: Government fees are paid directly to the relevant authorities. Our pricing covers consultancy/advisory work only.",
  },
  {
    question: "Can you help with licensing and regulatory steps?",
    answer:
      "Placeholder: We provide guidance on licensing pathways and required approvals, and coordinate support services where relevant.",
  },
  {
    question: "Is the consultation really free?",
    answer:
      "Placeholder: Yes—30 minutes, no obligation. You’ll receive clarity on structure, cost drivers, and next steps.",
  },
  {
    question: "What happens after I book?",
    answer:
      "Placeholder: We confirm your activity, outline a recommended structure, and share a practical checklist for documents and steps.",
  },
];

export default function CompanyFormationConsultancyLanding() {
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
    document.title = "Company Formation Consultancy Bahrain | Business Setup Experts";

    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") ?? null;
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Independent company formation consultancy in Bahrain. Get structured guidance, a clear checklist, and book a free consultation."
      );
    }

    let robots = document.querySelector(
      'meta[name="robots"][data-lp="company-formation-consultancy"]'
    ) as HTMLMetaElement | null;
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      robots.setAttribute("data-lp", "company-formation-consultancy");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, follow");

    let canonical = document.querySelector(
      'link[rel="canonical"][data-lp="company-formation-consultancy"]'
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("data-lp", "company-formation-consultancy");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/company-formation-consultancy-bahrain");

    return () => {
      document.title = previousTitle;
      if (metaDescription && previousDescription !== null) metaDescription.setAttribute("content", previousDescription);
      robots?.remove();
      canonical?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="mx-auto min-h-screen max-w-[1120px] bg-background md:border-x md:border-border/60">
        <LandingHeader onLogoClick={() => scrollToId("top")} />

        <main id="top" className="flex-1">
          <CompanyFormationHeroMontage
            onBookClick={() => scrollToId("book")}
            badgeText="Free consultation • Independent business consultancy"
            title="Company Formation Consultancy in Bahrain"
            titleSuffix=""
            lead="Placeholder sub-headline: Independent guidance, clear next steps, and a practical checklist—so you can proceed confidently."
            bullets={[
              { icon: Check, text: "Consultation-first: clear plan before you spend" },
              { icon: Shield, text: "Guidance on approvals and compliance steps" },
              { icon: FileText, text: "Tailored checklist + realistic timeline" },
            ]}
            primaryCtaLabel="Get Free Consultation"
            phoneCta={{ href: "tel:+97317008888", label: "Call +97317008888" }}
            showWhatsApp={false}
            socialProofLine="4.9/5 reviews • 500+ clients supported • Response within 1 business day"
          />

          {/* DISCLAIMER (must be visible above fold) */}
          <section aria-label="Independent business consultancy disclaimer" className="relative">
            <div className="container mx-auto px-4 md:px-6 -mt-6 md:-mt-8 relative z-10">
              <div className="lp-card p-5 md:p-6 bg-warning text-warning-foreground border-warning-border">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-warning-foreground">
                      Independent Business Consultancy
                    </p>
                    <p className="mt-2 text-sm text-warning-foreground/90">
                      Placeholder disclaimer text: We provide independent consultation, advisory, and guidance services.
                      We are not affiliated with any government authority.
                    </p>
                    <p className="mt-3 text-sm text-warning-foreground/90">
                      We do not issue Commercial Registration (CR). CR is issued by Bahrain government authorities only.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PROBLEM */}
          <SplitSection
            badge="Common blockers"
            title="Starting a Business in Bahrain? Here’s What You’re Facing"
            subtitle="Placeholder: The most common friction points we help you navigate—with clear advisory guidance and a practical checklist."
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
              {[
                "Unclear activity approvals and licensing steps",
                "Confusing documentation requirements",
                "Uncertain timelines and sequencing",
                "Inconsistent information across sources",
                "Office/address decisions affecting costs",
                "Visa planning and compliance considerations",
              ].map((t) => (
                <div key={t} className="lp-card p-5 sm:p-6 md:p-7 flex gap-3">
                  <HelpCircle className="h-5 w-5 text-accent mt-0.5" />
                  <div className="text-sm text-foreground/90">{t}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 lp-card-flat bg-muted/20 p-6 md:p-7">
              <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">Get clarity in one free consultation.</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Placeholder trust strip: Clear checklist • Transparent next steps • Fast response
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
            subtitle="We provide independent advisory and guidance; authorities issue the CR. Placeholder: We keep the process clear and conversion-focused."
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
                { icon: Check, title: "1) Free consultation", desc: "Placeholder: We understand your activity and goals." },
                { icon: FileText, title: "2) Checklist + structure", desc: "Placeholder: You get a clear checklist and recommended setup." },
                { icon: Shield, title: "3) Compliance guidance", desc: "Placeholder: We map approvals, licensing, and requirements." },
                { icon: Clock, title: "4) Timeline planning", desc: "Placeholder: We sequence steps and set realistic expectations." },
                { icon: Sparkles, title: "5) Coordination", desc: "Placeholder: We coordinate support services where relevant." },
              ].map((s, idx) => (
                <div key={s.title} className="lp-card p-5 sm:p-6 md:p-7">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start gap-3">
                      <s.icon className="h-5 w-5 text-accent mt-0.5" />
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
                  <Phone className="mr-2" />
                  Call for consultation
                </a>
              </Button>
            </div>
          </SplitSection>

          {/* SERVICES */}
          <SplitSection
            badge="Services"
            title="Business Setup Advisory Services in Bahrain"
            subtitle="Placeholder: Choose the support you need—then we align everything into a clear advisory plan."
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
                      "Placeholder: structure selection",
                      "Placeholder: activity mapping",
                      "Placeholder: cost drivers",
                    ],
                  },
                  {
                    k: "b",
                    title: "CR Submission Guidance",
                    bullets: [
                      "Placeholder: document readiness",
                      "Placeholder: sequencing",
                      "Placeholder: review before submission",
                    ],
                  },
                  {
                    k: "c",
                    title: "Licensing & Regulatory Advisory",
                    bullets: [
                      "Placeholder: approvals",
                      "Placeholder: regulated activities",
                      "Placeholder: compliance checkpoints",
                    ],
                  },
                  {
                    k: "d",
                    title: "Corporate Structuring Consultation",
                    bullets: [
                      "Placeholder: SPC/WLL/branch guidance",
                      "Placeholder: shareholder considerations",
                    ],
                  },
                  {
                    k: "e",
                    title: "Support Services Coordination",
                    bullets: [
                      "Placeholder: PRO coordination",
                      "Placeholder: accounting options",
                      "Placeholder: bank account support",
                    ],
                  },
                ].map((s) => (
                  <AccordionItem key={s.k} value={s.k}>
                    <AccordionTrigger className="text-sm font-semibold">{s.title}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="mt-2 space-y-2">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-accent mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-6">
              <Button onClick={() => scrollToId("book")}>Get Free Consultation</Button>
            </div>
          </SplitSection>

          {/* BENEFITS */}
          <section className="section-spacing-sm">
            <div className="container mx-auto px-4 md:px-6">
              <span className="section-badge">Benefits</span>
              <h2 className="lp-h2">Why Entrepreneurs Choose Our Consultancy</h2>

              <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Clear, step-by-step guidance",
                  "Transparent expectations on timelines",
                  "Practical document checklists",
                  "Fast response and coordination",
                  "Experience across many activities",
                  "Compliance-first planning",
                  "Advice tailored to your goals",
                ].map((b) => (
                  <div key={b} className="lp-card p-5 sm:p-6 md:p-7 flex gap-3">
                    <Check className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{b}</p>
                      <p className="mt-2 text-sm text-muted-foreground">Placeholder supporting sentence.</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust signals (every 2–3 sections) */}
              <div className="mt-6 lp-card-flat bg-muted/20 p-6 md:p-7">
                <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Social proof + fast response.</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Placeholder: 4.9/5 reviews • 500+ clients • Clear checklist
                    </p>
                  </div>
                  <Button onClick={() => scrollToId("book")}>Get Free Consultation</Button>
                </div>
              </div>
            </div>
          </section>

          {/* PRICING */}
          <section className="section-spacing-sm relative overflow-hidden">
            <SectionBackgroundOverlay variant="ibelick-lines" opacity={0.8} masked />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <span className="section-badge">Pricing</span>
              <h2 className="lp-h2">Transparent Company Formation Consultancy Pricing</h2>
              <p className="mt-4 lp-section-subtitle">
                Government fees are paid directly to the relevant authorities. Our pricing is for consultancy/advisory
                services only.
              </p>

              <div className="mt-8 grid lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Starter Advisory Package",
                    price: "BHD —",
                    items: ["Placeholder: 1 consultation", "Placeholder: checklist", "Placeholder: Q&A"],
                    featured: false,
                  },
                  {
                    title: "Complete Formation Advisory",
                    price: "BHD —",
                    items: ["Placeholder: structure mapping", "Placeholder: licensing path", "Placeholder: coordination"],
                    featured: true,
                  },
                  {
                    title: "Premium Business Setup Advisory",
                    price: "BHD —",
                    items: ["Placeholder: priority support", "Placeholder: advanced structuring", "Placeholder: ongoing guidance"],
                    featured: false,
                  },
                ].map((p) => (
                  <div
                    key={p.title}
                    className={
                      "lp-card p-6 sm:p-7 md:p-8 " + (p.featured ? "card-glow border-border/80" : "")
                    }
                  >
                    <p className="text-sm font-semibold text-foreground">{p.title}</p>
                    <div className="mt-3 flex items-baseline gap-2">
                      <div className="text-3xl font-extrabold text-foreground tracking-tight">{p.price}</div>
                      {p.featured ? (
                        <span className="text-xs text-muted-foreground">Most popular</span>
                      ) : null}
                    </div>
                    <ul className="mt-5 space-y-2">
                      {p.items.map((i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-accent mt-0.5" />
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6 w-full" onClick={() => scrollToId("book")}
                    >
                      Request Advisory Quote
                    </Button>
                    <p className="mt-3 text-xs text-muted-foreground">Book a free consultation for exact pricing.</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section className="section-spacing-sm">
            <div className="container mx-auto px-4 md:px-6">
              <span className="section-badge">Testimonials</span>
              <h2 className="lp-h2">Trusted by 500+ Businesses in Bahrain</h2>
              <p className="mt-4 lp-section-subtitle">Placeholder: Short, credible outcomes—kept concise for ad traffic.</p>

              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((idx) => (
                  <div key={idx} className="lp-card p-6 sm:p-7">
                    <div className="flex items-center gap-1 text-accent">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <Star key={s} className="h-4 w-4" />
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      “Placeholder testimonial quote #{idx}: Clear guidance, responsive team, and a practical checklist.”
                    </p>
                    <p className="mt-4 text-sm font-semibold text-foreground">Client testimonial</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["No obligation", "Fast response", "Clear checklist", "Advisory-only"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border/40 bg-background px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="section-spacing-sm relative overflow-hidden bg-secondary/40">
            <SectionBackgroundOverlay variant="radial" opacity={1} masked={false} className="opacity-55" />
            <SectionBackgroundOverlay variant="grid-lines" opacity={0.45} masked />
            <script
              type="application/ld+json"
              data-schema="company-formation-consultancy-faq"
              // Avoid React managing text children inside <script>, which can trigger DOM removeChild errors
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <span className="section-badge">FAQ</span>
              <h2 className="lp-h2">Frequently Asked Questions About Company Formation in Bahrain</h2>

              <div className="mt-8 lp-card p-3 md:p-4">
                <Accordion type="single" collapsible>
                  {FAQS.map((f, idx) => (
                    <AccordionItem key={f.question} value={`cfc-${idx}`}>
                      <AccordionTrigger className="text-sm font-semibold">{f.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{f.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="mt-6">
                <Button onClick={() => scrollToId("book")}>Get Free Consultation Checklist</Button>
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section className="section-spacing-sm">
            <div className="container mx-auto px-4 md:px-6">
              <span className="section-badge">About</span>
              <h2 className="lp-h2">About Our Business Setup Consultancy</h2>
              <div className="mt-6 lp-card p-6 sm:p-7 md:p-8">
                <p className="text-sm text-muted-foreground">
                  Placeholder about section: We’re an independent consultancy helping entrepreneurs understand setup
                  options, documentation, cost drivers, and timelines.
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  We are not affiliated with any government authority and we do not issue Commercial Registration (CR).
                </p>
              </div>
            </div>
          </section>

          {/* BOOKING / CONTACT */}
          <div id="book" />
          <section aria-label="Book free consultation" className="section-spacing-sm">
            <div className="container mx-auto px-4 md:px-6">
              <span className="section-badge">Booking</span>
              <h2 className="lp-h2">Book your free consultation</h2>
              <p className="mt-4 lp-section-subtitle">Free, 30 minutes, no obligation—book directly below.</p>
            </div>

            <CalendlyBooking
              variant="plain"
              calendlyUrl={calendlyUrl}
              sectionId="book"
              imageAlt="Business consultation call preview"
            />

            <div className="container mx-auto px-4 md:px-6">
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                {[
                  { icon: Phone, label: "Phone", value: "+973 1700 8888", href: "tel:+97317008888" },
                  { icon: Mail, label: "Email", value: "info@keylinkcorp.com", href: "mailto:info@keylinkcorp.com" },
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    value: "+973 1700 8888",
                    href: "https://wa.me/97317008888",
                  },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="lp-card p-5 sm:p-6 md:p-7 flex items-start gap-3 hover:shadow-[0_8px_32px_hsl(var(--navy)/0.10)] transition-shadow"
                  >
                    <c.icon className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground">{c.label}</p>
                      <p className="text-sm font-semibold text-foreground">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Contact form (no backend; sends via mail client) */}
              <div className="mt-8 lp-card p-6 sm:p-7 md:p-8">
                <div className="max-w-2xl">
                  <span className="section-badge">Contact</span>
                  <h2 className="lp-h2">Request Advisory Guidance</h2>
                  <p className="mt-4 lp-section-subtitle">
                    Placeholder: Prefer a message instead of booking? Send your details—our team will respond.
                  </p>
                </div>

                <form
                  className="mt-8 grid gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const data = new FormData(form);
                    const name = String(data.get("name") ?? "");
                    const email = String(data.get("email") ?? "");
                    const phone = String(data.get("phone") ?? "");
                    const message = String(data.get("message") ?? "");

                    const subject = encodeURIComponent("Consultation request (Bahrain consultancy)");
                    const body = encodeURIComponent(
                      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
                    );

                    toast({
                      title: "Request prepared",
                      description: "Your email app will open to send your consultation request.",
                    });

                    window.location.href = `mailto:info@keylinkcorp.com?subject=${subject}&body=${body}`;
                    form.reset();
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <label className="text-sm font-medium" htmlFor="cfc-name">
                        Full name
                      </label>
                      <input
                        id="cfc-name"
                        name="name"
                        className="h-11 rounded-md border border-input bg-background px-3 text-sm"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-sm font-medium" htmlFor="cfc-email">
                        Email
                      </label>
                      <input
                        id="cfc-email"
                        name="email"
                        type="email"
                        className="h-11 rounded-md border border-input bg-background px-3 text-sm"
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <label className="text-sm font-medium" htmlFor="cfc-phone">
                      Phone (WhatsApp preferred)
                    </label>
                    <input
                      id="cfc-phone"
                      name="phone"
                      className="h-11 rounded-md border border-input bg-background px-3 text-sm"
                      placeholder="+973 XXXX XXXX"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label className="text-sm font-medium" htmlFor="cfc-message">
                      What do you need guidance on?
                    </label>
                    <textarea
                      id="cfc-message"
                      name="message"
                      className="min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="Placeholder: Activity, shareholders, timeline, visa needs..."
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      Request consultation
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto" type="button" onClick={() => scrollToId("book")}
                    >
                      Book free consultation
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    By submitting, you’re requesting independent consultation/advisory guidance.
                  </p>
                </form>
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
                      Placeholder next steps: book a free call, get a checklist, and receive a clear action plan.
                    </p>
                    <ul className="mt-5 space-y-2 text-sm">
                      {["Free consultation (30 min)", "Tailored checklist", "Clear timeline + cost drivers"].map((t) => (
                        <li key={t} className="flex gap-2 text-foreground/90">
                          <Check className="h-4 w-4 text-accent mt-0.5" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                    <Button size="lg" className="w-full sm:w-auto" onClick={() => scrollToId("book")}
                    >
                      Get Free Consultation
                    </Button>
                    <Button variant="outline" size="default" className="w-full sm:w-auto" asChild>
                      <a href="tel:+97317008888">
                        <Phone className="mr-2" />
                        Call for consultation
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="mt-6 lp-card-flat bg-muted/20 p-5">
                  <p className="text-xs text-muted-foreground">
                    Download guide (placeholder): Provide a PDF URL and I’ll link it here.
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
        </main>

        <MobileStickyConsultationBar
          onConsultationClick={() => scrollToId("book")}
          phoneHref="tel:+97317008888"
          phoneLabel="Call for consultation"
        />

        <LandingFooter />
      </div>
    </div>
  );
}
