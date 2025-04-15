// src/automation/HomePage.js
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroGif from "../assets/hero.gif";
import AutomationContactForm from "./AutomationContactForm";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
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

const HomePage = () => {
  // Contact form modal state
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  // Preload the hero GIF to ensure it's available when rendered
  useEffect(() => {
    const img = new Image();
    img.src = heroGif;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      <Helmet>
        <title>Industrial Automation Solutions | Lumora Ventures</title>
        <meta
          name="description"
          content="Discover Lumora Ventures' industrial automation solutions—control systems, HMI & VFD programming, panel wiring, R&D, and maintenance. Optimize today!"
        />
      </Helmet>

      {/* Contact Form Modal */}
      <AutomationContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />

      {/* Hero Section - Full Screen with GIF Background */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* GIF Background with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroGif}
            alt="Industrial Automation Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-blue-900/70" />
        </div>

        {/* Animated Grid Texture */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-geometric.png')]" />

        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="relative z-10 text-center"
          >
            {/* Content */}
            <motion.div variants={fadeIn} className="relative z-10">
              <motion.h1
                variants={slideUp}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-white mb-6 sm:mb-10 2xl:mb-12 leading-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  Industrial Evolution
                </span>
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-medium text-gray-200">
                  Through Smart Automation
                </span>
              </motion.h1>

              <motion.p
                variants={slideUp}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-gray-200 mb-8 sm:mb-12 md:mb-16 2xl:mb-20 max-w-4xl 2xl:max-w-6xl mx-auto leading-relaxed"
              >
                Lumora Ventures delivers cutting-edge industrial automation
                solutions that redefine productivity and operational excellence.
              </motion.p>

              <motion.div
                variants={slideUp}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 2xl:gap-10 justify-center"
              >
                <button
                  onClick={() => setIsContactFormOpen(true)}
                  className="px-6 sm:px-8 md:px-12 2xl:px-16 py-4 sm:py-5 md:py-6 2xl:py-8 bg-cyan-500 hover:bg-cyan-600 text-white text-base sm:text-lg md:text-xl 2xl:text-2xl font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/30"
                >
                  Revolutionize Your Plant →
                </button>
                <Link
                  to="#services"
                  className="px-6 sm:px-8 md:px-12 2xl:px-16 py-4 sm:py-5 md:py-6 2xl:py-8 border-2 border-cyan-400/30 text-cyan-400 text-base sm:text-lg md:text-xl 2xl:text-2xl hover:border-cyan-400/60 font-bold rounded-xl transition-all duration-300 hover:bg-cyan-500/10"
                >
                  Explore Solutions
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="relative py-12 sm:py-16 md:py-24 2xl:py-32 bg-gray-900/50 backdrop-blur-xl"
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 2xl:gap-16"
          >
            {/* Service Cards */}
            {[
              {
                title: "Industrial Automation & Control",
                desc: "Custom solutions with PLC programming, HMI programming, VFD programming, and panel wiring.",
                icon: "⚡",
              },
              {
                title: "R&D Innovation Labs",
                desc: "Future-proof automation technologies and system optimization R&D",
                icon: "🔬",
              },
              {
                title: "Proactive Maintenance",
                desc: "24/7 monitoring and predictive maintenance agreements",
                icon: "🛡️",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 rounded-2xl p-6 sm:p-8 md:p-10 2xl:p-12 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl mb-4 sm:mb-6 md:mb-8 2xl:mb-10 text-cyan-400">
                    {service.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6 2xl:mb-8">
                    {service.title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-300 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="relative py-12 sm:py-16 md:py-24 2xl:py-32 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-blue-900/90 rounded-3xl p-6 sm:p-10 md:p-16 2xl:p-20 shadow-2xl border border-cyan-400/20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-black text-white mb-4 sm:mb-6 md:mb-8 2xl:mb-10">
              Ready for Industry 4.0 Transformation?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl text-gray-200 mb-6 sm:mb-8 md:mb-10 2xl:mb-12 max-w-4xl 2xl:max-w-5xl mx-auto">
              Partner with Lumora Ventures to implement automation solutions
              that deliver 200% ROI within 18 months
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => setIsContactFormOpen(true)}
                className="px-6 sm:px-8 md:px-14 2xl:px-16 py-3 sm:py-4 md:py-6 2xl:py-8 bg-cyan-500 hover:bg-cyan-600 text-white text-base sm:text-lg md:text-xl 2xl:text-2xl font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/20"
              >
                Schedule Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
