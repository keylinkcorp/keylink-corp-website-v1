import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  ArrowRight,
  Landmark,
  FileText
} from "lucide-react";

const banks = [
  { name: "National Bank of Bahrain", timeline: "2-3 weeks", deposit: "BHD 500", bestFor: "Local SMEs" },
  { name: "Bank of Bahrain & Kuwait", timeline: "2-3 weeks", deposit: "BHD 1,000", bestFor: "Trading Companies" },
  { name: "Ahli United Bank", timeline: "2-4 weeks", deposit: "BHD 2,000", bestFor: "Regional Operations" },
  { name: "Standard Chartered", timeline: "3-4 weeks", deposit: "USD 10,000", bestFor: "International Business" },
];

const documents = [
  "CR Certificate (original)",
  "Trade License",
  "Memorandum of Association",
  "Board Resolution",
  "Shareholder Passports",
  "Proof of Business Address",
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

        {/* Bank Comparison Table */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-3">
            <Landmark className="h-5 w-5 text-gold" />
            Top Banks for Business Accounts
          </h3>
          
          <div className="overflow-x-auto rounded-xl border border-border bg-white">
            <table className="w-full text-left min-w-[600px]">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="py-4 px-6 text-sm font-semibold text-muted-foreground">Bank</th>
                  <th className="py-4 px-6 text-sm font-semibold text-muted-foreground">Timeline</th>
                  <th className="py-4 px-6 text-sm font-semibold text-muted-foreground">Min Deposit</th>
                  <th className="py-4 px-6 text-sm font-semibold text-muted-foreground">Best For</th>
                </tr>
              </thead>
              <tbody>
                {banks.map((bank, index) => (
                  <tr 
                    key={bank.name}
                    className="border-b border-border/50 last:border-b-0 hover:bg-muted/20 transition-colors"
                  >
                    <td className="py-5 px-6 font-medium text-primary">{bank.name}</td>
                    <td className="py-5 px-6 text-muted-foreground">{bank.timeline}</td>
                    <td className="py-5 px-6 text-muted-foreground">{bank.deposit}</td>
                    <td className="py-5 px-6 text-gold font-medium">{bank.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.article>

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
              <p className="text-muted-foreground mb-6">
                We connect you directly with bank relationship managers, expediting the process and ensuring smooth documentation.
              </p>
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
