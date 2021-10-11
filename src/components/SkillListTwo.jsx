import React from "react";
import "../App.css";

function SkillListTwo(props) {
  return (
    <div className="skill-list">
      <div className="type">{props.type}</div>
      <div className="aboutpractices">{props.aboutpractices}</div>
      <div className="practices">{props.practices}</div>   
      <div className="abouttools">{props.abouttools}</div> 
      <div className="tools">{props.tools}</div>
       
    </div>
  );
}

export default SkillListTwo;