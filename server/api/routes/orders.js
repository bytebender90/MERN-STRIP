const express = require("express");
const router = express.Router();
router.get("/", (req, res, nexrt) => {
  res.status(200).json({
    message: " Orders",
  });
});

router.post("/", (req, res, nexrt) => {
  res.status(201).json({
    message: " Order has been saved ",
  });
});

router.get("/:Id", (req, res, nexrt) => {
  res.status(200).json({
    message: " Order Details ",
    orderId: req.params.Id,
  });
});
router.delete("/:Id", (req, res, nexrt) => {
  res.status(200).json({
    message: " Order Deleted ",
    orderId: req.params.Id,
  });
});

module.exports = router;
