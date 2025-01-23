import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import projectData from "./../data/projectData";

function Projects() {
  return (
    <>
      <Navbar />
      <div className="projects-container">
        <div className="section-container">
          <div className="headline-container">
            <div className="section-title">
              <h1>Projects</h1>
            </div>
            <div>
            <span className="intro">
              A selection of projects I´ve been working on so far, as part of the privately, as part of the Coding Bootcamp or at work{" "}
            </span>
          </div>
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
