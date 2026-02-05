import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { ServiceHero } from "@/components/services/shared/ServiceHero";
import { FormationCTA } from "@/components/services/formation/FormationCTA";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Factory, Shield } from "lucide-react";

export default function BIIP() {
  useEffect(() => {
    document.title = "Bahrain International Investment Park (BIIP) | Setup Guide | Keylink Corp";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "BIIP guide for manufacturing and industrial setups in Bahrain. Understand approvals, facility needs, and the compliant registration path with expert support."
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://keylinkcorp.com/free-zone-in-bahrain/biip");
  }, []);

  return (
    <Layout>
      <ServiceHero
        badge="Zone Deep‑Dive"
        title="Bahrain International Investment Park"
        highlight="(BIIP)"
        subtitle="A BIIP-focused guide for industrial licensing, manufacturing, and facility-led operations."
        features={[
          { icon: Clock, text: "Predictable timeline" },
          { icon: Factory, text: "Industrial operations" },
          { icon: Shield, text: "Approval planning" },
        ]}
        primaryCTA={{ text: "Get Free Consultation", href: "/free-consultation" }}
        secondaryCTA={{ text: "Call +973 1700 0000", href: "tel:+97317000000" }}
      />

      <section className="section-spacing bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-6">
            <Card className="card-elevated lg:col-span-2">
              <CardContent className="p-6">
                <h2 className="text-2xl md:text-3xl">When BIIP is a strong fit</h2>
                <p className="mt-3 text-lg leading-relaxed">
                  BIIP is commonly shortlisted for manufacturing and industrial activities where facility standards and
                  approvals matter. We align your activity with a compliant address before you sign anything.
                </p>

                <div className="mt-6 rounded-2xl border border-border bg-secondary/40 p-5">
                  <p className="text-sm font-semibold text-primary">Compare with other zones</p>
                  <p className="mt-2 text-sm text-muted-foreground">Return to the pillar page to compare BIW, BLZ, and Sitra.</p>
                  <Link to="/free-zone-in-bahrain" className="mt-3 inline-flex items-center gap-2 text-accent font-medium hover:underline">
                    Free zone in Bahrain guide
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-primary">Common planning items</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>• Activity approvals & compliance</li>
                  <li>• Facility type + space (sqm)</li>
                  <li>• Utilities + operational readiness</li>
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
