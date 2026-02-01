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
    description: "Perfect for freelancers and remote workers who need occasional access to a professional workspace in Bahrain. Drop in any time and work from any available desk.",
    price: "From BHD 15/day",
    features: ["High-speed WiFi", "Free coffee & tea", "Meeting room credits", "Printing access"],
    icon: Laptop,
    image: hotDeskImg,
    size: "large",
  },
  {
    id: "dedicated-desk",
    title: "Dedicated Desk",
    description: "Your own permanent desk in our shared workspace. Keep your belongings secure and enjoy consistent neighbors for collaboration.",
    price: "From BHD 99/month",
    features: ["Personal storage", "24/7 access", "Mail handling", "Business address"],
    icon: Users,
    image: loungeImg,
    size: "small",
  },
  {
    id: "private-office",
    title: "Private Office",
    description: "Fully furnished private office spaces for teams of 2-20. Customizable layouts with your branding and complete privacy.",
    price: "From BHD 299/month",
    features: ["Lockable space", "Custom branding", "Meeting rooms included", "Reception services"],
    icon: Building2,
    image: privateOfficeImg,
    size: "small",
  },
  {
    id: "meeting-room",
    title: "Meeting Rooms",
    description: "Professional meeting rooms equipped with presentation technology. Book by the hour for client meetings, interviews, or team sessions.",
    price: "From BHD 25/hour",
    features: ["AV equipment", "Video conferencing", "Whiteboards", "Catering available"],
    icon: Clock,
    image: meetingRoomImg,
    size: "large",
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function WorkspaceTypes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-secondary/30 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--border) / 0.5) 1px, transparent 1px),
                            linear-gradient(to bottom, hsl(var(--border) / 0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
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
          className="grid md:grid-cols-2 gap-6"
        >
          {workspaces.map((workspace) => {
            const Icon = workspace.icon;
            return (
              <motion.div
                key={workspace.id}
                variants={staggerItem}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-background ${
                  workspace.size === "large" ? "md:row-span-1" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={workspace.image}
                    alt={workspace.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold shadow-lg">
                    {workspace.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">{workspace.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {workspace.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {workspace.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group/btn">
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
