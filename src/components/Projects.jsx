import React from "react";
// import Card from "./Card";
// import projects from "./../data/projectData";

function Projects () {
    return (
        <>
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
            {/* <div className="grids-container">
                <div className="grids-wrapper">
                {projects.map((project) => (
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
            </div> */}
        {/* </div> */}
        </ >
    );
};

export default Projects; 