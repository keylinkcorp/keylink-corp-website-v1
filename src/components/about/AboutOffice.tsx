import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import exteriorImage from "@/assets/about/about-office-exterior.jpg";
import interiorImage from "@/assets/about/about-office-interior.jpg";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Sanabis Exhibition Tower, Office 601\nManama, Kingdom of Bahrain",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+973 1700 8888",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@keylinkcorp.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Sun-Thu: 8:00 AM - 5:00 PM",
  },
];

export function AboutOffice() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing relative overflow-hidden bg-muted/30">
      <div className="container px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="section-badge">Visit Our Office</Badge>
          <h2 className="mb-4">Our Location</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Bahrain's business district, our modern offices 
            are equipped to serve all your business needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={exteriorImage}
                alt="Keylink Corp office building"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={interiorImage}
                alt="Keylink Corp reception"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg bg-primary flex items-center justify-center p-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-accent mb-2">601</p>
                <p className="text-white/80">Floor 6, Tower 1</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-elevated p-8"
          >
            <h3 className="text-xl font-bold text-primary mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="text-primary font-medium whitespace-pre-line">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="btn-gold w-full" asChild>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
