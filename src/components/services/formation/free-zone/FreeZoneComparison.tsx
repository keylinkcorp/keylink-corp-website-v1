import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, Factory, Ship, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { SplitSection } from "@/components/shared/SplitSection";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

import comparisonImage from "@/assets/free-zone/free-zone-comparison.png";

type ZoneRow = {
  key: "biw" | "blz" | "biip" | "sitra";
  zone: string;
  bestFor: string;
  typicalUses: string[];
  notes: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const rows: ZoneRow[] = [
  {
    key: "biw",
    zone: "BIW (Bahrain Investment Wharf)",
    bestFor: "Port-adjacent logistics & warehousing",
    typicalUses: ["Warehousing", "Distribution", "Import/export"],
    notes: "Good fit when time-to-ship and port access are priorities.",
    href: "/free-zone-in-bahrain/biw",
    icon: Ship,
  },
  {
    key: "blz",
    zone: "BLZ (Bahrain Logistics Zone)",
    bestFor: "E-commerce & regional distribution",
    typicalUses: ["Fulfillment", "3PL", "Regional hubs"],
    notes: "Best when your model is fast inbound/outbound movement.",
    href: "/free-zone-in-bahrain/blz",
    icon: Truck,
  },
  {
    key: "biip",
    zone: "BIIP (Bahrain International Investment Park)",
    bestFor: "Manufacturing & industrial operations",
    typicalUses: ["Light manufacturing", "Assembly", "Industrial offices"],
    notes: "Strong fit for industrial licensing and facility planning.",
    href: "/free-zone-in-bahrain/biip",
    icon: Factory,
  },
  {
    key: "sitra",
    zone: "Sitra Industrial Area",
    bestFor: "Heavier industrial activities",
    typicalUses: ["Workshops", "Industrial storage", "Processing"],
    notes: "Often chosen for heavier activity categories and space needs.",
    href: "/free-zone-in-bahrain/sitra",
    icon: BadgeCheck,
  },
];

export function FreeZoneComparison() {
  const [zone, setZone] = useState<"all" | ZoneRow["key"]>("all");
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const filteredRows = useMemo(() => {
    if (zone === "all") return rows;
    return rows.filter((r) => r.key === zone);
  }, [zone]);

  useEffect(() => {
    if (zone === "all") return;
    const el = cardRefs.current[zone];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [zone]);

  return (
    <SplitSection
      badge="Compare options"
      title="Which industrial zone fits your activity?"
      subtitle="Use this as a fast shortlist. Final eligibility depends on your registered activity and required approvals."
      imageSrc={comparisonImage}
      imageAlt="Port-adjacent warehousing and containers near the sea"
      variant="subtle"
      backgroundVariant="grid-lines"
      overlayOpacity={0.55}
      layout="stacked"
    >
      {/* Zone selector */}
      <div className="mb-6">
        {/* Mobile: Select */}
        <div className="md:hidden">
          <Select value={zone} onValueChange={(v) => setZone(v as typeof zone)}>
            <SelectTrigger className="w-full bg-background z-50">
              <SelectValue placeholder="Select a zone" />
            </SelectTrigger>
            <SelectContent className="z-50 bg-popover">
              <SelectItem value="all">All zones</SelectItem>
              <SelectItem value="biw">BIW</SelectItem>
              <SelectItem value="blz">BLZ</SelectItem>
              <SelectItem value="biip">BIIP</SelectItem>
              <SelectItem value="sitra">Sitra</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Desktop: Buttons (tabs removed) */}
        <div className="hidden md:block">
          <div
            role="group"
            aria-label="Filter zones"
            className="inline-flex h-10 items-center justify-center rounded-md bg-card border border-border p-1 text-muted-foreground"
          >
            {(
              [
                { value: "all", label: "All" },
                { value: "biw", label: "BIW" },
                { value: "blz", label: "BLZ" },
                { value: "biip", label: "BIIP" },
                { value: "sitra", label: "Sitra" },
              ] as const
            ).map((opt) => {
              const active = zone === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setZone(opt.value)}
                  className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    active ? "bg-background text-foreground shadow-sm" : "hover:text-foreground",
                  )}
                  aria-pressed={active}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredRows.map((row) => (
          <div
            key={row.zone}
            ref={(node) => {
              cardRefs.current[row.key] = node;
            }}
          >
            <Card
              className={cn(
                "card-elevated-hover",
                zone !== "all" && row.key === zone
                  ? "ring-1 ring-accent/40"
                  : "",
              )}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <row.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <CardTitle className="text-lg md:text-xl leading-snug">
                      {row.zone}
                    </CardTitle>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Best for: {row.bestFor}
                    </p>
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
                <Link
                  to={row.href}
                  className="mt-4 inline-flex items-center gap-2 text-accent font-medium hover:underline"
                >
                  Read zone guide
                  <span aria-hidden className="text-accent">
                    →
                  </span>
                </Link>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card p-6">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Want a recommendation? Share your activity and space requirement (sqm) and we’ll confirm the fastest compliant
          path.
        </p>
      </div>
    </SplitSection>
  );
}
