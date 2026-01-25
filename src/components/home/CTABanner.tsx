import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">
            Start Today
          </p>
          
          <h2 className="text-[44px] md:text-[56px] lg:text-[64px] font-bold text-primary mb-6 tracking-tight leading-[1.1]">
            Ready to Start Your Business?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto leading-[1.7]">
            Let's make it official. Get expert guidance from Bahrain's most trusted business setup partner.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/free-consultation" 
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gold hover:bg-gold/90 text-primary font-semibold text-lg rounded-xl transition-all duration-200"
            >
              Get Started Now
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a 
              href="tel:+97317000000"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 border-2 border-primary text-primary font-semibold text-lg rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <Phone className="h-5 w-5" />
              Call Us Now
            </a>
          </div>

          {/* Trust line */}
          <p className="mt-12 text-muted-foreground">
            Trusted by <span className="font-semibold text-gold">1,000+ businesses</span> across 40+ countries
          </p>
        </div>
      </div>
    </section>
  );
}
