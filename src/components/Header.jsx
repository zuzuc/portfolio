import React from "react";
import TypeWriterCycle from "./TypeWriterCycle";
import textData from "./../data/textData";
import { FaLinkedinIn, FaGithub, FaAt } from "react-icons/fa";

function Header() {
  const typeWriterItems = [
    textData.typeWriter1,
    textData.typeWriter2,
    textData.typeWriter3,
    textData.typeWriter4,
  ];

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
    <header>
      <div className="header">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main1">Franziska</span>
            <span className="heading-primary--main2">Luig</span>
          </h1>
          <div className="heading-primary--sub">
            <TypeWriterCycle items={typeWriterItems} />
          </div>
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
        </div>
      </div>
    </header>
  );
}

export default Header;
