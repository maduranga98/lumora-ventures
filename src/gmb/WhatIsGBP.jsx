import React, { useState, useEffect } from "react";
import gbpScreenshot from "../assets/gbp-screenshot.jpg";
import { useTheme } from "./Theme";

const WhatIsGBP = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  // Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    const section = document.getElementById("whatIsGBP");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="whatIsGBP"
      className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-white"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-3 transform hover:scale-105 transition-transform duration-300"
            style={{
              backgroundColor: `${theme.colors.primary}20`,
              color: theme.colors.primary,
            }}
          >
            SIMPLE EXPLANATION
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: theme.colors.text.primary }}
          >
            Understanding Google Business Profile: Your Free Business Listing
            Powerhouse
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 xl:gap-16">
          <div
            className={`flex-1 space-y-6 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <p
              className="text-xl leading-relaxed"
              style={{ color: theme.colors.text.secondary }}
            >
              Think of Google Business Profile as your enhanced online business
              card, but on Google! It's a free tool that lets you control how
              your business appears on Google Search and Maps when customers are
              looking for businesses like yours.
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ color: theme.colors.text.secondary }}
            >
              When someone searches "coffee shop near me" or your business name,
              your GBP shows your location, contact info, hours, photos,
              reviews, and more. If you want to be found locally, GBP is
              essential.
            </p>

            <div
              className="p-6 rounded-lg border-l-4 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition duration-300"
              style={{
                backgroundColor: `${theme.colors.primary}10`,
                borderColor: theme.colors.primary,
                boxShadow: theme.shadows.sm,
              }}
            >
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: theme.colors.primary }}
              >
                What GBP Includes
              </h3>
              <ul className="space-y-3">
                {[
                  "Your business name, address, phone number, and website",
                  "Photos of your business, products, and services",
                  "Customer reviews and your responses to them",
                  "Posts and updates about offers, events, and news",
                  "Questions & answers from potential customers",
                  "Business hours, including holiday schedules",
                ].map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-start transition-all duration-300 delay-${
                      index * 100
                    } ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-5"
                    }`}
                  >
                    <span
                      className="mr-2 transition-transform duration-300 hover:scale-125"
                      style={{ color: theme.colors.primary }}
                    >
                      •
                    </span>
                    <span style={{ color: theme.colors.text.secondary }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className={`flex-1 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Main GBP Screenshot */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h4 className="text-sm font-medium text-gray-500 mb-3">
                  Here's what customers see when they find you on Google:
                </h4>
                <img
                  src={gbpScreenshot}
                  alt="Sample Google Business Profile listing"
                  className="rounded-lg max-w-full h-auto z-10 relative transition-all duration-500 hover:scale-[1.02]"
                  style={{
                    border: "1px solid #E5E7EB",
                    boxShadow: theme.shadows.md,
                  }}
                />
              </div>

              {/* Statistics Cards */}
              <div
                className={`absolute -bottom-5 -right-5 rounded-lg py-3 px-4 z-30 transition-all duration-500 delay-500 hover:shadow-lg ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  backgroundColor: "white",
                  boxShadow: theme.shadows.md,
                }}
              >
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-2 animate-pulse"
                      style={{ backgroundColor: theme.colors.secondary }}
                    ></div>
                    <span
                      className="font-medium text-sm"
                      style={{ color: theme.colors.text.primary }}
                    >
                      84% of consumers use Google to find local businesses
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-2 animate-pulse"
                      style={{ backgroundColor: theme.colors.primary }}
                    ></div>
                    <span
                      className="font-medium text-sm"
                      style={{ color: theme.colors.text.primary }}
                    >
                      64% check Google reviews before visiting
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simplified Call-to-Action */}
        <div
          className={`mt-12 bg-gray-50 rounded-xl p-6 text-center transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3
            className="text-xl font-bold mb-3"
            style={{ color: theme.colors.text.primary }}
          >
            Did you know?
          </h3>
          <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
            Businesses with complete Google Business Profiles get{" "}
            <span className="font-bold">7x more clicks</span> than those with
            incomplete listings, and are{" "}
            <span className="font-bold">70% more likely</span> to attract
            location visits.
          </p>
          <button
            className="px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            style={{
              backgroundColor: theme.colors.secondary,
              color: "#fff",
            }}
          >
            Get Your Business Profile Optimized
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatIsGBP;
