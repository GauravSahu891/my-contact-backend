const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
    {
        name:{
            type : String,
            required:[true,"Please enter contact name"],
        },
        email:{
            type:String,
            requied:[true,"Please enter contact email"],
        },
        phone:{
            type:String,
            requied:[true,"Please enter phone number"], 
        }
    },
    {
        timestamps:true,
    }
);

module.exports = mongoose.model("Contact",contactSchema);