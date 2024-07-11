// components/Map.jsx
import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = ({ center, zoom }) => {
  const mapRef = useRef();
  const markerRef = useRef();

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // Load API key securely
      libraries: ["places"], // Load additional libraries if needed
    });

    loader.load().then(() => {
      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
      });
      markerRef.current = new window.google.maps.Marker({
        position: center,
        map,
      });
    });
  }, [center, zoom]);

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setPosition(center);
      mapRef.current.setCenter(center);
    }
  }, [center]);

  return <div ref={mapRef} style={{ height: "400px", width: "100%" }} />;
};

export default Map;
