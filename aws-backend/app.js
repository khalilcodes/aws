const express = require('express')
const app = express()
const dbconnect = require('./dbconnect')

var bodyParser = require('body-parser')

const port = process.env.PORT || 9090

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', express.static('public'))

app.listen(port, ()=> {
  console.log(`${port} started.`)
})
