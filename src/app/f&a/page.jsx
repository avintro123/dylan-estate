"use client";

import React, { useState } from "react";

export default function FeaturesAmenitiesPage() {
  const [generalFeatures, setGeneralFeatures] = useState({
    nonVeg: "",
    petsAllowed: "",
    electricity: "",
    waterSupply: "",
    furnishing: "",
  });

  const [additionalFeatures, setAdditionalFeatures] = useState({
    airConditioning: false,
    ceilingFans: false,
    refrigerator: false,
    washingMachine: false,
    microwave: false,
    stove: false,
  });

  const [tiles, setTiles] = useState({
    normalWhiteTiles: false,
    marble: false,
    vitrifiedTiles: false,
  });

  const [safety, setSafety] = useState({
    securityPersonnel: false,
    cctv: false,
  });

  const [societyAmenities, setSocietyAmenities] = useState({
    lift: false,
    powerBackup: false,
    reservedParking: false,
    visitorParking: false,
    swimmingPool: false,
    gym: false,
    rainWaterHarvesting: false,
    clubhouse: false,
    wasteDisposal: false,
    internetWifi: false,
    kidsPlayArea: false,
    indoorGamesRoom: false,
    maintenanceStaff: false,
    conferenceRoom: false,
    firefightingEquipment: false,
    intercomFacility: false,
  });

  const handleChange = (setState, state, field) => (e) => {
    const { name, value, type, checked } = e.target;
    setState({
      ...state,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      generalFeatures,
      additionalFeatures,
      tiles,
      safety,
      societyAmenities,
    });
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="h-96 overflow-y-scroll p-4 border border-gray-300 rounded-lg">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-8">
          {/* General Features */}
          <div className="p-4 border border-gray-300 rounded-lg">
            <h2 className="text-lg font-bold mb-4">General Features</h2>
            <div className="mb-4">
              <label className="text-gray-700 font-medium mr-4">
                <span className="text-red-500">*</span>Non-Veg:
              </label>
              <label className="mr-4">
                <br />
                <input
                  type="radio"
                  name="nonVeg"
                  value="Allowed"
                  checked={generalFeatures.nonVeg === "Allowed"}
                  onChange={handleChange(setGeneralFeatures, generalFeatures)}
                  className="mt-6"
                />
                Allowed
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  name="nonVeg"
                  value="Not Allowed"
                  checked={generalFeatures.nonVeg === "Not Allowed"}
                  onChange={handleChange(setGeneralFeatures, generalFeatures)}
                />
                Not Allowed
              </label>
            </div>
            <div className="mb-4">
              <label className="text-gray-700 font-medium mr-4">
                <span className="text-red-500">*</span>Pets Allowed:
              </label>
              <br />
              <label className="mr-4">
                <input
                  type="radio"
                  name="petsAllowed"
                  value="Yes"
                  checked={generalFeatures.petsAllowed === "Yes"}
                  onChange={handleChange(setGeneralFeatures, generalFeatures)}
                  className="mt-6"
                />
                Yes
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  name="petsAllowed"
                  value="No"
                  checked={generalFeatures.petsAllowed === "No"}
                  onChange={handleChange(setGeneralFeatures, generalFeatures)}
                />
                No
              </label>
            </div>
            <div className="mb-4">
              <label className="text-gray-700 font-medium mr-4">
                <span className="text-red-500">*</span>Electricity:
              </label>
              <br />
              <label className="mr-4">
                <input
                  type="radio"
                  name="electricity"
                  value="Metered"
                  checked={generalFeatures.electricity === "Metered"}
                  onChange={handleChange(setGeneralFeatures, generalFeatures)}
                  className="mt-6"
                />
                Metered
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  name="electricity"
                  value="Prepaid"
                  checked={generalFeatures.electricity === "Prepaid"}
                  onChange={handleChange(setGeneralFeatures, generalFeatures)}
                />
                Prepaid
              </label>
              <label>
                <input
                  type="radio"
                  name="electricity"
                  value="None"
                  checked={generalFeatures.electricity === "None"}
                  onChange={handleChange(setGeneralFeatures, generalFeatures)}
                />
                None
              </label>
            </div>
            <div className="mb-4">
              <label className="text-gray-700 font-medium mr-4">
                <span className="text-red-500">*</span>Water Supply:
              </label>
              <br />
              <label className="mr-4">
                <input
                  type="radio"
                  name="waterSupply"
                  value="Municipal"
                  checked={generalFeatures.waterSupply === "Municipal"}
                  onChange={handleChange(setGeneralFeatures, generalFeatures)}
                  className="mt-6"
                />
                Municipal
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  name="waterSupply"
                  value="Borewell"
                  checked={generalFeatures.waterSupply === "Borewell"}
                  onChange={handleChange(setGeneralFeatures, generalFeatures)}
                />
                Borewell
              </label>
              <label>
                <input
                  type="radio"
                  name="waterSupply"
                  value="Both"
                  checked={generalFeatures.waterSupply === "Both"}
                  onChange={handleChange(setGeneralFeatures, generalFeatures)}
                />
                Both
              </label>
            </div>
            <div className="mb-4">
              <label className="text-gray-700 font-medium mr-4">
                <span className="text-red-500">*</span>Furnishing
              </label>
              <br />
              <label className="mr-4">
                <input
                  type="radio"
                  name="furnishing"
                  value="Fully Furnished"
                  checked={generalFeatures.furnishing === "Fully Furnished"}
                  onChange={handleChange(setGeneralFeatures, generalFeatures)}
                  className="mt-6"
                />
                Fully Furnished
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  name="furnishing"
                  value="Semi Furnished"
                  checked={generalFeatures.furnishing === "Semi Furnished"}
                  onChange={handleChange(setGeneralFeatures, generalFeatures)}
                />
                Semi Furnished
              </label>
              <label>
                <input
                  type="radio"
                  name="furnishing"
                  value="Unfurnished"
                  checked={generalFeatures.furnishing === "Unfurnished"}
                  onChange={handleChange(setGeneralFeatures, generalFeatures)}
                />
                Unfurnished
              </label>
            </div>
          </div>

          {/* Additional Features */}
          <div className="p-4 border border-gray-300 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Additional Features</h2>
            <div className="mb-4">
              <label className="text-gray-700 font-medium mr-4">
                <input
                  type="checkbox"
                  name="airConditioning"
                  checked={additionalFeatures.airConditioning}
                  onChange={handleChange(
                    setAdditionalFeatures,
                    additionalFeatures
                  )}
                />
                Air Conditioning
              </label>
            </div>
            <div className="mb-4">
              <label className="text-gray-700 font-medium mr-4">
                <input
                  type="checkbox"
                  name="ceilingFans"
                  checked={additionalFeatures.ceilingFans}
                  onChange={handleChange(
                    setAdditionalFeatures,
                    additionalFeatures
                  )}
                />
                Ceiling Fans
              </label>
            </div>
            <div className="mb-4">
              <label className="text-gray-700 font-medium mr-4">
                <input
                  type="checkbox"
                  name="refrigerator"
                  checked={additionalFeatures.refrigerator}
                  onChange={handleChange(
                    setAdditionalFeatures,
                    additionalFeatures
                  )}
                />
                Refrigerator
              </label>
            </div>
            <div className="mb-4">
              <label className="text-gray-700 font-medium mr-4">
                <input
                  type="checkbox"
                  name="washingMachine"
                  checked={additionalFeatures.washingMachine}
                  onChange={handleChange(
                    setAdditionalFeatures,
                    additionalFeatures
                  )}
                />
                Washing Machine
              </label>
            </div>
            <div className="mb-4">
              <label className="text-gray-700 font-medium mr-4">
                <input
                  type="checkbox"
                  name="microwave"
                  checked={additionalFeatures.microwave}
                  onChange={handleChange(
                    setAdditionalFeatures,
                    additionalFeatures
                  )}
                />
                Microwave
              </label>
            </div>
            <div className="mb-4">
              <label className="text-gray-700 font-medium mr-4">
                <input
                  type="checkbox"
                  name="stove"
                  checked={additionalFeatures.stove}
                  onChange={handleChange(
                    setAdditionalFeatures,
                    additionalFeatures
                  )}
                />
                Stove
              </label>
            </div>
          </div>

          {/* Tiles */}
          <div className="p-4 border border-gray-300 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Tiles</h2>
            <div className="mb-4">
              <label className="text-gray-700 font-medium mr-4">
                <input
                  type="checkbox"
                  name="normalWhiteTiles"
                  checked={tiles.normalWhiteTiles}
                  onChange={handleChange(setTiles, tiles)}
                />
                Normal White Tiles
              </label>
            </div>
            <div className="mb-4">
              <label className="text-gray-700 font-medium mr-4">
                <input
                  type="checkbox"
                  name="marble"
                  checked={tiles.marble}
                  onChange={handleChange(setTiles, tiles)}
                />
                Marble
              </label>
            </div>
            <div className="mb-4">
              <label className="text-gray-700 font-medium mr-4">
                <input
                  type="checkbox"
                  name="vitrifiedTiles"
                  checked={tiles.vitrifiedTiles}
                  onChange={handleChange(setTiles, tiles)}
                />
                Vitrified Tiles
              </label>
            </div>
          </div>

          {/* Safety */}
          <div className="p-4 border border-gray-300 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Safety</h2>
            <div className="mb-4">
              <label className="text-gray-700 font-medium mr-4">
                <input
                  type="checkbox"
                  name="securityPersonnel"
                  checked={safety.securityPersonnel}
                  onChange={handleChange(setSafety, safety)}
                />
                Security by Personnel
              </label>
            </div>
            <div className="mb-4">
              <label className="text-gray-700 font-medium mr-4">
                <input
                  type="checkbox"
                  name="cctv"
                  checked={safety.cctv}
                  onChange={handleChange(setSafety, safety)}
                />
                Security by Systems - CCTV
              </label>
            </div>
          </div>

          {/* Society Amenities */}
          <div className="p-4 border border-gray-300 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Society Amenities</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(societyAmenities).map((amenity) => (
                <div key={amenity} className="mb-4">
                  <label className="text-gray-700 font-medium mr-4">
                    <input
                      type="checkbox"
                      name={amenity}
                      checked={societyAmenities[amenity]}
                      onChange={handleChange(
                        setSocietyAmenities,
                        societyAmenities
                      )}
                    />
                    {amenity.split(/(?=[A-Z])/).join(" ")}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
