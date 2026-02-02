import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Building, FileCheck, Users2, Award } from "lucide-react";

const credentials = [
  {
    icon: Building,
    title: "MOIC Registered",
    description: "Officially registered with the Ministry of Industry and Commerce",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: FileCheck,
    title: "LMRA Approved",
    description: "Authorized to handle labor and immigration services",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Users2,
    title: "Chamber Member",
    description: "Active member of the Bahrain Chamber of Commerce",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Award,
    title: "Tamkeen Partner",
    description: "Official partner in supporting local business development",
    color: "bg-accent/10 text-accent",
  },
];

const partners = [
  "Ministry of Industry & Commerce",
  "Labour Market Regulatory Authority",
  "Bahrain Chamber of Commerce",
  "Tamkeen",
  "Central Bank of Bahrain",
  "EDB Bahrain",
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

export function AboutCredentials() {
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
          <Badge className="section-badge">Credentials & Partnerships</Badge>
          <h2 className="mb-4">Officially Recognized & Trusted</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We maintain all required licenses and certifications to serve you legally and professionally.
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {credentials.map((credential) => (
            <motion.div
              key={credential.title}
              variants={itemVariants}
              className="card-elevated-hover p-6 text-center"
            >
              <div className={`w-16 h-16 rounded-2xl ${credential.color} flex items-center justify-center mx-auto mb-4`}>
                <credential.icon className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-primary mb-2">{credential.title}</h4>
              <p className="text-muted-foreground text-sm">{credential.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner Logos Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <p className="text-center text-muted-foreground mb-6 font-medium">
            Trusted Partnerships & Affiliations
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-[scroll_30s_linear_infinite] gap-12">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center gap-2 px-6 py-3 bg-muted/50 rounded-lg"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary font-medium whitespace-nowrap">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
