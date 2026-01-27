import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Building2, 
  Scale, 
  Globe, 
  CreditCard, 
  Users, 
  FileText,
  CheckCircle2,
  Info
} from "lucide-react";

const keyFacts = [
  { icon: FileText, text: "1-year validity with annual renewal" },
  { icon: Building2, text: "Issued by MOIC via SIJILAT portal" },
  { icon: Scale, text: "Required for all legal business operations" },
  { icon: Globe, text: "100% foreign ownership permitted" }
];

const benefits = [
  { icon: CreditCard, text: "Open corporate bank accounts" },
  { icon: Users, text: "Hire employees and sponsor visas" },
  { icon: FileText, text: "Sign legally binding contracts" },
  { icon: Globe, text: "Access GCC and MENA markets" },
  { icon: Building2, text: "Rent commercial premises" },
  { icon: Scale, text: "Participate in government tenders" }
];

export function WhatIsCR() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={staggerItem}>
              <span className="section-badge">Understanding CR</span>
            </motion.div>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-6">
              What is <span className="text-accent">Commercial Registration</span> in Bahrain?
            </motion.h2>
            
            <motion.div variants={staggerItem} className="prose prose-lg text-muted-foreground mb-8">
              <p>
                Commercial Registration (CR) is the official government-issued license that authorizes 
                businesses to operate legally in the Kingdom of Bahrain. It serves as your company's 
                legal identity and is mandatory for all commercial entities conducting business in the country.
              </p>
              <p>
                Issued by the <strong>Ministry of Industry and Commerce (MOIC)</strong> through the 
                SIJILAT electronic portal, the CR defines your company's legal structure, permitted 
                business activities, and ownership details. It is governed by the Commercial Companies 
                Law (2001) and Commercial Registration Law (2015).
              </p>
              <p>
                Without a valid Commercial Registration, businesses cannot legally operate, 
                open bank accounts, hire employees, or enter into contracts in Bahrain.
              </p>
            </motion.div>

            {/* Key Facts */}
            <motion.div variants={staggerItem} className="grid grid-cols-2 gap-4 mb-8">
              {keyFacts.map((fact, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                  <fact.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{fact.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Info Callout */}
            <motion.div 
              variants={staggerItem}
              className="flex gap-4 p-4 bg-accent/5 border border-accent/20 rounded-xl"
            >
              <Info className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold mb-1">Remote Registration Available</h4>
                <p className="text-sm text-muted-foreground">
                  Foreign entrepreneurs can complete CR registration remotely through a Power of Attorney, 
                  without visiting Bahrain in person.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Benefits Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-primary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                What Your CR Enables
              </h3>
              <p className="text-white/70 mb-8">
                A valid Commercial Registration unlocks full business capabilities in Bahrain:
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white/10 rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-medium">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  <span className="font-semibold">Gateway to GCC markets from Bahrain</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
