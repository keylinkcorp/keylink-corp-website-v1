import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KeylinkLogo } from "@/components/brand/KeylinkLogo";
import { cn } from "@/lib/utils";

type LandingHeaderProps = {
  onLogoClick?: () => void;
  /** If true, removes the bottom border (opt-in per page). */
  borderless?: boolean;
  /**
   * Layout mode.
   * - "full": background/content span full width (current default).
   * - "framed": background/content sit in a max-w frame with side borders,
   *   while the bottom border line remains full-bleed.
   */
  layout?: "full" | "framed";
};

export function LandingHeader({
  onLogoClick,
  borderless = false,
  layout = "full",
}: LandingHeaderProps) {
  const isFramed = layout === "framed";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        borderless ? "border-b-0" : "border-b border-border/60",
        // In framed mode, the header backdrop/background should live inside the frame.
        isFramed ? "bg-transparent" : "bg-background/70 backdrop-blur-xl",
      )}
    >
      <div
        className={cn(
          isFramed
            ? "mx-auto max-w-[1120px] md:border-x md:border-border/60 bg-background/70 backdrop-blur-xl"
            : "w-full",
        )}
      >
        <div
          className={cn(
            "flex h-20 items-center justify-between",
            isFramed ? "px-4 md:px-6" : "container mx-auto px-4 md:px-6",
          )}
        >
          <button
            type="button"
            onClick={onLogoClick}
            className="inline-flex items-center"
            aria-label="Scroll to top"
          >
            <KeylinkLogo className="h-11 w-auto md:h-14" />
          </button>

          <div className="hidden items-center gap-2 md:flex">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+97317008888">
                <Phone className="mr-2 h-[22px] w-[22px]" />
                Call
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href="https://wa.me/97317008888">
                <MessageCircle className="mr-2 h-[22px] w-[22px]" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
