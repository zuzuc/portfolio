import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Skills from "../pages/Skills";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <div className="about-me intro">
          I am an analytical and creative Web Developer and Project Manager with
          an interdisciplinary study background. Solving problems and constantly
          learning gives me great joy, hence I started a professional career as
          a developer. I support diversity and inclusive approaches in the tech
          industry and believe in the power of coding for transformative change.
        </div>
        <Skills />
        <div className="menu-button-container">
          <ul>
            <li>
              <a href="/about">My Journey</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
