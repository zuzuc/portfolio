import React from "react";
import Card from "./Card";
import projectData from "./../data/projectData";


function Projects(){
    return (
        <>
          <div className="section-container">
              <div className="headline-container">
                <div className="section-font">Projects</div>
                  <div className="subheading-font">Visit my{" "}
                    <a
                      href="https://github.com/zuzuc"
                      className="link"
                      target="_blank"
                      rel="noopener noreferrer"
                      >Github</a>{" "}
                      page to view current projects. 
                  </div>  
                </div>
                <div className="grids-container">
                    <div className="grids-wrapper">
                        {projectData.map((project) => (
                            <Card
                                key={project.title}
                                title={project.title}
                                image={project.image}
                                techStacks={project.techStacks}
                                description={project.description}
                                alt={`Screenshot of ${project.title}`}
                                url={project.url}
                            />
                    ))}
                    </div>
                </div>
          </div>
        </>

    );
};

export default Projects;