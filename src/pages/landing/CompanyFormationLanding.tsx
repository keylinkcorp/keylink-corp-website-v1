import { useEffect, useMemo, useState } from "react";

import { Check, MessageCircle, Phone } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CalendlyBooking } from "@/components/consultation/CalendlyBooking";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingHeader } from "@/components/landing/LandingHeader";

import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

import { CompanyFormationMultiStepForm, type CompanyFormationLeadData } from "@/pages/landing/company-formation/CompanyFormationMultiStepForm";
import { CompanyFormationHeroMontage } from "@/pages/landing/company-formation/CompanyFormationHeroMontage";
import { CompanyFormationTrustBar } from "@/pages/landing/company-formation/CompanyFormationTrustBar";

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

export default function CompanyFormationLanding() {
  const [leadData, setLeadData] = useState<CompanyFormationLeadData | null>(null);
  const [showBooking, setShowBooking] = useState(false);

  const calendlyUrl = useMemo(() => {
    if (typeof window === "undefined") return CALENDLY_BASE_URL;
    return mergeQueryParams(CALENDLY_BASE_URL, window.location.search);
  }, []);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Company Formation in Bahrain 2026 | Free Consultation";

    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") ?? null;
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Company formation in Bahrain in 3–7 days. 100% foreign ownership. Transparent pricing. Book a free 30‑minute consultation with Keylink."
      );
    }

    let robots = document.querySelector(
      'meta[name="robots"][data-lp="company-formation"]'
    ) as HTMLMetaElement | null;
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      robots.setAttribute("data-lp", "company-formation");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, follow");

    let canonical = document.querySelector(
      'link[rel="canonical"][data-lp="company-formation"]'
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("data-lp", "company-formation");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/services/company-formation");

    return () => {
      document.title = previousTitle;
      if (metaDescription && previousDescription !== null) {
        metaDescription.setAttribute("content", previousDescription);
      }
      robots?.remove();
      canonical?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="mx-auto min-h-screen max-w-[1120px] bg-background md:border-x md:border-border/60">
        <LandingHeader onLogoClick={() => scrollToId("top")} />

        <main id="top" className="flex-1">
          <CompanyFormationHeroMontage onBookClick={() => scrollToId("start")} />
          <CompanyFormationTrustBar />

          {/* MULTI-STEP (Gates booking) */}
          <div id="start" />
          <section aria-label="Company formation calculator" className="section-spacing-sm">
            <div className="container mx-auto px-4 md:px-6">
              <span className="section-badge">Start here</span>
              <h2>Answer a few quick questions</h2>
              <p className="mt-4 max-w-2xl">
                We’ll use this to tailor your free consultation and confirm the exact costs + timeline for your setup.
              </p>

              <div className="mt-8">
                <CompanyFormationMultiStepForm
                  onComplete={(data) => {
                    setLeadData(data);
                    setShowBooking(true);
                    requestAnimationFrame(() => scrollToId("book"));
                  }}
                />
              </div>
            </div>
          </section>

          {leadData && (
            <section aria-label="Summary" className="section-spacing-sm">
              <div className="container mx-auto px-4 md:px-6">
                <span className="section-badge">Summary</span>
                <h2>Your details (for the call)</h2>

                <div className="mt-8 card-elevated p-6 md:p-7">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Name</p>
                      <p className="font-semibold text-foreground">{leadData.name}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Email</p>
                      <p className="font-semibold text-foreground">{leadData.email}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Phone</p>
                      <p className="font-semibold text-foreground">{leadData.phone}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Company</p>
                      <p className="font-semibold text-foreground">{leadData.company || "—"}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-muted-foreground">Services</p>
                      <p className="font-semibold text-foreground">{leadData.services.join(", ")}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Activity</p>
                      <p className="font-semibold text-foreground">
                        {leadData.activityCategory}
                        {leadData.activityCategory === "Other" && leadData.activityOther
                          ? ` — ${leadData.activityOther}`
                          : ""}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Timeline</p>
                      <p className="font-semibold text-foreground">{leadData.timeline}</p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl border border-border/60 bg-muted/20 p-4">
                    <p className="text-sm text-muted-foreground">
                      Next step: book your free 30‑minute consultation below to confirm eligibility, approvals, and final
                      costs.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* HOW IT WORKS */}
          <section className="section-spacing-sm">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-5">
                  <span className="section-badge">The process</span>
                  <h2>How it works</h2>
                  <p className="mt-4 max-w-md">
                    A simple, conversion-focused flow: clarity first, then confident next steps.
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid gap-4">
                    {[
                      {
                        title: "Book a free consultation",
                        desc: "Pick a time that suits you—book directly on this page.",
                      },
                      {
                        title: "We map your best setup",
                        desc: "Company type + activities + requirements + timeline.",
                      },
                      {
                        title: "You receive a clear checklist",
                        desc: "Documents, costs, and steps to start with confidence.",
                      },
                    ].map((step, idx) => (
                      <div key={step.title} className="card-elevated-hover p-6 md:p-7">
                        <div className="flex items-start justify-between gap-6">
                          <div>
                            <div className="text-sm text-muted-foreground">Step {idx + 1}</div>
                            <div className="mt-1 text-lg font-semibold text-foreground">{step.title}</div>
                            <div className="mt-2 text-sm text-muted-foreground">{step.desc}</div>
                          </div>
                          <div className="hidden sm:flex step-number">{idx + 1}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 glass-card-light p-6 md:p-7">
                    <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                      <div>
                        <p className="text-sm font-semibold text-foreground">Want exact costs + timeline?</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Book the free call and we’ll tailor it to your activities and shareholders.
                        </p>
                      </div>
                      <Button onClick={() => scrollToId("book")}>Book now</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONSULTATION VALUE (band inside the canvas) */}
          <section className="section-spacing-sm">
            <div className="border-y border-border/60 bg-muted/20">
              <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-5">
                    <span className="section-badge">What you get</span>
                    <h2>What happens on the call</h2>
                    <p className="mt-4">
                      Practical guidance and a clean plan—so you move fast and avoid surprises.
                    </p>
                  </div>

                  <div className="lg:col-span-7">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        "Business structure advice tailored to your goals",
                        "Transparent cost breakdown (no hidden fees)",
                        "Realistic timeline estimate for your setup",
                        "Complete document checklist to get started",
                        "Direct Q&A with our business setup experts",
                        "Next-step plan after the call (simple + actionable)",
                      ].map((b) => (
                        <div key={b} className="card-elevated p-5 flex gap-3">
                          <Check className="h-4 w-4 text-accent mt-0.5" />
                          <p className="text-sm text-muted-foreground">{b}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 card-elevated p-6 md:p-7">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                          <p className="font-semibold text-foreground">Prefer to talk now?</p>
                          <p className="text-sm text-muted-foreground mt-1">Sunday–Thursday • 8:00 AM – 5:00 PM</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                          <Button className="w-full sm:w-auto" asChild>
                            <a href="https://wa.me/97317008888">
                              <MessageCircle className="mr-2" />
                              WhatsApp
                            </a>
                          </Button>
                          <Button variant="outline" className="w-full sm:w-auto" asChild>
                            <a href="tel:+97317008888">
                              <Phone className="mr-2" />
                              Call
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BOOKING (revealed after form submit) */}
          <div id="book" />
          {showBooking && (
            <section aria-label="Book free consultation" className="section-spacing-sm">
              <div className="container mx-auto px-4 md:px-6">
                <span className="section-badge">Booking</span>
                <h2>Book your free consultation</h2>
                <p className="mt-4">Free, 30 minutes, no obligation—book directly below.</p>
              </div>
              <CalendlyBooking variant="plain" calendlyUrl={calendlyUrl} sectionId="book" />
            </section>
          )}

          {/* TESTIMONIALS */}
          <section className="section-spacing-sm">
            <div className="container mx-auto px-4 md:px-6">
              <span className="section-badge">Results</span>
              <h2>Client feedback</h2>
              <p className="mt-4 max-w-2xl">A few recent outcomes—kept short for ad traffic.</p>

              <div className="mt-10 grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Client testimonial",
                    quote:
                      "Clear process, fast turnaround, and a transparent cost breakdown. Booking was easy and the checklist saved us time.",
                    img: testimonial1,
                  },
                  {
                    name: "Client testimonial",
                    quote:
                      "They explained the best structure for our business and guided us through requirements step-by-step. Very responsive team.",
                    img: testimonial2,
                  },
                ].map((t) => (
                  <div key={t.quote} className="card-elevated-hover p-7 flex gap-4">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="h-14 w-14 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-sm text-muted-foreground">“{t.quote}”</p>
                      <p className="mt-4 text-sm font-semibold text-foreground">{t.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ (band inside the canvas) */}
          <section className="section-spacing-sm">
            <div className="border-y border-border/60 bg-muted/20">
              <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
                <span className="section-badge">FAQ</span>
                <h2>Questions (answered clearly)</h2>

                <div className="mt-10 max-w-3xl">
                  <div className="card-elevated p-2 md:p-3">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="a">
                        <AccordionTrigger>How fast can I register a company in Bahrain?</AccordionTrigger>
                        <AccordionContent>
                          Many setups can be completed in roughly 3–7 business days, depending on activities, approvals,
                          and documents.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="b">
                        <AccordionTrigger>Can foreigners own 100% of a Bahrain company?</AccordionTrigger>
                        <AccordionContent>
                          Yes—many activities allow 100% foreign ownership. We’ll confirm eligibility based on your
                          activity and structure.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="c">
                        <AccordionTrigger>What documents do I need?</AccordionTrigger>
                        <AccordionContent>
                          It depends on the structure and shareholders. After your call, we’ll share a clear document
                          checklist tailored to you.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="d">
                        <AccordionTrigger>Is the consultation really free?</AccordionTrigger>
                        <AccordionContent>
                          Yes—30 minutes, no obligation. The goal is to give you clarity on cost, timeline, and next
                          steps.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="e">
                        <AccordionTrigger>Do you support MOIC/LMRA procedures?</AccordionTrigger>
                        <AccordionContent>
                          We guide you through MOIC/LMRA requirements and related compliance steps as part of the setup
                          plan.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="section-spacing-sm">
            <div className="container mx-auto px-4 md:px-6">
              <div className="relative overflow-hidden card-elevated p-8 md:p-10">
                <div aria-hidden className="absolute inset-0 overlay-gold-radial-center" />
                <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Ready to start?</h2>
                    <p className="mt-3">Book your free consultation or contact us now—everything stays on this page.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button size="lg" onClick={() => scrollToId("book")}>
                      Book Free Consultation
                    </Button>
                    <Button variant="outline" size="default" asChild>
                      <a href="https://wa.me/97317008888">
                        <MessageCircle className="mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                    <Button variant="outline" size="default" asChild>
                      <a href="tel:+97317008888">
                        <Phone className="mr-2" />
                        Call
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <LandingFooter />
      </div>
    </div>
  );
}

