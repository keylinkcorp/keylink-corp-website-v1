import { Check } from "lucide-react";

import { SplitSection } from "@/components/shared/SplitSection";

import whatYouGetImage from "@/assets/company-formation/lp/what-you-get-portrait.jpg";

export function CompanyFormationCallSection() {
  return (
    <SplitSection
      badge="What you get"
      badgeClassName="inline-flex items-center rounded-full border border-border/25 bg-background px-3 py-1 text-xs font-semibold text-foreground/80"
      headerClassName="mb-6 md:mb-7"
      titleTopMarginClassName="mt-2"
      subtitleTopMarginClassName="mt-3"
      title="What happens on the call"
      subtitle="Practical guidance and a clean plan—so you move fast and avoid surprises."
      useLpHeadings
      leadClassName="text-sm sm:text-base text-foreground/75 max-w-xl"
      imageSrc={whatYouGetImage}
      imageAlt="Business consultation reviewing a checklist"
      imagePosition="left"
      variant="default"
      backgroundVariant="ibelick-lines"
      overlayOpacity={0.35}
      overlayMasked
      imageRatio={4 / 3}
      imageTreatment="none"
      imageFrame="flat"
      imageOverlayStrength={0.35}
      imageImgClassName="object-[center_35%]"
    >
      <div className="grid md:grid-cols-2 gap-5 md:gap-6 mt-7">
        {[
          "Business structure advice tailored to your goals",
          "Transparent cost breakdown (no hidden fees)",
          "Realistic timeline estimate for your setup",
          "Complete document checklist to get started",
          "Direct Q&A with our business setup experts",
          "Next-step plan after the call (simple + actionable)",
        ].map((b) => (
          <div
            key={b}
            className="h-full rounded-2xl border border-border/15 bg-background p-5 sm:p-6 flex gap-3 sm:gap-4 items-start"
          >
            <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-border/20 bg-muted/10">
              <Check className="h-4 w-4 text-accent" />
            </span>
            <p className="text-sm leading-relaxed text-foreground/85">{b}</p>
          </div>
        ))}
      </div>
    </SplitSection>
  );
}
