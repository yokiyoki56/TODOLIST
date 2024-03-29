import "./styles.css";

import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  function addItem(e) {
    e.preventDefault();

    if (!value) return;
    const newTask = [...tasks, { text: value }];
    setTasks(newTask);
    setValue("");
  }

  function removeItem(e, id) {
    e.preventDefault();
    let temp = [...tasks];
    temp.splice(id, 1);
    setTasks(temp);
  }

  return (
    <>
      <div className="name">
        <h1> TO -DO LIST </h1>
      </div>
      <div>
        <form className="form" onSubmit={addItem}>
          <input
            type="text"
            className="input"
            placeholder="add"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="btn_submit">Submit</button>
        </form>

        {tasks.map((item, id) => (
          <div className="task" key={id} id={id}>
            {item.text}
            <button className="btn_remove" onClick={(e) => removeItem(e, id)}>
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

