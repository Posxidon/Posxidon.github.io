import React, { useState } from 'react';
import { projectsData } from "./Data";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const handleClick = (project) => {
    setActiveProject(project);
  };

  return (
    <div>
      <div className="project__container container grid">
        {projectsData.map((project) => (
          <ProjectItems
            key={project.id}
            project={project}
            isActive={project === activeProject}
            handleClick={() => handleClick(project)}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
