import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
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

const navigationItems = [
  {
    title: "Company Formation",
    href: "/services/company-formation",
    children: [
      { title: "Company Formation Bahrain", href: "/services/company-formation", description: "Start your business in Bahrain" },
      { title: "Single Person Company", href: "/services/single-person-company", description: "SPC registration for solo entrepreneurs" },
      { title: "Branch Office", href: "/services/branch-office", description: "Foreign company branch setup" },
      { title: "Business License", href: "/services/business-license", description: "Obtain your commercial license" },
      { title: "Company Liquidation", href: "/services/company-liquidation", description: "Close your business properly" },
    ],
  },
  {
    title: "Commercial Registration",
    href: "/services/commercial-registration",
    children: [
      { title: "CR Registration", href: "/services/commercial-registration", description: "New commercial registration" },
      { title: "CR Amendment", href: "/services/cr-amendment", description: "Modify your existing CR" },
      { title: "Lease Contract", href: "/services/lease-contract-registration", description: "Register your business lease" },
    ],
  },
  {
    title: "PRO Services",
    href: "/services/pro-services",
    children: [
      { title: "PRO Services", href: "/services/pro-services", description: "Professional government liaison" },
      { title: "Document Clearance", href: "/services/document-clearance", description: "Fast document processing" },
      { title: "Certificate Attestation", href: "/services/certificate-attestation", description: "Legalization services" },
      { title: "Chamber of Commerce", href: "/services/chamber-of-commerce", description: "Chamber registration & services" },
      { title: "Local Sponsorship", href: "/services/local-sponsorship", description: "Bahraini sponsor arrangements" },
    ],
  },
  {
    title: "Visa Services",
    href: "/services/visa-services",
    children: [
      { title: "Work Visa", href: "/services/work-visa", description: "Employee work permits" },
      { title: "Golden Visa", href: "/services/golden-visa", description: "Long-term residency program" },
      { title: "Family Visa", href: "/services/family-visa", description: "Dependent visa services" },
    ],
  },
  {
    title: "Business Support",
    href: "/services/business-consulting",
    children: [
      { title: "Business Consulting", href: "/services/business-consulting", description: "Strategic business advice" },
      { title: "Management Consulting", href: "/services/management-consulting", description: "Operational excellence" },
      { title: "Accounting Services", href: "/services/accounting-services", description: "Financial management" },
      { title: "Tax Services", href: "/services/tax-services", description: "Tax compliance & planning" },
      { title: "Legal Consulting", href: "/services/legal-consulting", description: "Business legal support" },
      { title: "Bank Account Services", href: "/services/bank-account", description: "Corporate banking assistance" },
    ],
  },
  {
    title: "Workspace",
    href: "/services/virtual-office",
    children: [
      { title: "Virtual Office", href: "/services/virtual-office", description: "Professional business address" },
      { title: "Co-working Space", href: "/services/coworking-space", description: "Flexible work environment" },
      { title: "Business Incubators", href: "/services/business-incubators", description: "Startup support programs" },
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar */}
      <div className="hidden md:block bg-primary text-primary-foreground">
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
            <span>Your Trusted Business Partner in Bahrain</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">Keylink</span>
            <span className="text-2xl font-bold text-gold">Corp</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="bg-transparent">{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.children?.map((child) => (
                      <li key={child.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={child.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{child.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {child.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact">
            <Button variant="outline" size="sm">Contact Us</Button>
          </Link>
          <Link to="/free-consultation">
            <Button className="bg-gold hover:bg-gold-dark text-primary font-semibold">
              Free Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container py-4">
            {navigationItems.map((item) => (
              <div key={item.title} className="border-b border-border/50 last:border-0">
                <button
                  className="flex w-full items-center justify-between py-3 text-left font-medium"
                  onClick={() => setOpenSubmenu(openSubmenu === item.title ? null : item.title)}
                >
                  {item.title}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      openSubmenu === item.title && "rotate-180"
                    )}
                  />
                </button>
                {openSubmenu === item.title && (
                  <div className="pb-3 pl-4">
                    {item.children?.map((child) => (
                      <Link
                        key={child.title}
                        to={child.href}
                        className="block py-2 text-sm text-muted-foreground hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">Contact Us</Button>
              </Link>
              <Link to="/free-consultation" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gold hover:bg-gold-dark text-primary font-semibold">
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
