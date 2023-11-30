import { useRef } from "react";

export default function AddToDo({ setRefresh }) {
  const aufgabeRef = useRef();
  const statusRef = useRef();

  function save() {
    console.log(aufgabeRef.current.value);
    const todo = {
      aufgabe: aufgabeRef.current.value,
      status: statusRef.current.value,
    };

    fetch("http://localhost:9999/api/todo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(todo),
    }).then((response) => {
      if (response.ok) {
        aufgabeRef.current.value = "";
        statusRef.current.value = "";
        setRefresh((prev) => !prev);
      }
    });
  }
  return (
    <section>
      <div>
        <label htmlFor="aufgabe">Aufgabe: </label>
        <input ref={aufgabeRef} type="text" id="aufgabe" />
      </div>
      <div>
        <label htmlFor="status">Status </label>
        <input ref={statusRef} type="text" id="status" />
      </div>
      <div>
        <button onClick={save}>To Do speichern</button>
      </div>
    </section>
  );
}
