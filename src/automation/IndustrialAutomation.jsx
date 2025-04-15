// src/automation/AutomationHomePage.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import HomePage from "./HomePage";
import AutomationControlPage from "./IdustrialAutomation";
import RDDevelopmentPage from "./RDDevelopmentPage";
import MaintenanceAgreementsPage from "./MaintenanceAgreementsPage";
import ContactPage from "./ContactPage";
import Footer from "../components/Footer";
import logo from "../assets/logo.webp";

// Navbar Component with scroll functionality
const AutomationNavbar = ({ activeSection, scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll to add background opacity when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Log to confirm the function is being called
    console.log("Mobile menu toggled:", !mobileMenuOpen);
  };

  const handleNavClick = (section) => {
    scrollToSection(section);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`${
        scrolled ? "bg-gray-900/95" : "bg-gray-900"
      } backdrop-blur-lg border-b border-gray-700/50 fixed w-full z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 2xl:h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Lumora Ventures Logo"
                className="h-6 w-auto mr-1 md:h-8 2xl:h-10"
              />
              <span className="text-sm sm:text-base md:text-xl 2xl:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 truncate">
                Lumora Ventures
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4 2xl:space-x-6">
            {["home", "automation", "r&D", "maintenance", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className={`px-2 py-1 rounded-lg text-xs lg:text-sm 2xl:text-lg font-medium transition-all ${
                    activeSection === section
                      ? "bg-gray-700/50 text-cyan-400"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-gray-700/30"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              )
            )}
            <Link
              to="/"
              className="px-2 py-1 rounded-lg text-xs lg:text-sm 2xl:text-lg font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-700/30 transition-all"
            >
              Main
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="p-1 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-700/30"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="container mx-auto px-4 pt-2 pb-3 space-y-1 bg-gray-800/80 backdrop-blur-lg">
          {["home", "automation", "r&D", "maintenance", "contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === section
                    ? "bg-gray-700/50 text-cyan-400"
                    : "text-gray-300 hover:text-cyan-400 hover:bg-gray-700/30"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            )
          )}
          <Link
            to="/"
            className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-700/30 transition-colors"
          >
            Main Site
          </Link>
        </div>
      </div>
    </nav>
  );
};

// Section Wrapper Component with improved responsive padding
const SectionWrapper = ({ id, children, className = "" }) => {
  return (
    <motion.section
      id={id}
      className={`py-12 sm:py-16 md:py-24 2xl:py-32 scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24 2xl:scroll-mt-32 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        {children}
      </div>
    </motion.section>
  );
};

// Main Automation HomePage Component
const AutomationHomePage = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate header height dynamically based on viewport
      let headerOffset = 64;

      if (window.innerWidth >= 768) {
        headerOffset = 96;
      }

      if (window.innerWidth >= 1536) {
        // 2xl breakpoint
        headerOffset = 112;
      }

      window.scrollTo({
        top: element.offsetTop - headerOffset,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  // Intersection Observer setup with responsive adjustments
  useEffect(() => {
    const getObserverMargin = () => {
      if (window.innerWidth >= 1536) {
        // 2xl
        return "-25% 0px -25% 0px";
      } else if (window.innerWidth >= 768) {
        // md
        return "-20% 0px -20% 0px";
      } else {
        return "-10% 0px -10% 0px";
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: getObserverMargin(),
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = ["home", "automation", "r&D", "maintenance", "contact"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    // Update observer on window resize
    const handleResize = () => {
      observer.disconnect();
      const newObserver = new IntersectionObserver(observerCallback, {
        root: null,
        rootMargin: getObserverMargin(),
        threshold: 0.1,
      });

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) newObserver.observe(element);
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      <Helmet>
        <title>Industrial Automation Solutions | Lumora Ventures</title>
        <meta
          name="description"
          content="Discover Lumora Ventures' comprehensive industrial automation solutions including control systems, HMI & VFD programming, panel wiring, R&D, and maintenance services. Optimize your operations today!"
        />
      </Helmet>

      <AutomationNavbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <div>
        {/* Home/Overview Section */}
        <SectionWrapper id="home">
          <HomePage />
        </SectionWrapper>

        {/* Automation & Control Section with more responsive padding */}
        <SectionWrapper id="automation" className="border-t border-gray-700/50">
          <div className="mb-6 sm:mb-10 md:mb-16 2xl:mb-20">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-white mb-3 md:mb-4 2xl:mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Industrial Automation & Control
              <div className="w-12 sm:w-16 md:w-20 2xl:w-28 h-1 2xl:h-2 bg-gradient-to-r from-cyan-400 to-blue-500 mt-2 sm:mt-3 md:mt-4 2xl:mt-5" />
            </motion.h2>
          </div>
          <AutomationControlPage />
        </SectionWrapper>

        {/* R&D Development Section with more responsive padding */}
        <SectionWrapper id="r&D" className="border-t border-gray-700/50">
          <div className="mb-6 sm:mb-10 md:mb-16 2xl:mb-20">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-white mb-3 md:mb-4 2xl:mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              R&D Development
              <div className="w-12 sm:w-16 md:w-20 2xl:w-28 h-1 2xl:h-2 bg-gradient-to-r from-cyan-400 to-blue-500 mt-2 sm:mt-3 md:mt-4 2xl:mt-5" />
            </motion.h2>
          </div>
          <RDDevelopmentPage />
        </SectionWrapper>

        {/* Maintenance Agreements Section with more responsive padding */}
        <SectionWrapper
          id="maintenance"
          className="border-t border-gray-700/50"
        >
          <div className="mb-6 sm:mb-10 md:mb-16 2xl:mb-20">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-white mb-3 md:mb-4 2xl:mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Maintenance Solutions
              <div className="w-12 sm:w-16 md:w-20 2xl:w-28 h-1 2xl:h-2 bg-gradient-to-r from-cyan-400 to-blue-500 mt-2 sm:mt-3 md:mt-4 2xl:mt-5" />
            </motion.h2>
          </div>
          <MaintenanceAgreementsPage />
        </SectionWrapper>

        {/* Contact Section with more responsive padding */}
        <SectionWrapper id="contact" className="border-t border-gray-700/50">
          <div className="mb-6 sm:mb-10 md:mb-16 2xl:mb-20">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-white mb-3 md:mb-4 2xl:mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Contact Us
              <div className="w-12 sm:w-16 md:w-20 2xl:w-28 h-1 2xl:h-2 bg-gradient-to-r from-cyan-400 to-blue-500 mt-2 sm:mt-3 md:mt-4 2xl:mt-5" />
            </motion.h2>
          </div>
          <ContactPage />
        </SectionWrapper>
      </div>

      <Footer />

      {/* Scroll to top button with conditional rendering and animations */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={() => scrollToSection("home")}
            className="fixed bottom-4 sm:bottom-6 right-6 sm:right-10 p-3 sm:p-4 bg-gray-800/50 backdrop-blur-lg text-cyan-400 rounded-xl shadow-2xl hover:bg-cyan-500/10 border border-cyan-400/20 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            aria-label="Scroll to top"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-8 2xl:h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AutomationHomePage;
