"use client";

import React, { useState } from "react";

export default function PricePage() {
  const [rent, setRent] = useState("");
  const [security, setSecurity] = useState("");
  const [maintenance, setMaintenance] = useState("");
  const [extraMaintenance, setExtraMaintenance] = useState("");
  const [additionalPricingDetails, setAdditionalPricingDetails] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "Form submitted:",
      rent,
      security,
      maintenance,
      extraMaintenance,
      additionalPricingDetails
    );
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="rent" className="text-gray-700 font-medium">
              Rent <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <span className="mr-2">₹</span>
              <input
                type="text"
                id="rent"
                name="rent"
                value={rent}
                onChange={(e) => setRent(e.target.value)}
                className="flex-grow focus:outline-none"
                placeholder="Rent                           /Month"
              />
            </div>
          </div>
          <div>
            <label htmlFor="security" className="text-gray-700 font-medium">
              Security <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <span className="mr-2">₹</span>
              <input
                type="text"
                id="security"
                name="security"
                value={security}
                onChange={(e) => setSecurity(e.target.value)}
                className="flex-grow focus:outline-none"
                placeholder="Security                    /Month"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="extraMaintenance"
              className="text-gray-700 font-medium"
            >
              Maintenance <span className="text-red-500">*</span>
            </label>
            <select
              id="extraMaintenance"
              name="extraMaintenance"
              value={extraMaintenance}
              onChange={(e) => setExtraMaintenance(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-gray-600 focus:outline-none focus:ring focus:ring-blue-300 w-full"
            >
              <option value="">Select Maintenance</option>
              <option value="extraMaintenance">Extra Maintenance</option>
              <option value="basicMaintenance">Basic Maintenance</option>
            </select>
          </div>
          <div>
            <label htmlFor="maintenance" className="text-gray-700 font-medium">
              Maintenance <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <span className="mr-2">₹</span>
              <input
                type="text"
                id="maintenance"
                name="maintenance"
                value={maintenance}
                onChange={(e) => setMaintenance(e.target.value)}
                className="flex-grow focus:outline-none"
                placeholder="Maintenance"
              />
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                <select
                  id="maintenancePeriod"
                  name="maintenancePeriod"
                  className="ml-2 border-none focus:outline-none"
                >
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="additionalPricingDetails"
            className="text-gray-700 font-medium"
          >
            Additional Pricing details to convey to agent?
          </label>
          <textarea
            id="additionalPricingDetails"
            name="additionalPricingDetails"
            value={additionalPricingDetails}
            onChange={(e) => setAdditionalPricingDetails(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-gray-600 focus:outline-none focus:ring focus:ring-blue-300 w-full"
            placeholder="Do you have any concerns regarding pricing of your property? Add your concerns here or call us."
            rows="4"
          ></textarea>
        </div>
      </form>
    </div>
  );
}
