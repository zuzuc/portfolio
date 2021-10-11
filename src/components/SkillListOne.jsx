import React from "react";
import "../App.css";

function SkillListOne(props) {
  return (
    <div className="skill-list">
      <div className="type">{props.type}</div>
      <div className="aboutlanguages">{props.aboutlanguages}</div>
      <div className="languages">{props.languages}</div>
      <div className="abouttools">{props.abouttools}</div>
      <div className="tools">{props.tools}</div>
      <div className="practices">{props.practices}</div>
    </div>
  );
}

export default SkillListOne;
