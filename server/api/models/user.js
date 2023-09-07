const mongoose = require('mongoose') ; 
const UserSchema = mongoose.Schema ({
    _id : mongoose.Schema.Types.ObjectId ,
    FirstName : {type : String ,  required : true } ,
    LastName : {type : String , required : true} ,
    Email : {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'],  unique: true}  , 
    Password : {type: String , required : true } ,
    Image: {type: String , default : "https://images.eliejah.com/defulat.png" } , 
    JobTitle:  {type: String , default : "Funnel Fan" }  , 
    phone :  {type: String , default : "+1" }  ,
    Address :  {type: String , default : "Earth" }   , 
    UserType :  {type: String , default : "user" }   , 
    CARD : String , 
    Active : {type: Number , default : 1 } , 
});
module.exports = mongoose.model("User", UserSchema) ; 
