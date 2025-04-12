// src/automation/MaintenanceAgreementsPage.js
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const slideUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const MaintenanceAgreementsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      <Helmet>
        <title>Industrial Maintenance Agreements | Lumora Ventures</title>
        <meta
          name="description"
          content="Maximize uptime with Lumora Ventures' maintenance agreements for automation systems—HMI, VFD, and panel support. Get a plan today!"
        />
        <meta
          name="keywords"
          content="Industrial maintenance agreements, automation system upkeep, HMI maintenance, VFD maintenance, panel wiring support"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-full mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="text-center"
          >
            <motion.h1
              variants={slideUp}
              className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Zero Downtime Guarantee
              </span>
              <br />
              <span className="text-3xl md:text-4xl font-medium text-gray-300">
                Proactive Maintenance for Continuous Operations
              </span>
            </motion.h1>

            <motion.p
              variants={slideUp}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Our predictive maintenance ecosystem ensures 99.95% system
              availability through AI-driven monitoring and rapid-response
              engineering support.
            </motion.p>

            <motion.div variants={slideUp}>
              <Link
                to="#"
                className="px-10 py-5 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/30"
              >
                Secure Your Operations Now →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Content Section */}
      <section className="relative pb-24">
        <div className="max-w-full mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Maintenance Features */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-12"
            >
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Smart Maintenance Framework
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      title: "Predictive HMI Care",
                      desc: "AI-optimized interface health monitoring",
                      icon: "📈",
                      stat: "60% fewer failures",
                    },
                    {
                      title: "VFD Longevity Programs",
                      desc: "Motor control optimization cycles",
                      icon: "⚡",
                      stat: "35% longer lifespan",
                    },
                    {
                      title: "Panel Integrity Checks",
                      desc: "Thermal imaging & connection diagnostics",
                      icon: "🔍",
                      stat: "99.9% connection reliability",
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="group flex items-start gap-6 p-4 bg-gray-800/30 rounded-xl hover:bg-cyan-500/10 transition-colors"
                    >
                      <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center text-2xl">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 mb-2">{service.desc}</p>
                        <div className="text-cyan-400 text-sm font-medium">
                          {service.stat}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-blue-900/50 p-8 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Response Performance
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    ["2h", "Critical Response", "Avg. Onsite Time"],
                    ["15m", "Remote Support", "First Response"],
                    ["365", "Days/Year", "Coverage"],
                  ].map(([value, title, sub], index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-800/30 rounded-xl text-center hover:bg-cyan-500/10 transition-colors"
                    >
                      <div className="text-cyan-400 text-3xl font-bold mb-2">
                        {value}
                      </div>
                      <div className="text-white font-medium">{title}</div>
                      <div className="text-gray-400 text-sm">{sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 rounded-2xl border border-cyan-400/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Request More Information
                </h3>
                <form className="space-y-6">
                  <div>
                    <select className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-cyan-500">
                      <option>Select System Type</option>
                      <option>HMI Networks</option>
                      <option>VFD Arrays</option>
                      <option>Full Automation Stack</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about your maintenance needs"
                      rows="4"
                      className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-cyan-500"
                    ></textarea>
                  </div>
                  <button className="w-full px-6 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                    Get Custom Maintenance Plan
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-12 rounded-3xl shadow-2xl border border-cyan-400/20"
          >
            <h2 className="text-4xl font-black text-white mb-6">
              Operational Continuity Assured
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Maintain 24/7 production viability with our guaranteed response
              times and certified automation engineers
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="#"
                className="px-10 py-5 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/20"
              >
                Schedule Consultation
              </Link>
              <Link
                to="#"
                className="px-10 py-5 border-2 border-cyan-400/30 text-cyan-400 hover:border-cyan-400/60 font-bold rounded-xl transition-all duration-300 hover:bg-cyan-500/10"
              >
                Download Brochure
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceAgreementsPage;
