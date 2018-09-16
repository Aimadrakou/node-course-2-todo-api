//root of application
// ./mongo
var mongoose = require("mongoose");


mongoose.Promise = global.Promise;    //can use promises now
mongoose.connect("mongodb://localhost:27017/TodoApp");    //maintains connection over time


// var Todo = mongoose.model("Todo", {      //model for everything we want to store
//   text: {                               //property text
//     type: String                        //sets type for attribute
//     required: true                      //error if text is not given
//     minlength: 1                        //string has to have one element
//     trim: true                          //deletes unecessary spaces (front, back, doubles in middle)
//   },
//   completed: {                          //property completed
//     type: Boolean                       //sets type to boolean
//     default: false                      //sets default attribute if not given
//   },
//   completedAt: {                        //property completedAt
//     type: Number                        //only type Number allowed
//     default: Null
//   }
// });


// var newTodo = new Todo({                //creates new instance of our model object
//   text: "Cook dinner"                   //sets attribute to "Cook dinner"
// });
//
//
// newTodo.save().then((doc) => {          //saves and updates to MongoDb database
//   console.log("Saved todo", doc)
// }, (e) => {
//   console.log("Unable to save todo")
// });



// //function that creates objects
// var createTodo = function (textString, completedBoolean, copletetAtNumber) {
//   var newTodo = new Todo({
//     text: textString,
//     completed: completedBoolean,
//     completedAt: copletetAtNumber
//   })
//   newTodo.save().then((doc) => {
//     console.log("Saved todo", doc);
//   }, (e) => {
//     console.log("Unable to save todo", e);
//   });
// };
//
// createTodo("Wash the dishes", false, 5126);


// var User = mongoose.model("User", {
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 4
//   }
// });
//
// var newUser = new User({
//   email: "s.stapf@aol.com"
// })
//
// newUser.save().then((doc) => {
//   console.log("User was created", doc);
// }, (e) => {
//   console.log("Unable to create User", e);
// });
