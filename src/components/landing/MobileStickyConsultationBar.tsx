import { Phone, Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";

type MobileStickyConsultationBarProps = {
  onConsultationClick: () => void;
  phoneHref?: string;
  phoneLabel?: string;
};

export function MobileStickyConsultationBar({
  onConsultationClick,
  phoneHref = "tel:+97317008888",
  phoneLabel = "Call now",
}: MobileStickyConsultationBarProps) {
  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-50 border-t border-border/60 bg-background/92 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-3">
        <div className="grid grid-cols-2 gap-3">
          <Button size="lg" className="w-full" onClick={onConsultationClick}>
            <Calendar className="mr-2" />
            Free consultation
          </Button>
          <Button variant="outline" size="lg" className="w-full" asChild>
            <a href={phoneHref}>
              <Phone className="mr-2" />
              {phoneLabel}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
