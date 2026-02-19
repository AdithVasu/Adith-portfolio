import React from 'react';
import Navigation from '../Navigation/Navigation';
import StarsAnimation from '../UI/StarsAnimation';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <StarsAnimation />
      <Navigation />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;