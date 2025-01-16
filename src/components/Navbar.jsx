import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaAt } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLinkedIn = (e) => {
    let path = window.open("https://www.linkedin.com/in/franziska-luig/");
    navigate.push(path);
  };

  const handleGit = (e) => {
    let path = window.open("https://github.com/zuzuc");
    navigate.push(path);
  };

  const handleMail = (e) => {
    let path = window.open("mailto:franziska.luig@posteo.de");
    navigate.push(path);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">FL</Link>
      </div>
      {/* Menu Items */}
      <ul className="navbar-menu">
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>

      {/* Button Group */}
      <div className="navbar-buttons">
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
