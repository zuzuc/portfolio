
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaLinkedinIn, FaGithub, FaAt } from "react-icons/fa";
// import { Card, CardDeck } from 'react-bootstrap';


function About(){
    const history = useHistory();
    const handleLinkedIn = (e) => {
        let path = window.open('https://www.linkedin.com/in/franziska-luig/')
        history.push(path);
    };

    const handleGit = (e) => {
        let path = window.open('https://github.com/zuzuc');
        history.push(path);
    };

    const handleMail = (e) => {
        let path = window.open('mailto:franziska.luig@posteo.de');
        history.push(path);
    };

    return (
        <div className="icons-container">
            <FaLinkedinIn onClick={handleLinkedIn} />
            <FaGithub onClick={handleGit} />
            <FaAt onClick={handleMail} />

        </div>
    )
}


 {/* <div className="icons-container">
              <a href="https://www.linkedin.com/in/hsueh-yen-neo/">
                <div className="icon white-bg">
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href="https://github.com/zuzuc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon white-bg">
                  <FaGithub />
                </div>
              </a>
              <a
                href="mailto:neo.hsuehyen@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon white-bg">
                  <FaAt />
                </div>
              </a>
              <a
                href="https://twitter.com/thehangrykat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon white-bg">
                  <FaTwitter />
                </div>
              </a>
            </div> */}

export default About;