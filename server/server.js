//responisble for routes

var express = require("express");
var bodyParser = require("body-parser");

var {mongoose} = require("./db/mongoose");    //deconstructuring
var {Todo} = require("./models/todo");
var {User} = require("./models/user");


var app = express();                          //creates TodoApp

app.use(bodyParser.json());                   //enables sending JSON to express app

app.post("/todos", (req, res) => {            //sets up a route (url, (callback(res, req))
  var todo = new Todo({                       //creates new todo from user input
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);                             //sends doc back (whole object with id etc.)
  }, (e) => {
    res.status(400).send(e);                   //http-request (400 Bad Request)
  });
});

app.listen(3000, () => {                      //port 3000 /callback once app is up
  console.log("Started on port 3000");
});

module.exports = {app}
