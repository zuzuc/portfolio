
import React from 'react';

const Skills = () => {
    return (
        <div className="skills">
          <div className="section-container">
            <div className="headline-container">
              <div className="section-font">Experience & Expertise</div>
                <div className="subheading-font">
                </div>
            </div>
          </div> 
        </div>
    )
}

export default Skills;


{/* <div className="skills-grid">
<div className="skills-container">
  <div className="title-wrapper">
    <img src={webSVG} alt="web development" />
    <div className="skill-title">Web Development</div>
  </div>
  <div className="skills">
    {skills
      .filter((skill) => skill.type === "Web Development")
      .map((webDevelopment, index) => (
        <List skill={webDevelopment.skill} key={index}/>
      ))}
  </div>
</div>
<div className="skills-container">
  <div className="title-wrapper">
    <img src={coachingSVG} alt="web development" />
    <div className="skill-title">Coaching & Management</div>
  </div>
  <div className="skills">
    {skills
      .filter(
        (skill) =>
          skill.type === "Coaching and Programme Management"
      )
      .map((coaching, index) => (
        <List skill={coaching.skill} key={index} />
      ))}
  </div>
</div>
<div className="skills-container">
  <div className="title-wrapper">
    <img src={scienceSVG} alt="web development" />
    <div className="skill-title">Scientific Skills</div>
  </div>
  <div className="skills">
    {skills
      .filter((skill) => skill.type === "Scientific Skills")
      .map((science, index) => (
        <List skill={science.skill} key={index}/>
      ))}
  </div>
</div>
</div> */}