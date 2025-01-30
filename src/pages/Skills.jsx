import React from "react";
import skillData from "../data/skillData";
import SideBySideSection from "../components/SideBySideSection";
import "../App.css";

const Skills = () => {
  // Define the custom order for sections
  const orderedSections = [
    "Languages",
    "Tools & Libraries",
    "Project Management",
    "Topics",
  ];

  return (
    <div>
      <div className="skills-page">
        <div className="headline-container">
          <div className="section-title">
            <h2>Profile</h2>
          </div>
          <div>
            <span className="skills-intro">
              Continuously discovering and learning new things gives me energy.
              I’m always eager to expand my tech stack and stay up-to-date with
              emerging technologies, while leveraging the knowledge I’ve gained
              in web development, project management, and the academic field.{" "}
            </span>
          </div>
        </div>
        <div className="skills-container">
          {/* Render sections in the specified order */}
          {orderedSections.map((sectionType, index) => {
            const section = skillData.find((s) => s.type === sectionType);

            // Handle "Project Management" and "Topics" together for side-by-side layout
            if (sectionType === "Project Management") {
              const sectionTwo = skillData.find((s) => s.type === "Topics");

              return (
                <SideBySideSection
                  key={index}
                  section1={section}
                  section2={sectionTwo}
                />
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
                  className={`sub-section-title ${
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
    </div>
  );
};

export default Skills;
