import React from "react";

function SkillList(props) {
  return (
    <div className="skill-list">
      <div className="skill"><ul><li>{props.skill}</li></ul></div>
    </div>
  );
}

export default SkillList;