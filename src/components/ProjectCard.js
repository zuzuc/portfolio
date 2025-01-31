import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import laptopImg from "./../assets/images/laptop.svg";

function ProjectCard({ title, tags, description, image, url }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const currentRef = ref.current; // Store ref.current in a variable to avoid stale value

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit the website for ${title}, opens in a new tab`}
        >
          <button className="project-button">Visit Website</button>
        </a>
      </div>

      {/* Right Section - Image */}
      <div
        ref={ref}
        className={`project-image fly-in-from-right image-drop-shadow ${
          isVisible ? "visible" : "hidden"
        }`}
      >
        <div className="cover">
          <img className="laptop-frame" src={laptopImg} alt="Laptop frame" />
          <img
            className="screenshot"
            src={image}
            alt={`Screenshot of ${title}`}
          />
          {isHovered && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-website-btn"
              aria-label={`Visit the website for ${title}, opens in a new tab`}
            >
              Visit Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
