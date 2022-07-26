import React, { useEffect, useRef, useState } from "react";

import { mapbox_key } from "../constants/mapbox-key";
import mapboxgl from "!mapbox-gl"; /* eslint import/no-webpack-loader-syntax: off */

mapboxgl.accessToken = mapbox_key;

function populateMarkers(map, geojson ,isClickable) {
  console.log(geojson);

  for (const marker of geojson.features) {
    // Create a DOM element for each marker.
    const el = document.createElement("div");
    const width = marker.properties.iconSize[0];
    const height = marker.properties.iconSize[1];
    el.className = "marker";

    el.style.backgroundImage = `url(/user.png)`;
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
    el.style.backgroundSize = "100%";

    if (marker.onClick && isClickable) {
      el.addEventListener("click", marker.onClick);
    }

    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map.current);
  }
}

function MapContent(props) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  // const { geojson, isClickable } = props;

  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          message: "fafafa",
          type: "serious_concern",
          iconSize: [40, 40],
        },
        geometry: {
          type: "Point",
          coordinates: [!props.longitude ? 125.352398  : props.longitude, 
        !props.latitude ? 6.757509 : props.latitude],
        },
      },
    ],
  }

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [!props.longitude ? 125.352398  : props.longitude, 
        !props.latitude ? 6.757509 : props.latitude],
      zoom: 14,
    });

    map.current.on('click', function(e) {
      var coordinates = e.lngLat;
      props.setMyLat(coordinates.lat);
      props.setMyLng(coordinates.lng);

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML('you clicked here: <br/>' + coordinates)
        .addTo(map.current);
    });

    if(geojson){
      console.log("naay geojson");
      populateMarkers(map, geojson);
    }

  }, []);

  return (
    <div className="row">
     <div className="col-md-12">
     <div ref={mapContainer} className="map-container" />
     </div>
    </div>
  );
}

export default MapContent;
