import React from "react";
import { useLocation } from "react-router-dom";

const Booked = () => {
  const location = useLocation();
  const name = location.state?.name || "Traveler"; // default if name not provided

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 to-green-500">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          🎉 Congratulations! {name}
        </h1>
        <p className="text-lg text-gray-700">
          Your trip has been successfully booked.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          We wish you a pleasant and safe journey!
        </p>
      </div>
    </div>
  );
};

export default Booked;
