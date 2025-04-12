// src/automation/AutomationHomePage.js
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (section) => {
    scrollToSection(section);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-700/50 fixed w-full z-50">
      <div className="max-w-full mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Lumora Ventures Logo"
                className="h-8 w-auto mr-2"
              />

              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Lumora Ventures
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {["home", "automation", "rd", "maintenance", "contact"].map(
              (section) => (
                <motion.button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === section
                      ? "bg-gray-700/50 text-cyan-400"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-gray-700/30"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.button>
              )
            )}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/"
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-700/30 transition-all"
              >
                Main Site
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-700/30"
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-4 pt-2 pb-4 space-y-1 bg-gray-800/50 backdrop-blur-lg">
          {["home", "automation", "rd", "maintenance", "contact"].map(
            (section) => (
              <motion.button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  activeSection === section
                    ? "bg-gray-700/50 text-cyan-400"
                    : "text-gray-300 hover:text-cyan-400 hover:bg-gray-700/30"
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            )
          )}
          <motion.div whileTap={{ scale: 0.98 }}>
            <Link
              to="/"
              className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-700/30 transition-colors"
            >
              Main Site
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

// Section Wrapper Component
const SectionWrapper = ({ id, children, className = "" }) => {
  return (
    <motion.section
      id={id}
      className={`py-24 scroll-mt-24 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-full mx-auto px-4">{children}</div>
    </motion.section>
  );
};

// Main Automation HomePage Component
const AutomationHomePage = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 96, // Adjusted for navbar height
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  // Intersection Observer setup
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
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

    const sections = ["home", "automation", "rd", "maintenance", "contact"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
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

        {/* Automation & Control Section */}
        <SectionWrapper id="automation" className="border-t border-gray-700/50">
          <div className="mb-16">
            <motion.h2
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Industrial Automation & Control
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mt-4" />
            </motion.h2>
          </div>
          <AutomationControlPage />
        </SectionWrapper>

        {/* R&D Development Section */}
        <SectionWrapper id="rd" className="border-t border-gray-700/50">
          <div className="mb-16">
            <motion.h2
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              R&D Development
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mt-4" />
            </motion.h2>
          </div>
          <RDDevelopmentPage />
        </SectionWrapper>

        {/* Maintenance Agreements Section */}
        <SectionWrapper
          id="maintenance"
          className="border-t border-gray-700/50"
        >
          <div className="mb-16">
            <motion.h2
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Maintenance Solutions
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mt-4" />
            </motion.h2>
          </div>
          <MaintenanceAgreementsPage />
        </SectionWrapper>

        {/* Contact Section */}
        <SectionWrapper id="contact" className="border-t border-gray-700/50">
          <div className="mb-16">
            <motion.h2
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Contact Us
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mt-4" />
            </motion.h2>
          </div>
          <ContactPage />
        </SectionWrapper>
      </div>

      <Footer />

      {/* Scroll to top button */}
      <motion.button
        onClick={() => scrollToSection("home")}
        className="fixed bottom-8 right-8 p-4 bg-gray-800/50 backdrop-blur-lg text-cyan-400 rounded-xl shadow-2xl hover:bg-cyan-500/10 border border-cyan-400/20 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6"
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
    </div>
  );
};

export default AutomationHomePage;
