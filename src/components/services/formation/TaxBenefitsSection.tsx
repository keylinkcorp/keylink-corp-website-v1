import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Percent, 
  Globe, 
  Banknote, 
  Shield,
  ArrowRight,
  Clock,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const taxBenefits = [
  {
    icon: Percent,
    stat: "0%",
    label: "Corporate Tax",
    description: "No corporate income tax on most business activities. One of the lowest tax burdens in the GCC region.",
  },
  {
    icon: Banknote,
    stat: "0%",
    label: "Personal Income Tax",
    description: "No personal income tax for employees or business owners. Keep 100% of your earnings.",
  },
  {
    icon: Globe,
    stat: "50+",
    label: "DTT Countries",
    description: "Double Taxation Treaties with over 50 countries including UK, France, China, and India.",
  },
  {
    icon: Shield,
    stat: "100%",
    label: "Profit Repatriation",
    description: "Full freedom to repatriate profits. No currency restrictions or capital controls.",
  },
];

const gccComparison = [
  { country: "Bahrain", corporateTax: "0%*", vat: "10%", personalTax: "0%", highlight: true },
  { country: "UAE", corporateTax: "9%", vat: "5%", personalTax: "0%", highlight: false },
  { country: "Saudi Arabia", corporateTax: "20%", vat: "15%", personalTax: "0%", highlight: false },
  { country: "Qatar", corporateTax: "10%", vat: "0%", personalTax: "0%", highlight: false },
  { country: "Oman", corporateTax: "15%", vat: "5%", personalTax: "0%", highlight: false },
];

const vatInfo = {
  rate: "10%",
  threshold: "BHD 37,500",
  introduced: "2019",
  exemptions: ["Basic food items", "Healthcare", "Education", "Financial services", "Real estate"],
};

export function TaxBenefitsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container relative">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.p 
            variants={staggerItem}
            className="text-sm font-medium text-accent tracking-wide uppercase mb-4"
          >
            Tax Benefits
          </motion.p>
          <motion.h2 
            variants={staggerItem}
            className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]"
          >
            Bahrain's Tax-Friendly Environment
          </motion.h2>
          <motion.p 
            variants={staggerItem}
            className="text-lg text-muted-foreground leading-[1.8]"
          >
            Enjoy one of the most competitive tax regimes in the Middle East. 0% corporate tax, 
            0% personal income tax, and free profit repatriation.
          </motion.p>
        </motion.div>

        {/* Tax Benefits Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {taxBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="bg-white rounded-xl p-6 border border-border hover:border-accent/40 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-4xl font-bold text-primary mb-1">{benefit.stat}</div>
              <div className="text-sm font-semibold text-accent mb-3">{benefit.label}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Two Column Layout: GCC Comparison + VAT Info */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* GCC Tax Comparison Table */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl border border-border overflow-hidden"
          >
            <div className="p-6 border-b border-border bg-primary/5">
              <h3 className="text-xl font-bold text-primary">GCC Tax Comparison 2025</h3>
              <p className="text-sm text-muted-foreground mt-1">Corporate tax rates across the region</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 text-sm font-semibold text-primary">Country</th>
                    <th className="text-center p-4 text-sm font-semibold text-primary">Corp. Tax</th>
                    <th className="text-center p-4 text-sm font-semibold text-primary">VAT</th>
                    <th className="text-center p-4 text-sm font-semibold text-primary">Income Tax</th>
                  </tr>
                </thead>
                <tbody>
                  {gccComparison.map((row, index) => (
                    <tr 
                      key={row.country} 
                      className={`border-b border-border last:border-0 ${row.highlight ? 'bg-accent/10' : index % 2 === 0 ? 'bg-muted/20' : ''}`}
                    >
                      <td className="p-4">
                        <span className={`font-medium ${row.highlight ? 'text-accent' : 'text-primary'}`}>
                          {row.country}
                          {row.highlight && <span className="text-xs ml-1">★</span>}
                        </span>
                      </td>
                      <td className={`p-4 text-center ${row.highlight ? 'font-bold text-accent' : 'text-muted-foreground'}`}>
                        {row.corporateTax}
                      </td>
                      <td className="p-4 text-center text-muted-foreground">{row.vat}</td>
                      <td className="p-4 text-center text-muted-foreground">{row.personalTax}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-muted/30 text-xs text-muted-foreground">
              *0% for most commercial activities. Oil & gas sector subject to 46% tax.
            </div>
          </motion.div>

          {/* VAT Information Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-xl border border-border overflow-hidden"
          >
            <div className="p-6 border-b border-border bg-primary/5">
              <h3 className="text-xl font-bold text-primary">VAT in Bahrain</h3>
              <p className="text-sm text-muted-foreground mt-1">Value Added Tax essentials</p>
            </div>
            <div className="p-6">
              {/* VAT Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-accent">{vatInfo.rate}</div>
                  <div className="text-xs text-muted-foreground">Standard Rate</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{vatInfo.threshold}</div>
                  <div className="text-xs text-muted-foreground">Registration Threshold</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{vatInfo.introduced}</div>
                  <div className="text-xs text-muted-foreground">Introduced</div>
                </div>
              </div>

              {/* Key Points */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-primary">Quarterly Filing</p>
                    <p className="text-xs text-muted-foreground">VAT returns due every 3 months</p>
                  </div>
                </div>
              </div>

              {/* VAT Exempt Categories */}
              <div>
                <p className="text-sm font-semibold text-primary mb-3">VAT Exempt Categories</p>
                <div className="flex flex-wrap gap-2">
                  {vatInfo.exemptions.map((item) => (
                    <span 
                      key={item} 
                      className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* NBR Link */}
              <div className="mt-6 pt-4 border-t border-border">
                <a 
                  href="https://www.nbr.gov.bh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
                >
                  Official NBR Tax Information
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/free-consultation">
            <Button className="bg-accent hover:bg-accent/90 text-primary px-8 py-6 text-base font-semibold rounded-xl">
              Discuss Tax Planning
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-8"
        >
          <p className="text-xs text-muted-foreground">
            Tax information last updated: February 2026 | Source: NBR, MOIC
          </p>
        </motion.div>
      </div>
    </section>
  );
}
