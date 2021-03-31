var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/api/branches/autocomplete',async (req,res)=>{
  console.log(req.query.q);
  var data="hello world"
  res.status(200).json(data)
});
app.get('/api/branches',async (req,res)=>{
  console.log(req.query.q);
  var data="hello world"
  res.status(200).json(data)
});

var port=3100||process.env.PORT
app.listen(port,()=>{
  console.log("server runnning on",port)
})
module.exports = app;
