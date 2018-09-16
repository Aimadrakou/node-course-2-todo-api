var mongoose = require("mongoose");

var Todo = mongoose.model("Todo", {     //model for everything we want to store
  text: {                               //property text
    type: String                        //sets type for attribute
    required: true                      //must give attribute, else error thrown
    minlength: 1                        //string has to have one element
    trim: true                          //deletes unecessary spaces (front, back, doubles in middle)
  },
  completed: {                          //property completed
    type: Boolean                       //sets type to boolean
    default: false                      //sets default attribute if not given
  },
  completedAt: {                        //property completedAt
    type: Number                        //only type Number allowed
    default: Null
  }
});


module.exports = {Todo}


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
