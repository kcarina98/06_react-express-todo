import ToDoItem from "./ToDoItem";

export default function ToDoList({ todos }) {
  if (todos.length === 0) {
    return (
      <section>
        <h1>Keine To Dos zu erledigen</h1>
      </section>
    );
  } else {
    return (
      <section>
        {todos.map((todo, key) => (
          <ToDoItem todo={todo} key={key} />
        ))}
      </section>
    );
  }
}
