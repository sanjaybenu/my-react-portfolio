import React, { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Page from "../src/components/Page";
import Navigation from "../src/components/Navigation";
import "./App.css";
const App = () => {
  // setting state for pages array
  const [pages] = useState([
    { name: "Home" },
    { name: "About" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ]);
  //setting currentPage intial value as Home ie page[0]
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Navigation
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Header>
      <section id="app">
        <Page currentPage={currentPage} />
      </section>

      <Footer />
    </div>
  );
};

export default App;
