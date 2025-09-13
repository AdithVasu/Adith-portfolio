import React from 'react';
import TabButton from '../UI/TabButton';

const Navigation = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-logo">
            Adith Vasudevan
          </div>
          <div className="nav-buttons">
            <TabButton tabName="home" label="Home" isActive={activeTab === 'home'} onClick={setActiveTab} />
            <TabButton tabName="about" label="About" isActive={activeTab === 'about'} onClick={setActiveTab} />
            <TabButton tabName="resume" label="Resume" isActive={activeTab === 'resume'} onClick={setActiveTab} />
            <TabButton tabName="projects" label="Projects" isActive={activeTab === 'projects'} onClick={setActiveTab} />
            <TabButton tabName="contact" label="Contact" isActive={activeTab === 'contact'} onClick={setActiveTab} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;