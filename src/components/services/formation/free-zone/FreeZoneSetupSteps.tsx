import { Card, CardContent } from "@/components/ui/card";
import { FileText, MapPin, ShieldCheck, Stamp } from "lucide-react";

const steps = [
  {
    title: "Confirm activity + ownership",
    description:
      "We confirm your business activity, ownership eligibility, and whether you need special approvals before you submit anything.",
    icon: ShieldCheck,
  },
  {
    title: "Choose zone + address",
    description:
      "Pick the zone that matches your operations (logistics, manufacturing, warehousing) and secure an address/lease suitable for licensing.",
    icon: MapPin,
  },
  {
    title: "Prepare documents",
    description:
      "We prepare the paperwork set (shareholders, company details, and any corporate documents) so your submission is complete.",
    icon: FileText,
  },
  {
    title: "Submit + issue license",
    description:
      "We submit, follow up, and keep you updated until registration and licensing are completed.",
    icon: Stamp,
  },
];

export function FreeZoneSetupSteps() {
  return (
    <section className="section-spacing bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <header className="mb-10 md:mb-12">
            <p className="text-sm font-medium text-accent tracking-wide uppercase">Process</p>
            <h2 className="mt-3 text-balance">Setup steps (simple and predictable)</h2>
            <p className="mt-4 text-lg leading-relaxed max-w-3xl">
              A clear path from “what should we register?” to “ready to operate”, with fewer delays.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <Card key={step.title} className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">Step {index + 1}</p>
                      <h3 className="mt-1 text-lg md:text-xl font-semibold text-primary tracking-tight">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
