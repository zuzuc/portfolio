import React from "react";
import "../App.css";
import laptopImg from "./../assets/images/laptop.svg";

function ProjectCard({ title, tags, description, image, url }) {
  return (
    <div className="project-card">
      {/* Left Section - Project Details */}
      <div className="project-content">
        <h3 className="project-title">
          <span className="highlight"></span>
          {title}
        </h3>
        <div className="tags-container">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <p className="project-description">{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button className="project-button">Zur Website</button>
        </a>
      </div>

      {/* Right Section - Image */}
      <div className="project-image fly-in-from-right image-drop-shadow">
        <div className="cover">
          <img
            className="laptop-frame"
            src={laptopImg}
            alt="Laptop frame"
          />
          <img
            className="screenshot"
            src={image}
            alt={`Screenshot of ${title}`}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
