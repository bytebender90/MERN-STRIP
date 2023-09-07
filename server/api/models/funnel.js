const mongoose = require('mongoose') ; 
const FunnelSchema = mongoose.Schema ({
    _id : mongoose.Schema.Types.ObjectId ,
    Title : {type : String , required : true } ,
    Image: String , 
    Categories : String , 
    Link: String , 
    GHL: String,  
});
module.exports = mongoose.model("Funnel", FunnelSchema) ; 
