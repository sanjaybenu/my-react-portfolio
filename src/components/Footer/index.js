import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="icons">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="icon" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a href="https://www.github.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
      </div>
      <h5>
        Made with <FontAwesomeIcon icon={faReact} /> by Sanjay Chopra
      </h5>
      <p>© Sanjay Chopra</p>
    </footer>
  );
}

export default Footer;
