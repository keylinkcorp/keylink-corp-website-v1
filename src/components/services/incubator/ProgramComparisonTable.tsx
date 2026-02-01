import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, Minus } from "lucide-react";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const comparisonData = {
  headers: ["Factor", "Tamkeen", "FinTech Bay", "C5 Accelerate"],
  rows: [
    {
      factor: "Industry Focus",
      values: ["All Sectors", "FinTech Only", "Tech-Enabled"]
    },
    {
      factor: "Equity Required",
      values: ["no", "varies", "varies"],
      isBoolean: true
    },
    {
      factor: "Funding Type",
      values: ["Grants", "Network Access", "Investor Prep"]
    },
    {
      factor: "Application Difficulty",
      values: ["Medium", "High", "High"],
      highlight: [true, false, false]
    },
    {
      factor: "Foreign Founder Eligible",
      values: ["yes", "yes", "yes"],
      isBoolean: true
    },
    {
      factor: "Duration",
      values: ["6-12 months", "3-6 months", "12 weeks"]
    },
    {
      factor: "Best Entry Point",
      values: ["Company Formation", "Working MVP", "Scalable Model"]
    }
  ]
};

function renderValue(value: string, isBoolean?: boolean, isHighlight?: boolean) {
  if (isBoolean) {
    if (value === "yes") {
      return (
        <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
          <Check className="w-4 h-4 text-green-600" />
        </span>
      );
    } else if (value === "no") {
      return (
        <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
          <Check className="w-4 h-4 text-green-600" />
        </span>
      );
    } else if (value === "varies") {
      return (
        <span className="inline-flex items-center justify-center w-6 h-6 bg-amber-100 rounded-full">
          <Minus className="w-4 h-4 text-amber-600" />
        </span>
      );
    }
  }
  
  return (
    <span className={`text-sm ${isHighlight ? "text-accent font-semibold" : "text-foreground"}`}>
      {value}
    </span>
  );
}

export function ProgramComparisonTable() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Dot Pattern */}
      <div className="absolute inset-0 -z-10 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div variants={staggerItem}>
              <span className="section-badge">Quick Comparison</span>
            </motion.div>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-4">
              Program <span className="text-accent">At a Glance</span>
            </motion.h2>
            <motion.p variants={staggerItem} className="text-muted-foreground max-w-2xl mx-auto">
              Compare key factors across all three programs to find your best match.
            </motion.p>
          </div>

          {/* Desktop Table */}
          <motion.div variants={staggerItem} className="hidden lg:block">
            <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    {comparisonData.headers.map((header, index) => (
                      <th 
                        key={index} 
                        className={`px-6 py-5 text-left font-semibold ${index === 0 ? "" : "text-center"}`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.rows.map((row, rowIndex) => (
                    <tr 
                      key={rowIndex}
                      className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors"
                    >
                      <td className="px-6 py-5 font-medium text-foreground">
                        {row.factor}
                      </td>
                      {row.values.map((value, valueIndex) => (
                        <td key={valueIndex} className="px-6 py-5 text-center">
                          {renderValue(value, row.isBoolean, row.highlight?.[valueIndex])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Mobile Cards */}
          <motion.div 
            variants={staggerContainer}
            className="lg:hidden space-y-6"
          >
            {["Tamkeen", "FinTech Bay", "C5 Accelerate"].map((program, programIndex) => (
              <motion.div
                key={programIndex}
                variants={staggerItem}
                className="bg-white rounded-xl p-6 border border-border shadow-sm"
              >
                <h3 className="text-lg font-bold mb-4 text-primary">{program}</h3>
                <div className="space-y-3">
                  {comparisonData.rows.map((row, rowIndex) => (
                    <div 
                      key={rowIndex}
                      className="flex justify-between items-center py-2 border-b border-border last:border-0"
                    >
                      <span className="text-sm text-muted-foreground">{row.factor}</span>
                      <span className="text-sm font-medium">
                        {renderValue(row.values[programIndex], row.isBoolean, row.highlight?.[programIndex])}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
