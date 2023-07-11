import React from "react";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import "./style.css";

const Resume = () => {
  return (
    <div className="container text-center center">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Technical Skills</Accordion.Header>
          <Accordion.Body>
            <ListGroup className="list">
              <ListGroup.Item className="list-item">JavaScript</ListGroup.Item>
              <ListGroup.Item className="list-item">React</ListGroup.Item>
              <ListGroup.Item className="list-item">
                Progressive Web Apps
              </ListGroup.Item>
              <ListGroup.Item className="list-item">Mern Stack</ListGroup.Item>
              <ListGroup.Item className="list-item">NoSQL</ListGroup.Item>
              <ListGroup.Item className="list-item">SQL</ListGroup.Item>
              <ListGroup.Item className="list-item">Jquery</ListGroup.Item>
              <ListGroup.Item className="list-item">BootStrap</ListGroup.Item>
              <ListGroup.Item className="list-item">CSS</ListGroup.Item>
              <ListGroup.Item className="list-item">HTML</ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Soft Skills</Accordion.Header>
          <Accordion.Body>
            <ListGroup className="list">
              <ListGroup.Item className="list-item">
                Strong Communication
              </ListGroup.Item>
              <ListGroup.Item className="list-item">
                Problem Solving
              </ListGroup.Item>
              <ListGroup.Item className="list-item">
                Time Management
              </ListGroup.Item>
              <ListGroup.Item className="list-item">
                Operations Management
              </ListGroup.Item>
              <ListGroup.Item className="list-item">
                People Management
              </ListGroup.Item>
              <ListGroup.Item className="list-item">
                Technical Writing
              </ListGroup.Item>
              <ListGroup.Item className="list-item">
                Team Building
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div id="button">
        <a href="./resume.pdf" download>
          <button className="btn btn-primary">Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Resume;