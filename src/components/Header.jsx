import React from "react";
import TypewriterCycle from "./TypewriterCycle";
import textData from "./../data/textData";

function Header() {
  const typeWriterItems = [
    textData.typeWriter1,
    textData.typeWriter2,
    textData.typeWriter3,
    textData.typeWriter4,
  ];

  return (
    <header>
      <div className="header">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main1">Franziska</span>
            <span className="heading-primary--main2">Luig</span>
          </h1>
          <div className="heading-primary--sub">
            <TypewriterCycle items={typeWriterItems} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
