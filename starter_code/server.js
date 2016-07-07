'use strict'
var express = require('express');
var app = express() ;
var bodyParser = require('body-parser');
var router = express.Router();
var candies = [
  {
    "id": 1,
    "name": "Chewing Gum",
    "color": "Red"
  },
  {
    "id": 2,
    "name": "Pez",
    "color": "Green"
  },
  {
    "id": 3,
    "name": "Marshmallow",
    "color": "Pink"
  }
];


app.listen(3000);
console.log("Server listening on port 3000");

app.get('/candies', function (req, res) {
  res.send(candies);
});

app.get('/candies/:id', function(req, res) {
  var searchId = parseInt(req.params.id);
    for(var i = 0; i< candies.length; i++) {
      if (candies[i].id === searchId) {
        res.send(candies[i]);
      }
    }
});

app.use(bodyParser.json());

app.post('/candies', function (req, res) {
  var newCandy = req.body;
  console.log(newCandy);
  candies.push(newCandy);
  res.json(candies);
  });

app.post('/candies/:id', function (req, res) {
  var id = req.body.id;
  for(var i = 0; i< candies.length; i++) {
    if (candies.id === undefined) {
      //console.log(id);
      candies.create({id: 4});
      res.json(candies);
      }
    }
});