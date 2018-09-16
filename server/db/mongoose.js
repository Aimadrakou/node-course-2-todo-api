// ./mongo
var mongoose = require("mongoose");

mongoose.Promise = global.Promise;    //can use promises now
mongoose.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true });

module.exports = {mongoose};
