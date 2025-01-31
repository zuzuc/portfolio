import React, { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Skills from "../pages/Skills";
import quote from "./../assets/images/quote.svg";
import profileImg from "./../assets/images/pic.jpg";

function Home() {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    sectionRef.current?.focus(); // Ensure the focus moves to the target section
  };

  return (
    <>
      <Header />
      {/* Scroll Down Button */}
      <div className="scroll-down-container">
        <button
          className="scroll-down-btn"
          onClick={scrollToSection}
          aria-label="Scroll down"
        >
          <div className="pointer" aria-hidden="true"></div>
        </button>
      </div>

      <div className="home">
        <div className="quote-picture-container" ref={sectionRef}>
          <div className="quote-container">
            <img className="quote-icon" src={quote} alt="Icon of a quotation mark" />
            <p className="quote">
              I am an analytical and creative Web Developer and Project Manager
              with an interdisciplinary study background. Solving problems and
              constantly learning gives me great joy, hence I started a
              professional career as a developer. I support diversity and
              inclusive approaches in the tech industry and believe in the power
              of coding for transformative change.
            </p>
          </div>
          <div className="profile-pic">
            <img src={profileImg} alt="Profile photo of Franziska Luig" />
          </div>
        </div>
        <Skills />
      </div>
      <Footer />
    </>
  );
}

export default Home;
