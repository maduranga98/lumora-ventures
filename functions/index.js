const { onCall, HttpsError } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const functions = require("firebase-functions");
const logger = require("firebase-functions/logger");

// Initialize Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp();
}

// Initialize Stripe
let stripe;
let stripeSecretKey;

try {
  // Try to get key from functions config
  stripeSecretKey = functions.config().stripe?.secret_key;
  console.log("Config from functions.config() exists:", !!stripeSecretKey);
} catch (e) {
  console.error("Error accessing functions.config():", e);
}

// If not found, try environment variable
if (!stripeSecretKey) {
  stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  console.log("Using STRIPE_SECRET_KEY from environment:", !!stripeSecretKey);
}

// Initialize Stripe if we have a key
if (stripeSecretKey) {
  try {
    stripe = require("stripe")(stripeSecretKey);
    console.log("Stripe initialized successfully with key");
  } catch (error) {
    console.error("Error initializing Stripe:", error);
  }
} else {
  // Last resort - hardcoded key for development only
  console.log(
    "No Stripe key found in config or env, using direct initialization"
  );
  try {
    stripe = require("stripe")(
      "sk_test_51QdE3AKKYKi1ENnW4OMMtHakJfOc5SHYH95yPjklSHr90FANd1TwO3myDa7LrcuwjZFIImWJZwrR1qrqq4BaOKUX00KWABIOKp"
    );
    console.log("Stripe initialized with direct key");
  } catch (error) {
    console.error("Error initializing Stripe with direct key:", error);
  }
}

// Use v2 HTTPS callable function
exports.createSubscription = onCall(async (request) => {
  // Check if Stripe is initialized
  if (!stripe) {
    throw new HttpsError(
      "failed-precondition",
      "Stripe integration is not configured properly. Check server logs."
    );
  }

  // Get data from request
  const { paymentMethodId, customerData, priceId, packageName, packagePrice } =
    request.data;

  // Log incoming request data for debugging
  logger.info("Subscription request received:", {
    userId: request.auth?.uid,
    hasPaymentMethod: !!paymentMethodId,
    hasCustomerData: !!customerData,
    hasPriceId: !!priceId,
  });

  // Validate required fields
  if (!paymentMethodId || !customerData || !priceId) {
    const missingFields = [];
    if (!paymentMethodId) missingFields.push("paymentMethodId");
    if (!customerData) missingFields.push("customerData");
    if (!priceId) missingFields.push("priceId");

    throw new HttpsError(
      "invalid-argument",
      `Missing required fields: ${missingFields.join(", ")}`
    );
  }

  try {
    let customer;
    if (customerData.email) {
      const existingCustomers = await stripe.customers.list({
        email: customerData.email,
        limit: 1,
      });

      if (existingCustomers.data.length > 0) {
        customer = existingCustomers.data[0];
        await stripe.paymentMethods.attach(paymentMethodId, {
          customer: customer.id,
        });
        await stripe.customers.update(customer.id, {
          invoice_settings: { default_payment_method: paymentMethodId },
        });
      } else {
        customer = await stripe.customers.create({
          email: customerData.email,
          name: customerData.name || undefined,
          phone: customerData.phone || undefined,
          address: customerData.businessAddress
            ? { line1: customerData.businessAddress }
            : undefined,
          payment_method: paymentMethodId,
          invoice_settings: { default_payment_method: paymentMethodId },
        });
      }
    } else {
      throw new HttpsError("invalid-argument", "Customer email is required");
    }

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: priceId }],
      payment_behavior: "default_incomplete",
      expand: ["latest_invoice.payment_intent"],
    });

    if (!subscription.latest_invoice?.payment_intent) {
      throw new HttpsError(
        "internal",
        "No payment intent created with subscription"
      );
    }

    // Store customer data in Firestore
    await admin
      .firestore()
      .collection("customers")
      .doc(customer.id)
      .set({
        businessAddress: customerData.businessAddress || "",
        businessName: customerData.businessName || "",
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        email: customerData.email,
        name: customerData.name,
        package: packageName || "Professional GBP Management",
        paymentMethodId: paymentMethodId,
        phone: customerData.phone || "",
        price: packagePrice || 150,
        subscriptionId: subscription.id,
        website: customerData.website || "",
        status: subscription.status,
        // Add userId if authenticated
        ...(request.auth?.uid ? { userId: request.auth.uid } : {}),
      });

    // Also store in subscriptions collection if needed
    if (request.auth?.uid) {
      await admin
        .firestore()
        .collection("subscriptions")
        .doc(subscription.id)
        .set({
          userId: request.auth.uid,
          customerId: customer.id,
          status: subscription.status,
          priceId: priceId,
          currentPeriodEnd: new Date(subscription.current_period_end * 1000),
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });
    }

    return {
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
      subscriptionId: subscription.id,
      status: subscription.status,
    };
  } catch (error) {
    logger.error("Error creating subscription:", error);
    throw new HttpsError(
      "internal",
      error.message || "An unknown error occurred"
    );
  }
});
