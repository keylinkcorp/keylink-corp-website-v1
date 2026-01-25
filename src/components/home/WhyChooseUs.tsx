import { 
  Clock, 
  ShieldCheck, 
  Users, 
  HeadphonesIcon,
  Award,
  Zap
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Get your business registered in as little as 3 business days with our streamlined process.",
  },
  {
    icon: ShieldCheck,
    title: "100% Compliance",
    description: "We ensure full compliance with Bahrain's business laws and regulations.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Work with experienced consultants who understand the local business landscape.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Get personalized assistance from start to finish with a dedicated account manager.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Over 1,000+ successful company formations with a 98% success rate.",
  },
  {
    icon: Zap,
    title: "All-in-One Solution",
    description: "From company formation to visa processing, we handle everything under one roof.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
              Why Choose Keylink Corp
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Your Trusted Partner for Business Success in Bahrain
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              With over a decade of experience, we've helped thousands of entrepreneurs 
              and businesses establish their presence in Bahrain. Our comprehensive 
              approach ensures a smooth journey from idea to operation.
            </p>

            {/* Stats inline */}
            <div className="grid grid-cols-3 gap-4 p-6 rounded-2xl bg-primary text-primary-foreground">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold">10+</div>
                <div className="text-sm text-primary-foreground/70">Years</div>
              </div>
              <div className="text-center border-x border-navy-light">
                <div className="text-3xl md:text-4xl font-bold text-gold">1000+</div>
                <div className="text-sm text-primary-foreground/70">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold">98%</div>
                <div className="text-sm text-primary-foreground/70">Success</div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="p-6 rounded-xl bg-background shadow-sm hover:shadow-md transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
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
