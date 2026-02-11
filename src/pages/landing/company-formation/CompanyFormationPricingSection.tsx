import { Button } from "@/components/ui/button";
import { SectionBackgroundOverlay } from "@/components/shared/SectionBackgroundOverlay";

const COST_DRIVERS = [
  "Activity (some require extra approvals)",
  "Company type (WLL / SPC / Branch)",
  "Office type",
  "Visas required",
  "Shareholder profile & eligibility",
  "Add-ons (PRO, accounting, bank support)",
];

export function CompanyFormationPricingSection(props: {
  onScrollToCalculator: () => void;
  onScrollToBooking: () => void;
}) {
  const { onScrollToCalculator, onScrollToBooking } = props;

  return (
    <section
      aria-label="Pricing: what affects company formation cost"
      className="section-spacing-sm relative overflow-hidden"
    >
      <SectionBackgroundOverlay variant="ibelick-lines" opacity={0.75} masked />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-6xl">
          <span className="section-badge">Pricing</span>
          <h2 className="lp-h2">What affects your company formation cost</h2>
          <p className="mt-4 lp-section-subtitle">
            Costs vary mainly by activity, visas, office, and shareholder profile. Use the calculator for a fast
            estimate—then we’ll confirm exact fees on the free call.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="lp-card p-5 sm:p-6 md:p-7">
                <div className="text-sm font-semibold text-foreground">Key cost drivers</div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {COST_DRIVERS.map((d) => (
                    <span
                      key={d}
                      className="rounded-full border border-border/50 bg-background px-3 py-1 text-xs text-muted-foreground"
                    >
                      {d}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button className="w-full sm:w-auto" onClick={onScrollToCalculator}>
                    Calculate estimate
                  </Button>
                  <Button className="w-full sm:w-auto" variant="outline" onClick={onScrollToBooking}>
                    Book free call
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="lp-card p-5 sm:p-6 md:p-7">
                <div className="text-sm font-semibold text-foreground">Typical ranges (guidance)</div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Most setups fall within a range once you include office + visas. Exact totals depend on your activity,
                  shareholder profile, and approvals.
                </p>
                <div className="mt-4 lp-card-flat bg-muted/20 p-5">
                  <p className="text-sm text-foreground font-semibold">Best way to get an accurate number:</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Use the calculator below for a quick estimate, then book the free call to confirm the exact fees and
                    timeline.
                  </p>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Note: Calculator estimates are directional—not a legal quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
