import React, { useEffect, useState } from "react";
import storefrontImage from "../assets/storefront-image.webp";
import backgroundImage from "../assets/header-background.webp";
import { useTheme } from "./Theme";
import ContactForm from "../widgets/ContactForm";

const Header = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);

    // Handle responsive detection
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(12, 26, 75, 0.92), rgba(20, 50, 150, 0.95)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: isMobile ? "scroll" : "fixed", // Fix for mobile
      }}
    >
      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `linear-gradient(to bottom right, ${theme.colors.primary}, #2A3990, ${theme.colors.primary})`,
        }}
      />

      {/* Floating particles animation - reduced for mobile */}
      <div className="absolute inset-0 overflow-hidden opacity-50">
        {[...Array(isMobile ? 5 : 15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 animate-float"
            style={{
              width: `${Math.random() * (isMobile ? 1.5 : 3) + 1}rem`,
              height: `${Math.random() * (isMobile ? 1.5 : 3) + 1}rem`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: "#F0F8FF", // Alice Blue
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 5 + 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-[90rem] pt-16 pb-24 md:pt-24 md:pb-32 lg:py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-12 xl:gap-16">
          {/* Text Content */}
          <div
            className={`space-y-6 md:space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <div
              className="flex items-center gap-3 px-3 py-1.5 rounded-full max-w-max"
              style={{ backgroundColor: `${theme.colors.primary}CC` }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full animate-pulse"
                style={{ backgroundColor: theme.colors.secondary }}
              />
              <span
                className="text-xs md:text-sm font-medium tracking-wide"
                style={{ color: theme.colors.secondary }}
              >
                Lumora Ventures
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-snug">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${theme.colors.secondary}, #F8D080)`,
                }}
              >
                Is Your Business Showing Up
              </span>
              <br />
              <span className="text-white">Where Customers Are Searching?</span>
            </h1>

            <p className="text-base md:text-xl text-blue-100 max-w-lg">
              Reach more local customers, boost your online visibility, and
              drive sales with a professionally managed Google Business Profile.
              Lumora Ventures makes it easy.
            </p>

            <button
              onClick={() => setShowContactForm(true)}
              className="relative group px-5 py-2.5 md:px-6 md:py-3 rounded-lg shadow-lg transition-all duration-300 overflow-hidden w-full sm:w-auto"
              style={{ backgroundColor: theme.colors.secondary }}
            >
              <span
                className="relative z-10 font-medium"
                style={{ color: theme.colors.text.primary }}
              >
                Get a Free GBP Audit
              </span>
              <div className="absolute inset-0 bg-white opacity-20 group-hover:opacity-0 transition-opacity" />
              <div
                className="absolute -inset-1 blur-xl opacity-50 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: theme.colors.secondary }}
              />
            </button>
          </div>

          {/* Image Section - Completely redesigned for mobile */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-24"
            }`}
          >
            {/* Animated border */}
            <div
              className="absolute -inset-2 sm:-inset-4 rounded-3xl blur-xl -z-10 animate-rotate"
              style={{
                backgroundImage: `linear-gradient(to bottom right, ${theme.colors.secondary}4D, ${theme.colors.primary}4D, #8B5CF64D)`,
              }}
            />

            {/* Split screen comparison image - Mobile optimized */}
            <div
              className="relative rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border-2 md:border-4 border-transparent overflow-hidden transition-all duration-300"
              style={{
                borderColor: "rgba(240, 248, 255, 0.1)", // Alice Blue with opacity
                transform: isMobile
                  ? "none"
                  : "perspective(1000px) rotateY(5deg)",
                transition: "transform 0.3s ease-out",
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform =
                    "perspective(1000px) rotateY(0deg)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform =
                    "perspective(1000px) rotateY(5deg)";
                }
              }}
            >
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 relative">
                  <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-br-md z-10">
                    BEFORE
                  </div>
                  <img
                    src={storefrontImage}
                    alt="Incomplete Google Business Profile"
                    className="w-full object-cover opacity-70 grayscale h-48 sm:h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-xs p-2">
                    Incomplete listing • Poor visibility • Few customers
                  </div>
                </div>
                <div className="w-full sm:w-1/2 relative">
                  <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-bl-md z-10">
                    AFTER
                  </div>
                  <img
                    src={storefrontImage}
                    alt="Optimized Google Business Profile"
                    className="w-full object-cover brightness-110 h-48 sm:h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-xs p-2">
                    Optimized listing • High visibility • More customers
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats - Mobile optimized */}
            <div
              className="relative sm:absolute mt-4 sm:mt-0 sm:-bottom-8 sm:-right-8 backdrop-blur-lg p-3 sm:p-4 rounded-lg shadow-xl space-y-1.5 sm:space-y-2 animate-float-slow w-full sm:w-auto sm:max-w-none"
              style={{ backgroundColor: "rgba(240, 248, 255, 0.9)" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                <div
                  className="text-sm font-medium"
                  style={{ color: theme.colors.text.primary }}
                >
                  70% of Customers Check GBP First
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full animate-pulse"
                  style={{ backgroundColor: theme.colors.primary }}
                />
                <div
                  className="text-sm font-medium"
                  style={{ color: theme.colors.text.primary }}
                >
                  5x Higher Conversion Rate
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - Mobile optimized */}
        <div
          className={`absolute bottom-6 sm:bottom-10 md:bottom-16 lg:bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-xs text-blue-100 mb-1.5">Scroll to explore</div>
          <div className="w-5 h-8 sm:w-6 sm:h-10 relative">
            <div className="absolute inset-0 border-2 border-blue-100 rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1.5 h-2.5 bg-blue-100 rounded-full animate-bounce-slow" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Component */}
      <ContactForm
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
        theme={theme}
      />
    </section>
  );
};

export default Header;
