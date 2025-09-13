import React from 'react';

const TabButton = ({ tabName, label, isActive, onClick }) => (
  <button
    onClick={() => onClick(tabName)}
    className={`tab-button ${isActive ? 'active' : 'inactive'}`}
  >
    {label}
  </button>
);

export default TabButton;