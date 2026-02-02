import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Building, Landmark, Rocket, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const programs = [
  {
    id: "tamkeen",
    title: "Tamkeen Startup Support",
    category: "GOVERNMENT-BACKED",
    description: "Bahrain's largest enterprise development agency offering non-dilutive grants, training programs, and business support for startups at any stage. Ideal for foreign entrepreneurs seeking funding without giving up equity.",
    features: ["Grants up to BHD 10,000", "No equity required", "6-12 month support cycles"],
    icon: Landmark,
    featured: true,
    color: "bg-gradient-to-br from-accent to-accent/80"
  },
  {
    id: "fintechbay",
    title: "FinTech Bay Accelerator",
    category: "FINTECH FOCUSED",
    description: "The region's leading fintech hub offering regulatory sandbox access, investor introductions, and specialized mentorship for financial technology startups.",
    icon: Building,
    featured: false
  },
  {
    id: "c5",
    title: "C5 Accelerate",
    category: "TECH ACCELERATOR",
    description: "Silicon Valley methodology meets Gulf execution. Intensive 12-week programs preparing scalable tech startups for international investment.",
    icon: Rocket,
    featured: false
  },
  {
    id: "startupbahrain",
    title: "Startup Bahrain",
    category: "ECOSYSTEM HUB",
    description: "The gateway to Bahrain's entire startup ecosystem, connecting founders with resources, events, and community.",
    icon: Globe,
    featured: false
  }
];

export function ProgramTypes() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProgram = programs.find(p => p.featured);
  const otherPrograms = programs.filter(p => !p.featured);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div variants={staggerItem}>
              <span className="section-badge">Bahrain's Startup Ecosystem</span>
            </motion.div>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Bahrain's Top <span className="text-accent">Incubator & Accelerator</span> Programs
            </motion.h2>
            <motion.p variants={staggerItem} className="text-muted-foreground max-w-2xl mx-auto">
              We partner with Bahrain's leading startup programs to give you the best chance of acceptance.
            </motion.p>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Featured Card - Spans 2 columns on larger screens */}
            {featuredProgram && (
              <motion.div
                variants={staggerItem}
                className="md:col-span-2 lg:col-span-2 group"
              >
                <div className={`${featuredProgram.color} rounded-2xl p-8 h-full text-white relative overflow-hidden`}>
                  {/* Background pattern */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                      backgroundSize: "32px 32px"
                    }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                          {featuredProgram.category}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold mt-2">{featuredProgram.title}</h3>
                      </div>
                      <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                        <featuredProgram.icon className="w-7 h-7" />
                      </div>
                    </div>

                    <p className="text-white/90 mb-6 leading-relaxed max-w-xl">
                      {featuredProgram.description}
                    </p>

                    {featuredProgram.features && (
                      <div className="flex flex-wrap gap-3 mb-8">
                        {featuredProgram.features.map((feature, idx) => (
                          <span 
                            key={idx}
                            className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}

                    <Button asChild variant="secondary" className="group-hover:translate-x-1 transition-transform">
                      <Link to="/free-consultation">
                        Learn About Tamkeen
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Other Program Cards */}
            {otherPrograms.map((program) => (
              <motion.div
                key={program.id}
                variants={staggerItem}
                className="group"
              >
                <div className="bg-background border-2 border-border rounded-2xl p-6 h-full hover:border-accent hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {program.category}
                    </span>
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <program.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <Button 
                    asChild 
                    variant="ghost" 
                    className="p-0 h-auto text-accent hover:text-accent/80 group-hover:translate-x-1 transition-transform"
                  >
                    <Link to="/free-consultation">
                      Explore Program
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
