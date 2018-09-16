const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user")


// var id = "5b9d77f3ea73e72fe146d233";
//
// if (!ObjectId.isValid(id)) {
//   console.log("ID not valid");
// }
//
// // Todo.find({                         //finds every object with given filter
// //   _id: id
// // }).then((todos) => {
// //   console.log("Todos", todos);
// // });
// //
// // Todo.findOne({                       //only finds one (even if more existing)
// //   _id: id
// // }).then((todo) => {
// //   console.log("Todos", todo);
// // });
//
// Todo.findById(id).then((todo) => {     //finds object by id
//   if (!todo) {
//     return console.log("Id not found");
//   }
//   console.log("Todo by Id", todo);
// }).catch((e) => console.log(e));        //handles errors


User.findById("5b9d82a329be0f316712719b").then(() => {
  if (!user) {
    return console.log("Unable to find user");
  }

   console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
