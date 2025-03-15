import React, { useEffect, useState } from "react";
import storefrontImage from "../assets/storefront-image.png";
import backgroundImage from "../assets/header-background.jpg";
import { useTheme } from "./Theme";

const Header = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(12, 26, 75, 0.92), rgba(20, 50, 150, 0.95)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `linear-gradient(to bottom right, ${theme.colors.primary}, #2A3990, ${theme.colors.primary})`,
        }}
      />

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden opacity-50">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 animate-float"
            style={{
              width: `${Math.random() * 3 + 1}rem`,
              height: `${Math.random() * 3 + 1}rem`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: "#F0F8FF", // Alice Blue
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 5 + 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-[90rem] pt-24 pb-32 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-16">
          {/* Text Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <div
              className="flex items-center gap-4 px-4 py-2 rounded-full max-w-max"
              style={{ backgroundColor: `${theme.colors.primary}CC` }}
            >
              <div
                className="w-3 h-3 rounded-full animate-pulse"
                style={{ backgroundColor: theme.colors.secondary }}
              />
              <span
                className="text-sm font-medium tracking-wide"
                style={{ color: theme.colors.secondary }}
              >
                Lumora Ventures
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-snug">
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

            <p className="text-xl text-blue-100 max-w-lg">
              Reach more local customers, boost your online visibility, and
              drive sales with a professionally managed Google Business Profile.
              Lumora Ventures makes it easy.
            </p>

            <button
              className="relative group px-6 py-3 rounded-lg shadow-lg transition-all duration-300 overflow-hidden"
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

          {/* Image Section */}
          <div
            className={`relative mt-12 md:mt-0 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-24"
            }`}
          >
            {/* Animated border */}
            <div
              className="absolute -inset-4 rounded-3xl blur-xl -z-10 animate-rotate"
              style={{
                backgroundImage: `linear-gradient(to bottom right, ${theme.colors.secondary}4D, ${theme.colors.primary}4D, #8B5CF64D)`,
              }}
            />

            {/* Split screen comparison image */}
            <div
              className="relative rounded-2xl shadow-2xl border-4 border-transparent overflow-hidden transition-all duration-300"
              style={{
                borderColor: "rgba(240, 248, 255, 0.1)", // Alice Blue with opacity
                transform: "perspective(1000px) rotateY(10deg)",
                transition: "transform 0.3s ease-out",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform =
                  "perspective(1000px) rotateY(0deg)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform =
                  "perspective(1000px) rotateY(10deg)")
              }
            >
              <div className="flex">
                <div className="w-1/2 relative">
                  <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-br-md">
                    BEFORE
                  </div>
                  <img
                    src={storefrontImage}
                    alt="Incomplete Google Business Profile"
                    className="w-full h-full object-cover opacity-70 grayscale"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-xs p-2">
                    Incomplete listing • Poor visibility • Few customers
                  </div>
                </div>
                <div className="w-1/2 relative">
                  <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-bl-md">
                    AFTER
                  </div>
                  <img
                    src={storefrontImage}
                    alt="Optimized Google Business Profile"
                    className="w-full h-full object-cover brightness-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-xs p-2">
                    Optimized listing • High visibility • More customers
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div
              className="absolute -bottom-8 -right-8 backdrop-blur-lg p-4 rounded-lg shadow-xl space-y-2 animate-float-slow"
              style={{ backgroundColor: "rgba(240, 248, 255, 0.9)" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <div
                  className="text-sm font-medium"
                  style={{ color: theme.colors.text.primary }}
                >
                  70% of Customers Check GBP First
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full animate-pulse"
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

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-24 md:bottom-28 lg:bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-xs text-blue-100 mb-2">Scroll to explore</div>
          <div className="w-6 h-10 relative">
            <div className="absolute inset-0 border-2 border-blue-100 rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1.5 h-3 bg-blue-100 rounded-full animate-bounce-slow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
