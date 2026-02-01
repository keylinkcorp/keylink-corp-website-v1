import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import heroImg from "@/assets/coworking/hero-coworking.jpg";
import hotDeskImg from "@/assets/coworking/hot-desk.jpg";
import privateOfficeImg from "@/assets/coworking/private-office.jpg";
import meetingRoomImg from "@/assets/coworking/meeting-room.jpg";
import loungeImg from "@/assets/coworking/lounge-kitchen.jpg";
import receptionImg from "@/assets/coworking/reception.jpg";

const filters = [
  { id: "all", label: "All" },
  { id: "workspaces", label: "Workspaces" },
  { id: "meeting", label: "Meeting Rooms" },
  { id: "facilities", label: "Facilities" },
];

const galleryImages = [
  { id: 1, src: heroImg, alt: "Open coworking area with natural light", category: "workspaces", title: "Open Workspace" },
  { id: 2, src: meetingRoomImg, alt: "Executive meeting room with presentation equipment", category: "meeting", title: "Executive Boardroom" },
  { id: 3, src: hotDeskImg, alt: "Hot desk area for flexible working", category: "workspaces", title: "Hot Desk Area" },
  { id: 4, src: privateOfficeImg, alt: "Private office suite for teams", category: "workspaces", title: "Private Office" },
  { id: 5, src: loungeImg, alt: "Member lounge and kitchen area", category: "facilities", title: "Member Lounge" },
  { id: 6, src: receptionImg, alt: "Professional reception area", category: "facilities", title: "Reception" },
];

export function CoworkingGallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredImages = activeFilter === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-secondary/30 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
          opacity: 0.5,
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="section-badge">Gallery</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our <span className="text-accent">Spaces</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a virtual tour of our premium coworking facilities in Bahrain
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-background text-muted-foreground hover:bg-secondary border border-border"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                <p className="text-white/70 text-sm">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
