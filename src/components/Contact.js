import React, { useState } from "react";
import { Mail, Phone, Send, X, MapPin, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";

const AlertDialog = ({ message, type, onClose }) => (
  <div
    className={`fixed top-4 right-4 max-w-md transform transition-all duration-500 ease-in-out ${
      message ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
    }`}
  >
    <div
      className={`p-4 rounded-lg shadow-lg flex items-center space-x-3 ${
        type === "error"
          ? "bg-red-50 text-red-700 border-l-4 border-red-500"
          : "bg-green-50 text-green-700 border-l-4 border-green-500"
      }`}
    >
      <p className="flex-1 text-sm font-medium">{message}</p>
      <button
        onClick={onClose}
        className="p-1 rounded-full hover:bg-black/5 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
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

  const [focusedField, setFocusedField] = useState("");
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
      title: "Email Us",
      text: "info@lumoraventures.com",
      href: "mailto:info@lumoraventures.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      text: "+94-71-999-8500",
      href: "tel:+94719998500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      text: "Office 4157, 58 Peregrine Road, Hainault, Ilford, Essex, IG6 3SZ",
      href: "#",
    },
  ];

  const renderInput = (label, name, type = "text", rows) => (
    <div className="relative group">
      <label
        className={`block text-sm font-medium transition-all duration-300 ${
          focusedField === name ? "text-[#ECAF41]" : "text-[#09122C]/90"
        }`}
      >
        {label}
      </label>
      {rows ? (
        <textarea
          name={name}
          id={name}
          rows={rows}
          value={formData[name]}
          onChange={handleChange}
          onFocus={() => setFocusedField(name)}
          onBlur={() => setFocusedField("")}
          className="mt-1 w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-[#09122C]/20 
                 rounded-lg focus:ring-2 focus:ring-[#ECAF41] focus:border-transparent 
                 transition-all duration-300 group-hover:border-[#ECAF41]/50"
          required
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          value={formData[name]}
          onChange={handleChange}
          onFocus={() => setFocusedField(name)}
          onBlur={() => setFocusedField("")}
          className="mt-1 w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-[#09122C]/20 
                 rounded-lg focus:ring-2 focus:ring-[#ECAF41] focus:border-transparent 
                 transition-all duration-300 group-hover:border-[#ECAF41]/50"
          required
        />
      )}
    </div>
  );

  return (
    <section className="relative min-h-screen bg-[#F8FAFF] overflow-hidden">
      <AlertDialog
        message={status.message}
        type={status.type}
        onClose={() => setStatus({ type: "", message: "" })}
      />

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFF] to-[#F0F4FF]" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #09122C 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute top-0 right-0 w-72 h-72 lg:w-96 lg:h-96 bg-[#09122C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 lg:w-96 lg:h-96 bg-[#ECAF41]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-start min-h-screen py-16 sm:py-20 md:py-24 lg:py-32">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#09122C] mb-6">
              Get in Touch
            </h2>
            <p className="text-lg sm:text-xl text-[#09122C]/90 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a key={index} href={item.href} className="block group">
                  <div
                    className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl 
                                transition-all duration-300 p-6 relative overflow-hidden border border-white/80"
                  >
                    <div className="relative z-10">
                      <div
                        className="inline-flex items-center justify-center w-12 h-12 rounded-lg 
                                  bg-gradient-to-r from-[#09122C] to-[#1A2A5F] mb-4"
                      >
                        <item.icon className="h-6 w-6 text-[#ECAF41]" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#09122C] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#09122C]/90 group-hover:text-[#09122C] transition-colors">
                        {item.text}
                      </p>
                      <ArrowRight
                        className="h-5 w-5 text-[#ECAF41]/60 absolute top-6 right-6 
                                        transform transition-transform group-hover:translate-x-1 
                                        group-hover:text-[#ECAF41]"
                      />
                    </div>
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-[#ECAF41] to-[#F5C15D] 
                                opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                    />
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-8 border-2 border-white/80">
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
                    className="group w-full flex items-center justify-center py-4 px-6 rounded-lg 
                             text-[#09122C] bg-gradient-to-r from-[#ECAF41] to-[#F5C15D] 
                             hover:from-[#F5C15D] hover:to-[#ECAF41]
                             transform hover:scale-[1.02] transition-all duration-300
                             shadow-lg shadow-[#ECAF41]/20 hover:shadow-[#ECAF41]/30
                             disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                             border-2 border-[#ECAF41]"
                  >
                    <Send className="h-5 w-5 mr-2 transition-transform group-hover:translate-x-1" />
                    <span className="text-sm font-medium">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
