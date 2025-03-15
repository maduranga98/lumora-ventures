import React, { useState } from "react";
import { Building2, Share2, Scissors, ArrowRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = ({ onNavClick }) => {
  const [hoveredService, setHoveredService] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      id: "gmb",
      title: "Google My Business Management",
      icon: Building2,
      description:
        "Boost your business visibility with our Google My Business (GMB) Management Services. Whether you're a small local business or a growing enterprise, we ensure your GMB profile is fully optimized to attract more customers and improve local search rankings.",
      details:
        "Our services include accurate business information setup, regular updates, engaging content creation, and prompt response to customer reviews. By leveraging analytics, we refine strategies to keep your business ahead in the local search game.",
      benefits: [
        "Increased customer engagement",
        "Enhanced credibility with consistent and updated information",
        "Improved search visibility with optimized listings",
      ],
      cta: "View more",
      action: () => navigate("/gmb"),
    },
    {
      id: "salon",
      title: "Salon Management Solutions",
      icon: Scissors,
      description:
        "Revolutionize your salon operations with our All-in-One Salon Management System. Whether you run a small boutique salon or a large chain, our software is designed to handle every aspect of your business effortlessly.",
      details:
        "From appointment scheduling to inventory management, employee payroll, and customer feedback, our system provides everything you need to streamline operations and enhance customer satisfaction.",
      benefits: [
        "Save time by automating manual processes",
        "Enhance customer experience with efficient booking",
        "Monitor business performance with detailed analytics",
      ],
      cta: "Transform My Salon Today",
      action: () => window.open("https://www.curlcipher.com/", "_blank"),
    },
    {
      id: "social",
      title: "Social Media Marketing",
      icon: Share2,
      description:
        "Connect, engage, and grow your brand with our comprehensive Social Media Marketing Services. From strategy development to content creation and analytics, we handle everything to ensure your brand resonates with your audience across platforms.",
      details:
        "We design creative campaigns that align with your brand's voice and target the right audience. Through paid ad campaigns, we help you maximize ROI while building long-lasting relationships with your customers.",
      benefits: [
        "Strengthened brand identity",
        "Improved customer reach and engagement",
        "Increased conversion rates with targeted strategies",
      ],
      cta: "Start Growing My Audience",
      action: () => onNavClick("contact"),
      comingSoon: true,
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#F8FAFF] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFF] to-[#F0F4FF]" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #09122C 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute top-0 right-0 w-72 h-72 lg:w-96 lg:h-96 bg-indigo-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 lg:w-96 lg:h-96 bg-indigo-300/30 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-start min-h-screen py-16 sm:py-20 md:py-24 lg:py-32">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#09122C] mb-6">
              Our Services
            </h2>
            <p className="text-lg sm:text-xl text-[#09122C]/90 max-w-2xl mx-auto">
              Elevate your business with our comprehensive solutions
            </p>
          </div>

          {/* Services Grid - changed to flex row for desktop */}
          <div className="flex flex-col lg:flex-row gap-8 w-full">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="animate-on-scroll opacity-0 translate-y-8 w-full"
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div
                  className={`h-full bg-white/95 backdrop-blur-sm rounded-xl shadow-lg 
                             hover:shadow-xl transition-all duration-300 overflow-hidden relative
                             border-2 ${
                               hoveredService === service.id
                                 ? "border-[#ECAF41]"
                                 : "border-white"
                             }`}
                >
                  {/* Coming Soon Label */}
                  {service.comingSoon && (
                    <div className="absolute top-4 right-4 bg-[#ECAF41] text-[#09122C] px-2 py-1 rounded text-sm font-semibold z-10">
                      Coming Soon
                    </div>
                  )}

                  {/* Service Header */}
                  <div className="p-6 border-b border-[#09122C]/10">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="flex items-center justify-center w-12 h-12 rounded-lg 
                                  bg-gradient-to-r from-[#09122C] to-[#1A2A5F]"
                      >
                        <service.icon className="h-6 w-6 text-[#ECAF41]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#09122C]">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-[#09122C]/90 mb-4">
                      {service.description}
                    </p>
                  </div>

                  {/* Service Details */}
                  <div className="p-6 bg-[#F0F4FF]/50">
                    <p className="text-[#09122C]/90 mb-6">{service.details}</p>

                    {/* Benefits */}
                    <div className="space-y-3 mb-6">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-[#ECAF41] mt-1 flex-shrink-0" />
                          <span className="text-[#09122C]/90">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={service.action}
                      className={`w-full group flex items-center justify-center px-6 py-3 
                               bg-gradient-to-r from-[#ECAF41] to-[#F5C15D] 
                               text-[#09122C] rounded-lg font-semibold
                               hover:shadow-lg hover:shadow-[#ECAF41]/20 
                               transition-all duration-300 border-2 border-[#ECAF41]
                               ${
                                 service.comingSoon
                                   ? "opacity-60 cursor-not-allowed"
                                   : ""
                               }`}
                      disabled={service.comingSoon}
                    >
                      {service.cta}
                      <ArrowRight
                        className="ml-2 h-5 w-5 transition-transform 
                                   group-hover:translate-x-1"
                      />
                    </button>
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

export default Services;
