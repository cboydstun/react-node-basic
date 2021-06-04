var express = require('express')
var cors = require('cors')
var app = express()
 
app.get('/', cors(), function (req, res, next) {
  res.json('hello from app again')
})
 
app.listen(8080, function () {
  console.log('CORS-enabled web server listening on port 8080')
})