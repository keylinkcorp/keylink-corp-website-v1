import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to register a company in Bahrain?",
    answer: "The company registration process typically takes 3-7 business days, depending on the type of company and completeness of documentation. With Keylink Corp's streamlined process, we often achieve faster turnaround times.",
  },
  {
    question: "What are the requirements for foreign company formation in Bahrain?",
    answer: "Foreign investors can own 100% of their company in most sectors. Requirements include valid passport copies, business plan, proof of address, and initial capital (varies by company type). Our team guides you through all requirements.",
  },
  {
    question: "Do I need a local sponsor to start a business in Bahrain?",
    answer: "For most business activities, 100% foreign ownership is allowed. However, some specific activities may require a local partner or sponsor. We can advise on your specific situation and provide local sponsorship services if needed.",
  },
  {
    question: "What is the minimum capital required for company formation?",
    answer: "Capital requirements vary by company type: SPC (Single Person Company) requires BHD 50, while WLL companies require BHD 20,000 (or BHD 250,000 for foreign WLL). We'll help you choose the right structure for your needs.",
  },
  {
    question: "Can Keylink Corp help with visa processing for employees?",
    answer: "Yes! We provide comprehensive visa services including work visas, family visas, and the Golden Visa program. Our PRO team handles all government liaison and documentation.",
  },
  {
    question: "What ongoing services do you provide after company formation?",
    answer: "We offer full business support including CR renewals, accounting services, tax compliance, visa management, document attestation, and more. Many clients retain us for ongoing PRO and administrative services.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Pattern */}
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold mb-6">
              FAQs
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
              Got Questions? We've Got Answers.
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Get answers to common questions about starting and running a business in Bahrain. 
              Can't find what you're looking for? Our team is here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/free-consultation" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20"
              >
                Ask Our Experts
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/faqs" 
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                View All FAQs
              </Link>
            </div>
          </div>

          {/* Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-xl border border-border px-6 data-[state=open]:border-gold/30 data-[state=open]:shadow-lg transition-all duration-200"
                >
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-gold hover:no-underline py-5 gap-4 [&[data-state=open]>svg]:rotate-45">
                    <span className="text-left">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
