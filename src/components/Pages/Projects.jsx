import React from 'react';
import ProjectCard from '../UI/ProjectCard';
import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <div className="page-container">
      <div className="page-container-wide">
        <h2 className="section-title">
          Projects
        </h2>
        <div className="grid-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;