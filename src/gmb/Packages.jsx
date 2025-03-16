import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "./Theme";
import { CheckCircle, Star, Zap, Calendar, BarChart2 } from "lucide-react";
import ContactForm from "../widgets/ContactForm";

const Packages = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false); // State for contact form modal

  // Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("packages");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Initial setup features
  const setupFeatures = [
    "Google Business Profile creation",
    "Claiming of pre-existing profile",
    "Profile verification",
    "Profile enhancement and optimization",
    "Photos and logo uploaded",
    "Professional business description",
    "Proper categorization and subcategorization",
    "Links to your website and appointment form",
    "A competitive online presence analysis",
    "GMB Management",
    "Q&A Management",
    "Product & Service Management",
  ];

  // Monthly service features
  const monthlyFeatures = [
    "Weekly promotional posts",
    "New products or service listings",
    "New Questions and Answers",
    "Review Responses",
    "Image and Video Uploads",
    "Moves, adds, and edits",
    "Profile Monitoring",
    "Competitor Spam Sweep",
    "Geogrid Keyword Ranking Report",
    "Monthly Performance Report",
    "On-demand Reporting Dashboard",
    "GBP Scorecard Updates",
  ];

  const handleGetStarted = () => {
    // Navigate to checkout page with package data
    navigate("/checkout", {
      state: {
        packageData: {
          name: "Professional GBP Management",
          price: 150,
          billingPeriod: "month",
        },
      },
    });
  };

  // Handle consultation button click
  const handleConsultationClick = () => {
    setShowContactForm(true);
  };

  return (
    <section
      id="packages"
      className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-3"
            style={{
              backgroundColor: `${theme.colors.primary}15`,
              color: theme.colors.primary,
            }}
          >
            COMPREHENSIVE SERVICE
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: theme.colors.text.primary }}
          >
            Complete Google Business Profile Management
          </h2>
          <p className="text-lg" style={{ color: theme.colors.text.secondary }}>
            One simple service that handles every aspect of your Google Business
            Profile to maximize your local visibility and attract more
            customers.
          </p>
        </div>

        {/* Price Card */}
        <div
          className={`max-w-lg mx-auto mb-16 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className="rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
            style={{ boxShadow: theme.shadows.lg }}
          >
            {/* Top banner */}
            <div
              className="py-4 px-6 text-center"
              style={{ backgroundColor: theme.colors.secondary }}
            >
              <div className="flex justify-center items-center gap-2 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FFF" className="text-white" />
                ))}
              </div>
              <p
                className="text-sm font-medium"
                style={{ color: theme.colors.text.primary }}
              >
                All-Inclusive GBP Service
              </p>
            </div>

            {/* Card content */}
            <div
              className="p-8 text-center"
              style={{ backgroundColor: "#F0F8FF" }} // Alice Blue
            >
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: theme.colors.text.primary }}
              >
                Professional GBP Management
              </h3>

              <div className="flex justify-center items-end mb-6">
                <span
                  className="text-5xl font-bold"
                  style={{ color: theme.colors.primary }}
                >
                  $150
                </span>
                <span
                  className="text-xl ml-1 font-medium"
                  style={{ color: theme.colors.text.secondary }}
                >
                  /month
                </span>
              </div>

              <p
                className="mb-8 text-lg"
                style={{ color: theme.colors.text.secondary }}
              >
                Initial setup and ongoing management in one simple package
              </p>

              <button
                className="w-full py-4 px-6 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: theme.colors.accent,
                  color: "white",
                  boxShadow: theme.shadows.md,
                }}
                onClick={handleGetStarted}
              >
                Get Started Today
              </button>
            </div>

            {/* Card footer with guarantees */}
            <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span>No long-term contracts</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Features - Two Columns */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left Column - Initial Setup */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="p-2 rounded-full"
                style={{ backgroundColor: `${theme.colors.primary}20` }}
              >
                <Zap
                  className="h-6 w-6"
                  style={{ color: theme.colors.primary }}
                />
              </div>
              <h3
                className="text-xl font-bold"
                style={{ color: theme.colors.text.primary }}
              >
                First, Let's Create & Optimize Your Profile
              </h3>
            </div>

            <ul className="space-y-3">
              {setupFeatures.map((feature, i) => (
                <li
                  key={i}
                  className={`flex items-start transition-all duration-300 delay-${
                    i * 50
                  } ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-5"
                  }`}
                >
                  <CheckCircle
                    size={20}
                    className="mr-3 flex-shrink-0 mt-0.5"
                    style={{ color: theme.colors.secondary }}
                  />
                  <span style={{ color: theme.colors.text.secondary }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Monthly Service */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="p-2 rounded-full"
                style={{ backgroundColor: `${theme.colors.secondary}20` }}
              >
                <Calendar
                  className="h-6 w-6"
                  style={{ color: theme.colors.secondary }}
                />
              </div>
              <h3
                className="text-xl font-bold"
                style={{ color: theme.colors.text.primary }}
              >
                After That, Each Month You'll Get
              </h3>
            </div>

            <ul className="space-y-3">
              {monthlyFeatures.map((feature, i) => (
                <li
                  key={i}
                  className={`flex items-start transition-all duration-300 delay-${
                    i * 50
                  } ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-5"
                  }`}
                >
                  <CheckCircle
                    size={20}
                    className="mr-3 flex-shrink-0 mt-0.5"
                    style={{ color: theme.colors.secondary }}
                  />
                  <span style={{ color: theme.colors.text.secondary }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Results Summary */}
        <div
          className={`mt-16 max-w-4xl mx-auto bg-gray-50 rounded-xl p-8 shadow-sm transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="p-3 rounded-full"
                  style={{ backgroundColor: `${theme.colors.primary}15` }}
                >
                  <BarChart2
                    className="h-6 w-6"
                    style={{ color: theme.colors.primary }}
                  />
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: theme.colors.text.primary }}
                >
                  The Results You Can Expect
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Our clients typically see significant improvements in their
                local search performance, including:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-2" />
                  <span className="text-gray-700">
                    Increased map visibility
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-2" />
                  <span className="text-gray-700">
                    More website visits and calls
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-2" />
                  <span className="text-gray-700">Higher conversion rates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-2" />
                  <span className="text-gray-700">Better qualified leads</span>
                </li>
              </ul>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div
                className="p-6 rounded-xl bg-white shadow-sm w-full max-w-xs"
                style={{ border: `1px solid ${theme.colors.primary}15` }}
              >
                <div className="text-center mb-4">
                  <div
                    className="text-5xl font-bold mb-1"
                    style={{ color: theme.colors.primary }}
                  >
                    93%
                  </div>
                  <p className="text-gray-600">
                    Average increase in Google visibility
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span className="text-gray-600">Map Appearances</span>
                      <span className="font-medium text-gray-800">+89%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: "89%",
                          backgroundColor: theme.colors.secondary,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span className="text-gray-600">Website Clicks</span>
                      <span className="font-medium text-gray-800">+64%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: "64%",
                          backgroundColor: theme.colors.secondary,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span className="text-gray-600">Phone Calls</span>
                      <span className="font-medium text-gray-800">+72%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: "72%",
                          backgroundColor: theme.colors.secondary,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: theme.colors.text.primary }}
          >
            Ready to Transform Your Local Online Presence?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Get started today with our professional Google Business Profile
            management service and start seeing results in as little as 30 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundColor: theme.colors.accent,
                color: "white",
                boxShadow: theme.shadows.md,
              }}
              onClick={handleGetStarted}
            >
              Get Started Now
            </button>
            <button
              className="px-8 py-4 rounded-lg font-medium border transition-all duration-300 hover:bg-gray-50"
              style={{
                borderColor: theme.colors.primary,
                color: theme.colors.primary,
              }}
              onClick={handleConsultationClick}
            >
              Schedule a Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactForm
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
        theme={theme}
      />
    </section>
  );
};

export default Packages;
