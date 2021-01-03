import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Logo from '../Images/Logo.png';

function NavBar() {
  return (
    <div id='nav'>
      <div id="container">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand href="/">
            <img src={Logo} alt="Logo" id="Logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="nav-items"/>
          <Navbar.Collapse id="nav-items">
            <Nav>
              <AnchorLink href="#home" class="nav-link">Home</AnchorLink>
              <AnchorLink href="#about" class="nav-link">About</AnchorLink>
              <AnchorLink href="#tracks" class="nav-link">Tracks</AnchorLink>
              <AnchorLink href="#faq" class="nav-link">FAQ</AnchorLink>
              <AnchorLink href="#sponsors" class="nav-link">Sponsors</AnchorLink>
              <Button variant="outline-primary shadow-none">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSekpg0-j0vEGCWg9ZM534NdDofMMaJggohJXFv6b1MrGPUYpw/viewform" 
                target="_blank" rel="noopener noreferrer">Apply Now!</a>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default NavBar;