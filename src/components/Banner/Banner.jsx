import React from "react";
import { useNavigate } from "react-router-dom";
import bannerImage from "../../assets/banner.jpg"; // Adjust path as needed

const Banner = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate("/dashboard"); // Redirects to the dashboard page
  };

  return (
    <div className="relative bg-[#9538E2] py-6">
      <div className="flex flex-col items-center text-center text-white">
        <h1 className="text-5xl font-extrabold mb-4">
          Upgrade Your Tech Accessorize with <span className="text-white">Gadget Heaven Accessories</span>
        </h1>
        <p className="text-lg mb-8 max-w-2xl">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button
          onClick={handleShopNowClick}
          className="bg-white text-purple-700 px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-100 transition duration-300"
        >
          Shop Now
        </button>
      </div>

      <div className="flex justify-center mt">
        <div className="relative">
          <img
            src={bannerImage}
            alt="Tech Accessory"
            className="rounded-lg shadow-lg max-w-2xl transform translate-y-1/4"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
