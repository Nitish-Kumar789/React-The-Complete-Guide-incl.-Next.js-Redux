import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ProjectDetails from "./components/ProjectDetails";
import NewProject from "./components/NewProject";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  function addProject(projectData) {
    setProjects((prev) => [...prev, projectData]);
    setIsAdding(false);
  }

  function deleteProject(id) {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    setSelectedProjectId(null);
  }

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId,
  );

  return (
    <div className="app">
      <Sidebar
        projects={projects}
        onSelect={setSelectedProjectId}
        onAdd={() => setIsAdding(true)}
      />

      <main className="content">
        {isAdding && <NewProject onAdd={addProject} />}

        {!isAdding && selectedProject && (
          <ProjectDetails
            project={selectedProject}
            onDelete={deleteProject}
            setProjects={setProjects}
          />
        )}

        {!isAdding && !selectedProject && (
          <p className="empty">Select a project or add a new one.</p>
        )}
      </main>
    </div>
  );
}
