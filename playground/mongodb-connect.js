// H: \Programme\MongoDB\Server\4.0 > cd bin
// H: \Programme\MongoDB\Server\4.0\bin > mongod.exe--dbpath C: \Users\sebas\mongo - data

//install mongodb T: npm install mongodb --save

// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");       //selbe wie oben: destructured object und nimmt sich den MongoCLient und ObejctID Part

// var obj = new ObjectID();       //creates new _id
// console.log(obj);

// var user = {name: "Sebastian", age: 18};       //object destructuring : pulls out properties from objects and puts them in variable
// var {name} = user;
// console.log(name);          //-> = Sebastian

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {    //connects to database/ Arg.1: Pfad zur Datenbank und erstellt neue
    if (err) {          //Greift error ab
        return console.log("Unable to connect to MongoDB server");      //stoppt das Programm wenn return kommt, statt else
    }        //callback Arg1: falls errors auftreten Arg2: Zugriff auf Datenbank
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");        //gives database reference

     db.collection("Todos").insertOne({  //Arg1: name of collection we want to insert into
        text: "Something to do",        //insertOne inerst new Document in Collection
        completed: false
    }, (err, result) => {
        if(err) {
            return console.log("Unable to insert todo", err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));     //ops stores all objects we inserted
    });

    db.collection("Users").insertOne({
        // _id: 123,       //setzt id manuell
        name: "Sebastian",
        age: 18,
        location: "Munich"
    }, (err, result) => {
        if(err) {
            return console.log("Unable to insert User", err);
        }
        // console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());     //greift auf id zu nimmt den Timestamp Teil und gibt ein Erstelldatum aus (_id besteh aus mehreren zusammengefügten Teilen)
    });     //auch in for loop möglich

    client.close();     //closes connection with MongoDB server
  });
//einfach datei mit node  Befehl ausfürhren reicht aber vorher Mongo server starten
