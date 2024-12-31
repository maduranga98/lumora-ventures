import React, { useState } from "react";
import { Building2, Share2, Scissors, ArrowRight, Check } from "lucide-react";

const Services = ({ onNavClick }) => {
  const [activeTab, setActiveTab] = useState("gmb");
  const [isAnimating, setIsAnimating] = useState(false);

  const services = {
    gmb: {
      title: "Google My Business Management",
      icon: Building2,
      description: `Boost your business visibility with our Google My Business (GMB) Management Services. Whether you're a small local business or a growing enterprise, we ensure your GMB profile is fully optimized to attract more customers and improve local search rankings.`,
      details: `Our services include accurate business information setup, regular updates, engaging content creation, and prompt response to customer reviews. By leveraging analytics, we refine strategies to keep your business ahead in the local search game.`,
      benefits: [
        "Increased customer engagement",
        "Enhanced credibility with consistent and updated information",
        "Improved search visibility with optimized listings",
      ],
      cta: "Optimize My Business Now",
    },
    social: {
      title: "Social Media Marketing",
      icon: Share2,
      description: `Connect, engage, and grow your brand with our comprehensive Social Media Marketing Services. From strategy development to content creation and analytics, we handle everything to ensure your brand resonates with your audience across platforms like Facebook, Instagram, LinkedIn, and more.`,
      details: `We design creative campaigns that align with your brand's voice and target the right audience. Through paid ad campaigns, we help you maximize ROI while building long-lasting relationships with your customers.`,
      features: [
        "Engaging content creation (posts, stories, and videos)",
        "Audience targeting and ad campaign management",
        "Monthly growth and engagement reports",
      ],
      benefits: [
        "Strengthened brand identity",
        "Improved customer reach and engagement",
        "Increased conversion rates with targeted strategies",
      ],
      cta: "Start Growing My Audience",
    },
    salon: {
      title: "Salon Management Solutions",
      icon: Scissors,
      description: `Revolutionize your salon operations with our All-in-One Salon Management System. Whether you run a small boutique salon or a large chain, our software is designed to handle every aspect of your business effortlessly.`,
      details: `From appointment scheduling to inventory management, employee payroll, and customer feedback, our system provides everything you need to streamline operations and enhance customer satisfaction.`,
      features: [
        "Appointment scheduling with online booking options",
        "Employee management, including payroll and performance tracking",
        "Inventory tracking to monitor stock levels and orders",
        "Feedback system to improve client satisfaction and loyalty",
      ],
      benefits: [
        "Save time by automating manual processes",
        "Enhance customer experience with efficient booking and tracking",
        "Monitor business performance with detailed analytics and reports",
      ],
      cta: "Transform My Salon Today",
    },
  };

  const handleTabChange = (key) => {
    setIsAnimating(true);
    setActiveTab(key);
    setTimeout(() => setIsAnimating(false), 300);
  };
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-on-scroll opacity-0 translate-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tailored solutions for your business success
          </p>
        </div>

        {/* Service Navigation */}
        <div className="mt-12 flex justify-center">
          <nav className="flex flex-wrap justify-center gap-4 max-w-full px-4">
            {Object.entries(services).map(([key, service]) => (
              <button
                key={key}
                onClick={() => handleTabChange(key)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center whitespace-normal min-w-[200px] sm:min-w-0
          ${
            activeTab === key
              ? "bg-indigo-600 text-white transform scale-105"
              : "text-gray-600 hover:bg-gray-100"
          }`}
              >
                <service.icon className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base">{service.title}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Service Content */}
        {/* Service Content */}
        <div className="mt-16">
          {Object.entries(services).map(([key, service]) => (
            <div
              key={key}
              className={`transition-all duration-300 transform 
        ${
          activeTab === key
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 hidden"
        }
        ${isAnimating ? "animate-pulse" : ""}
      `}
            >
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8">
                <div className="max-w-3xl mx-auto animate-on-scroll opacity-0 translate-y-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <p className="text-gray-700 mb-8">{service.details}</p>

                  {service.features && (
                    <div className="mb-8 animate-on-scroll opacity-0 translate-y-8">
                      <h4 className="text-lg font-semibold mb-4">
                        What's Included:
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start group">
                            <Check className="h-5 w-5 text-indigo-600 mr-2 mt-1 group-hover:scale-110 transition-transform" />
                            <span className="group-hover:text-gray-900 transition-colors">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-8 animate-on-scroll opacity-0 translate-y-8">
                    <h4 className="text-lg font-semibold mb-4">
                      {service.features ? "Benefits:" : "Why Choose Us:"}
                    </h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start group">
                          <Check className="h-5 w-5 text-indigo-600 mr-2 mt-1 group-hover:scale-110 transition-transform" />
                          <span className="group-hover:text-gray-900 transition-colors">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center animate-on-scroll opacity-0 translate-y-8">
                    <button
                      onClick={() => onNavClick("contact")}
                      className="group inline-flex items-center justify-center px-6 py-3 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300"
                    >
                      {service.cta}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
