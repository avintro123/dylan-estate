"use client";

import React, { useState } from "react";
import Map from "@/components/Map";

const center = {
  lat: 19.076,
  lng: 72.8777,
};

export default function LocationPage() {
  const [buildingName, setBuildingName] = useState("");
  const [locality, setLocality] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("Mumbai, Maharashtra");
  const [mapCenter, setMapCenter] = useState(center);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", buildingName, locality, landmark, city);
  };

  const handleLocationChange = (event) => {
    const { name, value } = event.target;
    if (name === "locality" || name === "city") {
      if (name === "locality") setLocality(value);
      if (name === "city") setCity(value);

      // Use Geocoding API to get coordinates
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.results && data.results.length > 0) {
            const location = data.results[0].geometry.location;
            setMapCenter(location);
          } else {
            console.error("Geocoding API error: ", data);
          }
        })
        .catch((error) => {
          console.error("Geocoding API fetch error: ", error);
        });
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="buildingName" className="text-gray-700 font-medium">
              Building/ Society Name:
            </label>
            <input
              type="text"
              id="buildingName"
              name="buildingName"
              value={buildingName}
              onChange={(e) => setBuildingName(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-gray-600 focus:outline-none focus:ring focus:ring-blue-300 w-full"
              placeholder="Enter Apartment Name"
            />
          </div>
          <div>
            <label htmlFor="locality" className="text-gray-700 font-medium">
              Locality/ Area:
            </label>
            <input
              type="text"
              id="locality"
              name="locality"
              value={locality}
              onChange={handleLocationChange}
              className="border border-gray-300 rounded-md px-3 py-2 text-gray-600 focus:outline-none focus:ring focus:ring-blue-300 w-full"
              placeholder="Eg: sheetal nagar"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="landmark" className="text-gray-700 font-medium">
              Landmark/ Street Name:
            </label>
            <input
              type="text"
              id="landmark"
              name="landmark"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-gray-600 focus:outline-none focus:ring focus:ring-blue-300 w-full"
              placeholder="Prominent Landmark"
            />
          </div>
          <div>
            <label htmlFor="city" className="text-gray-700 font-medium">
              City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={handleLocationChange}
              className="border border-gray-300 rounded-md px-3 py-2 text-gray-600 focus:outline-none focus:ring focus:ring-blue-300 w-full"
              placeholder="Mumbai, Maharashtra"
            />
          </div>
        </div>

        <div>
          <label htmlFor="map" className="text-gray-700 font-medium">
            Mark Locality on Map:
          </label>
          <Map center={mapCenter} zoom={14} />
        </div>
      </form>
    </div>
  );
}
