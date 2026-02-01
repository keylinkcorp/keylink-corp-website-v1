import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { staggerContainer, staggerItem, imageReveal } from "@/lib/animations";
import { Clock, Building2, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const featurePills = [
  { icon: Clock, text: "Same-Day Available" },
  { icon: Building2, text: "15+ Embassies" },
  { icon: Award, text: "99.5% Approval" }
];

export function CertificateAttestationHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern - Gold radial + dot grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        <div 
          className="absolute inset-0 bg-[radial-gradient(100%_50%_at_0%_0%,rgba(199,167,99,0.12)_0,rgba(199,167,99,0)_60%)]"
        />
        <div 
          className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]"
          style={{
            maskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)"
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content - Left Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div variants={staggerItem}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                Certificate Attestation in Bahrain
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.15] mb-6"
            >
              One Submission. 99.5% First-Time Approval.{" "}
              <span className="text-accent">Zero Confusion.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={staggerItem}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
            >
              MOFA, Embassy, and Apostille attestation for educational, commercial, and personal documents. 15+ embassies covered. From BHD 15.
            </motion.p>

            {/* Feature Pills */}
            <motion.div 
              variants={staggerItem}
              className="flex flex-wrap gap-3 mb-8"
            >
              {featurePills.map((pill, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full"
                >
                  <pill.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">{pill.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Price Anchor */}
            <motion.div variants={staggerItem} className="mb-8">
              <p className="text-sm text-muted-foreground">
                Services from{" "}
                <span className="text-2xl font-bold text-primary">BHD 15</span>
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8"
              >
                <a href="https://wa.me/97317000000" target="_blank" rel="noopener noreferrer">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Link to="#pricing">
                  View Pricing
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual - Right Side */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              {/* Visual representation with stats */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary to-primary/80 p-8 md:p-12">
                {/* Embassy flags grid representation */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {["🇦🇪", "🇸🇦", "🇰🇼", "🇶🇦", "🇴🇲", "🇮🇳", "🇵🇰", "🇵🇭", "🇪🇬"].map((flag, i) => (
                    <div key={i} className="w-full aspect-square bg-white/10 rounded-xl flex items-center justify-center text-3xl md:text-4xl">
                      {flag}
                    </div>
                  ))}
                </div>
                
                {/* Stats overlay */}
                <div className="flex justify-between text-white">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-accent">15+</div>
                    <div className="text-xs text-white/70">Embassies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-accent">99.5%</div>
                    <div className="text-xs text-white/70">Approval Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-accent">3,000+</div>
                    <div className="text-xs text-white/70">Documents</div>
                  </div>
                </div>
              </div>
              
              {/* Floating stat badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg px-6 py-4 border border-border">
                <div className="text-3xl font-bold text-accent">8+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
