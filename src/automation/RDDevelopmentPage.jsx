// src/automation/RDDevelopmentPage.js
import React from "react";
import { Helmet } from "react-helmet";
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
      <section className="relative pt-16 sm:pt-24 md:pt-32 2xl:pt-40 pb-12 sm:pb-16 md:pb-24 2xl:pb-32 overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-16 2xl:px-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="text-center"
          >
            <motion.h1
              variants={slideUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-black text-white mb-4 sm:mb-6 md:mb-8 2xl:mb-10 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Control Systems Innovation
              </span>
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-medium text-gray-300">
                Where Industrial Automation Meets Tomorrow
              </span>
            </motion.h1>

            <motion.p
              variants={slideUp}
              className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-300 mb-6 sm:mb-8 md:mb-12 2xl:mb-16 max-w-3xl 2xl:max-w-5xl mx-auto leading-relaxed"
            >
              Pioneering next-generation control architectures through advanced
              R&D in industrial automation, cyber-physical systems, and
              intelligent process optimization.
            </motion.p>

            {/* Removed "Initiate R&D Collaboration" button */}
          </motion.div>
        </div>
      </section>

      {/* Core Content Section */}
      <section className="relative pb-12 sm:pb-16 md:pb-24 2xl:pb-32">
        <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-16 2xl:px-24">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 2xl:gap-20">
            {/* Research Focus Areas */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-6 sm:space-y-8 md:space-y-12 2xl:space-y-16"
            >
              <div className="bg-gray-800/50 p-4 sm:p-6 md:p-8 2xl:p-10 rounded-2xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500">
                <h2 className="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6 2xl:mb-8">
                  Advanced Control Technologies
                </h2>
                <p className="text-sm sm:text-base 2xl:text-lg text-gray-400 leading-relaxed mb-4 sm:mb-6 md:mb-8 2xl:mb-10">
                  Our R&D lab develops adaptive control systems featuring:
                </p>

                <div className="space-y-4 sm:space-y-6 md:space-y-8 2xl:space-y-10">
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
                    <div
                      key={index}
                      className="group flex items-start gap-3 sm:gap-4 md:gap-6 2xl:gap-8"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 2xl:w-16 2xl:h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center text-xl sm:text-2xl 2xl:text-3xl">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl 2xl:text-2xl font-bold text-white mb-1 sm:mb-2 2xl:mb-3 group-hover:text-cyan-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base 2xl:text-lg text-gray-400">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-blue-900/50 p-4 sm:p-6 md:p-8 2xl:p-10 rounded-2xl shadow-xl">
                <h2 className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-6 2xl:mb-8">
                  Innovation Metrics
                </h2>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 2xl:gap-6">
                  {[
                    ["6-8 Weeks", "Rapid Prototyping Cycles"],
                    ["150%", "ROI on R&D Investments"],
                    ["24", "Patents Filed"],
                  ].map(([value, label], index) => (
                    <div
                      key={index}
                      className="p-3 sm:p-4 2xl:p-6 bg-gray-800/30 rounded-xl hover:bg-cyan-500/10 transition-colors"
                    >
                      <div className="text-cyan-400 text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-bold mb-1 sm:mb-2 2xl:mb-3">
                        {value}
                      </div>
                      <div className="text-gray-300 text-xs sm:text-sm 2xl:text-base">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Development Process */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8 md:space-y-12 2xl:space-y-16"
            >
              <div className="bg-gray-800/50 p-4 sm:p-6 md:p-8 2xl:p-10 rounded-2xl border border-gray-700/50">
                <h3 className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-6 2xl:mb-8">
                  R&D Methodology
                </h3>
                <div className="space-y-3 sm:space-y-4 md:space-y-6 2xl:space-y-8">
                  {[
                    [
                      "Discovery Phase",
                      "Requirements analysis & technology scouting",
                    ],
                    ["Concept Design", "System architecture & simulation"],
                    ["Prototyping", "Hardware-in-loop testing"],
                    ["Validation", "Industrial environment trials"],
                  ].map(([title, desc], index) => (
                    <div
                      key={index}
                      className="flex gap-2 sm:gap-3 md:gap-4 2xl:gap-5 p-3 sm:p-4 2xl:p-6 bg-gray-800/30 rounded-xl hover:bg-cyan-500/10 transition-colors"
                    >
                      <div className="text-cyan-400 font-bold text-sm sm:text-base 2xl:text-lg">
                        {index + 1}.
                      </div>
                      <div>
                        <div className="font-semibold text-white mb-1 2xl:mb-2 text-sm sm:text-base 2xl:text-lg">
                          {title}
                        </div>
                        <div className="text-gray-400 text-xs sm:text-sm 2xl:text-base">
                          {desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-4 sm:p-6 md:p-8 2xl:p-10 rounded-2xl border border-cyan-400/20">
                <h3 className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-6 2xl:mb-8">
                  Industry Impact
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 2xl:gap-6">
                  {[
                    { sector: "Manufacturing", tech: "Predictive QC Systems" },
                    { sector: "Energy", tech: "Smart Grid Controllers" },
                    { sector: "Robotics", tech: "Autonomous Navigation" },
                    { sector: "Chemicals", tech: "Reactive Process Control" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-3 sm:p-4 2xl:p-6 bg-gray-800/30 rounded-xl hover:bg-cyan-500/10 transition-colors"
                    >
                      <div className="text-cyan-400 font-medium mb-1 2xl:mb-2 text-sm sm:text-base 2xl:text-lg">
                        {item.sector}
                      </div>
                      <div className="text-gray-300 text-xs sm:text-sm 2xl:text-base">
                        {item.tech}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Removed "R&D Partnership Inquiry" section */}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RDDevelopmentPage;
