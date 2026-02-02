import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, MapPin, Users, Clock, Building2, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/coworking/hero-coworking.jpg";

const tabs = [
  { id: "hot-desk", label: "Hot Desks", icon: Users },
  { id: "private-office", label: "Private Offices", icon: Building2 },
  { id: "meeting-room", label: "Meeting Rooms", icon: Clock },
  { id: "virtual-office", label: "Virtual Office", icon: MapPin },
];

const trustIndicators = [
  { value: "500+", label: "Active Members" },
  { value: "3", label: "Locations" },
  { value: "10+", label: "Years Experience" },
];

export function CoworkingHero() {
  const [activeTab, setActiveTab] = useState("hot-desk");
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Full Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="Modern coworking space in Bahrain with professionals working"
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>

      {/* Multi-layer Gradient Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[hsl(var(--navy))] via-[hsl(var(--navy)/0.85)] to-transparent" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[hsl(var(--navy)/0.9)] via-transparent to-[hsl(var(--navy)/0.3)]" />
      
      {/* Animated Floating Orbs */}
      <div className="absolute top-20 right-[20%] w-64 h-64 floating-orb floating-orb-gold animate-float opacity-60 z-[3]" />
      <div className="absolute bottom-40 right-[10%] w-48 h-48 floating-orb floating-orb-gold animate-float-slow opacity-40 z-[3]" />
      <div className="absolute top-1/2 left-[5%] w-32 h-32 floating-orb floating-orb-navy animate-pulse-glow z-[3]" />

      {/* Dot Pattern Overlay */}
      <div
        className="absolute inset-0 z-[4] opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(199, 167, 99, 0.5) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div style={{ opacity }} className="container relative z-10 mx-auto px-4 py-20 md:py-28">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="glass-card inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-medium">
              <Sparkles className="w-4 h-4 text-[hsl(var(--gold))]" />
              Premium Coworking Space in Bahrain
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Find Your Perfect{" "}
            <span className="text-[hsl(var(--gold))]">Flexible Workspace</span> in Manama
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed"
          >
            Hot desks, private offices & meeting rooms with high-speed WiFi, 
            business address, and networking opportunities. Flexible memberships 
            starting from BHD 15/day.
          </motion.p>

          {/* Glass Tab Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6"
          >
            <div className="inline-flex flex-wrap gap-2 p-2 glass-card">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-[hsl(var(--gold))] text-[hsl(var(--navy))] shadow-lg shadow-[hsl(var(--gold)/0.3)]"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Glassmorphism Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 mb-8"
          >
            <div className="relative flex-1 glass-card">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[hsl(var(--gold))]" />
              <input
                type="text"
                placeholder="Search by location in Bahrain..."
                className="w-full h-14 pl-12 pr-4 rounded-2xl bg-transparent text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold)/0.5)] transition-all"
              />
            </div>
            <Button 
              size="lg" 
              className="h-14 px-8 rounded-2xl bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-dark))] text-[hsl(var(--navy))] font-semibold shadow-lg shadow-[hsl(var(--gold)/0.3)] transition-all hover:scale-[1.02]"
            >
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button 
              size="lg" 
              className="h-14 px-8 rounded-2xl bg-white text-[hsl(var(--navy))] font-semibold hover:bg-white/90 shadow-xl transition-all hover:scale-[1.02]"
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

          {/* Glassmorphism Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            {trustIndicators.map((indicator, index) => (
              <div 
                key={index} 
                className="glass-card px-6 py-4 text-center min-w-[120px]"
              >
                <div className="text-2xl md:text-3xl font-bold text-[hsl(var(--gold))]">{indicator.value}</div>
                <div className="text-sm text-white/70">{indicator.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
}
