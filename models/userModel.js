const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please add user name"]
    },
    email:{
        type:String,
        required:[true,"please add user email address"],
        unique:[true,"Email address already taken"]
    },
    password:{
        type:String,
        required:[true,"Please add user password"]
    },

},{
    Timestamp : true,
});

module.exports = mongoose.model("user",userSchema); 
// module.exports = userSchema;