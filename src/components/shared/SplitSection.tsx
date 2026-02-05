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
  align?: "left" | "center";
  headerSize?: "default" | "compact";
  leadClassName?: string;
  hideImageCaption?: boolean;
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
  align = "left",
  headerSize = "default",
  leadClassName,
  hideImageCaption = false,
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
  const isCenter = align === "center";
  const headingClass = cn(
    "text-balance",
    headerSize === "compact" ? "text-2xl md:text-3xl" : ""
  );

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
            <header className={cn("mb-8 md:mb-10", isCenter ? "text-center" : "text-left")}>
              {badge ? (
                <p className="text-sm font-medium text-accent tracking-wide uppercase">{badge}</p>
              ) : null}
              <h2 className={cn(badge ? "mt-3" : "", headingClass)}>{title}</h2>
              {subtitle ? (
                <p
                  className={cn(
                    "mt-4 text-lg leading-relaxed max-w-3xl",
                    isCenter ? "mx-auto" : "",
                    leadClassName,
                  )}
                >
                  {subtitle}
                </p>
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
            {!hideImageCaption ? (
              <div className="mt-3 text-xs text-muted-foreground">
                No logos, no watermarks — images are illustrative.
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

