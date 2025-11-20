import React from "react";

import Button from "./Button";
export function RoomCard({ img, title, description, price, space }) {
  const statusColors = {
    available: "bg-green-500",
    occupied: "bg-red-500",
    cleaning: "bg-yellow-400",
    maintenance: "bg-gray-500",
  };
  return (
    <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-sm xl:max-w-md bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mx-auto">
      {/* Image */}
      <div className="relative">
        <img
          src={img}
          alt="Hotel"
          className="w-full h-48 sm:h-56 md:h-64 lg:h-48 xl:h-56 object-cover"
        />
        <span
          className={`absolute top-3 left-3 text-white text-xs sm:text-sm font-semibold px-2 py-1 rounded-full ${
            statusColors[space] || "bg-gray-400"
          }`}
        >
          {space.charAt(0).toUpperCase() + space.slice(1)}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
          {title}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-4">{description}</p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
          <p className="text-lg sm:text-xl font-semibold text-gray-800">
            {price}
          </p>
          <Button text="View details" />
        </div>
      </div>
    </div>
  );
}
