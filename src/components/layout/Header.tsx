import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Menu, X, ChevronDown, Phone, Mail, ArrowRight, 
  Building2, FileText, Users, Briefcase, Rocket, 
  Shield, Landmark, CreditCard, MapPin, Headphones,
  Globe, Star, Award, MessageCircle, BookOpen, UserPlus, Contact
} from "lucide-react";
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

// Mega menu structure - 4 main pillars with expanded services
const megaMenuItems = [
  {
    title: "Launch Your Business",
    icon: Rocket,
    columns: [
      {
        heading: "Business Types",
        icon: Building2,
        links: [
          { title: "LLC Formation", href: "/services/llc-formation", description: "Limited liability company" },
          { title: "Single Person Company", href: "/services/single-person-company", description: "SPC for solo entrepreneurs" },
          { title: "WLL Company", href: "/services/wll-company", description: "With limited liability" },
          { title: "Branch Office", href: "/services/branch-office", description: "Foreign company branch" },
          { title: "Free Zone Company", href: "/services/free-zone-company", description: "Tax-advantaged setup" },
          { title: "Holding Company", href: "/services/holding-company", description: "Investment structure" },
        ],
      },
      {
        heading: "Registration",
        icon: FileText,
        links: [
          { title: "Commercial Registration", href: "/services/commercial-registration", description: "New CR registration", badge: "Popular" },
          { title: "CR Renewal", href: "/services/cr-renewal", description: "Renew your registration" },
          { title: "CR Amendment", href: "/services/cr-amendment", description: "Modify existing CR" },
          { title: "Trade Name Registration", href: "/services/trade-name", description: "Register business name" },
          { title: "Lease Contract Registration", href: "/services/lease-contract-registration", description: "Business lease filing" },
        ],
      },
      {
        heading: "Licensing & Legal",
        icon: Shield,
        links: [
          { title: "Business License", href: "/services/business-license", description: "Commercial license" },
          { title: "Trade License", href: "/services/trade-license", description: "Trade permit acquisition" },
          { title: "Memorandum of Association", href: "/services/moa", description: "Legal formation docs" },
          { title: "Articles of Association", href: "/services/articles-of-association", description: "Company bylaws" },
          { title: "Company Liquidation", href: "/services/company-liquidation", description: "Proper business closure" },
        ],
      },
    ],
    cta: {
      title: "Start Your Business",
      description: "Ready to launch? Get your business registered in as little as 48 hours.",
      buttonText: "Start Now",
      href: "/free-consultation",
    },
  },
  {
    title: "Government Services",
    icon: Landmark,
    columns: [
      {
        heading: "PRO Services",
        icon: Briefcase,
        links: [
          { title: "Complete PRO Services", href: "/services/pro-services", description: "Full government liaison", badge: "Popular" },
          { title: "Document Clearance", href: "/services/document-clearance", description: "Fast document processing" },
          { title: "Ministry Approvals", href: "/services/ministry-approvals", description: "Government approvals" },
          { title: "Chamber of Commerce", href: "/services/chamber-of-commerce", description: "Chamber registration" },
          { title: "Labor Office Services", href: "/services/labor-office", description: "LMRA procedures" },
          { title: "Municipality Services", href: "/services/municipality", description: "Local authority filings" },
        ],
      },
      {
        heading: "Visa Services",
        icon: Globe,
        links: [
          { title: "Work Visa", href: "/services/work-visa", description: "Employee work permits" },
          { title: "Golden Visa (Investor)", href: "/services/golden-visa", description: "Long-term residency", badge: "New" },
          { title: "Family/Dependent Visa", href: "/services/family-visa", description: "Dependent visas" },
          { title: "Visit Visa", href: "/services/visit-visa", description: "Business & tourist visas" },
          { title: "Visa Renewal & Cancellation", href: "/services/visa-renewal", description: "Manage existing visas" },
          { title: "Residency Permits", href: "/services/residency-permits", description: "Long-term stay permits" },
        ],
      },
      {
        heading: "Document Services",
        icon: FileText,
        links: [
          { title: "Certificate Attestation", href: "/services/certificate-attestation", description: "Document legalization" },
          { title: "Document Legalization", href: "/services/document-legalization", description: "Official authentication" },
          { title: "Translation Services", href: "/services/translation", description: "Certified translations" },
          { title: "Notarization", href: "/services/notarization", description: "Notary public services" },
          { title: "Embassy Attestation", href: "/services/embassy-attestation", description: "Embassy verification" },
          { title: "Local Sponsorship", href: "/services/local-sponsorship", description: "Bahraini sponsor" },
        ],
      },
    ],
    cta: {
      title: "Need Help?",
      description: "Our PRO experts handle all government procedures so you can focus on business.",
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
        icon: Users,
        links: [
          { title: "Business Consulting", href: "/services/business-consulting", description: "Strategic business advice" },
          { title: "Management Consulting", href: "/services/management-consulting", description: "Operational excellence" },
          { title: "Legal Consulting", href: "/services/legal-consulting", description: "Business legal support" },
          { title: "HR Consulting", href: "/services/hr-consulting", description: "Human resources strategy" },
          { title: "Feasibility Studies", href: "/services/feasibility-studies", description: "Market viability analysis" },
          { title: "Market Research", href: "/services/market-research", description: "Industry insights" },
        ],
      },
      {
        heading: "Financial Services",
        icon: CreditCard,
        links: [
          { title: "Accounting & Bookkeeping", href: "/services/accounting-services", description: "Financial management", badge: "Popular" },
          { title: "Tax Planning & Filing", href: "/services/tax-services", description: "Tax compliance" },
          { title: "VAT Registration", href: "/services/vat-registration", description: "VAT setup & filing" },
          { title: "Audit Services", href: "/services/audit-services", description: "Financial audits" },
          { title: "Corporate Banking Setup", href: "/services/bank-account", description: "Business banking" },
          { title: "Payroll Services", href: "/services/payroll", description: "Employee payroll" },
        ],
      },
      {
        heading: "Marketing & Support",
        icon: Star,
        links: [
          { title: "Digital Marketing", href: "/services/digital-marketing", description: "Online presence growth" },
          { title: "Brand Strategy", href: "/services/brand-strategy", description: "Brand development" },
          { title: "Web Development", href: "/services/web-development", description: "Website & apps" },
          { title: "SEO Services", href: "/services/seo-services", description: "Search optimization" },
          { title: "Social Media", href: "/services/social-media", description: "Social management" },
          { title: "Content Creation", href: "/services/content-creation", description: "Marketing content" },
        ],
      },
    ],
    cta: {
      title: "Scale Confidently",
      description: "Expert guidance to help your business thrive in Bahrain's competitive market.",
      buttonText: "Explore Services",
      href: "/services/business-consulting",
    },
  },
  {
    title: "Workspace",
    icon: MapPin,
    columns: [
      {
        heading: "Virtual Solutions",
        icon: Globe,
        links: [
          { title: "Virtual Office", href: "/services/virtual-office", description: "Professional business address", badge: "Popular" },
          { title: "Business Address", href: "/services/business-address", description: "Prestigious location" },
          { title: "Mail Handling", href: "/services/mail-handling", description: "Mail & package services" },
          { title: "Call Answering", href: "/services/call-answering", description: "Professional reception" },
          { title: "Virtual Receptionist", href: "/services/virtual-receptionist", description: "Remote admin support" },
        ],
      },
      {
        heading: "Physical Spaces",
        icon: Building2,
        links: [
          { title: "Co-working Spaces", href: "/services/coworking-space", description: "Flexible work environment" },
          { title: "Private Offices", href: "/services/private-offices", description: "Dedicated workspace" },
          { title: "Meeting Rooms", href: "/services/meeting-rooms", description: "Professional meetings" },
          { title: "Business Incubators", href: "/services/business-incubators", description: "Startup programs" },
          { title: "Executive Suites", href: "/services/executive-suites", description: "Premium office space" },
        ],
      },
    ],
    cta: {
      title: "Find Your Space",
      description: "Flexible solutions from virtual addresses to fully-equipped offices.",
      buttonText: "View Options",
      href: "/services/virtual-office",
    },
  },
];

// About dropdown with icons
const aboutDropdown = {
  title: "About",
  links: [
    { title: "About Keylink", href: "/about", description: "Our story, mission & vision", icon: Building2 },
    { title: "Our Team", href: "/about/team", description: "Meet the experts behind Keylink", icon: Users },
    { title: "Why Choose Us", href: "/about/why-us", description: "What sets us apart", icon: Award },
    { title: "Client Success Stories", href: "/about/testimonials", description: "Testimonials & case studies", icon: MessageCircle },
    { title: "Blog & Resources", href: "/resources", description: "Insights, guides & news", icon: BookOpen },
    { title: "Careers", href: "/careers", description: "Join our growing team", icon: UserPlus },
    { title: "Contact Us", href: "/contact", description: "Get in touch with us", icon: Headphones },
  ],
};

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
                            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gold/20">
                              <column.icon className="h-4 w-4 text-gold" />
                              <h3 className="text-xs font-semibold uppercase tracking-wider text-navy">
                                {column.heading}
                              </h3>
                            </div>
                            <ul className="space-y-0.5">
                              {column.links.map((link) => (
                                <li key={link.title}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      to={link.href}
                                      className="group block rounded-lg p-2.5 hover:bg-gray-50 transition-colors border-l-2 border-transparent hover:border-gold"
                                    >
                                      <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium text-gray-900 group-hover:text-navy">
                                          {link.title}
                                        </span>
                                        {link.badge && (
                                          <span className={cn(
                                            "text-[10px] font-semibold px-1.5 py-0.5 rounded-full",
                                            link.badge === "Popular" ? "bg-gold/10 text-gold" : "bg-green-100 text-green-700"
                                          )}>
                                            {link.badge}
                                          </span>
                                        )}
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
                <div className="w-80 p-4 bg-white">
                  <ul className="space-y-0.5">
                    {aboutDropdown.links.map((link, index) => (
                      <li key={link.title}>
                        {index === aboutDropdown.links.length - 1 && (
                          <div className="border-t border-gray-100 my-2" />
                        )}
                        <NavigationMenuLink asChild>
                          <Link
                            to={link.href}
                            className="group flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-gray-50 transition-colors"
                          >
                            <link.icon className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-navy">
                                {link.title}
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5">
                                {link.description}
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button - Single primary action */}
        <div className="hidden lg:flex items-center">
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
                        <div className="flex items-center gap-2 mb-2">
                          <column.icon className="h-3.5 w-3.5 text-gold" />
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-navy">
                            {column.heading}
                          </h4>
                        </div>
                        {column.links.map((link) => (
                          <Link
                            key={link.title}
                            to={link.href}
                            className="flex items-center gap-2 py-2 text-sm text-gray-600 hover:text-navy"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.title}
                            {link.badge && (
                              <span className={cn(
                                "text-[10px] font-semibold px-1.5 py-0.5 rounded-full",
                                link.badge === "Popular" ? "bg-gold/10 text-gold" : "bg-green-100 text-green-700"
                              )}>
                                {link.badge}
                              </span>
                            )}
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
                <span className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-gold" />
                  {aboutDropdown.title}
                </span>
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
                      className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-navy"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <link.icon className="h-4 w-4 text-gold/70" />
                      {link.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Mobile CTA */}
            <div className="pt-4 space-y-3">
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
