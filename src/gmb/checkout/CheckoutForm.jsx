import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { httpsCallable } from "firebase/functions";
import { functions } from "../../firebase";
import { useTheme } from "../Theme";

const CheckoutForm = ({ packageName, packagePrice, onSuccess, onCancel }) => {
  const stripe = useStripe();
  const elements = useElements();
  const theme = useTheme();

  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    businessAddress: "",
    website: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet
      return;
    }

    // Validate required fields
    const requiredFields = ["name", "email", "businessName", "businessAddress"];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      setError(
        `Please fill in all required fields: ${missingFields.join(", ")}`
      );
      return;
    }

    // Use the exact price ID you provided
    const priceId = "price_1R2nOQKKYKi1ENnWCnMjdSpR";

    setIsProcessing(true);
    setError(null);

    try {
      // console.log(
      //   `Creating payment for package: ${packageName} with priceId: ${priceId}`
      // );

      // 1. Create payment method
      const { error: paymentMethodError, paymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card: elements.getElement(CardElement),
          billing_details: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: {
              line1: formData.businessAddress,
            },
          },
        });

      if (paymentMethodError) {
        throw new Error(paymentMethodError.message);
      }

      // 2. Call Firebase function to create subscription
      const createSubscription = httpsCallable(functions, "createSubscription");

      const result = await createSubscription({
        paymentMethodId: paymentMethod.id,
        customerData: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          businessName: formData.businessName,
          businessAddress: formData.businessAddress,
          website: formData.website || "",
        },
        priceId: priceId,
        packageName: packageName,
        packagePrice: packagePrice,
      });

      // 3. Handle the subscription result
      const { clientSecret, subscriptionId, status } = result.data;

      if (status === "incomplete") {
        // Confirm the payment
        const { error: confirmError } = await stripe.confirmCardPayment(
          clientSecret
        );

        if (confirmError) {
          throw new Error(confirmError.message);
        }
      }

      // 4. Handle success
      onSuccess({ subscriptionId });
    } catch (err) {
      console.error("Payment error:", err);
      setError(
        err.message || "An error occurred while processing your payment"
      );
    } finally {
      setIsProcessing(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          Your Information
        </h3>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <h3 className="text-lg font-medium text-gray-800 mt-6 mb-2">
          Business Information
        </h3>

        <div>
          <label
            htmlFor="businessName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Business Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="businessAddress"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Business Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="businessAddress"
            name="businessAddress"
            value={formData.businessAddress}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="website"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Website (if any)
          </label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="https://your-website.com"
          />
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Payment Details <span className="text-red-500">*</span>
          </label>
          <div className="p-3 border border-gray-300 rounded-md bg-white">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <div className="flex flex-col space-y-3">
        <button
          type="submit"
          disabled={!stripe || isProcessing}
          className="w-full py-3 px-4 rounded-md font-medium text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{
            backgroundColor: isProcessing ? "#9CA3AF" : theme.colors.primary,
            opacity: isProcessing ? 0.7 : 1,
          }}
        >
          {isProcessing
            ? "Processing..."
            : `Subscribe for $${packagePrice}/${
                packageName === "Annual Plan" ? "year" : "month"
              }`}
        </button>

        <button
          type="button"
          onClick={onCancel}
          disabled={isProcessing}
          className="text-gray-500 text-sm hover:text-gray-700 text-center"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
