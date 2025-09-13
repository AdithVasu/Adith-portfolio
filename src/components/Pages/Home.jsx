import React from 'react';

const Home = ({ setActiveTab }) => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">
          Adith Vasudevan
        </h1>
        <h2 className="home-subtitle">
          CS & Statistics student at Washington University in St. Louis
        </h2>
        <div className="home-buttons">
          <button
            onClick={() => setActiveTab('about')}
            className="btn-primary"
          >
            Learn About Me
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className="btn-secondary"
          >
            View My Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;