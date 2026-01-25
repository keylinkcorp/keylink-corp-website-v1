import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bahrain-skyline.jpg";

const heroFeatures = [
  "100% Foreign Ownership",
  "3-7 Day Formation",
  "End-to-End Support",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white">
      {/* Subtle dot pattern - top only */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,#000_0%,transparent_60%)]" />

      <div className="container py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="max-w-xl">
            {/* Trust badge - minimal */}
            <p className="text-sm font-medium text-muted-foreground mb-8 tracking-wide">
              Trusted by 1,000+ businesses worldwide
            </p>

            {/* Main headline - large, clean */}
            <h1 className="text-[56px] md:text-[68px] lg:text-[80px] font-bold tracking-tight leading-[1.05] mb-8">
              <span className="block text-primary">Plan.</span>
              <span className="block text-primary">Register.</span>
              <span className="block text-primary relative inline-block">
                Grow.
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-gold/20 rounded-full" />
              </span>
            </h1>

            <p className="text-xl md:text-[22px] text-muted-foreground mb-10 leading-[1.7] max-w-md">
              Start your business in Bahrain with confidence. We handle the paperwork so you can focus on growth.
            </p>

            {/* Feature list - simplified to 3 */}
            <ul className="flex flex-wrap gap-x-6 gap-y-3 mb-12">
              {heroFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="text-primary font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTAs - clean, spacious */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/free-consultation">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-[17px] h-14 px-8 rounded-xl font-semibold"
                >
                  Start Your Business
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/cost-calculator">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto border-2 border-primary text-primary h-14 px-8 text-[17px] rounded-xl hover:bg-primary hover:text-primary-foreground font-semibold"
                >
                  Calculate Costs
                </Button>
              </Link>
            </div>

            {/* Trust line - minimal */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Registered with <span className="font-medium text-primary">MOIC</span> • <span className="font-medium text-primary">LMRA</span> • <span className="font-medium text-primary">Bahrain Chamber</span>
              </p>
            </div>
          </div>

          {/* Hero Image - clean, minimal frame */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <img 
                  src={heroImage} 
                  alt="Bahrain Business District" 
                  className="w-full h-[580px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
