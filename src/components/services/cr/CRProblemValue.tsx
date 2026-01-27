import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  AlertTriangle, 
  Clock, 
  FileX, 
  ShieldAlert,
  CheckCircle2,
  Zap,
  Users,
  Shield,
  ArrowDown
} from "lucide-react";
import crDocumentsImage from "@/assets/cr-documents-stack.jpg";

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

const imageReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 } }
};

export function CRProblemValue() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
      
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 border border-red-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="font-semibold mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Visual Divider with Image */}
        <motion.div
          variants={imageReveal}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center gap-6 mb-16"
        >
          {/* Arrow Indicator */}
          <div className="flex flex-col items-center gap-2">
            <ArrowDown className="w-8 h-8 text-accent animate-bounce" />
            <span className="text-sm font-medium text-muted-foreground">There's a better way</span>
          </div>
          
          {/* Documents Image */}
          <div className="relative max-w-md mx-auto hidden md:block">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={crDocumentsImage}
                alt="Professional business documents and certificates"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-border">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">We handle it all</span>
              </div>
            </div>
          </div>
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
              whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 border border-accent/20 shadow-sm hover:border-accent hover:shadow-lg transition-all"
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
