// src/automation/RDDevelopmentPage.js
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

const RDDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      <Helmet>
        <title>R&D in Control Systems | Lumora Ventures</title>
        <meta
          name="description"
          content="Innovate with Lumora Ventures' R&D in control systems—custom HMI, VFD, and automation solutions for industries. Stay ahead with us!"
        />
        <meta
          name="keywords"
          content="R&D control systems, industrial automation innovation, HMI programming R&D, VFD programming solutions"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-8xl mx-auto px-8 lg:px-16">
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
                Control Systems Innovation
              </span>
              <br />
              <span className="text-3xl md:text-4xl font-medium text-gray-300">
                Where Industrial Automation Meets Tomorrow
              </span>
            </motion.h1>

            <motion.p
              variants={slideUp}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Pioneering next-generation control architectures through advanced
              R&D in industrial automation, cyber-physical systems, and
              intelligent process optimization.
            </motion.p>

            <motion.div variants={slideUp}>
              <Link
                to="#contact-form"
                className="px-10 py-5 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/30"
              >
                Initiate R&D Collaboration →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Content Section */}
      <section className="relative pb-24">
        <div className="max-w-8xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Research Focus Areas */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-12"
            >
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Advanced Control Technologies
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Our R&D lab develops adaptive control systems featuring:
                </p>

                <div className="space-y-8">
                  {[
                    {
                      title: "Cognitive HMI Systems",
                      desc: "Self-optimizing interfaces with predictive analytics",
                      icon: "🧠",
                    },
                    {
                      title: "AI-Driven VFD Controllers",
                      desc: "Neural network-optimized motor control algorithms",
                      icon: "🤖",
                    },
                    {
                      title: "Cyber-Physical Prototypes",
                      desc: "Digital twin-integrated control architectures",
                      icon: "🌐",
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
                  Innovation Metrics
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ["6-8 Weeks", "Rapid Prototyping Cycles"],
                    ["150%", "ROI on R&D Investments"],
                    ["24", "Patents Filed"],
                  ].map(([value, label], index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-800/30 rounded-xl hover:bg-cyan-500/10 transition-colors"
                    >
                      <div className="text-cyan-400 text-2xl font-bold mb-2">
                        {value}
                      </div>
                      <div className="text-gray-300 text-sm">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Development Process */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">
                  R&D Methodology
                </h3>
                <div className="space-y-6">
                  {[
                    [
                      "1. Discovery Phase",
                      "Requirements analysis & technology scouting",
                    ],
                    ["2. Concept Design", "System architecture & simulation"],
                    ["3. Prototyping", "Hardware-in-loop testing"],
                    ["4. Validation", "Industrial environment trials"],
                  ].map(([title, desc], index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 bg-gray-800/30 rounded-xl hover:bg-cyan-500/10 transition-colors"
                    >
                      <div className="text-cyan-400 font-bold">
                        {index + 1}.
                      </div>
                      <div>
                        <div className="font-semibold text-white mb-1">
                          {title}
                        </div>
                        <div className="text-gray-400 text-sm">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 rounded-2xl border border-cyan-400/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Industry Impact
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { sector: "Manufacturing", tech: "Predictive QC Systems" },
                    { sector: "Energy", tech: "Smart Grid Controllers" },
                    { sector: "Robotics", tech: "Autonomous Navigation" },
                    { sector: "Chemicals", tech: "Reactive Process Control" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-800/30 rounded-xl hover:bg-cyan-500/10 transition-colors"
                    >
                      <div className="text-cyan-400 font-medium mb-1">
                        {item.sector}
                      </div>
                      <div className="text-gray-300 text-sm">{item.tech}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                id="contact-form"
                className="bg-gray-900 p-8 rounded-2xl shadow-2xl border border-cyan-400/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  R&D Partnership Inquiry
                </h3>
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Organization"
                      className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Research Lead"
                      className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <textarea
                      rows="4"
                      placeholder="Technical Challenges"
                      className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-cyan-500"
                    ></textarea>
                  </div>
                  <button className="w-full px-6 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                    Schedule Innovation Workshop
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
              Shape the Future of Industrial Control
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Collaborate with our R&D team to develop proprietary automation
              solutions that redefine industry standards
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="#contact-form"
                className="px-10 py-5 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/20"
              >
                Start R&D Project
              </Link>
              <Link
                to="#"
                className="px-10 py-5 border-2 border-cyan-400/30 text-cyan-400 hover:border-cyan-400/60 font-bold rounded-xl transition-all duration-300 hover:bg-cyan-500/10"
              >
                View Research Papers
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RDDevelopmentPage;
