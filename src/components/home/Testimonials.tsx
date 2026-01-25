import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al-Rashid",
    company: "TechVentures MENA",
    role: "Founder & CEO",
    content: "Keylink Corp made our company formation process incredibly smooth. Within a week, we had our CR and were ready to operate. Their team handled everything professionally and kept us informed at every step.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    company: "Global Trade Solutions",
    role: "Managing Director",
    content: "As a foreign investor, I was concerned about the complexities of setting up in Bahrain. Keylink Corp's expertise and guidance made it seamless. Highly recommend their services!",
    rating: 5,
  },
  {
    id: 3,
    name: "Mohammed Hassan",
    company: "Al-Waha Consulting",
    role: "Business Owner",
    content: "The PRO services from Keylink Corp saved us countless hours. Their team handles all our government documentation efficiently, allowing us to focus on growing our business.",
    rating: 5,
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

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-spacing bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-secondary to-transparent" />
      
      <div className="container relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge">Client Testimonials</span>
          <h2 className="mb-6">What Our Clients Say About Us</h2>
          <p className="lead">
            Don't just take our word for it. Here's what business owners 
            have to say about working with Keylink Corp.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="card-elevated p-10 md:p-12 text-center relative">
            {/* Quote icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                <Quote className="h-6 w-6 text-primary" />
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center gap-1 mb-6 pt-4">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-xl md:text-2xl text-primary font-medium leading-relaxed mb-8 max-w-3xl mx-auto">
              "{currentTestimonial.content}"
            </blockquote>

            {/* Author */}
            <div className="mb-8">
              <div className="w-16 h-16 rounded-full bg-gold/20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-gold">
                  {currentTestimonial.name.charAt(0)}
                </span>
              </div>
              <div className="text-lg font-bold text-primary">{currentTestimonial.name}</div>
              <div className="text-gold font-medium">{currentTestimonial.role}</div>
              <div className="text-muted-foreground text-sm">{currentTestimonial.company}</div>
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
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "bg-gold w-8" 
                        : "bg-border hover:bg-muted-foreground/50"
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
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">
            Officially Registered & Certified
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {trustBadges.map((badge, index) => (
              <div 
                key={index} 
                className="px-6 py-3 bg-secondary rounded-lg text-primary font-medium text-sm"
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
