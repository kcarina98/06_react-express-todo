export default function ToDoItem({ todo }) {
  if (todo.status === "not-ready") {
    return (
      <div>
        <ul>
          <li>{todo.aufgabe}</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ul>
          <li className="red">{todo.aufgabe}</li>
        </ul>
      </div>
    );
  }
}
