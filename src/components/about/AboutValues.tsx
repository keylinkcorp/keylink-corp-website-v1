import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Award } from "lucide-react";
import clientImage from "@/assets/about/about-value-client.jpg";
import integrityImage from "@/assets/about/about-value-integrity.jpg";
import excellenceImage from "@/assets/about/about-value-excellence.jpg";

const values = [
  {
    icon: Heart,
    title: "Client-First Approach",
    tagline: "Your Success is Our Success",
    description:
      "We put our clients at the center of everything we do. From your first consultation to long-term partnership, we're committed to understanding your unique needs and delivering personalized solutions that drive real results.",
    image: clientImage,
    reverse: false,
  },
  {
    icon: Shield,
    title: "Unwavering Integrity",
    tagline: "Transparent, Honest & Ethical",
    description:
      "Trust is the foundation of every relationship we build. We maintain complete transparency in our processes, provide honest advice even when it's not what you want to hear, and uphold the highest ethical standards in all our dealings.",
    image: integrityImage,
    reverse: true,
  },
  {
    icon: Award,
    title: "Commitment to Excellence",
    tagline: "Premium Service, Every Time",
    description:
      "We don't settle for good enough. Our team continuously strives to exceed expectations, staying updated with the latest regulations, best practices, and innovations to deliver exceptional service quality.",
    image: excellenceImage,
    reverse: false,
  },
];

export function AboutValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing relative overflow-hidden">
      {/* Grid Lines Pattern */}
      <div className="absolute inset-0 pattern-grid-lines-light" />
      
      <div className="container px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="section-badge">Our Core Values</Badge>
          <h2 className="mb-4">The Principles That Define Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These values aren't just words on a wall—they're the foundation of 
            how we work, how we treat clients, and how we build lasting partnerships.
          </p>
        </motion.div>

        {/* Alternating Value Sections */}
        <div className="space-y-24">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center relative ${
                value.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Alternating radial gradient per section */}
              <div 
                className="absolute inset-0 -z-10 rounded-3xl"
                style={{
                  background: index % 2 === 0 
                    ? "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(199, 167, 99, 0.06) 0%, transparent 60%)"
                    : "radial-gradient(ellipse 80% 60% at 80% 50%, rgba(199, 167, 99, 0.06) 0%, transparent 60%)"
                }}
              />
              
              {/* Image */}
              <div
                className={`relative ${value.reverse ? "lg:order-2" : ""}`}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl group hover-zoom-glow">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>
                {/* Enhanced Decorative Corner Accents */}
                <div
                  className={`absolute -bottom-6 ${
                    value.reverse ? "-left-6" : "-right-6"
                  } w-24 h-24 bg-accent/20 rounded-2xl -z-10`}
                  style={{
                    boxShadow: "0 0 30px rgba(199, 167, 99, 0.2)"
                  }}
                />
                <div
                  className={`absolute -top-6 ${
                    value.reverse ? "-right-6" : "-left-6"
                  } w-16 h-16 border-2 border-accent/40 rounded-xl -z-10`}
                />
                {/* Additional gold accent line */}
                <div
                  className={`absolute ${value.reverse ? "right-0 top-1/2" : "left-0 top-1/2"} w-1 h-20 bg-accent/30 rounded-full -z-10 transform -translate-y-1/2 ${value.reverse ? "translate-x-4" : "-translate-x-4"}`}
                />
              </div>

              {/* Content */}
              <div className={value.reverse ? "lg:order-1" : ""}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>
                  <Badge className="bg-accent/10 text-accent border-accent/20">
                    {value.tagline}
                  </Badge>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
