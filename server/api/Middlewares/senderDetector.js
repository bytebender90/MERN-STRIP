const jwt = require("jsonwebtoken") ; 
require('dotenv').config();
const mongoose = require("mongoose") ;
const User = require("../models/user");

const senderDetector  = (req , res , next ) => {
        User.find({Email:req.user.email , Password : req.user.password })
        .then(
            user => {
                if (user.length == 1 ) {
                    req.senderPattern = user[0].UserType ; 
                    req.useractivation = user[0].Active ; 
                }else {
                    req.senderPattern = "Anonymous" ; 
                }
                next();  
            }
           
        )
    .catch ( ()=> {
        return res.status(401).json({
            message: "Authentication  failed , cannot Detect the sender "  
        })
    }) ; 
}
module.exports = senderDetector ; 