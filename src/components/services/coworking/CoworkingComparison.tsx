import { useRef } from "react";
import { useInView } from "framer-motion";
import { Check, X, Sparkles, Building2, TrendingUp, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { name: "Monthly Cost", traditional: "800+ BD", coworking: "From 60 BD", wfh: "Free" },
  { name: "CR Address", traditional: true, coworking: true, wfh: false },
  { name: "No Long-term Lease", traditional: false, coworking: true, wfh: true },
  { name: "Meeting Rooms", traditional: true, coworking: true, wfh: false },
  { name: "Networking", traditional: false, coworking: true, wfh: false },
  { name: "Business WiFi", traditional: true, coworking: true, wfh: false },
  { name: "24/7 Access", traditional: true, coworking: true, wfh: true },
  { name: "Reception", traditional: true, coworking: true, wfh: false },
  { name: "Flexible Scaling", traditional: false, coworking: true, wfh: false },
  { name: "All-Inclusive", traditional: false, coworking: true, wfh: true },
];

function FeatureCheck({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="font-semibold text-primary">{value}</span>;
  }
  return value ? (
    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
      <Check className="w-3 h-3 text-green-600" />
    </div>
  ) : (
    <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center">
      <X className="w-3 h-3 text-red-400" />
    </div>
  );
}

export function CoworkingComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-background">
      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="section-badge">Why Choose Coworking</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-primary">
            Coworking vs Traditional Office in Bahrain
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See why hundreds of businesses in Bahrain are switching from traditional office leases to flexible coworking spaces.
          </p>
        </div>

        {/* Three Column Cards */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
          
          {/* Traditional Office Card */}
          <div
            className={`p-6 lg:p-8 rounded-2xl bg-secondary/30 border border-border transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            {/* Icon */}
            <div className="flex justify-center mb-5">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                <Building2 className="w-7 h-7 text-muted-foreground" />
              </div>
            </div>
            
            {/* Title */}
            <div className="text-center mb-6">
              <h3 className="font-bold text-xl text-primary">Traditional Office</h3>
              <p className="text-sm text-muted-foreground">Conventional workspace rental</p>
            </div>

            {/* Price */}
            <div className="text-center mb-8 pb-6 border-b border-border">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-primary">800+</span>
                <span className="text-lg text-muted-foreground">BD/month</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">+ utilities, maintenance, setup</p>
            </div>
            
            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{feature.name}</span>
                  <FeatureCheck value={feature.traditional} />
                </div>
              ))}
            </div>
          </div>

          {/* Coworking Space Card - Highlighted */}
          <div
            className={`relative p-6 lg:p-8 rounded-2xl bg-gradient-to-b from-accent/20 via-accent/10 to-accent/5 border-2 border-accent/40 shadow-lg transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            {/* Best Value Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold shadow-md">
                <Sparkles className="w-4 h-4" />
                Best Value
              </div>
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-5 mt-2">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-accent" />
              </div>
            </div>
            
            {/* Title */}
            <div className="text-center mb-6">
              <h3 className="font-bold text-xl text-primary">Coworking Space</h3>
              <p className="text-sm text-muted-foreground">Flexible professional workspace</p>
            </div>

            {/* Price */}
            <div className="text-center mb-8 pb-6 border-b border-accent/20">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-accent">60</span>
                <span className="text-lg text-muted-foreground">BD/month</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">All-inclusive, no hidden fees</p>
            </div>
            
            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-center justify-between">
                  <span className="text-sm text-primary font-medium">{feature.name}</span>
                  <FeatureCheck value={feature.coworking} />
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button className="w-full mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Get Started Today
            </Button>
          </div>

          {/* Work From Home Card */}
          <div
            className={`p-6 lg:p-8 rounded-2xl bg-secondary/30 border border-border transition-all duration-700 delay-300 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            {/* Icon */}
            <div className="flex justify-center mb-5">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                <Home className="w-7 h-7 text-muted-foreground" />
              </div>
            </div>
            
            {/* Title */}
            <div className="text-center mb-6">
              <h3 className="font-bold text-xl text-primary">Work From Home</h3>
              <p className="text-sm text-muted-foreground">Remote home office</p>
            </div>

            {/* Price */}
            <div className="text-center mb-8 pb-6 border-b border-border">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-primary">Free</span>
                <span className="text-lg text-muted-foreground">/month</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">But limited professionalism</p>
            </div>
            
            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{feature.name}</span>
                  <FeatureCheck value={feature.wfh} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
