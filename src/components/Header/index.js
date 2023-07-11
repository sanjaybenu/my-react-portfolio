import React from "react";
import "./style.css";

const img = require("../../images/sanjay.jpeg");

const Header = (props) => {
  return (
    <header id="header">
      <img src={img} alt="portfolio-img" />
      <h1>My Portfolio</h1>
      {props.children}
    </header>
  );
};

export default Header;