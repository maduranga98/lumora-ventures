import React from "react";
import { MapPin } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = ({ onNavClick }) => {
  const navLinks = {
    "Quick Links": [
      { name: "Home", id: "home" },
      { name: "About Us", id: "about" },
      { name: "Packages", id: "packages" },
      { name: "Our Services", id: "services" },
      { name: "Contact Us", id: "contact" },
    ],
    Legal: [
      { name: "Privacy Policy", id: "privacy" },
      { name: "Terms & Conditions", id: "terms" },
    ],
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 space-y-8">
            {/* Logo and Description Section */}
            <div className="space-y-6">
              <div
                className="group cursor-pointer"
                onClick={() => onNavClick("home")}
              >
                {/* Logo Container */}
                <div className="transform group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={logo}
                    className="h-25 w-48 object-contain" // Increased size for better visibility
                    alt="Lumora Ventures Logo"
                  />
                </div>

                {/* Description with proper spacing */}
                <p className=" text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 max-w-sm leading-relaxed">
                  Illuminating pathways to innovation, empowering businesses to
                  achieve sustainable growth.
                </p>
              </div>
            </div>

            {/* Address Section with improved spacing */}
            <div className="mt-8">
              <div className="flex items-start gap-4 text-gray-400">
                <MapPin className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-1" />
                <address className="text-sm not-italic leading-loose">
                  Office 4157, 58 Peregrine Road
                  <br />
                  Hainault
                  <br />
                  Ilford
                  <br />
                  Essex
                  <br />
                  United Kingdom
                  <br />
                  IG6 3SZ
                </address>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(navLinks).map(([category, links], categoryIndex) => (
            <div
              key={category}
              className="space-y-4"
              style={{ animationDelay: `${(categoryIndex + 1) * 200}ms` }}
            >
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li
                    key={link.name}
                    className="transform hover:-translate-x-1 transition-transform duration-300"
                  >
                    <button
                      onClick={() => onNavClick(link.id)}
                      className="text-sm text-gray-400 hover:text-indigo-400 transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Contact Us
            </h3>
            <div className="space-y-3">
              <button
                onClick={() => onNavClick("contact")}
                className="block text-sm text-gray-400 hover:text-indigo-400 transition-colors"
              >
                Get in Touch
              </button>
              <a
                href="mailto:info@lumoraventures.com"
                className="block text-sm text-gray-400 hover:text-indigo-400 transition-colors"
              >
                info@lumoraventures.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <p className="text-center text-sm text-gray-400">
            © 2024 LUMORA VENTURES PVT LTD. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
