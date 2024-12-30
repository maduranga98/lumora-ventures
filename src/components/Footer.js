import React from "react";

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
      { name: "Terms of Service", id: "terms" },
    ],
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 animate-on-scroll opacity-0 translate-y-8">
            <div
              className="group cursor-pointer"
              onClick={() => onNavClick("home")}
            >
              <div className="flex items-center transform group-hover:scale-105 transition-transform duration-300">
                <span className="text-2xl md:text-3xl font-bold text-white">
                  Lumora
                </span>
                <span className="text-2xl md:text-3xl font-light text-indigo-400">
                  Ventures
                </span>
              </div>
              <p className="mt-4 text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Illuminating pathways to innovation, empowering businesses to
                achieve sustainable growth.
              </p>
            </div>
          </div>

          {Object.entries(navLinks).map(([category, links], categoryIndex) => (
            <div
              key={category}
              className="animate-on-scroll opacity-0 translate-y-8"
              style={{ animationDelay: `${(categoryIndex + 1) * 200}ms` }}
            >
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
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
                      className="text-gray-400 hover:text-indigo-400 transition-colors text-sm md:text-base"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm md:text-base">
            © 2024 Lumora Ventures. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
