import React from "react";
import "../App.css";

function SkillList(props) {
  return (
    <div className="skill-list">
      <div className="type">{props.type}</div>
      {/* <div className="languages">
        {props.languages.map((language, index) => (
        <div className="language" key={index}>{language}</div>
      ))}
      </div> */}
      <div className="tools">{props.tools}</div>
      <div className="skill"><ul><li>{props.skill}</li></ul></div>
     
    </div>
  );
}

export default SkillList;
