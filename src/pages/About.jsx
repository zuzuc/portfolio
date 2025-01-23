import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import profileImg from "./../assets/images/pic.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="section-container">
          <div className="headline-container">
            <div className="section-title">
              <h1>My Journey</h1>
            </div>
            <div className="profile">
              <img src={profileImg} alt="Franziska Luig" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
