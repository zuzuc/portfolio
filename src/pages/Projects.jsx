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
        <div className="portfolio-container">
          <div className="web-dev-title-container">
            <h1 className="web-dev-title">Web Development</h1>
          </div>
          <article className="web-dev-intro">
            I am an analytical and creative web developer with an
            interdisciplinary background and over three years of experience in
            building design systems and pattern libraries using native web
            technologies. <br />
            <br />
            Passionate about component-based development, I have gained hands-on
            experience with React and am actively expanding my expertise in web
            accessibility. Committed to creating inclusive digital experiences,
            I have deepened my knowledge through extensive study and completion
            of the W3Cx: Introduction to Web Accessibility course, enabling me
            to develop user-friendly and compliant products.
          </article>
          <div className="headline-container">
            <div className="section-title">
              <h2>Portfolio</h2>
            </div>
            <article className="portfolio-intro">
              A selection of projects I´ve been working on so far, privately,
              professionally or as part of the training to become a "Full Stack
              Web & App Developer" at WBS Coding School.{" "}
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
      </div>
      <Footer />
    </>
  );
}

export default Projects;
