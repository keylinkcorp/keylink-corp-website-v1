import { Link } from "react-router-dom";
import { ArrowRight, FileSearch, Upload, Rocket } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: FileSearch,
    title: "Choose Your Service",
    description: "Select from company formation, visa processing, or business support. Not sure what you need? Our experts will guide you through the options.",
  },
  {
    number: "2",
    icon: Upload,
    title: "Submit Your Documents",
    description: "Provide the essentials—passport copies, business plan, and required forms. We handle all the paperwork and government coordination.",
  },
  {
    number: "3",
    icon: Rocket,
    title: "Launch Your Business",
    description: "Receive your licenses, registrations, and permits. You're now ready to operate and grow your business in Bahrain.",
  },
];

export function ProcessSteps() {
  return (
    <section className="section-spacing bg-secondary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Steps */}
          <div>
            <span className="section-badge">How It Works</span>
            <h2 className="mb-6">From Concept to Company in 3 Simple Steps</h2>
            <p className="lead mb-12 max-w-xl">
              We've streamlined the business setup process so you can focus on what matters—building your business.
            </p>

            <div className="space-y-10">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 group">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="step-number-filled group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="h-5 w-5 text-gold" />
                      <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link to="/free-consultation" className="btn-gold">
                Start Your Journey
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main card */}
              <div className="card-elevated p-8 bg-primary text-primary-foreground">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                    Ready to Get Started?
                  </h3>
                  <p className="text-primary-foreground/70">
                    Join 1,000+ successful businesses in Bahrain
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-navy-light rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                      <span className="text-gold font-bold">✓</span>
                    </div>
                    <div>
                      <div className="font-medium text-primary-foreground">Free Initial Consultation</div>
                      <div className="text-sm text-primary-foreground/60">No obligations, just expert advice</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-navy-light rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                      <span className="text-gold font-bold">✓</span>
                    </div>
                    <div>
                      <div className="font-medium text-primary-foreground">Transparent Pricing</div>
                      <div className="text-sm text-primary-foreground/60">Know your costs upfront</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-navy-light rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                      <span className="text-gold font-bold">✓</span>
                    </div>
                    <div>
                      <div className="font-medium text-primary-foreground">Fast Turnaround</div>
                      <div className="text-sm text-primary-foreground/60">Company setup in 3-7 days</div>
                    </div>
                  </div>
                </div>

                <Link 
                  to="/cost-calculator" 
                  className="block w-full text-center py-4 bg-gold hover:bg-gold-dark text-primary font-semibold rounded-xl transition-colors"
                >
                  Calculate Your Setup Costs
                </Link>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gold/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/30 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
