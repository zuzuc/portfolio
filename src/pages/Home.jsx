import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <div className="intro">
          I am an analytical and creative Web Developer and Project Manager with
          an interdisciplinary study background. Solving problems and constantly
          learning gives me great joy, hence I started a professional career as
          a developer. I support diversity and inclusive approaches in the tech
          industry and believe in the power of coding for transformative change.
        </div>
        <div className="menu">
          <ul className="menu-list">
            <li className="menu-item">
              <a href="/projects">Projects</a>
            </li >
            <li className="menu-item">
              <a href="/about">About</a>
            </li>
            <li className="menu-item">
              <a href="/skills">Skills</a>
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
