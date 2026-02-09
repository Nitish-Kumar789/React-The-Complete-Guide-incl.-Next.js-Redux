import TaskList from "./TaskList";

export default function ProjectDetails({ project, onDelete, setProjects }) {
  function addTask(text) {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === project.id ? { ...p, tasks: [...p.tasks, text] } : p,
      ),
    );
  }

  function clearTask(task) {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === project.id
          ? { ...p, tasks: p.tasks.filter((t) => t !== task) }
          : p,
      ),
    );
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <button onClick={() => onDelete(project.id)}>Delete</button>

      <TaskList tasks={project.tasks} onAdd={addTask} onClear={clearTask} />
    </div>
  );
}
