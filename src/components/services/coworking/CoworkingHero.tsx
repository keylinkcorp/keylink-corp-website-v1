import { motion, useScroll, useTransform } from "framer-motion";
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
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-[hsl(var(--navy))]">
      {/* Navy Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--navy))] via-[hsl(var(--navy-light)/0.95)] to-[hsl(var(--navy))]" />

      {/* Animated Floating Orbs */}
      <div className="absolute top-20 right-[15%] w-80 h-80 floating-orb floating-orb-gold animate-float opacity-40" />
      <div className="absolute bottom-32 left-[10%] w-48 h-48 floating-orb floating-orb-gold animate-float-slow opacity-30" />
      <div className="absolute top-1/3 left-[25%] w-24 h-24 floating-orb floating-orb-navy animate-pulse-glow opacity-50" />

      {/* Dot Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(199, 167, 99, 0.4) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div style={{ opacity }} className="container relative z-10 mx-auto px-4 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="glass-card inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-medium">
                <Sparkles className="w-4 h-4 text-[hsl(var(--gold))]" />
                Premium Coworking Space
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Find Your Perfect{" "}
              <span className="text-[hsl(var(--gold))]">Flexible Workspace</span> in Manama
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl"
            >
              Hot desks, private offices & meeting rooms with high-speed WiFi, 
              business address, and networking opportunities. Flexible memberships 
              starting from BHD 15/day.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                className="h-14 px-8 rounded-2xl bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-dark))] text-[hsl(var(--navy))] font-semibold shadow-lg shadow-[hsl(var(--gold)/0.3)] transition-all hover:scale-[1.02]"
              >
                Book a Free Tour
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 rounded-2xl border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm"
              >
                View Pricing
              </Button>
            </motion.div>
          </div>

          {/* Right Side - 2x2 Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {workspaceImages.map((workspace, index) => (
              <motion.div
                key={workspace.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer"
              >
                {/* Image */}
                <img
                  src={workspace.image}
                  alt={`${workspace.title} workspace`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy)/0.85)] via-[hsl(var(--navy)/0.2)] to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Gold Accent on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold)/0.15)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Title Badge */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[hsl(var(--gold))] text-[hsl(var(--navy))] text-sm font-semibold shadow-lg">
                    {workspace.title}
                  </span>
                </div>
                
                {/* Decorative Border on Hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-[hsl(var(--gold)/0)] group-hover:border-[hsl(var(--gold)/0.5)] transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 lg:mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustIndicators.map((indicator, index) => {
              const Icon = indicator.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="glass-card px-5 py-5 text-center group hover:bg-white/10 transition-all duration-300"
                >
                  <Icon className="w-6 h-6 text-[hsl(var(--gold))] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl md:text-3xl font-bold text-[hsl(var(--gold))]">
                    <AnimatedCounter 
                      value={indicator.value} 
                      suffix={indicator.suffix}
                      duration={2}
                    />
                  </div>
                  <div className="text-sm text-white/70 mt-1">{indicator.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
}
