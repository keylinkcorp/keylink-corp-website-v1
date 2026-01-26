import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calculator, Building2, Briefcase, Users, Package, ArrowRight, CheckCircle2 } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type CompanyType = "spc" | "wll" | "branch" | "holding";
type ActivityType = "consulting" | "trading" | "manufacturing" | "tech" | "other";
type VisaRange = "0" | "1-2" | "3-5" | "6+";

const companyTypeOptions = [
  { value: "spc" as CompanyType, label: "SPC", description: "Single Person Company" },
  { value: "wll" as CompanyType, label: "WLL", description: "Limited Liability" },
  { value: "branch" as CompanyType, label: "Branch", description: "Foreign Branch Office" },
  { value: "holding" as CompanyType, label: "Holding", description: "Investment Holding" },
];

const activityOptions = [
  { value: "consulting" as ActivityType, label: "Consulting" },
  { value: "trading" as ActivityType, label: "Trading" },
  { value: "manufacturing" as ActivityType, label: "Manufacturing" },
  { value: "tech" as ActivityType, label: "Technology" },
  { value: "other" as ActivityType, label: "Other" },
];

const visaOptions = [
  { value: "0" as VisaRange, label: "No Visas" },
  { value: "1-2" as VisaRange, label: "1-2 Visas" },
  { value: "3-5" as VisaRange, label: "3-5 Visas" },
  { value: "6+" as VisaRange, label: "6+ Visas" },
];

// Pricing logic
const basePrices: Record<CompanyType, number> = {
  spc: 750,
  wll: 1200,
  branch: 1500,
  holding: 2500,
};

const governmentFees: Record<CompanyType, number> = {
  spc: 245,
  wll: 380,
  branch: 600,
  holding: 800,
};

const capitalRequirements: Record<CompanyType, number> = {
  spc: 50,
  wll: 20000,
  branch: 0,
  holding: 250000,
};

const activityMultipliers: Record<ActivityType, number> = {
  consulting: 1.0,
  trading: 1.1,
  manufacturing: 1.25,
  tech: 1.0,
  other: 1.15,
};

const visaCosts: Record<VisaRange, number> = {
  "0": 0,
  "1-2": 400,
  "3-5": 900,
  "6+": 1800,
};

export function FormationCostCalculator() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [companyType, setCompanyType] = useState<CompanyType>("spc");
  const [activity, setActivity] = useState<ActivityType>("consulting");
  const [visas, setVisas] = useState<VisaRange>("0");
  const [additionalServices, setAdditionalServices] = useState({
    bankAccount: false,
    proServices: false,
    virtualOffice: false,
  });

  // Calculate costs
  const basePrice = basePrices[companyType];
  const govtFees = governmentFees[companyType];
  const capital = capitalRequirements[companyType];
  const activityCost = Math.round(basePrice * (activityMultipliers[activity] - 1));
  const visaCost = visaCosts[visas];
  
  const additionalCost = 
    (additionalServices.bankAccount ? 200 : 0) +
    (additionalServices.proServices ? 500 : 0) +
    (additionalServices.virtualOffice ? 300 : 0);

  const serviceFeeTotal = basePrice + activityCost + visaCost + additionalCost;
  const grandTotal = serviceFeeTotal + govtFees + capital;

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }}
      />

      <div className="container relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Calculator className="h-5 w-5 text-accent" />
              </div>
              <p className="text-sm font-medium text-accent tracking-wide uppercase">
                Interactive Tool
              </p>
            </div>
            <h2 className="text-[32px] md:text-[40px] lg:text-[46px] font-bold text-white mb-4 tracking-tight leading-[1.15]">
              Calculate Your Formation Costs
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Get an instant estimate for your Bahrain company formation. 
              Select your preferences below for a personalized quote.
            </p>
          </motion.div>

          {/* Calculator Card */}
          <motion.div 
            variants={staggerItem}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-5">
              {/* Left Side - Options */}
              <div className="lg:col-span-3 p-6 lg:p-8 space-y-8">
                {/* Step 1: Company Type */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">1</div>
                    <h3 className="font-semibold text-primary">Select Company Type</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {companyTypeOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setCompanyType(option.value)}
                        className={`p-4 rounded-xl border-2 text-center transition-all ${
                          companyType === option.value
                            ? "border-accent bg-accent/10"
                            : "border-border hover:border-accent/50"
                        }`}
                      >
                        <Building2 className={`h-5 w-5 mx-auto mb-2 ${
                          companyType === option.value ? "text-accent" : "text-muted-foreground"
                        }`} />
                        <span className="block font-semibold text-primary">{option.label}</span>
                        <span className="text-xs text-muted-foreground">{option.description}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Business Activity */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">2</div>
                    <h3 className="font-semibold text-primary">Select Business Activity</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {activityOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setActivity(option.value)}
                        className={`px-5 py-2.5 rounded-full border-2 text-sm font-medium transition-all ${
                          activity === option.value
                            ? "border-accent bg-accent text-primary"
                            : "border-border text-muted-foreground hover:border-accent/50"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Visas */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">3</div>
                    <h3 className="font-semibold text-primary">Number of Visas Needed</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {visaOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setVisas(option.value)}
                        className={`px-5 py-2.5 rounded-full border-2 text-sm font-medium transition-all ${
                          visas === option.value
                            ? "border-accent bg-accent text-primary"
                            : "border-border text-muted-foreground hover:border-accent/50"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 4: Additional Services */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">4</div>
                    <h3 className="font-semibold text-primary">Additional Services</h3>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {[
                      { key: "bankAccount", label: "Bank Account Support", price: 200 },
                      { key: "proServices", label: "PRO Services (1 Year)", price: 500 },
                      { key: "virtualOffice", label: "Virtual Office", price: 300 },
                    ].map((service) => (
                      <button
                        key={service.key}
                        onClick={() => setAdditionalServices(prev => ({
                          ...prev,
                          [service.key]: !prev[service.key as keyof typeof prev]
                        }))}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          additionalServices[service.key as keyof typeof additionalServices]
                            ? "border-accent bg-accent/10"
                            : "border-border hover:border-accent/50"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <Package className={`h-4 w-4 ${
                            additionalServices[service.key as keyof typeof additionalServices] 
                              ? "text-accent" 
                              : "text-muted-foreground"
                          }`} />
                          {additionalServices[service.key as keyof typeof additionalServices] && (
                            <CheckCircle2 className="h-4 w-4 text-accent" />
                          )}
                        </div>
                        <span className="block text-sm font-medium text-primary">{service.label}</span>
                        <span className="text-xs text-accent">+BHD {service.price}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Summary */}
              <div className="lg:col-span-2 bg-primary p-6 lg:p-8 text-white">
                <h3 className="text-lg font-bold mb-6">Cost Estimate</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">Base Service Fee ({companyType.toUpperCase()})</span>
                    <span>BHD {basePrice}</span>
                  </div>
                  {activityCost > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Activity Adjustment</span>
                      <span>+BHD {activityCost}</span>
                    </div>
                  )}
                  {visaCost > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Visa Processing</span>
                      <span>+BHD {visaCost}</span>
                    </div>
                  )}
                  {additionalCost > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Additional Services</span>
                      <span>+BHD {additionalCost}</span>
                    </div>
                  )}
                  
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Service Fee Subtotal</span>
                      <span className="font-semibold">BHD {serviceFeeTotal}</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">Government Fees (Est.)</span>
                    <span>+BHD {govtFees}</span>
                  </div>

                  {capital > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Capital Requirement</span>
                      <span>+BHD {capital.toLocaleString()}</span>
                    </div>
                  )}
                </div>

                {/* Total */}
                <div className="bg-white/10 rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">ESTIMATED TOTAL</span>
                    <span className="text-2xl font-bold text-accent">
                      BHD {grandTotal.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-white/60 mt-1">
                    *Capital requirement is deposited in your own bank account
                  </p>
                </div>

                {/* CTAs */}
                <div className="space-y-3">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link 
                      to="/free-consultation"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-accent text-primary font-semibold rounded-xl hover:bg-accent/90 transition-all"
                    >
                      Get Detailed Quote
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link 
                      to="/contact"
                      className="flex items-center justify-center gap-2 w-full py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
                    >
                      Schedule Consultation
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
