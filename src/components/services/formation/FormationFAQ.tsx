import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to form a company in Bahrain?",
    answer: "With Keylink Corp, company formation takes 3-7 business days. This is significantly faster than the industry average of 2-6 weeks. Our streamlined process and established relationships with government authorities enable rapid processing.",
  },
  {
    question: "Can foreigners own 100% of a company in Bahrain?",
    answer: "Yes. Since 2017, Bahrain allows 100% foreign ownership in most business sectors. Some restricted activities (such as certain professional services) may require a local partner, but for the majority of commercial activities, full foreign ownership is permitted.",
  },
  {
    question: "What is the minimum capital required for a company?",
    answer: "Capital requirements vary by company type: SPC (Single Person Company) requires BHD 50 minimum, WLL (Limited Liability Company) requires BHD 20,000, and Holding Companies require BHD 250,000. We'll help you choose the structure that fits your needs and budget.",
  },
  {
    question: "Do I need to be physically present in Bahrain to register?",
    answer: "No. We offer complete remote formation services. All documents can be signed via Power of Attorney, and we handle all government submissions on your behalf. Many of our clients complete the entire process without visiting Bahrain.",
  },
  {
    question: "What types of companies can I register in Bahrain?",
    answer: "Main options include: Single Person Company (SPC) for solo entrepreneurs, Limited Liability Company (WLL) for partnerships, Branch Office for foreign company expansion, Holding Company for investment vehicles, and Representative Office for market research activities.",
  },
  {
    question: "What documents are needed for company formation?",
    answer: "Key documents include: valid passport copies, professional CV/resume, proof of residential address, and a business plan (for certain activities). Corporate shareholders need additional documents such as certificate of incorporation and board resolutions.",
  },
  {
    question: "How much does company formation cost in Bahrain?",
    answer: "Our packages start from BHD 750 for basic SPC registration. Full WLL formation with visa support starts at BHD 1,200. Premium packages with additional services start at BHD 1,800. All pricing is transparent with no hidden fees.",
  },
  {
    question: "Do I need a local sponsor or partner?",
    answer: "For most commercial activities, no local sponsor is required. 100% foreign ownership is permitted in most sectors. However, certain regulated activities may require a Bahraini partner or specialized licenses. We can advise on your specific situation.",
  },
  {
    question: "Can I get work visas through my company?",
    answer: "Yes. Your visa quota depends on your office size and business activities. We handle all visa processing as part of our services, including work permits, residence permits, and the Golden Visa program for qualified investors.",
  },
  {
    question: "What are the annual compliance requirements?",
    answer: "Annual requirements include: Commercial Registration (CR) renewal, commercial license renewal, audit requirements (for certain company types), and LMRA fees for employees. We offer ongoing compliance packages to handle all these requirements.",
  },
  {
    question: "How do I open a corporate bank account in Bahrain?",
    answer: "We assist with account opening at all major Bahrain banks including NBB, BBK, Ahli United, and international banks. Required documents include company registration papers, shareholder identification, and a business plan. The process typically takes 2-3 weeks.",
  },
  {
    question: "What is the step-by-step company formation process?",
    answer: "The process has three phases: (1) Initial Registration - security approval, name registration, capital deposit, and partner setup; (2) Location & Approvals - business address, sector approvals, notarization, and bank account; (3) Compliance - LMRA registration, visas, and ID cards.",
  },
];

export function FormationFAQ() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Dashed pattern - top fade */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          maskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                <HelpCircle className="h-5 w-5 text-gold" />
              </div>
              <p className="text-sm font-medium text-gold tracking-wide uppercase">
                FAQs
              </p>
            </div>
            <h2 className="text-[44px] md:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-[1.8] max-w-md">
              Get answers to common questions about company formation in Bahrain.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  to="/free-consultation" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200"
                >
                  Ask Our Experts
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  to="/faqs" 
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  View All FAQs
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-h-[700px] overflow-y-auto pr-2"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className="bg-white rounded-xl border border-border px-6 data-[state=open]:border-gold/40 data-[state=open]:shadow-md data-[state=open]:border-l-4 data-[state=open]:border-l-gold transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left font-semibold text-primary hover:text-gold hover:no-underline py-5 gap-4">
                      <span className="text-left text-[15px]">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-[1.8] text-[15px]">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
