import React, { useEffect, useState } from "react";

const Location = () => {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting location:", error);
        alert("Please allow location access to see your map.");
      }
    );
  }, []);

  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className="">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl mt-25">
            Your Current Location
          </h1>

          <div className="rounded-xl">
            {coords ? (
              <iframe
                src={`https://www.google.com/maps?q=${coords.lat},${coords.lng}&z=15&output=embed`}
                width="100%"
                height="360"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ borderRadius: "20px" }}
              ></iframe>
            ) : (
              <div className="text-gray-600 p-4 bg-white rounded-md shadow-md">
                Fetching your location...
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
