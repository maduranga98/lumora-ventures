// src/automation/ContactPage.js
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const ContactPage = () => {
  // State for the technical inquiry form
  const [technicalFormData, setTechnicalFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    systemType: "",
    urgencyLevel: "Routine",
    technicalDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState(null);

  // Handle input changes for technical form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTechnicalFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle technical form submission
  const handleTechnicalFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    try {
      // Save data to Firebase in technical inquiries collection
      await addDoc(collection(db, "technicalInquiries"), {
        ...technicalFormData,
        createdAt: serverTimestamp(),
        status: "new",
        source: "contact-page",
      });

      // Show success message
      setFormSuccess(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setFormSuccess(false);
        setTechnicalFormData({
          firstName: "",
          lastName: "",
          email: "",
          systemType: "",
          urgencyLevel: "Routine",
          technicalDetails: "",
        });
      }, 5000);
    } catch (error) {
      console.error("Error saving technical inquiry:", error);
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

                {formSuccess ? (
                  <div className="bg-cyan-500/20 border border-cyan-400 text-cyan-300 p-6 rounded-xl text-center">
                    <div className="text-cyan-400 text-5xl mb-4">✓</div>
                    <h3 className="text-xl font-bold mb-2">
                      Thank You For Your Inquiry!
                    </h3>
                    <p className="text-lg mb-4">
                      Your technical request has been successfully submitted.
                    </p>
                    <p>
                      Our engineering team will review your requirements and
                      reach out within 24 hours to discuss your automation
                      needs.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleTechnicalFormSubmit}
                    className="space-y-4 sm:space-y-6 2xl:space-y-8"
                  >
                    {formError && (
                      <div className="bg-red-900/30 border border-red-800 text-red-300 p-4 rounded-xl">
                        {formError}
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 2xl:gap-8">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-gray-400 mb-1 sm:mb-2 2xl:mb-3 text-sm sm:text-base 2xl:text-lg"
                        >
                          First Name*
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={technicalFormData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 2xl:px-5 py-2 sm:py-3 2xl:py-4 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base 2xl:text-lg"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-gray-400 mb-1 sm:mb-2 2xl:mb-3 text-sm sm:text-base 2xl:text-lg"
                        >
                          Last Name*
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={technicalFormData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 2xl:px-5 py-2 sm:py-3 2xl:py-4 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base 2xl:text-lg"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-400 mb-1 sm:mb-2 2xl:mb-3 text-sm sm:text-base 2xl:text-lg"
                      >
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={technicalFormData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 2xl:px-5 py-2 sm:py-3 2xl:py-4 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base 2xl:text-lg"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="systemType"
                        className="block text-gray-400 mb-1 sm:mb-2 2xl:mb-3 text-sm sm:text-base 2xl:text-lg"
                      >
                        System Type
                      </label>
                      <select
                        id="systemType"
                        name="systemType"
                        value={technicalFormData.systemType}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 2xl:px-5 py-2 sm:py-3 2xl:py-4 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base 2xl:text-lg"
                      >
                        <option value="">Select Automation System</option>
                        <option value="HMI Networks">HMI Networks</option>
                        <option value="VFD Arrays">VFD Arrays</option>
                        <option value="PLC Systems">PLC Systems</option>
                        <option value="SCADA Solutions">SCADA Solutions</option>
                        <option value="Full Control Stack">
                          Full Control Stack
                        </option>
                        <option value="R&D Project">R&D Project</option>
                        <option value="Maintenance Services">
                          Maintenance Services
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-400 mb-1 sm:mb-2 2xl:mb-3 text-sm sm:text-base 2xl:text-lg">
                        Urgency Level
                      </label>
                      <div className="grid grid-cols-3 gap-2 sm:gap-4 2xl:gap-6">
                        {["Routine", "Priority", "Emergency"].map((level) => (
                          <label
                            key={level}
                            className={`flex items-center justify-center px-4 py-3 rounded-lg cursor-pointer border transition-all ${
                              technicalFormData.urgencyLevel === level
                                ? "border-cyan-500 bg-cyan-500/10 text-cyan-400"
                                : "border-gray-700 text-gray-300 hover:bg-gray-800/50"
                            }`}
                          >
                            <input
                              type="radio"
                              name="urgencyLevel"
                              value={level}
                              checked={technicalFormData.urgencyLevel === level}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <span>{level}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="technicalDetails"
                        className="block text-gray-400 mb-1 sm:mb-2 2xl:mb-3 text-sm sm:text-base 2xl:text-lg"
                      >
                        Technical Details*
                      </label>
                      <textarea
                        id="technicalDetails"
                        name="technicalDetails"
                        value={technicalFormData.technicalDetails}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-3 sm:px-4 2xl:px-5 py-2 sm:py-3 2xl:py-4 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base 2xl:text-lg"
                        placeholder="Describe your system requirements, challenges, and desired outcomes..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-4 sm:px-6 2xl:px-8 py-2 sm:py-3 md:py-4 2xl:py-6 text-white text-sm sm:text-base 2xl:text-lg font-bold rounded-lg transition-all duration-300 transform hover:scale-[1.02] ${
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
                        "Submit Technical Request"
                      )}
                    </button>
                  </form>
                )}
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
    </div>
  );
};

export default ContactPage;
