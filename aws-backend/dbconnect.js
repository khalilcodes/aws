require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(`${process.env.DATABASE}`, 
{useNewUrlParser: true, useUnifiedTopology: true}, 
(err)=> {
    if (err) throw err;
    console.log("Successfully connected to db")
})