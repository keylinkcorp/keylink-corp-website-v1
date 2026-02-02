import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Shield, Award, Lightbulb } from "lucide-react";
import missionImage from "@/assets/about/about-value-client.jpg";
import collabImage from "@/assets/about/about-value-excellence.jpg";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Transparent and honest in every interaction",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Premium service delivery, every time",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Modern solutions for modern businesses",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function AboutMission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing relative overflow-hidden bg-muted/30">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient-gold opacity-60" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <Badge className="section-badge">Mission & Values</Badge>
          </motion.div>
          <motion.h2 variants={itemVariants} className="mb-4">
            What Drives Us Forward
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our mission and values guide every decision we make and every service we provide.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          {/* Mission Card - Large */}
          <motion.div
            variants={itemVariants}
            className="md:row-span-2 relative rounded-2xl overflow-hidden min-h-[400px] group"
          >
            <img
              src={missionImage}
              alt="Our mission in action"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 overlay-navy-gradient" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-white/80">
                To empower entrepreneurs and businesses with seamless, end-to-end 
                solutions that transform complex regulatory processes into straightforward 
                journeys toward success.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={itemVariants}
            className="relative rounded-2xl overflow-hidden bg-primary p-8 min-h-[200px]"
          >
            <div className="absolute inset-0 pattern-dots opacity-10" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
              <p className="text-white/80 text-sm">
                To be the most trusted and preferred business partner in Bahrain, 
                recognized for excellence, integrity, and client success.
              </p>
            </div>
          </motion.div>

          {/* Image Card */}
          <motion.div
            variants={itemVariants}
            className="relative rounded-2xl overflow-hidden min-h-[200px] group"
          >
            <img
              src={collabImage}
              alt="Team collaboration"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <Badge className="bg-accent/90 text-primary font-semibold">
                10+ Years of Excellence
              </Badge>
            </div>
          </motion.div>
        </motion.div>

        {/* Values Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="card-elevated-hover p-8 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">{value.title}</h4>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
