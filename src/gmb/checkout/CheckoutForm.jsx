import React, { useState } from "react";
import { useTheme } from "../Theme";
import { CheckCircle, AlertCircle, Loader } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { db, functions } from "../../firebase";

const CheckoutForm = ({
  packageName = "Professional GBP Management",
  packagePrice = 150,
  onSuccess,
  onCancel,
}) => {
  const theme = useTheme();
  const stripe = useStripe();
  const elements = useElements();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    businessAddress: "",
    website: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    try {
      const cardElement = elements.getElement(CardElement);
      const { error: paymentMethodError, paymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: { line1: formData.businessAddress },
          },
        });

      if (paymentMethodError) throw new Error(paymentMethodError.message);

      // For subscription
      const createSubscription = httpsCallable(functions, "createSubscription");
      const { data } = await createSubscription({
        paymentMethodId: paymentMethod.id,
        customerData: formData,
        priceId: "price_1R2nRyKKYKi1ENnWiPY4IuMV", // Replace with your Price ID
      });

      if (!data.clientSecret) {
        throw new Error("Missing clientSecret in server response");
      }

      const { error: confirmError } = await stripe.confirmCardPayment(
        data.clientSecret,
        {
          payment_method: paymentMethod.id,
        }
      );

      if (confirmError) throw new Error(confirmError.message);

      // Store customer data in Firestore
      await addDoc(collection(db, "customers"), {
        ...formData,
        paymentMethodId: paymentMethod.id,
        subscriptionId: data.subscriptionId,
        createdAt: serverTimestamp(),
        package: packageName,
        price: packagePrice,
      });

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessName: "",
        businessAddress: "",
        website: "",
      });
      cardElement.clear();

      // Call success callback if provided
      if (onSuccess && typeof onSuccess === "function") {
        setTimeout(() => {
          onSuccess();
        }, 2000);
      }
    } catch (err) {
      console.error("Error in handleSubmit:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": { color: "#aab7c4" },
        iconColor: theme.colors.primary,
        // Make the layout more responsive
        "@media (max-width: 640px)": {
          fontSize: "14px",
        },
      },
      invalid: { color: "#9e2146" },
    },
    hidePostalCode: true,
  };

  return (
    <div className="w-full">
      {success ? (
        <div
          className="bg-green-50 p-6 rounded-lg shadow-sm border border-green-100 text-center"
          style={{ borderColor: `${theme.colors.secondary}30` }}
        >
          <CheckCircle
            size={48}
            className="mx-auto mb-4"
            style={{ color: theme.colors.secondary }}
          />
          <h3
            className="text-xl font-bold mb-3"
            style={{ color: theme.colors.text.primary }}
          >
            Payment Successful!
          </h3>
          <p className="text-gray-700 mb-6">
            Thank you for your purchase. We'll contact you within 24 hours to
            begin setting up your Google Business Profile.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: theme.colors.text.primary }}
            >
              Your Information
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                  style={{ color: theme.colors.text.secondary }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  style={{ borderColor: `${theme.colors.text.secondary}30` }}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                  style={{ color: theme.colors.text.secondary }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  style={{ borderColor: `${theme.colors.text.secondary}30` }}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1"
                  style={{ color: theme.colors.text.secondary }}
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  style={{ borderColor: `${theme.colors.text.secondary}30` }}
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: theme.colors.text.primary }}
            >
              Business Information
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="businessName"
                  className="block text-sm font-medium mb-1"
                  style={{ color: theme.colors.text.secondary }}
                >
                  Business Name *
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  style={{ borderColor: `${theme.colors.text.secondary}30` }}
                />
              </div>
              <div>
                <label
                  htmlFor="businessAddress"
                  className="block text-sm font-medium mb-1"
                  style={{ color: theme.colors.text.secondary }}
                >
                  Business Address *
                </label>
                <input
                  type="text"
                  id="businessAddress"
                  name="businessAddress"
                  value={formData.businessAddress}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  style={{ borderColor: `${theme.colors.text.secondary}30` }}
                />
              </div>
              <div>
                <label
                  htmlFor="website"
                  className="block text-sm font-medium mb-1"
                  style={{ color: theme.colors.text.secondary }}
                >
                  Website (if any)
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  style={{ borderColor: `${theme.colors.text.secondary}30` }}
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: theme.colors.text.primary }}
            >
              Payment Details
            </h3>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-700">{packageName}</span>
                <span
                  className="font-bold text-xl"
                  style={{ color: theme.colors.primary }}
                >
                  ${packagePrice.toFixed(2)}
                </span>
              </div>
              <div
                className="bg-gray-50 p-4 rounded-lg mb-4 border"
                style={{ borderColor: `${theme.colors.text.secondary}20` }}
              >
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: theme.colors.text.secondary }}
                >
                  Card Information
                </label>
                <div className="p-3 bg-white rounded border border-gray-300 min-h-[60px]">
                  <CardElement
                    options={{
                      ...cardElementOptions,
                      style: {
                        ...cardElementOptions.style,
                        base: {
                          ...cardElementOptions.style.base,
                          fontSize: "16px",
                          "@media (max-width: 640px)": {
                            fontSize: "14px",
                          },
                        },
                      },
                      hidePostalCode: true,
                    }}
                  />
                </div>
              </div>
            </div>
            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg border border-red-100 flex items-center">
                <AlertCircle size={18} className="mr-2 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onCancel}
                className="py-3 px-6 rounded-lg font-medium border transition-all duration-300 hover:bg-gray-50 sm:order-1"
                style={{
                  borderColor: theme.colors.primary,
                  color: theme.colors.primary,
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!stripe || loading}
                className="py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center sm:flex-1 sm:order-2"
                style={{
                  backgroundColor: theme.colors.accent,
                  color: "white",
                  opacity: !stripe || loading ? 0.7 : 1,
                }}
              >
                {loading ? (
                  <>
                    <Loader size={20} className="animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  `Pay $${packagePrice} and Get Started`
                )}
              </button>
            </div>
            <p className="mt-4 text-xs text-center text-gray-600">
              By submitting this form, you agree to our Terms of Service and
              Privacy Policy. Your card will be charged ${packagePrice} monthly
              until you cancel.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
