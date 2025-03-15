import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import logo from "../assets/logo_new.png";

const Footer = ({ onNavClick }) => {
  const navLinks = {
    "Quick Links": [
      { name: "Home", id: "home" },
      { name: "About Us", id: "about" },
      // { name: "Packages", id: "packages" },
      { name: "Our Services", id: "services" },
      { name: "Contact Us", id: "contact" },
    ],
    Legal: [
      { name: "Privacy Policy", id: "privacy" },
      { name: "Terms & Conditions", id: "terms" },
    ],
  };

  const socialLinks = [
    { Icon: Facebook, href: "#", color: "hover:bg-[#3D52A2]" },
    { Icon: Twitter, href: "#", color: "hover:bg-[#3D52A2]" },
    { Icon: Instagram, href: "#", color: "hover:bg-[#3D52A2]" },
    { Icon: Linkedin, href: "#", color: "hover:bg-[#3D52A2]" },
  ];

  const contactInfo = [
    {
      Icon: Mail,
      text: "info@lumoraventures.com",
      href: "mailto:info@lumoraventures.com",
    },
    {
      Icon: Phone,
      text: "+94-71-999-8500",
      href: "tel:+94719998500",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#09122C]">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#09122C] to-[#040A1A]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ECAF41 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="space-y-8">
              <div className="space-y-6">
                <div
                  className="group cursor-pointer inline-block"
                  onClick={() => onNavClick("home")}
                >
                  <div className="flex items-center transform group-hover:scale-105 transition-transform duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-2">
                      <img
                        src={logo}
                        className="h-12 w-auto object-contain"
                        alt="Lumora Ventures Logo"
                      />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-white ml-3">
                      Lumora Ventures
                    </h1>
                  </div>
                </div>
                <p className="text-sm text-[#ECAF41]/80 group-hover:text-[#ECAF41] transition-colors duration-300 max-w-sm leading-relaxed">
                  Illuminating pathways to innovation, empowering businesses to
                  achieve sustainable growth.
                </p>
              </div>
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="p-2 rounded-lg bg-[#ECAF41]/10 backdrop-blur-sm hover:bg-[#ECAF41]/30 
                             transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="h-5 w-5 text-[#ECAF41]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(navLinks).map(([category, links]) => (
            <div key={category} className="space-y-6">
              <h3
                className="text-sm font-semibold text-[#ECAF41] tracking-wider uppercase 
                           after:content-[''] after:block after:w-12 after:h-0.5 
                           after:bg-[#ECAF41] after:mt-2"
              >
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => onNavClick(link.id)}
                      className="group flex items-center text-sm text-[#ECAF41]/80 hover:text-[#ECAF41] 
                               transition-colors duration-300"
                    >
                      <ChevronRight
                        className="h-4 w-4 mr-2 transform group-hover:translate-x-1 
                                   transition-transform opacity-0 group-hover:opacity-100 text-[#ECAF41]"
                      />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information */}
          <div className="space-y-6">
            <h3
              className="text-sm font-semibold text-[#ECAF41] tracking-wider uppercase 
                         after:content-[''] after:block after:w-12 after:h-0.5 
                         after:bg-[#ECAF41] after:mt-2"
            >
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 text-[#ECAF41]/80 group">
                <MapPin
                  className="h-5 w-5 text-[#ECAF41] flex-shrink-0 mt-1 
                             group-hover:scale-110 transition-transform"
                />
                <address
                  className="text-sm not-italic leading-loose group-hover:text-[#ECAF41] 
                            transition-colors"
                >
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

              {contactInfo.map(({ Icon, text, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="flex items-center gap-4 text-[#ECAF41]/80 hover:text-[#ECAF41] 
                           group transition-colors duration-300"
                >
                  <Icon
                    className="h-5 w-5 text-[#ECAF41] group-hover:scale-110 
                               transition-transform"
                  />
                  <span className="text-sm">{text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#ECAF41]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#ECAF41]/80">
              © 2024 LUMORA VENTURES PVT LTD. All Rights Reserved.
            </p>
            <a
              href="#top"
              className="group flex items-center gap-2 px-4 py-2 bg-[#ECAF41]/10 backdrop-blur-sm 
                       rounded-lg text-sm text-[#ECAF41]/80 hover:text-[#ECAF41] hover:bg-[#ECAF41]/20 
                       transition-all duration-300"
            >
              Back to top
              <ExternalLink className="h-4 w-4 group-hover:translate-y-[-2px] transition-transform text-[#ECAF41]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
