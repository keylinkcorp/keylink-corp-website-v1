import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  Clock, 
  Wallet, 
  CheckCircle2, 
  FileText,
  CreditCard,
  Globe,
  ArrowRight,
  Landmark
} from "lucide-react";

const banks = [
  {
    name: "National Bank of Bahrain",
    shortName: "NBB",
    timeline: "2-3 weeks",
    minDeposit: "BHD 500",
    bestFor: "Local SMEs & Startups",
    features: ["Online Banking", "Multi-currency", "Business Cards"],
    color: "from-blue-500/10 to-blue-600/5"
  },
  {
    name: "Bank of Bahrain & Kuwait",
    shortName: "BBK",
    timeline: "2-3 weeks",
    minDeposit: "BHD 1,000",
    bestFor: "Trading Companies",
    features: ["Trade Finance", "LC Services", "Corporate Cards"],
    color: "from-emerald-500/10 to-emerald-600/5"
  },
  {
    name: "Ahli United Bank",
    shortName: "AUB",
    timeline: "2-4 weeks",
    minDeposit: "BHD 2,000",
    bestFor: "Regional Operations",
    features: ["Regional Coverage", "Investment Services", "Premium Support"],
    color: "from-amber-500/10 to-amber-600/5"
  },
  {
    name: "Standard Chartered",
    shortName: "SCB",
    timeline: "3-4 weeks",
    minDeposit: "USD 10,000",
    bestFor: "International Business",
    features: ["Global Network", "FX Services", "Priority Banking"],
    color: "from-purple-500/10 to-purple-600/5"
  }
];

const requiredDocuments = [
  { name: "CR Certificate", description: "Original Commercial Registration" },
  { name: "Trade License", description: "Valid business license from MOIC" },
  { name: "Memorandum of Association", description: "Company's founding document" },
  { name: "Board Resolution", description: "Authorizing account opening" },
  { name: "Shareholder Passports", description: "Copies of all shareholders" },
  { name: "Proof of Address", description: "Office lease or utility bill" },
  { name: "Business Plan Summary", description: "Brief overview of operations" }
];

export function BankAccountOpening() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          maskImage: `radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)`,
          WebkitMaskImage: `radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)`
        }}
      />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">
            Post-Formation Essentials
          </p>
          <h2 className="text-[40px] md:text-[48px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
            Opening a Corporate Bank Account in Bahrain
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            A corporate bank account is essential to activate your company. We introduce you to 
            relationship managers at all major Bahraini banks, streamlining the account opening process.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bank Comparison Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Landmark className="h-6 w-6 text-gold" />
              Top Banks for Business Accounts
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {banks.map((bank, index) => (
                <motion.div
                  key={bank.shortName}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={cn(
                    "rounded-2xl border border-border bg-gradient-to-br p-5 hover:shadow-lg transition-shadow",
                    bank.color
                  )}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-primary text-lg">{bank.shortName}</h4>
                      <p className="text-xs text-muted-foreground">{bank.name}</p>
                    </div>
                    <Building className="h-5 w-5 text-gold" />
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Timeline:</span>
                      <span className="font-medium text-primary">{bank.timeline}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Wallet className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Min Deposit:</span>
                      <span className="font-medium text-primary">{bank.minDeposit}</span>
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-border/50">
                    <p className="text-xs text-muted-foreground mb-2">Best for:</p>
                    <p className="text-sm font-medium text-gold">{bank.bestFor}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Required Documents & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <FileText className="h-6 w-6 text-gold" />
              Required Documents
            </h3>
            
            <div className="bg-white rounded-2xl border border-border p-6 mb-8">
              <ul className="space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <motion.li
                    key={doc.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-primary">{doc.name}</p>
                      <p className="text-sm text-muted-foreground">{doc.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Service CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-primary rounded-2xl p-6 text-white"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/10">
                  <CreditCard className="h-6 w-6 text-gold" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2">Bank Introduction Service</h4>
                  <p className="text-white/80 text-sm mb-4">
                    We connect you directly with relationship managers at all major banks, 
                    expediting the account opening process and ensuring smooth documentation.
                  </p>
                  <Button 
                    variant="secondary" 
                    className="bg-gold text-primary hover:bg-gold/90 gap-2"
                    onClick={() => {
                      const phone = "97317000000";
                      const message = encodeURIComponent("Hi, I'm interested in your Bank Account Opening assistance service for my Bahrain company.");
                      window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
                    }}
                  >
                    Inquire Now
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Additional Info */}
            <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
              <Globe className="h-4 w-4" />
              <span>All major banks support multi-currency accounts for international transactions</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
