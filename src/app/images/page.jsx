"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ImagePage() {
  const [images, setImages] = useState([]);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const router = useRouter();

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Images uploaded:", images);
    setIsOverlayVisible(true); // Show overlay on form submission
  };

  const handleContinue = () => {
    setIsOverlayVisible(false);
    router.push("/conformation"); // Redirect to the confirmation page
  };

  return (
    <div className="relative">
      <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2 mt-4">
              Add Photos / videos to attract more tenants!
            </label>
            <p className="text-gray-600 mb-4 mt-12">
              Add Photos of living room, bedroom, bathroom, floor, doors,
              kitchen, balcony, location map, neighborhood, etc
            </p>
            <div className="flex justify-center mt-8">
              <div className="border border-gray-300 rounded-lg p-4 bg-white flex flex-col items-center justify-center w-[820px] h-[309px]">
                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center justify-center cursor-pointer"
                >
                  <svg
                    className="w-12 h-12 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 012-2h8a2 2 0 012 2v2h-2V3H6v14h6v2H6a2 2 0 01-2-2V3zm12 6a2 2 0 012 2v6a2 2 0 01-2 2h-4a2 2 0 01-2-2v-6a2 2 0 012-2h4zm-1 8a1 1 0 100-2 1 1 0 000 2zm1-5h-4v6h4v-6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-blue-500 mt-2">+ Add Photos Now</span>
                  <input
                    id="image-upload"
                    type="file"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
                {images.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={URL.createObjectURL(image)}
                        alt="Property"
                        className="h-32 w-32 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between bg-[#122B49] text-gray-100 font-medium p-2 rounded-lg mt-6">
            <p className="text-left">
              Need help? Call <span className="font-bold">9999999999</span>
            </p>
            <button
              type="submit"
              className="bg-[#122B49] border border-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save & Post
            </button>
          </div>
        </form>
      </div>

      {isOverlayVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative bg-white rounded-lg p-8 shadow-lg text-center w-full max-w-md">
            <button
              onClick={() => setIsOverlayVisible(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <p className="text-lg font-semibold mb-4">
              POST PROPERTY ON DYLAN ESTATE?
            </p>
            <button
              onClick={handleContinue}
              className="bg-[#122B49] text-white font-bold py-2 px-4 rounded mt-4"
            >
              Continue
            </button>
            <p className="text-sm mt-4">
              By continuing you agree to our{" "}
              <a href="#" className="text-blue-500">
                Terms and Conditions
              </a>{" "}
              &{" "}
              <a href="#" className="text-blue-500">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
