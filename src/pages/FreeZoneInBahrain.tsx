import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ServiceHero } from "@/components/services/shared/ServiceHero";
import { FreeZonesGuide } from "@/components/services/formation/FreeZonesGuide";
import { FormationCTA } from "@/components/services/formation/FormationCTA";
import { Building2, CheckCircle2, Clock, Globe, Shield } from "lucide-react";

export default function FreeZoneInBahrain() {
  useEffect(() => {
    document.title = "Free Zone in Bahrain | Setup, Costs & Zones Guide | Keylink Corp";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Free zone in Bahrain: compare industrial zones, understand costs, and get expert support to register your business. Clear guidance, fast setup timelines, and a free consultation."
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/free-zone-in-bahrain");
  }, []);

  return (
    <Layout>
      <ServiceHero
        badge="Launch Business"
        title="Free zone in"
        highlight="Bahrain"
        subtitle="A clear, practical guide to Bahrain’s main industrial zones and business parks—plus expert help choosing the right location and getting set up."
        features={[
          { icon: Clock, text: "Fast setup guidance" },
          { icon: Shield, text: "Compliance-first" },
          { icon: Globe, text: "Built for foreign founders" },
        ]}
        primaryCTA={{ text: "Get Free Consultation", href: "/free-consultation" }}
        secondaryCTA={{ text: "Call +973 1700 0000", href: "tel:+97317000000" }}
        priceFrom="BHD 1/sqm"
        priceLabel="Land from"
      />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <header className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Who this is for
              </h2>
              <p className="mt-3 text-muted-foreground text-lg leading-relaxed max-w-3xl">
                If you’re evaluating a free zone in Bahrain for logistics, manufacturing, e-commerce, or industrial operations,
                this page helps you compare options quickly and move forward with confidence.
              </p>
            </header>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">New company setup</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  Understand where to incorporate and what you’ll need for registration, licensing, and operational readiness.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Cost clarity</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  Get a practical sense of land/space starting points and how to think about total setup costs.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Risk reduction</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  Avoid mismatches between your activity, location, and licensing path with a short expert review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FreeZonesGuide />

      <FormationCTA />
    </Layout>
  );
}
