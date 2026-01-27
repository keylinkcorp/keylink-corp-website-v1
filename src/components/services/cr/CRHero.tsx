import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Briefcase, ArrowRight, Phone, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import crHeroImage from "@/assets/cr-hero-professional.jpg";

const heroFeatures = [
  { icon: CheckCircle2, text: "100% Success Rate" },
  { icon: Award, text: "MOIC Expert" },
  { icon: Briefcase, text: "Full-Service" }
];

const heroHeadlineContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const heroHeadlineLine: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const floatingBadge: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.6 } }
};

export function CRHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section 
      ref={ref}
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 z-20 h-full w-full bg-[radial-gradient(100%_50%_at_50%_0%,rgba(199,167,99,0.15)_0,rgba(199,167,99,0)_50%)]" />
        <div className="absolute inset-0 z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side - 60% */}
          <motion.div
            variants={heroHeadlineContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div variants={heroHeadlineLine}>
              <span className="section-badge mb-6">Commercial Registration Services</span>
            </motion.div>
            
            {/* Headline */}
            <motion.h1 
              variants={heroHeadlineLine}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-6"
            >
              Commercial Registration in Bahrain{" "}
              <span className="text-accent">Made Simple</span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              variants={heroHeadlineLine}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
            >
              New Registration. Amendments. Renewals. Your Complete CR Solution.
            </motion.p>
            
            {/* Feature Pills */}
            <motion.div 
              variants={heroHeadlineLine}
              className="flex flex-wrap gap-3 mb-8"
            >
              {heroFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-border shadow-sm"
                >
                  <feature.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>
            
            {/* CTAs */}
            <motion.div 
              variants={heroHeadlineLine}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button asChild size="lg" className="group">
                <a href="/contact">
                  Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+97317000000">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us Now
                </a>
              </Button>
            </motion.div>
            
            {/* Social Proof */}
            <motion.div 
              variants={heroHeadlineLine}
              className="flex flex-col sm:flex-row gap-6 sm:gap-8"
            >
              {/* Google Rating */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={cn(
                        "w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold",
                        i === 1 && "bg-primary text-white",
                        i === 2 && "bg-accent text-primary",
                        i === 3 && "bg-secondary text-primary"
                      )}
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">4.9 on Google</span>
                </div>
              </div>
              
              {/* Divider */}
              <div className="hidden sm:block w-px h-10 bg-border" />
              
              {/* Trustpilot Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">4.8 on Trustpilot</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image Side - 40% */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative order-1 lg:order-2"
          >
            {/* Main Image */}
            <motion.div
              variants={imageReveal}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={crHeroImage}
                alt="Professional business consultant shaking hands with client"
                className="w-full h-auto object-cover aspect-square"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </motion.div>
            
            {/* Floating Badge - Success Rate */}
            <motion.div
              variants={floatingBadge}
              className="absolute -right-4 top-8 lg:top-12 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-xs text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </motion.div>
            
            {/* Floating Badge - CRs Processed */}
            <motion.div
              variants={floatingBadge}
              className="absolute -left-4 bottom-8 lg:bottom-12 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">5,000+</div>
                  <div className="text-xs text-muted-foreground">CRs Processed</div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Blur */}
            <div className="absolute -z-10 -bottom-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
