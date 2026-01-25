import { Link } from "react-router-dom";
import { ArrowRight, Calculator, Check } from "lucide-react";

const calculatorBenefits = [
  "Instant cost estimates for company formation",
  "Compare different business structures",
  "Include visa and PRO service costs",
  "No signup required—100% free",
];

export function CostCalculatorPreview() {
  return (
    <section className="section-spacing bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 pattern-dots opacity-5" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6">
              Free Tool
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-6">
              Know Your Business Setup Costs Upfront
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Use our free cost calculator to get an instant estimate for starting 
              your business in Bahrain. No surprises, just transparent pricing.
            </p>

            <ul className="space-y-4 mb-10">
              {calculatorBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-gold" />
                  </div>
                  <span className="text-primary-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link 
              to="/cost-calculator" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-primary font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-gold/30"
            >
              <Calculator className="h-5 w-5" />
              Try Cost Calculator
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Calculator Preview Card */}
          <div className="hidden lg:block">
            <div className="card-elevated bg-background text-foreground p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Quick Estimate</h3>
                  <p className="text-sm text-muted-foreground">Based on your selections</p>
                </div>
              </div>

              {/* Sample calculator preview */}
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-secondary rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Company Type</span>
                    <span className="font-medium text-primary">WLL Company</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Business Activity</span>
                    <span className="font-medium text-primary">Consulting</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Work Visas</span>
                    <span className="font-medium text-primary">2 Employees</span>
                  </div>
                </div>

                <div className="p-4 bg-gold/10 rounded-xl border border-gold/30">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-primary">Estimated Total</span>
                    <span className="text-2xl font-extrabold text-gold">BHD 2,450</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    *Estimate includes formation, CR, and visa processing
                  </p>
                </div>
              </div>

              <Link 
                to="/cost-calculator" 
                className="block w-full text-center py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-colors"
              >
                Get Your Custom Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
