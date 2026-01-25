import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight, Building2, FileText, Users, Briefcase } from "lucide-react";
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

// About dropdown
const aboutDropdown = {
  title: "About",
  links: [
    { title: "About Us", href: "/about", description: "Our story & mission" },
    { title: "Our Team", href: "/about/team", description: "Meet the experts behind Keylink" },
    { title: "Why Choose Us", href: "/about/why-us", description: "What sets us apart" },
    { title: "Testimonials", href: "/about/testimonials", description: "Client success stories" },
    { title: "Careers", href: "/careers", description: "Join our growing team" },
  ],
};

// Simple nav items (no dropdown)
const simpleNavItems = [
  { title: "Resources", href: "/resources" },
  { title: "Contact Us", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      {/* Top bar */}
      <div className="hidden md:block bg-navy text-white">
        <div className="container flex h-10 items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+97317000000" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="h-4 w-4" />
              <span>+973 1700 0000</span>
            </a>
            <a href="mailto:info@keylinkcorp.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@keylinkcorp.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/80">Your Trusted Business Partner in Bahrain</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container flex h-16 lg:h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-2xl lg:text-3xl font-bold text-navy">Keylink</span>
            <span className="text-2xl lg:text-3xl font-bold text-gold">Corp</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            {megaMenuItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="bg-transparent text-gray-700 hover:text-navy hover:bg-gray-50 font-medium text-[15px] px-4 py-2 h-auto">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-screen max-w-5xl">
                    <div className="grid grid-cols-4 gap-0 p-0">
                      {/* Menu Columns */}
                      <div className={cn(
                        "col-span-3 grid gap-6 p-8 bg-white",
                        item.columns.length === 1 ? "grid-cols-1" : 
                        item.columns.length === 2 ? "grid-cols-2" : "grid-cols-3"
                      )}>
                        {item.columns.map((column) => (
                          <div key={column.heading}>
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-gold mb-4 pb-2 border-b border-gold/20">
                              {column.heading}
                            </h3>
                            <ul className="space-y-1">
                              {column.links.map((link) => (
                                <li key={link.title}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      to={link.href}
                                      className="group block rounded-lg p-3 hover:bg-gray-50 transition-colors"
                                    >
                                      <div className="text-sm font-medium text-gray-900 group-hover:text-navy">
                                        {link.title}
                                      </div>
                                      <p className="text-sm text-gray-500 mt-0.5">
                                        {link.description}
                                      </p>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      
                      {/* CTA Panel */}
                      <div className="col-span-1 bg-gradient-to-br from-navy to-navy-dark p-8 flex flex-col justify-between rounded-r-xl">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">
                            {item.cta.title}
                          </h4>
                          <p className="text-sm text-white/70 leading-relaxed">
                            {item.cta.description}
                          </p>
                        </div>
                        <Link to={item.cta.href}>
                          <Button className="w-full mt-6 bg-gold hover:bg-gold-dark text-navy font-semibold group">
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
            
            {/* About Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-gray-700 hover:text-navy hover:bg-gray-50 font-medium text-[15px] px-4 py-2 h-auto">
                {aboutDropdown.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-72 p-4 bg-white">
                  <ul className="space-y-1">
                    {aboutDropdown.links.map((link) => (
                      <li key={link.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={link.href}
                            className="group block rounded-lg px-4 py-3 hover:bg-gray-50 transition-colors"
                          >
                            <div className="text-sm font-medium text-gray-900 group-hover:text-navy">
                              {link.title}
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5">
                              {link.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            {/* Simple nav items */}
            {simpleNavItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <Link 
                  to={item.href}
                  className="inline-flex items-center justify-center px-4 py-2 text-[15px] font-medium text-gray-700 hover:text-navy hover:bg-gray-50 rounded-md transition-colors"
                >
                  {item.title}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact">
            <Button variant="ghost" className="text-gray-700 hover:text-navy hover:bg-gray-50 font-medium">
              Contact Us
            </Button>
          </Link>
          <Link to="/free-consultation">
            <Button className="bg-gold hover:bg-gold-dark text-navy font-semibold px-6 shadow-md hover:shadow-lg transition-all">
              Free Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white max-h-[80vh] overflow-y-auto">
          <nav className="container py-4">
            {megaMenuItems.map((item) => (
              <div key={item.title} className="border-b border-gray-100 last:border-0">
                <button
                  className="flex w-full items-center justify-between py-4 text-left font-medium text-gray-900"
                  onClick={() => setOpenSubmenu(openSubmenu === item.title ? null : item.title)}
                >
                  <span className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-gold" />
                    {item.title}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-gray-400 transition-transform duration-200",
                      openSubmenu === item.title && "rotate-180"
                    )}
                  />
                </button>
                {openSubmenu === item.title && (
                  <div className="pb-4 space-y-4">
                    {item.columns.map((column) => (
                      <div key={column.heading} className="pl-8">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-gold mb-2">
                          {column.heading}
                        </h4>
                        {column.links.map((link) => (
                          <Link
                            key={link.title}
                            to={link.href}
                            className="block py-2 text-sm text-gray-600 hover:text-navy"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* About Dropdown in mobile */}
            <div className="border-b border-gray-100">
              <button
                className="flex w-full items-center justify-between py-4 text-left font-medium text-gray-900"
                onClick={() => setOpenSubmenu(openSubmenu === "about" ? null : "about")}
              >
                <span>{aboutDropdown.title}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-gray-400 transition-transform duration-200",
                    openSubmenu === "about" && "rotate-180"
                  )}
                />
              </button>
              {openSubmenu === "about" && (
                <div className="pb-4 pl-4">
                  {aboutDropdown.links.map((link) => (
                    <Link
                      key={link.title}
                      to={link.href}
                      className="block py-2 text-sm text-gray-600 hover:text-navy"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Simple nav items in mobile */}
            {simpleNavItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="flex items-center py-4 font-medium text-gray-900 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            
            <div className="mt-6 flex flex-col gap-3">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full border-gray-200 text-gray-700">
                  Contact Us
                </Button>
              </Link>
              <Link to="/free-consultation" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold">
                  Free Consultation
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
