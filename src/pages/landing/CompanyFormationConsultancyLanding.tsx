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
import { CalendlyBooking } from "@/components/consultation/CalendlyBooking";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { SectionBackgroundOverlay } from "@/components/shared/SectionBackgroundOverlay";

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
          {/* HERO */}
          <section className="relative overflow-hidden">
            <SectionBackgroundOverlay variant="dots" opacity={1} masked={false} className="opacity-60" />
            <div className="container mx-auto px-4 md:px-6 pt-10 md:pt-14 pb-8">
              <div className="grid lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-7">
                  <p className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs text-muted-foreground tracking-tight">
                    <Sparkles className="h-4 w-4 text-accent" />
                    Free consultation • Independent advisory
                  </p>

                  <h1 className="mt-4 lp-h1 lp-hero-title text-balance">Company Formation Consultancy in Bahrain</h1>
                  <p className="mt-5 lp-lead max-w-[60ch]">
                    Placeholder sub-headline: Structured guidance, clear next steps, and a practical checklist to help you
                    start confidently.
                  </p>

                  <div className="mt-7 flex flex-col sm:flex-row gap-3">
                    <Button size="lg" className="w-full sm:w-auto" onClick={() => scrollToId("book")}>
                      Get Free Consultation
                    </Button>
                    <Button variant="outline" size="default" className="w-full sm:w-auto" asChild>
                      <a href="tel:+97317008888">
                        <Phone className="mr-2" />
                        Call +97317008888
                      </a>
                    </Button>
                  </div>

                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["4.9/5 Google Reviews", "500+ clients", "10+ years", "Licensed consultants"].map((t) => (
                      <div key={t} className="lp-card-flat bg-muted/20 p-3">
                        <div className="text-sm font-semibold text-foreground">{t}</div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-3 text-xs text-muted-foreground">
                    Free • No obligation • You’ll get a document checklist + recommended next steps
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <div className="lp-card p-5 sm:p-6 md:p-7 noise-texture">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-accent mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">Independent Business Consultancy</p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Placeholder disclaimer (replace with your exact approved text): We are not a government website
                          or authority. We provide independent consultancy and guidance only.
                        </p>
                        <p className="mt-3 text-sm text-muted-foreground">
                          We do not issue Commercial Registration (CR). CR is issued by Bahrain government authorities
                          only.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PROBLEM */}
          <section className="section-spacing-sm relative overflow-hidden">
            <SectionBackgroundOverlay variant="ibelick-soft" opacity={0.9} masked />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <span className="section-badge">Common blockers</span>
              <h2 className="lp-h2">Starting a Business in Bahrain? Here’s What You’re Facing:</h2>
              <p className="mt-4 lp-section-subtitle">
                Placeholder: A few of the most common friction points we help you navigate—without guesswork.
              </p>

              <div className="mt-8 grid md:grid-cols-2 gap-4">
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
                <p className="text-sm font-semibold text-foreground">You need expert guidance, not guesswork.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Trust strip: Clear checklist • Transparent quote • Fast response
                </p>
              </div>
            </div>
          </section>

          {/* SOLUTION */}
          <section className="section-spacing-sm">
            <div className="container mx-auto px-4 md:px-6">
              <span className="section-badge">Our approach</span>
              <h2 className="lp-h2">How Our Company Formation Consultancy Works</h2>
              <p className="mt-4 lp-section-subtitle">
                We provide advisory and guidance. You submit through the appropriate channels. Authorities issue CR.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  { icon: Check, title: "1) Free consultation", desc: "Placeholder: We learn your goals and activity." },
                  { icon: FileText, title: "2) Checklist + structure", desc: "Placeholder: We outline the best setup." },
                  { icon: Shield, title: "3) Compliance path", desc: "Placeholder: Approvals and licensing guidance." },
                  { icon: Clock, title: "4) Timeline planning", desc: "Placeholder: Sequencing and realistic ETA." },
                  { icon: Sparkles, title: "5) Coordination", desc: "Placeholder: Support services coordination." },
                ].map((s) => (
                  <div key={s.title} className="lp-card p-5 sm:p-6 md:p-7">
                    <div className="flex items-start gap-3">
                      <s.icon className="h-5 w-5 text-accent mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{s.title}</p>
                        <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex">
                <Button onClick={() => scrollToId("book")}>Start Your Free Consultation</Button>
              </div>
            </div>
          </section>

          {/* SERVICES (ACCORDION) */}
          <section className="section-spacing-sm relative overflow-hidden bg-secondary/40">
            <SectionBackgroundOverlay variant="radial" opacity={1} masked={false} className="opacity-55" />
            <SectionBackgroundOverlay variant="grid-lines" opacity={0.45} masked />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <span className="section-badge">Services</span>
              <h2 className="lp-h2">Our Business Setup Advisory Services in Bahrain</h2>
              <p className="mt-4 lp-section-subtitle">
                Placeholder: Pick what you need—our team will align the steps into a clear plan.
              </p>

              <div className="mt-8 lp-card p-3 md:p-4">
                <Accordion type="single" collapsible>
                  {[
                    {
                      k: "a",
                      title: "Company Formation Advisory",
                      bullets: ["Placeholder: structure selection", "Placeholder: activity mapping", "Placeholder: cost drivers"],
                    },
                    {
                      k: "b",
                      title: "CR Application Guidance",
                      bullets: ["Placeholder: document readiness", "Placeholder: sequencing", "Placeholder: review before submission"],
                    },
                    {
                      k: "c",
                      title: "Licensing & Regulatory Advisory",
                      bullets: ["Placeholder: approvals", "Placeholder: regulated activities", "Placeholder: compliance checkpoints"],
                    },
                    {
                      k: "d",
                      title: "Corporate Structuring Consultation",
                      bullets: ["Placeholder: SPC/WLL/branch guidance", "Placeholder: shareholder considerations"],
                    },
                    {
                      k: "e",
                      title: "Support Services Coordination",
                      bullets: ["Placeholder: PRO coordination", "Placeholder: accounting options", "Placeholder: bank account support"],
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
                <Button onClick={() => scrollToId("book")}>Get Custom Quote for Your Business</Button>
              </div>
            </div>
          </section>

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

              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Advisory-only", "Clear checklist", "Transparent quote", "Click-to-call"].map((t) => (
                  <div key={t} className="lp-card-flat bg-muted/20 p-3">
                    <div className="text-sm font-semibold text-foreground">{t}</div>
                  </div>
                ))}
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
                    <Button className="mt-6 w-full" onClick={() => scrollToId("book")}>
                      Request Detailed Quote
                    </Button>
                    <p className="mt-3 text-xs text-muted-foreground">Request a quote for exact pricing.</p>
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
                <Button onClick={() => scrollToId("book")}>Get Your Free Company Formation Checklist</Button>
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
                {[{ icon: Phone, label: "Phone", value: "+973 1700 8888", href: "tel:+97317008888" }, { icon: Mail, label: "Email", value: "info@keylinkcorp.com", href: "mailto:info@keylinkcorp.com" }, { icon: MessageCircle, label: "WhatsApp", value: "+973 1700 8888", href: "https://wa.me/97317008888" }].map(
                  (c) => (
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
                  )
                )}
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
                    <Button size="lg" className="w-full sm:w-auto" onClick={() => scrollToId("book")}>
                      Start Your Free Consultation Now
                    </Button>
                    <Button variant="outline" size="default" className="w-full sm:w-auto" asChild>
                      <a href="tel:+97317008888">
                        <Phone className="mr-2" />
                        Call
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

        <LandingFooter />
      </div>
    </div>
  );
}
