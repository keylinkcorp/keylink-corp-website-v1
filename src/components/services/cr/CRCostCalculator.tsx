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
  Users,
  FileText,
  ChevronRight,
  ChevronLeft,
  Send,
  Check,
  RefreshCw,
  Briefcase,
  GitBranch,
  Crown
} from "lucide-react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

// Lead form validation schema
const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().optional()
});

// Entity types
const entityTypes = [
  { id: "SPC", name: "SPC", description: "Single Person Company", icon: Briefcase, govFee: 65 },
  { id: "WLL", name: "WLL", description: "Limited Liability", icon: Users, govFee: 65 },
  { id: "Branch", name: "Branch", description: "Branch Office", icon: GitBranch, govFee: 65 },
  { id: "Holding", name: "Holding", description: "Holding Company", icon: Crown, govFee: 65 },
];

// Activity count options
const activityOptions = [
  { id: "1-3", label: "1-3 Activities", price: 20 },
  { id: "4-6", label: "4-6 Activities", price: 50 },
  { id: "7-10", label: "7-10 Activities", price: 100 },
  { id: "10+", label: "10+ Activities", price: 200 },
];

// Registration types
const registrationTypes = [
  { id: "new", name: "New Registration", description: "First-time CR registration", price: 350 },
  { id: "amendment", name: "CR Amendment", description: "Activity/shareholder changes", price: 150 },
  { id: "renewal", name: "CR Renewal", description: "Annual renewal processing", price: 200 },
];

// Additional services
const additionalServices = [
  { id: "name", name: "Name Reservation", price: 50 },
  { id: "virtual", name: "Virtual Office (1 Year)", price: 450 },
  { id: "lmra", name: "LMRA Registration", price: 100 },
  { id: "bank", name: "Bank Account Support", price: 150 },
  { id: "pro", name: "PRO Retainer (1 Year)", price: 600 },
];

export function CRCostCalculator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [step, setStep] = useState(1);
  const [entityType, setEntityType] = useState<string | null>(null);
  const [activityCount, setActivityCount] = useState<string | null>(null);
  const [registrationType, setRegistrationType] = useState<string | null>(null);
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
    
    // Base government fees (CR + Chamber)
    const selectedEntity = entityTypes.find(e => e.id === entityType);
    if (selectedEntity) total += selectedEntity.govFee + 50; // CR fee + Chamber
    
    // Trade license fee based on activities
    const activityFee = activityOptions.find(a => a.id === activityCount)?.price || 0;
    total += activityFee;
    
    // Registration type service fee
    const regFee = registrationTypes.find(r => r.id === registrationType)?.price || 0;
    total += regFee;
    
    // Additional services
    selectedServices.forEach(serviceId => {
      const service = additionalServices.find(s => s.id === serviceId);
      if (service) total += service.price;
    });
    
    return total;
  };

  const canProceed = () => {
    switch (step) {
      case 1: return entityType !== null;
      case 2: return activityCount !== null;
      case 3: return registrationType !== null;
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
    setEntityType(null);
    setActivityCount(null);
    setRegistrationType(null);
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
            Calculate Your CR Registration Costs
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            Get an instant estimate for your commercial registration. 
            Answer a few questions and receive a detailed cost breakdown.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl border-2 border-border shadow-xl p-8 md:p-12">
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
                  {/* Step 1: Entity Type */}
                  {step === 1 && (
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Choose Entity Type
                      </h3>
                      <p className="text-muted-foreground mb-8">
                        Select the type of commercial registration you need
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {entityTypes.map((type) => (
                          <motion.div
                            key={type.id}
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setEntityType(type.id)}
                            className={cn(
                              "p-6 rounded-2xl border-2 cursor-pointer transition-all text-center",
                              entityType === type.id
                                ? "border-gold bg-gold/5 shadow-lg"
                                : "border-border hover:border-gold/40"
                            )}
                          >
                            <type.icon className={cn(
                              "h-8 w-8 mx-auto mb-3",
                              entityType === type.id ? "text-gold" : "text-muted-foreground"
                            )} />
                            <h4 className="font-bold text-primary text-lg">{type.name}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{type.description}</p>
                            <p className="text-gold font-bold text-sm">Gov. Fee: BHD {type.govFee}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Number of Activities */}
                  {step === 2 && (
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Number of Commercial Activities
                      </h3>
                      <p className="text-muted-foreground mb-8">
                        How many activities will be listed on your CR?
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {activityOptions.map((option) => (
                          <motion.div
                            key={option.id}
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setActivityCount(option.id)}
                            className={cn(
                              "p-6 rounded-2xl border-2 cursor-pointer transition-all text-center",
                              activityCount === option.id
                                ? "border-gold bg-gold/5 shadow-lg"
                                : "border-border hover:border-gold/40"
                            )}
                          >
                            <FileText className={cn(
                              "h-8 w-8 mx-auto mb-3",
                              activityCount === option.id ? "text-gold" : "text-muted-foreground"
                            )} />
                            <h4 className="font-bold text-primary">{option.label}</h4>
                            <p className="text-gold font-bold mt-2">
                              BHD {option.price}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Registration Type */}
                  {step === 3 && (
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Registration Type
                      </h3>
                      <p className="text-muted-foreground mb-8">
                        What type of CR service do you need?
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {registrationTypes.map((type) => (
                          <motion.div
                            key={type.id}
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setRegistrationType(type.id)}
                            className={cn(
                              "p-6 rounded-2xl border-2 cursor-pointer transition-all text-center",
                              registrationType === type.id
                                ? "border-gold bg-gold/5 shadow-lg"
                                : "border-border hover:border-gold/40"
                            )}
                          >
                            {type.id === "new" && <Building2 className={cn(
                              "h-8 w-8 mx-auto mb-3",
                              registrationType === type.id ? "text-gold" : "text-muted-foreground"
                            )} />}
                            {type.id === "amendment" && <FileText className={cn(
                              "h-8 w-8 mx-auto mb-3",
                              registrationType === type.id ? "text-gold" : "text-muted-foreground"
                            )} />}
                            {type.id === "renewal" && <RefreshCw className={cn(
                              "h-8 w-8 mx-auto mb-3",
                              registrationType === type.id ? "text-gold" : "text-muted-foreground"
                            )} />}
                            <h4 className="font-bold text-primary text-lg">{type.name}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{type.description}</p>
                            <p className="text-gold font-bold">BHD {type.price}</p>
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
                            <span className="text-muted-foreground">Entity Type ({entityType})</span>
                            <span className="font-semibold text-primary">
                              BHD {entityTypes.find(e => e.id === entityType)?.govFee}
                            </span>
                          </div>
                          
                          <div className="flex justify-between py-3 border-b border-border">
                            <span className="text-muted-foreground">Chamber of Commerce</span>
                            <span className="font-semibold text-primary">BHD 50</span>
                          </div>
                          
                          <div className="flex justify-between py-3 border-b border-border">
                            <span className="text-muted-foreground">Trade License ({activityCount} activities)</span>
                            <span className="font-semibold text-primary">
                              BHD {activityOptions.find(a => a.id === activityCount)?.price}
                            </span>
                          </div>
                          
                          <div className="flex justify-between py-3 border-b border-border">
                            <span className="text-muted-foreground">
                              {registrationTypes.find(r => r.id === registrationType)?.name}
                            </span>
                            <span className="font-semibold text-primary">
                              BHD {registrationTypes.find(r => r.id === registrationType)?.price}
                            </span>
                          </div>
                          
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
                            Government fees included. Final quote based on specific requirements.
                          </p>
                        </div>
                      </div>
                      
                      {/* Lead Capture Form */}
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-6">
                          Get Your Detailed Quote
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          Enter your details and we'll send you a comprehensive proposal.
                        </p>
                        
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="name" className="text-primary">Full Name *</Label>
                            <Input
                              id="name"
                              value={leadForm.name}
                              onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                              placeholder="John Smith"
                              className={cn(
                                "mt-1",
                                formErrors.name && "border-destructive"
                              )}
                            />
                            {formErrors.name && (
                              <p className="text-sm text-destructive mt-1">{formErrors.name}</p>
                            )}
                          </div>
                          
                          <div>
                            <Label htmlFor="email" className="text-primary">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={leadForm.email}
                              onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                              placeholder="john@company.com"
                              className={cn(
                                "mt-1",
                                formErrors.email && "border-destructive"
                              )}
                            />
                            {formErrors.email && (
                              <p className="text-sm text-destructive mt-1">{formErrors.email}</p>
                            )}
                          </div>
                          
                          <div>
                            <Label htmlFor="phone" className="text-primary">Phone (Optional)</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={leadForm.phone}
                              onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                              placeholder="+973 1700 0000"
                              className="mt-1"
                            />
                          </div>
                          
                          <Button
                            onClick={handleLeadSubmit}
                            className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg mt-4"
                          >
                            Get Detailed Quote
                            <Send className="ml-2 h-5 w-5" />
                          </Button>
                          
                          <button
                            onClick={handleReset}
                            className="w-full text-center text-sm text-muted-foreground hover:text-primary transition-colors mt-2"
                          >
                            Start Over
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Success State */
                    <div className="text-center py-12">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <Check className="h-10 w-10 text-green-600" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-primary mb-3">
                        Quote Request Submitted!
                      </h3>
                      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                        Thank you for your interest. Our team will review your requirements 
                        and contact you within 24 hours with a detailed proposal.
                      </p>
                      <Button
                        onClick={handleReset}
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-white"
                      >
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
                  className="border-border text-muted-foreground hover:text-primary"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  {step === totalSteps ? "Calculate" : "Continue"}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
