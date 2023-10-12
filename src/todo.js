import React, { useState } from "react";
import { BsJournalPlus } from "react-icons/bs";
import './style.css'
import { IoRemoveCircleOutline } from "react-icons/io5";
function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <p>To-Do App</p>
      <hr />
      <div style={{ position: "relative" ,marginLeft:20}}>
        <input
          className="inputbox"
          type="text"
          placeholder="Add a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={addTask}
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            border: "none",
            background: "none",
            cursor: "pointer"
          }}
          className="btn"
        >
          <BsJournalPlus color="green" />
        </button>
      </div>
      <hr/>
      <ul className="listbox">
        {tasks.map((task, index) => (
          <li key={index} className="items">
            <h3>{task}</h3>
            <button
              onClick={() => removeTask(index)}
              style={{ border: "none", background: "none",cursor:'pointer' }}
              className="btn"
            >
              <IoRemoveCircleOutline color="red" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
