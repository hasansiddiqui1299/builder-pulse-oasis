import { Link } from "react-router-dom";
import { ShoppingBag, Search, User, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-brand-500 rounded-full flex items-center justify-center group-hover:bg-brand-600 transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 lg:w-6 lg:h-6 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 22 12 18.27 5.82 22 7 13.87 2 9l6.91-.74L12 2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-bold text-foreground tracking-tight">
                  ECOGLOW
                </span>
                <span className="text-xs text-muted-foreground -mt-1 hidden lg:block">
                  KARACHI
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-brand-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/collections"
              className="text-foreground hover:text-brand-600 transition-colors font-medium"
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-brand-600 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-brand-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-brand-600"
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-brand-600"
            >
              <User className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-brand-600"
            >
              <ShoppingBag className="w-5 h-5" />
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-foreground hover:text-brand-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-foreground hover:text-brand-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/collections"
                className="text-foreground hover:text-brand-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Collections
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-brand-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-foreground hover:text-brand-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
