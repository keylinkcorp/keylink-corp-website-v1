import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Globe, Shield } from "lucide-react";
import { SplitSection } from "@/components/shared/SplitSection";

import quickAnswerImage from "@/assets/free-zone/free-zone-steps.jpg";

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
    <SplitSection
      badge="Quick answer"
      title="Is there a free zone in Bahrain?"
      subtitle="Bahrain is often described as “free-zone-like” because many activities allow 100% foreign ownership and have a competitive tax environment. For industrial operations, dedicated zones and business parks (BLZ, BIIP, BIW and others) can provide clearer zoning, infrastructure, and logistics advantages."
      imageSrc={quickAnswerImage}
      imageAlt="Consultant and founder planning a company setup process"
      variant="default"
      imagePosition="right"
    >
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
            If you need logistics, warehousing, light manufacturing, or an industrial address, selecting the right zone
            matters. We match <span className="font-medium text-primary">activity</span>,
            <span className="font-medium text-primary"> approvals</span>, and <span className="font-medium text-primary">location</span>
            so you can register once and operate smoothly.
          </p>
        </div>
      </div>
    </SplitSection>
  );
}
