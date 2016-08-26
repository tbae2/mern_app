var express = require('express');
var app = express();
var React = require('react');
var ReactDOM = require('react-dom');

//this serves files pubicly , from declared directory in root of project
app.use(express.static('static'));
app.use(express.static('src'));

/*
app.get('/', function(req,res){
  res.send('Hello World!');
});
*/

app.listen(3000,function(){
  console.log('Example app listening on port 3000!');
});
