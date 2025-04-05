import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleBooking = () => {
    if (name.trim() === "") {
      alert("Please enter your name before booking.");
      return;
    }
    navigate("/booked", {
      state: { name },
    });
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm text-white">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-800 rounded-md duration-200 w-[300px]">
            {" "}
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold  text-#0287a8">
                  Book Your Trip
                </h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer "
                  onClick={() => setOrderPopup(false)}
                />
              </div>
            </div>
            {/* Body */}
            <div className="mt-4">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <input
                type="email"
                placeholder="email"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <div className="flex justify-center">
                <button
                  onClick={handleBooking}
                  style={{
                    background: "linear-gradient(to right, #0287a8, #00c3c7)",
                  }}
                  className=" hover:scale-105 duration-200 text-white py-1 px-4 rounded-full "
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
