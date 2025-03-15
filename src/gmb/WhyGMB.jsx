import React, { useState, useEffect } from "react";
import { useTheme } from "./Theme";
import {
  MapPin,
  Globe,
  Shield,
  Award,
  MessageSquare,
  Zap,
  Users,
  BarChart,
} from "lucide-react";

const WhyGBPCrucial = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  // Define benefits array before using it in the useEffect hook
  // Benefits of Google Business Profile
  const benefits = [
    {
      icon: <MapPin className="h-10 w-10" />,
      title: "Increase Visibility in Local Search",
      description:
        "Be seen by customers actively searching for your products or services in your area. Appear prominently in Google Maps and local search results.",
      stat: "70%",
      statInfo:
        "of customers visit a business after finding it in local search",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Drive More Website Traffic & Inquiries",
      description:
        "GBP listing prominently displays your website link and phone number, making it easy for customers to connect and convert.",
      stat: "3.5x",
      statInfo: "more website visits with an optimized GBP listing",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Build Trust and Credibility",
      description:
        "Showcase positive customer reviews and build social proof, influencing potential customers' decisions in your favor.",
      stat: "92%",
      statInfo: "of consumers read online reviews before making a purchase",
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "Stand Out From Competitors",
      description:
        "A fully optimized GBP makes your business more attractive and informative than basic listings, helping you capture market share.",
      stat: "68%",
      statInfo:
        "of consumers say good reviews make them more likely to choose a business",
    },
    {
      icon: <MessageSquare className="h-10 w-10" />,
      title: "Control Your Online Story",
      description:
        "Manage your business information, photos, and respond to reviews, actively shaping your online reputation.",
      stat: "78%",
      statInfo:
        "of consumers trust online reviews as much as personal recommendations",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Boost Local SEO",
      description:
        "GBP is a key factor in ranking higher in local search results, improving your overall SEO strategy and digital presence.",
      stat: "46%",
      statInfo: "of all Google searches have local intent",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Engage Directly with Customers",
      description:
        "Respond to reviews and questions, fostering customer loyalty and building lasting relationships that drive repeat business.",
      stat: "53%",
      statInfo: "higher conversion rate when businesses respond to reviews",
    },
    {
      icon: <BarChart className="h-10 w-10" />,
      title: "Free Marketing Powerhouse",
      description:
        "GBP is a free platform offering incredible marketing reach and customer engagement opportunities with measurable ROI.",
      stat: "5X",
      statInfo: "ROI compared to traditional local advertising methods",
    },
  ];

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

    const section = document.getElementById("whyGBPCrucial");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Auto-rotate through tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % benefits.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isVisible, benefits.length]);

  return (
    <section
      id="whyGBPCrucial"
      className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
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
            ESSENTIAL FOR SUCCESS
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: theme.colors.text.primary }}
          >
            Unlock a Flood of Local Customers: The Undeniable Importance of GBP
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <strong>Don't Get Left Behind!</strong> A strong GBP is your 24/7
            online storefront and customer magnet.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Benefits List */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`p-5 rounded-lg cursor-pointer transition-all duration-500 transform ${
                    activeTab === index
                      ? "bg-gray-50 shadow-md scale-105"
                      : "hover:bg-gray-50 hover:shadow-sm"
                  } ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                  style={{
                    transitionDelay: `${100 * index}ms`,
                    borderLeft:
                      activeTab === index
                        ? `4px solid ${theme.colors.secondary}`
                        : "4px solid transparent",
                  }}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="flex items-start">
                    <div
                      className={`mr-4 transition-all duration-300 ${
                        activeTab === index
                          ? "text-secondary-500"
                          : "text-gray-400"
                      }`}
                      style={{
                        color:
                          activeTab === index
                            ? theme.colors.secondary
                            : undefined,
                      }}
                    >
                      {benefit.icon}
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-semibold mb-1 transition-all duration-300 ${
                          activeTab === index ? "" : "text-gray-700"
                        }`}
                        style={{
                          color:
                            activeTab === index
                              ? theme.colors.text.primary
                              : undefined,
                        }}
                      >
                        {benefit.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          activeTab === index ? "block" : "hidden md:block"
                        } text-gray-600`}
                      >
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Feature Highlight */}
          <div className="w-full lg:w-1/2">
            <div
              className={`bg-gray-50 rounded-xl p-8 shadow-lg transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative overflow-hidden rounded-lg bg-white p-8 shadow-inner h-full">
                {/* Background gradient */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    background: `radial-gradient(circle at top right, ${theme.colors.secondary}, ${theme.colors.primary})`,
                  }}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className="p-4 rounded-full inline-block mb-6"
                    style={{ backgroundColor: `${theme.colors.primary}15` }}
                  >
                    <div
                      className="text-primary-500"
                      style={{ color: theme.colors.primary }}
                    >
                      {benefits[activeTab].icon}
                    </div>
                  </div>

                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: theme.colors.text.primary }}
                  >
                    {benefits[activeTab].title}
                  </h3>

                  <p className="text-gray-600 mb-8 text-lg">
                    {benefits[activeTab].description}
                  </p>

                  {/* Stat highlight */}
                  <div className="flex items-center mt-8 bg-white rounded-lg p-4 shadow-sm">
                    <div
                      className="text-4xl md:text-5xl font-extrabold mr-4"
                      style={{ color: theme.colors.secondary }}
                    >
                      {benefits[activeTab].stat}
                    </div>
                    <div className="text-gray-700 font-medium">
                      {benefits[activeTab].statInfo}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Teaser */}
        <div
          className={`mt-16 bg-gray-50 rounded-xl overflow-hidden shadow-md transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="p-8 relative">
            {/* Decorative elements */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
              style={{
                background: `radial-gradient(circle, ${theme.colors.secondary}, transparent)`,
                transform: "translate(30%, -30%)",
              }}
            ></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ color: theme.colors.text.primary }}
                  >
                    Real Results from Real Businesses
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our clients are seeing dramatic improvements in local
                    visibility, customer inquiries, and revenue after optimizing
                    their Google Business Profiles.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-3 rounded shadow-sm">
                      <div className="text-2xl font-bold text-green-500">
                        ↑43%
                      </div>
                      <div className="text-sm text-gray-600">
                        Average increase in website traffic
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                      <div className="text-2xl font-bold text-green-500">
                        ↑67%
                      </div>
                      <div className="text-sm text-gray-600">
                        More phone calls from GBP listings
                      </div>
                    </div>
                  </div>
                  <button
                    className="px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg mt-2"
                    style={{
                      backgroundColor: theme.colors.secondary,
                      color: "#fff",
                    }}
                  >
                    See Our Client Success Stories
                  </button>
                </div>
                <div className="md:w-1/3">
                  <div className="bg-white p-4 rounded-lg shadow-md transform rotate-1 hover:rotate-0 transition-all duration-300">
                    <div className="flex items-start mb-3">
                      <div className="text-yellow-400 text-2xl mr-2">★★★★★</div>
                      <div className="text-sm text-gray-400">1 month ago</div>
                    </div>
                    <p className="text-gray-700 italic mb-3">
                      "Since Lumora Ventures optimized our GBP, we've seen a 58%
                      increase in customer calls and appointments. Best
                      investment we've made this year!"
                    </p>
                    <div className="font-semibold text-gray-800">
                      — Sarah T., Lakeside Dental
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGBPCrucial;
