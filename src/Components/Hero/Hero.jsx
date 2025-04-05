import React from "react";
import Select from "react-select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const cityOptions = [
  { value: "Dubai", label: "Dubai" },
  { value: "New York", label: "New York" },
  { value: "London", label: "London" },
  { value: "Paris", label: "Paris" },
  { value: "Tokyo", label: "Tokyo" },
];

const Hero = () => {
  const [priceValue, setPriceValue] = React.useState(30);
  const [selectedCity, setSelectedCity] = useState(null);

  const navigate = useNavigate();

  const handleSearch = () => {
    if (!selectedCity) {
      alert("Please select a city.");
      return;
    }
    const date = document.getElementById("destination").value;
    if (!date) {
      alert("Please select a date.");
      return;
    }

    // Navigate to results with search params
    navigate(
      `/results?city=${selectedCity.value}&date=${date}&price=${priceValue}`
    );
  };

  // Custom styles to remove internal borders
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "none", // Remove default border
      boxShadow: "none", // Remove focus ring
      backgroundColor: "#f3f4f6", // Match Tailwind's gray-100
      borderRadius: "9999px", // Fully rounded
      padding: "4px", // Padding inside
      "&:hover": {
        border: "none",
      },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#0287a8", // Custom dropdown arrow color
    }),
  };

  return (
    <div className=" bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-#0287a8/10">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-white">
            <p data-aos="fade-up" className="text-sm">
              Our Packages
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-3xl"
            >
              Search Your Destination
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-4 bg-white rounded-md p-4 relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Searh your Destination
                </label>

                <Select
                  options={cityOptions}
                  value={selectedCity}
                  onChange={setSelectedCity}
                  placeholder="Select a city..."
                  className="w-full bg-gray-100 my-2 range accent-#0287a8 focus:outline-none focus:border border-1 rounded-full p-2"
                  styles={customStyles}
                />
              </div>
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Date
                </label>
                <input
                  type="date"
                  name="destination"
                  id="destination"
                  className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-#0287a8 focus:outline outline-1 p-2"
                />
              </div>
              <div>
                <label htmlFor="destination" className="opacity-70 block">
                  <div className="w-full flex justify-between items-center">
                    <p>Max Price</p>
                    <p className="font-bold text-xl">$ {priceValue}</p>
                  </div>
                </label>
                <div className=" bg-gray-100 rounded-full p-2 flex items-center justify-center ">
                  <input
                    style={{
                      background: "linear-gradient(to right, #0287a8, #00c3c7)",
                    }}
                    type="range"
                    name="destination"
                    id="destination"
                    className="appearance-none w-full h-2 rounded-full my-2"
                    min="150"
                    max="1000"
                    value={priceValue}
                    step="10"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button
              onClick={handleSearch}
              style={{
                background: "linear-gradient(to right, #0287a8, #00c3c7)",
              }}
              className=" text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2"
            >
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
