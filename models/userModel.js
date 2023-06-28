const mongoose = require('mongoose');
const userScema = new mongoose.Schema({
    id : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    createdOn : {
        type : Date,
        default : Date.now
    },
});

module.exports = mongoose.model("User", userScema)


