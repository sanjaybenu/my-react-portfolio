import React from "react";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import "./style.css";

const TechSkills = [
  "JavaScript",
  "React",
  "Progressive Web Apps",
  "Mern Stack",
  "NoSQL",
  "SQL",
  "jQuery",
  "Bootstrap",
  "CSS",
  "HTML",
];
const SoftSkills = [
  "Strong Communication",
  "Problem Solving",
  "Time Management",
  "Operations Management",
  "People Management",
  "Technical Writing",
  "Team Building",
];

const Resume = () => {
  return (
    <div className="container text-center center">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Technical Skills</Accordion.Header>
          <Accordion.Body>
            <ListGroup className="list">
              {TechSkills.map((TechSkill) => (
                <ListGroup.Item className="list-item">
                  {TechSkill}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Soft Skills</Accordion.Header>
          <Accordion.Body>
            <ListGroup className="list">
              {SoftSkills.map((SoftSkill) => (
                <ListGroup.Item className="list-item">
                  {SoftSkill}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div id="button">
        <a href={process.env.PUBLIC_URL+"/Resume.pdf"} target="_blank" rel="noreferrer">
          <button className="btn btn-primary">Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Resume;