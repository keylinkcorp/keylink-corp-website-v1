import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Globe, Shield } from "lucide-react";

const highlights = [
  {
    icon: Clock,
    title: "Typical setup timeline",
    value: "3–7 working days",
    note: "Depends on activity & approvals",
  },
  {
    icon: Globe,
    title: "Foreign ownership",
    value: "Up to 100%",
    note: "Most sectors (activity-dependent)",
  },
  {
    icon: Shield,
    title: "Compliance-first",
    value: "Avoid costly rework",
    note: "Right activity + right location",
  },
];

export function FreeZoneQuickAnswer() {
  return (
    <section className="section-spacing-sm bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <header className="mb-8 md:mb-10">
            <p className="text-sm font-medium text-accent tracking-wide uppercase">Quick answer</p>
            <h2 className="mt-3 text-balance">Is there a free zone in Bahrain?</h2>
            <p className="mt-4 text-lg leading-relaxed max-w-3xl">
              Bahrain is often described as “free-zone-like” because many business activities allow 100% foreign ownership
              and have a competitive tax environment. In addition, Bahrain has dedicated industrial zones and business parks
              (such as BLZ, BIIP, and BIW) that may offer logistics advantages, ready infrastructure, and clearer zoning for
              manufacturing and distribution.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item) => (
              <Card key={item.title} className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary">{item.title}</p>
                      <p className="mt-1 text-2xl font-bold text-primary tracking-tight">{item.value}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                If your business needs logistics, warehousing, light manufacturing, or an industrial address, selecting the
                right zone matters. We’ll help you match <span className="font-medium text-primary">activity</span>,
                <span className="font-medium text-primary"> approvals</span>, and <span className="font-medium text-primary">location</span>
                so you can register once and operate smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
