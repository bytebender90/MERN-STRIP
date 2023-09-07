const mongoose = require('mongoose') ; 
const DemandsSchema = mongoose.Schema ({
    _id : mongoose.Schema.Types.ObjectId ,
    
    exampleUrlValue : String ,
    specificsValue: String,
    nicheValue :String,
    replicateValue : String,
    fbProfileValue : String, 
    stat: String 
});
module.exports = mongoose.model("Demands", DemandsSchema) ; 
