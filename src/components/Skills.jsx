import React from "react";
import aws from "../assets/aws-2.svg";
import bootstrap from "../assets/bootstrap-5-1.svg";
import express from "../assets/express.png";
import github from "../assets/github-icon-2.svg";
import java from "../assets/java-4.svg";
import javascript from "../assets/logo-javascript.svg";
import nodejs from "../assets/nodejs-1.svg";
import react from "../assets/react-2.svg";

const Skills = () => {
  return (
    <div className="skills">
      <h4 className="title">My Skills</h4>
      <div className="skills1">
        <img src={javascript} alt="javascript" />
        <img src={react} alt="react" />
        <img src={github} alt="github" />
        <img src={nodejs} alt="nodejs" />
      </div>
      <div className="skills2">
        <img src={java} alt="java" />
        <img src={express} alt="express" />
        <img src={bootstrap} alt="bootstrap" />
        <img src={aws} alt="aws" />
      </div>
    </div>
  );
};

export default Skills;
