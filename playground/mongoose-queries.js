const {mongoose} = require("./../server/db/mongoose");
const {Todo} =  require("./../server/models/todo");

var id = "5b9d77f3ea73e72fe146d233";

Todo.find({
  _id: id
}).then((todos) => {
  console.log("Todos", todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log("Todos", todo);
});
