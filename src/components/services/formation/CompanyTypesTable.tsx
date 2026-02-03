import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Building2, 
  Check, 
  X, 
  Star,
  User,
  Users,
  Landmark,
  Building
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const companyTypes = [
  {
    id: "spc",
    name: "SPC",
    fullName: "Single Person Company",
    icon: User,
    recommended: false,
    minShareholders: "1",
    minCapital: "BHD 50",
    foreignOwnership: "100%",
    canHireStaff: true,
    visaQuota: "Based on office",
    tradingAllowed: true,
    timeline: "3-5 days",
    annualAudit: false,
    bestFor: "Solo entrepreneurs",
    startingPrice: "BHD 750",
  },
  {
    id: "wll",
    name: "WLL",
    fullName: "Limited Liability Company",
    icon: Users,
    recommended: true,
    minShareholders: "2-50",
    minCapital: "BHD 20,000",
    foreignOwnership: "100%",
    canHireStaff: true,
    visaQuota: "Based on office",
    tradingAllowed: true,
    timeline: "5-7 days",
    annualAudit: true,
    bestFor: "SMEs & partnerships",
    startingPrice: "BHD 1,200",
  },
  {
    id: "branch",
    name: "Branch",
    fullName: "Branch of Foreign Company",
    icon: Building2,
    recommended: false,
    minShareholders: "N/A",
    minCapital: "Parent company",
    foreignOwnership: "100%",
    canHireStaff: true,
    visaQuota: "Based on office",
    tradingAllowed: true,
    timeline: "7-10 days",
    annualAudit: true,
    bestFor: "International expansion",
    startingPrice: "BHD 1,500",
  },
  {
    id: "holding",
    name: "Holding",
    fullName: "Bahrain Holding Company",
    icon: Landmark,
    recommended: false,
    minShareholders: "1+",
    minCapital: "BHD 250,000",
    foreignOwnership: "100%",
    canHireStaff: false,
    visaQuota: "Limited",
    tradingAllowed: false,
    timeline: "7-10 days",
    annualAudit: true,
    bestFor: "Investment vehicles",
    startingPrice: "BHD 2,500",
  },
  {
    id: "rep",
    name: "Rep Office",
    fullName: "Representative Office",
    icon: Building,
    recommended: false,
    minShareholders: "N/A",
    minCapital: "None",
    foreignOwnership: "100%",
    canHireStaff: false,
    visaQuota: "2 max",
    tradingAllowed: false,
    timeline: "5-7 days",
    annualAudit: false,
    bestFor: "Market research",
    startingPrice: "BHD 800",
  },
];

const comparisonFeatures = [
  { key: "minShareholders", label: "Min. Shareholders" },
  { key: "minCapital", label: "Min. Capital" },
  { key: "foreignOwnership", label: "Foreign Ownership" },
  { key: "canHireStaff", label: "Can Hire Staff", type: "boolean" },
  { key: "visaQuota", label: "Visa Quota" },
  { key: "tradingAllowed", label: "Trading Allowed", type: "boolean" },
  { key: "timeline", label: "Timeline" },
  { key: "annualAudit", label: "Annual Audit Required", type: "boolean" },
  { key: "bestFor", label: "Best For" },
  { key: "startingPrice", label: "Starting Price" },
];

export function CompanyTypesTable() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Background Pattern - Dot Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

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
            Company Types Comparison
          </motion.p>
          <motion.h2 
            variants={staggerItem}
            className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]"
          >
            Choose Your Business Structure
          </motion.h2>
          <motion.p 
            variants={staggerItem}
            className="text-lg text-muted-foreground leading-[1.8]"
          >
            Compare all company types available in Bahrain. All structures allow 100% foreign ownership 
            and can be formed in under 10 business days.
          </motion.p>
        </motion.div>

        {/* Desktop Table View */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-primary/5">
                    <TableHead className="font-semibold text-primary w-[180px] sticky left-0 bg-primary/5 z-10">
                      Feature
                    </TableHead>
                    {companyTypes.map((type) => (
                      <TableHead 
                        key={type.id} 
                        className={`text-center min-w-[140px] ${type.recommended ? 'bg-accent/10' : ''}`}
                      >
                        <div className="flex flex-col items-center gap-2 py-2">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${type.recommended ? 'bg-accent/20' : 'bg-primary/10'}`}>
                            <type.icon className={`w-5 h-5 ${type.recommended ? 'text-accent' : 'text-primary'}`} />
                          </div>
                          <div className="flex items-center gap-1">
                            <span className={`font-bold ${type.recommended ? 'text-accent' : 'text-primary'}`}>
                              {type.name}
                            </span>
                            {type.recommended && (
                              <Badge className="bg-accent text-primary text-[10px] px-1.5 py-0">
                                <Star className="w-3 h-3 mr-0.5 fill-current" />
                                Popular
                              </Badge>
                            )}
                          </div>
                          <span className="text-xs text-muted-foreground">{type.fullName}</span>
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonFeatures.map((feature, index) => (
                    <TableRow key={feature.key} className={index % 2 === 0 ? 'bg-muted/30' : ''}>
                      <TableCell className="font-medium text-primary sticky left-0 bg-inherit z-10 border-r">
                        {feature.label}
                      </TableCell>
                      {companyTypes.map((type) => {
                        const value = type[feature.key as keyof typeof type];
                        return (
                          <TableCell 
                            key={type.id} 
                            className={`text-center ${type.recommended ? 'bg-accent/5' : ''}`}
                          >
                            {feature.type === 'boolean' ? (
                              value ? (
                                <Check className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                              )
                            ) : (
                              <span className={`text-sm ${feature.key === 'startingPrice' ? 'font-semibold text-accent' : 'text-foreground'}`}>
                                {String(value)}
                              </span>
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </motion.div>

        {/* Mobile Card View */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="lg:hidden grid gap-6"
        >
          {companyTypes.map((type) => (
            <motion.div
              key={type.id}
              variants={staggerItem}
              className={`bg-white rounded-xl border p-6 ${type.recommended ? 'border-accent shadow-md' : 'border-border'}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${type.recommended ? 'bg-accent/20' : 'bg-primary/10'}`}>
                  <type.icon className={`w-6 h-6 ${type.recommended ? 'text-accent' : 'text-primary'}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-primary">{type.name}</h3>
                    {type.recommended && (
                      <Badge className="bg-accent text-primary text-[10px]">Popular</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{type.fullName}</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Min. Capital</span>
                  <span className="font-medium text-primary">{type.minCapital}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shareholders</span>
                  <span className="font-medium text-primary">{type.minShareholders}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Timeline</span>
                  <span className="font-medium text-primary">{type.timeline}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Trading</span>
                  <span className="font-medium">
                    {type.tradingAllowed ? (
                      <Check className="w-4 h-4 text-green-600 inline" />
                    ) : (
                      <X className="w-4 h-4 text-muted-foreground inline" />
                    )}
                  </span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-muted-foreground">Best for</p>
                    <p className="text-sm font-medium text-primary">{type.bestFor}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">From</p>
                    <p className="text-lg font-bold text-accent">{type.startingPrice}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Not sure which structure is right for you?
          </p>
          <Link to="/free-consultation">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold rounded-xl">
              Get Free Expert Advice
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
