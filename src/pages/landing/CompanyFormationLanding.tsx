import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Check, Clock, FileText, Phone, Shield, MessageCircle, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CalendlyBooking } from "@/components/consultation/CalendlyBooking";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { LandingFooter } from "@/components/landing/LandingFooter";

import heroImage from "@/assets/formation-hero-professional.jpg";
import processImage from "@/assets/formation-process-professional.jpg";
import consultantImage from "@/assets/formation-consultant.webp";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

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
  const calendlyUrl = useMemo(() => {
    if (typeof window === "undefined") return CALENDLY_BASE_URL;
    return mergeQueryParams(CALENDLY_BASE_URL, window.location.search);
  }, []);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Company Formation in Bahrain 2026 | Free Consultation";

    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") ?? null;
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Company formation in Bahrain in 3–7 days. 100% foreign ownership. Transparent pricing. Book a free 30‑minute consultation with Keylink."
      );
    }

    // Robots: noindex
    let robots = document.querySelector('meta[name="robots"][data-lp="company-formation"]') as HTMLMetaElement | null;
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      robots.setAttribute("data-lp", "company-formation");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, follow");

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"][data-lp="company-formation"]') as HTMLLinkElement | null;
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
    <div className="min-h-screen bg-background">
      <LandingHeader onLogoClick={() => scrollToId("top")} />

      <main id="top" className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Sparkles className="h-4 w-4" />
                    Google Ads Offer • Free 30‑minute consultation
                  </p>
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                    Company Formation in Bahrain (2026)
                  </h1>
                  <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                    Set up with 100% foreign ownership support, clear costs, and a realistic timeline—then book your
                    consultation on this page.
                  </p>

                  <ul className="mt-6 space-y-3 text-sm">
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 text-accent" />
                      3–7 business days (typical) for many setups
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <Shield className="mt-0.5 h-4 w-4 text-accent" />
                      MOIC/LMRA guidance and compliance support
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <FileText className="mt-0.5 h-4 w-4 text-accent" />
                      Transparent checklist + clear next steps
                    </li>
                  </ul>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <Button size="lg" onClick={() => scrollToId("book")}>Book Free Consultation</Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="https://wa.me/97317008888">
                        <MessageCircle className="mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="tel:+97317008888">
                        <Phone className="mr-2" />
                        Call
                      </a>
                    </Button>
                  </div>

                  <p className="mt-4 text-xs text-muted-foreground">
                    Free • No obligation • You’ll get a cost breakdown + document checklist
                  </p>
                </motion.div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border bg-muted/20">
                  <img
                    src={heroImage}
                    alt="Business consultation for company formation in Bahrain"
                    className="w-full h-[320px] md:h-[420px] object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur px-4 py-2 border">
                      <Clock className="h-4 w-4 text-accent" />
                      <span className="text-sm text-foreground">Free 30‑minute call • Google Meet</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust bar */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { k: "500+", v: "Businesses supported" },
                { k: "40+", v: "Countries served" },
                { k: "3–7", v: "Days typical" },
                { k: "100%", v: "Foreign ownership options" },
              ].map((item) => (
                <div key={item.v} className="rounded-xl border bg-card p-4">
                  <div className="text-2xl font-bold text-foreground">{item.k}</div>
                  <div className="text-sm text-muted-foreground">{item.v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-14 md:py-18">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">How it works</h2>
                <p className="mt-3 text-muted-foreground">
                  A simple, conversion-focused flow: get clarity first, then decide next steps.
                </p>

                <div className="mt-6 space-y-4">
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
                    <div key={step.title} className="rounded-xl border bg-card p-5">
                      <div className="text-sm text-muted-foreground">Step {idx + 1}</div>
                      <div className="mt-1 font-semibold text-foreground">{step.title}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{step.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-2xl overflow-hidden border bg-muted/20">
                  <img
                    src={processImage}
                    alt="Company formation process documents and consultation"
                    className="w-full h-[320px] md:h-[420px] object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONSULTATION VALUE */}
        <section className="py-14 md:py-18 bg-muted/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                  What you get in the consultation
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Practical guidance and a clear plan—so you can move fast and avoid surprises.
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  {[
                    "Business structure advice tailored to your goals",
                    "Transparent cost breakdown (no hidden fees)",
                    "Realistic timeline estimate for your setup",
                    "Complete document checklist to get started",
                    "Direct Q&A with our business setup experts",
                    "Next-step plan after the call (simple + actionable)",
                  ].map((b) => (
                    <div key={b} className="rounded-xl border bg-card p-4 flex gap-3">
                      <Check className="h-4 w-4 text-accent mt-0.5" />
                      <p className="text-sm text-muted-foreground">{b}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border bg-muted/20">
                  <img
                    src={consultantImage}
                    alt="Keylink consultant helping with Bahrain company formation"
                    className="w-full h-[260px] md:h-[320px] object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="mt-4 rounded-2xl border bg-card p-6">
                  <div className="font-semibold text-foreground">Prefer to talk now?</div>
                  <p className="mt-1 text-sm text-muted-foreground">Sunday–Thursday • 8:00 AM – 5:00 PM</p>
                  <div className="mt-4 flex flex-col gap-3">
                    <Button asChild>
                      <a href="https://wa.me/97317008888">
                        <MessageCircle className="mr-2" />
                        Chat on WhatsApp
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="tel:+97317008888">
                        <Phone className="mr-2" />
                        Call +973 1700 8888
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOOKING */}
        <div id="book" />
        <section aria-label="Book free consultation">
          <div className="container mx-auto px-4 md:px-6 pt-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Book your free consultation</h2>
            <p className="mt-3 text-muted-foreground">Free, 30 minutes, no obligation—book directly below.</p>
          </div>
          <CalendlyBooking calendlyUrl={calendlyUrl} sectionId="book" />
        </section>

        {/* TESTIMONIALS */}
        <section className="py-14 md:py-18">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Client feedback</h2>
            <p className="mt-3 text-muted-foreground">A few recent outcomes—kept short for ad traffic.</p>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {[{
                name: "Client testimonial",
                quote:
                  "Clear process, fast turnaround, and a transparent cost breakdown. Booking was easy and the checklist saved us time.",
                img: testimonial1,
              },{
                name: "Client testimonial",
                quote:
                  "They explained the best structure for our business and guided us through requirements step-by-step. Very responsive team.",
                img: testimonial2,
              }].map((t) => (
                <div key={t.quote} className="rounded-2xl border bg-card p-6 flex gap-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="h-14 w-14 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-sm text-muted-foreground">“{t.quote}”</p>
                    <p className="mt-3 text-sm font-semibold text-foreground">{t.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 md:py-18 bg-muted/20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">FAQ</h2>
            <div className="mt-8 max-w-3xl">
              <Accordion type="single" collapsible>
                <AccordionItem value="a">
                  <AccordionTrigger>How fast can I register a company in Bahrain?</AccordionTrigger>
                  <AccordionContent>
                    Many setups can be completed in roughly 3–7 business days, depending on activities, approvals, and documents.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="b">
                  <AccordionTrigger>Can foreigners own 100% of a Bahrain company?</AccordionTrigger>
                  <AccordionContent>
                    Yes—many activities allow 100% foreign ownership. We’ll confirm eligibility based on your activity and structure.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="c">
                  <AccordionTrigger>What documents do I need?</AccordionTrigger>
                  <AccordionContent>
                    It depends on the structure and shareholders. After your call, we’ll share a clear document checklist tailored to you.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="d">
                  <AccordionTrigger>Is the consultation really free?</AccordionTrigger>
                  <AccordionContent>
                    Yes—30 minutes, no obligation. The goal is to give you clarity on cost, timeline, and next steps.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="e">
                  <AccordionTrigger>Do you support MOIC/LMRA procedures?</AccordionTrigger>
                  <AccordionContent>
                    We guide you through MOIC/LMRA requirements and related compliance steps as part of the setup plan.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-14 md:py-18">
          <div className="container mx-auto px-4 md:px-6">
            <div className="rounded-2xl border bg-card p-8 md:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Ready to start?</h2>
                <p className="mt-2 text-muted-foreground">
                  Book your free consultation or contact us now—everything stays on this page.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" onClick={() => scrollToId("book")}>Book Free Consultation</Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://wa.me/97317008888">
                    <MessageCircle className="mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+97317008888">
                    <Phone className="mr-2" />
                    Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}
