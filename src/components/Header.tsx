import { useState, useEffect } from "react";
import { X, Phone, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoPlaceholder from "@/assets/logo-placeholder.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-background/90 backdrop-blur-sm border-b border-border/50"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar - Contact Info */}
        <div className="hidden md:flex items-center justify-between py-2 border-b border-border/30 text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+91550140897"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>+91 9550140897</span>
            </a>
            <span className="text-muted-foreground">Open 8AM - 10PM</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary font-medium">
              Delivery available within a 5 km radius.
            </span>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="https://i.ibb.co/PGhZ3S2m/tejamedical.png"
                alt="Medical Shop Logo"
                className="h-10 w-10 md:h-16 md:w-16 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                Teja Medical
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                Trusted Healthcare - Anantapur
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-foreground hover:text-primary transition-colors font-medium group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
            <div className="flex items-center gap-3 ml-4">
              {/* <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </Button> */}
             <a href="tel:+919550140897">
              <Button size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                Order Now
              </Button>
            </a>
            </div>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center">
                0
              </span>
            </Button> */}
            <button
              onClick={toggleMenu}
              className="p-2 text-foreground hover:text-primary transition-colors relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col items-end gap-1.5 w-6">
                <span
                  className={`h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen
                      ? "w-6 rotate-45 translate-y-2"
                      : "w-4 rotate-0 translate-y-0"
                  }`}
                />
                <span
                  className={`h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen
                      ? "w-6 -rotate-45 -translate-y-2"
                      : "w-6 rotate-0 translate-y-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-6 space-y-1 border-t border-border/30">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-4 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all font-medium animate-in fade-in slide-in-from-top-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-2 px-4">
             <a href="tel:+919550140897" className="w-full">
              <Button
                variant="default"
                className="w-full gap-2 animate-in fade-in slide-in-from-top-2"
                style={{ animationDelay: "250ms" }}
              >
                <Phone className="h-4 w-4" />
                Order Now
              </Button>
            </a>
              <a
                href="tel:+919550140897 "
                className="block text-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                +91 9550140897
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
