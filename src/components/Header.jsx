import React from "react";
import { Container } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <Container id="main-content" fluid>
        <video autoPlay loop muted src="./video/video.mp4" />
        <div className="wrapperr">
          <img
            src="https://occ-0-2638-778.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABXX0rdhMJRM-N9GF5SnW40j7TuFGaZyiLwV7CNA895GE1eocr1pr0pvDU_txhRBtH1Lye1SBr90a9v2sdsKIA6QxkvVYpTFUYQFWSV6BWfhzI89g-6QlFuAXLdL7K9R7qT84S7FMiwLNnbIsvOl15fj_cve72wNTOvd0q4IyGELgcg.webp?r=b07"
            alt="header-img"
          />
          <h4 className="h4">Watch Season 1 Now</h4>
          <p className="p">
            Some seek power.Others seek answers
            <br />
            .As a dark cloud casts a pall
            <br />
            over the continent,what's left to salvege?
          </p>
        </div>
      </Container>
    );
  }
}

export default Header;
