import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Github, Twitter, Linkedin, CodeSlash } from "react-bootstrap-icons";

const NavMenu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="#fff" variant="light">
      <Container fluid>
        <Navbar.Brand href="#home"><CodeSlash color="#444f5a" size={34} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse bg="#fff"  id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#technologies">Technologies</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Nav className="social-icon">
            <Nav.Link href="https://github.com/ndikumanaisaie" target='_blank' rel="noopener noreferrer"><Github className="social" size={24} /></Nav.Link>
            <Nav.Link href="https://twitter.com/Ndikuma38670724" target='_blank' rel="noopener noreferrer"> <Twitter className="social" size={24} /></Nav.Link>
            <Nav.Link href='https://www.linkedin.com/in/ndikumanaisaie' target='_blank' rel="noopener noreferrer"><Linkedin className="social" size={24} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu