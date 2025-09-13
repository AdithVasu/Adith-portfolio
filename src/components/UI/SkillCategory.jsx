import React from 'react';

const SkillCategory = ({ category, skills }) => {
  return (
    <div className="skill-category">
      <h4 className="skill-category-title">{category}</h4>
      <div className="skill-tags">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;