import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowLeft, Users, Building2, Clock, Laptop, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const workspaceOptions = [
  { id: "hot-desk", label: "Hot Desk", icon: Laptop, description: "Flexible daily access" },
  { id: "dedicated", label: "Dedicated Desk", icon: Users, description: "Your permanent spot" },
  { id: "private-office", label: "Private Office", icon: Building2, description: "Team workspace" },
  { id: "meeting-room", label: "Meeting Room", icon: Clock, description: "Hourly booking" },
];

export function CoworkingContact() {
  const [step, setStep] = useState(1);
  const [selectedWorkspace, setSelectedWorkspace] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ selectedWorkspace, ...formData });
  };

  return (
    <section ref={ref} id="contact" className="relative py-20 md:py-28 bg-secondary/30 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
          opacity: 0.5,
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book Your <span className="text-accent">Free Tour</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience our coworking space firsthand. Fill out the form and our team will 
              arrange a personalized tour at your convenience.
            </p>

            {/* Step Indicator */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`flex items-center gap-2 ${step >= 1 ? "text-accent" : "text-muted-foreground"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 1 ? "bg-accent text-accent-foreground" : "bg-secondary"}`}>
                  {step > 1 ? <CheckCircle2 className="w-5 h-5" /> : "1"}
                </div>
                <span className="text-sm font-medium hidden sm:inline">Choose Workspace</span>
              </div>
              <div className="flex-1 h-px bg-border" />
              <div className={`flex items-center gap-2 ${step >= 2 ? "text-accent" : "text-muted-foreground"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 2 ? "bg-accent text-accent-foreground" : "bg-secondary"}`}>
                  2
                </div>
                <span className="text-sm font-medium hidden sm:inline">Your Details</span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Workspace Selection */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <p className="text-sm text-muted-foreground mb-4">
                    What type of workspace are you interested in?
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {workspaceOptions.map((option) => {
                      const Icon = option.icon;
                      return (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setSelectedWorkspace(option.id)}
                          className={`p-5 rounded-xl border text-left transition-all ${
                            selectedWorkspace === option.id
                              ? "border-accent bg-accent/5 shadow-md"
                              : "border-border bg-background hover:border-accent/50"
                          }`}
                        >
                          <Icon className={`w-6 h-6 mb-3 ${selectedWorkspace === option.id ? "text-accent" : "text-muted-foreground"}`} />
                          <h4 className="font-semibold text-primary mb-1">{option.label}</h4>
                          <p className="text-sm text-muted-foreground">{option.description}</p>
                        </button>
                      );
                    })}
                  </div>
                  <Button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!selectedWorkspace}
                    className="w-full mt-6"
                    size="lg"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              )}

              {/* Step 2: Contact Details */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Smith"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Phone Number *</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+973 1234 5678"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Company Name</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Message (Optional)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your workspace needs..."
                      rows={4}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                  </div>
                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="flex-1"
                      size="lg"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                    <Button type="submit" className="flex-1 bg-accent hover:bg-accent/90" size="lg">
                      Book Free Tour
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-white/70 mb-8">
              Prefer to reach out directly? Our team is available to answer your questions 
              and help you find the perfect workspace.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-white/70">+973 1700 0000</p>
                  <p className="text-white/70">+973 3300 0000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-white/70">coworking@keylinkcorp.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-white/70">
                    Diplomatic Area, Building 247<br />
                    Road 1705, Block 317<br />
                    Manama, Kingdom of Bahrain
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <h4 className="font-medium mb-4">Business Hours</h4>
              <div className="space-y-2 text-white/70">
                <p>Sunday - Thursday: 8:00 AM - 8:00 PM</p>
                <p>Friday - Saturday: 9:00 AM - 5:00 PM</p>
                <p className="text-accent">24/7 access for members</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
