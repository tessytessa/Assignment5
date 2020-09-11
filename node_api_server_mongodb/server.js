var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var router      =   express.Router();
assert = require('assert');
    let MongoClient = require('mongodb').MongoClient;
    let url = "mongodb://localhost:27017/";
     
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

router.get("/",function(req,res){
  MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("covidapi");
  dbo.collection("covid19data").find(
    { }, 
    { projection: { _id: 0, Country_Region: 1, Confirmed: 1, Deaths: 1, Recovered: 1, Active: 1}}
    ).toArray(function(err, result){
    if (err) throw err;
    console.log(result);
    res.json(result);
    db.close();
  });
});
});

app.use('/',router);

app.listen(6000);
console.log("Listening to PORT 6000");