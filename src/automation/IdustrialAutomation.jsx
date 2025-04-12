// src/automation/AutomationControlPage.js
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

const AutomationControlPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      <Helmet>
        <title>
          Industrial Automation and Control Systems | Lumora Ventures
        </title>
        <meta
          name="description"
          content="Boost efficiency with Lumora Ventures' automation and control systems—HMI programming, VFD programming, and panel wiring. Tailored solutions await!"
        />
        <meta
          name="keywords"
          content="Industrial automation, control systems, HMI programming, VFD programming, panel wiring, process optimization"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-8xl mx-auto px-8 lg:px-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center"
          >
            <motion.h1
              variants={slideUp}
              className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Precision Automation
              </span>
              <br />
              <span className="text-3xl md:text-4xl font-medium text-gray-300">
                Engineered for Peak Performance
              </span>
            </motion.h1>

            <motion.p
              variants={slideUp}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Transform your industrial operations with cyber-physical systems
              that combine cutting-edge automation with intelligent control
              architectures.
            </motion.p>

            <motion.div variants={slideUp}>
              <Link
                to="#contact-form"
                className="px-10 py-5 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/30"
              >
                Optimize Your Systems Now →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative pb-24">
        <div className="max-w-8xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-12"
            >
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Industrial Control Mastery
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  We architect automation ecosystems that merge OT and IT,
                  delivering cyber-secure solutions with real-time analytics and
                  predictive maintenance capabilities.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      title: "HMI Programming",
                      desc: "Context-aware interfaces with augmented reality integration",
                      icon: "💻",
                    },
                    {
                      title: "VFD Optimization",
                      desc: "AI-driven motor control with energy consumption analytics",
                      icon: "⚡",
                    },
                    {
                      title: "Panel Engineering",
                      desc: "IIoT-ready control panels with embedded diagnostics",
                      icon: "🔧",
                    },
                  ].map((service, index) => (
                    <div key={index} className="group flex items-start gap-6">
                      <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center text-2xl">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-400">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-blue-900/50 p-8 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold text-white mb-6">
                  System Architecture
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl">
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-cyan-400">📈</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Real-time KPIs
                      </h4>
                      <p className="text-gray-400 text-sm">
                        OEE monitoring • Energy analytics • Quality metrics
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl">
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-cyan-400">🔒</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Cybersecurity
                      </h4>
                      <p className="text-gray-400 text-sm">
                        IEC 62443 compliance • Network segmentation • Threat
                        monitoring
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Operational Benefits
                </h3>
                <div className="space-y-6">
                  {[
                    ["30%", "Reduction in energy costs"],
                    ["50%", "Faster fault diagnosis"],
                    ["99.8%", "System uptime guarantee"],
                  ].map(([value, label], index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-800/30 rounded-xl hover:bg-cyan-500/10 transition-colors"
                    >
                      <div className="text-cyan-400 text-3xl font-bold mb-2">
                        {value}
                      </div>
                      <div className="text-gray-300">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 rounded-2xl border border-cyan-400/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Industry Applications
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Manufacturing", icon: "🏭" },
                    { name: "Energy", icon: "⚡" },
                    { name: "Chemicals", icon: "🧪" },
                    { name: "Pharma", icon: "💊" },
                  ].map((industry, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-800/30 rounded-xl text-center hover:bg-cyan-500/10 transition-colors"
                    >
                      <div className="text-4xl mb-2">{industry.icon}</div>
                      <div className="text-gray-300 font-medium">
                        {industry.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                id="contact-form"
                className="bg-gray-900 p-8 rounded-2xl shadow-2xl border border-cyan-400/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  System Consultation
                </h3>
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Plant Name"
                      className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Technical Contact"
                      className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <textarea
                      rows="4"
                      placeholder="System Requirements"
                      className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-cyan-500"
                    ></textarea>
                  </div>
                  <button className="w-full px-6 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                    Request Technical Proposal
                  </button>
                </form>
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
              Ready for Industry 4.0 Integration?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Implement cognitive automation systems that learn and adapt to
              your production needs
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="#contact-form"
                className="px-10 py-5 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/20"
              >
                Schedule Technical Audit
              </Link>
              <Link
                to="#"
                className="px-10 py-5 border-2 border-cyan-400/30 text-cyan-400 hover:border-cyan-400/60 font-bold rounded-xl transition-all duration-300 hover:bg-cyan-500/10"
              >
                Download Whitepaper
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AutomationControlPage;
