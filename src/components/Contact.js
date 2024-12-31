import React, { useState } from "react";
import { Mail, Phone, Send, X } from "lucide-react";
import emailjs from "@emailjs/browser";

const AlertDialog = ({ message, type, onClose }) => (
  <div
    className={`mb-6 p-4 rounded-lg flex items-center justify-between ${
      type === "error"
        ? "bg-red-50 text-red-700 border border-red-200"
        : "bg-green-50 text-green-700 border border-green-200"
    }`}
  >
    <span>{message}</span>
    <button
      onClick={onClose}
      className="ml-2 hover:opacity-70 transition-opacity"
    >
      <X className="h-4 w-4" />
    </button>
  </div>
);

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "info@lumoraventures.com",
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });

        // Clear form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      text: "info@lumoraventures.com",
      href: "mailto:info@lumoraventures.com",
    },
    { icon: Phone, text: "+94-71-999-8500", href: "tel:+94719998500" },
    { icon: Phone, text: "+94-76-620-6555", href: "tel:+94766206555" },
  ];

  const renderInput = (label, name, type = "text", rows) => (
    <div className="group">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      {rows ? (
        <textarea
          name={name}
          id={name}
          rows={rows}
          value={formData[name]}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 group-hover:border-indigo-300"
          required
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          value={formData[name]}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 group-hover:border-indigo-300"
          required
        />
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We'd love to hear from you
          </p>
        </div>

        {status.message && (
          <AlertDialog
            message={status.message}
            type={status.type}
            onClose={() => setStatus({ type: "", message: "" })}
          />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8 animate-on-scroll opacity-0 -translate-x-8">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="group flex items-center text-gray-600 hover:text-indigo-600 transition-all duration-300"
                  >
                    <item.icon className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {item.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-on-scroll opacity-0 translate-x-8">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {renderInput("Name", "name")}
                  {renderInput("Email", "email", "email")}
                </div>
                {renderInput("Subject", "subject")}
                {renderInput("Message", "message", "text", 6)}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full flex items-center justify-center py-3 px-4 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
