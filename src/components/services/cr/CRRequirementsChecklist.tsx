import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  User, 
  Building2, 
  FileText,
  CheckCircle2,
  Download,
  Globe
} from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "individual", label: "Individual Applicants", icon: User },
  { id: "corporate", label: "Corporate Shareholders", icon: Building2 },
  { id: "all", label: "All Applicants", icon: FileText }
];

const requirements = {
  individual: [
    {
      title: "Valid Passport Copy",
      description: "Clear copy of passport with minimum 6 months validity",
      required: true
    },
    {
      title: "Proof of Address",
      description: "Utility bill or bank statement from home country (not older than 3 months)",
      required: true
    },
    {
      title: "Professional CV",
      description: "Resume highlighting relevant experience (required for certain activities)",
      required: false
    },
    {
      title: "Passport-Size Photos",
      description: "2 recent photos with white background",
      required: true
    },
    {
      title: "Educational Certificates",
      description: "Degree certificates for professional services (if applicable)",
      required: false
    },
    {
      title: "No Objection Certificate",
      description: "From current employer if employed in Bahrain",
      required: false
    }
  ],
  corporate: [
    {
      title: "Certificate of Incorporation",
      description: "Certified copy of parent company's incorporation certificate",
      required: true
    },
    {
      title: "Memorandum of Association",
      description: "Certified MOA/Articles of Association of parent company",
      required: true
    },
    {
      title: "Board Resolution",
      description: "Resolution authorizing establishment in Bahrain and appointing representatives",
      required: true
    },
    {
      title: "Good Standing Certificate",
      description: "Certificate confirming company is active and compliant in home jurisdiction",
      required: true
    },
    {
      title: "Audited Financial Statements",
      description: "Last 2 years audited accounts (for branch offices)",
      required: false
    },
    {
      title: "Parent Company Profile",
      description: "Company brochure or profile describing business activities",
      required: false
    }
  ],
  all: [
    {
      title: "Office Lease Agreement",
      description: "Commercial address lease OR virtual office subscription",
      required: true
    },
    {
      title: "Power of Attorney",
      description: "Authorizing Keylink to act on your behalf (for remote registration)",
      required: false
    },
    {
      title: "Business Plan",
      description: "Required for certain regulated activities (financial services, etc.)",
      required: false
    },
    {
      title: "Bank Reference Letter",
      description: "May be required for certain business activities",
      required: false
    },
    {
      title: "Activity-Specific Permits",
      description: "Pre-approvals from relevant authorities for regulated sectors",
      required: false
    }
  ]
};

export function CRRequirementsChecklist() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("individual");

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div variants={staggerItem}>
            <span className="section-badge">Documentation</span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-4">
            What Documents Do You Need for{" "}
            <span className="text-accent">CR Registration</span>?
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Required documents vary based on your applicant type and business activities
          </motion.p>
        </motion.div>

        {/* Tab Selector */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-full border-2 transition-all",
                activeTab === tab.id
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-foreground border-border hover:border-accent"
              )}
            >
              <tab.icon className="w-5 h-5" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Requirements List */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border bg-secondary/30">
              <h3 className="text-xl font-semibold flex items-center gap-3">
                {tabs.find(t => t.id === activeTab)?.icon && (
                  <span className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    {(() => {
                      const Icon = tabs.find(t => t.id === activeTab)!.icon;
                      return <Icon className="w-5 h-5 text-accent" />;
                    })()}
                  </span>
                )}
                {tabs.find(t => t.id === activeTab)?.label}
              </h3>
            </div>
            
            <div className="divide-y divide-border">
              {requirements[activeTab as keyof typeof requirements].map((req, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-5 hover:bg-secondary/30 transition-colors"
                >
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                    req.required ? "bg-accent/10" : "bg-secondary"
                  )}>
                    <CheckCircle2 className={cn(
                      "w-5 h-5",
                      req.required ? "text-accent" : "text-muted-foreground"
                    )} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{req.title}</h4>
                      {req.required ? (
                        <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-medium rounded">
                          Required
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 bg-secondary text-muted-foreground text-xs font-medium rounded">
                          If Applicable
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{req.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Remote Registration Callout */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto mt-8"
        >
          <div className="flex items-start gap-4 p-6 bg-accent/5 border border-accent/20 rounded-xl">
            <Globe className="w-8 h-8 text-accent flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-2">Remote Registration Available</h4>
              <p className="text-muted-foreground mb-3">
                Can't visit Bahrain? We can complete your entire CR registration remotely using 
                a Power of Attorney. Simply provide your documents, and we'll handle everything else.
              </p>
              <a 
                href="/contact"
                className="text-accent font-medium hover:underline inline-flex items-center gap-1"
              >
                Learn about remote registration →
              </a>
            </div>
          </div>
        </motion.div>

        {/* Download Checklist CTA */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground mb-4">
            Need a complete document checklist for your specific case?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            <Download className="w-5 h-5" />
            Get Personalized Checklist
          </a>
        </motion.div>
      </div>
    </section>
  );
}
