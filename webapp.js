var express = require('express');
var app = express();
var React = require('react');
var ReactDOM = require('react-dom');

//this serves files pubicly , from declared directory in root of project
app.use(express.static('static'));
//superseded by use of static directory
//app.use(express.static('src'));

//disable to avoid 304 not modified so it will load changes in this static response state
app.disable('etag');

app.get('/api/bugs', function(req,res){
  res.status(200).send(JSON.stringify(app.locals.arrayBugs));
});

app.locals.arrayBugs = [
  {id: 1, status:"open", priority:"P1", owner:"Tman", title:"App crashes upon opening"},
  {id: 2, status:"open", priority:"P2", owner:"TmanQ", title:"App crashes upon close"}
];

app.listen(3000,function(){
  console.log('Example app listening on port 3000!');
});
