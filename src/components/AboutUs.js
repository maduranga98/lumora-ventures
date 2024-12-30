import React from "react";
import { Lightbulb, Shield, Leaf, Star } from "lucide-react";

const AboutUs = () => {
  const coreValues = [
    {
      title: "Innovation",
      description: "Driving change with creative solutions",
      icon: Lightbulb,
    },
    {
      title: "Integrity",
      description: "Building trust through transparency",
      icon: Shield,
    },
    {
      title: "Sustainability",
      description: "Promoting practices for long-term success",
      icon: Leaf,
    },
    {
      title: "Excellence",
      description: "Delivering top-quality services every time",
      icon: Star,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-indigo-50/30 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-on-scroll opacity-0 translate-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Us
          </h2>
        </div>

        <div className="mt-16 lg:mt-24">
          <div className="space-y-12 lg:space-y-24">
            {/* Mission & Vision */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="animate-on-scroll opacity-0 -translate-x-8">
                <div className="group bg-gradient-to-br from-indigo-50 to-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-indigo-600 mb-4 group-hover:scale-105 transition-transform">
                    Our Mission
                  </h3>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors">
                    To illuminate pathways to innovation, empowering businesses
                    to achieve sustainable growth.
                  </p>
                </div>
              </div>
              <div className="animate-on-scroll opacity-0 translate-x-8">
                <div className="group bg-gradient-to-br from-indigo-50 to-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-indigo-600 mb-4 group-hover:scale-105 transition-transform">
                    Our Vision
                  </h3>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors">
                    To be a global leader in providing innovative marketing and
                    management solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12 animate-on-scroll opacity-0 translate-y-8">
                Core Values
              </h3>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {coreValues.map((value, index) => (
                  <div
                    key={index}
                    className="animate-on-scroll opacity-0 translate-y-8"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="group relative bg-white p-8 rounded-xl shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1">
                      <div className="absolute -top-4 left-6 transform group-hover:scale-110 transition-transform">
                        <div className="rounded-full bg-indigo-600 p-3">
                          <value.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="pt-4">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                          {value.title}
                        </h4>
                        <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
