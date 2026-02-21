import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type HeroReviewStripProps = {
  align?: "left" | "center";
  className?: string;
};

const googleAvatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/67.jpg",
];

const trustpilotAvatars = [
  "https://randomuser.me/api/portraits/women/28.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/women/63.jpg",
];

export function HeroReviewStrip({ align = "left", className }: HeroReviewStripProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-start sm:items-center gap-6",
        isCenter ? "justify-center" : "justify-start",
        className,
      )}
      aria-label="Customer reviews summary"
    >
      {/* Google Reviews */}
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {googleAvatars.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={idx === 0 ? "Google reviewer avatars" : "Google reviewer"}
              className={cn(
                "h-9 w-9 rounded-full object-cover",
                "border-2 border-background",
                "ring-1 ring-border/50 shadow-sm",
              )}
              loading="lazy"
            />
          ))}
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-[22px] w-[22px] fill-gold text-gold" aria-hidden="true" />
            ))}
            <span className="text-sm font-semibold text-primary ml-1.5">4.9</span>
          </div>
          <span className="text-xs text-muted-foreground">Google Reviews</span>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden sm:block h-10 w-px bg-border" aria-hidden="true" />

      {/* Trustpilot */}
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {trustpilotAvatars.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={idx === 0 ? "Trustpilot reviewer avatars" : "Trustpilot reviewer"}
              className={cn(
                "h-9 w-9 rounded-full object-cover",
                "border-2 border-background",
                "ring-1 ring-border/50 shadow-sm",
              )}
              loading="lazy"
            />
          ))}
        </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-[22px] w-[22px] fill-trustpilot text-trustpilot"
                  aria-hidden="true"
                />
              ))}
              <span className="text-sm font-semibold text-primary ml-1.5">4.8</span>
            </div>
          <span className="text-xs text-muted-foreground">Trustpilot</span>
        </div>
      </div>
    </div>
  );
}
