import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroFeatures = [
  "100% Foreign Ownership Available",
  "Company Formation in 3-7 Days",
  "Complete End-to-End Support",
  "Government Liaison & PRO Services",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary">
      {/* Decorative patterns */}
      <div className="absolute inset-0 pattern-dots opacity-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container relative section-spacing">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Tagline - Bizee style */}
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                <Star className="h-4 w-4 fill-gold text-gold" />
                Trusted by 1,000+ Businesses
              </span>
            </div>

            {/* Main headline - Bizee "Dream It. File It. Build It." style */}
            <h1 className="mb-6">
              <span className="block text-gold">Plan It.</span>
              <span className="block">Register It.</span>
              <span className="block">Grow It.</span>
            </h1>

            <p className="lead mb-10 max-w-xl">
              Start your business in Bahrain with confidence. We handle the paperwork, 
              government processes, and compliance—so you can focus on growth.
            </p>

            {/* Feature list */}
            <ul className="grid sm:grid-cols-2 gap-4 mb-10">
              {heroFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="text-primary font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTAs - Larger buttons like Bizee */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/free-consultation">
                <Button size="lg" className="btn-gold text-lg h-14 px-8">
                  Start Your Business
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/cost-calculator">
                <Button variant="outline" size="lg" className="btn-outline-primary h-14 px-8 text-lg">
                  Calculate Costs
                </Button>
              </Link>
            </div>
          </div>

          {/* Right side - Stats Card */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/20 rounded-2xl rotate-12" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -rotate-12" />

              {/* Main card */}
              <div className="relative card-elevated p-10">
                <div className="text-center mb-8">
                  <span className="section-badge">Why Business Owners Choose Us</span>
                  <h3 className="text-2xl font-bold text-primary">Bahrain's Premier Business Partner</h3>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-6 bg-secondary rounded-xl">
                    <div className="text-4xl font-extrabold text-gold mb-2">10+</div>
                    <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-secondary rounded-xl">
                    <div className="text-4xl font-extrabold text-gold mb-2">1,000+</div>
                    <div className="text-sm text-muted-foreground font-medium">Companies Formed</div>
                  </div>
                  <div className="text-center p-6 bg-secondary rounded-xl">
                    <div className="text-4xl font-extrabold text-gold mb-2">98%</div>
                    <div className="text-sm text-muted-foreground font-medium">Success Rate</div>
                  </div>
                  <div className="text-center p-6 bg-secondary rounded-xl">
                    <div className="text-4xl font-extrabold text-gold mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground font-medium">Support Available</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-3 pt-6 border-t border-border">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-muted-foreground font-medium">
                    4.9/5 from 200+ reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
