import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <div id='nav'>
      <div id="container">
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="/">
            Stanford Open Datathon
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="nav-items"/>
          <Navbar.Collapse id="nav-items">
            <Nav>
              <Nav.Link><AnchorLink href="#home">Home</AnchorLink></Nav.Link>
              <Nav.Link><AnchorLink href="#about">About</AnchorLink></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default NavBar;