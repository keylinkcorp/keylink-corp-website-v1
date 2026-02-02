import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Laptop, Users, Building2, Clock } from "lucide-react";

const workspaces = [
  {
    id: "hot-desk",
    title: "Hot Desk",
    price: "BHD 15",
    period: "/day",
    description: "Flexible daily access",
    icon: Laptop,
  },
  {
    id: "dedicated-desk",
    title: "Dedicated Desk",
    price: "BHD 99",
    period: "/month",
    description: "Your permanent spot",
    icon: Users,
  },
  {
    id: "private-office",
    title: "Private Office",
    price: "BHD 299",
    period: "/month",
    description: "Team workspace",
    icon: Building2,
  },
  {
    id: "meeting-room",
    title: "Meeting Room",
    price: "BHD 25",
    period: "/hour",
    description: "Hourly booking",
    icon: Clock,
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5 } 
  },
};

export function WorkspaceTypes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-background">
      {/* Subtle Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Choose Your Perfect <span className="text-accent">Workspace</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From hot desks for daily flexibility to private offices for established teams, 
            find the ideal workspace solution for your business.
          </p>
        </motion.div>

        {/* 4-Column Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {workspaces.map((workspace) => {
            const Icon = workspace.icon;
            return (
              <motion.div
                key={workspace.id}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="group bg-background rounded-xl border border-border p-6 md:p-8 text-center transition-all duration-300 hover:border-accent/30 hover:shadow-xl cursor-pointer"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                  {workspace.title}
                </h3>

                {/* Price */}
                <div className="mb-3">
                  <span className="text-2xl md:text-3xl font-bold text-accent">
                    {workspace.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {workspace.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {workspace.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
