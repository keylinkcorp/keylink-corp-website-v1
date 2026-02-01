import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Train, Car, Building, Landmark, Coffee } from "lucide-react";

const nearbyPlaces = [
  { icon: Building, name: "Bahrain Financial Harbour", distance: "5 min walk" },
  { icon: Landmark, name: "Central Bank of Bahrain", distance: "3 min walk" },
  { icon: Train, name: "Exhibition Avenue", distance: "7 min walk" },
  { icon: Car, name: "Free street parking", distance: "Available" },
  { icon: Coffee, name: "Restaurants & cafes", distance: "Within building" },
];

export function CoworkingLocation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Pattern */}
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
          <span className="section-badge">Our Location</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Strategically Located in <span className="text-accent">Manama</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our coworking space is situated in Bahrain's premier business district, 
            offering easy access to major financial institutions and government offices.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border border-border bg-secondary h-[400px]"
          >
            {/* Map Placeholder - Replace with actual map embed */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <p className="text-muted-foreground mb-4">Interactive map</p>
                <a
                  href="https://maps.google.com/?q=Diplomatic+Area+Manama+Bahrain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  View on Google Maps
                </a>
              </div>
            </div>
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Address Card */}
            <div className="bg-background rounded-2xl border border-border p-8 mb-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Keylink Coworking Space</h3>
                  <p className="text-muted-foreground">
                    Diplomatic Area, Building 247<br />
                    Road 1705, Block 317<br />
                    Manama, Kingdom of Bahrain
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="font-medium text-primary mb-4">Nearby Landmarks</h4>
                <div className="space-y-3">
                  {nearbyPlaces.map((place, index) => {
                    const Icon = place.icon;
                    return (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4 text-accent" />
                          <span className="text-muted-foreground">{place.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{place.distance}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Transport Info */}
            <div className="bg-secondary/50 rounded-2xl border border-border p-6">
              <h4 className="font-semibold text-primary mb-3">Getting Here</h4>
              <p className="text-muted-foreground leading-relaxed">
                Our coworking space is easily accessible by car with ample parking available. 
                The location is well-connected to major highways and just 15 minutes from 
                Bahrain International Airport. Public transportation options and taxi 
                services are readily available in the area.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
