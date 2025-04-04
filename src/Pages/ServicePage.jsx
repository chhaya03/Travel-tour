import React from "react";
import img1 from "../assets/places/city-tour.webp";
import img2 from "../assets/places/adventure-trips.avif";
import img3 from "../assets/places/luxury.jpg";
import img4 from "../assets/places/cruise.jpg";
import img5 from "../assets/places/airport.jpg";
const services = [
  {
    title: "City Tours",
    description: "Explore the best city attractions with our guided tours.",
    icon: "🏙️",
    img: img1,
  },
  {
    title: "Adventure Trips",
    description: "Experience thrilling adventures in breathtaking locations.",
    icon: "⛰️",
    img: img2,
  },
  {
    title: "Luxury Travel",
    description:
      "Enjoy premium travel experiences with top-notch accommodations.",
    icon: "✨",
    img: img3,
  },
  {
    title: "Cruise Packages",
    description: "Relax and enjoy world-class cruises to exotic destinations.",
    icon: "🚢",
    img: img4,
  },
  {
    title: "Airport Transfers",
    description: "Hassle-free airport pick-up and drop-off services.",
    icon: "🚖",
    img: img5,
  },
];

const ServicePage = () => {
  return (
    <div className=" text-center p-8 bg-gray-100  mt-25">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 w-64 text-center transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2">
              {service.icon} {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>

            <img src={service.img} className="bg-cover bg-center h-60 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
