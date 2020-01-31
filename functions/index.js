"use strict";

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const stripe = require("stripe")(functions.config().stripe.token);
const endpointSecret = functions.config().stripe.endpoint_secret;
const currency = functions.config().stripe.currency || "USD";

// [START events]
// receive and process Stripe Hooks
exports.events = functions.https.onRequest((request, response) => {
  const signature = request.headers["stripe-signature"];
  try {
    let event = stripe.webhooks.constructEvent(
      request.rawBody,
      signature,
      endpointSecret
    );
    return admin
      .firestore()
      .collection("events")
      .add(event)
      .then(docRef => {
        return response.json({ received: true, ref: docRef.id });
      })
      .catch(error => {
        return response.status(500).end();
      });
  } catch (error) {
    return response.status(400).end();
  }
});
// [END events]

// [START createStripePlan]
// create a Stripe Plan & Product
exports.createStripePlan = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "failed-precondition",
      "The function must be called while authenticated."
    );
  }
  const stripePlan = await stripe.plans
    .create({
      amount: data.amount,
      currency: data.currency,
      interval_count: data.intervalCount,
      interval: data.interval,
      product: { name: data.name },
      metadata: {
        start_date: data.startDate
      }
    })
    .catch(error => {
      console.log(error);
      throw new functions.https.HttpsError("error", error);
    });
  return admin
    .firestore()
    .collection("plans")
    .doc(stripePlan.id)
    .set({
      name: data.name,
      amount: data.amount,
      currency: data.currency,
      intervalCount: data.intervalCount,
      interval: data.interval,
      startDate: data.startDate,
      stripePlanID: stripePlan.id,
      stripeProductID: stripePlan.product
    })
    .then(docRef => {
      return { id: docRef.id };
    })
    .catch(error => {
      throw new functions.https.HttpsError("error", error);
    });
});
// [END createStripePlan]

// [START editStripePlan]
// edit a Plan & Product
exports.editStripePlan = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "failed-precondition",
      "The function must be called while authenticated."
    );
  }
  const stripePlan = await stripe.plans
    .update({
      amount: data.amount,
      product: { name: data.name }
    })
    .catch(error => {
      throw new functions.https.HttpsError("error", error);
    });
  return admin
    .firestore()
    .collection("plans")
    .doc(stripePlan.id)
    .set({
      name: data.name,
      amount: data.amount,
      currency: data.currency,
      interval: data.interval,
      stripePlanID: stripePlan.id,
      stripeProductID: stripePlan.product
    })
    .then(docRef => {
      return { id: docRef.id };
    })
    .catch(error => {
      throw new functions.https.HttpsError("error", error);
    });
});
// [END editStripePlan]

// [START deleteStripePlan]
// create a Stripe Plan & Product
exports.deleteStripePlan = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "failed-precondition",
      "The function must be called while authenticated."
    );
  }
  // delete the plan
  const stripePlan = await stripe.plans.del(data.planID).catch(error => {
    throw new functions.https.HttpsError("error", error);
  });
  // delete the associated product
  await stripe.products.del(data.productID).catch(error => {
    throw new functions.https.HttpsError("error", error);
  });
  return admin
    .firestore()
    .collection("plans")
    .doc(stripePlan.id)
    .delete()
    .catch(error => {
      throw new functions.https.HttpsError("error", error);
    });
});
// [END deleteStripePlan]

// [START Utilities]
// get user
function getUser(uid) {
  return admin
    .firestore()
    .collection("users")
    .doc(uid)
    .get()
    .then(doc => {
      return doc.data();
    })
    .catch(error => logError(error, uid, "functions.getUser"));
}

function logError(error, context, note) {
  admin
    .firestore()
    .collection("errors")
    .add({ error: error, context: context, note: note });
}
// [END Utilities]
