import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Download, FileCheck, FileText, ShieldCheck } from "lucide-react";

const checklist = [
  "Passport copy (all shareholders)",
  "Proof of address",
  "Business activity description",
  "Shareholding structure",
  "Corporate documents (if corporate shareholder)",
  "Zone + space requirement (sqm)",
];

export function FreeZoneDocumentsChecklist() {
  return (
    <section className="section-spacing bg-secondary/40">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <header className="mb-10 md:mb-12">
            <p className="text-sm font-medium text-accent tracking-wide uppercase">Documents</p>
            <h2 className="mt-3 text-balance">Documents checklist (download + internal resources)</h2>
            <p className="mt-4 text-lg leading-relaxed max-w-3xl">
              Get the right documents ready early—this is the easiest way to reduce delays and keep your Bahrain setup on a
              predictable timeline.
            </p>
          </header>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">Quick checklist</p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {checklist.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Button asChild className="btn-gold">
                        <a
                          href="/downloads/free-zone-bahrain-documents-checklist.txt"
                          download
                          aria-label="Download documents checklist"
                        >
                          <Download className="w-4 h-4" />
                          Download checklist
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                        <Link to="/free-consultation">
                          Confirm requirements
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">Related services (internal links)</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      These pages explain the common items that impact approvals, address/lease suitability, and staffing/visa
                      steps.
                    </p>

                    <div className="mt-5 space-y-3">
                      <Link
                        to="/services/commercial-registration"
                        className="group flex items-start gap-3 rounded-xl border border-border bg-background p-4 hover:bg-muted/40 transition-colors"
                      >
                        <FileText className="w-5 h-5 text-accent mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-primary group-hover:underline">Commercial Registration (CR)</p>
                          <p className="text-sm text-muted-foreground">Understand the registration flow and typical requirements.</p>
                        </div>
                      </Link>

                      <Link
                        to="/services/lease-contract-registration"
                        className="group flex items-start gap-3 rounded-xl border border-border bg-background p-4 hover:bg-muted/40 transition-colors"
                      >
                        <FileText className="w-5 h-5 text-accent mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-primary group-hover:underline">Lease Contract Registration</p>
                          <p className="text-sm text-muted-foreground">Make sure your address is compliant for licensing.</p>
                        </div>
                      </Link>

                      <Link
                        to="/services/visa-immigration"
                        className="group flex items-start gap-3 rounded-xl border border-border bg-background p-4 hover:bg-muted/40 transition-colors"
                      >
                        <FileText className="w-5 h-5 text-accent mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-primary group-hover:underline">Visa & Immigration</p>
                          <p className="text-sm text-muted-foreground">Plan visas for founders and staff as part of setup.</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
