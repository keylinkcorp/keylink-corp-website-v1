import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";

export type CompanyFormationSegmentId = "foreign" | "local" | "branch" | "solo";

type Segment = {
  id: CompanyFormationSegmentId;
  label: string;
  subtitle: string;
  bullets: string[];
};

const SEGMENTS: Segment[] = [
  {
    id: "foreign",
    label: "Foreign founder",
    subtitle: "Remote setup",
    bullets: [
      "100% ownership eligibility check",
      "Remote-friendly process and clear document list",
      "Visa + banking guidance based on your profile",
    ],
  },
  {
    id: "local",
    label: "Bahrain resident",
    subtitle: "Fast setup path",
    bullets: [
      "Clear checklist to move quickly",
      "Practical guidance on activities + approvals",
      "Transparent pricing context before you commit",
    ],
  },
  {
    id: "branch",
    label: "Branch / expansion",
    subtitle: "Parent company",
    bullets: [
      "Parent document requirements (typical set)",
      "Expected timelines for branch registration",
      "Compliance steps and local representation guidance",
    ],
  },
  {
    id: "solo",
    label: "Solo / freelancer",
    subtitle: "Low-friction start",
    bullets: [
      "SPC-friendly path (where applicable)",
      "Simple structure and minimal moving parts",
      "Start lean, then scale visas/office when needed",
    ],
  },
];

function preselectFromSearch(search: string): CompanyFormationSegmentId | null {
  try {
    const params = new URLSearchParams(search);
    const explicit = params.get("intent")?.toLowerCase().trim();
    const term = params.get("utm_term")?.toLowerCase().trim();

    const haystack = [explicit, term].filter(Boolean).join(" ");
    if (!haystack) return null;

    if (/(branch|expansion|subsidiary)/.test(haystack)) return "branch";
    if (/(solo|freelancer|self\s*employed|startup|one\s*person)/.test(haystack)) return "solo";
    if (/(resident|local|bahrain)/.test(haystack)) return "local";
    if (/(foreign|expat|non\s*resident|remote|overseas)/.test(haystack)) return "foreign";

    return null;
  } catch {
    return null;
  }
}

export function CompanyFormationSegmentSwitcher(props: {
  initialSegment?: CompanyFormationSegmentId;
  onScrollToCalculator: () => void;
  onScrollToBooking: () => void;
}) {
  const { initialSegment, onScrollToCalculator, onScrollToBooking } = props;

  const [selected, setSelected] = useState<CompanyFormationSegmentId>(initialSegment ?? "foreign");

  const selectedSegment = useMemo(
    () => SEGMENTS.find((s) => s.id === selected) ?? SEGMENTS[0],
    [selected]
  );

  useEffect(() => {
    // Only auto-preselect on first render (if no explicit initial segment was provided)
    if (initialSegment) return;
    if (typeof window === "undefined") return;

    const inferred = preselectFromSearch(window.location.search);
    if (inferred) setSelected(inferred);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section aria-label="Choose your situation" className="section-spacing-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <span className="section-badge">Choose your situation</span>
          <h2 className="lp-h2">Get guidance that matches your setup</h2>
          <p className="mt-4 lp-section-subtitle">
            Pick the closest match—we’ll highlight the main considerations, then you can calculate a fast estimate.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {SEGMENTS.map((segment) => {
                  const isActive = segment.id === selected;
                  return (
                    <button
                      key={segment.id}
                      type="button"
                      onClick={() => setSelected(segment.id)}
                      className={
                        "lp-card p-4 sm:p-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
                        (isActive ? "ring-2 ring-ring" : "hover:bg-accent")
                      }
                      aria-pressed={isActive}
                    >
                      <div className="text-sm text-muted-foreground">{segment.subtitle}</div>
                      <div className="mt-1 font-semibold text-foreground tracking-tight">{segment.label}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="lp-card p-5 sm:p-6 md:p-7">
                <div className="text-sm font-semibold text-foreground">For {selectedSegment.label.toLowerCase()}</div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {selectedSegment.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span aria-hidden className="mt-[6px] h-1.5 w-1.5 rounded-full bg-foreground/60" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button className="w-full sm:w-auto" onClick={onScrollToCalculator}>
                    Calculate estimate
                  </Button>
                  <Button
                    className="w-full sm:w-auto"
                    variant="outline"
                    onClick={onScrollToBooking}
                  >
                    Book free call
                  </Button>
                </div>

                <p className="mt-4 text-xs text-muted-foreground">
                  Not sure? Start with the calculator—then we’ll confirm the exact costs on the free call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
