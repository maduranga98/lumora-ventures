import React, { useState, useEffect } from "react";
import { useTheme } from "./Theme";
import {
  Clock,
  BarChart2,
  Users,
  CheckSquare,
  Award,
  Briefcase,
  CheckCircle,
} from "lucide-react";

const WhyChooseLumora = ({ onNavClick }) => {
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

    const section = document.getElementById("whyChooseLumora");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Handle navigation to packages/services section
  const navigateToServices = () => {
    if (onNavClick) {
      onNavClick("packages");
    } else {
      // Fallback if onNavClick isn't provided
      const packagesSection = document.getElementById("packages");
      if (packagesSection) {
        const navbarHeight = 64;
        const elementPosition = packagesSection.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  // Key selling points
  const sellingPoints = [
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Expertise & Experience",
      description:
        "Our team are Google Business Profile specialists with years of digital marketing experience. We know what works.",
      delay: 100,
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Proven Results",
      description:
        "We have a track record of helping businesses like yours improve their local search rankings and attract more customers.",
      delay: 200,
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Save Time & Effort",
      description:
        "Managing GBP can be time-consuming. Let us handle the complexities so you can focus on running your business.",
      delay: 300,
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Data-Driven Strategies",
      description:
        "We use analytics and best practices to continuously optimize your GBP for maximum performance.",
      delay: 400,
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Personalized Service",
      description:
        "We tailor our approach to your specific business needs and goals. You're not just another number to us.",
      delay: 500,
    },
    {
      icon: <CheckSquare className="h-8 w-8" />,
      title: "Comprehensive Service Suite",
      description:
        "From initial setup to ongoing management, we offer everything you need for GBP success.",
      delay: 600,
    },
  ];

  return (
    <section
      id="whyChooseLumora"
      className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-3"
            style={{
              backgroundColor: `${theme.colors.primary}20`,
              color: theme.colors.primary,
            }}
          >
            YOUR GBP PARTNER
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: theme.colors.text.primary }}
          >
            Stop Struggling with GBP - Let Lumora Ventures Take the Lead
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We Make Google Business Profile Management Simple, Effective, and
            Results-Driven.
          </p>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left side - Expert image and service guarantees */}
          <div className="w-full lg:w-2/5">
            <div
              className={`relative rounded-xl overflow-hidden shadow-md transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              {/* Expert team image placeholder - replace with actual team image */}
              <div className="aspect-w-16 aspect-h-9 w-full bg-gray-100">
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="mb-4">
                    <Briefcase
                      className="h-16 w-16"
                      style={{ color: theme.colors.primary }}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    Our Expert Team
                  </h3>
                  <p className="text-gray-600">
                    GBP specialists with deep local search experience
                  </p>
                </div>
              </div>
            </div>

            {/* Service guarantees */}
            <div
              className={`mt-8 bg-gray-50 p-6 rounded-xl shadow-sm transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: theme.colors.text.primary }}
              >
                Our Service Guarantees
              </h3>
              <ul className="space-y-4">
                {[
                  "Dedicated account manager for personalized support",
                  "100% transparent reporting and communication",
                  "Regular optimization updates based on performance",
                  "Quick response times (24 hours or less)",
                  "No long-term contracts - stay because you want to",
                  "Satisfaction guarantee or your money back",
                ].map((guarantee, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle
                      className="h-5 w-5 mr-3 flex-shrink-0"
                      style={{ color: theme.colors.secondary }}
                    />
                    <span className="text-gray-700">{guarantee}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process preview */}
            <div
              className={`mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: theme.colors.text.primary }}
              >
                Our Simple Process
              </h3>

              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Discovery",
                    description:
                      "We learn about your business goals and current GBP situation",
                  },
                  {
                    step: "2",
                    title: "Setup & Optimization",
                    description:
                      "We implement best practices to maximize your visibility",
                  },
                  {
                    step: "3",
                    title: "Ongoing Management",
                    description:
                      "We maintain and continuously improve your GBP presence",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0"
                      style={{ backgroundColor: theme.colors.primary }}
                    >
                      {step.step}
                    </div>
                    <div>
                      <h4
                        className="font-semibold"
                        style={{ color: theme.colors.text.primary }}
                      >
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Selling points */}
          <div className="w-full lg:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sellingPoints.map((point, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-1 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: `${point.delay}ms`,
                    borderLeft: `4px solid ${
                      index % 3 === 0
                        ? theme.colors.primary
                        : index % 3 === 1
                        ? theme.colors.secondary
                        : "#4A90E2"
                    }`,
                  }}
                >
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
                    style={{ backgroundColor: `${theme.colors.primary}15` }}
                  >
                    <div style={{ color: theme.colors.primary }}>
                      {point.icon}
                    </div>
                  </div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: theme.colors.text.primary }}
                  >
                    {point.title}
                  </h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div
              className={`mt-10 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm transition-all duration-700 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0 md:pr-4">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: theme.colors.text.primary }}
                  >
                    Ready to maximize your local presence?
                  </h3>
                  <p className="text-gray-600">
                    Let our experts handle your Google Business Profile so you
                    can focus on running your business.
                  </p>
                </div>
                <button
                  onClick={navigateToServices}
                  className="px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg min-w-[200px]"
                  style={{
                    backgroundColor: theme.colors.secondary,
                    color: "#fff",
                  }}
                >
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseLumora;
