import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
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
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern - Enhanced */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={staggerItem}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-semibold border border-primary/10 mb-4">
                <Info className="w-4 h-4" />
                Understanding CR
              </span>
            </motion.div>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
              What is <span className="text-accent">Commercial Registration</span> in Bahrain?
            </motion.h2>
            
            <motion.div variants={staggerItem} className="prose prose-lg text-muted-foreground mb-10">
              <p className="text-lg leading-relaxed">
                Commercial Registration (CR) is the official government-issued license that authorizes 
                businesses to operate legally in the Kingdom of Bahrain. It serves as your company's 
                legal identity and is mandatory for all commercial entities conducting business in the country.
              </p>
              <p className="text-lg leading-relaxed">
                Issued by the <strong className="text-foreground">Ministry of Industry and Commerce (MOIC)</strong> through the 
                SIJILAT electronic portal, the CR defines your company's legal structure, permitted 
                business activities, and ownership details. It is governed by the Commercial Companies 
                Law (2001) and Commercial Registration Law (2015).
              </p>
              <p className="text-lg leading-relaxed">
                Without a valid Commercial Registration, businesses cannot legally operate, 
                open bank accounts, hire employees, or enter into contracts in Bahrain.
              </p>
            </motion.div>

            {/* Key Facts - Enhanced */}
            <motion.div variants={staggerItem} className="grid grid-cols-2 gap-4 mb-10">
              {keyFacts.map((fact, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <fact.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-semibold">{fact.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Info Callout - Enhanced */}
            <motion.div 
              variants={staggerItem}
              className="flex gap-4 p-6 bg-accent/5 border-2 border-accent/20 rounded-2xl hover:border-accent/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Remote Registration Available</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Foreign entrepreneurs can complete CR registration remotely through a Power of Attorney, 
                  without visiting Bahrain in person.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Benefits Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-primary rounded-3xl p-10 text-white relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
                
                <h3 className="text-2xl font-bold mb-4 relative z-10">
                  What Your CR Enables
                </h3>
                <p className="text-white/70 mb-8 text-lg relative z-10">
                  A valid Commercial Registration unlocks full business capabilities in Bahrain:
                </p>
                
                <div className="space-y-4 relative z-10">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors"
                    >
                      <div className="w-11 h-11 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="font-semibold">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 pt-6 border-t border-white/20 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-bold text-lg">Gateway to GCC markets from Bahrain</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
