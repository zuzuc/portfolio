import React from "react";

const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="header__logo-box">
                    <img 
                        src="img/logo.png"
                        alt="Logo" 
                        className="header__logo"
                    ></img>
                </div>
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Hi, I am Franziska</span>
                        <span className="heading-primary--sub">Full-Stack Web & App Developer & Project Manager</span>
                    </h1>
        
                </div>
            </div>
        </header>
    );
};

export default Header;
