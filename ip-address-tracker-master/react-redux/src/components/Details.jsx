import React from "react";
import { useSelector } from "react-redux";

import Detail from "./Detail";

function Details() {
  const geoLocation = useSelector((state) => state.geoLocation);
  const { location } = geoLocation;

  return (
    <div className="details-container">
      <div className="details">
        <Detail title="IP ADDRESS" content={geoLocation.ip} />
        <div className="separator"></div>
        <Detail
          title="LOCATION"
          content={`${location.city}, ${location.region}, ${location.country}, ${location.postalCode}`}
        />
        <div className="separator"></div>
        <Detail title="TIMEZONE" content={location.timezone} />
        <div className="separator"></div>
        <Detail title="ISP" content={geoLocation.isp} />
      </div>
    </div>
  );
}

export default Details;
