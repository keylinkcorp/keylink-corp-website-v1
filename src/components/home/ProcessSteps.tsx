import { Link } from "react-router-dom";
import { ArrowRight, FileSearch, Upload, Rocket } from "lucide-react";
import processStep1 from "@/assets/process-step-1.jpg";
import processStep2 from "@/assets/process-step-2.jpg";
import processStep3 from "@/assets/process-step-3.jpg";

const steps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Choose Your Service",
    description: "Select from company formation, visa processing, or business support. Our experts will guide you through the options.",
    image: processStep1,
  },
  {
    number: "02",
    icon: Upload,
    title: "Submit Documents",
    description: "Provide the essentials—passport copies, business plan, and required forms. We handle all the paperwork.",
    image: processStep2,
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch Your Business",
    description: "Receive your licenses, registrations, and permits. You're ready to operate in Bahrain.",
    image: processStep3,
  },
];

export function ProcessSteps() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50 relative overflow-hidden">
      {/* Pattern background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, #000 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />
      
      <div className="container relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold mb-6">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
            From Concept to Company in 3 Simple Steps
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We've streamlined the business setup process so you can focus on what matters—building your business.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-32 left-1/2 w-full h-0.5 bg-gradient-to-r from-gold/30 to-gold/10 z-0" />
              )}
              
              <div className="relative z-10 bg-white rounded-2xl overflow-hidden shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                  
                  {/* Step number badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-gold flex items-center justify-center">
                    <span className="text-lg font-extrabold text-primary">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="h-5 w-5 text-gold" />
                    <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/free-consultation" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20"
          >
            Start Your Journey Today
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
