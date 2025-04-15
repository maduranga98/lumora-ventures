// src/automation/AutomationControlPage.js
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import AutomationContactForm from "./AutomationContactForm";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const AutomationControlPage = () => {
  // State for contact form modal
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  // State for the quick contact form
  const [quickFormData, setQuickFormData] = useState({
    plantName: "",
    contactEmail: "",
    requirements: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState(null);

  // Handle input changes for quick form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuickFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle quick form submission
  const handleQuickFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    try {
      // Save data to Firebase in a different collection
      await addDoc(collection(db, "technicalProposals"), {
        ...quickFormData,
        createdAt: serverTimestamp(),
        status: "new",
        source: "quick-form",
      });

      // Show success message
      setFormSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormSuccess(false);
        setQuickFormData({
          plantName: "",
          contactEmail: "",
          requirements: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Error saving form data:", error);
      setFormError(
        "There was an error submitting your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {/* Contact Form Modal */}
      <AutomationContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 md:pt-32 2xl:pt-40 pb-12 sm:pb-16 md:pb-24 2xl:pb-32 overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-16 2xl:px-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center"
          >
            <motion.h1
              variants={slideUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-black text-white mb-4 sm:mb-6 md:mb-8 2xl:mb-10 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Precision Automation
              </span>
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-medium text-gray-300">
                Engineered for Peak Performance
              </span>
            </motion.h1>

            <motion.p
              variants={slideUp}
              className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-300 mb-6 sm:mb-8 md:mb-12 2xl:mb-16 max-w-3xl 2xl:max-w-5xl mx-auto leading-relaxed"
            >
              Transform your industrial operations with cyber-physical systems
              that combine cutting-edge automation with intelligent control
              architectures.
            </motion.p>

            <motion.div variants={slideUp}>
              <button
                onClick={() => setIsContactFormOpen(true)}
                className="inline-block px-6 sm:px-8 md:px-10 2xl:px-14 py-3 sm:py-4 md:py-5 2xl:py-6 bg-cyan-500 hover:bg-cyan-600 text-white text-sm sm:text-base md:text-lg 2xl:text-xl font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/30"
              >
                Optimize Your Systems Now →
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative pb-12 sm:pb-16 md:pb-24 2xl:pb-32">
        <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-16 2xl:px-24">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 2xl:gap-20">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-6 sm:space-y-8 md:space-y-12 2xl:space-y-16"
            >
              <div className="bg-gray-800/50 p-4 sm:p-6 md:p-8 2xl:p-10 rounded-2xl border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500">
                <h2 className="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6 2xl:mb-8">
                  Industrial Control Mastery
                </h2>
                <p className="text-sm sm:text-base 2xl:text-lg text-gray-400 leading-relaxed mb-4 sm:mb-6 md:mb-8 2xl:mb-10">
                  We architect automation ecosystems that merge OT and IT,
                  delivering cyber-secure solutions with real-time analytics and
                  predictive maintenance capabilities.
                </p>

                <div className="space-y-4 sm:space-y-6 md:space-y-8 2xl:space-y-10">
                  {[
                    {
                      title: "PLC Programming",
                      desc: "Advanced ladder logic with modular programming and remote diagnostics capabilities",
                      icon: "🔄",
                    },
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
                  System Architecture
                </h2>
                <div className="space-y-3 sm:space-y-4 md:space-y-6 2xl:space-y-8">
                  <div className="flex items-center gap-3 sm:gap-4 2xl:gap-6 p-3 sm:p-4 2xl:p-6 bg-gray-800/30 rounded-xl">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 2xl:w-14 2xl:h-14 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-cyan-400 2xl:text-xl">📈</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm sm:text-base 2xl:text-lg">
                        Real-time KPIs
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm 2xl:text-base">
                        OEE monitoring • Energy analytics • Quality metrics
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4 2xl:gap-6 p-3 sm:p-4 2xl:p-6 bg-gray-800/30 rounded-xl">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 2xl:w-14 2xl:h-14 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-cyan-400 2xl:text-xl">🔒</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm sm:text-base 2xl:text-lg">
                        Cybersecurity
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm 2xl:text-base">
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
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8 md:space-y-12 2xl:space-y-16"
            >
              <div className="bg-gray-800/50 p-4 sm:p-6 md:p-8 2xl:p-10 rounded-2xl border border-gray-700/50">
                <h3 className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-6 2xl:mb-8">
                  Operational Benefits
                </h3>
                <div className="space-y-3 sm:space-y-4 md:space-y-6 2xl:space-y-8">
                  {[
                    ["30%", "Reduction in energy costs"],
                    ["50%", "Faster fault diagnosis"],
                    ["99.8%", "System uptime guarantee"],
                  ].map(([value, label], index) => (
                    <div
                      key={index}
                      className="p-3 sm:p-4 2xl:p-6 bg-gray-800/30 rounded-xl hover:bg-cyan-500/10 transition-colors"
                    >
                      <div className="text-cyan-400 text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-bold mb-1 sm:mb-2 2xl:mb-3">
                        {value}
                      </div>
                      <div className="text-gray-300 text-sm sm:text-base 2xl:text-lg">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-4 sm:p-6 md:p-8 2xl:p-10 rounded-2xl border border-cyan-400/20">
                <h3 className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-6 2xl:mb-8">
                  Industry Applications
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 2xl:gap-6">
                  {[
                    { name: "Manufacturing", icon: "🏭" },
                    { name: "Energy", icon: "⚡" },
                    { name: "Chemicals", icon: "🧪" },
                    { name: "Pharma", icon: "💊" },
                  ].map((industry, index) => (
                    <div
                      key={index}
                      className="p-3 sm:p-4 2xl:p-6 bg-gray-800/30 rounded-xl text-center hover:bg-cyan-500/10 transition-colors"
                    >
                      <div className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl mb-1 sm:mb-2 2xl:mb-3">
                        {industry.icon}
                      </div>
                      <div className="text-gray-300 font-medium text-sm sm:text-base 2xl:text-lg">
                        {industry.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                id="contact-form"
                className="bg-gray-900 p-4 sm:p-6 md:p-8 2xl:p-10 rounded-2xl shadow-2xl border border-cyan-400/20"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-6 2xl:mb-8">
                  System Consultation
                </h3>

                {formSuccess ? (
                  <div className="bg-cyan-500/20 border border-cyan-400 text-cyan-300 p-4 rounded-xl text-center">
                    <p className="text-lg font-medium mb-2">
                      Thank you for your interest!
                    </p>
                    <p>
                      Your proposal request has been received. Our technical
                      team will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleQuickFormSubmit}
                    className="space-y-3 sm:space-y-4 md:space-y-6 2xl:space-y-8"
                  >
                    {formError && (
                      <div className="bg-red-900/30 border border-red-800 text-red-300 p-4 rounded-xl">
                        {formError}
                      </div>
                    )}
                    <div>
                      <input
                        type="text"
                        name="plantName"
                        value={quickFormData.plantName}
                        onChange={handleInputChange}
                        placeholder="Plant Name"
                        required
                        className="w-full px-3 sm:px-4 2xl:px-5 py-2 sm:py-3 2xl:py-4 bg-gray-800 text-white rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base 2xl:text-lg"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="contactEmail"
                        value={quickFormData.contactEmail}
                        onChange={handleInputChange}
                        placeholder="Technical Contact Email"
                        required
                        className="w-full px-3 sm:px-4 2xl:px-5 py-2 sm:py-3 2xl:py-4 bg-gray-800 text-white rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base 2xl:text-lg"
                      />
                    </div>
                    <div>
                      <textarea
                        rows="3"
                        name="requirements"
                        value={quickFormData.requirements}
                        onChange={handleInputChange}
                        placeholder="System Requirements"
                        required
                        className="w-full px-3 sm:px-4 2xl:px-5 py-2 sm:py-3 2xl:py-4 bg-gray-800 text-white rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base 2xl:text-lg"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-4 sm:px-6 2xl:px-8 py-2 sm:py-3 md:py-4 2xl:py-5 text-white text-sm sm:text-base 2xl:text-lg font-bold rounded-lg transition-all duration-300 transform hover:scale-[1.02] ${
                        isSubmitting
                          ? "bg-gray-600 cursor-not-allowed"
                          : "bg-cyan-500 hover:bg-cyan-600"
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </div>
                      ) : (
                        "Request Technical Proposal"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomationControlPage;
