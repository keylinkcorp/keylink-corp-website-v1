import versedag from "@/assets/company-logos/versedag.png";
import cbre from "@/assets/company-logos/cbre.png";
import braxtone from "@/assets/company-logos/braxtone.png";
import alsalam from "@/assets/company-logos/alsalam.jpg";
import incanto from "@/assets/company-logos/incanto.png";
import bfh from "@/assets/company-logos/bfh.jpg";
import isola from "@/assets/company-logos/isola.png";
import tsma from "@/assets/company-logos/tsma.png";
import nimble from "@/assets/company-logos/nimble.png";

const logos = [
  { name: "VersedAG", src: versedag, alt: "VersedAG logo" },
  { name: "CBRE", src: cbre, alt: "CBRE logo" },
  { name: "Braxtone", src: braxtone, alt: "Braxtone logo" },
  { name: "Al Salam", src: alsalam, alt: "Al Salam Bank logo" },
  { name: "Incanto", src: incanto, alt: "Incanto logo" },
  { name: "BFH", src: bfh, alt: "Bahrain Financing House (BFH) logo" },
  { name: "Isola", src: isola, alt: "Isola logo" },
  { name: "TSMA", src: tsma, alt: "TSMA logo" },
  { name: "Nimble", src: nimble, alt: "Nimble logo" },
];

export function CompanyLogosTicker() {
  return (
    <section
      aria-label="Company logos"
      className="relative overflow-hidden border-y border-border/60 bg-secondary/40"
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary/40 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary/40 to-transparent z-10" />

      <div className="relative container mx-auto px-4 md:px-6 py-8">
        <div className="flex items-baseline justify-between gap-6">
          <div>
            <p className="text-xs font-medium text-muted-foreground">Trusted by teams in Bahrain</p>
            <p className="mt-1 text-sm font-semibold text-foreground">Real businesses. Real setups.</p>
          </div>
          <p className="hidden md:block text-xs text-muted-foreground">Logos scroll on hover pause</p>
        </div>

        <div className="mt-5 relative overflow-hidden rounded-2xl border border-border/60 bg-background/70 backdrop-blur-sm">
          <div aria-hidden className="absolute inset-0 ring-1 ring-inset ring-border/50" />
          <div className="relative py-5">
            <div className="flex items-center gap-12 md:gap-16 logo-ticker">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-10 md:h-12"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className="h-7 md:h-8 w-auto object-contain grayscale opacity-60 contrast-125"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cfc_logo_scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-ticker {
          width: max-content;
          animation: cfc_logo_scroll 30s linear infinite;
          will-change: transform;
          padding-inline: 1.25rem;
        }
        .logo-ticker:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .logo-ticker { animation: none; }
        }
      `}</style>
    </section>
  );
}
