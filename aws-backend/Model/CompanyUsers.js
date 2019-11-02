const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    companyName : {
        type : String,
        required : true
    },
    companyEmail : {
        type : String,
        required : true
    },
    companyPasswd : {
        type : String,
        required : true
    },
    companyLocation : {
        type : String
    }
})

module.exports = mongoose.model('Company', userSchema, "companyUsers");