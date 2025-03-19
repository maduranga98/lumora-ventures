// src/components/StripeProvider.js
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to add your publishable key here
const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY ||
    "pk_live_51QdE3AKKYKi1ENnWlp28hObalgdPc1HYodrucnkwQOPgHfr1MDs9CLMI6epGE9EVunnKqDnx9r77Vs1MHbW6Kpxx00tUemv7iD"
);

const StripeProvider = ({ children }) => {
  const options = {
    fonts: [
      {
        cssSrc:
          "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap",
      },
    ],
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  );
};

export default StripeProvider;
