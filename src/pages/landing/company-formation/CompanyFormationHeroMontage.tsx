import {
  Check,
  Clock,
  FileText,
  MessageCircle,
  Phone,
  Shield,
  Sparkles,
} from "lucide-react";

import { HeroReviewStrip } from "@/components/shared/HeroReviewStrip";
import { Button } from "@/components/ui/button";

import heroImage from "@/assets/formation-hero-professional-portrait.jpg";

type CompanyFormationHeroMontageProps = {
  onBookClick: () => void;
};

export function CompanyFormationHeroMontage({ onBookClick }: CompanyFormationHeroMontageProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Calm background (no decorative blobs) */}
      <div aria-hidden className="absolute inset-0 bg-muted/20" />

      <div className="relative container mx-auto px-4 md:px-6 pt-10 md:pt-14 pb-12 md:pb-16">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Copy */}
          <div className="lg:col-span-6">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs text-muted-foreground tracking-tight">
                <Sparkles className="h-4 w-4 text-accent" />
                Google Ads Offer • Free 30‑minute consultation
              </p>

              <h1 className="lp-h1 lp-hero-title text-balance">
                Company Formation in Bahrain
                <span className="text-accent"> (2026)</span>
              </h1>

              <p className="mt-5 lp-lead max-w-[56ch]">
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

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="w-full sm:w-auto" onClick={onBookClick}>
                  Get started
                </Button>

                <Button variant="outline" size="default" className="w-full sm:w-auto" asChild>
                  <a href="https://wa.me/97317008888">
                    <MessageCircle className="mr-2" />
                    WhatsApp
                  </a>
                </Button>

                <Button variant="outline" size="default" className="w-full sm:w-auto" asChild>
                  <a href="tel:+97317008888">
                    <Phone className="mr-2" />
                    Call
                  </a>
                </Button>
              </div>

              <HeroReviewStrip className="mt-5" />

              <p className="mt-3 text-xs text-muted-foreground">
                Free • No obligation • You’ll get a cost breakdown + document checklist
              </p>
            </div>
          </div>

          {/* Montage */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Main */}
              <div className="relative rounded-3xl overflow-hidden lp-card-flat">
                <img
                  src={heroImage}
                  alt="Business consultation for company formation in Bahrain"
                  className="w-full h-[340px] md:h-[460px] object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 overlay-navy-vertical" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="lp-card-flat bg-background/90 backdrop-blur-sm p-3 md:p-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-accent" />
                      <span className="text-sm text-foreground font-medium">Free 30‑minute call • Google Meet</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Same‑page booking</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
