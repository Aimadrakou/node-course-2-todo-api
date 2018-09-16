const expect = require("expect");
const request = require("supertest");
connst {ObjectID} = require("mongodb");

const {app} = require("./../server");
const {Todo} = require("./../models/todo");

const todos = [{
  _id: new ObjectId(),
  text: "First test todo"
}, {
  _id: new ObjectId(),
  text: "Second test todo"
}];

beforeEach((done) => {                         //runs code before the test case
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());                       //removes all todos
});

describe("POST /todos", () => {                //structures test ouput
  it("should create a new todo", (done) => {
    var text = "Test todo text";

    request(app)                               //reqest on app
      .post("/todos")                          //making post request
      .send({text})                            //post request and sending data
      .expect(200)                             //we expect status 200 after sending data
      .expect(() => {
        expect(res.body.text).toBe(text);      //checks if text from body is same as sent data
      })
      .end((err, res) => {                     //handles error that was mentioned above
        if (err) {
          return done(err);                    //ends test
        }

        Todo.find().then((todos) => {          //fetches all todos (veryfies if successful)
          expect(todos.lenth).toBe(1);         // because we added one todo
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));              //if error occurs to end the test
      });
  });

  it("should not create todo with invalid body data", (done) => {
    request(app)                               //tests what corrupt data will do
      .post("/todos")
      .send({})
      .expect(400)                             //make assertion
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      })
  });
});

describe("GET /todos", () => {
  it("should get all todos", (done) => {
    request(app)
      .get("/todos")
      .expect(200)
      .expect(() => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });
});

describe("GET /todos/:id", () => {
  it("should return todo doc", (done) => {
    request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text.ToBe(todos[0].text));
      })
      .end(done);
  });

  it("should return 404 if todo not found", (done) => {
    var hexId = new ObjectID().toHexString();

    request(app)
      .get(`/todos/${hexId}`)
      .expect(404)
      .end(done)
  });

  it("should return 404 for non-object ids", (done) => {
    request(app)
      .get("/todos/123abc")
      .expect(404)
      .end(done)
  });
});
