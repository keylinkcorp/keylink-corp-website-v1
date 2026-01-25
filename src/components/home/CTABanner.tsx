import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";

const highlights = [
  "Free Initial Consultation",
  "Company Setup in 3-7 Days",
  "100% Foreign Ownership",
  "24/7 Support Available",
];

export function CTABanner() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-gold/5 to-transparent" />
      
      {/* Pattern */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
        }}
      />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold mb-6">
            Start Today
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 tracking-tight">
            Ready to Start Your Business in Bahrain?
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's make it official. Get expert guidance and support from Bahrain's 
            most trusted business setup partner.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full"
              >
                <CheckCircle2 className="h-4 w-4 text-gold" />
                <span className="text-sm font-medium text-primary">{highlight}</span>
              </div>
            ))}
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/free-consultation" 
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gold hover:bg-gold/90 text-primary font-bold text-lg rounded-xl transition-all duration-200 shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/40"
            >
              Get Started Now
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a 
              href="tel:+97317000000"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 border-2 border-primary text-primary font-bold text-lg rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <Phone className="h-5 w-5" />
              Call Us Now
            </a>
          </div>

          {/* Trust line */}
          <p className="mt-10 text-muted-foreground">
            Trusted by over <span className="font-semibold text-gold">1,000+ businesses</span> across 40+ countries
          </p>
        </div>
      </div>
    </section>
  );
}
