import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Keylink made our company formation process incredibly smooth. Their team handled everything from CR registration to visa processing. Highly recommended!",
    author: "Sarah Mitchell",
    company: "TechStart Bahrain",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
    featured: true,
  },
  {
    quote: "Professional, efficient, and always available. The Keylink team went above and beyond to help us meet tight deadlines.",
    author: "Ahmed Hassan",
    company: "Gulf Ventures",
    role: "Managing Director",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    quote: "Their PRO services saved us countless hours. They know the Bahrain regulatory system inside and out.",
    author: "Maria Santos",
    company: "Santos Trading Co.",
    role: "Operations Manager",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function AboutTestimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const featured = testimonials.find((t) => t.featured);
  const others = testimonials.filter((t) => !t.featured);

  return (
    <section ref={ref} className="section-spacing relative overflow-hidden">
      <div className="container px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="section-badge">Client Success Stories</Badge>
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from the businesses we've helped succeed.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="relative rounded-3xl overflow-hidden bg-primary p-8 md:p-12">
              <div className="absolute inset-0 pattern-dots opacity-10" />
              <div className="absolute top-8 right-8">
                <Quote className="w-16 h-16 text-accent/20" />
              </div>

              <div className="relative z-10 grid md:grid-cols-[200px_1fr] gap-8 items-center">
                <div className="mx-auto md:mx-0">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-accent/20">
                    <img
                      src={featured.image}
                      alt={featured.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: featured.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
                    "{featured.quote}"
                  </blockquote>
                  <div>
                    <p className="text-white font-semibold text-lg">{featured.author}</p>
                    <p className="text-accent">{featured.role}</p>
                    <p className="text-white/60">{featured.company}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {others.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={itemVariants}
              className="card-elevated p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
