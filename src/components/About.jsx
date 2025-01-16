import React from "react";
import profileImg from "./../assets/pic.jpg";

const About = () => {
  return (
      <div className="about">
        <div className="section-container">
          <div className="headline-container">
            <div className="section-font">About Me</div>
            <div className="subheading-font">
              I am an analytical and creative Web Developer and Project Manager
              with an interdisciplinary study background. Solving problems and
              constantly learning gives me great joy, hence I started a
              professional career as a developer. I support diversity and
              inclusive approaches in the tech industry and believe in the power
              of coding for transformative change.
            </div>
            <div className="profile">
              <img src={profileImg} alt="Franziska Luig" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
