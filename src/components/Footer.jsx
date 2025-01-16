import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedinIn, FaGithub, FaAt } from "react-icons/fa";

function Footer() {
    const navigate = useNavigate();
    const handleLinkedIn = (e) => {
        let path = window.open('https://www.linkedin.com/in/franziska-luig/')
        navigate.push(path);
    };

    const handleGit = (e) => {
        let path = window.open('https://github.com/zuzuc');
        navigate.push(path);
    };

    const handleMail = (e) => {
        let path = window.open('mailto:franziska.luig@posteo.de');
        navigate.push(path);
    };


    return (
        <footer className="footer">
          {/* <div className="section-container">
            <div className="headline-container">
              <div className="section-font"></div>
                <div className="subheading-font"> */}
                <div className="icons-container">
                        <div className="icon"><FaLinkedinIn onClick={handleLinkedIn} /></div>  
                        <div className="icon"><FaGithub onClick={handleGit} /></div>
                        <div className="icon"><FaAt onClick={handleMail} /></div>
                </div>
                <div className="copyright">© Franziska Luig 2021</div>

        </footer>
        //     </div>
        //   </div> 
        // </div>
    )
};

export default Footer;