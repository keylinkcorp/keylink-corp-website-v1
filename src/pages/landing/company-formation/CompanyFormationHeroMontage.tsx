import { motion } from "framer-motion";
import { Check, Clock, FileText, MessageCircle, Phone, Shield, Sparkles, Users } from "lucide-react";

import { Button } from "@/components/ui/button";

import heroImage from "@/assets/formation-hero-professional.jpg";

type CompanyFormationHeroMontageProps = {
  onBookClick: () => void;
};

export function CompanyFormationHeroMontage({ onBookClick }: CompanyFormationHeroMontageProps) {
  return (
    <section className="relative overflow-hidden noise-texture">
      {/* Ambient background */}
      <div aria-hidden className="absolute inset-0 mesh-gradient-gold" />
      <div aria-hidden className="floating-orb floating-orb-gold animate-float-pulse -top-24 -left-24 h-[320px] w-[320px]" />
      <div aria-hidden className="floating-orb floating-orb-navy animate-float-slow -bottom-24 -right-24 h-[380px] w-[380px]" />

      <div className="relative container mx-auto px-4 md:px-6 pt-14 md:pt-20 pb-12 md:pb-16">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Copy */}
          <div className="lg:col-span-6">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <p className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-5">
                <Sparkles className="h-4 w-4 text-accent" />
                Google Ads Offer • Free 30‑minute consultation
              </p>

              <h1 className="text-balance">
                Company Formation in Bahrain
                <span className="text-accent"> (2026)</span>
              </h1>

              <p className="mt-5 lead max-w-xl">
                A premium, clear setup experience—100% foreign ownership guidance, transparent costs, and a realistic
                timeline.
              </p>

              <ul className="mt-7 space-y-3 text-sm">
                {[
                  { icon: Check, text: "3–7 business days (typical) for many setups" },
                  { icon: Shield, text: "MOIC/LMRA guidance and compliance support" },
                  { icon: FileText, text: "Transparent checklist + clear next steps" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-foreground/90">
                    <item.icon className="mt-0.5 h-4 w-4 text-accent" />
                    {item.text}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Button size="lg" onClick={onBookClick}>
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

              <p className="mt-4 text-xs text-muted-foreground">
                Free • No obligation • You’ll get a cost breakdown + document checklist
              </p>
            </motion.div>
          </div>

          {/* Montage */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Main */}
              <motion.div
                className="relative rounded-3xl overflow-hidden border bg-card shadow-[0_30px_80px_-40px_hsl(var(--navy)/0.35)] hover-zoom-glow"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.05 }}
              >
                <img
                  src={heroImage}
                  alt="Business consultation for company formation in Bahrain"
                  className="w-full h-[340px] md:h-[460px] object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 overlay-navy-vertical" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="glass-card-light p-3 md:p-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-accent" />
                      <span className="text-sm text-foreground font-medium">Free 30‑minute call • Google Meet</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Same‑page booking</span>
                  </div>
                </div>
              </motion.div>

              {/* Offer Spec (replaces secondary photo) */}
              <motion.div
                className="hidden md:block absolute -left-10 bottom-10 w-[240px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2 }}
              >
                <div className="rounded-2xl overflow-hidden border bg-card shadow-[0_18px_50px_-30px_hsl(var(--navy)/0.35)] hover-zoom-glow">
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold text-accent">Offer</p>
                        <p className="mt-1 text-lg font-bold tracking-tight text-foreground">From BHD 750</p>
                        <p className="text-[11px] text-muted-foreground">+ government fees</p>
                      </div>
                      <div className="h-9 w-9 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Clock className="h-4 w-4 text-accent" />
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-start gap-2 text-[12px] text-foreground/90">
                        <Clock className="mt-0.5 h-3.5 w-3.5 text-accent" />
                        <span>3–7 business days typical</span>
                      </div>
                      <div className="flex items-start gap-2 text-[12px] text-foreground/90">
                        <Users className="mt-0.5 h-3.5 w-3.5 text-accent" />
                        <span>100% foreign ownership options</span>
                      </div>
                      <div className="flex items-start gap-2 text-[12px] text-foreground/90">
                        <FileText className="mt-0.5 h-3.5 w-3.5 text-accent" />
                        <span>Checklist after the call</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Proof (replaces secondary photo) */}
              <motion.div
                className="hidden md:block absolute -right-10 top-10 w-[240px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.28 }}
              >
                <div className="rounded-2xl overflow-hidden border bg-card shadow-[0_18px_50px_-30px_hsl(var(--navy)/0.35)]">
                  <div className="p-4">
                    <p className="text-xs font-semibold text-muted-foreground">Trusted by founders worldwide</p>
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-muted/30 border border-border/60 p-3">
                        <p className="text-2xl font-extrabold tracking-tight text-foreground">500+</p>
                        <p className="text-[11px] text-muted-foreground">Businesses supported</p>
                      </div>
                      <div className="rounded-xl bg-muted/30 border border-border/60 p-3">
                        <p className="text-2xl font-extrabold tracking-tight text-foreground">40+</p>
                        <p className="text-[11px] text-muted-foreground">Countries served</p>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-2 text-[12px] text-foreground/90">
                      <Sparkles className="h-3.5 w-3.5 text-accent" />
                      <span>Fast response on WhatsApp</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
