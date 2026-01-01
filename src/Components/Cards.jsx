import { IoLocationOutline } from "react-icons/io5";
import React from "react";

import Button from "./Button";
import { Heading1, Heading2 } from "./Typography";
import { Link } from "react-router-dom";
import { Edit } from "lucide-react";
export function RoomCard({ img, title, ameneties, price, space, link }) {
  const statusColors = {
    available: "bg-green-500",
    occupied: "bg-red-500",
    cleaning: "bg-yellow-400",
    maintenance: "bg-gray-500",
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mx-auto flex flex-col justify-between">
      {/* Image */}
      <div className="relative">
        <img
          src={img}
          alt="Hotel"
          className="w-full h-48 sm:h-56 md:h-64 lg:h-48 xl:h-56 object-cover"
        />
        {/* <span
          className={`absolute top-3 left-3 text-white text-xs sm:text-sm font-semibold px-2 py-1 rounded-full ${
            statusColors[space] || "bg-gray-400"
          }`}
        >
          {space.charAt(0).toUpperCase() + space.slice(1)}
        </span> */}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
            {title} Room
          </h2>

          {/* Amenities badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {ameneties?.map((item, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs sm:text-sm px-2 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Price & Button pinned to bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mt-4">
          <p className="text-lg sm:text-xl font-semibold text-gray-800">
            Rs. {price}
          </p>
          <Link to={link}>
            <Button text="View details" />
          </Link>
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
export function InfoCard({ icon, title, description, contact, color  }) {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-neutral-100 hover:scale-[1.02]">
      <div
        className={`inline-flex p-3 rounded-lg bg-linear-to-br ${color} text-white mb-4`}
      >
        {icon}
      </div>
      <h3 className="font-bold text-neutral-800 mb-1">{title}</h3>
      <p className="text-neutral-500 text-sm mb-2">{description}</p>
      <p className="font-medium text-neutral-900 group-hover:text-blue-600 transition-colors">
        {contact}
      </p>
    </div>
  );
}

export function InfoCard2({ icon, title, description, color }) {
  return (
    <div className="flex items-start space-x-4">
      <div className={`text-white p-3  rounded-lg bg-linear-to-br ${color}`}>{icon}</div>
      <div>
        <h3 className="font-semibold text-neutral-800">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
    </div>
  );
}

export function AdminCard({ icon, title, description, contact, onClick , color}) {
  return (
   <div className="w-xl mx-auto bg-white/80 backdrop-blur-md border border-gray-100 shadow-md rounded-xl p-6 hover:shadow-lg transition">
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-3 text-white  rounded-lg  text-xl bg-linear-to-br ${color}`}>
          {icon}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    <div className="flex justify-between ">

      <div className="text-sm font-medium text-gray-700">
        {contact}
      </div>
      <button onClick={onClick}><Edit/></button>
    </div>
    </div>
  );
}
