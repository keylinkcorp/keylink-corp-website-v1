import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Info, 
  Scale, 
  Users, 
  Building2, 
  Percent, 
  Globe, 
  DollarSign,
  TrendingUp,
  CheckCircle2
} from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const legalPoints = [
  { 
    icon: Scale, 
    title: "Commercial Companies Law", 
    description: "Governed by the 2001 law (amended 2017) providing a modern, investor-friendly framework" 
  },
  { 
    icon: Users, 
    title: "100% Foreign Ownership", 
    description: "Full foreign ownership permitted in most business sectors since 2017" 
  },
  { 
    icon: Building2, 
    title: "MOIC Registration", 
    description: "Ministry of Industry and Commerce serves as the primary regulatory body" 
  },
];

const benefitPoints = [
  { icon: Percent, value: "0%", label: "Corporate Tax", description: "On most business activities" },
  { icon: Globe, value: "22+", label: "Trade Agreements", description: "Free trade access globally" },
  { icon: DollarSign, value: "No", label: "Currency Restrictions", description: "Free capital movement" },
  { icon: TrendingUp, value: "GCC", label: "Gateway Location", description: "Strategic market access" },
];

const gccComparison = [
  { country: "Bahrain", ownership: "100%", time: "3-7 days", capital: "BHD 50", highlight: true },
  { country: "UAE", ownership: "Free Zone Only", time: "2-3 weeks", capital: "Varies", highlight: false },
  { country: "Saudi Arabia", ownership: "Varies", time: "3-4 weeks", capital: "SAR 500,000", highlight: false },
];

export function WhatIsCompanyFormation() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Dot grid pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Info className="h-5 w-5 text-accent" />
              </div>
              <p className="text-sm font-medium text-accent tracking-wide uppercase">
                What Is Company Formation
              </p>
            </div>
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
              What Is Company Formation in Bahrain?
            </h2>
          </motion.div>

          {/* Featured Snippet Paragraph */}
          <motion.div 
            variants={staggerItem}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-accent/20 rounded-2xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-accent" />
              </div>
              <p className="text-lg md:text-xl text-foreground leading-[1.8] font-medium">
                <strong>Company formation in Bahrain</strong> is the legal process of registering a business 
                entity with the Ministry of Industry and Commerce (MOIC). It includes 
                obtaining a Commercial Registration (CR) certificate, trade license, and 
                establishing your company's legal identity under Bahrain's Commercial 
                Companies Law.
              </p>
            </div>
          </motion.div>

          {/* Two Column Cards: Legal Framework + Benefits */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Legal Framework Card */}
            <motion.div 
              variants={staggerItem}
              className="bg-white border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">The Legal Framework</h3>
              </div>
              <div className="space-y-5">
                {legalPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <point.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{point.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Key Benefits Card */}
            <motion.div 
              variants={staggerItem}
              className="bg-white border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary">Key Benefits of Bahrain</h3>
              </div>
              <div className="grid grid-cols-2 gap-5">
                {benefitPoints.map((point, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-muted/30 hover:bg-accent/5 transition-colors duration-200">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3">
                      <point.icon className="h-5 w-5 text-accent" />
                    </div>
                    <p className="text-2xl font-bold text-accent mb-1">{point.value}</p>
                    <p className="font-semibold text-foreground text-sm mb-1">{point.label}</p>
                    <p className="text-xs text-muted-foreground">{point.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* GCC Comparison Table */}
          <motion.div variants={staggerItem}>
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-primary">
                Quick Comparison: Bahrain vs Other GCC
              </h3>
              <p className="text-muted-foreground mt-2">See why Bahrain leads for business formation</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto">
                <thead>
                  <tr className="border-b-2 border-accent/20">
                    <th className="text-left py-4 px-6 font-bold text-primary">Country</th>
                    <th className="text-center py-4 px-6 font-bold text-primary">Foreign Ownership</th>
                    <th className="text-center py-4 px-6 font-bold text-primary">Setup Time</th>
                    <th className="text-center py-4 px-6 font-bold text-primary">Minimum Capital</th>
                  </tr>
                </thead>
                <tbody>
                  {gccComparison.map((row, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-border ${row.highlight ? 'bg-accent/5' : ''}`}
                    >
                      <td className="py-4 px-6">
                        <span className={`font-semibold ${row.highlight ? 'text-accent' : 'text-foreground'}`}>
                          {row.country}
                          {row.highlight && (
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-accent/20 text-accent">
                              Recommended
                            </span>
                          )}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className={row.highlight ? 'text-accent font-semibold' : 'text-muted-foreground'}>
                          {row.ownership}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className={row.highlight ? 'text-accent font-semibold' : 'text-muted-foreground'}>
                          {row.time}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className={row.highlight ? 'text-accent font-semibold' : 'text-muted-foreground'}>
                          {row.capital}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}