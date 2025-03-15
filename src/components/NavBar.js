import React, { useState, useCallback, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import _ from "lodash";
import logo from "../assets/logo_new.png";

const SCROLL_THRESHOLD = 20;
const SCROLL_OFFSET = 100;

const Navbar = ({ activeSection, onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState(activeSection || "home");

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = _.throttle(() => {
      // Update navbar background
      setScrolled(window.scrollY > SCROLL_THRESHOLD);

      // Update active section
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + SCROLL_OFFSET;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setCurrentSection(section.id);
        }
      });
    }, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      handleScroll.cancel();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Update current section when activeSection prop changes
  useEffect(() => {
    if (activeSection) {
      setCurrentSection(activeSection);
    }
  }, [activeSection]);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    // { name: "Packages", id: "packages" },
    { name: "Our Services", id: "services" },
    { name: "Contact Us", id: "contact" },
  ];

  const handleNavClick = useCallback(
    (id) => {
      setCurrentSection(id);
      if (typeof onNavClick === "function") {
        onNavClick(id);
      }
      setIsMenuOpen(false);
    },
    [onNavClick]
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-full">
        <div className="flex justify-between h-16 md:h-20 items-center">
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavClick("home")}
          >
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-auto xs:h-10 sm:h-12 md:h-14 lg:h-16 transition-transform duration-300 group-hover:scale-105"
              loading="eager"
            />
            <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#09122C] ml-2 transition-all duration-300 group-hover:text-[#ECAF41]">
              Lumora Ventures
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-2 lg:px-3 py-1.5 lg:py-2 rounded-lg text-xs sm:text-sm lg:text-base font-medium transition-all duration-200 ${
                  currentSection === item.id
                    ? "text-[#ECAF41] bg-[#09122C] shadow-sm"
                    : "text-[#09122C] hover:text-[#ECAF41] hover:bg-[#09122C]/10"
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
              className="ml-2 px-3 lg:px-4 py-1.5 lg:py-2 bg-[#ECAF41] text-[#09122C] rounded-lg 
                       text-xs sm:text-sm lg:text-base font-medium border-2 border-[#ECAF41]
                       transition-all duration-200 hover:bg-[#F5C15D] hover:border-[#F5C15D] hover:shadow-lg 
                       hover:shadow-[#ECAF41]/20 active:scale-95"
            >
              Get Started
              <ChevronRight className="inline w-3 h-3 sm:w-4 sm:h-4 ml-1" />
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#09122C] hover:text-[#ECAF41] 
                     hover:bg-[#09122C]/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="md:hidden absolute left-0 right-0 bg-white/95 backdrop-blur-md
                    border-b border-[#ECAF41]/20 shadow-lg transition-all duration-300"
        >
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2 rounded-lg text-sm sm:text-base transition-all duration-200 ${
                  currentSection === item.id
                    ? "text-[#ECAF41] bg-[#09122C] font-medium shadow-sm"
                    : "text-[#09122C] hover:text-[#ECAF41] hover:bg-[#09122C]/10"
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
              className="w-full mt-2 px-4 py-2 bg-[#ECAF41] text-[#09122C] rounded-lg 
                       text-sm sm:text-base font-medium border-2 border-[#ECAF41]
                       transition-all duration-200 hover:bg-[#F5C15D] hover:border-[#F5C15D] active:scale-95"
            >
              Get Started
              <ChevronRight className="inline w-3 h-3 sm:w-4 sm:h-4 ml-1" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
