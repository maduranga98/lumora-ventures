// src/automation/ContactPage.js
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      <Helmet>
        <title>Contact Lumora Ventures | Industrial Automation Solutions</title>
        <meta
          name="description"
          content="Get in touch with Lumora Ventures for all your industrial automation needs. Connect with our experts for custom solutions, support, and service."
        />
        <meta
          name="keywords"
          content="industrial automation contact, HMI support, VFD maintenance, control systems help"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 md:pt-32 2xl:pt-40 pb-12 sm:pb-16 md:pb-24 2xl:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-geometric.png')]" />
        <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-16 2xl:px-24 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <motion.h1
              variants={slideUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-black text-white mb-4 sm:mb-6 md:mb-8 2xl:mb-10 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Automation Expertise
              </span>
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-medium text-gray-300">
                Ready to Elevate Your Operations?
              </span>
            </motion.h1>

            <motion.p
              variants={slideUp}
              className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-300 mb-6 sm:mb-8 md:mb-12 2xl:mb-16 max-w-3xl 2xl:max-w-5xl mx-auto leading-relaxed"
            >
              Connect with our industrial automation engineers for tailored
              solutions, system optimization, and 24/7 technical support.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative pb-12 sm:pb-16 md:pb-24 2xl:pb-32">
        <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-16 2xl:px-24">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 2xl:gap-20">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-6 sm:space-y-8 2xl:space-y-12"
            >
              <div className="bg-gray-800/50 p-4 sm:p-6 md:p-8 2xl:p-10 rounded-2xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500">
                <h2 className="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8 2xl:mb-10">
                  Technical Inquiry
                </h2>
                <form className="space-y-4 sm:space-y-6 2xl:space-y-8">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 2xl:gap-8">
                    <div>
                      <label className="block text-gray-400 mb-1 sm:mb-2 2xl:mb-3 text-sm sm:text-base 2xl:text-lg">
                        First Name*
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 sm:px-4 2xl:px-5 py-2 sm:py-3 2xl:py-4 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base 2xl:text-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-1 sm:mb-2 2xl:mb-3 text-sm sm:text-base 2xl:text-lg">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 sm:px-4 2xl:px-5 py-2 sm:py-3 2xl:py-4 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base 2xl:text-lg"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-1 sm:mb-2 2xl:mb-3 text-sm sm:text-base 2xl:text-lg">
                      Email*
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 sm:px-4 2xl:px-5 py-2 sm:py-3 2xl:py-4 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base 2xl:text-lg"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-1 sm:mb-2 2xl:mb-3 text-sm sm:text-base 2xl:text-lg">
                      System Type
                    </label>
                    <select className="w-full px-3 sm:px-4 2xl:px-5 py-2 sm:py-3 2xl:py-4 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base 2xl:text-lg">
                      <option>Select Automation System</option>
                      <option>HMI Networks</option>
                      <option>VFD Arrays</option>
                      <option>Full Control Stack</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-1 sm:mb-2 2xl:mb-3 text-sm sm:text-base 2xl:text-lg">
                      Urgency Level
                    </label>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 2xl:gap-6">
                      {["Routine", "Priority", "Emergency"].map(
                        (level, index) => (
                          <label
                            key={index}
                            className="flex items-center space-x-1 sm:space-x-2 2xl:space-x-3"
                          >
                            <input
                              type="radio"
                              name="urgency"
                              className="text-cyan-500 focus:ring-cyan-500 w-4 h-4 2xl:w-5 2xl:h-5"
                            />
                            <span className="text-gray-300 text-sm sm:text-base 2xl:text-lg">
                              {level}
                            </span>
                          </label>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-1 sm:mb-2 2xl:mb-3 text-sm sm:text-base 2xl:text-lg">
                      Technical Details
                    </label>
                    <textarea
                      rows="4"
                      className="w-full px-3 sm:px-4 2xl:px-5 py-2 sm:py-3 2xl:py-4 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base 2xl:text-lg"
                      placeholder="Describe your system requirements, challenges, and desired outcomes..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-4 sm:px-6 2xl:px-8 py-2 sm:py-3 md:py-4 2xl:py-6 bg-cyan-500 hover:bg-cyan-600 text-white text-sm sm:text-base 2xl:text-lg font-bold rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Submit Technical Request
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8 2xl:space-y-12"
            >
              <div className="bg-gray-800/50 p-4 sm:p-6 md:p-8 2xl:p-10 rounded-2xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500">
                <h3 className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-6 2xl:mb-8">
                  Global Support
                </h3>
                <div className="space-y-3 sm:space-y-4 md:space-y-6 2xl:space-y-8">
                  {[
                    {
                      icon: "📞",
                      title: "Emergency Line",
                      detail: "+1 (555) 123-4567",
                      note: "24/7 for maintenance contracts",
                    },
                    {
                      icon: "📧",
                      title: "Technical Support",
                      detail: "support@lumoraventures.com",
                      note: "Response within 2 hours",
                    },
                    {
                      icon: "📍",
                      title: "HQ Location",
                      detail:
                        "123 Innovation Drive\nSuite 400, Tech City TX 75001",
                      note: "By appointment only",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-3 sm:p-4 2xl:p-6 bg-gray-900/30 rounded-xl hover:bg-cyan-500/10 transition-colors"
                    >
                      <div className="flex items-start gap-3 sm:gap-4 2xl:gap-5">
                        <div className="text-xl sm:text-2xl 2xl:text-3xl">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-base sm:text-lg 2xl:text-xl font-semibold text-white mb-1 2xl:mb-2">
                            {item.title}
                          </div>
                          <div className="text-gray-300 whitespace-pre-line text-sm sm:text-base 2xl:text-lg">
                            {item.detail}
                          </div>
                          <div className="text-cyan-400 text-xs sm:text-sm 2xl:text-base mt-1 sm:mt-2 2xl:mt-3">
                            {item.note}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-4 sm:p-6 md:p-8 2xl:p-10 rounded-2xl border border-cyan-400/20">
                <h3 className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-6 2xl:mb-8">
                  Connect Digitally
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 2xl:gap-6">
                  {[
                    { platform: "LinkedIn", icon: "💼", url: "#" },
                    { platform: "GitHub", icon: "👨‍💻", url: "#" },
                    { platform: "YouTube", icon: "📹", url: "#" },
                    { platform: "Twitter", icon: "🐦", url: "#" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="p-3 sm:p-4 2xl:p-6 bg-gray-800/30 rounded-xl hover:bg-cyan-500/10 transition-colors flex items-center gap-2 sm:gap-3 2xl:gap-4"
                    >
                      <span className="text-xl sm:text-2xl 2xl:text-3xl">
                        {social.icon}
                      </span>
                      <div>
                        <div className="font-medium text-white text-sm sm:text-base 2xl:text-lg">
                          {social.platform}
                        </div>
                        <div className="text-cyan-400 text-xs sm:text-sm 2xl:text-base">
                          @LumoraAutomation
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 py-12 sm:py-16 md:py-24 2xl:py-32">
        <div className="w-full max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 2xl:px-12 text-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-6 sm:p-8 md:p-12 2xl:p-16 rounded-3xl shadow-2xl border border-cyan-400/20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-black text-white mb-3 sm:mb-4 md:mb-6 2xl:mb-8">
              Need Immediate Assistance?
            </h2>
            <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-300 mb-4 sm:mb-6 md:mb-8 2xl:mb-10 max-w-3xl 2xl:max-w-4xl mx-auto">
              Our certified automation engineers are ready to resolve your
              technical challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 2xl:gap-8 justify-center">
              <a
                href="tel:+15551234567"
                className="px-6 sm:px-8 md:px-10 2xl:px-12 py-3 sm:py-4 md:py-5 2xl:py-6 bg-cyan-500 hover:bg-cyan-600 text-white text-sm sm:text-base md:text-lg 2xl:text-xl font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/20"
              >
                Call Emergency Support
              </a>
              <Link
                to="/maintenance"
                className="px-6 sm:px-8 md:px-10 2xl:px-12 py-3 sm:py-4 md:py-5 2xl:py-6 border-2 border-cyan-400/30 text-cyan-400 text-sm sm:text-base md:text-lg 2xl:text-xl hover:border-cyan-400/60 font-bold rounded-xl transition-all duration-300 hover:bg-cyan-500/10"
              >
                View Maintenance Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
