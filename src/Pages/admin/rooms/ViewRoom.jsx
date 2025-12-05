import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Star,
  Wifi,
  Tv,
  Coffee,
  Wind,
  Dumbbell,
  Utensils,
  MapPin,
  Bed,
  Users,
  Shield,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from "lucide-react";
import { RoomService } from "../../../services/RoomService";
import Button from "../../../Components/Button";
import { Heading2 } from "../../../Components/Typography";

// If you don't want to use Lucide icons, you can remove them and use text instead

export default function ViewRoom() {
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const service = new RoomService();
  const { id } = useParams();
  const [openBooking, setOpenBooking] = useState(false);

  async function getRoomByid(id) {
    try {
      setLoading(true);
      setError(null);
      const res = await service.getRoomById(id);
      setRoom(res);
    } catch (error) {
      console.error("Error fetching room", error);
      setError("Failed to load room details. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getRoomByid(id);
  }, [id]);

  const nextImage = () => {
    if (room?.ImageUrl?.length) {
      setActiveImageIndex((prev) =>
        prev === room.ImageUrl.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (room?.ImageUrl?.length) {
      setActiveImageIndex((prev) =>
        prev === 0 ? room.ImageUrl.length - 1 : prev - 1
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading room details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-4">
            <p>{error}</p>
          </div>
          <button
            onClick={() => getRoomByid(id)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">No room found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto    space-y-8">
      <div className="flex items-center justify-between mb-5">
        <Heading2 text="Room Details" className="text-gray-800" />
      </div>

      {room.ImageUrl && room.ImageUrl.length > 0 && (
        <div className="relative group">
          <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {room.ImageUrl.map((img, index) => (
              <div key={index} className="relative flex-shrink-0">
                <img
                  src={img}
                  alt={`Room image ${index + 1}`}
                  className="w-80 h-56 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {index + 1}/{room.ImageUrl.length}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Room Status Badge */}

      {/* Main Content */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Room Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Room {room.roomNumber}
            </h1>

            <div className="text-right">
              <p className="text-3xl font-bold text-blue-600">
                Rs {room.price}
                <span className="text-lg text-gray-500">/night</span>
              </p>
              <p className="text-gray-500 text-sm">Inclusive of taxes</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Floor {room.floor}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>2 Adults</span>
            </div>
            <div className="flex items-center">
              <Bed className="w-5 h-5 mr-2" />
              <span>1 King Bed</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Description
            </h2>
            <p className="text-gray-700 leading-relaxed">{room.description}</p>
          </div>
        </div>
        {(room.mealPlan || room.mealPlanDescription) && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Dining</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
              <div className="flex items-start mb-4">
                <Utensils className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {room.mealPlan || "Meal Plan"}
                  </h3>
                  {room.mealPlanDescription && (
                    <p className="text-gray-700">{room.mealPlanDescription}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Details Card */}
        <div className="bg-white md:w-1/2 w-full rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Room Details
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Room Number</span>
              <span className="font-semibold">{room.roomNumber}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Floor</span>
              <span className="font-semibold">{room.floor}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Status</span>
              <span
                className={`font-semibold ${
                  room.status === "available"
                    ? "text-green-600"
                    : room.status === "occupied"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {room.status?.charAt(0).toUpperCase() + room.status?.slice(1)}
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Meal Plan</span>
              <span className="font-semibold">
                {room.mealPlan || "Not specified"}
              </span>
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="mb-8">
          {room.amenities && room.amenities.length > 0 && (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-3 border-b border-gray-100 flex items-center space-x-2">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Amenities</span>
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {room.amenities.map((a, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-700">{a}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

{
  /* Meal Plan Section */
}
