import React from "react";
import { useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import "./style.css";

const Navigation = (props) => {
  const { pages = [], currentPage, setCurrentPage } = props;

  useEffect(() => {
    document.title = currentPage.name;
  }, [currentPage]);

  return (
    <Navbar bg="dark" expand="lg" variant="dark" id="nav">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {pages.map((Page) => (
              <Nav.Link
                key={Page.name}
                className={currentPage.name === Page.name ? "active" : ""}
                onClick={() => setCurrentPage(Page)}
              >
                {Page.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
