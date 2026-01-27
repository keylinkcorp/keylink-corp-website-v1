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
  Crown,
  Sparkles,
  ArrowRight
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
      {/* Background Pattern - Enhanced */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-6">
            <Calculator className="w-4 h-4" />
            Interactive Tool
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight leading-[1.15]">
            Calculate Your CR Registration Costs
          </h2>
          <p className="text-xl text-muted-foreground leading-[1.8]">
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
          <div className="bg-white rounded-3xl border-2 border-border shadow-2xl p-8 md:p-12 hover:border-accent/30 transition-colors">
            {/* Progress Bar - Enhanced with gold gradient */}
            {!showResult && (
              <div className="mb-10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-bold text-muted-foreground">
                    Step {step} of {totalSteps}
                  </span>
                  <span className="text-sm font-bold text-accent">
                    {Math.round(progress)}% Complete
                  </span>
                </div>
                <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
                  <motion.div 
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent via-accent to-accent/80 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: [-80, 400] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
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
                  {/* Step 1: Entity Type - Enhanced */}
                  {step === 1 && (
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">
                        Choose Entity Type
                      </h3>
                      <p className="text-lg text-muted-foreground mb-10">
                        Select the type of commercial registration you need
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        {entityTypes.map((type) => (
                          <motion.div
                            key={type.id}
                            whileHover={{ y: -6, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setEntityType(type.id)}
                            className={cn(
                              "p-7 rounded-2xl border-2 cursor-pointer transition-all text-center",
                              entityType === type.id
                                ? "border-accent bg-accent/5 shadow-xl shadow-accent/20"
                                : "border-border hover:border-accent/50 hover:shadow-lg"
                            )}
                          >
                            <div className={cn(
                              "w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center transition-all",
                              entityType === type.id 
                                ? "bg-gradient-to-br from-accent to-accent/80" 
                                : "bg-secondary"
                            )}>
                              <type.icon className={cn(
                                "h-7 w-7",
                                entityType === type.id ? "text-primary" : "text-muted-foreground"
                              )} />
                            </div>
                            <h4 className="font-bold text-primary text-xl mb-1">{type.name}</h4>
                            <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                            <p className="text-accent font-bold">Gov. Fee: BHD {type.govFee}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Number of Activities - Enhanced */}
                  {step === 2 && (
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">
                        Number of Commercial Activities
                      </h3>
                      <p className="text-lg text-muted-foreground mb-10">
                        How many activities will be listed on your CR?
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        {activityOptions.map((option) => (
                          <motion.div
                            key={option.id}
                            whileHover={{ y: -6, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setActivityCount(option.id)}
                            className={cn(
                              "p-7 rounded-2xl border-2 cursor-pointer transition-all text-center",
                              activityCount === option.id
                                ? "border-accent bg-accent/5 shadow-xl shadow-accent/20"
                                : "border-border hover:border-accent/50 hover:shadow-lg"
                            )}
                          >
                            <div className={cn(
                              "w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center transition-all",
                              activityCount === option.id 
                                ? "bg-gradient-to-br from-accent to-accent/80" 
                                : "bg-secondary"
                            )}>
                              <FileText className={cn(
                                "h-7 w-7",
                                activityCount === option.id ? "text-primary" : "text-muted-foreground"
                              )} />
                            </div>
                            <h4 className="font-bold text-primary text-lg">{option.label}</h4>
                            <p className="text-accent font-bold text-xl mt-2">
                              BHD {option.price}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Registration Type - Enhanced */}
                  {step === 3 && (
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">
                        Registration Type
                      </h3>
                      <p className="text-lg text-muted-foreground mb-10">
                        What type of CR service do you need?
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {registrationTypes.map((type) => (
                          <motion.div
                            key={type.id}
                            whileHover={{ y: -6, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setRegistrationType(type.id)}
                            className={cn(
                              "p-8 rounded-2xl border-2 cursor-pointer transition-all text-center",
                              registrationType === type.id
                                ? "border-accent bg-accent/5 shadow-xl shadow-accent/20"
                                : "border-border hover:border-accent/50 hover:shadow-lg"
                            )}
                          >
                            <div className={cn(
                              "w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center transition-all",
                              registrationType === type.id 
                                ? "bg-gradient-to-br from-accent to-accent/80" 
                                : "bg-secondary"
                            )}>
                              {type.id === "new" && <Building2 className={cn(
                                "h-7 w-7",
                                registrationType === type.id ? "text-primary" : "text-muted-foreground"
                              )} />}
                              {type.id === "amendment" && <FileText className={cn(
                                "h-7 w-7",
                                registrationType === type.id ? "text-primary" : "text-muted-foreground"
                              )} />}
                              {type.id === "renewal" && <RefreshCw className={cn(
                                "h-7 w-7",
                                registrationType === type.id ? "text-primary" : "text-muted-foreground"
                              )} />}
                            </div>
                            <h4 className="font-bold text-primary text-xl mb-1">{type.name}</h4>
                            <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                            <p className="text-accent font-bold text-xl">BHD {type.price}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 4: Additional Services - Enhanced */}
                  {step === 4 && (
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">
                        Additional Services
                      </h3>
                      <p className="text-lg text-muted-foreground mb-10">
                        Select any additional services you need (optional)
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {additionalServices.map((service) => (
                          <motion.div
                            key={service.id}
                            whileHover={{ y: -4 }}
                            onClick={() => handleServiceToggle(service.id)}
                            className={cn(
                              "p-6 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-5",
                              selectedServices.includes(service.id)
                                ? "border-accent bg-accent/5 shadow-lg"
                                : "border-border hover:border-accent/50 hover:shadow-md"
                            )}
                          >
                            <div className={cn(
                              "w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all",
                              selectedServices.includes(service.id)
                                ? "bg-accent border-accent"
                                : "border-border"
                            )}>
                              {selectedServices.includes(service.id) && (
                                <Check className="w-4 h-4 text-primary" />
                              )}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-primary text-lg">{service.name}</h4>
                            </div>
                            <span className="text-accent font-bold text-lg">+BHD {service.price}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : (
                /* Results & Lead Capture - Enhanced */
                <motion.div
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.3 }}
                >
                  {!isSubmitted ? (
                    <div className="grid md:grid-cols-2 gap-12">
                      {/* Cost Breakdown - Enhanced */}
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                            <Sparkles className="h-5 w-5 text-accent" />
                          </div>
                          Your Estimate
                        </h3>
                        
                        <div className="space-y-4 mb-8">
                          <div className="flex justify-between py-4 border-b-2 border-border">
                            <span className="text-muted-foreground font-medium">Entity Type ({entityType})</span>
                            <span className="font-bold text-xl text-primary">
                              BHD {entityTypes.find(e => e.id === entityType)?.govFee}
                            </span>
                          </div>
                          
                          <div className="flex justify-between py-4 border-b-2 border-border">
                            <span className="text-muted-foreground font-medium">Chamber of Commerce</span>
                            <span className="font-bold text-xl text-primary">BHD 50</span>
                          </div>
                          
                          <div className="flex justify-between py-4 border-b-2 border-border">
                            <span className="text-muted-foreground font-medium">Trade License ({activityCount} activities)</span>
                            <span className="font-bold text-xl text-primary">
                              BHD {activityOptions.find(a => a.id === activityCount)?.price}
                            </span>
                          </div>
                          
                          <div className="flex justify-between py-4 border-b-2 border-border">
                            <span className="text-muted-foreground font-medium">
                              {registrationTypes.find(r => r.id === registrationType)?.name}
                            </span>
                            <span className="font-bold text-xl text-primary">
                              BHD {registrationTypes.find(r => r.id === registrationType)?.price}
                            </span>
                          </div>
                          
                          {selectedServices.map(serviceId => {
                            const service = additionalServices.find(s => s.id === serviceId);
                            return service ? (
                              <div key={serviceId} className="flex justify-between py-4 border-b-2 border-border">
                                <span className="text-muted-foreground font-medium">{service.name}</span>
                                <span className="font-bold text-xl text-primary">BHD {service.price}</span>
                              </div>
                            ) : null;
                          })}
                        </div>
                        
                        <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 border-2 border-accent/20">
                          <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-primary">Estimated Total</span>
                            <span className="text-4xl font-bold text-accent">
                              BHD {calculateTotal().toLocaleString()}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-3">
                            Government fees included. Final quote based on specific requirements.
                          </p>
                        </div>
                      </div>
                      
                      {/* Lead Capture Form - Enhanced */}
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Send className="h-5 w-5 text-primary" />
                          </div>
                          Get Your Detailed Quote
                        </h3>
                        <p className="text-lg text-muted-foreground mb-8">
                          Enter your details and we'll send you a comprehensive proposal.
                        </p>
                        
                        <div className="space-y-5">
                          <div>
                            <Label htmlFor="name" className="text-primary font-semibold">Full Name *</Label>
                            <Input
                              id="name"
                              value={leadForm.name}
                              onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                              placeholder="John Smith"
                              className={cn(
                                "mt-2 h-12 text-lg border-2",
                                formErrors.name ? "border-destructive" : "border-border focus:border-accent"
                              )}
                            />
                            {formErrors.name && (
                              <p className="text-sm text-destructive mt-1">{formErrors.name}</p>
                            )}
                          </div>
                          
                          <div>
                            <Label htmlFor="email" className="text-primary font-semibold">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={leadForm.email}
                              onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                              placeholder="john@company.com"
                              className={cn(
                                "mt-2 h-12 text-lg border-2",
                                formErrors.email ? "border-destructive" : "border-border focus:border-accent"
                              )}
                            />
                            {formErrors.email && (
                              <p className="text-sm text-destructive mt-1">{formErrors.email}</p>
                            )}
                          </div>
                          
                          <div>
                            <Label htmlFor="phone" className="text-primary font-semibold">Phone (Optional)</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={leadForm.phone}
                              onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                              placeholder="+973 1700 0000"
                              className="mt-2 h-12 text-lg border-2 border-border focus:border-accent"
                            />
                          </div>
                          
                          <Button
                            onClick={handleLeadSubmit}
                            className="w-full bg-accent hover:bg-accent/90 text-primary h-14 text-lg font-bold mt-4 shadow-lg hover:shadow-xl transition-all group"
                          >
                            Get Detailed Quote
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                          
                          <button
                            onClick={handleReset}
                            className="w-full text-center text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mt-2"
                          >
                            Start Over
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Success State - Enhanced */
                    <div className="text-center py-16">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        className="w-24 h-24 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg"
                      >
                        <Check className="h-12 w-12 text-green-600" />
                      </motion.div>
                      <h3 className="text-3xl font-bold text-primary mb-4">
                        Quote Request Submitted!
                      </h3>
                      <p className="text-xl text-muted-foreground mb-10 max-w-md mx-auto">
                        Thank you for your interest. Our team will review your requirements 
                        and contact you within 24 hours with a detailed proposal.
                      </p>
                      <Button
                        onClick={handleReset}
                        variant="outline"
                        className="border-2 border-primary text-primary hover:bg-primary hover:text-white h-12 px-8 font-bold"
                      >
                        Calculate Another Quote
                      </Button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons - Enhanced */}
            {!showResult && (
              <div className="flex justify-between mt-12 pt-8 border-t-2 border-border">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={step === 1}
                  className="border-2 border-border text-muted-foreground hover:text-primary hover:border-primary h-12 px-6 font-semibold"
                >
                  <ChevronLeft className="mr-2 h-5 w-5" />
                  Back
                </Button>
                
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="bg-primary hover:bg-primary/90 text-white h-12 px-8 font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  {step === totalSteps ? "Calculate" : "Continue"}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
