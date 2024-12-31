import React from "react";
import { Building2, Share2, Sparkles, ArrowRight } from "lucide-react";

const Overview = ({ onNavClick }) => {
  const highlights = [
    {
      title: "Google My Business Management",
      icon: Building2,
      description: "Optimize your online presence and local visibility",
    },
    {
      title: "Social Media Marketing",
      icon: Share2,
      description: "Engage your audience across multiple platforms",
    },
    {
      title: "Salon Management System",
      icon: Sparkles,
      description: "Streamline your salon operations efficiently",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-on-scroll opacity-0 translate-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Overview
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
            At Lumora Ventures, we empower businesses to reach their full
            potential. Our innovative solutions span across marketing,
            management, and technology to drive your growth.
          </p>
        </div>

        <div className="mt-16 lg:mt-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="group h-full bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <highlight.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="mt-6 text-xl font-semibold text-gray-900">
                      {highlight.title}
                    </h3>
                    <p className="mt-4 text-gray-600">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 lg:mt-20 text-center animate-on-scroll opacity-0 translate-y-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => onNavClick("about")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavClick("contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-indigo-600 bg-white border-2 border-indigo-600 hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
