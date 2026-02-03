import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { 
  Search, 
  ShoppingCart, 
  Briefcase, 
  Code, 
  Factory, 
  Utensils, 
  Heart, 
  Landmark, 
  GraduationCap, 
  Plane,
  ShoppingBag,
  AlertCircle,
  Check,
  ExternalLink,
  Filter
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

type ActivityCategory = "all" | "commercial" | "professional" | "regulated";

interface BusinessActivity {
  name: string;
  category: "commercial" | "professional" | "regulated";
  icon: typeof ShoppingCart;
  description: string;
  approvals?: string[];
}

const businessActivities: BusinessActivity[] = [
  // Commercial Activities
  { name: "General Trading", category: "commercial", icon: ShoppingCart, description: "Import and export of goods, wholesale and retail trade" },
  { name: "Import/Export", category: "commercial", icon: ShoppingBag, description: "International trade and customs clearance services" },
  { name: "E-commerce", category: "commercial", icon: Code, description: "Online retail, digital marketplaces, and electronic commerce" },
  { name: "Food & Beverage Trading", category: "commercial", icon: Utensils, description: "Food import/export, distribution, and retail" },
  { name: "Construction Materials", category: "commercial", icon: Factory, description: "Building materials trading and supply" },
  { name: "Electronics Trading", category: "commercial", icon: ShoppingCart, description: "Consumer electronics, IT equipment sales" },
  { name: "Automobile Trading", category: "commercial", icon: ShoppingCart, description: "Vehicle sales, parts, and accessories" },
  
  // Professional Services
  { name: "Management Consulting", category: "professional", icon: Briefcase, description: "Business strategy, operations, and management advisory" },
  { name: "IT Services", category: "professional", icon: Code, description: "Software development, IT consulting, and digital solutions" },
  { name: "Marketing & Advertising", category: "professional", icon: Briefcase, description: "Digital marketing, PR, and advertising agencies" },
  { name: "HR Consulting", category: "professional", icon: Briefcase, description: "Recruitment, talent management, and HR solutions" },
  { name: "Training & Education", category: "professional", icon: GraduationCap, description: "Corporate training, educational services, and tutoring" },
  { name: "Translation Services", category: "professional", icon: Briefcase, description: "Language translation and interpretation" },
  { name: "Design Services", category: "professional", icon: Briefcase, description: "Graphic design, interior design, and creative services" },
  
  // Regulated Activities
  { name: "Healthcare Services", category: "regulated", icon: Heart, description: "Medical clinics, healthcare facilities", approvals: ["NHRA Approval", "Ministry of Health License"] },
  { name: "Financial Services", category: "regulated", icon: Landmark, description: "Banking, investment, insurance services", approvals: ["CBB License", "Capital Requirements"] },
  { name: "Pharmaceuticals", category: "regulated", icon: Heart, description: "Drug import, distribution, pharmacies", approvals: ["NHRA License", "Import Permit"] },
  { name: "Food Manufacturing", category: "regulated", icon: Utensils, description: "Food production and processing", approvals: ["Municipality Approval", "Health Certificate"] },
  { name: "Travel & Tourism", category: "regulated", icon: Plane, description: "Travel agencies, tour operators", approvals: ["Tourism Authority License"] },
  { name: "Education Institute", category: "regulated", icon: GraduationCap, description: "Schools, universities, training centers", approvals: ["Ministry of Education Approval"] },
  { name: "Real Estate Brokerage", category: "regulated", icon: Landmark, description: "Property sales and rentals", approvals: ["RERA License", "Bahraini Partner Required"] },
  { name: "Legal Services", category: "regulated", icon: Briefcase, description: "Law firms, legal advisory", approvals: ["Bar Association", "Bahraini Lawyer Required"] },
];

const categoryFilters: { key: ActivityCategory; label: string; count: number }[] = [
  { key: "all", label: "All Activities", count: businessActivities.length },
  { key: "commercial", label: "Commercial", count: businessActivities.filter(a => a.category === "commercial").length },
  { key: "professional", label: "Professional", count: businessActivities.filter(a => a.category === "professional").length },
  { key: "regulated", label: "Regulated", count: businessActivities.filter(a => a.category === "regulated").length },
];

export function BusinessActivitiesDirectory() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory>("all");

  const filteredActivities = businessActivities.filter(activity => {
    const matchesSearch = activity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          activity.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || activity.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "commercial": return "bg-green-100 text-green-700 border-green-200";
      case "professional": return "bg-blue-100 text-blue-700 border-blue-200";
      case "regulated": return "bg-orange-100 text-orange-700 border-orange-200";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Background Pattern - Grid Lines */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />

      <div className="container relative">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.p 
            variants={staggerItem}
            className="text-sm font-medium text-accent tracking-wide uppercase mb-4"
          >
            Business Activities
          </motion.p>
          <motion.h2 
            variants={staggerItem}
            className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-primary mb-6 tracking-tight leading-[1.15]"
          >
            Permitted Business Activities in Bahrain
          </motion.h2>
          <motion.p 
            variants={staggerItem}
            className="text-lg text-muted-foreground leading-[1.8]"
          >
            Explore business activities available for company registration. Most activities allow 100% 
            foreign ownership. Regulated activities require additional approvals.
          </motion.p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-10"
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search business activities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-base rounded-xl border-border focus:border-accent"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categoryFilters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedCategory(filter.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  selectedCategory === filter.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <Filter className="w-4 h-4" />
                {filter.label}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  selectedCategory === filter.key ? "bg-white/20" : "bg-background"
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Activities Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
        >
          {filteredActivities.map((activity, index) => (
            <motion.div
              key={activity.name}
              variants={staggerItem}
              className="bg-white rounded-xl p-5 border border-border hover:border-accent/40 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <activity.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-base font-semibold text-primary leading-tight">{activity.name}</h3>
                    <Badge className={`text-[10px] px-2 py-0.5 flex-shrink-0 ${getCategoryColor(activity.category)}`}>
                      {activity.category === "regulated" ? (
                        <AlertCircle className="w-3 h-3 mr-1" />
                      ) : (
                        <Check className="w-3 h-3 mr-1" />
                      )}
                      {activity.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{activity.description}</p>
                  
                  {activity.approvals && (
                    <div className="flex flex-wrap gap-1.5">
                      {activity.approvals.map((approval) => (
                        <span 
                          key={approval} 
                          className="text-[10px] px-2 py-1 bg-orange-50 text-orange-600 rounded-md"
                        >
                          {approval}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredActivities.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No activities found matching your search.</p>
          </motion.div>
        )}

        {/* SIJILAT Link & Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-4xl mx-auto mt-12"
        >
          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 p-4 bg-muted/30 rounded-xl">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-sm text-muted-foreground">Commercial - Open for all</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-sm text-muted-foreground">Professional - Service-based</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <span className="text-sm text-muted-foreground">Regulated - Requires approvals</span>
            </div>
          </div>

          {/* SIJILAT CTA */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-3">
              For the complete official list of business activities, visit SIJILAT:
            </p>
            <a 
              href="https://www.sijilat.bh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
            >
              SIJILAT - Bahrain Business Registry
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
