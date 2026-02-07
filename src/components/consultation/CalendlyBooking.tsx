import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Business structure advice tailored to your goals",
  "Transparent cost breakdown with no hidden fees",
  "Realistic timeline estimate for your setup",
  "Complete document checklist to get started",
  "Direct Q&A with our business setup experts",
];

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+973 1700 8888", href: "tel:+97317008888" },
  { icon: Mail, label: "Email", value: "info@keylinkcorp.com", href: "mailto:info@keylinkcorp.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "+973 1700 8888", href: "https://wa.me/97317008888" },
];

type CalendlyBookingProps = {
  /** Defaults to Keylink free consultation Calendly link */
  calendlyUrl?: string;
  /** Widget height in px (default 700) */
  height?: number;
  /** Optional section id for on-page scrolling (e.g. "book") */
  sectionId?: string;
};

export function CalendlyBooking({
  calendlyUrl = "https://calendly.com/keylinkcorp/free-consultation-google-meet?hide_gdpr_banner=1",
  height = 700,
  sectionId,
}: CalendlyBookingProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id={sectionId} className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Calendly Widget - Takes 2 columns */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-background rounded-2xl shadow-lg border border-border/50 overflow-hidden">
              <div
                className="calendly-inline-widget"
                data-url={calendlyUrl}
                style={{ minWidth: "320px", height: `${height}px` }}
              />
            </div>
          </motion.div>

          {/* Info Panel - Takes 1 column */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* What You'll Get Card */}
            <div className="bg-background rounded-2xl shadow-lg border border-border/50 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-accent" />
                </span>
                What You'll Get
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Details Card */}
            <div className="bg-primary rounded-2xl shadow-lg p-6 text-primary-foreground">
              <h3 className="text-lg font-semibold mb-4">Prefer to Talk Now?</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-3 text-primary-foreground/90 hover:text-accent transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <contact.icon className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-xs text-primary-foreground/60">{contact.label}</p>
                      <p className="font-medium">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-6 pt-6 border-t border-primary-foreground/10">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">Business Hours</span>
                </div>
                <p className="text-sm text-primary-foreground/70">Sunday - Thursday: 8:00 AM - 5:00 PM</p>
              </div>

              {/* Location */}
              <div className="mt-4 pt-4 border-t border-primary-foreground/10">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">Our Office</span>
                </div>
                <p className="text-sm text-primary-foreground/70">
                  Sanabis Exhibition Tower, Office 601
                  <br />
                  Manama, Kingdom of Bahrain
                </p>
              </div>

              <Button className="w-full mt-6 bg-accent hover:bg-accent/90 text-primary" asChild>
                <a href="https://wa.me/97317008888">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

