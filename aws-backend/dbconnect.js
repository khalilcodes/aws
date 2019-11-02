const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://khalil:khalil@kb-jgdlm.gcp.mongodb.net/aws?retryWrites=true&w=majority", 
{useNewUrlParser: true, useUnifiedTopology: true}, 
(err)=> {
    if (err) throw err;
    console.log("Successfully connected to db")
})