import { Check, MessageCircle, Phone, Sparkles, type LucideIcon } from "lucide-react";

import { HeroReviewStrip } from "@/components/shared/HeroReviewStrip";
import { Button } from "@/components/ui/button";

type BulletItem = { icon: LucideIcon; text: string };

export type CompanyFormationHeroCenteredProps = {
  onBookClick: () => void;
  /** Optional overrides to reuse the same hero for adjacent landing pages. */
  badgeText?: string;
  title?: string;
  titleSuffix?: string;
  lead?: string;
  bullets?: BulletItem[];
  primaryCtaLabel?: string;
  /** If provided, renders a phone CTA button next to the primary CTA. */
  phoneCta?: { href: string; label: string };
  /** If true, show WhatsApp CTA button. Defaults to true (original LP behavior). */
  showWhatsApp?: boolean;
  /** Optional short social proof line shown under the review strip. */
  socialProofLine?: string;
};

export function CompanyFormationHeroCentered({
  onBookClick,
  badgeText = "Google Ads Offer • Free 30‑minute consultation",
  title = "Company Formation in Bahrain",
  titleSuffix = " (2026)",
  lead =
    "A premium, clear setup experience—100% foreign ownership guidance, transparent costs, and a realistic timeline.",
  bullets = [
    { icon: Check, text: "3–7 business days (typical) for many setups" },
    { icon: Check, text: "MOIC/LMRA guidance and compliance support" },
    { icon: Check, text: "Transparent checklist + clear next steps" },
  ],
  primaryCtaLabel = "Get started",
  phoneCta,
  showWhatsApp = true,
  socialProofLine,
}: CompanyFormationHeroCenteredProps) {
  return (
    <section aria-label="Company formation hero" className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-muted/20" />

      <div className="relative container mx-auto px-4 md:px-6 pt-10 md:pt-14 pb-12 md:pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs text-muted-foreground tracking-tight">
            <Sparkles className="h-4 w-4 text-accent" />
            {badgeText}
          </p>

          <h1 className="lp-h1 lp-hero-title mt-5 text-balance">
            {title}
            {titleSuffix ? <span className="text-accent">{titleSuffix}</span> : null}
          </h1>

          <p className="mt-5 lp-lead mx-auto max-w-[56ch]">{lead}</p>

          <ul className="mt-7 grid gap-3 text-sm md:grid-cols-2 md:text-left">
            {bullets.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-start justify-center gap-3 text-foreground/90 md:justify-start"
              >
                <Icon className="mt-0.5 h-4 w-4 text-accent" />
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col items-stretch sm:flex-row sm:items-center sm:justify-center gap-3">
            <Button size="lg" className="w-full sm:w-auto" onClick={onBookClick}>
              {primaryCtaLabel}
            </Button>

            {phoneCta ? (
              <Button variant="outline" size="default" className="w-full sm:w-auto" asChild>
                <a href={phoneCta.href}>
                  <Phone className="mr-2" />
                  {phoneCta.label}
                </a>
              </Button>
            ) : null}

            {showWhatsApp ? (
              <Button variant="outline" size="default" className="w-full sm:w-auto" asChild>
                <a href="https://wa.me/97317008888">
                  <MessageCircle className="mr-2" />
                  WhatsApp
                </a>
              </Button>
            ) : null}
          </div>

          <HeroReviewStrip align="center" className="mt-6" />

          {socialProofLine ? <p className="mt-2 text-xs text-muted-foreground">{socialProofLine}</p> : null}

          <p className="mt-3 text-xs text-muted-foreground">
            Free • No obligation • You’ll get a cost breakdown + document checklist
          </p>
        </div>
      </div>
    </section>
  );
}
