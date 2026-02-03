import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ArrowRight,
  Landmark,
  FileText,
  CreditCard,
  Smartphone,
  Globe,
  Clock,
  Building2,
  Wallet,
  TrendingUp
} from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface BankInfo {
  name: string;
  timeline: string;
  deposit: string;
  bestFor: string;
  accountTypes: string[];
  digitalFeatures: string[];
  currencies: string[];
  tradeFinance: boolean;
  internationalTransfers: string;
}

const banks: BankInfo[] = [
  {
    name: "National Bank of Bahrain",
    timeline: "2-3 weeks",
    deposit: "BHD 500",
    bestFor: "Local SMEs",
    accountTypes: ["Current Account", "Savings Account", "Multi-Currency"],
    digitalFeatures: ["Mobile App", "Online Banking", "Corporate Cards", "Payroll Processing"],
    currencies: ["BHD", "USD", "EUR", "GBP"],
    tradeFinance: true,
    internationalTransfers: "Same-day SWIFT"
  },
  {
    name: "Bank of Bahrain & Kuwait",
    timeline: "2-3 weeks",
    deposit: "BHD 1,000",
    bestFor: "Trading Companies",
    accountTypes: ["Current Account", "Multi-Currency", "Trade Finance Account"],
    digitalFeatures: ["Mobile App", "Online Banking", "LC Management", "Escrow Services"],
    currencies: ["BHD", "USD", "EUR", "GBP", "SAR", "KWD"],
    tradeFinance: true,
    internationalTransfers: "Same-day SWIFT"
  },
  {
    name: "Ahli United Bank",
    timeline: "2-4 weeks",
    deposit: "BHD 2,000",
    bestFor: "Regional Operations",
    accountTypes: ["Current Account", "Savings Account", "Investment Account", "Multi-Currency"],
    digitalFeatures: ["Mobile App", "Online Banking", "Cash Management", "Treasury Services"],
    currencies: ["BHD", "USD", "EUR", "GBP", "AED", "SAR", "KWD", "OMR"],
    tradeFinance: true,
    internationalTransfers: "Priority SWIFT processing"
  },
  {
    name: "Standard Chartered",
    timeline: "3-4 weeks",
    deposit: "USD 10,000",
    bestFor: "International Business",
    accountTypes: ["Business Current", "Premium Business", "Multi-Currency Pool"],
    digitalFeatures: ["Straight2Bank Platform", "Mobile Banking", "Global Cash Management", "FX Trading"],
    currencies: ["20+ currencies including CNY, JPY, SGD"],
    tradeFinance: true,
    internationalTransfers: "Global network - 60+ countries"
  },
];

const documents = [
  "CR Certificate (original)",
  "Trade License",
  "Memorandum of Association",
  "Board Resolution",
  "Shareholder Passports",
  "Proof of Business Address",
];

const accountTypes = [
  {
    icon: Building2,
    title: "Current Account",
    description: "Standard business operations in BHD or USD. Ideal for daily transactions.",
    features: ["No minimum balance", "Unlimited transactions", "Checkbook facility"]
  },
  {
    icon: Wallet,
    title: "Savings Account",
    description: "Higher interest rates for idle funds. Perfect for capital reserves.",
    features: ["Competitive interest rates", "Easy transfers to current", "Monthly statements"]
  },
  {
    icon: Globe,
    title: "Multi-Currency",
    description: "Hold 7+ currencies without conversion. Essential for import/export.",
    features: ["BHD, USD, EUR, GBP, SAR", "Competitive FX rates", "No holding fees"]
  }
];

const digitalFeatures = [
  { icon: Smartphone, label: "Mobile Banking" },
  { icon: CreditCard, label: "Corporate Cards" },
  { icon: Globe, label: "International Transfers" },
  { icon: TrendingUp, label: "Trade Finance" },
];

const timeline = [
  { week: "Week 1", activity: "Submit documents", detail: "Bank relationship manager reviews application" },
  { week: "Week 2", activity: "KYC verification", detail: "Due diligence and compliance checks" },
  { week: "Week 3", activity: "Account activation", detail: "Receive account details and set up online banking" },
];

export function BankAccountOpening() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      aria-labelledby="bank-account-heading"
      className="py-28 lg:py-36 bg-white relative overflow-hidden"
    >
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">
            Post-Formation Banking
          </p>
          <h2
            id="bank-account-heading"
            className="text-[40px] md:text-[48px] font-bold text-primary mb-6 tracking-tight leading-[1.15]"
          >
            Open Your Corporate Bank Account
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            A corporate bank account is essential to activate your company. We introduce you to
            relationship managers at major Bahraini banks, streamlining the account opening process.
          </p>
        </motion.div>

        {/* Account Types Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h3
            variants={staggerItem}
            className="text-xl font-semibold text-primary mb-8 flex items-center gap-3"
          >
            <CreditCard className="h-5 w-5 text-gold" />
            Account Types Available
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {accountTypes.map((type, index) => (
              <motion.div
                key={type.title}
                variants={staggerItem}
                className="p-6 rounded-xl border border-border bg-white hover:shadow-sm hover:border-gold/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <type.icon className="h-6 w-6 text-gold" />
                </div>
                <h4 className="font-semibold text-primary text-lg mb-2">{type.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-gold flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Digital Banking Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 p-6 rounded-xl bg-primary/5 border border-primary/10"
        >
          <h3 className="text-lg font-semibold text-primary mb-6 flex items-center gap-3">
            <Smartphone className="h-5 w-5 text-gold" />
            Digital Banking Features (All Banks)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {digitalFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-border">
                <feature.icon className="h-5 w-5 text-gold" />
                <span className="text-sm text-muted-foreground">{feature.label}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            All partner banks offer comprehensive online banking, mobile apps, and international transfer capabilities.
            Most provide same-day SWIFT transfers and multi-currency accounts.
          </p>
        </motion.div>

        {/* Bank Cards Grid */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl font-semibold text-primary mb-8 flex items-center gap-3"
          >
            <Landmark className="h-5 w-5 text-gold" />
            Top Banks for Business Accounts
          </motion.h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {banks.map((bank, index) => (
              <motion.div
                key={bank.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                className="p-6 rounded-xl border border-border bg-white hover:shadow-sm hover:border-gold/40 transition-all duration-300 border-l-4 border-l-gold"
              >
                <h4 className="font-semibold text-primary text-lg mb-4">
                  {bank.name}
                </h4>
                <div className="space-y-3 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Timeline</span>
                    <span className="font-medium text-primary">{bank.timeline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Min Deposit</span>
                    <span className="font-medium text-primary">{bank.deposit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Best For</span>
                    <span className="font-medium text-gold">{bank.bestFor}</span>
                  </div>
                </div>

                {/* Currencies */}
                <div className="pt-3 border-t border-border">
                  <p className="text-xs font-semibold text-primary mb-2">Currencies</p>
                  <p className="text-xs text-muted-foreground">
                    {Array.isArray(bank.currencies) ? bank.currencies.join(", ") : bank.currencies}
                  </p>
                </div>

                {/* International */}
                <div className="mt-3 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-gold" />
                  <span className="text-xs text-muted-foreground">{bank.internationalTransfers}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Opening Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-primary mb-8 flex items-center gap-3">
            <Clock className="h-5 w-5 text-gold" />
            Opening Timeline Breakdown
          </h3>

          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gold/20 hidden md:block" />

            <div className="grid md:grid-cols-3 gap-6">
              {timeline.map((step, index) => (
                <div key={index} className="relative flex md:flex-col items-start gap-4 md:text-center md:items-center">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-gold font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-gold font-semibold text-sm mb-1">{step.week}</p>
                    <p className="font-semibold text-primary mb-1">{step.activity}</p>
                    <p className="text-sm text-muted-foreground">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Documents & CTA Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Required Documents */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-3">
              <FileText className="h-5 w-5 text-gold" />
              Required Documents
            </h3>

            <ul className="space-y-3">
              {documents.map((doc) => (
                <li key={doc} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-gold flex-shrink-0" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-muted-foreground mt-4 p-3 bg-muted/50 rounded-lg">
              <strong>Note:</strong> All documents must be certified/notarized. We provide document preparation as part of our bank introduction service.
            </p>
          </motion.aside>

          {/* Service CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="p-6 lg:p-8 rounded-xl border border-gold/30 bg-gold/5">
              <h4 className="font-semibold text-primary text-lg mb-2">
                Need Help Opening Your Account?
              </h4>
              <p className="text-muted-foreground mb-4">
                We connect you directly with bank relationship managers, expediting the process and ensuring smooth documentation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  Personal introduction to relationship manager
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  Document preparation and review
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  Follow-up until account activation
                </li>
              </ul>
              <Button
                className="bg-primary hover:bg-primary/90 text-white gap-2"
                onClick={() => {
                  const phone = "97317000000";
                  const message = encodeURIComponent("Hi, I'm interested in your Bank Account Opening assistance service for my Bahrain company.");
                  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
                }}
              >
                Get Bank Introduction
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
