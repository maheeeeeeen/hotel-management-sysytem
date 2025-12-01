import { IoLocationOutline } from "react-icons/io5";
import React from "react";

import Button from "./Button";
import { Heading1, Heading2 } from "./Typography";
export function RoomCard({ img, title, ameneties, price, space, type }) {
  const statusColors = {
    available: "bg-green-500",
    occupied: "bg-red-500",
    cleaning: "bg-yellow-400",
    maintenance: "bg-gray-500",
  };
  return (
    <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mx-auto">
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
          {title} Room
        </h2>
       
        <p className="text-gray-600 text-sm sm:text-base mb-4">
          <span className="font-bold">Ameneties: </span> {ameneties}
        </p>
        <p className="`absolute  w-20 text-center top-3 left-3 text-white text-xs sm:text-sm font-semibold px-2 py-1 rounded-full bg-blue-300">
          {type}
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
          <p className="text-lg sm:text-xl font-semibold text-gray-800">
            Rs. {price}
          </p>
          <Button text="View details" />
        </div>
      </div>
    </div>
  );
}

export function GridCard({ icon, title, desc }) {
  return (
    <div className="flex flex-col justify-center items-center text-center bg-yellow-200 p-6 sm:p-8 rounded-lg shadow-lg transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
      {/* Icon */}
      <div className="text-4xl sm:text-5xl mb-4">{icon}</div>

      {/* Title */}
      <Heading2
        text={title}
        className="text-xl sm:text-2xl font-semibold mb-2"
      />

      {/* ameneties */}
      <p className="text-sm sm:text-base text-gray-700">{desc}</p>
    </div>
  );
}
