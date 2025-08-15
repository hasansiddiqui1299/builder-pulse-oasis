import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 22 12 18.27 5.82 22 7 13.87 2 9l6.91-.74L12 2z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold">ECOGLOW</span>
                <div className="text-xs text-gray-400">KARACHI</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium men's fashion brand based in Karachi, Pakistan. We craft
              sophisticated clothing for the modern gentleman who values quality
              and style.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-brand-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-brand-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-brand-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-gray-300 hover:text-brand-400 transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                to="/collections"
                className="text-gray-300 hover:text-brand-400 transition-colors text-sm"
              >
                Collections
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-brand-400 transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-brand-400 transition-colors text-sm"
              >
                Contact
              </Link>
              <Link
                to="/size-guide"
                className="text-gray-300 hover:text-brand-400 transition-colors text-sm"
              >
                Size Guide
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Customer Service
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/shipping"
                className="text-gray-300 hover:text-brand-400 transition-colors text-sm"
              >
                Shipping Info
              </Link>
              <Link
                to="/returns"
                className="text-gray-300 hover:text-brand-400 transition-colors text-sm"
              >
                Returns & Exchanges
              </Link>
              <Link
                to="/faq"
                className="text-gray-300 hover:text-brand-400 transition-colors text-sm"
              >
                FAQ
              </Link>
              <Link
                to="/privacy"
                className="text-gray-300 hover:text-brand-400 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-300 hover:text-brand-400 transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <div>Clifton Block 2</div>
                  <div>Karachi, Sindh 75600</div>
                  <div>Pakistan</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">+92 21 3500 1234</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">hello@ecoglow.pk</span>
              </div>
            </div>
            <div className="text-sm text-gray-300">
              <div className="font-medium text-white mb-1">Store Hours:</div>
              <div>Mon - Sat: 10:00 AM - 10:00 PM</div>
              <div>Sunday: 2:00 PM - 9:00 PM</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 ECOGLOW. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with ❤️ in Karachi</span>
              <div className="flex items-center space-x-4">
                <span>Payment Methods:</span>
                <div className="flex space-x-2">
                  <div className="w-8 h-5 bg-gray-700 rounded text-xs flex items-center justify-center">
                    VISA
                  </div>
                  <div className="w-8 h-5 bg-gray-700 rounded text-xs flex items-center justify-center">
                    MC
                  </div>
                  <div className="w-8 h-5 bg-gray-700 rounded text-xs flex items-center justify-center">
                    COD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
