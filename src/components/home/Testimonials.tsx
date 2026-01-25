import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al-Rashid",
    company: "TechStart Bahrain",
    role: "Founder & CEO",
    content: "Keylink Corp made our company formation process incredibly smooth. Their team handled everything from CR registration to visa processing. We were operational within 2 weeks!",
    rating: 5,
    avatar: "A",
  },
  {
    id: 2,
    name: "Sarah Thompson",
    company: "Global Trade Solutions",
    role: "Managing Director",
    content: "As a foreign investor, I was worried about the complexities of setting up a branch office in Bahrain. Keylink's expertise and local knowledge made all the difference. Highly recommended!",
    rating: 5,
    avatar: "S",
  },
  {
    id: 3,
    name: "Mohammed Hassan",
    company: "Gulf Consulting Group",
    role: "Partner",
    content: "We've been using Keylink's PRO services for 3 years now. Their document clearance and attestation services are fast and reliable. They're an essential partner for our operations.",
    rating: 5,
    avatar: "M",
  },
  {
    id: 4,
    name: "Emma Williams",
    company: "Digital Innovations Ltd",
    role: "Country Manager",
    content: "The virtual office service is perfect for our needs. Professional address, mail handling, and meeting rooms when we need them. Great value for money!",
    rating: 5,
    avatar: "E",
  },
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
    <section className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Trusted by Businesses Across Industries
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our clients have to say about their experience working with Keylink Corp.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-secondary rounded-2xl p-8 md:p-12 relative">
            <Quote className="absolute top-8 left-8 h-12 w-12 text-gold/20" />
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl md:text-2xl text-primary font-medium mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xl font-bold">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <div className="font-semibold text-primary">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
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
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex ? "bg-gold" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by leading businesses and certified partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {["Chamber of Commerce", "MOICT", "LMRA", "Sijilat", "Tamkeen"].map((partner) => (
              <div key={partner} className="text-lg font-semibold text-primary/50">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
