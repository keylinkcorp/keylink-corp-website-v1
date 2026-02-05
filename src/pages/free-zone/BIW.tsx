import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ServiceHero } from "@/components/services/shared/ServiceHero";
import { FormationCTA } from "@/components/services/formation/FormationCTA";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Ship, Globe } from "lucide-react";

export default function BIW() {
  useEffect(() => {
    document.title = "Bahrain Investment Wharf (BIW) | Logistics & Warehousing | Keylink Corp";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "BIW (Bahrain Investment Wharf) guide: logistics and warehousing near key transport links. Learn setup steps, requirements, and cost drivers."
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/free-zone-in-bahrain/biw");
  }, []);

  return (
    <Layout>
      <ServiceHero
        badge="Zone Deep‑Dive"
        title="Bahrain Investment Wharf"
        highlight="(BIW)"
        subtitle="A BIW-focused guide for warehouse-led logistics and distribution setups."
        features={[
          { icon: Clock, text: "Fast planning" },
          { icon: Ship, text: "Port-linked logistics" },
          { icon: Globe, text: "Regional distribution" },
        ]}
        primaryCTA={{ text: "Get Free Consultation", href: "/free-consultation" }}
        secondaryCTA={{ text: "Call +973 1700 0000", href: "tel:+97317000000" }}
      />

      <section className="section-spacing bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-6">
            <Card className="card-elevated lg:col-span-2">
              <CardContent className="p-6">
                <h2 className="text-2xl md:text-3xl">BIW use-cases</h2>
                <p className="mt-3 text-lg leading-relaxed">
                  BIW is often shortlisted when shipping cycles, warehouse layout, and operational efficiency are key. We
                  validate the activity + address match so licensing stays smooth.
                </p>

                <div className="mt-6 rounded-2xl border border-border bg-secondary/40 p-5">
                  <p className="text-sm font-semibold text-primary">Back to comparison</p>
                  <p className="mt-2 text-sm text-muted-foreground">See how BIW compares to BLZ, BIIP, and Sitra.</p>
                  <Link to="/free-zone-in-bahrain" className="mt-3 inline-flex items-center gap-2 text-accent font-medium hover:underline">
                    Free zone in Bahrain guide
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-primary">What impacts cost</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>• Warehouse/office size</li>
                  <li>• Lease structure</li>
                  <li>• Activity approvals</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FormationCTA />
    </Layout>
  );
}
