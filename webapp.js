var express = require('express');
var app = express();
var React = require('react');
var ReactDOM = require('react-dom');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
//ObjectID http://mongodb.github.io/node-mongodb-native/2.0/api/ObjectID.html
var MongoObjectId = require('mongodb').ObjectID;
var db;

//this serves files pubicly , from declared directory in root of project
app.use(express.static('static'));
//superseded by use of static directory
//app.use(express.static('src'));
app.use(bodyParser.json()); // for parsing application/json
//disable to avoid 304 not modified so it will load changes in this static response state
app.disable('etag');

app.get('/api/bugs', function(req,res){
  //rev.1
  //res.status(200).send(JSON.stringify(arrayBugs));
  //rev.2
  // res.json(arrayBugs);
  //rev.3
  //target collection bugs, with connection to database 'db', find() to find all in collection, toArray
  //rev.4
  var filter = {};
  if(req.query.priority){
    filter.priority = req.query.priority;
  }
  if(req.query.status){
    filter.status = req.query.status;
  }

  db.collection('bugs').find(filter).toArray(function(err, docs){
    res.json(docs);
  });
});

//this app get is to retrieve and return 1 entry (bug item)
// ":id" is a param for express, once this is in the request it's accessible as an object req.param.id
app.get('/api/bugs/:id', function(req,res){
    db.collection('bugs').find({_id: MongoObjectId(req.params.id)}).toArray(function(err,docs){
      res.json(docs);
    });
});

app.put('/api/bugs/:id',function(req,res){
//this updates an existing bug utilizing ID and request body sent in
  var requestedUpdate = req.body;
  //update one by id, body, callback function to respond with updated bug record
  db.collection('bugs').updateOne({_id: MongoObjectId(req.params.id)}, requestedUpdate,function(err, result){
        db.collection('bugs').find({_id: MongoObjectId(req.params.id)}).next(function(err,docs){
      res.json(docs);
    });
  });
});


app.post('/api/bugs',function(req,res){
    //take in POST request , add ID, add data to array, return bug added to show ID
      // var buildNewBug = req.body;
      // buildNewBug.id = arrayBugs.length +1 ;
      // arrayBugs.push(buildNewBug);
      //res.json(buildNewBug);


      var requested = req.body;
      //insert 1 record into mongodb
      db.collection('bugs').insertOne(requested, function(err, result){
          //find latest inserted record and return the json. utilizing _id that was attached to the the successful import
            db.collection('bugs').find(requested._id).limit(1).next(function(err, doc){
                res.json(doc);
            })
      });


})


// var arrayBugs = [
//   {id: 1, status:"open", priority:"P1", owner:"Tman", title:"App crashes upon opening5.3"},
//   {id: 2, status:"open", priority:"P2", owner:"TmanQ", title:"App crashes upon close"}
// ];


MongoClient.connect('mongodb://localhost:27017/bugdb', function(err, dbConnection){
    db = dbConnection;
    var server = app.listen(3000,function(){
    console.log('Example app listening on port 3000!');
  })
});


// app.listen(3000,function(){
//   console.log('Example app listening on port 3000!');
// });
//
