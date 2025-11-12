import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoPlaceholder from "@/assets/logo-placeholder.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logoPlaceholder}
              alt="Medical Shop Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-foreground">
                MediCare Plus
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                Hyderabad
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button variant="default" size="sm">
              Order Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <div className="flex flex-col gap-1.5 w-6">
                <span className="h-0.5 w-4 bg-current transition-all" />
                <span className="h-0.5 w-6 bg-current transition-all" />
                <span className="h-0.5 w-6 bg-current transition-all" />
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button variant="default" className="w-full mt-4">
              Order Now
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
