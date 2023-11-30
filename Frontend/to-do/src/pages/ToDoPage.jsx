import { useState, useEffect } from "react";
import AddToDo from "../components/AddToDo.jsx";
import ToDoList from "../components/ToDoList.jsx";

export default function ToDoPage() {
  const [todos, setToDo] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9999/api/todo")
      .then((response) => response.json())
      .then((data) => setToDo(data));
  }, [refresh]);

  return (
    <main>
      <AddToDo setRefresh={setRefresh} />
      <h1>To Do:</h1>
      <ToDoList todos={todos} />
    </main>
  );
}
