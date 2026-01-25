import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bahrain-skyline.jpg";

const heroFeatures = [
  "100% Foreign Ownership Available",
  "Company Formation in 3-7 Days",
  "Complete End-to-End Support",
  "Government Liaison & PRO Services",
];

const trustLogos = [
  "Bahrain Chamber of Commerce",
  "MOIC Certified",
  "LMRA Registered",
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Subtle gold gradient accent */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-to-bl from-gold/5 via-transparent to-transparent rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />

      <div className="container relative py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Trust badge */}
            <div className="flex items-center gap-2 mb-8">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Rated 4.9/5 by 1,000+ businesses
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.05]">
              <span className="block text-primary">Plan It.</span>
              <span className="block text-primary">Register It.</span>
              <span className="block relative">
                <span className="text-primary">Grow It.</span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gold/20 -z-10 rounded-full" />
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Start your business in Bahrain with confidence. We handle the paperwork, 
              government processes, and compliance—so you can focus on growth.
            </p>

            {/* Feature list */}
            <ul className="grid sm:grid-cols-2 gap-4 mb-10">
              {heroFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-gold" />
                  </div>
                  <span className="text-primary font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/free-consultation">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-14 px-8 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-200">
                  Start Your Business
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/cost-calculator">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-primary text-primary h-14 px-8 text-lg rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-200">
                  Calculate Costs
                </Button>
              </Link>
            </div>

            {/* Trust logos */}
            <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-border">
              <span className="text-sm text-muted-foreground">Officially registered with:</span>
              {trustLogos.map((logo, index) => (
                <span key={index} className="text-sm font-medium text-primary/80">
                  {logo}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                <img 
                  src={heroImage} 
                  alt="Bahrain Business District Skyline" 
                  className="w-full h-[600px] object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-primary/10 p-6 border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                    <span className="text-2xl font-extrabold text-gold">10+</span>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary">Years Experience</div>
                    <div className="text-sm text-muted-foreground">Trusted since 2014</div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gold text-primary rounded-xl px-4 py-2 shadow-lg">
                <span className="text-sm font-bold">1,000+ Companies Formed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
