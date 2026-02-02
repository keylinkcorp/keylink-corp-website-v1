import { Users, Award, Building2, Star, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/AnimatedCounter";

// Import workspace images
import hotDeskImage from "@/assets/coworking/hot-desk.jpg";
import privateOfficeImage from "@/assets/coworking/private-office.jpg";
import meetingRoomImage from "@/assets/coworking/meeting-room.jpg";
import loungeKitchenImage from "@/assets/coworking/lounge-kitchen.jpg";

const workspaceImages = [
  { id: 1, title: "Hot Desk", image: hotDeskImage },
  { id: 2, title: "Dedicated Desk", image: privateOfficeImage },
  { id: 3, title: "Private Office", image: meetingRoomImage },
  { id: 4, title: "Meeting Room", image: loungeKitchenImage },
];

const trustIndicators = [
  { icon: Users, value: 500, suffix: "+", label: "Active Members" },
  { icon: Award, value: 10, suffix: "+", label: "Years Experience" },
  { icon: Building2, value: 50, suffix: "+", label: "Workspace Options" },
  { icon: Star, value: 98, suffix: "%", label: "Satisfaction Rate" },
];

export function CoworkingHero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-background">
      {/* Gold Radial Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 70% 20%, hsl(var(--gold) / 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 20% 80%, hsl(var(--gold) / 0.1) 0%, transparent 50%)
          `,
        }}
      />

      {/* Dot Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div>
              <span className="section-badge inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Premium Coworking Space
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-[1.1]">
              Find Your Perfect{" "}
              <span className="text-accent">Flexible Workspace</span> in Manama
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Hot desks, private offices & meeting rooms with high-speed WiFi, 
              business address, and networking opportunities. Flexible memberships 
              starting from BHD 15/day.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="h-14 px-8 rounded-2xl bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg shadow-accent/20 transition-all hover:scale-[1.02]"
              >
                Book a Free Tour
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 rounded-2xl border-2 border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/40"
              >
                View Pricing
              </Button>
            </div>
          </div>

          {/* Right Side - 2x2 Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {workspaceImages.map((workspace) => (
              <div
                key={workspace.id}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-lg cursor-pointer"
              >
                {/* Image */}
                <img
                  src={workspace.image}
                  alt={`${workspace.title} workspace`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Gold Accent on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Title Badge */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-accent text-accent-foreground text-sm font-semibold shadow-lg">
                    {workspace.title}
                  </span>
                </div>
                
                {/* Decorative Border on Hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-accent/0 group-hover:border-accent/50 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustIndicators.map((indicator, index) => {
              const Icon = indicator.icon;
              return (
                <div
                  key={index}
                  className="bg-background rounded-xl border border-border px-5 py-5 text-center group hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    <AnimatedCounter 
                      value={indicator.value} 
                      suffix={indicator.suffix}
                      duration={2}
                    />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{indicator.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
}
