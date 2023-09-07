const express = require("express");
const router = express.Router();
const Funnel = require("../models/funnel");
const mongoose = require("mongoose");
//const Token_verifcation = require("../Middlewares/Token_verifcation") ; 
router.get("/",  (req, res, next) => {
  Funnel.find()
    .then((docs) => {
      if (docs) {
        console.log("try to get funnels ");

        return res.status(200).json(docs);
      } else
        return res.status(404).json({
          message: "No Funnel Found !",
        });
    })
    .catch((err) => {
      return res.status(500).json({
        error: err,
      });
    });
});
router.post("/", (req, res, next) => {
  const newFunnel = new Funnel({
    _id: new mongoose.Types.ObjectId(),
    Title: req.body.Title,
    Image: req.body.Image,
    Categories: req.body.Categories,
    Link: req.body.Link,
    GHL: req.body.GHL,
  });
  newFunnel
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));
  res.status(200).json({
    message: "post a funnel",
    funnel: newFunnel,
  });
});
router.get("/:Id", (req, res, next) => {
  const id = req.params.Id;
  if (id == 0) {
    res.status(404).json({
      message: "there is no funnel id = 0 ",
    });
  } else {
    Funnel.findById(id)
      .exec()
      .then((doc) => {
        console.log(doc);
        res.status(200).json(doc);
      })
      .catch((err) => {
        console.log("no data");

        res.status(500).json({ error: "err" });
      });
  }
});
router.patch("/:Id", (req, res, next) => {
  const id = req.params.Id;
  if (id == 0) {
    res.status(404).json({
      message: "there is no funnel id = 0 ",
    });
  } else
    res.status(200).json({
      message: "return patch funnel ",
    });
});
router.delete("/:Id", (req, res, next) => {
  const id = req.params.Id;
  if (id == 0) {
    res.status(404).json({
      message: "there is no funnel id = 0 ",
    });
  } else
    res.status(200).json({
      message: "return delete funnel ",
    });
});

module.exports = router;
