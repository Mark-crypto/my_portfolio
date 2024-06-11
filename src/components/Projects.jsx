import React from "react";
import ProfileCard from "./Card";
import ProfileCard1 from "./Card1";
import ProfileCard2 from "./Card2";

const Projects = () => {
  return (
    <div className="projects">
      <h4 className="title">Projects</h4>
      <div className="projects-card">
        <a href="https://image-search-on-unsplash.netlify.app/">
          <ProfileCard />
        </a>
        <a href="https://backroads-sec-app.netlify.app/">
          <ProfileCard1 />
        </a>
        <a href="https://one.abongo.co.ke/">
          <ProfileCard2 />
        </a>
      </div>
      <div className="projects-btn">
        <a href="https://github.com/Mark-crypto" target="_blank">
          <button>Visit my GitHub</button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
