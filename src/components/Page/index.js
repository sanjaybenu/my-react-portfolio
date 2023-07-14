import React from "react";

import Home from "../Home";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact/index";
import Resume from "../Resume/index";

function Content(props) {
  return <div>{props.children}</div>;
}

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <Home />;
    }
  };

  return (
    <section>
      <h2>{currentPage.name}</h2>
      <Content>{renderPage()}</Content>
    </section>
  );
}

export default Page;
