import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Quote, ChevronDown, ChevronUp } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

// Team member data with placeholder images
const teamMembers = [
  {
    name: "Ahmed Al-Khalifa",
    role: "CEO & Founder",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "20+ years in Bahrain business consulting",
    featured: true,
    quote: "Every business deserves a chance to thrive. We make that happen.",
    stats: { clients: "500+", experience: "20 Years", team: "40+" },
  },
  {
    name: "Fatima Hassan",
    role: "Director of Operations",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Expert in regulatory compliance",
    wide: true,
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
    wide: true,
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
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export function AboutTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const featuredMember = teamMembers.find((m) => m.featured);
  const otherMembers = teamMembers.filter((m) => !m.featured);
  const [showAll, setShowAll] = useState(false);

  const displayedMembers = showAll ? otherMembers : otherMembers.slice(0, 6);

  return (
    <section ref={ref} className="section-spacing relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px]"
          style={{
            background: "radial-gradient(circle, rgba(199, 167, 99, 0.1) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px]"
          style={{
            background: "radial-gradient(circle, rgba(0, 44, 77, 0.08) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Hex grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 17.32v34.64L30 60 0 51.96V17.32L30 0z' fill='none' stroke='%23002C4D' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="section-badge">Meet Our Team</Badge>
          <h2 className="mb-4">The People Behind Your Success</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of experts brings decades of combined experience in 
            Bahrain business services.
          </p>
        </motion.div>

        {/* Featured Founder Card - Horizontal Layout with Particles */}
        {featuredMember && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="relative bg-primary rounded-3xl overflow-hidden group">
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(199, 167, 99, 0.1) 0%, transparent 50%, rgba(199, 167, 99, 0.05) 100%)",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 pattern-dots opacity-5" />
              
              {/* Gold glow on hover */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 60px rgba(199, 167, 99, 0.15), 0 0 40px rgba(199, 167, 99, 0.2)"
                }}
              />
              
              <div className="grid md:grid-cols-[350px_1fr] relative z-10">
                {/* Photo with mask */}
                <div className="relative h-80 md:h-auto">
                  <img
                    src={featuredMember.image}
                    alt={featuredMember.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary md:bg-gradient-to-r" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent md:hidden" />
                  
                  {/* Ring decoration */}
                  <motion.div
                    className="absolute bottom-4 left-4 w-20 h-20 rounded-full border-2 border-accent/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                
                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-accent/20 text-accent border-accent/30">
                    Founder & CEO
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {featuredMember.name}
                  </h3>
                  <p className="text-white/70 mb-6">{featuredMember.bio}</p>
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(featuredMember.stats).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-white/5 rounded-xl">
                        <p className="text-2xl font-bold text-accent">{value}</p>
                        <p className="text-xs text-white/50 capitalize">{key}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <div className="relative bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <Quote className="absolute top-3 left-3 w-5 h-5 text-accent/40" />
                    <p className="text-white/90 italic pl-6">
                      "{featuredMember.quote}"
                    </p>
                  </div>

                  <a
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors w-fit"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-medium">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Masonry-Style Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          {displayedMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className={`group relative ${member.wide ? "md:col-span-2" : ""}`}
            >
              <TiltCard tiltAmount={10} glareEnabled>
                <div className={`relative rounded-2xl overflow-hidden ${member.wide ? "aspect-[2/1]" : "aspect-square"}`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Role badge floating */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-accent/90 rounded-full text-primary text-xs font-semibold">
                    {member.role.split(" ")[0]}
                  </div>
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <h4 className="font-bold text-white text-lg">{member.name}</h4>
                      <p className="text-white/70 text-sm">{member.role}</p>
                    </motion.div>
                    
                    {/* Reveal on hover */}
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <p className="text-white/80 text-sm mb-3">{member.bio}</p>
                      <a href="#" className="text-accent hover:text-accent/80">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  {/* Border glow on hover */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: "inset 0 0 0 2px rgba(199, 167, 99, 0.5)"
                    }}
                  />
                </div>
              </TiltCard>
            </motion.div>
          ))}

          {/* View All Card */}
          {!showAll && otherMembers.length > 6 && (
            <motion.div
              variants={itemVariants}
              className="group relative"
            >
              <button
                onClick={() => setShowAll(true)}
                className="w-full h-full aspect-square rounded-2xl bg-muted border-2 border-dashed border-accent/30 flex flex-col items-center justify-center gap-3 hover:bg-accent/5 hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <ChevronDown className="w-6 h-6 text-accent" />
                </div>
                <span className="text-primary font-medium">View All Team</span>
                <span className="text-muted-foreground text-sm">+{otherMembers.length - 6} more</span>
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Collapse button */}
        {showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8"
          >
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-muted rounded-full text-primary font-medium hover:bg-accent/10 transition-colors"
            >
              <ChevronUp className="w-5 h-5" />
              Show Less
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
