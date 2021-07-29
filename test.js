var express = require('express')
var http = require('http')
var logger = require('morgan')
var app = express()

app.use(logger('short'))

app.get("/", (req, res) => {
  res.end('Welcome to my homepage!')
})

app.get('/about/:name',(req, res) => {
  res.redirect('/weather')
  res.end('about page about page' + req.params.name)
})

app.get('/weather', (req, res) => {
  console.log(res.ip, '222222222222')
  res.end('The current weather is Nice')
})

app.use((req, res, next) => {
  console.log('In comes a ' + req.method + ' to ' + req.url)
  next()
})

app.use((req, res, next) =>{
  var minute = (new Date()).getMinutes()
  console.log(minute)
  if (minute % 2 === 0) {
    next()
  } else {
    res.statusCode = 403;
    res.end('Not authorized')
  }
})

app.use((req, res) => {
  res.statusCode =  404
  res.end("404 404 404")
})

var server = http.createServer(app)
server.listen(3001)
