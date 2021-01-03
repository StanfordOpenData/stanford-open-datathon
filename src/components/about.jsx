import React from "react";
import { about } from "./content.json";

function About() {
  console.log("this is about: ", about);
  return (
    <div id="about">
      <div id="container">
        <p class="section-heading about-header">About</p>
        <p class="about-text">{about[0].content}</p>
        <button type="button" class="apply-now-btn btn btn-primary">
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default About;
