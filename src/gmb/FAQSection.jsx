import React, { useState, useEffect } from "react";
import { useTheme } from "./Theme";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import ContactForm from "../widgets/ContactForm";

const FAQSection = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);

  // Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    const section = document.getElementById("faqSection");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Toggle FAQ item expansion
  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  // FAQ data
  const faqs = [
    {
      question:
        "Do I really need a Google Business Profile if I already have a website?",
      answer:
        "Absolutely! Your website and GBP serve different purposes but work together. While your website provides detailed information about your business, GBP is specifically designed to help you appear in local searches and Google Maps. When potential customers search for services 'near me' or in your area, a well-optimized GBP significantly increases your chances of being found. Plus, GBP provides quick access to your contact information, directions, reviews, and hours—information local customers need immediately.",
    },
    {
      question:
        "How long does it take to see results from a professionally managed GBP?",
      answer:
        "Most businesses start seeing increased visibility within 2-4 weeks after optimization. However, the full impact builds over time as your profile gains activity, reviews, and relevance. Factors affecting timeline include your local competition, industry, starting point, and how actively you participate (responding to reviews, etc.). We provide monthly performance reports so you can track progress clearly.",
    },
    {
      question: "What if I already have a Google Business Profile?",
      answer:
        "Great! We'll start by conducting a comprehensive audit of your existing profile to identify areas for improvement. We'll then optimize all aspects of your listing—from business information and categories to photos and attributes. Many businesses have partially completed profiles or are missing key optimization opportunities. We'll transform your existing listing into a powerful marketing asset without losing any of your current reviews or data.",
    },
    {
      question: "Do you guarantee I'll rank #1 in local search results?",
      answer:
        "We don't make ranking guarantees, and we recommend being cautious of any company that does. Google's algorithms consider many factors, including some beyond anyone's control. What we do guarantee is implementing proven optimization strategies, following Google's best practices, and continuously working to improve your visibility. Our track record shows most clients see significant improvements in visibility, engagement, and customer actions.",
    },
    {
      question: "What information do you need from me to get started?",
      answer:
        "Our onboarding process is simple. We'll need basic business information (exact business name, address, phone number, website, hours), access to your Google account if you have an existing listing, your business category, a few high-quality photos, and any specific services or products you offer. We've streamlined the process with a simple form that takes about 15 minutes to complete. After that, we handle everything else!",
    },
    {
      question: "How do you handle posting and updates for my business?",
      answer:
        "We create and publish weekly posts highlighting your services, special offers, events, or general updates. You can provide specific content you'd like us to share, or our team can create relevant content based on your business and industry. We'll establish a content calendar and always welcome your input on what you'd like to showcase.",
    },
    {
      question: "Can I see what changes you're making to my profile?",
      answer:
        "Absolutely! Transparency is important to us. You'll receive a detailed monthly report showing all optimizations and updates made to your profile, along with performance metrics. You'll also have 24/7 access to our client dashboard where you can view your profile status, upcoming posts, recent reviews, and more in real-time.",
    },
    {
      question: "How do you handle review management?",
      answer:
        "We monitor your reviews daily and notify you of new ones. For positive reviews, we can draft professional responses for your approval or post them directly if you prefer. For negative reviews, we alert you immediately and work with you to craft appropriate responses that address concerns professionally while protecting your reputation. We also provide guidance on ethically generating more reviews from satisfied customers.",
    },
    {
      question: "Is there a minimum contract period?",
      answer:
        "We offer month-to-month service with no long-term contracts required. We simply ask for 30 days notice if you wish to cancel. That said, GBP management is an ongoing process for best results, and most of our clients stay with us for years because of the continuous value they receive.",
    },
    {
      question:
        "Can I make changes to my profile myself while you're managing it?",
      answer:
        "Yes, you'll still have full access to your Google Business Profile. However, we recommend discussing changes with us first to ensure they align with our optimization strategy. If you make changes, simply let us know so we can update our records and ensure everything remains consistent.",
    },
  ];

  // Simple Email Contact Form Component
  const SimpleContactForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "Question about GBP Services",
      message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

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

      // Simulate form submission
      try {
        // Here you would normally submit to your backend or email service
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setFormSubmitted(true);

        setTimeout(() => {
          onClose();
        }, 2000);
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
        <div
          className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {formSubmitted ? (
            <div className="p-6 text-center">
              <div className="text-green-500 text-4xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-600">
                Thank you for contacting us. We'll get back to you shortly.
              </p>
            </div>
          ) : (
            <>
              <div className="bg-gradient-to-r from-[#09122C] to-[#1A2A5F] p-6 text-white">
                <h3 className="font-bold text-xl">Contact Our GBP Team</h3>
                <p className="text-white/80 text-sm mt-1">
                  We'll get back to you as soon as possible
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#ECAF41] focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#ECAF41] focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Subject*
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#ECAF41] focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Message*
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#ECAF41] focus:border-transparent"
                  ></textarea>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-gradient-to-r from-[#ECAF41] to-[#F5C15D] text-[#09122C] font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <section
      id="faqSection"
      className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-3"
            style={{
              backgroundColor: `${theme.colors.primary}20`,
              color: theme.colors.primary,
            }}
          >
            GET ANSWERS
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: theme.colors.text.primary }}
          >
            Your GBP Questions Answered
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Common questions about Google Business Profile and our professional
            management services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-sm transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleExpand(index)}
                aria-expanded={expandedIndex === index}
              >
                <div className="flex items-center">
                  <HelpCircle
                    className="h-5 w-5 mr-3 flex-shrink-0"
                    style={{ color: theme.colors.primary }}
                  />
                  <h3
                    className="font-medium text-lg"
                    style={{
                      color:
                        expandedIndex === index
                          ? theme.colors.primary
                          : theme.colors.text.primary,
                    }}
                  >
                    {faq.question}
                  </h3>
                </div>
                <div>
                  {expandedIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>

              <div
                className={`px-6 pb-4 transition-all duration-300 overflow-hidden ${
                  expandedIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-8 text-gray-600">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div
          className={`mt-12 bg-white p-6 rounded-xl shadow-sm text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3
            className="text-xl font-bold mb-3"
            style={{ color: theme.colors.text.primary }}
          >
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-5">
            We're here to help! Contact our friendly team for answers to any
            other questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: theme.colors.secondary,
                color: "#fff",
              }}
              onClick={() => setShowEmailForm(true)}
            >
              Contact Us
            </button>
            <button
              className="px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg border"
              style={{
                backgroundColor: "transparent",
                borderColor: theme.colors.primary,
                color: theme.colors.primary,
              }}
              onClick={() => setShowContactForm(true)}
            >
              Schedule a Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form for Free Consultation */}
      <ContactForm
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
        theme={theme}
      />

      {/* Simple Email Form for Contact Us */}
      {showEmailForm && (
        <SimpleContactForm onClose={() => setShowEmailForm(false)} />
      )}
    </section>
  );
};

export default FAQSection;
