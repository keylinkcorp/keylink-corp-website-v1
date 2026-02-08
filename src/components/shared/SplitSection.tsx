import type React from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { EditorialImage } from "@/components/shared/EditorialImage";
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
  /** Layout mode: split (two-column) or stacked (image full-width on top, content below). */
  layout?: "split" | "stacked";
  imagePosition?: "left" | "right";
  variant?: "default" | "subtle";
  /** Decorative overlay pattern behind the section (design-system consistent). */
  backgroundVariant?: SectionOverlayVariant;
  overlayOpacity?: number;
  overlayMasked?: boolean;
  imageRatio?: number;
  imageClassName?: string;
  /** Use consistent editorial image styling (default true). */
  imageTreatment?: "editorial" | "none";
  imageOverlayStrength?: number;
  /** Only used when layout="stacked". */
  stackedImageHeightClassName?: string;
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
  layout = "split",
  imagePosition = "right",
  variant = "default",
  backgroundVariant,
  overlayOpacity,
  overlayMasked,
  imageRatio = 16 / 9,
  imageClassName,
  imageTreatment = "editorial",
  imageOverlayStrength,
  stackedImageHeightClassName =
    "h-[32vh] sm:h-[30vh] md:h-[25vh] min-h-[220px] md:min-h-[240px]",
}: SplitSectionProps) {
  const isSubtle = variant === "subtle";
  const resolvedOverlay: SectionOverlayVariant =
    backgroundVariant ?? (isSubtle ? "ibelick-lines" : "ibelick-soft");
  const isCenter = align === "center";
  const headingClass = cn(
    "text-balance",
    headerSize === "compact" ? "text-2xl md:text-3xl" : ""
  );

  const badgeClassName = "section-badge";
  const useEditorialImage = imageTreatment !== "none";

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
        {layout === "stacked" ? (
            <div className="max-w-6xl mx-auto">
              <div className={cn(imageClassName)}>
                {useEditorialImage ? (
                  <div className={stackedImageHeightClassName}>
                    <EditorialImage
                      src={imageSrc}
                      alt={imageAlt}
                      ratio={undefined}
                      overlayStrength={imageOverlayStrength}
                      className={cn("h-full", "w-full")}
                      imgClassName="h-full"
                    />
                  </div>
                ) : (
                  <div className={cn("card-elevated overflow-hidden", stackedImageHeightClassName)}>
                    <img
                      src={imageSrc}
                      alt={imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
              </div>
              {!hideImageCaption ? (
                <div className="mt-3 text-xs text-muted-foreground">
                  No logos, no watermarks — images are illustrative.
                </div>
              ) : null}

            <div className="mt-8">
              <header className={cn("mb-8 md:mb-10", isCenter ? "text-center" : "text-left")}>
                {badge ? (
                  <p className={badgeClassName}>{badge}</p>
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
          </div>
        ) : (
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-12 items-start">
            <div
              className={cn(
                "lg:col-span-6",
                imagePosition === "left" ? "lg:order-2" : "lg:order-1",
              )}
            >
              <header className={cn("mb-8 md:mb-10", isCenter ? "text-center" : "text-left")}>
                {badge ? (
                  <p className={badgeClassName}>{badge}</p>
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
              <div className={cn(imageClassName)}>
                {useEditorialImage ? (
                  <EditorialImage
                    src={imageSrc}
                    alt={imageAlt}
                    ratio={imageRatio}
                    overlayStrength={imageOverlayStrength}
                  />
                ) : (
                  <div className={cn("card-elevated overflow-hidden")}> 
                    <AspectRatio ratio={imageRatio}>
                      <img
                        src={imageSrc}
                        alt={imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                )}
              </div>
              {!hideImageCaption ? (
                <div className="mt-3 text-xs text-muted-foreground">
                  No logos, no watermarks — images are illustrative.
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

