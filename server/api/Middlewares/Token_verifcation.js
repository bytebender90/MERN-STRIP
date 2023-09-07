const jwt = require("jsonwebtoken") ; 
require('dotenv').config();

const Token_verifcation  = (req , res , next ) => {
    try { 
    const token =  req.headers.authorization.split(" ")[1] ; 
    const decoded = jwt.verify(token, process.env.JWT_KEY  );
    req.user  = decoded ; 
    next () ; 
    }catch {
        return res.status(401).json({
            message: "Authentication failed" 
        })
    }
}
module.exports = Token_verifcation ; 