import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import skillData from "../data/skillData";
import "../App.css";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <Navbar />
      <div className="skills-page">
        <div className="skills-header">
          <h1>Profile</h1>
        </div>
        <div className="skills-container">
          {skillData.map((section, index) => (
            <div key={index} className="skill-section">
              <h2
                className={`section-title ${
                  section.type === "Languages" ? "languages" : ""
                }`}
              >
                {section.type}
              </h2>
              <div className="skills-grid">
                {section.items.map((item, idx) => (
                  <div key={idx} className="skill-item">
                    {/* Only display the icon if it exists */}
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="skill-icon"
                      />
                    )}
                    <span className="skill-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Skills;
