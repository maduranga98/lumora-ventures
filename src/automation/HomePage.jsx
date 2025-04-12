import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroGif from "../assets/hero.gif";

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

        <div className="max-w-full mx-auto px-4 w-full">
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
                className="text-6xl md:text-7xl xl:text-8xl font-black text-white mb-10 leading-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  Industrial Evolution
                </span>
                <br />
                <span className="text-5xl md:text-6xl font-medium text-gray-200">
                  Through Smart Automation
                </span>
              </motion.h1>

              <motion.p
                variants={slideUp}
                className="text-2xl md:text-3xl text-gray-200 mb-16 max-w-4xl mx-auto leading-relaxed"
              >
                Lumora Ventures delivers cutting-edge industrial automation
                solutions that redefine productivity and operational excellence.
              </motion.p>

              <motion.div
                variants={slideUp}
                className="flex flex-col sm:flex-row gap-8 justify-center"
              >
                <Link
                  to="#"
                  className="px-12 py-6 bg-cyan-500 hover:bg-cyan-600 text-white text-xl font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/30"
                >
                  Revolutionize Your Plant →
                </Link>
                <Link
                  to="#"
                  className="px-12 py-6 border-2 border-cyan-400/30 text-cyan-400 text-xl hover:border-cyan-400/60 font-bold rounded-xl transition-all duration-300 hover:bg-cyan-500/10"
                >
                  Explore Solutions
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 bg-gray-900/50 backdrop-blur-xl">
        <div className="max-w-full mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-3 gap-12"
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
                className="group relative bg-gray-800/50 rounded-2xl p-10 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="text-5xl mb-8 text-cyan-400">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    {service.title}
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <Link
                    to="#"
                    className="inline-flex items-center text-xl text-cyan-400 hover:text-cyan-300 font-medium group"
                  >
                    Discover Capabilities
                    <span className="ml-2 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="relative py-24 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-blue-900/90 rounded-3xl p-16 shadow-2xl border border-cyan-400/20"
          >
            <h2 className="text-5xl font-black text-white mb-8">
              Ready for Industry 4.0 Transformation?
            </h2>
            <p className="text-2xl text-gray-200 mb-10 max-w-4xl mx-auto">
              Partner with Lumora Ventures to implement automation solutions
              that deliver 200% ROI within 18 months
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link
                to="#"
                className="px-14 py-6 bg-cyan-500 hover:bg-cyan-600 text-white text-xl font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/20"
              >
                Schedule Free Consultation
              </Link>
              <Link
                to="#"
                className="px-14 py-6 border-2 border-cyan-400/30 text-cyan-400 text-xl hover:border-cyan-400/60 font-bold rounded-xl transition-all duration-300 hover:bg-cyan-500/10"
              >
                Download Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
