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
            <img
              className="quote-icon"
              src={quote}
              alt="Icon of a quotation mark"
            />
            <article className="quote">
              I am an inquisitive and conscientious software developer with a
              passion for clean, maintainable code. I thrive in collaborative
              environments where professional exchange, such as pair
              programming, fosters continuous learning and innovation. <br />
              <br />
              With a strong emphasis on both communication and creativity, I
              enjoy contributing to team success and appreciate an approach that
              values respect and mutual support. I am committed to focused work
              time and am always eager to enhance my skills through
              collaboration and thoughtful problem-solving.
            </article>
          </div>
          <div className="profile-pic">
            <img src={profileImg} alt="Franziska Luig" />
          </div>
        </div>
        <Skills />
      </div>
      <Footer />
    </>
  );
}

export default Home;
