import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div id="main-content" className="container-fluid">
        <video autoPlay loop muted src="./video/video.mp4" />
        <div className="wrapperr">
          <img src="https://occ-0-2638-778.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABXX0rdhMJRM-N9GF5SnW40j7TuFGaZyiLwV7CNA895GE1eocr1pr0pvDU_txhRBtH1Lye1SBr90a9v2sdsKIA6QxkvVYpTFUYQFWSV6BWfhzI89g-6QlFuAXLdL7K9R7qT84S7FMiwLNnbIsvOl15fj_cve72wNTOvd0q4IyGELgcg.webp?r=b07" />
          <h4 className="h4">Watch Season 1 Now</h4>
          <p className="p">
            Some seek power.Others seek answers
            <br />
            .As a dark cloud casts a pall
            <br />
            over the continent,what's left to salvege?
          </p>
        </div>
        <div id="body" className="conatiner">
          <h2 id="active">Popular on Netflix</h2>
          <div id="splide" className="splide">
            <div className="splide__track">
              <ul id="splide-list-1" className="splide__list" />
            </div>
          </div>
          <h2 id="active">Tranding Now</h2>
          <div id="splide-2" className="splide">
            <div className="splide__track">
              <ul id="splide-list-2" className="splide__list" />
            </div>
          </div>
          <h2 id="active">TV Shows</h2>
          <div id="splide-3" className="splide">
            <div className="splide__track">
              <ul id="splide-list-3" className="splide__list" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
