import express from "express";
import cors from "cors";
import { allToDos, saveToDo, setup } from "./utils/fileStorage.js";

const PORT = 9999;
const app = express();

setup();

app.use(cors());
app.use(express.json());

app.get("/api/todo", (req, res) => {
  allToDos().then((todos) => res.json(todos));
});

app.post("/api/todo", (req, res) => {
  //- neues ToDo speichern
  const todo = req.body;
  saveToDo(todo);
  res.end();
});

app.listen(PORT, () => console.log(PORT, "läuft"));
