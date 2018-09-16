var mongoose = require("mongoose");

var User = mongoose.model("User", {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

module.exports = {User}











// var newUser = new User({
//   email: "s.stapf@aol.com"
// })
//
// newUser.save().then((doc) => {
//   console.log("User was created", doc);
// }, (e) => {
//   console.log("Unable to create User", e);
// });
