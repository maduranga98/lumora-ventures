import React, { useEffect } from "react";
import { Building2, Share2, Sparkles, ArrowRight } from "lucide-react";
import "../App.css";

const Overview = ({ onNavClick }) => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          element.classList.add("animate-in");
        }
      });
    };

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll();
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  const highlights = [
    {
      title: "Google My Business Management",
      icon: Building2,
      description:
        "Optimize your online presence and local visibility with our comprehensive GMB management services. We help you improve local SEO, manage reviews, and maintain accurate business information.",
    },
    {
      title: "Salon Management System",
      icon: Sparkles,
      description:
        "Streamline your salon operations with our modern management system. Handle appointments, inventory, staff scheduling, and customer relationships all in one integrated platform.",
    },
    {
      title: "Social Media Marketing",
      icon: Share2,
      description:
        "Boost your brand presence with strategic social media marketing. We create engaging content, manage campaigns, and drive meaningful engagement across all major platforms.",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#F8FAFF] overflow-hidden animate-fade-in">
      {/* Background Elements with animations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFF] to-[#F0F4FF] animate-pulse-slower" />
        <div
          className="absolute inset-0 opacity-15 animate-pulse-slow"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #09122C 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute top-0 right-0 w-72 h-72 lg:w-96 lg:h-96 bg-[#09122C]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-72 h-72 lg:w-96 lg:h-96 bg-[#ECAF41]/20 rounded-full blur-3xl animate-float delay-300" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-start min-h-screen py-16 sm:py-20 md:py-24 lg:py-32">
          {/* Header with animations */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#09122C] mb-6">
              Our Services
            </h2>
            <p className="text-lg sm:text-xl text-[#09122C]/90 max-w-2xl mx-auto">
              At Lumora Ventures, we empower businesses to reach their full
              potential. Our innovative solutions span across marketing,
              management, and technology to drive your growth.
            </p>
          </div>

          {/* Service Cards Grid with staggered animations */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full mb-16 sm:mb-20">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`h-96 flip-card-container animate-on-scroll ${
                  highlight.title === "Salon Management System"
                    ? "lg:col-start-2"
                    : ""
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flip-card">
                  {/* Front Side - Keeping your original content structure */}
                  <div className="flip-card-front">
                    <div
                      className="h-full bg-white/95 backdrop-blur-sm rounded-xl p-8 
                      flex flex-col items-center justify-center text-center 
                      shadow-lg border-2 border-white/80"
                    >
                      <span
                        className="inline-flex items-center justify-center p-4 
                         bg-gradient-to-r from-[#09122C] to-[#1A2A5F] 
                         rounded-xl shadow-lg animate-bounce-subtle"
                      >
                        <highlight.icon
                          className="h-8 w-8 text-[#ECAF41]"
                          aria-hidden="true"
                        />
                      </span>
                      <h3 className="mt-6 text-2xl font-semibold text-[#09122C]">
                        {highlight.title}
                      </h3>
                    </div>
                  </div>

                  {/* Back Side - Keeping your original content structure */}
                  <div className="flip-card-back">
                    <div
                      className="h-full bg-gradient-to-br from-[#09122C] to-[#ECAF41] 
                      rounded-xl p-8 flex flex-col items-center justify-center 
                      text-center shadow-lg"
                    >
                      <p className="text-white text-lg leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Buttons with animations */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-on-scroll animate-slide-up">
            <button
              onClick={() => onNavClick("about")}
              className="button-animated w-full sm:w-auto inline-flex items-center justify-center 
                       px-8 py-4 text-base font-semibold rounded-full text-[#09122C]
                       bg-gradient-to-r from-[#ECAF41] to-[#F5C15D] 
                       hover:from-[#F5C15D] hover:to-[#ECAF41]
                       transform hover:scale-105 transition-all duration-300
                       shadow-lg shadow-[#ECAF41]/20 hover:shadow-[#ECAF41]/30
                       border-2 border-[#ECAF41]"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => onNavClick("contact")}
              className="button-animated w-full sm:w-auto inline-flex items-center justify-center 
                       px-8 py-4 text-base font-semibold rounded-full text-[#09122C]
                       bg-white/95 backdrop-blur-sm border-2 border-[#09122C]
                       hover:bg-[#09122C]/10 transform hover:scale-105 
                       transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
