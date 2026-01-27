import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  AlertTriangle, 
  Clock, 
  FileX, 
  ShieldAlert,
  CheckCircle2,
  Zap,
  Users,
  Shield
} from "lucide-react";

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Complex MOIC Requirements",
    description: "Constantly changing regulations and documentation requirements that are difficult to navigate without expert knowledge."
  },
  {
    icon: Clock,
    title: "Multiple Ministry Visits",
    description: "Long queues and multiple trips to different government offices, wasting valuable business time."
  },
  {
    icon: FileX,
    title: "Document Rejection Delays",
    description: "Incomplete or incorrect submissions leading to rejection and costly resubmission cycles."
  },
  {
    icon: ShieldAlert,
    title: "Compliance Gaps",
    description: "Missing requirements or deadlines resulting in penalties, fines, or business operation restrictions."
  }
];

const solutions = [
  {
    icon: CheckCircle2,
    title: "Zero Effort Registration",
    description: "We handle everything from document preparation to final CR collection."
  },
  {
    icon: Zap,
    title: "Fast-Track Processing",
    description: "Expert knowledge means first-time approval with no delays or rejections."
  },
  {
    icon: Users,
    title: "Dedicated Account Manager",
    description: "Your personal point of contact throughout the entire registration process."
  },
  {
    icon: Shield,
    title: "Full Compliance Guarantee",
    description: "We ensure all requirements are met before submission, preventing penalties."
  }
];

export function CRProblemValue() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={staggerItem}>
            <span className="section-badge">The Challenge</span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-4">
            Why Businesses Struggle with{" "}
            <span className="text-accent">Commercial Registration</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Navigating Bahrain's commercial registration process alone can be overwhelming
          </motion.p>
        </motion.div>

        {/* Pain Points Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="bg-white rounded-xl p-6 border border-red-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="font-semibold mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Solutions Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div variants={staggerItem}>
            <span className="section-badge bg-accent/10 text-accent border-accent/20">The Solution</span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-4">
            Our Full-Service Approach
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let us handle the complexity while you focus on building your business
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="bg-white rounded-xl p-6 border border-accent/20 shadow-sm hover:border-accent hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <solution.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">{solution.title}</h3>
              <p className="text-sm text-muted-foreground">{solution.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
