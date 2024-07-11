"use client";
import { useState } from "react";

function PropertyForm() {
  const [propertyFor, setPropertyFor] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [builtUpArea, setBuiltUpArea] = useState("");
  const [carpetArea, setCarpetArea] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(
      "Form submitted:",
      propertyFor,
      propertyType,
      builtUpArea,
      carpetArea
    );
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <div className="flex items-center">
          <label
            htmlFor="propertyFor"
            className="text-gray-700 font-medium mr-2"
          >
            Property For:
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              id="rent"
              name="propertyFor"
              value="Rent"
              checked={propertyFor === "Rent"}
              onChange={(e) => setPropertyFor(e.target.value)}
              className="mr-2"
            />
            <label htmlFor="rent" className="text-gray-600">
              Rent
            </label>
          </div>
          <div className="flex items-center ml-4">
            <input
              type="radio"
              id="sale"
              name="propertyFor"
              value="Sale"
              checked={propertyFor === "Sale"}
              onChange={(e) => setPropertyFor(e.target.value)}
              className="mr-2"
            />
            <label htmlFor="sale" className="text-gray-600">
              Sale
            </label>
          </div>
        </div>

        <div className="flex items-center">
          <label
            htmlFor="propertyType"
            className="text-gray-700 font-medium mr-2"
          >
            Property Type:
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              id="residential"
              name="propertyType"
              value="Residential"
              checked={propertyType === "Residential"}
              onChange={(e) => setPropertyType(e.target.value)}
              className="mr-2"
            />
            <label htmlFor="residential" className="text-gray-600">
              Residential
            </label>
          </div>
          <div className="flex items-center ml-4">
            <input
              type="radio"
              id="commercial"
              name="propertyType"
              value="Commercial"
              checked={propertyType === "Commercial"}
              onChange={(e) => setPropertyType(e.target.value)}
              className="mr-2"
            />
            <label htmlFor="commercial" className="text-gray-600">
              Commercial
            </label>
          </div>
          <div className="flex items-center ml-4">
            <input
              type="radio"
              id="landPlot"
              name="propertyType"
              value="Land / Plot"
              checked={propertyType === "Land / Plot"}
              onChange={(e) => setPropertyType(e.target.value)}
              className="mr-2"
            />
            <label htmlFor="landPlot" className="text-gray-600">
              Land / Plot
            </label>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="builtUpArea" className="text-gray-700 font-medium">
              Built up Area:
            </label>
            <div className="flex items-center">
              <input
                type="number"
                id="builtUpArea"
                name="builtUpArea"
                value={builtUpArea}
                onChange={(e) => setBuiltUpArea(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-gray-600 focus:outline-none focus:ring focus:ring-blue-300 w-full"
              />
              <span className="ml-2 text-gray-600">Sq. Ft.</span>
            </div>
          </div>
          <div>
            <label htmlFor="carpetArea" className="text-gray-700 font-medium">
              Carpet Area:
            </label>
            <div className="flex items-center">
              <input
                type="number"
                id="carpetArea"
                name="carpetArea"
                value={carpetArea}
                onChange={(e) => setCarpetArea(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-gray-600 focus:outline-none focus:ring focus:ring-blue-300 w-full"
              />
              <span className="ml-2 text-gray-600">Sq. Ft.</span>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default PropertyForm;
