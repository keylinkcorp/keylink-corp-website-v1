import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroFeatures = [
  "Fast Company Registration",
  "Expert Local Support",
  "100% Compliance Guaranteed",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-light/50 text-gold text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Trusted by 1,000+ Businesses in Bahrain
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Start Your Business in{" "}
              <span className="text-gold">Bahrain</span>{" "}
              with Confidence
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Complete business setup and corporate services. From company formation to visa processing, we handle everything so you can focus on growth.
            </p>

            {/* Features */}
            <ul className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              {heroFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/free-consultation">
                <Button size="lg" className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-primary font-semibold text-lg px-8">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/cost-calculator">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-navy-light text-lg px-8"
                >
                  Calculate Costs
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Card */}
          <div className="hidden lg:block">
            <div className="bg-background rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-semibold text-primary mb-6">Why Business Owners Choose Us</h3>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 rounded-xl bg-secondary">
                  <div className="text-4xl font-bold text-gold mb-1">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-secondary">
                  <div className="text-4xl font-bold text-gold mb-1">1000+</div>
                  <div className="text-sm text-muted-foreground">Companies Formed</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-secondary">
                  <div className="text-4xl font-bold text-gold mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Expert Consultants</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-secondary">
                  <div className="text-4xl font-bold text-gold mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gold/10 border border-gold/20">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-medium border-2 border-background">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">4.9/5 from 200+ reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
