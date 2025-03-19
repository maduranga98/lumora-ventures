import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Menu, X, ChevronUp } from "lucide-react";
import Header from "./Header";
import WhatIsGBP from "./WhatIsGBP";
import Packages from "./Packages";
import Footer from "./Footer";
import logoImage from "../assets/logo_new.webp";
import WhyGBPCrucial from "./WhyGMB";
import WhyChooseLumora from "./WhyChooseLumora";
import FAQSection from "./FAQSection";

const GmbPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Navigation items - wrapped in useMemo to prevent recreation on every render
  const navItems = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "whatIsGBP", label: "About GBP" },
      { id: "whyGBP", label: "Why It Matters" },
      { id: "whyChoose", label: "Why Choose Us" },
      { id: "packages", label: "Services" },
      { id: "faq", label: "FAQ" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  // Check if we need to scroll to top on component mount
  useEffect(() => {
    // Set initial load - this will prevent automatic scrolling on first render
    let timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 100);

    // Check if we have state with scrollToTop flag
    if (location.state?.scrollToTop && !isInitialLoad) {
      // Use a gentle scroll to the top
      window.scrollTo({
        top: 0,
        behavior: "auto", // Use "auto" instead of "smooth" to prevent animation issues
      });

      // Clear the location state to prevent scrolling on subsequent renders
      window.history.replaceState({}, document.title);
    }

    return () => clearTimeout(timer);
  }, [location, isInitialLoad]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setShowScrollTop(position > 600);

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.id);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

  // Scroll to section functionality with gentler scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 64; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      // Slower, more controlled scrolling
      const duration = 1000; // ms
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const scrollProgress = Math.min(timeElapsed / duration, 1);

        // Use easeInOutQuad for smoother scrolling
        const easing =
          scrollProgress < 0.5
            ? 2 * scrollProgress * scrollProgress
            : 1 - Math.pow(-2 * scrollProgress + 2, 2) / 2;

        window.scrollTo(0, startPosition + distance * easing);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }

      requestAnimationFrame(animation);
      setActiveSection(id);
    }
    setIsMenuOpen(false);
  };

  // Scroll to top function with gentler scrolling
  const scrollToTop = () => {
    const startPosition = window.pageYOffset;
    const duration = 1000; // ms
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const scrollProgress = Math.min(timeElapsed / duration, 1);

      // Use easeOutQuad for smoother scrolling
      const easing = 1 - Math.pow(1 - scrollProgress, 2);

      window.scrollTo(0, startPosition * (1 - easing));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
    setActiveSection("home");
  };

  // Handler for Get Started button - navigate to packages section
  const handleGetStarted = () => {
    scrollToSection("packages");
  };

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen overflow-x-hidden">
      {/* Navigation bar with expanded options */}
      <nav
        className={`${
          scrollPosition > 50
            ? "py-2 bg-white/95 backdrop-blur-sm"
            : "py-4 bg-white"
        } shadow-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      >
        {/* Updated container with better responsiveness for larger screens */}
        <div className="mx-auto px-4 lg:px-8 max-w-full">
          <div className="flex justify-between items-center">
            {/* Logo and Back Button */}
            <div className="flex items-center">
              <button
                onClick={() => navigate("/")}
                className="flex items-center font-medium text-indigo-600 hover:text-amber-500 transition-colors duration-300 mr-4 md:mr-6"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">Back to Home</span>
              </button>

              {/* Logo */}
              <div className="flex items-center">
                <img
                  src={logoImage}
                  alt="Lumora Ventures"
                  className="h-7 sm:h-8 xl:h-9"
                />
                <span className="ml-2 text-lg font-bold text-indigo-700 hidden sm:inline xl:text-xl">
                  Lumora Ventures
                </span>
              </div>
            </div>

            {/* Desktop Navigation - enhanced for larger screens */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-6">
              {navItems.slice(0, -1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-2 py-1 rounded-md text-sm lg:text-base transition-colors ${
                    activeSection === item.id
                      ? "text-indigo-600 font-semibold bg-indigo-50"
                      : "text-gray-700 hover:text-indigo-600 font-medium hover:bg-indigo-50/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleGetStarted}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 lg:px-5 xl:px-6 py-2 lg:py-2.5 xl:py-3 rounded-lg text-sm lg:text-base font-medium transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-indigo-600 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-full bg-white border-t border-gray-100 py-4 px-4 shadow-lg animate-fadeIn z-50">
            <div className="flex flex-col space-y-2">
              {navItems.slice(0, -1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`py-2 px-4 rounded text-left ${
                    activeSection === item.id
                      ? "text-indigo-600 font-semibold bg-indigo-50"
                      : "text-gray-700 hover:text-indigo-600 font-medium hover:bg-indigo-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleGetStarted}
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg text-sm font-medium transition-colors mt-2"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main className="pt-24 sm:pt-20 md:pt-20">
        <div id="home">
          <Header />
        </div>

        {/* Curved section divider */}
        <div className="relative h-16">
          <div className="absolute left-0 right-0 h-16 bg-indigo-700 -top-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="absolute bottom-0 w-full h-16"
            >
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,202.7C960,181,1056,139,1152,138.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>
        </div>

        {/* About GBP Section */}
        <div id="whatIsGBP">
          <WhatIsGBP />
        </div>

        {/* Why GBP Matters Section */}
        <div id="whyGBP">
          <WhyGBPCrucial />
        </div>

        {/* Why Choose Us Section - Pass the navigation function */}
        <div id="whyChoose">
          <WhyChooseLumora onNavClick={scrollToSection} />
        </div>

        {/* Services/Packages Section */}
        <div id="packages">
          <Packages />
        </div>

        {/* FAQ Section */}
        <div id="faq">
          <FAQSection />
        </div>
      </main>

      {/* Contact Section */}
      <div id="contact">
        <Footer onNavClick={scrollToSection} />
      </div>

      {/* Scroll to top button - slightly larger on bigger screens */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 xl:bottom-8 xl:right-8 bg-indigo-600 hover:bg-indigo-700 text-white p-3 xl:p-4 rounded-full shadow-lg z-50 transition-all duration-300 transform hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="xl:w-6 xl:h-6" />
        </button>
      )}
    </div>
  );
};

export default GmbPage;
