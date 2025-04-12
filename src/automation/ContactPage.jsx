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
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-geometric.png')]" />
        <div className="max-w-8xl mx-auto px-8 lg:px-16 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <motion.h1
              variants={slideUp}
              className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Automation Expertise
              </span>
              <br />
              <span className="text-3xl md:text-4xl font-medium text-gray-300">
                Ready to Elevate Your Operations?
              </span>
            </motion.h1>

            <motion.p
              variants={slideUp}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Connect with our industrial automation engineers for tailored
              solutions, system optimization, and 24/7 technical support.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative pb-24">
        <div className="max-w-8xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-8"
            >
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Technical Inquiry
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-400 mb-2">
                        First Name*
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-cyan-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-2">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-cyan-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2">Email*</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-cyan-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2">
                      System Type
                    </label>
                    <select className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-cyan-500">
                      <option>Select Automation System</option>
                      <option>HMI Networks</option>
                      <option>VFD Arrays</option>
                      <option>Full Control Stack</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2">
                      Urgency Level
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      {["Routine", "Priority", "Emergency"].map(
                        (level, index) => (
                          <label
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="radio"
                              name="urgency"
                              className="text-cyan-500 focus:ring-cyan-500"
                            />
                            <span className="text-gray-300">{level}</span>
                          </label>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-2">
                      Technical Details
                    </label>
                    <textarea
                      rows="6"
                      className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-cyan-500"
                      placeholder="Describe your system requirements, challenges, and desired outcomes..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Submit Technical Request
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Global Support
                </h3>
                <div className="space-y-6">
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
                      className="p-4 bg-gray-900/30 rounded-xl hover:bg-cyan-500/10 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-2xl">{item.icon}</div>
                        <div>
                          <div className="text-lg font-semibold text-white mb-1">
                            {item.title}
                          </div>
                          <div className="text-gray-300 whitespace-pre-line">
                            {item.detail}
                          </div>
                          <div className="text-cyan-400 text-sm mt-2">
                            {item.note}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 rounded-2xl border border-cyan-400/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Connect Digitally
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { platform: "LinkedIn", icon: "💼", url: "#" },
                    { platform: "GitHub", icon: "👨💻", url: "#" },
                    { platform: "YouTube", icon: "📹", url: "#" },
                    { platform: "Twitter", icon: "🐦", url: "#" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="p-4 bg-gray-800/30 rounded-xl hover:bg-cyan-500/10 transition-colors flex items-center gap-3"
                    >
                      <span className="text-2xl">{social.icon}</span>
                      <div>
                        <div className="font-medium text-white">
                          {social.platform}
                        </div>
                        <div className="text-cyan-400 text-sm">
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
      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 py-24">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-12 rounded-3xl shadow-2xl border border-cyan-400/20"
          >
            <h2 className="text-4xl font-black text-white mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our certified automation engineers are ready to resolve your
              technical challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+15551234567"
                className="px-10 py-5 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/20"
              >
                Call Emergency Support
              </a>
              <Link
                to="/maintenance"
                className="px-10 py-5 border-2 border-cyan-400/30 text-cyan-400 hover:border-cyan-400/60 font-bold rounded-xl transition-all duration-300 hover:bg-cyan-500/10"
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
