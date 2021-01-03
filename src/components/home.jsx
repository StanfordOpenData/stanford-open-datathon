import React from 'react';
import Button from 'react-bootstrap/Button';
import Hero from '../Images/Hero.png';

function Home() {
  return (
    <div id="home">
      <div id="home-content">
        <h1 id="Title">Stanford Open Datathon 2021</h1>
        <h4>March 20-22, 2021 (Virtual) Hosted by Stanford Open Data Project</h4>
        <div>
          <Button variant="primary shadow-none">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSekpg0-j0vEGCWg9ZM534NdDofMMaJggohJXFv6b1MrGPUYpw/viewform" 
            target="_blank" rel="noopener noreferrer">Apply Now!</a>
          </Button>
          <Button variant="outline-primary shadow-none">Keep Me Updated</Button>
        </div>
      </div>
      <img id="Hero" src={Hero} alt="hero"/>
    </div>
  );
}

export default Home