import fs from "fs/promises";

export const setup = () => {
  fs.access("./todo.json")
    .then((data) => console.log(data))
    .catch((err) => fs.writeFile("./todo.json", "[]"));
};

export const allToDos = () => {
  return fs
    .readFile("./todo.json", { encoding: "utf8" })
    .then((data) => JSON.parse(data));
};

export const saveToDo = (todo) => {
  allToDos()
    .then((data) => {
      data.push(todo);
      console.log(data);
      return data;
    })
    .then((array) => fs.writeFile("./todo.json", JSON.stringify(array)));
};
