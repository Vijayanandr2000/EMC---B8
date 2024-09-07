import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const app = express();

app.use(cors());
app.use(express.json());



const uri = "mongodb+srv://vijayanandr2000:M8n7mp1tZwMkCexL@cluster0.xuwageq.mongodb.net/";

const client = new MongoClient(uri);

let todoListCollection

const connectDb = async () => {
  await client.connect();
  console.log("Connect to DB");
  todoListCollection = client.db('todolistdb').collection('todolist')
}

app.get("/todolists", async (req, res) => {
  let todoLists = await todoListCollection.find().toArray()

  res.send({
    status: 200,
    data: todoLists,
  });
});

app.post("/todolists", async (req, res) => {
  let { todoValue } = req.body;

  // todoLists.push(todoValue);

  await todoListCollection.insertOne({
    value: todoValue
  })

  res.send(true);

});

app.listen(8080, () => {
  console.log("listening on port 8080");
  connectDb()
});

// GET
// POST
// PUT
// DELETE
// PATCH

// 100
// 200 -> successMessage
// 201 -> successMessage for insert
// 300
// 401 -> unauthorised
// 404 -> not found
// 501
// 505

// DB
// 1. SQL -> relationl
// 2. NoSQL -> non - relationl


// sql -> structured query lanuage -> table

// name | age | email


// NoSQL -> NOT a structured query lanuage -> json, bson, graph, ...

// [{
//   name: ,
//   age:
// },
// {
//   name: ,
//   email:
// },
// {
//   name: ,
// }]

// MongoDB -> Non - relation -> NoSQL

// BASE property? -> TASK 1

// EMC -> B8 -> 40 students

// EMC      -> Database  -> Database
// B8       -> Table     -> collection
// students -> row(data) -> document

//M8n7mp1tZwMkCexL
// const uri = "mongodb+srv://<username>:<password>@cluster0.xuwageq.mongodb.net/?retryWrites=true&w=majority";


