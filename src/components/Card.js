import React, { useState } from "react";
import "../App.css";

function Card(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="grid-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <div className="card-overlay">
          <div className="card-image">
            <img src={props.image} alt={props.alt} />
          </div>

          {/* Remove card-details completely on hover */}
          {!isHovered && (
            <div className="card-details">
              <div className="type">{props.type}</div>
              <div className="stacks">
                {props.techStacks.map((techStack, index) => (
                  <div className="stack" key={index}>
                    {techStack}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Visit Website Button - Always Visible on Hover */}
          {isHovered && (
            <div className="card-content">
              <button className="visit-button">Visit Website</button>
            </div>
          )}
        </div>
      </a>
    </div>
  );
}

export default Card;
