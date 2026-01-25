import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al-Rashid",
    company: "TechVentures MENA",
    role: "Founder & CEO",
    content: "Keylink Corp made our company formation process incredibly smooth. Within a week, we had our CR and were ready to operate. Their team handled everything professionally and kept us informed at every step.",
    rating: 5,
    image: testimonial1,
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    company: "Global Trade Solutions",
    role: "Managing Director",
    content: "As a foreign investor, I was concerned about the complexities of setting up in Bahrain. Keylink Corp's expertise and guidance made it seamless. Highly recommend their services!",
    rating: 5,
    image: testimonial2,
  },
  {
    id: 3,
    name: "James Wilson",
    company: "Al-Waha Consulting",
    role: "Business Owner",
    content: "The PRO services from Keylink Corp saved us countless hours. Their team handles all our government documentation efficiently, allowing us to focus on growing our business.",
    rating: 5,
    image: testimonial3,
  },
];

const trustBadges = [
  "Bahrain Chamber of Commerce",
  "MOIC Certified",
  "LMRA Registered",
  "Tamkeen Partner",
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Pattern */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(#e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
        }}
      />
      
      <div className="container relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-semibold mb-6">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
            What Our Clients Say About Us
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Don't just take our word for it. Here's what business owners 
            have to say about working with Keylink Corp.
          </p>
        </div>

        {/* Testimonials Carousel - Show 3 on desktop, 1 on mobile */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg shadow-primary/5 border border-border"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-primary leading-relaxed mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-gold">{testimonial.role}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="bg-white rounded-2xl p-8 shadow-lg shadow-primary/5 border border-border mb-8">
            {/* Quote icon */}
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-6">
              <Quote className="h-5 w-5 text-gold" />
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-lg text-primary leading-relaxed mb-8">
              "{testimonials[currentIndex].content}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <div className="font-bold text-primary">{testimonials[currentIndex].name}</div>
                <div className="text-sm text-gold">{testimonials[currentIndex].role}</div>
                <div className="text-sm text-muted-foreground">{testimonials[currentIndex].company}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full w-12 h-12 border-2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-gold w-8" 
                      : "bg-border hover:bg-muted-foreground/50 w-3"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full w-12 h-12 border-2"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">
            Officially Registered & Certified
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {trustBadges.map((badge, index) => (
              <div 
                key={index} 
                className="px-6 py-3 bg-white rounded-xl border border-border text-primary font-medium text-sm shadow-sm"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
