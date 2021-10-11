import React from "react";
import TypewriterCycle from './TypewriterCycle';
import textData from './../data/textData';
import { useHistory } from 'react-router-dom';
import { FaLinkedinIn, FaGithub, FaAt } from "react-icons/fa";

function Header(){
    const history = useHistory();
    const typeWriterItems = [textData.typeWriter1, textData.typeWriter2, textData.typeWriter3, textData.typeWriter4];
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
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main1">Franziska</span>
                        <span className="heading-primary--main2">Luig</span>
                    </h1>
                    <div className="heading-primary--sub">
                      <TypewriterCycle items={typeWriterItems}/>                     
                    </div>
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
