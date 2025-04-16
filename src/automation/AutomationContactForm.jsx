// src/automation/AutomationContactForm.js
import React, { useEffect, useState } from "react";
import { X, Send, CheckCircle } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { motion } from "framer-motion";

const AutomationContactForm = ({ isOpen, onClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    systemType: "HMI Programming",
    projectDetails: "",
    urgencyLevel: "Standard",
  });
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    try {
      // Save data to Firebase
      await addDoc(collection(db, "automationInquiries"), {
        ...formData,
        createdAt: serverTimestamp(),
        status: "new",
      });

      // Show success message
      setFormSubmitted(true);

      // Reset form after 5 seconds and close modal
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          companyName: "",
          systemType: "HMI Programming",
          projectDetails: "",
          urgencyLevel: "Standard",
        });
        onClose();
      }, 5000);
    } catch (error) {
      console.error("Error saving form data:", error);
      setFormError(
        "There was an error submitting your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        {formSubmitted ? (
          <div className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle size={80} className="text-cyan-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Inquiry Submitted!
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Your automation inquiry has been received. Our engineering team
              will analyze your requirements and contact you within 24 hours.
            </p>
            <div className="mt-6">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 font-medium rounded-xl transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Industrial Automation Consultation
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-cyan-400 transition-colors p-1 rounded-lg hover:bg-gray-700/30"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-300 mb-6">
                Complete the form below to initiate your custom automation
                solution. Our team of engineers will analyze your requirements
                and provide a detailed proposal.
              </p>

              {formError && (
                <div className="mb-6 p-4 bg-red-900/30 border border-red-800 text-red-300 rounded-xl">
                  {formError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 placeholder-gray-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 placeholder-gray-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 placeholder-gray-500"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Company Name*
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 placeholder-gray-500"
                      placeholder="Acme Industries"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="systemType"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    System Type*
                  </label>
                  <select
                    id="systemType"
                    name="systemType"
                    value={formData.systemType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  >
                    <option value="HMI Programming">HMI Programming</option>
                    <option value="VFD">VFD</option>
                    <option value="PLC Programming">PLC Programming</option>
                    <option value="Panel Wiring">Panel Wiring</option>
                    <option value="Full Control Stack">
                      Full Control Stack
                    </option>
                    <option value="R&D Project">R&D Project</option>
                    <option value="Maintenance Service">
                      Maintenance Service
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="urgencyLevel"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Urgency Level
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {["Standard", "Priority", "Critical"].map((level) => (
                      <label
                        key={level}
                        className={`flex items-center justify-center px-4 py-3 rounded-xl cursor-pointer border transition-all duration-300 ${
                          formData.urgencyLevel === level
                            ? "border-cyan-500 bg-cyan-500/10 text-cyan-400"
                            : "border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700"
                        }`}
                      >
                        <input
                          type="radio"
                          name="urgencyLevel"
                          value={level}
                          checked={formData.urgencyLevel === level}
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
                    htmlFor="projectDetails"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Project Details*
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 placeholder-gray-500"
                    placeholder="Describe your automation needs, challenges, and desired outcomes..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-bold text-lg transition-all duration-300 shadow-xl shadow-cyan-500/20 ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-cyan-500 hover:bg-cyan-600 transform hover:scale-[1.02]"
                  }`}
                >
                  {isSubmitting ? (
                    <>
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
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Submit Industrial Inquiry
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
              </form>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default AutomationContactForm;
