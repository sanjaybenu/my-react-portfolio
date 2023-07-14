import React from "react";
import { Fade } from "react-awesome-reveal";
import Typist from "react-typist-component";
import "./style.css";

const Home = () => {
  const languages = [
    "JavaScript ",
    "React ",
    "HTML ",
    "CSS ",
    "NodeJs ",
    "SQL ",
    "NoSQL ",
    "Progressive Web Apps ",
    "MERN Stack ",
  ];
  return (
    <div id="Home">
      <Fade duration={5000} cascade={true} direction="up">
        <h1>Hello There</h1>
        <p>My Name is Sanjay Chopra</p>
        <p>
          A <span>Full</span> Stack Web Developer
        </p>
        <p>an amatuer photographer and drone pilot</p>
        <p>I am proficient in </p>
      </Fade>
      <p>
        <span>
          <Typist typingDelay={300} loop={true} startDelay={10000}>
            {languages.map((language) => (
              <React.Fragment key={language}>
                <span>{language}</span>

                <Typist.Backspace count={language.length} pause={true} />
              </React.Fragment>
            ))}
            <h1>Welcome to my World </h1>
            <Typist.Backspace count={22} pause={true} />
          </Typist>
        </span>
      </p>
    </div>
  );
};

export default Home;
