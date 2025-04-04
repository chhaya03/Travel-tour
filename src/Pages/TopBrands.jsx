import React from "react";

const brands = [
  {
    name: "Expedia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Expedia_2012_logo.svg/2560px-Expedia_2012_logo.svg.png",
    description:
      "One of the world's leading travel platforms, offering flights, hotels, and packages.",
  },
  {
    name: "Booking.com",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgKMSnQCvsdqXFHl1SDKPjRQQ3eujTGJruQ&s",
    description:
      "A trusted online travel agency for hotel bookings and accommodations worldwide.",
  },
  {
    name: "TripAdvisor",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8qOFUdnfys8TdpaksJuu7yV7BPOuR3f24g&s",
    description:
      "The world's largest travel site with reviews, recommendations, and bookings.",
  },
  {
    name: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png",
    description:
      "A global marketplace for unique stays and experiences hosted by locals.",
  },
  {
    name: "Skyscanner",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_2BTZyp_jeg0UJ7PzJ5bWv21-w5Jc1LJsQ&s",
    description:
      "A powerful search engine for comparing flights, hotels, and car rentals worldwide.",
  },
];

const TopBrands = () => {
  return (
    <div className="text-center p-8 bg-gray-100 mt-25">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Top Travel Brands
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 w-72 text-center transition-transform transform hover:scale-105"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-32 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{brand.name}</h3>
            <p className="text-gray-600">{brand.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;
