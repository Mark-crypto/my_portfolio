import React from "react";
import aboutImg from "../assets/purpleWeb.svg";

const About = () => {
  return (
    <div className="about">
      <div className="textbox">
        <p>
          <span style={{ color: "#009900" }}>mark@terminal: ~ $</span> cat
          about_yourself.txt
        </p>
        <p className="textbox-description">
          Hi stranger, I am Mark. I am a Fullstack Developer who enjoys solving
          problems and coming up with creative solutions. I am skilled in web
          development, programming, business intelligence and most recently
          cloud computing practitioning (AWS) . I believe IT systems make the
          world an easier place to be.
        </p>
      </div>
      <div className="aboutImg">
        <img src={aboutImg} alt="website background" />
      </div>
    </div>
  );
};

export default About;
