const SEC_KEY = "sk_test_51Nb0MeGz9L33FQ5n25gzIAxMH7xeZBgv0XLOZ8sXH1d6lKAuB7ghi8hy2a13zoLQCpdrRq0N27HqXXi0RlmV2UHX006JScpbKa" ; 

const express = require("express");
const router = express.Router();

const stripe = require('stripe')(SEC_KEY);


router.get("/customer/:Id", (req, res, nexrt) => {
    stripe.paymentIntents.list({ customer: 'cus_123' }, function(err, payments) {
        if (err) {
          console.error(err);
        } else {
            res.status(200).json({
                message: " Order Details ",
                orderId: payments,
              });
        }
      });
 
});


module.exports = router;
