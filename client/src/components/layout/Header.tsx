import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu as MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png"; // Adjust the path as necessary
import { Menu, MenuItem, MenuItems, MenuButton } from "@headlessui/react";


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/product", label: "Product" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`glass-header fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold gradient-text cursor-pointer">
            <img src={logo} alt="" width={150} height={150} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="hidden md:flex items-center space-x-6 pr-4 font-bold text-pink-500">
              <li className={`nav-link cursor-pointer`}>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li className={`nav-link cursor-pointer`}>
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li className={`nav-link cursor-pointer`}>
                <Menu as="div" className="relative inline-block text-left">
                  <MenuButton className="hover:text-white">Services</MenuButton>
                  <MenuItems className="absolute mt-2 w-fit bg-white shadow-lg flex flex-col space-y-3 rounded z-50 p-4">
                    <MenuItem>
                      {() => (
                        <Link
                          to="/governance_risk_and_compliance"
                          className="text-sm font-bold whitespace-nowrap hover:text-pink-500"
                        >
                          Governance Risk and Compliance
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {() => (
                        <Link
                          to="/cybersecurity_service"
                          className="text-sm font-bold whitespace-nowrap hover:text-pink-500"
                        >
                          Cybersecurity
                        </Link>
                      )}
                    </MenuItem>{" "}
                    <MenuItem>
                      {() => (
                        <Link
                          to="/strategic_planning_service"
                          className="text-sm font-bold whitespace-nowrap hover:text-pink-500"
                        >
                          Strategic Technology Consulting
                        </Link>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </li>
              <li className={`nav-link cursor-pointer`}>
                <Menu as="div" className="relative inline-block text-left">
                  <MenuButton className="hover:text-white">
                    Solutions
                  </MenuButton>
                  <MenuItems className="absolute mt-2 w-fit bg-white shadow-lg rounded z-50 p-4 flex flex-col space-y-3">
                    <MenuItem>
                      {() => (
                        <Link
                          to="/cloud_risk_management"
                          className="text-sm font-bold whitespace-nowrap hover:text-pink-500"
                        >
                          Cloud Risk Managment
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/third_party_risk_management"
                        className="text-sm font-bold whitespace-nowrap hover:text-pink-500"
                      >
                        Third Party Risk Management
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/governance_risk_and_compliance"
                        className="text-sm font-bold whitespace-nowrap hover:text-pink-500"
                      >
                        GRC
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/privacy_manager"
                        className="text-sm font-bold whitespace-nowrap hover:text-pink-500"
                      >
                        Privacy Manager
                      </Link>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </li>
              <li className={`nav-link cursor-pointer`}>
                <Link to="/contact" className="hover:text-whitea">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <div
                    className={`nav-link block px-3 py-2 cursor-pointer ${
                      location === item.href ? "active" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
