import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { useSelector } from "react-redux";
import "mapbox-gl/dist/mapbox-gl.css";

function Map() {
  // Mapbox token
  const MapBoxToken = process.env.REACT_APP_MAPBOX_TOKEN;
  const geoLocation = useSelector((state) => state.geoLocation);

  const mapRef = React.useRef();

  const [viewState, setViewState] = useState({
    center: [0, 0],
    zoom: 0,
    width: "100%",
    height: "100%",
  });

  useEffect(() => {
    if (!mapRef.current) return;
    try {
      const { lng, lat } = geoLocation.location;
      mapRef.current.flyTo({
        center: [lng, lat],
        zoom: 10,
      });
    } catch (err) {
      mapRef.current.flyTo({
        center: [0, 0],
        zoom: 0.3,
        duration: 2000,
      });
    }
  }, [geoLocation]);

  return (
    <div className="map-container">
      <ReactMapGL
        {...viewState}
        ref={mapRef}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onMove={(evt) => setViewState(evt.viewState)}
        attributionControl={false}
        mapboxAccessToken={MapBoxToken}
      >
        {geoLocation.ip !== "-" && (
          <Marker longitude={geoLocation.location.lng} latitude={geoLocation.location.lat}>
            <img src="/images/icon-location.svg" alt="marker" className="marker" />
          </Marker>
        )}
      </ReactMapGL>
    </div>
  );
}

export default Map;
