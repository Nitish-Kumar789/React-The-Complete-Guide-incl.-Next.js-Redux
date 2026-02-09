export default function Sidebar({ projects, onSelect, onAdd }) {
  return (
    <aside className="sidebar">
      <h2>YOUR PROJECTS</h2>
      <button onClick={onAdd}>+ Add Project</button>

      <ul>
        {projects.map((project) => (
          <li key={project.id} onClick={() => onSelect(project.id)}>
            {project.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}
