import React from "react";
import { tracks_intro } from "./content.json";
import { tracks } from "./content.json";
import Card from "react-bootstrap/Card";
import photo from "../Images/no-image.png";
function Tracks() {
  const TrackCard = (title, image, description) => {
    console.log("this is title", title);
    return (
      <Card>
        {/* <div class="image-placeholder"></div> */}
        <img src={photo} alt="..." class="track-image img-thumbnail" />
        <p class="tracks-title">{title.name}</p>
        <p class="tracks-description">{title.description}</p>
      </Card>
    );
  };
  console.log("this is tracks tracks: ", { tracks });
  return (
    <div id="tracks">
      <div id="container">
        <p class="tracks-header section-heading ">Tracks</p>
        <p class="tracks-text">{tracks_intro}</p>
        <div id="tracks-card-container">
          {tracks.map((item, i) => (
            <TrackCard {...item} title={String(i)} key={String(i)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tracks;
