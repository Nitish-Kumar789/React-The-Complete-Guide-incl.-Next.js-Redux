import { useState } from "react";

export default function TaskList({ tasks, onAdd, onClear }) {
  const [task, setTask] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    onAdd(task);
    setTask("");
  }

  return (
    <div>
      <h3>Tasks</h3>

      <form onSubmit={submitHandler}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="New task"
          required
        />
        <button>Add Task</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task}>
            {task}
            <button onClick={() => onClear(task)}>Clear</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
