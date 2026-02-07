import { motion } from "framer-motion";
import { Check, Clock, FileText, MessageCircle, Phone, Shield, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

import heroImage from "@/assets/formation-hero-professional.jpg";
import processImage from "@/assets/formation-process-professional.jpg";
import consultantImage from "@/assets/formation-consultant.webp";

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
                  <li key={item.text} className="flex items-start gap-3 text-muted-foreground">
                    <item.icon className="mt-0.5 h-4 w-4 text-accent" />
                    {item.text}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Button size="lg" onClick={onBookClick}>
                  Book Free Consultation
                </Button>

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

              {/* Secondary 1 */}
              <motion.div
                aria-hidden
                className="hidden md:block absolute -left-10 bottom-10 w-[220px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2 }}
              >
                <div className="rounded-2xl overflow-hidden border bg-card shadow-[0_18px_50px_-30px_hsl(var(--navy)/0.35)]">
                  <img
                    src={processImage}
                    alt=""
                    className="h-[140px] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-3">
                    <p className="text-xs font-medium text-foreground">Clear process</p>
                    <p className="text-[11px] text-muted-foreground">Steps + checklist included</p>
                  </div>
                </div>
              </motion.div>

              {/* Secondary 2 */}
              <motion.div
                aria-hidden
                className="hidden md:block absolute -right-10 top-10 w-[220px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.28 }}
              >
                <div className="rounded-2xl overflow-hidden border bg-card shadow-[0_18px_50px_-30px_hsl(var(--navy)/0.35)]">
                  <img
                    src={consultantImage}
                    alt=""
                    className="h-[140px] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-3">
                    <p className="text-xs font-medium text-foreground">Expert guidance</p>
                    <p className="text-[11px] text-muted-foreground">Fast answers, fewer surprises</p>
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
