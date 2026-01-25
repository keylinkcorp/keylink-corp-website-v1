import { Link } from "react-router-dom";
import { Calculator, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Company formation costs",
  "Government fees breakdown",
  "Annual renewal estimates",
  "Visa processing costs",
];

export function CostCalculatorPreview() {
  return (
    <section className="py-20 bg-primary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-light text-gold text-sm font-medium mb-6">
              <Calculator className="h-4 w-4" />
              Cost Calculator
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Know Your Costs Before You Start
            </h2>
            
            <p className="text-lg text-primary-foreground/80 mb-8">
              Use our free cost calculator to get an instant estimate of your business 
              setup costs in Bahrain. No hidden fees, no surprises.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-primary-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link to="/cost-calculator">
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-primary font-semibold">
                Calculate Your Costs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Calculator Preview Card */}
          <div className="bg-background rounded-2xl p-8 shadow-2xl">
            <h3 className="text-xl font-semibold text-primary mb-6">Quick Estimate</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-muted-foreground">Company Type</span>
                <span className="font-medium text-primary">Single Person Company (SPC)</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-muted-foreground">CR Registration</span>
                <span className="font-medium text-primary">BHD 50</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-muted-foreground">License Fees</span>
                <span className="font-medium text-primary">BHD 100</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-muted-foreground">Professional Fees</span>
                <span className="font-medium text-primary">BHD 300</span>
              </div>
            </div>

            <div className="flex justify-between items-center py-4 bg-gold/10 rounded-lg px-4 mb-6">
              <span className="font-semibold text-primary">Estimated Total</span>
              <span className="text-2xl font-bold text-gold">BHD 450</span>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              * This is an estimate. Use our full calculator for accurate pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
