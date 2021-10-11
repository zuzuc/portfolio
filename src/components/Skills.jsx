
import React from 'react';
import SkillList from "./SkillList";
import skillData from '../data/skillData';

const Skills = () => {
    return (
        <div className="expertise">
          <div className="section-container">
            <div className="headline-container">
              <div className="section-font">Experience & Expertise</div>
              <div className="skills-grid">
                <div className="skills-container">
                  <div className="title-wrapper">
                    {/* <img src={frontendSVG} alt="frontend development" /> */}
                    <div className="skill-title">Frontend Development</div>
                  </div>
                  <div className="skills">
                  {skillData.map((skill) => (
                    <SkillList
                      key={skill.type}
                      languages={skill.languages}
                      practices={skill.practices}
                      tools={skill.tools}
                    />

                               
                    {/* {skillData
                      .filter((skill) => skill.type === "Frontend Development")
                      .map((frontendDevelopment, index) => (
                        <SkillList skill={frontendDevelopment.skill} key={index}/>
                      ))} */}
                  </div>
                </div>
                <div className="skills-container">
                  <div className="title-wrapper">
                    {/* <img src={backendSVG} alt="backend development" /> */}
                    <div className="skill-title">Backend Development</div>
                  </div>
                  <div className="skills">
                    {skillData
                      .filter(
                        (skill) =>
                          skill.type === "Backend Development"
                      )
                      .map((backendDevelopment, index) => (
                        <SkillList skill={backendDevelopment.skill} key={index} />
                      ))}
                  </div>
                </div>
                <div className="skills-container">
                  <div className="title-wrapper">
                    {/* <img src={projectSVG} alt="project management" /> */}
                    <div className="skill-title">Project Management</div>
                  </div>
                  <div className="skills">
                    {skillData
                      .filter((skill) => skill.type === "Project Management")
                      .map((projectManagement, index) => (
                        <SkillList skill={projectManagement.skill} key={index}/>
                      ))}
                  </div>
                </div>
          </div>



                {/* <div className="subheading-font">
                </div> */}
            </div>
          </div> 
        </div>
    )
}

export default Skills;
