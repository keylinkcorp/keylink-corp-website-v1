import { useRef } from "react";
import { useInView } from "framer-motion";
import { Check, X, Sparkles, Building2, Landmark } from "lucide-react";

const comparisonData = [
  {
    feature: "Monthly Cost",
    coworking: "From BHD 15/day",
    traditional: "BHD 800+/month minimum",
  },
  {
    feature: "Commitment",
    coworking: "No long-term contracts",
    traditional: "1-3 year lease required",
  },
  {
    feature: "Setup Time",
    coworking: "Start working tomorrow",
    traditional: "Weeks of setup & furnishing",
  },
  {
    feature: "Utilities & Internet",
    coworking: "All included",
    traditional: "Separate bills & contracts",
  },
  {
    feature: "Maintenance & Cleaning",
    coworking: "Fully managed",
    traditional: "Your responsibility",
  },
  {
    feature: "Networking",
    coworking: "Built-in community",
    traditional: "Isolated environment",
  },
  {
    feature: "Scalability",
    coworking: "Scale up/down anytime",
    traditional: "Locked into fixed size",
  },
  {
    feature: "Meeting Rooms",
    coworking: "On-demand booking",
    traditional: "Must build or rent separately",
  },
];

export function CoworkingComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/20" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse 70% 50% at 50% 0%, hsl(var(--gold) / 0.08) 0%, transparent 50%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
            maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="section-badge">Smart Choice</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-primary">
            Why Choose Coworking?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            See the difference at a glance
          </p>
        </div>

        {/* Two Column Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Keylink Card - Highlighted */}
          <div
            className={`relative p-6 md:p-8 rounded-2xl bg-background border-2 border-accent/30 shadow-xl overflow-hidden transition-all duration-700 delay-100 hover:-translate-y-1 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent pointer-events-none" />
            
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary">Keylink Coworking</h3>
                <span className="text-sm text-accent font-medium">Recommended</span>
              </div>
            </div>
            
            {/* Feature List */}
            <div className="space-y-5">
              {comparisonData.map((item, index) => (
                <div 
                  key={item.feature} 
                  className="flex items-start gap-3"
                  style={{
                    transitionDelay: `${150 + index * 50}ms`,
                  }}
                >
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{item.coworking}</p>
                    <p className="text-sm text-muted-foreground">{item.feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traditional Card - Muted */}
          <div
            className={`p-6 md:p-8 rounded-2xl bg-secondary/40 border border-border transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-8 opacity-70">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <Landmark className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-lg text-muted-foreground">Traditional Office</h3>
            </div>
            
            {/* Feature List */}
            <div className="space-y-5">
              {comparisonData.map((item) => (
                <div key={item.feature} className="flex items-start gap-3 opacity-70">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground">{item.traditional}</p>
                    <p className="text-sm text-muted-foreground/70">{item.feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Savings Callout */}
        <div
          className={`mt-8 p-6 rounded-2xl bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border border-accent/30 text-center max-w-5xl mx-auto transition-all duration-700 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Sparkles className="w-6 h-6 text-accent" />
            <p className="text-lg md:text-xl font-bold text-primary">
              Save up to <span className="text-accent">BHD 6,000/year</span> vs traditional office leases
            </p>
            <Sparkles className="w-6 h-6 text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
