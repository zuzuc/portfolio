import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaAt } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">FL</Link>
      </div>

      {/* Hamburger Menu */}
      <button className="navbar-hamburger" onClick={toggleMenu}>
        ☰
      </button>

      {/* Menu Items */}
      <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </Link>
        </li>
      </ul>

      {/* Button Group */}
      <div className={`navbar-buttons ${isMenuOpen ? "open" : ""}`}>
        <div className="btn">
          <FaLinkedinIn onClick={handleLinkedIn} />
        </div>
        <div className="btn">
          <FaGithub onClick={handleGit} />
        </div>
        <div className="btn">
          <FaAt onClick={handleMail} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
