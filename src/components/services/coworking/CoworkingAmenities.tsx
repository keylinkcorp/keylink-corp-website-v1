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
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export function CoworkingAmenities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
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
          <span className="section-badge">All Included</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Premium <span className="text-accent">Amenities</span> & Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every membership includes access to our full range of professional amenities, 
            designed to help you work productively and connect with others.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group p-6 rounded-2xl bg-background border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-primary mb-2">{amenity.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {amenity.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
