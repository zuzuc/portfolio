import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";
import projectData from "./../data/projectData";

function Projects() {
  return (
    <>
      <Navbar />
      <div className="projects">
        <div className="section-container">
          <div className="headline-container">
            <div className="section-font">Projects</div>
          </div>
          <div className="grids-container">
            <div className="grids-wrapper">
              {projectData.map((project) => (
                <Card
                  key={project.title}
                  title={project.title}
                  type={project.type}
                  image={project.image}
                  techStacks={project.techStacks}
                  // description={project.description}
                  alt={`Screenshot of ${project.title}`}
                  url={project.url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
