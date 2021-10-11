
import React from 'react';
import SkillListOne from "./SkillListOne";
import SkillListTwo from "./SkillListTwo";
import skillData from '../data/skillData';
import frontenddevelopment from "./../assets/frontenddevelopment.png";
import backenddevelopment from "./../assets/backenddevelopment.png";
import projectmanagement from "./../assets/projectmanagement.png";


const Skills = () => {
    return (
      <>
        <div className="expertise">
          <div className="section-container">
            <div className="headline-container">
              <div className="section-font">Experience & Expertise</div>
                <div className="skills-grid">
                  <div className="skills-container">
                    <div className="title-wrapper">
                      <img src={frontenddevelopment} alt="frontend development" />
                      <div className="skill-title">Frontend Development</div>
                    </div>
                    <div className="skills">
                    {skillData
                    .filter((skill) => skill.type === "Frontend Development")
                    .map((skill) => (
                      <SkillListOne
                        key={skill.type}
                        aboutlanguages={skill.aboutlanguages}
                        languages={skill.languages}
                        abouttools={skill.abouttools}
                        tools={skill.tools}
                      />
                      ))}
                    </div>
                  </div>
                  <div className="skills-container">
                    <div className="title-wrapper">
                      <img src={backenddevelopment} alt="backend development" />
                      <div className="skill-title">Backend Development</div>
                    </div>
                    <div className="skills">
                    {skillData
                    .filter((skill) => skill.type === "Backend Development")
                    .map((skill) => (
                      <SkillListOne
                        key={skill.type}
                        aboutlanguages={skill.aboutlanguages}
                        languages={skill.languages}
                        abouttools={skill.abouttools}
                        tools={skill.tools}
                      />
                      ))}
                    </div>
                  </div>
                  <div className="skills-container">
                    <div className="title-wrapper">
                      <img src={projectmanagement} alt="project management" />
                      <div className="skill-title">Project Management</div>
                    </div>
                    <div className="skills">
                    {skillData
                    .filter((skill) => skill.type === "Project Management")
                    .map((skill) => (
                      <SkillListTwo
                        key={skill.type}
                        aboutpractices={skill.aboutpractices}
                        practices={skill.practices}
                        abouttools={skill.abouttools}
                        tools={skill.tools}
                      />
                      ))}
                    </div>
                  </div>

                </div>
            </div>
          </div>
        </div> 
      </>
    );
}

export default Skills;

