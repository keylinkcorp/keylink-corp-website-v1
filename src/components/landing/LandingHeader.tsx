import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KeylinkLogo } from "@/components/brand/KeylinkLogo";
import { cn } from "@/lib/utils";

type LandingHeaderProps = {
  onLogoClick?: () => void;
  /** If true, removes the bottom border (opt-in per page). */
  borderless?: boolean;
};

export function LandingHeader({ onLogoClick, borderless = false }: LandingHeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-background/70 backdrop-blur-xl",
        borderless ? "border-b-0" : "border-b border-border/60",
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
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
              <Phone className="mr-2" />
              Call
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href="https://wa.me/97317008888">
              <MessageCircle className="mr-2" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
