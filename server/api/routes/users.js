require('dotenv').config();

const MEMERSHIP = 160 * 100 ; 
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const emailValidator = require("deep-email-validator"); 
const stripe = require('stripe')("sk_test_51Nb0MeGz9L33FQ5n25gzIAxMH7xeZBgv0XLOZ8sXH1d6lKAuB7ghi8hy2a13zoLQCpdrRq0N27HqXXi0RlmV2UHX006JScpbKa");


router.post("/signup", async (req, res, next) => {

  User.find({ Email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail Exists !! ",
        });
      } else {
        bcrypt.hash(req.body.password, 10, async (err, hash) => {
          if (err) {
            console.log(req.body.password);
            return res.status(200).json({
              message: "password is too short",
            });

          } else {
            const {id } =  req.body.payment_Method;
              console.log(req.body.payment_Method);
        
              const customer = await stripe.customers.create({
              name:  `${req.body.fname} ${req.body.fname}`,
              email: req.body.email ,
              payment_method : id , 
              invoice_settings: {default_payment_method : id }
            }  );
            
            
            const subscription = await stripe.subscriptions.create({
              customer:   customer.id,
              items: [{plan: 'monthly_membership'}],
            });
           if ( subscription  ) {
             
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              Email: req.body.email,
              Password: hash,
              FirstName: req.body.fname,
              LastName: req.body.lname,
            });
            user
              .save()
              .then((result) => {
                const token = jwt.sign(
                  {
                    email: user.Email,
                    id: user._id,
                    password: user.Password,
                  },
                  "HALAALHAMMED",
                  {
                    expiresIn: "1h",
                  }
                );
                res.status(201).json({
                  message: "UserCreated",
                  user: user,
                  token: token,
                });
              })
              .catch((err) =>
                res.status(500).json({
                  weher: "Token Error",
                  error: err.message,
                  fulldet: err,
                })
              );
           }else {
            return res.status(401).json({
              message : "Payments Error" 
            })
           }
          }
        });
      }
    });
});

router.post("/login", (req, res, nexrt) => {
  User.find({ Email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth Failed",
        });
      }
      bcrypt.compare(req.body.password, user[0].Password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth Failed notsame",
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].Email,
              id: user[0]._id,
              password: user[0].Password,
              userstat : user[0].Active 
            },
            "HALAALHAMMED",
            {
              expiresIn: "1h",
            }
          );
          return res.status(200).json({
            message: "Auth Successful",
            user: user[0],
            token: token,
          });
        }
        return res.status(401).json({
          message: "Auth Failed",
        });
      });
    });
});

router.patch("/:userId", (req, res, mext) => {
  const id = req.params.userId;
  const updateObject = {};
  for (let ops of req.body) {
    if (ops.propName == "Password") {
      return res.status(401).json({
        error: "This Update Api Doesnot Support Changing Password !! ",
      });
    }
    updateObject[ops.propName] = ops.value;
  }
  User.updateOne({ _id: id }, { $set: updateObject })
    .exec()
    .then((resulte) => {
      console.log(resulte);

      User.findOne({ _id: id })
        .exec()
        .then((c_user) => {
          res.status(200).json({
            result: resulte,
            user: c_user,
          });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.patch("/password/:userId", (req, res, mext) => {
  const id = req.params.userId;

  User.find({ _id: id })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Something Bad Happen !!!! ",
        });
      } else {
        bcrypt.compare(req.body.oldpass, user[0].Password, (err, result) => {
          if (err) {
            console.log("old Password Wrong!!");

            console.log(oldpass);

            return res.status(401).json({
              message: "Old Password is Wrong !! ",
            });
          }
          console.log(result);
          if (result) {
            console.log("old pass right!!");

            bcrypt.hash(req.body.newpass, 10, (err, hash) => {
              if (err) {
                return res.status(500).json({
                  error: err,
                  message: "password is too short",
                });
              } else {
                User.updateOne({ _id: id }, { $set: { Password: hash } })
                  .exec()
                  .then((resulte) => {
                    console.log(resulte);

                    const token = jwt.sign(
                      {
                        email: user[0].Email,
                        id: user[0]._id,
                        password: hash,
                      },
                      "HALAALHAMMED",
                      {
                        expiresIn: "1h",
                      }
                    );

                    res.status(200).json({
                      message: "password Has Been Updated ! ",
                      token: token,
                    });
                  })
                  .catch((err) => {
                    console.log(err);
                    res.status(500).json({
                      error: err,
                    });
                  });
              }
            });
          } else {
            return res.status(401).json({
              message: "old password is wrong",
            });
          }
        });
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

router.delete("/:userId", (req, res, nexrt) => {
  User.remove({ _id: req.params.userId })
    .exec()
    .then((reult) => reult.status(200).json({ message: " User Has Been Deleted" }))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
