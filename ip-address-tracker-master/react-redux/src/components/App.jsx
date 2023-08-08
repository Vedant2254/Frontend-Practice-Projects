import React from "react";

import Heading from "./Heading";
import Search from "./Search";
import Details from "./Details";
import Map from "./Map";

function App() {
  return (
    <>
      <div className="ip-address-tracker">
        <div className="pattern-bg-container">
          <img src="./images/pattern-bg.png" alt="pattern" className="pattern-bg" />
          <div className="ui-container">
            <Heading />
            <Search />
            <Details />
          </div>
        </div>
        <Map />
      </div>

      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/Vedant2254">Vedant Patil</a>.
      </div>
    </>
  );
}

export default App;
