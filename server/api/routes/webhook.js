require('dotenv').config();
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");
const stripe = require('stripe')("sk_test_51Nb0MeGz9L33FQ5n25gzIAxMH7xeZBgv0XLOZ8sXH1d6lKAuB7ghi8hy2a13zoLQCpdrRq0N27HqXXi0RlmV2UHX006JScpbKa");

router.post("/faildmembership" , (req, res, nexrt) => {
  const event = req.body;
  if (event.type === 'payment_intent.payment_failed') {
    const paymentIntent = event.data.object;
    const customerId = paymentIntent.customer  ; 
    const metadata = paymentIntent.metadata;
    if (metadata.product_id == "monthly_membership") { 
    stripe.customers.retrieve(customerId, function(err, customer) {
      if (err) {
        console.error(err);
      } else {
        User.updateOne({ Email: customer.email  }, { $set: {Active: "0" } }); 
      }

    });
     }
  }
  res.sendStatus(200);
}); 

module.exports = router;
