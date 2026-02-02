import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Star, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    id: "day-pass",
    name: "Day Pass",
    description: "Perfect for occasional workspace needs",
    price: "15",
    period: "day",
    popular: false,
    features: [
      "Access to hot desk area",
      "High-speed WiFi",
      "Free coffee & tea",
      "Meeting room credits (1 hour)",
      "Printing (10 pages)",
      "Locker access",
    ],
    cta: "Get Day Pass",
  },
  {
    id: "flexible",
    name: "Flexible Membership",
    description: "Ideal for freelancers and remote workers",
    price: "99",
    period: "month",
    popular: true,
    features: [
      "10 days per month access",
      "Hot desk seating",
      "High-speed WiFi",
      "Free coffee & tea",
      "Meeting room credits (4 hours)",
      "Business address",
      "Mail handling",
      "Printing (50 pages)",
      "Networking events access",
    ],
    cta: "Join Now",
  },
  {
    id: "dedicated",
    name: "Dedicated Desk",
    description: "Your permanent workspace with storage",
    price: "199",
    period: "month",
    popular: false,
    features: [
      "Unlimited access (24/7)",
      "Your own dedicated desk",
      "Personal lockable storage",
      "High-speed WiFi",
      "Free coffee & tea",
      "Meeting room credits (8 hours)",
      "Business address",
      "Mail handling",
      "Printing (100 pages)",
      "All networking events",
      "Phone booth access",
    ],
    cta: "Reserve Desk",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

export function CoworkingPricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      {/* Floating Orbs */}
      <div className="absolute top-20 left-[10%] w-64 h-64 floating-orb floating-orb-gold animate-float opacity-25" />
      <div className="absolute bottom-32 right-[15%] w-48 h-48 floating-orb floating-orb-navy animate-float-slow opacity-30" />

      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-badge">Pricing Plans</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="text-accent">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a plan that fits your needs. All memberships include access to our 
            premium amenities with no hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={staggerItem}
              whileHover={{ y: plan.popular ? -8 : -5 }}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? "bg-[hsl(var(--navy))] shadow-2xl scale-105 z-10"
                  : "bg-background border border-border hover:border-accent/30 hover:shadow-xl card-glow"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[hsl(var(--gold))] via-[hsl(var(--gold-light))] to-[hsl(var(--gold))] text-[hsl(var(--navy))] px-4 py-2 text-sm font-bold flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                  <Sparkles className="w-4 h-4" />
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-14' : ''}`}>
                {/* Plan Name & Description */}
                <div className="mb-6">
                  <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-primary'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.popular ? 'text-white/70' : 'text-muted-foreground'}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-sm ${plan.popular ? 'text-white/60' : 'text-muted-foreground'}`}>BHD</span>
                    <span className={`text-5xl font-bold ${plan.popular ? 'text-[hsl(var(--gold))]' : 'text-primary'}`}>
                      {plan.price}
                    </span>
                    <span className={plan.popular ? 'text-white/60' : 'text-muted-foreground'}>/{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-[hsl(var(--gold)/0.2)]' : 'bg-accent/10'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-[hsl(var(--gold))]' : 'text-accent'}`} />
                      </div>
                      <span className={`text-sm ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-dark))] text-[hsl(var(--navy))] shadow-lg shadow-[hsl(var(--gold)/0.3)]"
                      : "bg-primary hover:bg-primary/90"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Shimmer for popular */}
              {plan.popular && <div className="shimmer" />}
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-muted-foreground mt-10"
        >
          Need a custom plan for your team?{" "}
          <a href="#contact" className="text-accent hover:underline font-medium">
            Contact us for enterprise pricing
          </a>
        </motion.p>
      </div>
    </section>
  );
}
