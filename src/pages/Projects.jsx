import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import projectData from "./../data/projectData";

function Projects() {
  return (
    <>
      <Navbar />
      <div className="portfolio-page">
        <div className="web-dev-title-container">
          <h1 className="web-dev-title">Web Development</h1>
        </div>
        <div className="headline-container">
          <div className="section-title">
            <h2>Portfolio</h2>
          </div>
          <article className="portfolio-intro">
            A selection of projects I´ve been working on so far, as part of the
            privately, as part of the Coding Bootcamp or at work{" "}
          </article>
        </div>

        <div className="projects-container">
          {projectData.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              tags={project.techStacks}
              description={project.description}
              image={project.image}
              url={project.url}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
