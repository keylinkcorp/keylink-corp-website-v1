import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden gradient-navy">
      {/* Decorative patterns */}
      <div className="absolute inset-0 pattern-dots opacity-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container relative section-spacing-sm">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-6 leading-tight">
              Ready to Start Your Business in Bahrain?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Let's make it official. Get expert guidance and support from Bahrain's 
              most trusted business setup partner.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/free-consultation" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-primary font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-gold/30"
              >
                Get Started Now
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a 
                href="tel:+97317000000"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-xl hover:bg-primary-foreground/10 transition-all duration-200"
              >
                <Phone className="h-5 w-5" />
                Call Us Now
              </a>
            </div>
          </div>

          {/* Visual card */}
          <div className="hidden lg:block">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-primary-foreground/10 rounded-xl">
                  <div className="text-3xl font-extrabold text-gold mb-2">Free</div>
                  <div className="text-sm text-primary-foreground/70">Initial Consultation</div>
                </div>
                <div className="text-center p-6 bg-primary-foreground/10 rounded-xl">
                  <div className="text-3xl font-extrabold text-gold mb-2">3-7 Days</div>
                  <div className="text-sm text-primary-foreground/70">Company Setup</div>
                </div>
                <div className="text-center p-6 bg-primary-foreground/10 rounded-xl">
                  <div className="text-3xl font-extrabold text-gold mb-2">100%</div>
                  <div className="text-sm text-primary-foreground/70">Foreign Ownership</div>
                </div>
                <div className="text-center p-6 bg-primary-foreground/10 rounded-xl">
                  <div className="text-3xl font-extrabold text-gold mb-2">24/7</div>
                  <div className="text-sm text-primary-foreground/70">Support Available</div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-primary-foreground/20 text-center">
                <p className="text-primary-foreground/70 text-sm">
                  Trusted by over <span className="text-gold font-semibold">1,000+ businesses</span> across 40+ countries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
