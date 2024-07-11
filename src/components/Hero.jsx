"use client";

import React, { useState } from "react";

export default function Hero() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(""); // Add state for phoneNumber
  const [otp, setOtp] = useState(""); // Add state for otp

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section className="bg-blue-900 text-white py-20 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="text-left w-full lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            Sell or Rent your Property For Free
          </h1>
          <p className="text-lg mb-8">
            Whether you're ready to sell or looking for answers, we'll guide you
            with data and expertise specific to your needs.
          </p>
          <div className="">
            <h3 className="text-xl font-bold mb-4">
              Upload your property in 4 simple steps
            </h3>
            <ul className="list-none space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 text-2xl mr-2">✔</span>
                Add your properties Basic Details
              </li>
              <li className="flex items-center">
                <span className="text-green-500 text-2xl mr-2">✔</span>
                Add property Location
              </li>
              <li className="flex items-center">
                <span className="text-green-500 text-2xl mr-2">✔</span>
                Add property Features and amenities
              </li>
              <li className="flex items-center">
                <span className="text-green-500 text-2xl mr-2">✔</span>
                Add Price details
              </li>
              <li className="flex items-center">
                <span className="text-green-500 text-2xl mr-2">✔</span>
                Add your best Property Shots
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white text-black p-6 rounded shadow-lg w-full lg:w-1/2 h-96 overflow-auto">
          {formSubmitted ? (
            <div>
              <h2 className="text-2xl font-bold mb-4 bg-gray-200 rounded-t-lg py-2 px-4">
                LET'S GET YOU STARTED!
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="text-center">
                  <label className="block font-bold mb-2">
                    Enter OTP sent on {phoneNumber}
                  </label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full p-2 border rounded text-center"
                    placeholder="000000"
                  />
                  <div className="flex justify-between mt-2">
                    <a href="#" className="text-blue-900 underline">
                      Change
                    </a>
                    <a href="#" className="text-blue-900 underline">
                      Resend OTP
                    </a>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-blue-900 text-white py-2 px-4 rounded w-full mt-4"
                >
                  NEXT
                </button>
              </form>
              <p className="mt-4 text-sm text-center bg-gray-200 rounded-b-lg py-2">
                Need Help? Call 9999999999
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mb-4 bg-gray-200 rounded-t-lg py-2 px-4">
                LET'S GET YOU STARTED!
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block font-bold">I am:</label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="type"
                        value="owner"
                        className="form-radio"
                      />
                      <span>Owner</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="type"
                        value="builder"
                        className="form-radio"
                      />
                      <span>Builder</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block font-bold" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border rounded"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label className="block font-bold" htmlFor="country">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="w-full p-2 border rounded"
                  >
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold" htmlFor="phone">
                    Phone
                  </label>
                  <div className="flex">
                    <select
                      className="border rounded-l p-2"
                      value={phoneNumber} // Bind the state to the select element
                      onChange={(e) => setPhoneNumber(e.target.value)} // Update state on change
                    >
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+61">+61</option>
                    </select>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="w-full p-2 border rounded-r"
                      placeholder="000-000-0000"
                    />
                  </div>
                </div>
                <div className="text-center font-bold">OR</div>
                <div>
                  <label className="block font-bold" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border rounded"
                    placeholder="email"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-900 text-white py-2 px-4 rounded w-full"
                >
                  NEXT
                </button>
              </form>
              <p className="mt-4 text-sm text-center bg-gray-200 rounded-b-lg py-2">
                Need Help? Call 9999999999
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
