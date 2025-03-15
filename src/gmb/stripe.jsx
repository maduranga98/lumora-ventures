import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("your-stripe-publishable-key");
export default stripePromise;
