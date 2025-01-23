import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import skillData from "../data/skillData";
import "../App.css";
import "./Skills.css";

const Skills = () => {
  // Define the custom order for sections
  const orderedSections = [
    "Languages",
    "Tools & Libraries",
    "Project Management",
    "Topics",
  ];

  return (
    <>
      <Navbar />
      <div className="skills-page">
        <div className="skills-header">
          <h1>Profile</h1>
        </div>
        <div className="skills-container">
          {/* Render sections in the specified order */}
          {orderedSections.map((sectionType, index) => {
            const section = skillData.find((s) => s.type === sectionType);

            // Handle "Project Management" and "Topics" together for side-by-side layout
            if (sectionType === "Project Management") {
              const topicsSection = skillData.find((s) => s.type === "Topics");

              return (
                <div key={index} className="side-by-side-sections">
                  {/* Render Project Management */}
                  <div className="skill-section">
                    <h2 className="section-title">{section.type}</h2>
                    <div className="skills-grid">
                      {section.items.map((item, idx) => (
                        <div key={idx} className="skill-item">
                          <span className="skill-name">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Render Topics */}
                  <div className="skill-section topics-section">
                    <h2 className="section-title">{topicsSection.type}</h2>
                    <div className="skills-grid">
                      {topicsSection.items.map((item, idx) => (
                        <div key={idx} className="skill-item">
                          <span className="skill-name">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            // Skip rendering "Topics" again as it is already handled above
            if (sectionType === "Topics") {
              return null;
            }

            // Render all other sections
            return (
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
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Skills;
