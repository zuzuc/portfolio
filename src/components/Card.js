import React from "react";
import "../App.css";

function Card(props) {
  return (
    <div>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <div className="grid-card">
          <div className="project">
            <div className="title">{props.title}</div>
            <div className="img">
              <img src={props.image} alt={props.alt} />
            </div>
            <div className="type">{props.type}</div>                
            <div className="stacks">
              {props.techStacks.map((techStack, index) => (
                <div className="stack" key={index}>{techStack}</div>
              ))}
            </div>
            <div className="description">{props.description}</div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;