import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import heroImage from "../assets/img1.webp";

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
    <section className="relative min-h-screen bg-[#F8F9FC] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FC] to-[#F1F3F9]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #09122C 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-0 w-72 h-72 lg:w-96 lg:h-96 bg-[#09122C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 lg:w-96 lg:h-96 bg-[#ECAF41]/20 rounded-full blur-3xl" />
      </div>

      {/* Main content wrapper */}
      <div className="relative h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full gap-8 lg:gap-4 pt-28 md:pt-32 lg:pt-40 pb-12 md:pb-16 lg:pb-20">
            {/* Text content */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out w-full lg:w-[45%] text-center lg:text-left">
              <h1 className="font-bold tracking-tight">
                <div className="inline-block text-[#09122C] text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl 2xl:text-7xl">
                  Strategic Innovation
                </div>
                <div className="mt-2 lg:mt-4 bg-gradient-to-r from-[#09122C] to-[#ECAF41] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                  For Progressive Enterprises
                </div>
              </h1>

              <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-[#09122C]/90 max-w-2xl lg:max-w-3xl font-medium">
                Elevating businesses through bespoke technology solutions and
                forward-thinking digital strategies.
              </p>

              <div className="mt-8 lg:mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => onNavClick("services")}
                  className="group inline-flex items-center justify-center whitespace-nowrap rounded-lg 
                           bg-[#ECAF41] px-8 py-4 text-lg font-semibold text-[#09122C] 
                           hover:bg-[#F5C15D] transition-all duration-300
                           shadow-lg shadow-[#ECAF41]/30 hover:shadow-[#ECAF41]/40
                           transform hover:scale-105 border-2 border-[#ECAF41]/90"
                >
                  Explore Solutions
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
                </button>

                <button
                  onClick={() => onNavClick("contact")}
                  className="group inline-flex items-center justify-center whitespace-nowrap rounded-lg 
                           border-2 border-[#09122C] bg-white/95 backdrop-blur-sm px-8 py-3.5 
                           text-lg font-semibold text-[#09122C] hover:bg-[#09122C]/5
                           transition-all duration-300 shadow-md hover:shadow-lg
                           transform hover:scale-[1.02] hover:border-[#ECAF41] hover:text-[#ECAF41]"
                >
                  Contact Us
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
                </button>
              </div>
            </div>

            {/* Image container */}
            <div className="animate-on-scroll opacity-0 translate-x-8 transition-all duration-1000 ease-out w-full lg:w-[50%]">
              <div className="relative max-w-xl lg:max-w-3xl mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#09122C]/10 to-[#ECAF41]/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden backdrop-blur-sm bg-white/40 border-2 border-[#ECAF41]/20 shadow-xl">
                  <img
                    src={heroImage}
                    alt="Business Innovation"
                    className="w-full h-auto object-contain transition-all duration-500 hover:scale-[1.02]"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
