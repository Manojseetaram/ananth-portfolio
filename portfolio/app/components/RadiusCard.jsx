import React from "react";
import "../globals.css"; // Import global styles

const ImageCard = ({ image, label }) => {
  return (
    <div className="relative w-64 h-80 bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Background Image with Mask */}
      <div
        className="absolute inset-0 bg-cover bg-center mask-inverted"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Label & Arrow Button */}
      <div className="absolute bottom-4 left-4">
        <span className="bg-white text-gray-800 text-sm font-bold py-1 px-3 rounded-full shadow-md">
          {label}
        </span>
      </div>
      <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md">
        ➜
      </button>
    </div>
  );
};

export default ImageCard;
