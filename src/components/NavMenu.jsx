import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Github, Twitter, Linkedin } from "react-bootstrap-icons";

const NavMenu = () => {
  return (
    <Navbar className="menu" fixed='top' collapseOnSelect expand="lg" bg="#fff" variant="light">
      <Container>
        <Navbar.Brand href="#home">Ndikumana Isaie</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#technologies">Technologies</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/ndikumanaisaie"><Github color="royalblue" size={24} /></Nav.Link>
            <Nav.Link href="https://twitter.com/Ndikuma38670724"> <Twitter color="royalblue" size={24} /></Nav.Link>
            <Nav.Link href='https://www.linkedin.com/in/ndikumanaisaie'><Linkedin color="royalblue" size={24} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu