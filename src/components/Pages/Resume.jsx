import React from 'react';
import { Download } from 'lucide-react';

const Resume = () => {
  return (
    <div className="main-content">
      <h2 className="section-title center">Resume</h2>

      <div className="resume-container">
        {/* The direct PDF embed */}
        <div className="pdf-viewer">
          <embed
            src="/resume.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </div>

        {/* The direct download link */}
        <div className="resume-actions">
          <a 
            href="/resume.pdf" 
            download="Adith_Vasu_Resume.pdf" 
            className="mega-btn download-btn"
          >
            <Download size={24} />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;