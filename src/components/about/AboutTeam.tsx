import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Quote } from "lucide-react";

// Team member data with placeholder images
const teamMembers = [
  {
    name: "Ahmed Al-Khalifa",
    role: "CEO & Founder",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "20+ years in Bahrain business consulting",
    featured: true,
    quote: "Every business deserves a chance to thrive. We make that happen.",
  },
  {
    name: "Fatima Hassan",
    role: "Director of Operations",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Expert in regulatory compliance",
  },
  {
    name: "Mohammed Ali",
    role: "Head of Legal Services",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    bio: "Former MOIC advisor",
  },
  {
    name: "Sara Ibrahim",
    role: "Client Relations Manager",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Fluent in 4 languages",
  },
  {
    name: "Khalid Rahman",
    role: "Senior PRO Consultant",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    bio: "10+ years PRO experience",
  },
  {
    name: "Noura Abdulrahman",
    role: "Finance Manager",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    bio: "CPA certified accountant",
  },
  {
    name: "Hassan Jameel",
    role: "Visa & Immigration Lead",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    bio: "LMRA specialist",
  },
  {
    name: "Maryam Al-Dosari",
    role: "Business Development",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    bio: "Growing client partnerships",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export function AboutTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const featuredMember = teamMembers.find((m) => m.featured);
  const otherMembers = teamMembers.filter((m) => !m.featured);

  return (
    <section ref={ref} className="section-spacing relative overflow-hidden">
      {/* Dashed Center Fade Grid Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          maskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in" as const,
        }}
      />
      
      {/* Radial Gold Gradient from Center */}
      <div className="absolute inset-0 overlay-gold-radial-center" />
      
      {/* Floating Orb */}
      <div className="absolute bottom-20 left-10 w-64 h-64 floating-orb floating-orb-gold animate-float opacity-20" />

      <div className="container px-4 relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <Badge className="section-badge">Meet Our Team</Badge>
          </motion.div>
          <motion.h2 variants={itemVariants} className="mb-4">
            The People Behind Your Success
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of experts brings decades of combined experience in 
            Bahrain business services.
          </motion.p>
        </motion.div>

        {/* Featured Founder Card with Gold Border Glow */}
        {featuredMember && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 bg-primary rounded-3xl overflow-hidden relative group"
          >
            {/* Gold glow on hover */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                boxShadow: "0 0 40px rgba(199, 167, 99, 0.3), inset 0 0 0 2px rgba(199, 167, 99, 0.3)"
              }}
            />
            
            <div className="absolute inset-0 pattern-dots opacity-5" />
            
            <div className="grid md:grid-cols-2 relative z-10">
              <div className="relative h-80 md:h-auto">
                <img
                  src={featuredMember.image}
                  alt={featuredMember.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/50 md:to-primary" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-accent/20 text-accent border-accent/30">
                  Founder & CEO
                </Badge>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {featuredMember.name}
                </h3>
                <p className="text-white/70 mb-6">{featuredMember.bio}</p>
                
                <div className="relative bg-white/10 rounded-xl p-6 mb-6 backdrop-blur-sm">
                  <Quote className="absolute top-3 left-3 w-6 h-6 text-accent/40" />
                  <p className="text-white/90 italic pl-6">
                    "{featuredMember.quote}"
                  </p>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Team Grid with Shimmer Effect */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {otherMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-square card-glow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="shimmer" />
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white/80 text-sm">{member.bio}</p>
                  <a
                    href="#"
                    className="mt-2 text-accent hover:text-accent/80"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-semibold text-primary">{member.name}</h4>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
