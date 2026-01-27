import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { 
  Calculator, 
  Building2, 
  Briefcase, 
  Users, 
  Plus,
  ChevronRight,
  ChevronLeft,
  Send,
  Check,
  Sparkles
} from "lucide-react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

// Lead form validation schema
const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().optional()
});

// Pricing data
const companyTypes = [
  { id: "SPC", name: "SPC", description: "Single Person Company", price: 750 },
  { id: "WLL", name: "WLL", description: "Limited Liability", price: 1200 },
  { id: "Branch", name: "Branch", description: "Branch Office", price: 1500 },
  { id: "Holding", name: "Holding", description: "Holding Company", price: 2500 },
];

const activities = [
  { id: "consulting", name: "Consulting", icon: Briefcase },
  { id: "trading", name: "Trading", icon: Building2 },
  { id: "manufacturing", name: "Manufacturing", icon: Building2 },
  { id: "tech", name: "Technology", icon: Sparkles },
];

const visaOptions = [
  { id: "0", label: "0 Visas", price: 0 },
  { id: "1-2", label: "1-2 Visas", price: 400 },
  { id: "3-5", label: "3-5 Visas", price: 900 },
  { id: "6+", label: "6+ Visas", price: 1500 },
];

const additionalServices = [
  { id: "bank", name: "Bank Account Support", price: 150 },
  { id: "pro", name: "PRO Services (1 Year)", price: 600 },
  { id: "virtual", name: "Virtual Office (1 Year)", price: 450 },
  { id: "accounting", name: "Accounting Setup", price: 300 },
];

export function FormationCostCalculator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [step, setStep] = useState(1);
  const [companyType, setCompanyType] = useState<string | null>(null);
  const [activity, setActivity] = useState<string | null>(null);
  const [visaCount, setVisaCount] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "" });
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  // Calculate costs
  const calculateTotal = () => {
    let total = 0;
    
    // Base price
    const selectedType = companyTypes.find(t => t.id === companyType);
    if (selectedType) total += selectedType.price;
    
    // Visa costs
    const selectedVisa = visaOptions.find(v => v.id === visaCount);
    if (selectedVisa) total += selectedVisa.price;
    
    // Additional services
    selectedServices.forEach(serviceId => {
      const service = additionalServices.find(s => s.id === serviceId);
      if (service) total += service.price;
    });
    
    return total;
  };

  const canProceed = () => {
    switch (step) {
      case 1: return companyType !== null;
      case 2: return activity !== null;
      case 3: return visaCount !== null;
      case 4: return true;
      default: return false;
    }
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleLeadSubmit = () => {
    const result = leadFormSchema.safeParse(leadForm);
    
    if (!result.success) {
      const errors: { name?: string; email?: string } = {};
      result.error.errors.forEach(err => {
        if (err.path[0] === "name") errors.name = err.message;
        if (err.path[0] === "email") errors.email = err.message;
      });
      setFormErrors(errors);
      return;
    }
    
    setFormErrors({});
    setIsSubmitted(true);
    toast({
      title: "Quote Request Received!",
      description: "Our team will contact you within 24 hours with a detailed proposal.",
    });
  };

  const handleReset = () => {
    setStep(1);
    setCompanyType(null);
    setActivity(null);
    setVisaCount(null);
    setSelectedServices([]);
    setShowResult(false);
    setLeadForm({ name: "", email: "", phone: "" });
    setFormErrors({});
    setIsSubmitted(false);
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">
            Interactive Tool
          </p>
          <h2 className="text-[40px] md:text-[48px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
            Calculate Your Company Formation Costs
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            Get an instant estimate for your Bahrain company formation. 
            Answer a few questions and receive a detailed cost breakdown.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl border-2 border-border shadow-sm p-8 md:p-12">
            {/* Progress Bar */}
            {!showResult && (
              <div className="mb-10">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-muted-foreground">
                    Step {step} of {totalSteps}
                  </span>
                  <span className="text-sm font-medium text-gold">
                    {Math.round(progress)}% Complete
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}

            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key={step}
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  {/* Step 1: Company Type */}
                  {step === 1 && (
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Choose Company Type
                      </h3>
                      <p className="text-muted-foreground mb-8">
                        Select the type of company you want to register in Bahrain
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {companyTypes.map((type) => (
                          <motion.div
                            key={type.id}
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setCompanyType(type.id)}
                            className={cn(
                              "p-6 rounded-2xl border-2 cursor-pointer transition-all text-center",
                              companyType === type.id
                                ? "border-gold bg-gold/5 shadow-lg"
                                : "border-border hover:border-gold/40"
                            )}
                          >
                            <Building2 className={cn(
                              "h-8 w-8 mx-auto mb-3",
                              companyType === type.id ? "text-gold" : "text-muted-foreground"
                            )} />
                            <h4 className="font-bold text-primary text-lg">{type.name}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{type.description}</p>
                            <p className="text-gold font-bold">BHD {type.price.toLocaleString()}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Business Activity */}
                  {step === 2 && (
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Select Business Activity
                      </h3>
                      <p className="text-muted-foreground mb-8">
                        What will be your primary business activity?
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {activities.map((act) => (
                          <motion.div
                            key={act.id}
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setActivity(act.id)}
                            className={cn(
                              "p-6 rounded-2xl border-2 cursor-pointer transition-all text-center",
                              activity === act.id
                                ? "border-gold bg-gold/5 shadow-lg"
                                : "border-border hover:border-gold/40"
                            )}
                          >
                            <act.icon className={cn(
                              "h-8 w-8 mx-auto mb-3",
                              activity === act.id ? "text-gold" : "text-muted-foreground"
                            )} />
                            <h4 className="font-bold text-primary">{act.name}</h4>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Visa Requirements */}
                  {step === 3 && (
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Work Visa Requirements
                      </h3>
                      <p className="text-muted-foreground mb-8">
                        How many work visas do you need for your team?
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {visaOptions.map((visa) => (
                          <motion.div
                            key={visa.id}
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setVisaCount(visa.id)}
                            className={cn(
                              "p-6 rounded-2xl border-2 cursor-pointer transition-all text-center",
                              visaCount === visa.id
                                ? "border-gold bg-gold/5 shadow-lg"
                                : "border-border hover:border-gold/40"
                            )}
                          >
                            <Users className={cn(
                              "h-8 w-8 mx-auto mb-3",
                              visaCount === visa.id ? "text-gold" : "text-muted-foreground"
                            )} />
                            <h4 className="font-bold text-primary">{visa.label}</h4>
                            <p className="text-gold font-bold mt-2">
                              {visa.price > 0 ? `+BHD ${visa.price}` : "Included"}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 4: Additional Services */}
                  {step === 4 && (
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Additional Services
                      </h3>
                      <p className="text-muted-foreground mb-8">
                        Select any additional services you need (optional)
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {additionalServices.map((service) => (
                          <motion.div
                            key={service.id}
                            whileHover={{ y: -2 }}
                            onClick={() => handleServiceToggle(service.id)}
                            className={cn(
                              "p-5 rounded-xl border-2 cursor-pointer transition-all flex items-center gap-4",
                              selectedServices.includes(service.id)
                                ? "border-gold bg-gold/5"
                                : "border-border hover:border-gold/40"
                            )}
                          >
                            <Checkbox
                              checked={selectedServices.includes(service.id)}
                              className="h-5 w-5"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold text-primary">{service.name}</h4>
                            </div>
                            <span className="text-gold font-bold">+BHD {service.price}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : (
                /* Results & Lead Capture */
                <motion.div
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.3 }}
                >
                  {!isSubmitted ? (
                    <div className="grid md:grid-cols-2 gap-10">
                      {/* Cost Breakdown */}
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                          <Calculator className="h-6 w-6 text-gold" />
                          Your Estimate
                        </h3>
                        
                        <div className="space-y-4 mb-6">
                          <div className="flex justify-between py-3 border-b border-border">
                            <span className="text-muted-foreground">Company Type ({companyType})</span>
                            <span className="font-semibold text-primary">
                              BHD {companyTypes.find(t => t.id === companyType)?.price.toLocaleString()}
                            </span>
                          </div>
                          
                          {visaCount && visaCount !== "0" && (
                            <div className="flex justify-between py-3 border-b border-border">
                              <span className="text-muted-foreground">Work Visas ({visaCount})</span>
                              <span className="font-semibold text-primary">
                                BHD {visaOptions.find(v => v.id === visaCount)?.price.toLocaleString()}
                              </span>
                            </div>
                          )}
                          
                          {selectedServices.map(serviceId => {
                            const service = additionalServices.find(s => s.id === serviceId);
                            return service ? (
                              <div key={serviceId} className="flex justify-between py-3 border-b border-border">
                                <span className="text-muted-foreground">{service.name}</span>
                                <span className="font-semibold text-primary">BHD {service.price}</span>
                              </div>
                            ) : null;
                          })}
                        </div>
                        
                        <div className="bg-primary/5 rounded-2xl p-6">
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold text-primary">Estimated Total</span>
                            <span className="text-3xl font-bold text-gold">
                              BHD {calculateTotal().toLocaleString()}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            *Government fees included. Final quote may vary based on specific requirements.
                          </p>
                        </div>
                      </div>

                      {/* Lead Capture Form */}
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-2">
                          Get Your Detailed Quote
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          Enter your details and we'll send a comprehensive proposal within 24 hours.
                        </p>
                        
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              value={leadForm.name}
                              onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                              placeholder="John Smith"
                              className={formErrors.name ? "border-red-500" : ""}
                            />
                            {formErrors.name && (
                              <p className="text-sm text-red-500 mt-1">{formErrors.name}</p>
                            )}
                          </div>
                          
                          <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={leadForm.email}
                              onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                              placeholder="john@company.com"
                              className={formErrors.email ? "border-red-500" : ""}
                            />
                            {formErrors.email && (
                              <p className="text-sm text-red-500 mt-1">{formErrors.email}</p>
                            )}
                          </div>
                          
                          <div>
                            <Label htmlFor="phone">Phone (Optional)</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={leadForm.phone}
                              onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                              placeholder="+973 1234 5678"
                            />
                          </div>
                          
                          <Button
                            onClick={handleLeadSubmit}
                            className="w-full h-12 text-base bg-primary hover:bg-primary/90"
                          >
                            <Send className="h-4 w-4 mr-2" />
                            Get Detailed Quote
                          </Button>
                          
                          <button
                            onClick={handleReset}
                            className="w-full text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            Start Over
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Success State */
                    <div className="text-center py-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
                      >
                        <Check className="h-10 w-10 text-green-600" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Quote Request Submitted!
                      </h3>
                      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                        Thank you for your interest. Our team will review your requirements 
                        and send you a detailed proposal within 24 hours.
                      </p>
                      <Button onClick={handleReset} variant="outline">
                        Calculate Another Quote
                      </Button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            {!showResult && (
              <div className="flex justify-between mt-10 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={step === 1}
                  className="gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </Button>
                
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="gap-2 bg-primary hover:bg-primary/90"
                >
                  {step === totalSteps ? "See Results" : "Next"}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
