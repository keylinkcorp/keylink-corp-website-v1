import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Users, Clock, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
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

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground) / 0.15) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent z-10" />

      {/* Hero Image */}
      <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full">
        <img
          src={heroImage}
          alt="Modern coworking space in Bahrain with professionals working"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="container relative z-20 mx-auto px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
              <CheckCircle2 className="w-4 h-4" />
              Premium Coworking Space in Bahrain
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary mb-6 leading-[1.1]"
          >
            Find Your Perfect{" "}
            <span className="text-accent">Flexible Workspace</span> in Manama
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
          >
            Hot desks, private offices & meeting rooms with high-speed WiFi, 
            business address, and networking opportunities. Flexible memberships 
            starting from BHD 15/day.
          </motion.p>

          {/* Tab Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6"
          >
            <div className="inline-flex flex-wrap gap-2 p-1.5 bg-secondary/80 rounded-xl backdrop-blur-sm border border-border/50">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "text-muted-foreground hover:text-primary hover:bg-background/80"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 mb-8"
          >
            <div className="relative flex-1">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by location in Bahrain..."
                className="w-full h-12 pl-12 pr-4 rounded-xl border border-border bg-background/90 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
              />
            </div>
            <Button size="lg" className="h-12 px-8 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <Button size="lg" className="h-12 px-8 rounded-xl bg-primary hover:bg-primary/90">
              Book a Free Tour
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 rounded-xl border-2">
              View Pricing
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-8"
          >
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{indicator.value}</div>
                <div className="text-sm text-muted-foreground">{indicator.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
