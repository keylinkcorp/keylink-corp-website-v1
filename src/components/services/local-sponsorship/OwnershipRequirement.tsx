import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Building2, Package, Users, Briefcase, Megaphone, HelpCircle, ShieldAlert, Lock } from "lucide-react";

const restrictedActivities = [
  { icon: Building2, text: "Real estate brokerage and property management" },
  { icon: Package, text: "Certain import/export trading activities" },
  { icon: Users, text: "Manpower supply and recruitment agencies" },
  { icon: Briefcase, text: "Specific professional services" },
  { icon: Megaphone, text: "Media and advertising activities" }
];

const investorConcerns = [
  { icon: HelpCircle, text: "How can I trust someone I don't know with majority ownership?" },
  { icon: ShieldAlert, text: "What happens if my sponsor decides to take control?" },
  { icon: Lock, text: "How do I protect my investment and daily operations?" }
];

export function OwnershipRequirement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Pattern - Dot grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="section-badge">
              Understanding Bahrain's Ownership Laws
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Do Some Business Activities Require a Local Sponsor?
            </h2>
          </motion.div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div variants={staggerItem} className="mb-10">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Bahrain offers one of the most investor-friendly environments in the Gulf region. Since 2017, foreign investors can own 100% of their company in most business sectors. However, certain activities classified as "restricted" under Bahrain's commercial law require a minimum 51% Bahraini ownership stake.
              </p>
            </motion.div>

            {/* Restricted Activities */}
            <motion.div variants={staggerItem} className="mb-10">
              <h3 className="text-xl font-semibold mb-4 text-primary">Restricted Activities Include:</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {restrictedActivities.map((activity, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-border shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <activity.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-foreground">{activity.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* The Challenge */}
            <motion.div variants={staggerItem} className="mb-10">
              <h3 className="text-xl font-semibold mb-4 text-primary">The Challenge for Foreign Investors:</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Without a local sponsor arrangement, foreign entrepreneurs cannot legally operate in these lucrative sectors. Many investors hesitate due to legitimate concerns:
              </p>
              <div className="space-y-4">
                {investorConcerns.map((concern, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20"
                  >
                    <concern.icon className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{concern.text}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                These concerns are valid. Stories of sponsor disputes have made headlines across the GCC region. That's precisely why proper legal structuring matters more than finding just any local partner.
              </p>
            </motion.div>

            {/* The Right Approach */}
            <motion.div 
              variants={staggerItem}
              className="p-6 bg-accent/5 rounded-2xl border border-accent/20"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">The Right Approach:</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The solution isn't avoiding local sponsorship - it's structuring it correctly from the start. With proper legal frameworks, side agreements, and vetted partners, you can access restricted sectors while maintaining full operational control and profit entitlement.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
