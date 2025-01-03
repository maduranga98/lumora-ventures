import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import heroImage from "../assets/hero-image.png";

const Hero = ({ onNavClick }) => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;
        if (isVisible) {
          element.classList.add("animate-in");
        }
      });
    };

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll();
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block mb-2 animate-fadeIn">Illuminating</span>
              <span className="block text-indigo-600 animate-slideUp">
                Pathways to Innovation
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 animate-fadeIn delay-300">
              Transforming Businesses with Cutting-Edge Solutions
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => onNavClick("packages")}
                className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300"
              >
                Explore Our Packages
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavClick("services")}
                className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-indigo-600 bg-white border-2 border-indigo-600 hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300"
              >
                Discover Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative animate-on-scroll opacity-0 translate-x-8 transition-all duration-1000 ease-out">
            <div className="relative mx-auto max-w-lg">
              <div className="w-full h-64 bg-gray-900 md:h-72 lg:h-80 rounded-xl shadow-2xl ring-1 ring-white/10 overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <img
                  src={heroImage}
                  alt="Lumora Services Diagram"
                  className="w-full h-full object-contain p-4"
                  style={{
                    maxWidth: "600px",
                    maxHeight: "480px",
                    margin: "0 auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
