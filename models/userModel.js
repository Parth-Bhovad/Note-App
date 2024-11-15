const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    profileUrl : {
        type: String, //Assuming it is an URL (If it is not correct I will change it...)
        required: true,
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    notes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "note"
    }]
});

module.exports = mongoose.model("user", userSchema);