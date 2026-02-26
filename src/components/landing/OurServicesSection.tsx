import { Check, Building2, FileCheck2, Landmark, MapPin } from "lucide-react";

type ServiceItem = {
  name: string;
  description: string;
};

type ServiceCategory = {
  title: string;
  subtitle: string;
  Icon: typeof Building2;
  items: ServiceItem[];
};

const CATEGORIES: ServiceCategory[] = [
  {
    title: "Company Formation & Registration",
    subtitle: "From trade name to constitutional docs—kept structured.",
    Icon: Building2,
    items: [
      {
        name: "Commercial Registration (CR) Assistance",
        description:
          "We prepare and submit all required documents to SIJILAT/MOIC on your behalf.",
      },
      {
        name: "Trade Name Reservation",
        description: "We search, reserve, and secure your business trade name.",
      },
      {
        name: "MOA / Articles of Association Preparation",
        description:
          "Drafting and notarizing your company's constitutional documents.",
      },
    ],
  },
  {
    title: "Licensing & Compliance",
    subtitle: "Clarity on approvals, portals, and government processing.",
    Icon: FileCheck2,
    items: [
      {
        name: "LMRA Work Permit & Visa Guidance",
        description:
          "Full support for employee work permits, residency visas, and LMRA portal submissions.",
      },
      {
        name: "PRO & Document Clearance Services",
        description:
          "Handling government liaison, attestations, and official document processing.",
      },
    ],
  },
  {
    title: "Business Support Services",
    subtitle: "Operational essentials to get you up and running.",
    Icon: Landmark,
    items: [
      {
        name: "Bank Account Opening Support",
        description:
          "Guidance and document preparation for corporate bank account setup in Bahrain.",
      },
    ],
  },
  {
    title: "Workspace Solutions",
    subtitle: "Address options and flexible spaces that fit your stage.",
    Icon: MapPin,
    items: [
      {
        name: "Virtual Office",
        description:
          "MOIC-approved business address for CR issuance, mail handling, and professional presence without a physical lease.",
      },
      {
        name: "Coworking Space",
        description:
          "Flexible hot desks and dedicated workstations for startups, freelancers, and growing teams.",
      },
      {
        name: "Business Incubator",
        description:
          "Structured support program including mentorship, networking, business development workshops, and a collaborative environment for early-stage companies.",
      },
    ],
  },
];

export function OurServicesSection() {
  return (
    <section aria-label="Our services" className="mt-10">
      {/* Premium divider */}
      <div className="relative my-8">
        <div aria-hidden className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 border-t border-border/30" />
        <div
          aria-hidden
          className="mx-auto h-px max-w-xl bg-gradient-to-r from-transparent via-border/60 to-transparent"
        />
      </div>

      <div className="max-w-3xl">
        <span className="section-badge">Our services</span>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
          A clear service catalog (info‑only)
        </h3>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          A structured overview of the most common support areas—designed to be scannable and ad‑friendly.
        </p>
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {CATEGORIES.map((cat) => (
          <div key={cat.title} className="lp-card-flat bg-muted/20 p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 shrink-0 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
                <cat.Icon className="h-[22px] w-[22px]" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">{cat.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{cat.subtitle}</p>
              </div>
            </div>

            <ul className="mt-5 divide-y divide-border/20">
              {cat.items.map((item) => (
                <li key={item.name} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border/30 bg-background/60">
                      <Check className="h-4 w-4 text-accent" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">{item.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
