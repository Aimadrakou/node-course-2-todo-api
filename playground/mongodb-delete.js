// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");


MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  const db = client.db("TodoApp");


  //deleteMany -> targets many documents and removes them
  db.collection("Todos").deleteMany({text: "Eat lunch"}).then((result) => {   //then -> wenn erfolgreich ausgefürt
  console.log(result);
  });

  //delete One -> targets one document and removes it


  //findOneAndDelete -> removs indiviual item and returns values


  client.close();
});
