import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Info, Scale, Globe, CheckCircle2 } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const gccComparison = [
  { country: "Bahrain", ownership: "100%", timeline: "3-7 days", cost: "From BHD 750", restrictions: "Minimal" },
  { country: "UAE", ownership: "100%*", timeline: "2-4 weeks", cost: "From AED 15,000", restrictions: "Free zone only" },
  { country: "Saudi Arabia", ownership: "100%*", timeline: "2-8 weeks", cost: "From SAR 25,000", restrictions: "Sector limits" },
  { country: "Qatar", ownership: "49% typical", timeline: "3-6 weeks", cost: "From QAR 10,000", restrictions: "Partner required" },
];

export function WhatIsCompanyFormation() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Dot grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Info className="h-5 w-5 text-accent" />
            </div>
            <p className="text-sm font-medium text-accent tracking-wide uppercase">
              Understanding the Basics
            </p>
          </motion.div>

          <motion.h2 
            variants={staggerItem}
            className="text-[32px] md:text-[40px] lg:text-[46px] font-bold text-primary mb-6 tracking-tight leading-[1.15]"
          >
            What Is Company Formation in Bahrain?
          </motion.h2>

          {/* Featured Snippet Optimized Definition */}
          <motion.div 
            variants={staggerItem}
            className="bg-primary/5 border-l-4 border-accent p-6 rounded-r-xl mb-10"
          >
            <p className="text-lg md:text-xl text-primary font-medium leading-relaxed">
              <strong>Company formation in Bahrain</strong> is the legal process of registering a business entity 
              with the Ministry of Industry and Commerce (MOIC). This enables entrepreneurs to operate commercially, 
              hire employees, open corporate bank accounts, and conduct trade in the Kingdom of Bahrain and the GCC region.
            </p>
          </motion.div>

          {/* Two Column Content */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-14">
            {/* Left Column - Legal Framework */}
            <motion.div variants={staggerItem}>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-bold text-primary">Legal Framework</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Bahrain's business environment is governed by the <strong>Commercial Companies Law (Legislative Decree No. 21 of 2001)</strong>, 
                as amended. The regulatory framework provides clear guidelines for company structures, shareholder rights, 
                and corporate governance.
              </p>
              <ul className="space-y-3">
                {[
                  "Commercial Registration (CR) through MOIC",
                  "SIJILAT electronic registration system",
                  "Labour permits via LMRA",
                  "Sector-specific licensing requirements"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Column - 2017 Amendment */}
            <motion.div variants={staggerItem}>
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-bold text-primary">100% Foreign Ownership</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The landmark <strong>2017 amendment</strong> to Bahrain's Commercial Companies Law removed the requirement for 
                local sponsors in most sectors. Foreign investors can now own 100% of their Bahrain company without 
                needing a Bahraini partner.
              </p>
              <div className="bg-accent/10 rounded-xl p-5">
                <p className="text-sm font-semibold text-primary mb-2">Key Benefits of 2017 Reform:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Full ownership control for foreign investors</li>
                  <li>• No mandatory local partner requirement</li>
                  <li>• Complete profit repatriation allowed</li>
                  <li>• Simplified entry for international businesses</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* GCC Comparison Table */}
          <motion.div variants={staggerItem}>
            <h3 className="text-xl font-bold text-primary mb-6 text-center">
              Bahrain vs Other GCC Countries: Quick Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-4 py-3 text-left text-sm font-semibold rounded-tl-lg">Country</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Foreign Ownership</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Timeline</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Starting Cost</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold rounded-tr-lg">Restrictions</th>
                  </tr>
                </thead>
                <tbody>
                  {gccComparison.map((row, index) => (
                    <tr 
                      key={row.country} 
                      className={`border-b border-border ${index === 0 ? 'bg-accent/10' : 'bg-white'}`}
                    >
                      <td className="px-4 py-4 font-semibold text-primary">
                        {row.country}
                        {index === 0 && (
                          <span className="ml-2 text-xs bg-accent text-primary px-2 py-0.5 rounded-full">
                            Best Value
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-muted-foreground">{row.ownership}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.timeline}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.cost}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.restrictions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              *UAE and Saudi Arabia 100% ownership limited to specific free zones or approved sectors
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
