// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");   



MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {   
    if (err) {          
        return console.log("Unable to connect to MongoDB server");      
    }
        console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");        

    // db.collection("Todos").find().toArray().then((docs) => {     //find auch ohne Parameter möglich -> zeigt alles 
    // db.collection("Todos").find({
    //     _id: new ObjectID("5b9ade5226bcf809cced9477")   //quering for id's / create id object with the given id
    // }).toArray().then((docs) => {       //find is a (Curser)pointer to our documents/ toArray returns a promise
    //                             //filtert Objekte aus, wo das key:value (z.B completed: false) pair falsch ist -> returned dennoch ganze Objejte
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch todos",err);
    // });       

    // db.collection("Todos").find().count().then((count) => {      //counts all objects in collection       
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // });    

    db.collection("Users").find({name: "Sebastian"}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });


    client.close();   
});

















































