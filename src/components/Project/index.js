import React from "react";

const Project = ({ project }) => {
  const { title, desc, github, deployedapp, image } = project;

  return (
    <div key={title} className="col-lg-4 col-md-6 mb-2 project">
      <div className="card h-100">
        <img src={image} class="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>

          <a href={github} target="_blank" rel="noreferrer" class="btn">
            Github
          </a>
          <a
            href={deployedapp}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Deployed App
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;