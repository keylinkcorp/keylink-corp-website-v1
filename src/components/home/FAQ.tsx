import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
    <section className="section-spacing bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Content */}
          <div>
            <span className="section-badge">FAQs</span>
            <h2 className="mb-6">Got Questions? We've Got Answers.</h2>
            <p className="lead mb-10 max-w-xl">
              Get answers to common questions about starting and running a business in Bahrain. 
              Can't find what you're looking for? Our team is here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/free-consultation" className="btn-gold">
                Ask Our Experts
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/faqs" className="btn-outline-primary">
                View All FAQs
              </Link>
            </div>
          </div>

          {/* Accordion with numbers - Bizee style */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="card-elevated px-6 data-[state=open]:border-gold/50 data-[state=open]:shadow-lg"
                >
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-gold hover:no-underline py-5 gap-4">
                    <div className="flex items-start gap-4">
                      {/* Number indicator - Bizee style */}
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 text-gold font-bold text-sm flex items-center justify-center">
                        {index + 1}
                      </span>
                      <span className="text-left">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 pl-12 leading-relaxed">
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
