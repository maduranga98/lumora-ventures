import React, { useEffect, useState } from "react";
import { X, Send, CheckCircle } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const ContactForm = ({ isOpen, onClose, theme }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    website: "",
    message: "",
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
      await addDoc(collection(db, "auditRequests"), {
        ...formData,
        createdAt: serverTimestamp(),
        status: "new",
      });

      // Show success message
      setFormSubmitted(true);

      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessName: "",
          website: "",
          message: "",
        });
        onClose();
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {formSubmitted ? (
          <div className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle size={60} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Thank You!
            </h3>
            <p className="text-gray-600 mb-6">
              Your audit request has been received. We'll get back to you with
              your free GBP audit results shortly!
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3
                className="text-xl font-bold"
                style={{ color: theme?.colors?.primary || "#4F46E5" }}
              >
                Get Your Free GBP Audit
              </h3>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll analyze your Google Business
                Profile, identifying opportunities for improvement to increase
                your visibility and customer engagement.
              </p>

              {formError && (
                <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md">
                  {formError}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="businessName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Business Name *
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your Business LLC"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="website"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Website URL
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Tell us about your business and specific goals..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                    style={{
                      backgroundColor: theme?.colors?.primary || "#4F46E5",
                      boxShadow: `0 4px 14px 0 ${
                        (theme?.colors?.primary || "#4F46E5") + "80"
                      }`,
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                        <Send size={18} />
                        Request Free Audit
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy and
                    terms of service.
                  </p>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
