// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

//connect to mongodb
MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  const db = client.db("TodoApp");


// //deleteMany -> targets many documents and removes them
//   db.collection("Todos").deleteMany({text: "Eat lunch"}).then((result) => {   //then -> wenn erfolgreich ausgefürt
//     console.log(result);
//   });

// //delete One -> targets one document and removes it
//   db.collection("Todos").deleteOne({text: "Eat luch"}).then((result) => {
//     console.log(result);
//   });

// //findOneAndDelete -> removs indiviual item and returns values
//   db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
//     console.log(result);    //result contains deleted object
//   });

  // db.collection("Users").deleteMany({name: "Andrew"});

  db.collection("Users").findOneAndDelete({_id: new ObjectID("5b9d660f28650c7e1d6fa4e7")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2))
  });

  client.close();
});
