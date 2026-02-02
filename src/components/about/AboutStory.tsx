import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";
import foundingImage from "@/assets/about/about-story-founding.jpg";

const timelineEvents = [
  {
    year: "2014",
    title: "Founded with a Vision",
    description: "Keylink Corp was established to simplify business formation in Bahrain, starting with just a small team of dedicated professionals.",
  },
  {
    year: "2017",
    title: "Expanded Services",
    description: "We grew to offer comprehensive PRO services, visa processing, and accounting solutions, becoming a one-stop business hub.",
  },
  {
    year: "2020",
    title: "New Headquarters",
    description: "Moved to our modern offices in Sanabis Exhibition Tower, equipped to serve the growing needs of our clients.",
  },
  {
    year: "Today",
    title: "1,000+ Businesses Served",
    description: "We're proud to be Bahrain's leading business services partner, helping entrepreneurs from around the world succeed.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export function AboutStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-50" />
      
      <div className="container px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={foundingImage}
                alt="Keylink Corp founding team"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-6 left-6 glass-card px-6 py-3"
              >
                <span className="text-accent font-bold text-xl">Est. 2014</span>
              </motion.div>
            </div>

            {/* Decorative Gold Shape */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-accent/30 rounded-2xl -z-10" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <Badge className="section-badge mb-4">Our Story</Badge>
            </motion.div>

            <motion.h2 variants={itemVariants} className="mb-6">
              From Vision to Bahrain's Leading Business Partner
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-8">
              What started as a small consultancy has grown into a comprehensive 
              business services powerhouse, trusted by entrepreneurs and corporations alike.
            </motion.p>

            {/* Timeline */}
            <div className="space-y-6">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  variants={itemVariants}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">{event.year}</span>
                  </div>
                  <div className="pt-2">
                    <h4 className="font-semibold text-primary mb-1">{event.title}</h4>
                    <p className="text-muted-foreground text-sm">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pull Quote */}
            <motion.div
              variants={itemVariants}
              className="mt-10 p-6 bg-primary rounded-2xl relative"
            >
              <Quote className="absolute top-4 left-4 w-8 h-8 text-accent/30" />
              <p className="text-white/90 italic pl-8">
                "We built Keylink Corp on the belief that every entrepreneur deserves 
                expert guidance and unwavering support on their business journey."
              </p>
              <p className="text-accent font-semibold mt-4 pl-8">— Founding Team</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
