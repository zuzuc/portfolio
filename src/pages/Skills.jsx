import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import skillData from "../data/skillData";
import "../App.css";

const Skills = () => {
  return (
    <>
      <Navbar />
      <div className="skills-page">
        <div className="section-container">
          <div className="section-header">
            <h1>Profile</h1>
          </div>
          <div className="skills-grid">
            {skillData.map((category, index) => (
              <div key={index} className="skills-category">
                <h2 className="category-title">{category.type}</h2>
                <div className="skills-items">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="skill-item">
                      {item.icon && (
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="skill-icon"
                        />
                      )}
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Skills;
