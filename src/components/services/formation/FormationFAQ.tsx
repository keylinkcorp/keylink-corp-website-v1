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
import { staggerContainer, staggerItem } from "@/lib/animations";

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

  // Split FAQs into two columns
  const midPoint = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, midPoint);
  const rightFaqs = faqs.slice(midPoint);

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
        {/* Header - Centered at Top */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={staggerItem} className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <HelpCircle className="h-5 w-5 text-accent" />
            </div>
            <p className="text-sm font-medium text-accent tracking-wide uppercase">
              FAQs
            </p>
          </motion.div>
          <motion.h2 
            variants={staggerItem}
            className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            variants={staggerItem}
            className="text-lg text-muted-foreground leading-[1.8] max-w-2xl mx-auto"
          >
            Get answers to common questions about company formation in Bahrain. 
            Can't find what you're looking for? Our experts are here to help.
          </motion.p>
        </motion.div>

        {/* Two Column FAQ Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {/* Left Column */}
          <motion.div variants={staggerItem}>
            <Accordion type="single" collapsible className="space-y-4">
              {leftFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                >
                  <AccordionItem 
                    value={`left-${index}`}
                    className="bg-white rounded-xl border border-border px-6 data-[state=open]:border-accent/40 data-[state=open]:shadow-md data-[state=open]:border-l-4 data-[state=open]:border-l-accent transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent hover:no-underline py-5 gap-4">
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

          {/* Right Column */}
          <motion.div variants={staggerItem}>
            <Accordion type="single" collapsible className="space-y-4">
              {rightFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.25 + index * 0.05 }}
                >
                  <AccordionItem 
                    value={`right-${index}`}
                    className="bg-white rounded-xl border border-border px-6 data-[state=open]:border-accent/40 data-[state=open]:shadow-md data-[state=open]:border-l-4 data-[state=open]:border-l-accent transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent hover:no-underline py-5 gap-4">
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
        </motion.div>

        {/* CTA Buttons - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-14"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link 
              to="/free-consultation" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20"
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
        </motion.div>
      </div>
    </section>
  );
}
