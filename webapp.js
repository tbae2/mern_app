var express = require('express');
var app = express();
var React = require('react');
var ReactDOM = require('react-dom');
const bodyParser = require('body-parser');

//this serves files pubicly , from declared directory in root of project
app.use(express.static('static'));
//superseded by use of static directory
//app.use(express.static('src'));
app.use(bodyParser.json()); // for parsing application/json

//disable to avoid 304 not modified so it will load changes in this static response state
app.disable('etag');

app.get('/api/bugs', function(req,res){
  //res.status(200).send(JSON.stringify(arrayBugs));
  res.json(arrayBugs);
});

app.post('/api/bugs',function(req,res){
    //take in POST request , add ID, add data to array, return bug added to show ID
      var buildNewBug = req.body;
      buildNewBug.id = arrayBugs.length +1 ;
      arrayBugs.push(buildNewBug);

      res.json(buildNewBug);
})

var arrayBugs = [
  {id: 1, status:"open", priority:"P1", owner:"Tman", title:"App crashes upon opening5.3"},
  {id: 2, status:"open", priority:"P2", owner:"TmanQ", title:"App crashes upon close"}
];

app.listen(3000,function(){
  console.log('Example app listening on port 3000!');
});
