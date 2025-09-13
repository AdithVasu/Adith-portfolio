import React from 'react';
import ExperienceCard from '../UI/ExperienceCard';
import SkillCategory from '../UI/SkillCategory';
import { experiences } from '../../data/experiences';
import { skills } from '../../data/skills';
import { education } from '../../data/education';

const Resume = () => {
  return (
    <div className="page-container">
      <div className="page-container-wide">
        <h2 className="section-title">
          Resume
        </h2>
        
        {/* Education */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 className="subsection-title">Education</h3>
          <div className="card">
            <div className="experience-header" style={{ marginBottom: '1rem' }}>
              <div>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{education.school}</h4>
                <p style={{ fontSize: '1.25rem', color: '#93c5fd' }}>{education.degree}</p>
                <p style={{ fontSize: '1.125rem', color: '#60a5fa' }}>{education.gpa}</p>
              </div>
              <div className="experience-meta">
                <p>{education.period}</p>
                <p>{education.location}</p>
              </div>
            </div>
            <div>
              <h5 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#93c5fd', marginBottom: '0.75rem' }}>
                Relevant Coursework:
              </h5>
              <div className="grid-2">
                {education.coursework.map((course, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                    <span className="bullet">•</span>
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 className="subsection-title">Experience</h3>
          <div className="list-container">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h3 className="subsection-title">Technical Skills</h3>
          <div className="grid-3">
            {Object.entries(skills).map(([category, skillList]) => (
              <SkillCategory key={category} category={category} skills={skillList} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;