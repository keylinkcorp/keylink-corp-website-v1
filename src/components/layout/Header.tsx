import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight, Building2, FileText, Users, Briefcase, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// Mega menu structure - 4 main pillars
const megaMenuItems = [
  {
    title: "Launch Your Business",
    icon: Building2,
    columns: [
      {
        heading: "Company Types",
        links: [
          { title: "Company Formation", href: "/services/company-formation", description: "Full business setup in Bahrain" },
          { title: "Single Person Company", href: "/services/single-person-company", description: "SPC for solo entrepreneurs" },
          { title: "Branch Office", href: "/services/branch-office", description: "Foreign company branch setup" },
          { title: "WLL Company", href: "/services/wll-company", description: "Limited liability company" },
        ],
      },
      {
        heading: "Registration",
        links: [
          { title: "Commercial Registration", href: "/services/commercial-registration", description: "New CR registration" },
          { title: "CR Amendment", href: "/services/cr-amendment", description: "Modify existing registration" },
          { title: "Lease Contract", href: "/services/lease-contract-registration", description: "Business lease registration" },
        ],
      },
      {
        heading: "Licensing",
        links: [
          { title: "Business License", href: "/services/business-license", description: "Commercial license acquisition" },
          { title: "Memorandum of Association", href: "/services/moa", description: "Company legal documents" },
          { title: "Company Liquidation", href: "/services/company-liquidation", description: "Proper business closure" },
        ],
      },
    ],
    cta: {
      title: "Ready to start?",
      description: "Get your business registered in as little as 48 hours with our expert guidance.",
      buttonText: "Start Now",
      href: "/free-consultation",
    },
  },
  {
    title: "Government Services",
    icon: FileText,
    columns: [
      {
        heading: "PRO Services",
        links: [
          { title: "PRO Services", href: "/services/pro-services", description: "Government liaison services" },
          { title: "Document Clearance", href: "/services/document-clearance", description: "Fast document processing" },
          { title: "Chamber of Commerce", href: "/services/chamber-of-commerce", description: "Chamber registration" },
          { title: "Compliance & Regulatory", href: "/services/compliance", description: "Stay compliant" },
        ],
      },
      {
        heading: "Visa Services",
        links: [
          { title: "Work Visa", href: "/services/work-visa", description: "Employee work permits" },
          { title: "Golden Visa", href: "/services/golden-visa", description: "Long-term residency" },
          { title: "Family Visa", href: "/services/family-visa", description: "Dependent visas" },
          { title: "Visa Consultation", href: "/services/visa-consultation", description: "Expert visa advice" },
        ],
      },
      {
        heading: "Document Services",
        links: [
          { title: "Certificate Attestation", href: "/services/certificate-attestation", description: "Document legalization" },
          { title: "Local Sponsorship", href: "/services/local-sponsorship", description: "Bahraini sponsor services" },
        ],
      },
    ],
    cta: {
      title: "Need help navigating?",
      description: "Our PRO experts handle all government procedures so you can focus on your business.",
      buttonText: "Get PRO Support",
      href: "/services/pro-services",
    },
  },
  {
    title: "Grow Your Business",
    icon: Briefcase,
    columns: [
      {
        heading: "Consulting",
        links: [
          { title: "Business Consulting", href: "/services/business-consulting", description: "Strategic business advice" },
          { title: "Management Consulting", href: "/services/management-consulting", description: "Operational excellence" },
          { title: "Legal Consulting", href: "/services/legal-consulting", description: "Business legal support" },
        ],
      },
      {
        heading: "Financial Services",
        links: [
          { title: "Accounting Services", href: "/services/accounting-services", description: "Financial management" },
          { title: "Tax Services", href: "/services/tax-services", description: "Tax compliance & planning" },
          { title: "Bank Account Services", href: "/services/bank-account", description: "Corporate banking" },
        ],
      },
    ],
    cta: {
      title: "Scale with confidence",
      description: "Expert guidance to help your business thrive in Bahrain's competitive market.",
      buttonText: "Explore Services",
      href: "/services/business-consulting",
    },
  },
  {
    title: "Workspace",
    icon: Users,
    columns: [
      {
        heading: "Office Solutions",
        links: [
          { title: "Virtual Office", href: "/services/virtual-office", description: "Professional business address" },
          { title: "Co-working Space", href: "/services/coworking-space", description: "Flexible work environment" },
          { title: "Business Incubators", href: "/services/business-incubators", description: "Startup support programs" },
        ],
      },
    ],
    cta: {
      title: "Find your space",
      description: "From virtual addresses to fully-equipped offices. Flexible options for every business.",
      buttonText: "View Options",
      href: "/services/virtual-office",
    },
  },
];

// About dropdown with icons
const aboutDropdown = {
  title: "About",
  sections: [
    {
      links: [
        { title: "About Us", href: "/about", description: "Our story & mission", icon: "🏢" },
        { title: "Our Team", href: "/about/team", description: "Meet the experts", icon: "👥" },
        { title: "Why Choose Us", href: "/about/why-us", description: "What sets us apart", icon: "⭐" },
        { title: "Testimonials", href: "/about/testimonials", description: "Client success stories", icon: "💬" },
      ],
    },
    {
      links: [
        { title: "Resources", href: "/resources", description: "Helpful guides & tools", icon: "📚" },
        { title: "Careers", href: "/careers", description: "Join our growing team", icon: "🚀" },
        { title: "Contact Us", href: "/contact", description: "Get in touch with us", icon: "📞" },
      ],
    },
  ],
};

// Animation variants
const menuItemVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1] as const
    }
  })
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1, 
    height: "auto" as const,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1] as const,
      staggerChildren: 0.05
    }
  },
  exit: { 
    opacity: 0, 
    height: 0,
    transition: { duration: 0.2 }
  }
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -10 }
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled 
        ? "bg-white/95 backdrop-blur-xl shadow-elegant-sm" 
        : "bg-white border-b border-gray-100"
    )}>
      {/* Top bar - Enhanced with gradient */}
      <div className={cn(
        "hidden md:block bg-gradient-to-r from-navy via-navy to-navy-dark text-white transition-all duration-300 overflow-hidden",
        scrolled ? "h-0 opacity-0" : "h-10 opacity-100"
      )}>
        <div className="container flex h-10 items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+97317000000" className="flex items-center gap-2 hover:text-gold transition-colors group">
              <Phone className="h-4 w-4 group-hover:animate-pulse" />
              <span className="tracking-wide">+973 1700 0000</span>
            </a>
            <a href="mailto:info@keylinkcorp.com" className="flex items-center gap-2 hover:text-gold transition-colors group">
              <Mail className="h-4 w-4 group-hover:animate-pulse" />
              <span className="tracking-wide">info@keylinkcorp.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span className="text-white/90 tracking-wide text-[13px]">Your Trusted Business Partner in Bahrain</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className={cn(
        "container flex items-center justify-between transition-all duration-300",
        scrolled ? "h-16" : "h-16 lg:h-20"
      )}>
        {/* Logo with hover effect */}
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="text-2xl lg:text-3xl font-bold text-navy tracking-tight">Keylink</span>
            <span className="text-2xl lg:text-3xl font-bold text-gold tracking-tight">Corp</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-0.5">
            {megaMenuItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="nav-trigger-underline bg-transparent text-gray-600 hover:text-navy data-[state=open]:text-navy font-medium text-[15px] px-4 py-2.5 h-auto transition-colors duration-200 tracking-wide">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-screen max-w-5xl">
                    <div className="grid grid-cols-4 gap-0 p-0">
                      {/* Menu Columns */}
                      <div className={cn(
                        "col-span-3 grid gap-6 p-8",
                        item.columns.length === 1 ? "grid-cols-1" : 
                        item.columns.length === 2 ? "grid-cols-2" : "grid-cols-3"
                      )}>
                        {item.columns.map((column, colIndex) => (
                          <motion.div 
                            key={column.heading}
                            initial="hidden"
                            animate="visible"
                            custom={colIndex}
                            variants={menuItemVariants}
                          >
                            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4 pb-2 border-b border-gold/20 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                              {column.heading}
                            </h3>
                            <ul className="space-y-0.5">
                              {column.links.map((link, linkIndex) => (
                                <motion.li 
                                  key={link.title}
                                  custom={colIndex * 3 + linkIndex}
                                  variants={menuItemVariants}
                                >
                                  <NavigationMenuLink asChild>
                                    <Link
                                      to={link.href}
                                      className="nav-link-accent group block rounded-lg py-2.5 pr-3 hover:bg-gray-50/80 transition-all duration-200"
                                    >
                                      <div className="text-sm font-medium text-gray-800 group-hover:text-navy transition-colors">
                                        {link.title}
                                      </div>
                                      <p className="text-[13px] text-gray-500 mt-0.5 group-hover:text-gray-600 transition-colors">
                                        {link.description}
                                      </p>
                                    </Link>
                                  </NavigationMenuLink>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* CTA Panel - Enhanced */}
                      <div className="col-span-1 relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-dark p-8 flex flex-col justify-between rounded-r-2xl">
                        {/* Pattern overlay */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                            backgroundSize: '24px 24px'
                          }}></div>
                        </div>
                        
                        <div className="relative z-10">
                          <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center mb-4">
                            <ArrowRight className="h-5 w-5 text-gold" />
                          </div>
                          <h4 className="text-lg font-semibold text-white mb-2">
                            {item.cta.title}
                          </h4>
                          <p className="text-sm text-white/70 leading-relaxed">
                            {item.cta.description}
                          </p>
                        </div>
                        <Link to={item.cta.href} className="relative z-10">
                          <Button className="w-full mt-6 bg-gold hover:bg-gold-dark text-navy font-semibold group shine-effect">
                            {item.cta.buttonText}
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            
            {/* About Dropdown - Enhanced */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="nav-trigger-underline bg-transparent text-gray-600 hover:text-navy data-[state=open]:text-navy font-medium text-[15px] px-4 py-2.5 h-auto transition-colors duration-200 tracking-wide">
                {aboutDropdown.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-80 p-2">
                  {aboutDropdown.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      {sectionIndex > 0 && (
                        <div className="my-2 border-t border-gray-100"></div>
                      )}
                      <ul className="space-y-0.5">
                        {section.links.map((link, linkIndex) => (
                          <motion.li 
                            key={link.title}
                            initial="hidden"
                            animate="visible"
                            custom={sectionIndex * 4 + linkIndex}
                            variants={menuItemVariants}
                          >
                            <NavigationMenuLink asChild>
                              <Link
                                to={link.href}
                                className="group flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-gray-50/80 transition-all duration-200"
                              >
                                <span className="text-lg mt-0.5 grayscale group-hover:grayscale-0 transition-all duration-200">{link.icon}</span>
                                <div className="flex-1">
                                  <div className="text-sm font-medium text-gray-800 group-hover:text-navy transition-colors">
                                    {link.title}
                                  </div>
                                  <p className="text-xs text-gray-500 mt-0.5">
                                    {link.description}
                                  </p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  
                  {/* Quick contact CTA */}
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <a 
                      href="tel:+97317000000" 
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-navy/5 hover:bg-navy/10 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-navy/10 flex items-center justify-center group-hover:bg-navy/20 transition-colors">
                        <Phone className="h-4 w-4 text-navy" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Need help?</div>
                        <div className="text-sm font-medium text-navy">+973 1700 0000</div>
                      </div>
                    </a>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button - Enhanced */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/free-consultation">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="bg-gradient-to-r from-gold to-gold-light hover:from-gold-dark hover:to-gold text-navy font-semibold px-6 rounded-full shadow-lg shadow-gold/25 hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 shine-effect">
                Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </Link>
        </div>

        {/* Mobile menu button - Animated */}
        <motion.button
          className="lg:hidden p-2 text-gray-700 hover:text-navy transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Navigation - Enhanced with animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden border-t border-gray-100 bg-white/98 backdrop-blur-lg overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav className="container py-4 max-h-[75vh] overflow-y-auto">
              {megaMenuItems.map((item, index) => (
                <motion.div 
                  key={item.title} 
                  className="border-b border-gray-100 last:border-0"
                  variants={mobileItemVariants}
                  custom={index}
                >
                  <button
                    className="flex w-full items-center justify-between py-4 text-left font-medium text-gray-900 hover:text-navy transition-colors"
                    onClick={() => setOpenSubmenu(openSubmenu === item.title ? null : item.title)}
                  >
                    <span className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gold/10 flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-gold" />
                      </div>
                      <span className="tracking-wide">{item.title}</span>
                    </span>
                    <motion.div
                      animate={{ rotate: openSubmenu === item.title ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openSubmenu === item.title && (
                      <motion.div 
                        className="pb-4 space-y-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.columns.map((column) => (
                          <div key={column.heading} className="pl-12">
                            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-2 flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-gold"></span>
                              {column.heading}
                            </h4>
                            {column.links.map((link) => (
                              <Link
                                key={link.title}
                                to={link.href}
                                className="block py-2.5 text-sm text-gray-600 hover:text-navy hover:translate-x-1 transition-all"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {link.title}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              
              {/* About Dropdown in mobile */}
              <motion.div 
                className="border-b border-gray-100"
                variants={mobileItemVariants}
              >
                <button
                  className="flex w-full items-center justify-between py-4 text-left font-medium text-gray-900 hover:text-navy transition-colors"
                  onClick={() => setOpenSubmenu(openSubmenu === "about" ? null : "about")}
                >
                  <span className="tracking-wide">{aboutDropdown.title}</span>
                  <motion.div
                    animate={{ rotate: openSubmenu === "about" ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openSubmenu === "about" && (
                    <motion.div 
                      className="pb-4 pl-4"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {aboutDropdown.sections.map((section, sIndex) => (
                        <div key={sIndex} className={sIndex > 0 ? "mt-3 pt-3 border-t border-gray-100" : ""}>
                          {section.links.map((link) => (
                            <Link
                              key={link.title}
                              to={link.href}
                              className="flex items-center gap-3 py-2.5 text-sm text-gray-600 hover:text-navy transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <span className="text-base">{link.icon}</span>
                              {link.title}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              
              {/* Mobile CTA */}
              <motion.div 
                className="pt-6 pb-2"
                variants={mobileItemVariants}
              >
                <Link to="/free-consultation" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-gold to-gold-light text-navy font-semibold py-6 rounded-xl shadow-lg shadow-gold/20">
                    Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                
                {/* Quick contact */}
                <a 
                  href="tel:+97317000000" 
                  className="flex items-center justify-center gap-2 mt-4 py-3 text-navy font-medium"
                >
                  <Phone className="h-4 w-4" />
                  <span>+973 1700 0000</span>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
