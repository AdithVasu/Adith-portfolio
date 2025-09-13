import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Resume from './components/Pages/Resume';
import Projects from './components/Pages/Projects';
import Contact from './components/Pages/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}

export default App;