import React from "react";

const SideBySideSection = ({ section1, section2 }) => {
  return (
    <div className="side-by-side-sections">
      {/* Render First Section */}
      <div className="skill-section">
        <h2 className="section-title">{section1.type}</h2>
        <div className="skills-grid">
          {section1.items.map((item, idx) => (
            <div key={idx} className="skill-item">
              <span className="skill-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Render Second Section */}
      <div className="skill-section">
        <h2 className="section-title">{section2.type}</h2>
        <div className="skills-grid">
          {section2.items.map((item, idx) => (
            <div key={idx} className="skill-item">
              <span className="skill-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBySideSection;
