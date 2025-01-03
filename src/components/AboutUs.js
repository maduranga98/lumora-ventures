import React from "react";
import { Lightbulb, MapPin, User, CheckCircle, Building } from "lucide-react";

const AboutUs = () => {
  const whyChooseUs = [
    {
      title: "Expert Solutions",
      description:
        "Proven expertise in Google My Business management, social media marketing, and salon management solutions",
      icon: Lightbulb,
    },
    {
      title: "Client-Focused",
      description:
        "A dedicated approach to ensure client satisfaction and long-term success in every project",
      icon: CheckCircle,
    },
    {
      title: "Innovation First",
      description:
        "Commitment to delivering innovative, tailored solutions to meet unique business needs",
      icon: Building,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Us
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              Welcome to{" "}
              <span className="font-semibold">LUMORA VENTURES PVT LTD</span>, a
              forward-thinking company committed to illuminating pathways to
              innovation. Founded in 2024, we specialize in providing tailored
              solutions that empower businesses to achieve sustainable growth
              and excellence.
            </p>
          </div>
        </div>

        {/* Vision & Leadership Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Vision Section */}
          <div className="animate-on-scroll opacity-0 -translate-x-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                Our vision is to drive global innovation by offering advanced
                services in technology, marketing, and management. We are
                dedicated to building long-lasting relationships with our
                clients by delivering measurable results and innovative
                strategies.
              </p>
            </div>
          </div>

          {/* Leadership Section */}
          <div className="animate-on-scroll opacity-0 translate-x-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full">
              <div className="flex items-start gap-4">
                <User className="h-8 w-8 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                    Our Leadership
                  </h3>
                  <p className="text-gray-600">
                    LUMORA VENTURES PVT LTD is led by{" "}
                    <span className="font-semibold">Thushan Perera</span>, the
                    Company Director, whose expertise and passion drive our
                    mission of transforming businesses through innovation and
                    excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12 animate-on-scroll opacity-0 translate-y-8">
            Why Choose Us
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-indigo-100 p-3 group-hover:bg-indigo-600 transition-colors">
                      <item.icon className="h-6 w-6 text-indigo-600 group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Address Section */}
        <div className="animate-on-scroll opacity-0 translate-y-8">
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="flex items-start gap-4 justify-center text-center md:text-left md:justify-start">
              <MapPin className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Our Address
                </h3>
                <p className="text-gray-600">
                  Office 4157, 58 Peregrine Road, Hainault, Ilford, Essex,
                  United Kingdom, IG6 3SZ
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-on-scroll opacity-0 translate-y-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Us</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Be part of our journey as we illuminate pathways to innovation.
            Together, we can achieve extraordinary growth and success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
