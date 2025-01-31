import React from "react";
import { FaLinkedinIn, FaGithub, FaAt } from "react-icons/fa";

function Footer() {
  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/franziska-luig/");
  };

  const handleGit = () => {
    window.open("https://github.com/zuzuc");
  };

  const handleMail = () => {
    window.open("mailto:franziska.luig@posteo.de");
  };

  return (
    <footer className="footer">
      <div className="icons-container">
        <div className="icon">
          <FaLinkedinIn onClick={handleLinkedIn} aria-label="LinkedIn"/>
        </div>
        <div className="icon">
          <FaGithub onClick={handleGit} aria-label="GitHub"/>
        </div>
        <div className="icon">
          <FaAt onClick={handleMail} aria-label="Email"/>
        </div>
      </div>
      <div className="copyright">© Franziska Luig 2025</div>
    </footer>
  );
}

export default Footer;
