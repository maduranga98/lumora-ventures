import React, { useState } from "react";
import { Building2, Share2, Scissors, Check, ArrowRight } from "lucide-react";

const Packages = ({ onNavClick }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const packages = [
    {
      title: "Google My Business Management",
      price: 199,
      period: "month",
      icon: Building2,
      features: [
        "Profile Optimization",
        "Weekly Posts and Updates",
        "Review Management",
        "Performance Analytics",
      ],
      cta: "Sign Up Now",
    },
    {
      title: "Social Media Marketing",
      price: 499,
      period: "month",
      icon: Share2,
      features: [
        "Content Creation",
        "Ad Campaigns (Facebook, Instagram, LinkedIn)",
        "Audience Growth Strategies",
        "Monthly Reports",
      ],
      cta: "Get Started Today",
    },
    {
      title: "Salon Management System",
      price: 149,
      yearlyPrice: 1499,
      period: "month",
      icon: Scissors,
      features: [
        "Appointment Scheduling",
        "Inventory Tracking",
        "Staff Payroll Management",
        "Customer Feedback System",
      ],
      cta: "Revolutionize Your Salon Now",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-on-scroll opacity-0 translate-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Packages
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect solution for your business
          </p>
        </div>

        <div className="mt-16 lg:mt-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8"
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 ${
                  hoveredCard === index ? "scale-105 shadow-xl" : ""
                }`}
              >
                <div className="px-6 py-8">
                  <div
                    className={`flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-600 mx-auto transform transition-transform duration-300 ${
                      hoveredCard === index ? "scale-110" : ""
                    }`}
                  >
                    <pkg.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-6 text-center text-2xl font-bold text-gray-900">
                    {pkg.title}
                  </h3>

                  <div className="mt-4 flex justify-center items-baseline">
                    <span className="text-5xl font-extrabold text-gray-900">
                      ${pkg.price}
                    </span>
                    <span className="ml-1 text-xl text-gray-500">
                      /{pkg.period}
                    </span>
                  </div>

                  {pkg.yearlyPrice && (
                    <p className="mt-2 text-center text-sm text-gray-500">
                      or ${pkg.yearlyPrice}/year
                    </p>
                  )}

                  <ul className="mt-8 space-y-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start group">
                        <Check className="h-5 w-5 text-indigo-600 mr-2 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-6 py-8 bg-gray-50">
                  <button
                    onClick={() => onNavClick("contact")}
                    className="group flex items-center justify-center w-full bg-indigo-600 py-3 px-4 rounded-lg text-white font-medium hover:bg-indigo-700 transition-all duration-300"
                  >
                    {pkg.cta}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
