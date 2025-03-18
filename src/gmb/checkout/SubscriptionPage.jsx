// src/components/SubscriptionPage.js
import React, { useState } from "react";
import StripeProvider from "./StripeProvider";
import CheckoutForm from "./CheckoutForm";

const SubscriptionPage = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [subscriptionComplete, setSubscriptionComplete] = useState(false);
  const [subscriptionId, setSubscriptionId] = useState(null);

  const plans = [
    {
      id: "monthly",
      name: "Monthly Plan",
      price: 150,
      period: "month",
      features: [
        "Professional GBP Management",
        "Monthly Support",
        "24/7 Customer Service",
        "Basic Analytics",
      ],
    },
    {
      id: "annual",
      name: "Annual Plan",
      price: 1500,
      period: "year",
      popular: true,
      features: [
        "Professional GBP Management",
        "Priority Support",
        "24/7 Customer Service",
        "Advanced Analytics",
        "2 Months Free",
      ],
    },
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setShowCheckout(true);
  };

  const handleSubscriptionSuccess = ({ subscriptionId }) => {
    setSubscriptionId(subscriptionId);
    setSubscriptionComplete(true);
    setShowCheckout(false);
  };

  const handleCancel = () => {
    setShowCheckout(false);
    setSelectedPlan(null);
  };

  if (subscriptionComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <svg
              className="mx-auto h-14 w-14 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4"
              />
            </svg>
            <h2 className="mt-4 text-xl font-bold text-gray-900">
              Subscription Successful!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Thank you for your subscription. Your subscription ID is:{" "}
              <span className="font-medium">{subscriptionId}</span>
            </p>
          </div>
          <div className="mt-6">
            <p className="text-sm text-gray-600 text-center">
              You will receive a confirmation email shortly with details of your
              subscription.
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => (window.location.href = "/dashboard")}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showCheckout && selectedPlan) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Subscribe to {selectedPlan.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              ${selectedPlan.price} per {selectedPlan.period}
            </p>
          </div>
          <div className="p-6">
            <StripeProvider>
              <CheckoutForm
                packageName={selectedPlan.name}
                packagePrice={selectedPlan.price}
                onSuccess={handleSubscriptionSuccess}
                onCancel={handleCancel}
              />
            </StripeProvider>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Select the plan that best fits your needs. All plans include our
            professional GBP management services.
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`border rounded-lg shadow-sm p-6 bg-white flex flex-col ${
                plan.popular
                  ? "border-indigo-500 ring-2 ring-indigo-500 ring-opacity-50"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="inline-flex self-start px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 mb-4">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-semibold text-gray-900">
                {plan.name}
              </h3>

              <div className="mt-2 flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900">
                  ${plan.price}
                </span>
                <span className="ml-1 text-xl font-semibold text-gray-500">
                  /{plan.period}
                </span>
              </div>

              <ul className="mt-6 space-y-4 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSelectPlan(plan)}
                className={`mt-8 block w-full py-3 px-4 rounded-md text-center font-medium ${
                  plan.popular
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors`}
              >
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
