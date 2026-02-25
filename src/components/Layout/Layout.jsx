import React from 'react';
import Navigation from '../Navigation/Navigation';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navigation />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;