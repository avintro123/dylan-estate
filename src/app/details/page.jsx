"use client";
import React, { useState } from "react";

export default function Page() {
  const [propertyFor, setPropertyFor] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [builtUpArea, setBuiltUpArea] = useState("");
  const [carpetArea, setCarpetArea] = useState("");
  const [propertyOnFloor, setPropertyOnFloor] = useState("");
  const [totalFloors, setTotalFloors] = useState("");
  const [propertyFacing, setPropertyFacing] = useState("");
  const [propertyAge, setPropertyAge] = useState("");
  const [bhkType, setBhkType] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [balcony, setBalcony] = useState("");
  const [tenantPreference, setTenantPreference] = useState("");
  const [availability, setAvailability] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", {
      propertyFor,
      propertyType,
      builtUpArea,
      carpetArea,
      propertyOnFloor,
      totalFloors,
      propertyFacing,
      propertyAge,
      bhkType,
      bathrooms,
      balcony,
      tenantPreference,
      availability,
      propertyDescription,
    });
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-md h-screen overflow-y-auto">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        {/* Property For */}
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

        {/* Property Type */}
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

        {/* Built up Area and Carpet Area */}
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

        {/* Property on Floor and Total Floors */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="propertyOnFloor"
              className="text-gray-700 font-medium"
            >
              Property on Floor:
            </label>
            <input
              type="text"
              id="propertyOnFloor"
              name="propertyOnFloor"
              value={propertyOnFloor}
              onChange={(e) => setPropertyOnFloor(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-gray-600 focus:outline-none focus:ring focus:ring-blue-300 w-full"
            />
          </div>
          <div>
            <label htmlFor="totalFloors" className="text-gray-700 font-medium">
              Total Floors:
            </label>
            <input
              type="text"
              id="totalFloors"
              name="totalFloors"
              value={totalFloors}
              onChange={(e) => setTotalFloors(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-gray-600 focus:outline-none focus:ring focus:ring-blue-300 w-full"
            />
          </div>
        </div>

        {/* Property Facing */}
        <div>
          <label htmlFor="propertyFacing" className="text-gray-700 font-medium">
            Property Facing:
          </label>
          <select
            id="propertyFacing"
            name="propertyFacing"
            value={propertyFacing}
            onChange={(e) => setPropertyFacing(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-gray-600 focus:outline-none focus:ring focus:ring-blue-300 w-full"
          >
            <option value="">Select</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="East">East</option>
            <option value="West">West</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Property Age */}
        <div>
          <label htmlFor="propertyAge" className="text-gray-700 font-medium">
            Property Age:
          </label>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                propertyAge === "Less than 1 Year" ? "bg-gray-200" : ""
              }`}
              onClick={() => setPropertyAge("Less than 1 Year")}
            >
              Less than 1 Year
            </button>
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                propertyAge === "1-3 Years" ? "bg-gray-200" : ""
              }`}
              onClick={() => setPropertyAge("1-3 Years")}
            >
              1-3 Years
            </button>
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                propertyAge === "3-5 Years" ? "bg-gray-200" : ""
              }`}
              onClick={() => setPropertyAge("3-5 Years")}
            >
              3-5 Years
            </button>
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                propertyAge === "5-10 Years" ? "bg-gray-200" : ""
              }`}
              onClick={() => setPropertyAge("5-10 Years")}
            >
              5-10 Years
            </button>
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                propertyAge === "More than 10 Years" ? "bg-gray-200" : ""
              }`}
              onClick={() => setPropertyAge("More than 10 Years")}
            >
              More than 10 Years
            </button>
          </div>
        </div>

        {/* BHK Type */}
        <div>
          <label htmlFor="bhkType" className="text-gray-700 font-medium">
            BHK Type:
          </label>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                bhkType === "1 BHK" ? "bg-gray-200" : ""
              }`}
              onClick={() => setBhkType("1 BHK")}
            >
              1 BHK
            </button>
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                bhkType === "2 BHK" ? "bg-gray-200" : ""
              }`}
              onClick={() => setBhkType("2 BHK")}
            >
              2 BHK
            </button>
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                bhkType === "3 BHK" ? "bg-gray-200" : ""
              }`}
              onClick={() => setBhkType("3 BHK")}
            >
              3 BHK
            </button>
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                bhkType === "4 BHK" ? "bg-gray-200" : ""
              }`}
              onClick={() => setBhkType("4 BHK")}
            >
              4 BHK
            </button>
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                bhkType === "5 BHK" ? "bg-gray-200" : ""
              }`}
              onClick={() => setBhkType("5 BHK")}
            >
              5 BHK
            </button>
          </div>
        </div>

        {/* Bathrooms */}
        <div>
          <label htmlFor="bathrooms" className="text-gray-700 font-medium">
            Bathrooms:
          </label>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                bathrooms === "1" ? "bg-gray-200" : ""
              }`}
              onClick={() => setBathrooms("1")}
            >
              1
            </button>
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                bathrooms === "2" ? "bg-gray-200" : ""
              }`}
              onClick={() => setBathrooms("2")}
            >
              2
            </button>
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                bathrooms === "3" ? "bg-gray-200" : ""
              }`}
              onClick={() => setBathrooms("3")}
            >
              3
            </button>
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                bathrooms === "4" ? "bg-gray-200" : ""
              }`}
              onClick={() => setBathrooms("4")}
            >
              4
            </button>
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                bathrooms === "5" ? "bg-gray-200" : ""
              }`}
              onClick={() => setBathrooms("5")}
            >
              5
            </button>
          </div>
        </div>

        {/* Balcony */}
        <div>
          <label htmlFor="balcony" className="text-gray-700 font-medium">
            Balcony:
          </label>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                balcony === "1" ? "bg-gray-200" : ""
              }`}
              onClick={() => setBalcony("1")}
            >
              1
            </button>
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                balcony === "2" ? "bg-gray-200" : ""
              }`}
              onClick={() => setBalcony("2")}
            >
              2
            </button>
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                balcony === "3" ? "bg-gray-200" : ""
              }`}
              onClick={() => setBalcony("3")}
            >
              3
            </button>
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                balcony === "4" ? "bg-gray-200" : ""
              }`}
              onClick={() => setBalcony("4")}
            >
              4
            </button>
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                balcony === "5" ? "bg-gray-200" : ""
              }`}
              onClick={() => setBalcony("5")}
            >
              5
            </button>
          </div>
        </div>

        {/* Tenant Preference */}
        <div>
          <label
            htmlFor="tenantPreference"
            className="text-gray-700 font-medium"
          >
            Tenant Preference:
          </label>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                tenantPreference === "Family" ? "bg-gray-200" : ""
              }`}
              onClick={() => setTenantPreference("Family")}
            >
              Family
            </button>
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                tenantPreference === "Bachelors" ? "bg-gray-200" : ""
              }`}
              onClick={() => setTenantPreference("Bachelors")}
            >
              Bachelors
            </button>
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                tenantPreference === "Company" ? "bg-gray-200" : ""
              }`}
              onClick={() => setTenantPreference("Company")}
            >
              Company
            </button>
          </div>
        </div>

        {/* Availability */}
        <div>
          <label htmlFor="availability" className="text-gray-700 font-medium">
            Availability:
          </label>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                availability === "Immediate" ? "bg-gray-200" : ""
              }`}
              onClick={() => setAvailability("Immediate")}
            >
              Immediate
            </button>
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                availability === "Within 15 Days" ? "bg-gray-200" : ""
              }`}
              onClick={() => setAvailability("Within 15 Days")}
            >
              Within 15 Days
            </button>
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                availability === "Within 30 Days" ? "bg-gray-200" : ""
              }`}
              onClick={() => setAvailability("Within 30 Days")}
            >
              Within 30 Days
            </button>
            <button
              type="button"
              className={`border border-gray-300 rounded-md px-3 py-2 ${
                availability === "After 30 Days" ? "bg-gray-200" : ""
              }`}
              onClick={() => setAvailability("After 30 Days")}
            >
              After 30 Days
            </button>
          </div>
        </div>

        {/* Property Description */}
        <div>
          <label
            htmlFor="propertyDescription"
            className="text-gray-700 font-medium"
          >
            Property Description:
          </label>
          <textarea
            id="propertyDescription"
            name="propertyDescription"
            value={propertyDescription}
            onChange={(e) => setPropertyDescription(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-gray-600 focus:outline-none focus:ring focus:ring-blue-300 w-full h-24"
          ></textarea>
        </div>

        {/* Submit Button */}
        {/* <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button> */}
      </form>
    </div>
  );
}
