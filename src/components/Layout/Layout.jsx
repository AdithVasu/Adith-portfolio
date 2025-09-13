import React from 'react';
import Navigation from '../Navigation/Navigation';
import StarsAnimation from '../UI/StarsAnimation';

const Layout = ({ activeTab, setActiveTab, children }) => {
  return (
    <div className="layout-container">
      <StarsAnimation />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;