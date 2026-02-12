import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KeylinkLogo } from "@/components/brand/KeylinkLogo";

type LandingHeaderProps = {
  onLogoClick?: () => void;
};

export function LandingHeader({ onLogoClick }: LandingHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <button
          type="button"
          onClick={onLogoClick}
          className="inline-flex items-center"
          aria-label="Scroll to top"
        >
          <KeylinkLogo className="h-8 w-auto md:h-9" />
        </button>

        <div className="flex items-center gap-2">
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
