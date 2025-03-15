const functions = require("firebase-functions");
const admin = require("firebase-admin");
const stripeSecretKey =
  "sk_test_51QdE3AKKYKi1ENnW4OMMtHakJfOc5SHYH95yPjklSHr90FANd1TwO3myDa7LrcuwjZFIImWJZwrR1qrqq4BaOKUX00KWABIOKp"; // FOR TESTING ONLY
const stripe = require("stripe")(stripeSecretKey);
const cors = require("cors")({ origin: true });

admin.initializeApp();

exports.createSubscription = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    // Validate request method
    if (req.method !== "POST") {
      return res
        .status(405)
        .send({ error: "Method not allowed. Please use POST." });
    }

    const { paymentMethodId, customerData, priceId } = req.body.data || {};

    // Log incoming request data for debugging
    functions.logger.info("Request data:", {
      hasPaymentMethod: !!paymentMethodId,
      hasCustomerData: !!customerData,
      hasPriceId: !!priceId,
    });

    if (!paymentMethodId || !customerData || !priceId) {
      functions.logger.error("Missing required fields");
      return res
        .status(400)
        .send({ error: "Missing paymentMethodId, customerData, or priceId" });
    }

    try {
      // Check if customer already exists with this email
      let customer;
      if (customerData.email) {
        const existingCustomers = await stripe.customers.list({
          email: customerData.email,
          limit: 1,
        });

        if (existingCustomers.data.length > 0) {
          // Customer exists, update payment method
          customer = existingCustomers.data[0];
          await stripe.paymentMethods.attach(paymentMethodId, {
            customer: customer.id,
          });

          // Set as default payment method
          await stripe.customers.update(customer.id, {
            invoice_settings: { default_payment_method: paymentMethodId },
          });
        } else {
          // Create new customer
          customer = await stripe.customers.create({
            email: customerData.email,
            name: customerData.name || undefined,
            phone: customerData.phone || undefined,
            address: customerData.businessAddress
              ? {
                  line1: customerData.businessAddress,
                }
              : undefined,
            payment_method: paymentMethodId,
            invoice_settings: { default_payment_method: paymentMethodId },
          });
        }
      } else {
        return res.status(400).send({ error: "Customer email is required" });
      }

      // Create subscription with expanded fields to access payment intent
      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: priceId }],
        payment_behavior: "default_incomplete",
        expand: ["latest_invoice.payment_intent"],
      });

      functions.logger.info("Subscription created:", {
        subscriptionId: subscription.id,
        status: subscription.status,
      });

      // Check if we have the payment intent
      if (!subscription.latest_invoice?.payment_intent) {
        throw new Error("No payment intent created with subscription");
      }

      res.status(200).send({
        clientSecret: subscription.latest_invoice.payment_intent.client_secret,
        subscriptionId: subscription.id,
        status: subscription.status,
      });
    } catch (error) {
      functions.logger.error(
        "Error creating subscription:",
        error.message,
        error.stack
      );
      res.status(500).send({ error: error.message });
    }
  });
});
