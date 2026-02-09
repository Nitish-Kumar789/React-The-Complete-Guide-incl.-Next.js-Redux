import { useState } from "react";

export default function NewProject({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    onAdd({
      id: Math.random().toString(),
      title,
      description,
      tasks: [],
    });
  }

  return (
    <form onSubmit={submitHandler} className="form">
      <h2>New Project</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <button>Add Project</button>
    </form>
  );
}
