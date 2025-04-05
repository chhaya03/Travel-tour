import React from "react";
import { useSearchParams } from "react-router-dom";

const Results = () => {
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city");
  const date = searchParams.get("date");
  const price = searchParams.get("price");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-200 to-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Trip Details</h2>
        <p className="text-lg">
          <strong>City:</strong> {city}
        </p>
        <p className="text-lg">
          <strong>Date:</strong> {date}
        </p>
        <p className="text-lg">
          <strong>Max Price:</strong> ${price}
        </p>

        {/* You can later fetch trips based on this data from backend */}
        <p className="mt-6 text-sm text-gray-500">
          Trip details based on your search will be displayed here.
        </p>
      </div>
    </div>
  );
};

export default Results;
