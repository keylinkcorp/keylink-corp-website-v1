import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Wifi,
  Coffee,
  Users,
  Printer,
  Mail,
  Calendar,
  Clock,
  Phone,
  Lock,
  PhoneCall,
  UtensilsCrossed,
  Car,
} from "lucide-react";

const amenities = [
  { icon: Wifi, title: "High-Speed WiFi", description: "Gigabit fiber internet for seamless connectivity" },
  { icon: Coffee, title: "Free Coffee & Tea", description: "Premium beverages available all day" },
  { icon: Users, title: "Meeting Rooms", description: "Book professional spaces for client meetings" },
  { icon: Printer, title: "Printing Services", description: "High-quality printing, scanning & copying" },
  { icon: Mail, title: "Mail Handling", description: "Professional mail and package reception" },
  { icon: Calendar, title: "Networking Events", description: "Regular community events and workshops" },
  { icon: Clock, title: "24/7 Access", description: "Work on your schedule with round-the-clock access" },
  { icon: Phone, title: "Reception Services", description: "Professional front desk support" },
  { icon: Lock, title: "Lockable Storage", description: "Secure personal storage lockers" },
  { icon: PhoneCall, title: "Phone Booths", description: "Private spaces for calls and video meetings" },
  { icon: UtensilsCrossed, title: "Kitchen Facilities", description: "Fully equipped kitchen and dining area" },
  { icon: Car, title: "Parking", description: "Convenient parking spaces available" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
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

export function CoworkingAmenities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-[hsl(var(--navy))]">
      {/* Floating Orbs */}
      <div className="absolute top-10 right-[20%] w-80 h-80 floating-orb floating-orb-gold animate-float opacity-20" />
      <div className="absolute bottom-20 left-[10%] w-64 h-64 floating-orb floating-orb-gold animate-float-slow opacity-15" />

      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(199, 167, 99, 0.3) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gradient Mesh */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 50% 40% at 20% 30%, hsl(var(--gold) / 0.1) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 70%, hsl(var(--gold) / 0.08) 0%, transparent 60%)
          `,
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(var(--gold)/0.15)] text-[hsl(var(--gold))] text-sm font-medium mb-4 border border-[hsl(var(--gold)/0.2)]">
            All Included
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Premium <span className="text-[hsl(var(--gold))]">Amenities</span> & Services
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Every membership includes access to our full range of professional amenities, 
            designed to help you work productively and connect with others.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group glass-card p-6 transition-all duration-300 hover:bg-white/15"
              >
                {/* Icon with animated glow */}
                <div className="relative w-14 h-14 rounded-xl bg-[hsl(var(--gold)/0.15)] flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--gold)/0.25)] transition-all duration-300">
                  <div className="absolute inset-0 rounded-xl bg-[hsl(var(--gold)/0.2)] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon className="w-7 h-7 text-[hsl(var(--gold))] relative z-10 transition-transform group-hover:scale-110 duration-300" />
                </div>

                <h3 className="font-semibold text-white mb-2 group-hover:text-[hsl(var(--gold))] transition-colors">
                  {amenity.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {amenity.description}
                </p>

                {/* Shimmer on hover */}
                <div className="shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
