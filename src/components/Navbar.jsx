import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaAt } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <span className="logo-f">F</span>
          <span className="logo-l">L</span>
        </Link>
      </div>

      {/* Menu Items */}
      <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Profile
          </Link>
        </li>
      </ul>

      {/* Button Group */}
      <div className={`navbar-buttons ${isMenuOpen ? "active" : ""}`}>
        <div className="btn">
          <FaLinkedinIn onClick={handleLinkedIn} aria-label="LinkedIn"/>
        </div>
        <div className="btn">
          <FaGithub onClick={handleGit} aria-label="GitHub"/>
        </div>
        <div className="btn">
          <FaAt onClick={handleMail} aria-label="Email"/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
