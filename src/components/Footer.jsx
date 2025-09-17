import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/franziska-luig/");
  };

  const handleGit = () => {
    window.open("https://github.com/zuzuc");
  };

  return (
    <footer className="footer">
      <div className="icons-container">
        <div className="social-icon">
          <FaLinkedinIn onClick={handleLinkedIn} aria-label="LinkedIn" />
        </div>
        <div className="social-icon">
          <FaGithub onClick={handleGit} aria-label="GitHub" />
        </div>
      </div>
      <div className="copyright">© Franziska Luig 2025</div>
    </footer>
  );
}

export default Footer;
