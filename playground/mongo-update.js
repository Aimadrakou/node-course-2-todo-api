// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

//connect to mongodb
MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  const db = client.db("TodoApp");

//findOneAndUpdate(filter, update, options, callback) -> updates document and returns new value
  // db.collection("Todos").findOneAndUpdate({
  //   _id: new ObjectID("5b9d693f28650c7e1d6fa5f0")     //welches objekt gesucht wird (hier nach id)
  // }, {
  //   $set: {                                           //verschiene Update Methoden von MongoDB (z.B inc)
  //     completed: true
  //   }
  // }, {
  //     returnOriginal: false                           //returns the updated document
  //   }).then((result) => {
  //     console.log(result);
  //   });

//Finds document by an ID updates name and increments age, returns results
  db.collection("Users").findOneAndUpdate({
    _id: new ObjectID("5b9d662928650c7e1d6fa4f1")
  },{
    $inc: {
      age: 1
    },
    $set: {
      name: "Olaf"
    }
  }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });



  client.close();
});
