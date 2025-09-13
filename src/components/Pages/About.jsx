import React from 'react';

const About = () => {
  return (
    <div className="page-container">
      <div className="page-container-wide">
        <h2 className="section-title">About Me</h2>

        <div className="grid-2" style={{ marginBottom: '4rem' }}>
          {/* Personal Background */}
          <div className="card">
            <h3 className="card-title">Personal Background</h3>
            <div className="card-text vertical-stack">
              <p>
                Hello! I'm Adith, born and raised in Petaluma, California (an hour north of San Francisco). 
                I'm currently pursuing my passion for technology and data science at Washington University in St. Louis.
              </p>
              <p>
                I'm driven by the intersection of software engineering and data science, with hands-on experience 
                in building full-stack applications, creating automated data pipelines, and developing scalable solutions.
              </p>
              <p>
                I'm proficient in multiple programming languages and frameworks, and I'm constantly expanding 
                my technical expertise to stay at the forefront of technology.
              </p>
            </div>
          </div>

          {/* Interests & Hobbies */}
          <div className="card">
            <h3 className="card-title">Interests & Hobbies</h3>
            <div className="card-text vertical-stack">
              <p>
                When I'm not coding or analyzing data, you'll find me in the gym lifting weights, 
                strategizing at the poker table, or cheering on my favorite Bay Area teams.
              </p>
              <p>
                <strong className="text-blue">Sports Teams:</strong> Go Warriors, 49ers, and Giants! 
                I'm passionate about basketball, football, and baseball.
              </p>
              <p>
                <strong className="text-blue">Fitness:</strong> Regular weightlifting helps me stay disciplined 
                and focused, qualities that translate well into my technical work.
              </p>
              <p>
                <strong className="text-blue">Poker:</strong> The strategic thinking and probability analysis 
                in poker complement my analytical mindset in data science.
              </p>
            </div>
          </div>
        </div>

        {/* Professional Philosophy */}
        <div className="card">
          <h3 className="card-title">Professional Philosophy</h3>
          <div className="card-text vertical-stack">
            <p>
              I believe in the power of technology to solve real-world problems and improve people's lives. 
              Whether I'm building user-facing applications, optimizing data pipelines, or mentoring fellow students, 
              I approach each challenge with curiosity, persistence, and attention to detail. I'm always looking 
              to expand my knowledge and contribute to innovative projects that make a meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
