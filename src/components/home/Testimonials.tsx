import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al-Rashid",
    company: "TechVentures MENA",
    role: "Founder & CEO",
    content: "Keylink Corp made our company formation process incredibly smooth. Within a week, we had our CR and were ready to operate.",
    rating: 5,
    image: testimonial1,
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    company: "Global Trade Solutions",
    role: "Managing Director",
    content: "As a foreign investor, I was concerned about complexities. Keylink Corp's expertise made it seamless. Highly recommend!",
    rating: 5,
    image: testimonial2,
  },
  {
    id: 3,
    name: "James Wilson",
    company: "Al-Waha Consulting",
    role: "Business Owner",
    content: "The PRO services saved us countless hours. Their team handles all our government documentation efficiently.",
    rating: 5,
    image: testimonial3,
  },
];

export function Testimonials() {
  return (
    <section className="py-28 lg:py-36 bg-secondary/30 relative overflow-hidden">
      {/* Subtle pattern */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 60%, transparent 100%)",
        }}
      />
      
      <div className="container relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-gold tracking-wide uppercase mb-4">
            Client Testimonials
          </p>
          <h2 className="text-[44px] md:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.8]">
            Don't just take our word for it. Here's what business owners say about working with us.
          </p>
        </div>

        {/* Testimonials Grid - 3 cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-sm border border-border/50"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-primary leading-[1.8] mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges - minimal */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Officially registered with
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["Bahrain Chamber", "MOIC", "LMRA", "Tamkeen"].map((badge, index) => (
              <span 
                key={index} 
                className="text-sm font-medium text-primary"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
