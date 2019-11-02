const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    location : {
        type : String
    }
})

module.exports = mongoose.model('User', userSchema, "devUsers");