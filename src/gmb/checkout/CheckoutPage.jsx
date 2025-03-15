import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  ArrowLeft,
  Shield,
  CheckCircle,
  Star,
  Clock,
  Globe,
  HelpCircle,
} from "lucide-react";
import CheckoutForm from "./CheckoutForm";
import { useTheme } from "../Theme";
import logoImage from "../../assets/logo_new.png";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(
  "pk_test_51QdE3AKKYKi1ENnWqURjcwjpZNxAEnc0LRFhnQevMqMfRqmcldSPrlr2BQbesNMxmQhaHaMtn3p3gP2XivGXjtxY00VoJie574"
);

const CheckoutPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  // Extract package data from location state, or use defaults
  const packageData = location.state?.packageData || {
    name: "Professional GBP Management",
    price: 150,
    billingPeriod: "month",
  };

  // Benefits list
  const benefits = [
    "Enhanced local visibility in Google search results",
    "Professionally managed business profile with weekly updates",
    "Optimized local SEO and improved local rankings",
    "Strategic profile management to attract local customers",
    "Expert team handling all aspects of your Google presence",
    "Regular performance reporting to track your ROI",
  ];

  // Service features
  const features = [
    { name: "Google Business Profile Optimization", included: true },
    { name: "Weekly Promotional Posts", included: true },
    { name: "Profile Verification", included: true },
    { name: "Q&A Management", included: true },
    { name: "Review Responses", included: true },
    { name: "Performance Reporting", included: true },
    { name: "Professional Image Management", included: true },
    { name: "Competitor Spam Sweep", included: true },
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen">
      {/* Navigation bar */}
      <nav className="py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="mx-auto px-4 lg:px-8 max-w-full">
          <div className="flex justify-between items-center">
            {/* Logo and Back Button */}
            <div className="flex items-center">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center font-medium text-indigo-600 hover:text-amber-500 transition-colors duration-300 mr-4 md:mr-6"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">Back</span>
              </button>

              {/* Logo */}
              <div className="flex items-center">
                <img
                  src={logoImage}
                  alt="Lumora Ventures"
                  className="h-7 sm:h-8 xl:h-9"
                />
                <span className="ml-2 text-lg font-bold text-indigo-700 hidden sm:inline xl:text-xl">
                  Lumora Ventures
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center">
            <h1
              className="text-2xl md:text-3xl font-bold mb-2"
              style={{ color: theme.colors.text.primary }}
            >
              Complete Your Purchase
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              You're just a few steps away from transforming your local online
              presence with our professional Google Business Profile management
              service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left column - Checkout Form */}
            <div>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md mb-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      {packageData.name}
                    </h2>
                    <p className="text-gray-500">
                      Complete Google Business Profile solution
                    </p>
                  </div>
                  <div
                    className="text-center px-4 py-2 rounded-lg"
                    style={{ backgroundColor: `${theme.colors.primary}15` }}
                  >
                    <span
                      className="text-2xl font-bold block"
                      style={{ color: theme.colors.primary }}
                    >
                      ${packageData.price}
                    </span>
                    <span className="text-xs text-gray-500">
                      /{packageData.billingPeriod}
                    </span>
                  </div>
                </div>

                <div className="border-t border-b border-gray-100 py-4 mb-6">
                  <h3 className="font-medium text-gray-700 mb-2">
                    Package includes:
                  </h3>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle
                          size={16}
                          className="text-green-500 mr-2 flex-shrink-0"
                        />
                        {feature.name}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Checkout Form with Stripe */}
                <Elements stripe={stripePromise}>
                  <CheckoutForm
                    packageName={packageData.name}
                    packagePrice={packageData.price}
                    onSuccess={() => navigate("/checkout/success")}
                    onCancel={() => navigate(-1)}
                  />
                </Elements>
              </div>

              {/* Security badges */}
              <div className="bg-gray-50 p-4 rounded-lg flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-500 text-sm">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-gray-400" />
                  <span>SSL Secure Payment</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-gray-400" />
                  <span>PCI DSS Compliant</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-gray-400" />
                  <span>Data Protection</span>
                </div>
              </div>
            </div>

            {/* Right column - Additional Content */}
            <div className="space-y-6">
              {/* Why Choose Us */}
              <div
                className="bg-white p-6 md:p-8 rounded-xl shadow-md"
                style={{ borderTop: `4px solid ${theme.colors.secondary}` }}
              >
                <h2
                  className="text-xl font-bold mb-4 flex items-center"
                  style={{ color: theme.colors.text.primary }}
                >
                  <Star
                    className="mr-2"
                    size={20}
                    style={{ color: theme.colors.secondary }}
                  />
                  Why Choose Our Service
                </h2>

                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle
                        size={18}
                        className="mr-2 mt-1 flex-shrink-0"
                        style={{ color: theme.colors.secondary }}
                      />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How It Works */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                <h2
                  className="text-xl font-bold mb-4 flex items-center"
                  style={{ color: theme.colors.text.primary }}
                >
                  <Clock
                    className="mr-2"
                    size={20}
                    style={{ color: theme.colors.secondary }}
                  />
                  How It Works
                </h2>

                <ol className="space-y-4">
                  <li className="flex">
                    <div
                      className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-3 mt-1"
                      style={{ backgroundColor: `${theme.colors.primary}15` }}
                    >
                      <span
                        className="text-sm font-bold"
                        style={{ color: theme.colors.primary }}
                      >
                        1
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">
                        Sign Up Today
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Complete your purchase and our team will receive
                        immediate notification to begin the onboarding process.
                      </p>
                    </div>
                  </li>

                  <li className="flex">
                    <div
                      className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-3 mt-1"
                      style={{ backgroundColor: `${theme.colors.primary}15` }}
                    >
                      <span
                        className="text-sm font-bold"
                        style={{ color: theme.colors.primary }}
                      >
                        2
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">
                        Initial Consultation
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Within 24 hours, we'll contact you to gather information
                        about your business and discuss your specific needs and
                        goals.
                      </p>
                    </div>
                  </li>

                  <li className="flex">
                    <div
                      className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-3 mt-1"
                      style={{ backgroundColor: `${theme.colors.primary}15` }}
                    >
                      <span
                        className="text-sm font-bold"
                        style={{ color: theme.colors.primary }}
                      >
                        3
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">
                        Profile Setup & Optimization
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Our team will optimize your Google Business Profile with
                        professional descriptions, images, and strategic
                        keywords.
                      </p>
                    </div>
                  </li>

                  <li className="flex">
                    <div
                      className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-3 mt-1"
                      style={{ backgroundColor: `${theme.colors.primary}15` }}
                    >
                      <span
                        className="text-sm font-bold"
                        style={{ color: theme.colors.primary }}
                      >
                        4
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">
                        Ongoing Management
                      </h3>
                      <p className="text-gray-600 text-sm">
                        We'll handle all aspects of your Google Business
                        Profile, from posting updates to responding to reviews,
                        while providing regular performance reports.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              {/* FAQ */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                <h2
                  className="text-xl font-bold mb-4 flex items-center"
                  style={{ color: theme.colors.text.primary }}
                >
                  <HelpCircle
                    className="mr-2"
                    size={20}
                    style={{ color: theme.colors.primary }}
                  />
                  Common Questions
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">
                      When will my service begin?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Our team will contact you within 24 hours of your purchase
                      to begin the onboarding process.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">
                      Can I cancel my subscription?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Yes, you can cancel anytime with no cancellation fees. We
                      don't lock you into long-term contracts.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">
                      How quickly will I see results?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Most clients begin seeing improvements in their local
                      visibility within 30 days, with significant growth at the
                      90-day mark.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div
                className="bg-gray-50 p-4 rounded-lg text-center"
                style={{
                  border: `1px dashed ${theme.colors.text.secondary}30`,
                }}
              >
                <p className="text-gray-600 text-sm">
                  Have questions before completing your purchase?
                </p>
                <p className="font-medium text-gray-800">
                  Call us at (555) 123-4567 or email{" "}
                  <a
                    href="mailto:info@lumoraventures.com"
                    style={{ color: theme.colors.primary }}
                  >
                    info@lumoraventures.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
