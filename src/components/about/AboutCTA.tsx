import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import ctaBackground from "@/assets/about/about-cta-background.jpg";

export function AboutCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={ctaBackground}
          alt="Bahrain cityscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 overlay-navy-gradient" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 floating-orb floating-orb-gold animate-float opacity-30" />
      <div className="absolute bottom-10 left-10 w-80 h-80 floating-orb floating-orb-gold animate-float-slow opacity-20" />

      {/* Content */}
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Badge className="bg-accent/20 text-accent border-accent/30 mb-6 px-4 py-1.5">
            Let's Work Together
          </Badge>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your{" "}
            <span className="text-accent">Business Journey?</span>
          </h2>

          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
            Whether you're forming a new company, expanding operations, or need 
            ongoing business support, our team is ready to help you succeed in Bahrain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-gold" size="lg" asChild>
              <a href="https://wa.me/97317008888" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Free Consultation
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <a href="tel:+97317008888">
                <Phone className="w-5 h-5 mr-2" />
                Call +973 1700 8888
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
