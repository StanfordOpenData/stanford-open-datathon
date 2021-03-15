import React from 'react';
import Button from 'react-bootstrap/Button'
import { Spon } from './content.json'

const logos = {
  "CIF": require("../Images/Sponsors/CIF.png"),
  "SEA": require("../Images/Sponsors/SEA.jpeg"),
  "SIEPR": require("../Images/Sponsors/SIEPR.png")
}

function Sponsors() {
  const Sponsor = ({name, link}) => {
    return (
      <a href={link}>
        <img src={logos[name]} alt={logos[name] + "logo"} className="sponsor"/>
      </a>
    );
  };
  return (
    <div id="sponsors">
      <h2 class="section-heading">Sponsors Coming Soon!</h2>
      <Button  variant="outline-primary shadow-none"><a href="mailto:stanfordopendataproject@gmail.com?Subject=Sponsorship%20Interest">Become A Sponsor!</a></Button>
      {/*<div>
        {Spon.map((item) => (
          <Sponsor {...item}/>
        ))}
      </div>
      {/*<Button href="mailto:stanfordopendataproject@gmail.com?Subject=Sponsorship%20Interest" variant="outline-primary shadow-none">Become A Sponsor!</Button>*/}
    </div>
  )
}

export default Sponsors;