import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, Factory, Ship, Truck } from "lucide-react";
import { Link } from "react-router-dom";

type ZoneRow = {
  zone: string;
  bestFor: string;
  typicalUses: string[];
  notes: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const rows: ZoneRow[] = [
  {
    zone: "BIW (Bahrain Investment Wharf)",
    bestFor: "Port-adjacent logistics & warehousing",
    typicalUses: ["Warehousing", "Distribution", "Import/export"],
    notes: "Good fit when time-to-ship and port access are priorities.",
    href: "/free-zone-in-bahrain/biw",
    icon: Ship,
  },
  {
    zone: "BLZ (Bahrain Logistics Zone)",
    bestFor: "E-commerce & regional distribution",
    typicalUses: ["Fulfillment", "3PL", "Regional hubs"],
    notes: "Best when your model is fast inbound/outbound movement.",
    href: "/free-zone-in-bahrain/blz",
    icon: Truck,
  },
  {
    zone: "BIIP (Bahrain International Investment Park)",
    bestFor: "Manufacturing & industrial operations",
    typicalUses: ["Light manufacturing", "Assembly", "Industrial offices"],
    notes: "Strong fit for industrial licensing and facility planning.",
    href: "/free-zone-in-bahrain/biip",
    icon: Factory,
  },
  {
    zone: "Sitra Industrial Area",
    bestFor: "Heavier industrial activities",
    typicalUses: ["Workshops", "Industrial storage", "Processing"],
    notes: "Often chosen for heavier activity categories and space needs.",
    href: "/free-zone-in-bahrain/sitra",
    icon: BadgeCheck,
  },
];

export function FreeZoneComparison() {
  return (
    <section className="section-spacing bg-secondary/40">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <header className="mb-10 md:mb-12">
            <p className="text-sm font-medium text-accent tracking-wide uppercase">Compare options</p>
            <h2 className="mt-3 text-balance">Which industrial zone fits your activity?</h2>
            <p className="mt-4 text-lg leading-relaxed max-w-3xl">
              Use this as a fast shortlist. Final eligibility depends on your registered activity and required approvals.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            {rows.map((row) => (
              <Card key={row.zone} className="card-elevated-hover">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                      <row.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <CardTitle className="text-lg md:text-xl leading-snug">{row.zone}</CardTitle>
                      <p className="mt-1 text-sm text-muted-foreground">Best for: {row.bestFor}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {row.typicalUses.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed">{row.notes}</p>
                  <Link to={row.href} className="mt-4 inline-flex items-center gap-2 text-accent font-medium hover:underline">
                    Read zone guide
                    <span aria-hidden className="text-accent">→</span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Want a recommendation? Share your activity and space requirement (sqm) and we’ll confirm the fastest compliant
              path.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
