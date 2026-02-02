import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Users, Building2, Clock, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import hotDeskImg from "@/assets/coworking/hot-desk.jpg";
import privateOfficeImg from "@/assets/coworking/private-office.jpg";
import meetingRoomImg from "@/assets/coworking/meeting-room.jpg";
import loungeImg from "@/assets/coworking/lounge-kitchen.jpg";

const workspaces = [
  {
    id: "hot-desk",
    title: "Hot Desk / Day Pass",
    description: "Perfect for freelancers and remote workers who need occasional access to a professional workspace.",
    price: "From BHD 15/day",
    features: ["High-speed WiFi", "Free coffee & tea", "Meeting room credits", "Printing access"],
    icon: Laptop,
    image: hotDeskImg,
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: "dedicated-desk",
    title: "Dedicated Desk",
    description: "Your own permanent desk in our shared workspace with secure storage.",
    price: "From BHD 99/month",
    features: ["Personal storage", "24/7 access", "Mail handling", "Business address"],
    icon: Users,
    image: loungeImg,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "private-office",
    title: "Private Office",
    description: "Fully furnished private office spaces for teams of 2-20.",
    price: "From BHD 299/month",
    features: ["Lockable space", "Custom branding", "Meeting rooms included"],
    icon: Building2,
    image: privateOfficeImg,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "meeting-room",
    title: "Meeting Rooms",
    description: "Professional meeting rooms equipped with presentation technology.",
    price: "From BHD 25/hour",
    features: ["AV equipment", "Video conferencing", "Catering available"],
    icon: Clock,
    image: meetingRoomImg,
    gridClass: "md:col-span-2 md:row-span-1",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.7 } 
  },
};

export function WorkspaceTypes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/20" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-[5%] w-72 h-72 floating-orb floating-orb-gold animate-float opacity-30" />
      <div className="absolute bottom-20 right-[10%] w-56 h-56 floating-orb floating-orb-navy animate-float-slow opacity-40" />

      {/* Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
          opacity: 0.5,
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-badge">Workspace Options</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Perfect <span className="text-accent">Workspace</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From hot desks for daily flexibility to private offices for established teams, 
            find the ideal workspace solution for your business in Bahrain.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-5 md:gap-6"
        >
          {workspaces.map((workspace) => {
            const Icon = workspace.icon;
            const isLarge = workspace.gridClass.includes("col-span-2") && workspace.gridClass.includes("row-span-2");
            
            return (
              <motion.div
                key={workspace.id}
                variants={staggerItem}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer card-glow ${workspace.gridClass}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={workspace.image}
                    alt={workspace.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Multi-layer Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy))] via-[hsl(var(--navy)/0.5)] to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--gold)/0.1)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Glass Price Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="glass-card px-4 py-2 text-[hsl(var(--gold))] text-sm font-bold">
                    {workspace.price}
                  </div>
                </div>

                {/* Content */}
                <div className={`relative z-10 h-full flex flex-col justify-end p-6 ${isLarge ? 'md:p-8' : ''}`}>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[hsl(var(--gold)/0.2)] backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--gold)/0.3)] transition-colors">
                    <Icon className="w-6 h-6 text-[hsl(var(--gold))]" />
                  </div>

                  <h3 className={`font-bold text-white mb-2 ${isLarge ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                    {workspace.title}
                  </h3>

                  <p className={`text-white/70 mb-4 leading-relaxed ${isLarge ? '' : 'text-sm line-clamp-2'}`}>
                    {workspace.description}
                  </p>

                  {/* Features (visible on larger cards or hover) */}
                  <div className={`flex flex-wrap gap-2 mb-5 ${isLarge ? '' : 'opacity-0 group-hover:opacity-100 transition-opacity'}`}>
                    {workspace.features.slice(0, isLarge ? 4 : 2).map((feature, index) => (
                      <span
                        key={index}
                        className="glass-card px-3 py-1 text-xs text-white/80"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full md:w-auto border-white/30 text-white hover:bg-white/10 hover:border-white/50 group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
