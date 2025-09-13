import React from 'react';

const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <div>
          <h4 className="experience-title">{experience.title}</h4>
          <p className="experience-company">{experience.company}</p>
        </div>
        <div className="experience-meta">
          <p>{experience.period}</p>
          <p>{experience.location}</p>
        </div>
      </div>
      <ul className="experience-list">
        {experience.achievements.map((achievement, i) => (
          <li key={i} className="experience-item">
            <span className="bullet">•</span>
            <span className="card-text">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;