import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Receipt, ShieldCheck, Building2, FileText, Users } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const feeCategories = [
  {
    category: "CR Registration",
    icon: FileText,
    spc: "BHD 50",
    wll: "BHD 100",
    branch: "BHD 100",
    holding: "BHD 200",
    tooltip: "Annual Commercial Registration fee payable to MOIC"
  },
  {
    category: "Trade License",
    icon: Receipt,
    spc: "BHD 50-100",
    wll: "BHD 100-200",
    branch: "BHD 100-200",
    holding: "BHD 200",
    tooltip: "Varies by business activity classification"
  },
  {
    category: "MOIC Approval",
    icon: Building2,
    spc: "BHD 20",
    wll: "BHD 30",
    branch: "BHD 50",
    holding: "BHD 100",
    tooltip: "One-time government processing fee"
  },
  {
    category: "Capital Deposit",
    icon: ShieldCheck,
    spc: "BHD 50",
    wll: "BHD 20,000",
    branch: "Varies*",
    holding: "BHD 250,000",
    tooltip: "Minimum paid-up capital requirement deposited in bank"
  },
  {
    category: "Chamber of Commerce",
    icon: Users,
    spc: "BHD 75",
    wll: "BHD 150",
    branch: "BHD 150",
    holding: "BHD 300",
    tooltip: "Annual membership fee for Bahrain Chamber"
  },
];

const serviceFees = {
  spc: "BHD 750",
  wll: "BHD 1,200",
  branch: "BHD 1,500",
  holding: "BHD 2,500",
};

const totalEstimates = {
  spc: "BHD 995+",
  wll: "BHD 21,580+",
  branch: "BHD 2,100+",
  holding: "BHD 253,300+",
};

export function GovernmentFeesBreakdown() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Receipt className="h-5 w-5 text-accent" />
              </div>
              <p className="text-sm font-medium text-accent tracking-wide uppercase">
                Cost Transparency
              </p>
            </div>
            <h2 className="text-[32px] md:text-[40px] lg:text-[46px] font-bold text-primary mb-4 tracking-tight leading-[1.15]">
              Government Fees vs Service Fees
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Complete breakdown of all costs involved in Bahrain company formation. 
              No hidden fees — know exactly what you'll pay before you start.
            </p>
          </motion.div>

          {/* Trust Badge */}
          <motion.div 
            variants={staggerItem}
            className="flex justify-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 text-primary px-5 py-2.5 rounded-full">
              <ShieldCheck className="h-5 w-5 text-accent" />
              <span className="font-semibold text-sm">100% Transparent Pricing — No Hidden Fees</span>
            </div>
          </motion.div>

          {/* Fee Table */}
          <motion.div variants={staggerItem} className="overflow-x-auto mb-10">
            <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-4 py-4 text-left text-sm font-semibold">Fee Category</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold">SPC</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold">WLL</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold">Branch</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold">Holding</th>
                </tr>
              </thead>
              <tbody>
                {feeCategories.map((fee, index) => (
                  <tr 
                    key={fee.category}
                    className={`border-b border-border hover:bg-muted/50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-muted/20'
                    }`}
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <fee.icon className="h-5 w-5 text-accent flex-shrink-0" />
                        <div>
                          <span className="font-medium text-primary">{fee.category}</span>
                          <p className="text-xs text-muted-foreground mt-0.5">{fee.tooltip}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center text-muted-foreground">{fee.spc}</td>
                    <td className="px-4 py-4 text-center text-muted-foreground">{fee.wll}</td>
                    <td className="px-4 py-4 text-center text-muted-foreground">{fee.branch}</td>
                    <td className="px-4 py-4 text-center text-muted-foreground">{fee.holding}</td>
                  </tr>
                ))}

                {/* Government Subtotal */}
                <tr className="bg-muted/50 font-semibold">
                  <td className="px-4 py-4 text-primary">Government Fees Subtotal</td>
                  <td className="px-4 py-4 text-center text-primary">~BHD 245</td>
                  <td className="px-4 py-4 text-center text-primary">~BHD 20,380</td>
                  <td className="px-4 py-4 text-center text-primary">~BHD 600</td>
                  <td className="px-4 py-4 text-center text-primary">~BHD 250,800</td>
                </tr>

                {/* Service Fee */}
                <tr className="bg-accent/10">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="h-5 w-5 text-accent flex-shrink-0" />
                      <div>
                        <span className="font-medium text-primary">Keylink Service Fee</span>
                        <p className="text-xs text-muted-foreground mt-0.5">Full formation service including documentation, submission & follow-up</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center font-semibold text-accent">{serviceFees.spc}</td>
                  <td className="px-4 py-4 text-center font-semibold text-accent">{serviceFees.wll}</td>
                  <td className="px-4 py-4 text-center font-semibold text-accent">{serviceFees.branch}</td>
                  <td className="px-4 py-4 text-center font-semibold text-accent">{serviceFees.holding}</td>
                </tr>

                {/* Total */}
                <tr className="bg-primary text-primary-foreground">
                  <td className="px-4 py-4 font-bold text-lg">TOTAL ESTIMATE</td>
                  <td className="px-4 py-4 text-center font-bold text-lg">{totalEstimates.spc}</td>
                  <td className="px-4 py-4 text-center font-bold text-lg">{totalEstimates.wll}</td>
                  <td className="px-4 py-4 text-center font-bold text-lg">{totalEstimates.branch}</td>
                  <td className="px-4 py-4 text-center font-bold text-lg">{totalEstimates.holding}</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          {/* Notes */}
          <motion.div variants={staggerItem} className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl border border-border">
              <h4 className="font-semibold text-primary mb-2">*Branch Capital</h4>
              <p className="text-sm text-muted-foreground">
                Branch office capital requirements depend on the parent company's jurisdiction and allocated capital.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-border">
              <h4 className="font-semibold text-primary mb-2">Additional Costs</h4>
              <p className="text-sm text-muted-foreground">
                Bank account opening fees, office rental, and visa costs are separate and depend on your requirements.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-border">
              <h4 className="font-semibold text-primary mb-2">Annual Renewals</h4>
              <p className="text-sm text-muted-foreground">
                CR and license renewals are required annually. We offer compliance packages from BHD 350/year.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
