import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Car, Building, Landmark, Coffee, ShoppingBag, ExternalLink } from "lucide-react";

const nearbyPlaces = [
  { icon: Building, name: "Bahrain Exhibition Centre", distance: "2 min walk" },
  { icon: ShoppingBag, name: "Seef Mall", distance: "5 min drive" },
  { icon: Landmark, name: "City Centre Bahrain", distance: "7 min drive" },
  { icon: Car, name: "Free parking", distance: "Available" },
  { icon: Coffee, name: "Restaurants & cafes", distance: "Within building" },
];

export function CoworkingLocation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-secondary/30" />
        {/* Gold accent */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse 50% 50% at 80% 50%, hsl(var(--gold) / 0.06) 0%, transparent 50%)`,
          }}
        />
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
            maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-badge">Our Location</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-primary">
            Strategically Located in Sanabis
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Our coworking space is situated in Sanabis Exhibition Tower, 
            offering easy access to major shopping destinations and business centers
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border border-border bg-secondary/50 h-[450px] group"
          >
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                  linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
                `,
                backgroundSize: "30px 30px",
              }}
            />
            
            {/* Map placeholder content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center animate-pulse">
                    <MapPin className="w-10 h-10 text-accent" />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 rounded-full bg-accent/10 animate-ping" />
                </div>
                <p className="text-muted-foreground mb-6 text-lg">Interactive map coming soon</p>
                <a
                  href="https://maps.google.com/?q=Sanabis+Exhibition+Tower+Bahrain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 hover:scale-[1.02]"
                >
                  <MapPin className="w-5 h-5" />
                  View on Google Maps
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-accent/30 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-accent/30 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-accent/30 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-accent/30 rounded-br-lg" />
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="bg-background rounded-2xl border border-border p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Keylink Coworking Space</h3>
                  <p className="text-muted-foreground">
                    Sanabis Exhibition Tower<br />
                    Sanabis, Kingdom of Bahrain
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="font-semibold text-primary mb-4">Nearby Landmarks</h4>
                <div className="space-y-3">
                  {nearbyPlaces.map((place, index) => {
                    const Icon = place.icon;
                    return (
                      <motion.div 
                        key={index} 
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-secondary/50 transition-colors group"
                        whileHover={{ x: 4 }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                            <Icon className="w-4 h-4 text-accent" />
                          </div>
                          <span className="text-muted-foreground">{place.name}</span>
                        </div>
                        <span className="text-sm text-accent font-medium">{place.distance}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Transport Info Card */}
            <div className="bg-primary rounded-2xl p-6 text-primary-foreground overflow-hidden relative">
              <div className="relative z-10">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Car className="w-5 h-5 text-accent" />
                  Getting Here
                </h4>
                <p className="text-primary-foreground/70 leading-relaxed">
                  Our coworking space is easily accessible by car with free parking available. 
                  Located near Seef Mall and City Centre Bahrain, the location is well-connected 
                  to major highways and just 20 minutes from Bahrain International Airport.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
