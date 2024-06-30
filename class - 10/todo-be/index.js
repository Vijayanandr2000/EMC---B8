import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const todoLists = [];

app.get("/todolists", (req, res) => {
  res.send({
    status: 200,
    data: todoLists,
  });
});

app.post("/todolists", (req, res) => {
  let { todoValue } = req.body;

  todoLists.push(todoValue);

  res.send(true);

  console.log(todoLists);
});

app.listen(8080, () => {
  console.log("listening on port 8080");
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
