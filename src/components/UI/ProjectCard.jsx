import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <span className="project-date">{project.date}</span>
      </div>
      <p className="project-tech">{project.tech}</p>
      <p className="project-description">{project.description}</p>
      {project.details && (
        <p className="project-details">{project.details}</p>
      )}
      <button 
        onClick={() => window.open(project.github, '_blank')}
        className="project-button"
      >
        View on GitHub
      </button>
    </div>
  );
};

export default ProjectCard;