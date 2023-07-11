import React from "react";
import Projects from "./Projects";
import RenderProject from "./RenderProject";
import './style.css'

const Portfolio = () => {
  return (
    
    // <div className ="portfolio">
    <div className ="container my-5">
      {/* <div className="projects"> */}
      <div className="row">
        {Projects.map((project, index) => (
          <RenderProject project={project} key={index + 1} />
        ))}
      </div>
    </div>
    
  );
};

export default Portfolio;