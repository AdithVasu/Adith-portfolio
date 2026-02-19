import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, FileText, Mail } from 'lucide-react';
import profilePic from '../../assets/Screenshot 2026-02-18 at 11.06.06 PM.png'; 

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <section className="hero-split">
        {/* Left Side: Text */}
        <div className="hero-left">
          <h1 className="hero-name">Adith Vasudevan</h1>
          <p className="hero-tagline">
            CS & Statistics <span className="highlight">@ Washington University in St. Louis '27</span>
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="hero-right">
          <div className="image-container">
            <img src={profilePic} alt="Adith Vasudevan" className="profile-img" />
          </div>
        </div>
      </section>

      {/* Massive CTA Buttons */}
      <div className="mega-actions">
        <button onClick={() => navigate('/projects')} className="mega-btn">
          <Briefcase size={32} />
          <span>View Projects</span>
        </button>
        
        <a href="/resume.pdf" download className="mega-btn">
          <FileText size={32} />
          <span>Download Resume</span>
        </a>

        <button onClick={() => navigate('/contact')} className="mega-btn">
          <Mail size={32} />
          <span>Get In Touch</span>
        </button>
      </div>
    </div>
  );
};

export default Home;