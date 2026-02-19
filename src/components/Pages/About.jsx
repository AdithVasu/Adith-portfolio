import React from 'react';

const About = () => {
  return (
    <div className="main-content">
      <h2 className="section-title center">About Me</h2>

      <div className="about-split">
        
        <div className="card about-card">
          <h3 className="subsection-header">Professional</h3>
          <div className="about-content">
            <p className="about-para">
              I am a <span className="text-white">software engineer and student</span> passionate about building scalable, impactful solutions at the intersection of frontend development and data intelligence. I specialize in the React/TypeScript ecosystem, with a focus on transforming complex data into high-performance, intuitive user experiences.
            </p>
            <p className="about-para" style={{ marginTop: '1.5rem' }}>
              I am currently seeking opportunities in
              <span className="text-accent"> Software Engineering</span>, 
              <span className="text-accent"> AI Engineering</span>, and 
              <span className="text-accent"> Product</span>.
            </p>
          </div>
        </div>

        
        <div className="card about-card">
          <h3 className="subsection-header">Personal</h3>
          <div className="about-content">
            <p className="about-para">
              Outside of engineering, I’m deeply passionate about music and artistic expression. 
              I recently picked up the <strong>electric guitar</strong> and have been immersed in 
              exploring a wide range of genres as I learn. When I’m not playing music, I’m likely 
              at the <strong>gym</strong> staying active or at the <strong>poker table</strong>, 
              where I enjoy the challenge of strategic decision-making and probability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;