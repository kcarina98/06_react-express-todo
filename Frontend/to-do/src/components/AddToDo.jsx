import { useRef } from "react";

export default function AddToDo({ setRefresh }) {
  const aufgabeRef = useRef();
  const statusRef = useRef();

  function save() {
    console.log("Aufgabe: ", aufgabeRef.current.value);
    console.log("Status: ", statusRef.current.value);
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
        <select ref={statusRef} id="status" defaultValue={"not-ready"}>
          <option value="ready">Erledigt</option>
          <option value="not-ready">Offen</option>
        </select>
      </div>
      <div>
        <button onClick={save}>To Do speichern</button>
      </div>
    </section>
  );
}
