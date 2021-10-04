import React from "react";
import { useHistory } from 'react-router-dom';
import { FaLinkedinIn, FaGithub, FaAt } from "react-icons/fa";

function Header(){
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


// const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="header__logo-box">
                    <img 
                        src="img/logofranzi.png"
                        alt="Logo" 
                        className="header__logo"
                    ></img>
                </div>
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Franziska Luig</span>
                        <span className="heading-primary--sub">Web Developer & Project Manager</span>
                    </h1>
                    <div className="icons-container">
                        <div className="icon"><FaLinkedinIn onClick={handleLinkedIn} /></div>  
                        <div className="icon"><FaGithub onClick={handleGit} /></div>
                        <div className="icon"><FaAt onClick={handleMail} /></div>
                    </div>
                </div>
            </div>
        </header>
       
    );
};

export default Header;
