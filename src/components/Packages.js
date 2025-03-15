import React, { useState } from "react";
import "../App.css";
import {
  Building2,
  Share2,
  Scissors,
  Check,
  ArrowRight,
  Sparkle,
} from "lucide-react";

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
      gradient: "from-[#3D52A2]/20 to-[#7291E6]/20",
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
      gradient: "from-[#3D52A2]/30 to-[#7291E6]/30",
      featured: true,
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
      gradient: "from-[#7291E6]/20 to-[#3D52A2]/20",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#EEE8F5] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#EEE8F5] to-[#F5EEF8]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #3D52A2 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-0 w-72 h-72 lg:w-96 lg:h-96 bg-[#AEBBDB]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 lg:w-96 lg:h-96 bg-[#AEBBDB]/30 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-start min-h-screen py-16 sm:py-20 md:py-24 lg:py-32">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="inline-flex items-center space-x-3 mb-6">
              <Sparkle className="w-6 h-6 text-[#3D52A2] animate-spin-slow" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D52A2]">
                Our Packages
              </h2>
              <Sparkle className="w-6 h-6 text-[#3D52A2] animate-spin-slow" />
            </div>
            <p className="text-lg sm:text-xl text-slate-700 max-w-2xl mx-auto">
              Choose the perfect solution for your business
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8"
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`relative h-full bg-gradient-to-br ${pkg.gradient} 
                           backdrop-blur-lg rounded-xl p-1 transition-all duration-300 
                           ${
                             hoveredCard === index
                               ? "scale-105 shadow-2xl"
                               : "shadow-xl"
                           }`}
                >
                  <div className="relative h-full bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden">
                    {pkg.featured && (
                      <div className="absolute top-5 right-5">
                        <span
                          className="inline-flex items-center px-4 py-1.5 rounded-full text-sm 
                                     font-medium bg-[#3D52A2]/10 text-[#3D52A2]"
                        >
                          Popular Choice
                        </span>
                      </div>
                    )}

                    <div className="px-6 py-8">
                      <div
                        className={`flex items-center justify-center h-16 w-16 rounded-xl 
                                bg-gradient-to-r from-[#3D52A2] to-[#7291E6] mx-auto 
                                transform transition-transform duration-300 
                                ${hoveredCard === index ? "scale-110" : ""}`}
                      >
                        <pkg.icon className="h-8 w-8 text-white" />
                      </div>

                      <h3 className="mt-6 text-center text-2xl font-bold text-[#3D52A2]">
                        {pkg.title}
                      </h3>

                      <div className="mt-6 flex justify-center items-baseline">
                        <span
                          className="text-5xl font-extrabold bg-gradient-to-r 
                                     from-[#3D52A2] to-[#7291E6] bg-clip-text text-transparent"
                        >
                          ${pkg.price}
                        </span>
                        <span className="ml-2 text-xl text-slate-600">
                          /{pkg.period}
                        </span>
                      </div>

                      {pkg.yearlyPrice && (
                        <p className="mt-2 text-center text-sm text-slate-600">
                          or ${pkg.yearlyPrice}/year
                        </p>
                      )}

                      <ul className="mt-8 space-y-4">
                        {pkg.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start group"
                          >
                            <div className="flex-shrink-0 w-5">
                              <Check
                                className="h-5 w-5 text-[#3D52A2] 
                                            group-hover:scale-110 transition-transform"
                              />
                            </div>
                            <span
                              className="ml-3 text-slate-700 group-hover:text-slate-900 
                                         transition-colors"
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="px-6 py-8 bg-gradient-to-br from-[#EEE8F5]/50 to-white/50">
                      <button
                        onClick={() => onNavClick("contact")}
                        className="group relative w-full"
                      >
                        <div
                          className="absolute -inset-0.5 bg-gradient-to-r from-[#3D52A2] to-[#7291E6] 
                                    rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500"
                        ></div>
                        <div
                          className="relative flex items-center justify-center w-full 
                                    bg-gradient-to-r from-[#3D52A2] to-[#7291E6] 
                                    py-3 px-4 rounded-lg"
                        >
                          <span className="text-white font-semibold">
                            {pkg.cta}
                          </span>
                          <ArrowRight
                            className="ml-2 h-5 w-5 text-white 
                                             group-hover:translate-x-1 transition-transform"
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
