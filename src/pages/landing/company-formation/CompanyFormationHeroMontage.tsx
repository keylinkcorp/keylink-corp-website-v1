import {
  Check,
  Clock,
  FileText,
  MessageCircle,
  Phone,
  Shield,
  Sparkles,
  Play,
} from "lucide-react";

import { HeroReviewStrip } from "@/components/shared/HeroReviewStrip";
import { EditorialImage } from "@/components/shared/EditorialImage";
import { SectionBackgroundOverlay } from "@/components/shared/SectionBackgroundOverlay";
import { Button } from "@/components/ui/button";

import heroImage from "@/assets/formation-hero-professional-portrait.jpg";

type CompanyFormationHeroMontageProps = {
  onBookClick: () => void;
  /** Optional overrides to reuse the same hero montage for adjacent landing pages. */
  badgeText?: string;
  title?: string;
  titleSuffix?: string;
  lead?: string;
  bullets?: Array<{ icon: typeof Check; text: string }>;
  primaryCtaLabel?: string;
  /** If provided, renders a phone CTA button next to the primary CTA. */
  phoneCta?: { href: string; label: string };
  /** If true, show WhatsApp CTA button. Defaults to true (original LP behavior). */
  showWhatsApp?: boolean;
  /** Optional short social proof line shown under the review strip. */
  socialProofLine?: string;

  /** If true, show a centered mock media panel beneath the hero. Defaults to false. */
  showMockPanel?: boolean;
  /** Optional CTA displayed in the mock panel header row. */
  mockPanelCta?: { label: string; onClick: () => void };
  /** Optional image shown in the mock panel. */
  mockPanelImageSrc?: string;
  mockPanelImageAlt?: string;
  /** Optional short line shown above the mock panel (kept minimal). */
  mockPanelEyebrow?: string;
};

export function CompanyFormationHeroMontage({
  onBookClick,
  badgeText = "Google Ads Offer • Free 30‑minute consultation",
  title = "Company Formation in Bahrain",
  titleSuffix = " (2026)",
  lead =
    "A premium, clear setup experience—100% foreign ownership guidance, transparent costs, and a realistic timeline.",
  bullets = [
    { icon: Check, text: "3–7 business days (typical) for many setups" },
    { icon: Shield, text: "MOIC/LMRA guidance and compliance support" },
    { icon: FileText, text: "Transparent checklist + clear next steps" },
  ],
  primaryCtaLabel = "Get started",
  phoneCta,
  showWhatsApp = true,
  socialProofLine,
  showMockPanel = false,
  mockPanelCta,
  mockPanelImageSrc,
  mockPanelImageAlt = "Preview of the company formation checklist and calculator",
  mockPanelEyebrow = "Preview",
}: CompanyFormationHeroMontageProps) {
  return (
    <section className="relative overflow-hidden">
      {/* MagicUI-inspired light background layers */}
      <div aria-hidden className="absolute inset-0 bg-secondary/50" />
      <div aria-hidden className="absolute inset-0 mesh-gradient-gold opacity-60" />
      <SectionBackgroundOverlay
        variant="grid-lines"
        opacity={0.35}
        masked
        className="mix-blend-multiply"
      />
      <div
        aria-hidden
        className="absolute -top-24 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--gold) / 0.18) 0%, transparent 70%)" }}
      />

      <div className="relative container mx-auto px-4 md:px-6 pt-10 md:pt-14 pb-10 md:pb-12">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Copy */}
          <div className="lg:col-span-6">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 backdrop-blur-sm px-3 py-1 text-xs text-muted-foreground tracking-tight">
                <Sparkles className="h-4 w-4 text-accent" />
                {badgeText}
              </p>

              <h1 className="lp-h1 lp-hero-title text-balance">
                {title}
                {titleSuffix ? <span className="text-accent">{titleSuffix}</span> : null}
              </h1>

              <p className="mt-5 lp-lead max-w-[56ch]">{lead}</p>

              <ul className="mt-7 space-y-3 text-sm">
                {bullets.map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-foreground/90">
                    <item.icon className="mt-0.5 h-4 w-4 text-accent" />
                    {item.text}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
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

              <HeroReviewStrip className="mt-5" />

              {socialProofLine ? <p className="mt-2 text-xs text-muted-foreground">{socialProofLine}</p> : null}

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

        {showMockPanel ? (
          <div className="mt-10 md:mt-12">
            <div className="mx-auto max-w-4xl">
              <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/70 backdrop-blur-sm">
                {/* inner highlight */}
                <div aria-hidden className="absolute inset-0 ring-1 ring-inset ring-border/50" />
                <div aria-hidden className="absolute inset-0 noise-texture opacity-[0.35]" />

                <div className="relative p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <p className="text-xs text-muted-foreground">{mockPanelEyebrow}</p>
                      <p className="mt-1 text-sm font-semibold text-foreground">
                        See how the checklist + calculator works
                      </p>
                    </div>

                    {mockPanelCta ? (
                      <Button variant="outline" size="sm" onClick={mockPanelCta.onClick}>
                        {mockPanelCta.label}
                      </Button>
                    ) : null}
                  </div>

                  <div className="mt-4">
                    {mockPanelImageSrc ? (
                      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card">
                        <EditorialImage
                          src={mockPanelImageSrc}
                          alt={mockPanelImageAlt}
                          ratio={16 / 10}
                          overlayStrength={0.35}
                          imgClassName="object-[center_40%]"
                        />

                        {/* play decoration */}
                        <div
                          aria-hidden
                          className="pointer-events-none absolute inset-0 flex items-center justify-center"
                        >
                          <div className="rounded-full border border-border/60 bg-background/75 backdrop-blur-sm p-4 shadow-[0_14px_50px_hsl(var(--navy)/0.10)]">
                            <Play className="h-6 w-6 text-accent" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-2xl border border-border/60 bg-muted/20 p-10 text-center text-sm text-muted-foreground">
                        Media preview
                      </div>
                    )}
                  </div>

                  <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
                    <p className="text-xs text-muted-foreground">
                      Static preview (no video) • Fast loading
                    </p>
                    <p className="text-xs text-muted-foreground">Scroll-friendly • No popups</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

