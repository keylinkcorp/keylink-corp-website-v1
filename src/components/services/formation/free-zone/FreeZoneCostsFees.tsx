import { Card, CardContent } from "@/components/ui/card";
import { Banknote, Calculator, FileText, MapPin } from "lucide-react";

const cards = [
  {
    icon: FileText,
    title: "Registration + licensing",
    description:
      "Fees vary based on company type and activity approvals. Regulated activities often require additional steps and time.",
  },
  {
    icon: MapPin,
    title: "Address / lease",
    description:
      "Your industrial zone choice (BLZ, BIIP, BIW, Sitra) and facility type (office/warehouse/land) impacts monthly costs.",
  },
  {
    icon: Banknote,
    title: "Operating requirements",
    description:
      "Some activities need minimum space, specific facility standards, or staffing considerations—these affect total cost of setup.",
  },
];

const examples = [
  {
    title: "Example 1 — Small distribution (warehouse)",
    items: [
      "Zone: BLZ / BIW shortlist",
      "Space: ~100–200 sqm",
      "Primary cost drivers: address + approvals + warehouse readiness",
    ],
  },
  {
    title: "Example 2 — Light manufacturing (industrial plot/facility)",
    items: [
      "Zone: BIIP / Sitra shortlist",
      "Space: activity-dependent",
      "Primary cost drivers: facility standards + industrial approvals + utilities",
    ],
  },
  {
    title: "Example 3 — E‑commerce fulfillment hub",
    items: [
      "Zone: BLZ shortlist",
      "Space: scalable (start small, expand)",
      "Primary cost drivers: warehousing + logistics workflow + staffing",
    ],
  },
];

export function FreeZoneCostsFees() {
  return (
    <section className="section-spacing bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <header className="mb-10 md:mb-12">
            <p className="text-sm font-medium text-accent tracking-wide uppercase">Costs & fees</p>
            <h2 className="mt-3 text-balance">Free zone in Bahrain cost (what actually drives the price)</h2>
            <p className="mt-4 text-lg leading-relaxed max-w-3xl">
              If you’re comparing <span className="font-medium text-primary">free zone in Bahrain cost</span> or
              <span className="font-medium text-primary"> company formation cost in Bahrain</span>, the biggest swings
              usually come from your activity approvals and your address/facility requirements—not just government fees.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((c) => (
              <Card key={c.title} className="card-elevated">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                    <c.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-primary tracking-tight">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{c.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Calculator className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-primary">Fast pricing method</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      We estimate total setup by confirming: (1) your activity, (2) ownership eligibility, (3) zone-fit, and
                      (4) space requirement (sqm). This prevents under-budgeting and avoids choosing a lease that doesn’t match
                      licensing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-primary">Realistic examples (for planning)</p>
                <div className="mt-4 space-y-4">
                  {examples.map((ex) => (
                    <div key={ex.title} className="rounded-xl border border-border bg-background p-4">
                      <p className="text-sm font-semibold text-primary">{ex.title}</p>
                      <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                        {ex.items.map((it) => (
                          <li key={it} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Note: Exact fees and timelines depend on the registered activity, approvals, and the chosen facility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
