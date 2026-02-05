import type React from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  SectionBackgroundOverlay,
  type SectionOverlayVariant,
} from "@/components/shared/SectionBackgroundOverlay";

type SplitSectionProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  /** Extra content below subtitle (cards, lists, etc.) */
  children?: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  variant?: "default" | "subtle";
  /** Decorative overlay pattern behind the section (design-system consistent). */
  backgroundVariant?: SectionOverlayVariant;
  overlayOpacity?: number;
  overlayMasked?: boolean;
  imageRatio?: number;
  imageClassName?: string;
};

export function SplitSection({
  badge,
  title,
  subtitle,
  children,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  variant = "default",
  backgroundVariant,
  overlayOpacity,
  overlayMasked,
  imageRatio = 16 / 9,
  imageClassName,
}: SplitSectionProps) {
  const isSubtle = variant === "subtle";
  const resolvedOverlay: SectionOverlayVariant =
    backgroundVariant ?? (isSubtle ? "grid-lines" : "radial");

  return (
    <section
      className={cn(
        "section-spacing relative overflow-hidden",
        isSubtle ? "bg-secondary/40" : "bg-background",
      )}
    >
      <SectionBackgroundOverlay
        variant={resolvedOverlay}
        opacity={overlayOpacity}
        masked={overlayMasked}
      />
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-12 items-start">
          <div
            className={cn(
              "lg:col-span-6",
              imagePosition === "left" ? "lg:order-2" : "lg:order-1",
            )}
          >
            <header className="mb-8 md:mb-10">
              {badge ? (
                <p className="text-sm font-medium text-accent tracking-wide uppercase">{badge}</p>
              ) : null}
              <h2 className={cn(badge ? "mt-3" : "", "text-balance")}>{title}</h2>
              {subtitle ? (
                <p className="mt-4 text-lg leading-relaxed max-w-3xl">{subtitle}</p>
              ) : null}
            </header>

            {children}
          </div>

          <div
            className={cn(
              "lg:col-span-6",
              imagePosition === "left" ? "lg:order-1" : "lg:order-2",
            )}
          >
            <div className={cn("card-elevated overflow-hidden", imageClassName)}>
              <AspectRatio ratio={imageRatio}>
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </AspectRatio>
            </div>
            <div className="mt-3 text-xs text-muted-foreground">
              No logos, no watermarks — images are illustrative.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

