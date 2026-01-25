import { Link } from "react-router-dom";
import { ArrowRight, FileSearch, Upload, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Choose Your Service",
    description: "Select from company formation, visa processing, or business support. Our experts guide you.",
  },
  {
    number: "02",
    icon: Upload,
    title: "Submit Documents",
    description: "Provide the essentials—passport copies, business plan, and required forms. We handle the rest.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch Your Business",
    description: "Receive your licenses, registrations, and permits. You're ready to operate in Bahrain.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-28 lg:py-36 bg-secondary/30 relative overflow-hidden">
      {/* Pattern - subtle grid */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, #000 0%, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to bottom, #000 0%, transparent 80%)",
        }}
      />
      
      <div className="container relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-[44px] md:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
            From Concept to Company in 3 Steps
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            We've streamlined the business setup process so you can focus on what matters—building your business.
          </p>
        </div>

        {/* Steps - horizontal timeline with icons */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-16 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent" />
              )}
              
              {/* Step number - large */}
              <div className="relative inline-flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center mb-8 shadow-lg shadow-gold/20">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center mb-6 shadow-sm">
                  <step.icon className="h-6 w-6 text-gold" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-[1.8] max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/free-consultation" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200"
          >
            Start Your Journey Today
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
