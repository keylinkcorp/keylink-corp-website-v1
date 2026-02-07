import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type LandingHeaderProps = {
  onLogoClick?: () => void;
};

export function LandingHeader({ onLogoClick }: LandingHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <button
          type="button"
          onClick={onLogoClick}
          className="inline-flex items-center gap-2"
          aria-label="Scroll to top"
        >
          <span className="text-xl font-bold text-foreground tracking-tight">Keylink</span>
          <span className="text-xl font-bold text-accent tracking-tight">Corp</span>
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
