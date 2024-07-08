import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({ project, isActive, handleClick }) => {
  return (
    <div 
      className={`project__card ${isActive ? 'active-project' : ''}`} 
      onClick={handleClick} 
      key={project.id}
    >
      <img className="project__img" src={project.image} alt="" />
      <h3 className="project__title">{project.title}</h3>
      <div className="project__tech-stack">
        <h4>Tech Stack:</h4>
        <ul>
          {project.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="project__button">
        Check it out <HiOutlineArrowSmRight className="project__button-icon" />
      </a>
    </div>
  );
}

export default ProjectItems;
