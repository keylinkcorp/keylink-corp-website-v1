import { Clock, ShieldCheck, Users, HeadphonesIcon, Award, Zap } from "lucide-react";
import teamImage from "@/assets/team-office.jpg";

const benefits = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Company registration in as little as 3-7 business days.",
  },
  {
    icon: ShieldCheck,
    title: "100% Compliant",
    description: "All documentation meets Bahrain's legal requirements.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Personal account manager for your business journey.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our team is always available to answer questions.",
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "Trusted by over 1,000 businesses worldwide.",
  },
  {
    icon: Zap,
    title: "One-Stop Solution",
    description: "From formation to ongoing compliance, all under one roof.",
  },
];

const stats = [
  { value: "10+", label: "Years" },
  { value: "1,000+", label: "Companies" },
  { value: "98%", label: "Satisfaction" },
  { value: "40+", label: "Countries" },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
      
      <div className="container relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold mb-6">
            Why Keylink Corp
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
            The Smart Choice for Business Setup
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We combine local expertise with international standards to deliver 
            exceptional service and results.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-secondary rounded-2xl">
              <div className="text-4xl font-extrabold text-gold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <img 
                src={teamImage} 
                alt="Keylink Corp Team" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary rounded-2xl -z-10" />
          </div>

          {/* Right - Benefits grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group p-6 rounded-2xl bg-secondary hover:bg-white hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <benefit.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
