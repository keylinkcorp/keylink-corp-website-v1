import { Clock, ShieldCheck, Users, HeadphonesIcon, Award, Zap } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Get your company registered in as little as 3-7 business days with our streamlined process.",
  },
  {
    icon: ShieldCheck,
    title: "100% Compliant",
    description: "We ensure all your business documentation meets Bahrain's legal and regulatory requirements.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "A personal account manager guides you through every step of your business journey.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our support team is always available to answer your questions and resolve issues quickly.",
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "Trusted by over 1,000 businesses, we bring unmatched expertise to every engagement.",
  },
  {
    icon: Zap,
    title: "One-Stop Solution",
    description: "From formation to ongoing compliance, we handle all your business needs under one roof.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-spacing bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pattern-grid opacity-30" />
      
      <div className="container relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge">Why Choose Keylink Corp</span>
          <h2 className="mb-6">The Smart Choice for Business Setup in Bahrain</h2>
          <p className="lead">
            We combine local expertise with international standards to deliver 
            exceptional service and results for our clients.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 card-elevated">
            <div className="text-4xl font-extrabold text-gold mb-2">10+</div>
            <div className="text-muted-foreground">Years in Business</div>
          </div>
          <div className="text-center p-6 card-elevated">
            <div className="text-4xl font-extrabold text-gold mb-2">1,000+</div>
            <div className="text-muted-foreground">Companies Formed</div>
          </div>
          <div className="text-center p-6 card-elevated">
            <div className="text-4xl font-extrabold text-gold mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 card-elevated">
            <div className="text-4xl font-extrabold text-gold mb-2">40+</div>
            <div className="text-muted-foreground">Countries Served</div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-secondary hover:bg-primary transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <benefit.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-primary group-hover:text-primary-foreground mb-3 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
